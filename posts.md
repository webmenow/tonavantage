---
title: Just read it
layout: default
permalink: /posts/
---

{% for post in collections.posts reversed %}
<article>
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <small>{{ post.date | date: "%d.%m.%Y" }}</small>
  {% if post.data.cover %}<img src="{{ post.data.cover }}" alt="">{% endif %}
  <p>{{ post.content | strip_html | truncate: 200 }}</p>
</article>
{% endfor %}
