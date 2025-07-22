---
layout: default
title: Our Products
permalink: /products/
---

<div class="container my-5">
  <h1 class="mb-4">{{ page.title }}</h1>
  <div class="row row-cols-1 row-cols-md-3 g-4">

    {% for product in site.products %}
    <div class="col">
      <div class="card h-100">
        {% if product.image %}
        <img src="{{ product.image | relative_url }}" class="card-img-top" alt="{{ product.title }}">
        {% endif %}
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.excerpt | strip_html | truncate: 100 }}</p>
        </div>
        <div class="card-footer bg-white border-top-0">
          <a href="{{ product.url | relative_url }}" class="btn btn-primary w-100">More Info</a>
        </div>
      </div>
    </div>
    {% endfor %}

  </div>
</div>