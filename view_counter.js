function updateViewCount() {
    let views = localStorage.getItem('viewCount') || 0;
    views = parseInt(views) + 1;
    localStorage.setItem('viewCount', views);
	console.log("Views: " + views);
}

// Esegui la funzione quando la pagina è caricata
window.addEventListener('DOMContentLoaded', () => {
    updateViewCount();
});
