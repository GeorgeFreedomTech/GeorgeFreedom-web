
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

document.addEventListener('DOMContentLoaded', async () => {
    const blocks = document.querySelectorAll(
        'pre > code[data-lang="mermaid"]'
    );

    if (!blocks.length) return;

    const diagrams = [];

    blocks.forEach((block) => {
        const container = document.createElement('div');
        container.className = 'mermaid';
        container.textContent = block.textContent;

        const target = block.tagName.toLowerCase() === 'code'
            ? block.parentElement
            : block;

        target.replaceWith(container);
        diagrams.push(container);
    });

    function getTheme() {
        return document.documentElement.dataset.theme ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light');
    }

    async function renderDiagrams() {
        mermaid.initialize({
            startOnLoad: false,
            theme: getTheme() === 'dark' ? 'dark' : 'default',
            securityLevel: 'strict'
        });

        await mermaid.run({
            nodes: diagrams
        });
    }

    await renderDiagrams();

    const observer = new MutationObserver(() => {
        renderDiagrams();
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
});
