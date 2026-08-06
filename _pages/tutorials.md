---
title: Tutorials
layout: default
permalink: /tutorials/
---

<section class="page-intro">
  <p class="eyebrow">Tutorial library</p>
  <h1>Learn by building</h1>
  <p>Practical guides for making the jump from first principles to working embedded projects.</p>
</section>

<div class="content-grid tutorial-grid">
{% for post in site.posts %}
  <article class="content-card">
    <p class="card-label">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    <a class="card-link" href="{{ post.url | relative_url }}">Read tutorial <span aria-hidden="true">&rarr;</span></a>
  </article>
{% endfor %}
</div>
