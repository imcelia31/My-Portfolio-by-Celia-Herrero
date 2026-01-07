// Folder Component - Vanilla JS
document.addEventListener('DOMContentLoaded', () => {
    const folders = document.querySelectorAll('.folder');

    folders.forEach(folder => {
        const papers = folder.querySelectorAll('.paper');
        let isOpen = false;

        // Click para abrir/cerrar carpeta
        folder.addEventListener('click', () => {
            isOpen = !isOpen;
            folder.classList.toggle('open', isOpen);
            
            if (!isOpen) {
                // Reset paper offsets cuando se cierra
                papers.forEach(paper => {
                    paper.style.setProperty('--magnet-x', '0px');
                    paper.style.setProperty('--magnet-y', '0px');
                });
            }
        });

        // Efecto magnético en los papers
        papers.forEach((paper, index) => {
            paper.addEventListener('mousemove', (e) => {
                if (!isOpen) return;
                
                const rect = paper.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const offsetX = (e.clientX - centerX) * 0.15;
                const offsetY = (e.clientY - centerY) * 0.15;
                
                paper.style.setProperty('--magnet-x', `${offsetX}px`);
                paper.style.setProperty('--magnet-y', `${offsetY}px`);
            });

            paper.addEventListener('mouseleave', () => {
                paper.style.setProperty('--magnet-x', '0px');
                paper.style.setProperty('--magnet-y', '0px');
            });
        });
    });
});
