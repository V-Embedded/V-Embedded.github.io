---
title: Products
layout: default
permalink: /products/
---

<h1>Products</h1>

{% assign products = site.products | sort: "name" %}
{% for product in products %}
  <article>
    <p>{{ product.category }}</p>
    <h2><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
    <p>{{ product.summary }}</p>
  </article>
{% endfor %}
