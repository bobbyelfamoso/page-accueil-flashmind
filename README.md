# FlashMind – Site d'accueil

Ce dépôt contient le site d'accueil du projet FlashMind, qui centralise les différents services de la plateforme (StudyFlow, Flashcards, etc.).

Le site présente les fonctionnalités du projet, les valeurs de l'équipe et permet d'accéder aux différents outils développés.

## Lien du site

https://page-accueil-flashmind.vercel.app

---

## Technologies utilisées

- React
- Vite
- JavaScript
- Vercel (hébergement et déploiement)
- API serverless (Vercel API Routes)

---

## Architecture

Le projet utilise une architecture frontend + API serverless.

Frontend React
      ↓
Vercel Hosting
      ↓
API serverless (/api/api)
      ↓
Services externes
   - StudyFlow
   - Flashcards Firebase

Le frontend est développé avec React et Vite et déployé automatiquement sur Vercel via GitHub.

Chaque modification du code déclenche automatiquement un nouveau build et un redéploiement.

---

## API

Une API serverless simple est disponible pour exposer les services de la plateforme.

Endpoint :

/api/api

Elle renvoie les informations des services au format JSON.

Exemple :

{
  "message": "API FlashMind",
  "services": [
    {
      "name": "StudyFlow",
      "url": "https://bobbyelfamoso.github.io/studyflow/"
    },
    {
      "name": "Flashcards",
      "url": "https://site-flash-card-b59c4.web.app"
    }
  ]
}

---

## Déploiement

Le projet est déployé sur Vercel.

Workflow :

Développeur
     ↓
Push GitHub
     ↓
Build automatique Vercel
     ↓
Déploiement

---

## Objectif du site

Le site d'accueil a pour objectif de :

- présenter le projet FlashMind
- centraliser l'accès aux services
- servir de portail vers les différents outils pédagogiques développés.

---

## Auteurs

Projet réalisé dans le cadre d’un projet étudiant.