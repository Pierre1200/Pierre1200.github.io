# pierre1200.github.io

Mon site portfolio personnel — <https://pierre1200.github.io>

Développeur full stack & IA agentic, à Rodez. Recherche une alternance pour
novembre 2026.

## Choix techniques

Site statique, sans framework, sans dépendance et sans étape
de build : un fichier HTML, une feuille de style, un PDF.

- **HTML sémantique** — `header`, `nav`, `main`, `section`, `article`, `footer`
- **Responsive** — mise en page fluide en `clamp()` et grilles `auto-fit`, sans
  media query de largeur fixe pour l'essentiel
- **Thème clair et sombre** — via `prefers-color-scheme`, jetons de couleur en
  propriétés personnalisées CSS
- **Accessibilité** — lien d'évitement, styles de focus visibles, hiérarchie de
  titres continue, contrastes vérifiés, `prefers-reduced-motion` respecté
- **Zéro JavaScript** hormis une ligne pour l'année du pied de page

## Structure

```
index.html    le site (une seule page, navigation par ancres)
style.css     la feuille de style
assets/       le CV au format PDF
```

## Développement local

Aucune installation nécessaire — ouvrir `index.html` dans un navigateur.
Pour servir en local :

```bash
python3 -m http.server 8000
```

## Déploiement

Hébergé par GitHub Pages depuis la branche `main`. Chaque `push` met le site à jour.
