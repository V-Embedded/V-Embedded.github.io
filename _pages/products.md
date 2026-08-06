---
title: Products
layout: default
permalink: /products/
---

<section class="page-intro">
  <p class="eyebrow">Learning kits</p>
  <h1>Hardware for hands-on learning</h1>
  <p>Purpose-built kits that make it easier to move from a concept to a working prototype.</p>
</section>

{% assign products = site.products | sort: "name" %}
<div class="content-grid">
{% for product in products %}
  <article class="content-card">
    <p class="card-label">{{ product.category }}</p>
    <h2><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
    <p>{{ product.summary }}</p>
    <a class="card-link" href="{{ product.url | relative_url }}">See kit <span aria-hidden="true">&rarr;</span></a>
  </article>
{% endfor %}
</div>
