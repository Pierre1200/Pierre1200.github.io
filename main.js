// Année du pied de page. Dans un fichier séparé plutôt qu'en ligne dans le HTML :
// la CSP du site interdit les scripts inline (script-src 'self').
document.getElementById('year').textContent = new Date().getFullYear();
