---
title: Home
layout: default
permalink: /
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Embedded systems education</p>
    <h1>Build ideas that <span>interact with the world.</span></h1>
    <p class="hero-lede">Learn embedded C, sensors, and hardware design through clear lessons and project-ready learning kits.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/tutorials/' | relative_url }}">Start learning</a>
      <a class="button button-secondary" href="{{ '/products/' | relative_url }}">Explore kits</a>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true">
    <img src="{{ '/assets/images/logo.svg' | relative_url }}" alt="V Embedded logo">
    <span class="signal signal-one"></span>
    <span class="signal signal-two"></span>
    <span class="signal signal-three"></span>
  </div>
</section>

<section class="content-section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Learning kits</p>
      <h2>Choose your next build</h2>
    </div>
    <a class="text-link" href="{{ '/products/' | relative_url }}">View all products <span aria-hidden="true">&rarr;</span></a>
  </div>

  <div class="content-grid">
{% for product in site.products %}
  <article class="content-card">
    <p class="card-label">{{ product.category }}</p>
    <h2><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
    <p>{{ product.summary }}</p>
    <a class="card-link" href="{{ product.url | relative_url }}">See kit <span aria-hidden="true">&rarr;</span></a>
  </article>
{% endfor %}
  </div>
</section>
