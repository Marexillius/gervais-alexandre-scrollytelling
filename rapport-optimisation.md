# Site
[Lien vers mon site](https://alexandre.tim-momo.com)

# Rapport d’optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 10:40:02](https://pagespeed.web.dev/analysis/https-alexandre-tim-momo-com/b65unl5bz2?form_factor=desktop)

## Problème #1
### Largest Contentful Paint element
Mon plus gros élément présent dans ma page (le personnage du chapitre 1) prend trop de temps à charger.

### Action concrète pour résoudre le problème
Enlever le lazy loading à mon personnage qui est vers le début de ma page.

### Résultat
Le problème n'a pas été fixé et ça créé deux problèmes de plus.

## Problème #2
### Eliminate render-blocking resources
Les scripts GSAP bloque le temps de rendu du site car il doit allez chercher avec un URL les informations du script

### Action concrète pour résoudre le problème
Ajouter l'attribut "Defer" ou "Async" à la balise script

### Résultat
Le problème du rendu des éléments GSAP à été fixé et tout est encore fonctionnel

## Problème #3
### Document does not have a meta description
Ma page html n'a pas dans le head une balise meta qui contient comme contenu une description

### Action concrète pour résoudre le problème
J'ai ajouté une balise meta qui contient une description.

### Résultat
Le problème à été fixé pour optimiser le SEO (Search Engine Optimization).

## Rapport projet ScrollyTelling après optimisation
[Page Speed Insights - Rapport du 12 mai 2024, 11:28:25](https://pagespeed.web.dev/analysis/https-alexandre-tim-momo-com/rlo5md9qyr?form_factor=mobile)
