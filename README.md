# Weizhi Li's Academic Website

Personal academic website built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

## Content

- `_pages/About.md`: homepage, research summary, publications, awards, talks, and professional activities.
- `_config.yml`: profile details, external links, and site settings.
- `_data/navigation.yml`: section navigation.
- `assets/css/weizhi-content.css`: content-specific styling.
- `images/research/`: original diagrams and web-ready assets.
- `Li_CV.pdf`: current CV.

The research-summary diagram is rendered directly from its original PDF using the locally bundled PDF.js library. Its license is in `assets/vendor/pdfjs/LICENSE`.

## Local Preview

Use Ruby 3.4 and Bundler:

```sh
bundle install
bundle exec jekyll serve --url http://127.0.0.1:4000
```

## Deployment

Pushes to `master` build and deploy the website through `.github/workflows/pages.yml`. GitHub Pages uses GitHub Actions as its publishing source.

The Academic Pages template retains its original MIT license in `LICENSE`.
