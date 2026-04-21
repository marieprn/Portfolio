const projects = [
  {
    slug: 'kasa',
    title: 'Kasa',
    description: 'Refonte frontend d\'une plateforme de location immobilière',
    stack: ['React', 'React Router', 'Vite', 'SASS', 'JavaScript ES6+'],
    images: [
      '/images/Kasa/Kasa1.webp',
      '/images/Kasa/Kasa2.webp',
    ],
    github: 'https://github.com/marieprns/kasa',
    live: 'https://kasa-my-react.vercel.app',
    context: 'Mission freelance fictive pour Kasa, leader français de la location entre particuliers. L\'entreprise migrait son site legacy ASP.NET vers une stack JavaScript moderne. J\'ai travaillé à partir de maquettes Figma et de données JSON simulées, en l\'absence de back-end.',
    objective: 'Implémenter le front-end de l\'application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive, en respectant les maquettes fournies et en structurant le code en composants réutilisables.',
    skills: [
      'Initialiser une application React avec Vite',
      'Configurer la navigation entre les pages avec React Router',
      'Développer des composants React réutilisables',
      'Mettre en œuvre des animations CSS',
      'Développer une interface web avec SASS',
      'Intégration pixel-perfect depuis des maquettes Figma',
    ],
    results: 'Application React multi-pages entièrement fonctionnelle, fidèle aux maquettes Figma. Galerie d\'images avec défilement circulaire, composants accordéon animés, affichage dynamique des 20 annonces depuis un fichier JSON. Projet validé par OpenClassrooms.',
    improvements: 'Ajouter un back-end avec une vraie base de données, implémenter un système de recherche et de filtres par localisation, et améliorer l\'accessibilité globale selon les critères WCAG.',
  },

  {
    slug: 'nina-carducci',
    title: 'Nina Carducci',
    description: 'Optimisation SEO, performance et accessibilité d\'un site de photographe',
    stack: ['HTML', 'CSS', 'JavaScript', 'Lighthouse', 'Wave', 'Schema.org'],
    images: [
      '/images/Nina/Nina1.webp',
      '/images/Nina/Nina2.webp'],
    github: 'https://github.com/marieprns/nina-carducci',
    live: 'https://nina-carducci-steel.vercel.app',
    context: 'Mission freelance fictive pour Nina Carducci, photographe portrait et événementiel à Bordeaux. Son site était lent à charger et invisible sur Google, ce qui l\'empêchait d\'acquérir de nouveaux clients.',
    objective: 'Travailler en tant que développeuse freelance pour optimiser le référencement du site en améliorant sa performance et son accessibilité. Identifier les problèmes de chargement et de référencement, proposer des recommandations et les appliquer directement dans le code.',
    skills: [
      'Audit de performance et d\'accessibilité avec Lighthouse et Wave',
      'Optimisation et compression des images pour réduire le temps de chargement',
      'Restructuration du code HTML avec des balises sémantiques',
      'Mise en place du référencement local via Schema.org',
      'Ajout des balises meta et Open Graph pour les réseaux sociaux',
      'Corrections d\'accessibilité : contrastes, attributs alt, navigation clavier',
      'Production d\'un rapport illustrant les résultats avant et après les modifications',
    ],
    results: 'Amélioration significative des scores Lighthouse sur tous les critères — performance, accessibilité, SEO et bonnes pratiques. Temps de chargement réduit drastiquement. Référencement local mis en place via Schema.org. Rapport complet avant/après fourni. Projet validé par OpenClassrooms.',
    improvements: 'Migrer le site vers Next.js pour bénéficier du rendu côté serveur et améliorer encore les performances. Mettre en place un blog pour renforcer le référencement naturel et la visibilité de Nina sur Google.',
  },
]

export default projects