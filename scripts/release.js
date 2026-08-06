const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const root = path.resolve(__dirname, '..');
let deployDirectory;

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: ['inherit', 'pipe', 'inherit'],
    ...options,
  }).trim();
}

function requireMainBranch() {
  const branch = run('git', ['branch', '--show-current']);
  if (branch !== 'main') {
    throw new Error(`Releases must be run from main; current branch is ${branch || 'detached HEAD'}.`);
  }
}

function requireCleanAndCurrentMain() {
  if (run('git', ['status', '--porcelain'])) {
    throw new Error('Release requires a clean working tree. Commit or stash your changes first.');
  }

  run('git', ['fetch', 'origin', 'main']);
  if (run('git', ['rev-parse', 'HEAD']) !== run('git', ['rev-parse', 'origin/main'])) {
    throw new Error('Local main must match origin/main before releasing. Pull the latest changes first.');
  }
}

function packageVersion() {
  return JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;
}

function deploy(version) {
  deployDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'v-embedded-release-'));
  fs.cpSync(path.join(root, '_site'), deployDirectory, { recursive: true });
  fs.writeFileSync(path.join(deployDirectory, '.nojekyll'), '');

  run('git', ['init'], { cwd: deployDirectory });
  run('git', ['config', 'user.name', 'V Embedded Release'], { cwd: deployDirectory });
  run('git', ['config', 'user.email', 'release@v-embedded.github.io'], { cwd: deployDirectory });
  run('git', ['checkout', '-b', 'gh-pages'], { cwd: deployDirectory });
  run('git', ['add', '--all'], { cwd: deployDirectory });
  run('git', ['commit', '-m', `Deploy site version ${version}`], { cwd: deployDirectory });
  run('git', ['remote', 'add', 'origin', run('git', ['remote', 'get-url', 'origin'])], { cwd: deployDirectory });
  run('git', ['push', '--force', 'origin', 'gh-pages'], { cwd: deployDirectory });
}

function release() {
  requireMainBranch();
  requireCleanAndCurrentMain();

  run('node', ['scripts/validate-content.js']);
  run('bundle', ['exec', 'jekyll', 'doctor']);
  run('npm', ['run', 'build']);
  run('bundle', ['exec', 'htmlproofer', '_site', '--assume-extension', '--check-html', '--disable-external']);
  if (!fs.existsSync(path.join(root, '_site', 'index.html'))) {
    throw new Error('Build did not create _site/index.html.');
  }

  run('node', ['scripts/bump-site-version.js']);
  const version = packageVersion();
  const tag = `v${version}`;

  run('git', ['add', 'package.json', 'package-lock.json', '_data/site_version.yml']);
  run('git', ['commit', '-m', `Release ${tag}`]);
  run('git', ['push', 'origin', 'HEAD:main']);
  run('git', ['tag', '-a', tag, '-m', `Release ${tag}`]);
  run('git', ['push', 'origin', tag]);
  deploy(version);
  run('git', ['push', '--force', 'origin', 'HEAD:devel']);

  console.log(`Released ${tag} and deployed it to gh-pages.`);
}

try {
  release();
} finally {
  if (deployDirectory) fs.rmSync(deployDirectory, { recursive: true, force: true });
}