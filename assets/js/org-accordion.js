document.addEventListener('DOMContentLoaded', () => {
    const orgCardHeads = document.querySelectorAll('.org-card-head');
    orgCardHeads.forEach(head => {
        head.addEventListener('click', function() {
            if (this.parentElement) {
                this.parentElement.classList.toggle('open');
            }
        });
    });
});
