---
title: Home
layout: default
permalink: /
---

Welcome to V Embedded. Below are our products.

{% for product in site.products %}
  <article>
    <h2><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
    <p>{{ product.summary }}</p>
  </article>
{% endfor %}
