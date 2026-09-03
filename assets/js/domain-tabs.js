document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.domain-stat-tab');
    const panes = document.querySelectorAll('.tab-content-pane');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
});
