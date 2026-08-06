const fs = require('fs');
const path = require('path');

const root = process.cwd();
const packagePath = path.join(root, 'package.json');
const lockfilePath = path.join(root, 'package-lock.json');
const versionPath = path.join(root, '_data', 'site_version.yml');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function nextPatchVersion(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    throw new Error(`Expected a semantic version, received: ${version}`);
  }

  return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function run() {
  const packageData = readJson(packagePath);
  const lockfileData = readJson(lockfilePath);
  const nextVersion = nextPatchVersion(packageData.version);

  packageData.version = nextVersion;
  lockfileData.version = nextVersion;
  lockfileData.packages[''].version = nextVersion;

  writeJson(packagePath, packageData);
  writeJson(lockfilePath, lockfileData);
  fs.writeFileSync(versionPath, `version: ${nextVersion}\n`);
  console.log(`Bumped site version to ${nextVersion}`);
}

run();