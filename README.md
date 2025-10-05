# Site Web Kinésithérapie - Cylian Lacoppola

Site web professionnel pour Cylian Lacoppola, étudiant en 3ème année de kinésithérapie.

## 🚀 Développement

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
# ou
npm start
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit la version de production
- `npm run setup` - Installation initiale et création des dossiers
- `npm run clean` - Nettoie le dossier de build
- `npm run lint` - Vérifie le code JavaScript
- `npm run format` - Formate le code avec Prettier
- `npm run test` - Lance tous les tests de validation
- `npm run commit` - Commit les changements
- `npm run push` - Push vers le repository distant
- `npm run deploy` - Build, commit et push en une commande

## 📁 Structure du projet

```
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript principal
├── content.json        # Contenu du site (textes, données)
├── package.json        # Configuration npm
├── .eslintrc.json      # Configuration ESLint
├── .stylelintrc.json   # Configuration Stylelint
├── .prettierrc         # Configuration Prettier
└── dist/               # Fichiers de production (après build)
```

## 🎨 Personnalisation

### Modifier le contenu

Toutes les données du site sont centralisées dans `content.json`. Modifiez ce fichier pour changer :

- Informations personnelles
- Navigation
- Sections (À propos, Services, Compétences, etc.)
- Témoignages
- Informations de contact

### Modifier les styles

Les styles sont dans `styles.css` avec support pour :

- Thème clair/sombre automatique
- Design responsive
- Variables CSS pour personnalisation facile

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Interactions dynamiques
- **JSON** - Gestion centralisée du contenu

## 📦 Build et déploiement

### Build de production

```bash
npm run build
```

Génère les fichiers optimisés dans le dossier `dist/` :

- CSS et JS minifiés
- HTML optimisé
- Fichiers prêts pour la production

### Déploiement automatique

```bash
npm run deploy
```

Cette commande :

1. Construit la version de production
2. Commit les changements
3. Push vers le repository distant

## 🔧 Outils de développement

- **Live Server** - Serveur de développement avec rechargement automatique
- **ESLint** - Analyse statique du JavaScript
- **Stylelint** - Validation du CSS
- **Prettier** - Formatage automatique du code
- **HTML Validator** - Validation du HTML

## 📱 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Thème clair/sombre avec préférence sauvegardée
- ✅ Animations fluides et accessibles
- ✅ Formulaire de contact fonctionnel
- ✅ Navigation fluide (smooth scroll)
- ✅ Optimisé pour l'accessibilité (ARIA, sémantique)
- ✅ SEO optimisé (meta tags, schema.org)
- ✅ Performance optimisée

## 🌐 Compatibilité navigateurs

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Appareils mobiles (iOS, Android)

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

---

Développé avec ❤️ par Cylian Lacoppola