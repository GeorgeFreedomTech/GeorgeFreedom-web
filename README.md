# GeorgeFreedom web

A personal website and blog for **George Freedom**, focused on technology, programming, digital resilience, education, and continuous learning.

Built as a lightweight, static website using **Zola**, with Markdown-based content, custom HTML templates, and custom CSS. 

Hosted on **GitHub Pages** and deployed automatically through **GitHub Actions**.

## Tech Stack

- **Zola** (Static site generator)
- **Markdown** (Content authoring)
- **Tera** (HTML templating engine)
- **HTML5** (Semantic page structure)
- **Custom CSS** (Layout, responsive design, and visual identity)
- **JavaScript** (Light/dark mode and interface functionality)
- **GitHub Pages** (Static hosting)
- **GitHub Actions** (Automated build and deployment)

## Key Features

- **Static & Lightweight:** No backend, database, user accounts, or unnecessary frameworks.
- **Markdown-Based Content:** Articles, tutorials, and static pages maintained as separate Markdown files.
- **Modular Architecture:** Custom templates separate content, layout, and reusable components.
- **Responsive Design:** Adapted for desktop, tablet, and mobile screens.
- **Light & Dark Mode:** User-selectable color themes.
- **Content Organization:** Blog articles and tutorials organized with tags and RSS feeds.
- **Code & Diagrams:** Syntax highlighting and Mermaid diagram support.
- **Automated Deployment:** Every commit to the main branch triggers a build and deployment through GitHub Actions.

## Architecture

The project uses a modular content structure. Each article or tutorial has its own directory containing its Markdown file and related images. Shared website assets and reusable HTML templates are maintained separately.

```text
GeorgeFreedom-web/
│
├── zola.toml                  # Zola configuration
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml         # Automated build and deployment
│
├── content/                   # Markdown source content
│   ├── _index.md              # Homepage
│   ├── about/
│   │   └── index.md
│   ├── contact/
│   │   └── index.md
│   └── blog/
│       ├── _index.md          # Blog section
│       ├── article-slug/
│       │   ├── index.md       # Article or tutorial
│       │   └── images/        # Related images
│       └── ...
│
├── templates/                 # Custom Tera templates
│   ├── base.html
│   ├── index.html
│   ├── page.html
│   ├── section.html
│   ├── article.html
│   └── partials/
│       ├── header.html
│       └── footer.html
│
└── static/                    # Shared static assets
    ├── images/
    ├── css/
    │   └── style.css
    └── js/
        └── theme.js
```

Zola generates the final website into the "public/" directory during the build process. This directory contains generated output and is not maintained as source content.

## Links

- Web: **[GeorgeFreedom.com](https://GeorgeFreedom.com)**
- LinkedIn: **[George Freedom](https://www.linkedin.com/in/georgefreedom/)**

## License

Copyright (c) 2026 Jiří Svoboda (George Freedom) / George Freedom Tech.

See [LICENSE.md](LICENSE.md) for the applicable license and usage terms.
