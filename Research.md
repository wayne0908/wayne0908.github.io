---
layout: page
title: Research
order: 2
permalink: /Research/
---
{% assign sorted_pages = site.pages | sort:"order" %}
{% for node in sorted_pages %}
  <li><a href="{{node.url}}">{{node.title}}</a></li>
{% endfor %}