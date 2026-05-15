# J'ai fusionné Google Stitch et Claude Code (le résultat est INCROYABLE)

**Date** : 2026-03-26 | **Durée** : 36:27 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔵 technique
**URL** : https://www.youtube.com/watch?v=vltKl5kiTp0

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi l'IA génère des designs moches | section Concepts clés expliqués (AI slope) |
| appliquer le workflow Stitch + Cloud Code | section Ce que tu peux faire maintenant |
| maîtriser le prompting avec images de référence | section Mental models |
| explorer les limites et extensions | section Ouvertures |
| monétiser cette compétence | section Business et monétisation |

## Résumé

La vidéo présente une combinaison révolutionnaire de Google Stitch 2.0 (générateur de design IA) et Cloud Code (développement backend) pour créer des sites web professionnels en quelques heures gratuitement, remplaçant les workflows traditionnels coûtant 5000-15000€. Le protocole en trois phases consiste à sourcer l'inspiration sur Dribbble, générer le design dans Stitch avec des images de référence et des prompts détaillés, puis transformer le HTML exporté en site multi-pages avec backend, chatbot intégré et API externes dans Cloud Code. Cette approche résout le problème de l'AI slope (designs génériques et moches) en fusionnant l'esthétique visuelle de Stitch avec la logique backend de Cloud Code, créant des architectes hybrides capables de produire des sites beaux et fonctionnels.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    WORKFLOW HYBRIDE                          │
└─────────────────────────────────────────────────────────────┘

  PHASE 1: INSPIRATION          PHASE 2: DESIGN           PHASE 3: BACKEND
  ─────────────────────         ──────────────            ────────────────
  
  Dribbble                      Google Stitch 2.0         Cloud Code
  (2-3 screenshots)    ────>    (Image + Prompt)  ────>  (HTML → Multi-pages)
       │                             │                          │
       │                             ├─ Design MD               ├─ Next.js/React
       │                             │  (Palette auto)          ├─ API Integration
       │                             │                          ├─ Chatbot
       │                             └─ HTML/CSS Export         └─ Déploiement
       │                                                         
       └─────────────────────────────────────────────────────────┘
                    RÉSULTAT: Site professionnel gratuit
                    en quelques heures (vs 5000-15000€)
```

## Chapitres inférés

### Acte 1 — Le problème : AI slope et limitations actuelles
Les IA génèrent du code logiquement correct mais avec des designs génériques et moches. Figma est complexe et frustrant. Les graphistes et designers ont peur de l'IA. Besoin d'une solution gratuite et rapide.

### Acte 2 — La solution : Stitch 2.0 et Cloud Code
Présentation de Google Stitch 2.0 (outil gratuit de Google Labs) et Cloud Code. Explication du combo qui tue Figma et 3-5 métiers. Avantages : gratuit, 350 générations/mois, design system automatique, workflow hybride.

### Acte 3 — Comparaison économique et temporelle
Méthode classique : 5000-15000€, 2-6 semaines, itérations payantes, cohérence variable. Stitch + Cloud Code : gratuit, quelques heures, itérations illimitées, cohérence déterministe via Design MD.

### Acte 4 — Protocole pratique : sourcing et inspiration
Étape 1 - Aller sur Dribbble, chercher des designs inspirants en web design, capturer 2-3 screenshots pour avoir une base visuelle de référence.

### Acte 5 — Génération du design dans Stitch
Étape 2 - Coller l'image dans Stitch, choisir le modèle (3.1 Pro), écrire un prompt détaillé, générer la landing page, voir la palette de couleurs générée automatiquement.

### Acte 6 — Raffinement et variantes
Créer des variantes avec instructions additionnelles, modifier le design system en temps réel, exporter en HTML/CSS/ZIP, générer le Design MD pour la cohérence future.

### Acte 7 — Transition vers le backend avec Cloud Code
Copier le code HTML généré, le passer à Cloud Code avec instructions pour transformer la landing page en site multi-pages, ajouter pages manquantes (tarification, devis).

### Acte 8 — Intégration backend et API
Utiliser Next.js/React, intégrer chatbot avec Open Router et Gemini 3.1 Flash, créer formulaires, ajouter animations, assurer sécurité et backup triple.

### Acte 9 — Recommandations finales
Débutants : amusez-vous avec Stitch. Power users : combo Stitch + Cloud Code. Importance de la préparation (1-4 jours de réflexion avant développement). Utiliser des skills et MCP pour calibrer les instructions.

## Philosophie IA & Pensée profonde

L'IA est puissante en logique mais faible en esthétique visuelle ; la solution n'est pas de remplacer les designers mais de fusionner deux IA spécialisées (une pour le design, une pour le code) pour créer des architectes hybrides. L'IA fonctionne mieux avec des références visuelles et des instructions détaillées plutôt que des descriptions abstraites, et elle peut générer de la cohérence déterministe via des systèmes de design structurés (Design MD).

Google Stitch 2.0 et Cloud Code forment un duo qui résout le problème fondamental de l'IA : elle génère du code logiquement correct mais visuellement générique (AI slope). En fusionnant une IA spécialisée dans le design (Stitch) avec une IA spécialisée dans le backend (Cloud Code), on crée des architectes hybrides capables de produire des sites professionnels en quelques heures gratuitement, remplaçant des workflows coûtant 5000-15000€. La clé est de comprendre que l'IA fonctionne mieux avec des références visuelles, des instructions déterministes et une préparation en amont plutôt que des descriptions abstraites.

## Prompting & Sagesse d'usage

- Utiliser des images de référence (Dribbble) plutôt que des descriptions texte seules pour que l'IA comprenne la 'vibe' visuelle
- Écrire des prompts détaillés et spécifiques : 'Crée une landing page sur [sujet] avec [couleurs], [polices], [style]' plutôt que 'fais un beau site'
- Générer plusieurs variantes et sélectionner la meilleure base plutôt que d'attendre la perfection à la première génération
- Passer du temps en préparation (1-4 jours) avant d'appuyer sur 'générer' pour contextualiser et poser les bonnes questions
- Utiliser des instructions déterministes (Design MD, code couleur exact) plutôt que des termes vagues pour assurer la cohérence
- Combiner deux outils spécialisés (Stitch pour design + Cloud Code pour backend) plutôt que d'attendre qu'un seul outil fasse tout
- Créer des skills et des garde-fous pour recalibrer les réponses de l'IA et éviter qu'elle ne dévie du contexte

## Concepts clés expliqués

### AI slope
Problème où les IA génèrent du code logiquement correct mais avec des interfaces génériques, moches et sans identité visuelle. C'est la 'pente' où l'IA glisse naturellement quand on lui demande de faire du code sans spécialisation en design.
**Pourquoi c'est important** : C'est le problème fondamental que la vidéo résout. Comprendre l'AI slope, c'est comprendre pourquoi une seule IA ne suffit pas et pourquoi il faut deux outils spécialisés.

### Design MD (Markdown)
Fichier Markdown structuré généré automatiquement par Stitch contenant la palette de couleurs, polices, arrondis et autres règles de design. Il sert de 'source de vérité' pour assurer que toutes les pages futures respectent la même identité visuelle.
**Pourquoi c'est important** : C'est le mécanisme qui crée de la cohérence déterministe. Au lieu de demander à l'IA 'sois cohérent', tu lui donnes des règles explicites. C'est un pattern puissant pour contrôler l'IA.

### Vibe design
Approche où l'IA comprend l'ambiance et l'identité visuelle à partir d'images de référence (Dribbble) plutôt que de descriptions texte. L'IA capture la 'vibe' (l'atmosphère, le style) et la reproduit.
**Pourquoi c'est important** : C'est la clé pour éviter les designs génériques. Les images de référence communiquent la 'vibe' mieux que les mots. C'est un insight puissant sur comment promter l'IA efficacement.

### Architecte hybride
Professionnel capable de créer à la fois des designs visuels exceptionnels (via Stitch) et un backend solide (via Cloud Code) avec automatisations et logique conditionnelle. C'est une nouvelle profession qui n'existait pas avant.
**Pourquoi c'est important** : C'est la compétence rare et demandée. Comprendre ce qu'est un architecte hybride, c'est comprendre vers où le marché se dirige et quelle compétence apprendre.

### Workflow hybride
Combinaison de design frontend (Stitch) et développement backend (Cloud Code) pour créer des sites complets avec logique et esthétique. C'est un processus en 6 phases : sourcing, génération, raffinement, backend, intégration, déploiement.
**Pourquoi c'est important** : C'est le processus concret à appliquer. Maîtriser le workflow hybride, c'est pouvoir créer des sites professionnels en quelques heures gratuitement.

### Prompt engineering avec images
Technique de prompting où on combine une image de référence (Dribbble) avec un prompt texte détaillé. L'image fournit le contexte visuel, le texte fournit les instructions spécifiques.
**Pourquoi c'est important** : C'est une technique de prompting plus efficace que le texte seul. Elle réduit l'ambiguïté et améliore la qualité du résultat.

## Insights non-évidents

- Insight 1 : Le vrai problème n'est pas que l'IA ne peut pas faire de beaux designs, c'est qu'on lui demande de faire deux choses à la fois (esthétique + logique). Stitch résout cela en se spécialisant uniquement dans le design visuel, libérant Cloud Code pour se concentrer sur la logique backend.
- Insight 2 : Le Design MD (fichier Markdown structuré) est en réalité un système de contraintes déterministes qui force l'IA à respecter une cohérence visuelle. C'est une application pratique du concept de 'guardrails' ou 'constitutional AI' appliqué au design.
- Insight 3 : La vidéo décrit implicitement un shift de paradigme : passer de 'l'IA remplace les designers' à 'l'IA augmente les designers en les rendant hybrides'. L'architecte hybride n'est pas un remplaçant mais une nouvelle profession.
- Insight 4 : L'importance des images de référence sur Dribbble révèle une vérité profonde : l'IA comprend mieux les patterns visuels concrets que les descriptions abstraites. C'est un argument pour le 'few-shot learning' vs 'zero-shot learning'.
- Insight 5 : Le coût économique (5000-15000€ → gratuit) cache un coût cognitif : il faut maintenant maîtriser deux outils spécialisés et savoir orchestrer le workflow. La gratuité du code a un prix en complexité mentale.

## Mental models

- {'modele': 'Spécialisation vs Généralisation en IA', 'description': "Une IA généraliste (Claude, ChatGPT) essaie de faire tout : design + code + logique. Elle échoue sur l'esthétique. Deux IA spécialisées (Stitch pour design, Cloud Code pour backend) réussissent mieux car chacune peut optimiser pour sa tâche. C'est le modèle de la division du travail appliqué à l'IA."}
- {'modele': "Références visuelles comme 'contexte externe'", 'description': "L'IA fonctionne mieux quand on lui donne du contexte externe (images de Dribbble) plutôt que des descriptions abstraites. Les images sont un 'prompt visuel' qui réduit l'ambiguïté. C'est pourquoi 'une image vaut mille mots' en prompting."}
- {'modele': 'Déterminisme via contraintes structurées', 'description': "Le Design MD force la cohérence en créant des règles explicites (palette de couleurs, polices, arrondis). C'est mieux que de demander à l'IA 'sois cohérent' (vague). Les contraintes structurées créent du déterminisme."}
- {'modele': 'Préparation comme multiplicateur de qualité', 'description': "Passer 1-4 jours à préparer (réfléchir, sourcer, structurer) avant d'appuyer sur 'générer' multiplie la qualité du résultat. C'est l'inverse de la mentalité 'prompt rapide, résultat rapide'. La préparation est un investissement qui réduit les itérations."}
- {'modele': 'Itérations illimitées comme avantage compétitif', 'description': "Avec les méthodes classiques (5000-15000€), chaque itération coûte cher. Avec Stitch gratuit (350 générations/mois), tu peux itérer sans limite. Cela change la stratégie : au lieu de chercher la perfection à la première génération, tu explores l'espace des possibles."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Les MCP (Model Context Protocol) et frameworks spécialisés pour UI/UX mentionnés mais pas expliqués en détail
- Sujet mentionné mais non développé : Les plugins Cloud Code (Superpowers) et leur configuration complète
- Question ouverte laissée sans réponse : Comment gérer les erreurs de génération quand l'IA 'pète les plombs' (génère des designs complètement hors sujet)
- Sujet mentionné mais non développé : La création de skills personnalisés pour spécialiser Stitch/Cloud Code (exemple : sites Web3)
- Question ouverte laissée sans réponse : Comment optimiser les prompts pour éviter que Cloud Code soit 'trop influencé' par les skills existants
- Implication non-dite 1 : Si Stitch + Cloud Code tue Figma et 3-5 métiers, cela signifie que les designers, développeurs frontend et certains product managers vont devoir se réinventer ou disparaître. La vidéo ne parle pas de l'impact social de cette disruption.
- Ce qu'on peut en déduire : Les compétences qui survivront sont celles qui ne peuvent pas être automatisées : la stratégie produit, la compréhension des utilisateurs, la capacité à poser les bonnes questions avant de générer.
- Implication non-dite 2 : La mention de 'Claude 3.1 Pro' et 'Gemini 3.1 Flash' suggère que le choix du modèle IA importe énormément. Mais la vidéo ne détaille pas comment choisir le bon modèle pour chaque tâche.
- Ce qu'on peut en déduire : Il existe une hiérarchie implicite des modèles (Claude pour la réflexion, Gemini pour la vitesse) qui n'est jamais explicitée mais qui est cruciale pour optimiser le workflow.
- Implication non-dite 3 : La phrase 'tu dois être un architecte hybride' implique que cette compétence est rare et donc très demandée. Mais elle ne dit pas comment on devient architecte hybride (formation, pratique, mentalité).
- Ce qu'on peut en déduire : Il y a une fenêtre temporelle où cette compétence est rare et donc très bien rémunérée. Mais cette fenêtre se ferme à mesure que plus de gens apprennent le workflow.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Aller sur Dribbble et chercher 3 designs web qui te plaisent. Prendre des screenshots. C'est ton matériel de référence pour la prochaine étape.
- [ ] Action 2 : Accéder à Google Stitch 2.0 (Google Labs) et créer un compte. Tester la génération gratuite avec une image de Dribbble et un prompt détaillé. Observer la palette de couleurs générée automatiquement.
- [ ] Action 3 : Exporter le HTML/CSS généré par Stitch et l'examiner. Comprendre la structure du code et comment il est organisé.
- [ ] Action 4 : Accéder à Cloud Code et copier le HTML de Stitch. Demander à Cloud Code de transformer la landing page en site multi-pages avec une page d'accueil, une page de tarification et une page de contact.
- [ ] Action 5 : Créer un Design MD manuellement (ou généré par Stitch) avec ta palette de couleurs, tes polices et tes règles de design. Utilise-le comme référence pour les prochaines générations.
- [ ] Action 6 : Intégrer une API externe (Open Router + Gemini 3.1 Flash) pour ajouter un chatbot à ton site. Tester l'intégration.
- [ ] Action 7 : Déployer ton site sur Vercel ou une autre plateforme. Configurer les backups et la sécurité.
- [ ] Action 8 : Documenter ton workflow (sourcing → génération → raffinement → backend → intégration → déploiement). C'est ton processus reproductible.
- [ ] Action 9 : Créer 3 sites différents avec le même workflow pour maîtriser la méthode et identifier les pièges.
- [ ] Action 10 : Proposer tes services de création de sites à des micro-entrepreneurs ou des petites entreprises. Positionne-toi comme 'architecte hybride' capable de créer des sites beaux et fonctionnels rapidement.

## Business & Monétisation

- Angle 1 : Créer des sites pour des micro-entrepreneurs et petites entreprises à un prix inférieur aux 5000-15000€ du marché (ex: 500-2000€). Marges énormes car coût de production quasi-nul.
- Angle 2 : Vendre des 'templates de design' pré-générés sur Stitch (landing pages, sites e-commerce, portfolios) à d'autres créateurs. Chaque template peut être vendu 50-200€.
- Angle 3 : Offrir un service de 'design system personnalisé' : créer un Design MD unique pour une marque, puis l'utiliser pour générer tous les assets (site, landing pages, emails). Tarif : 1000-5000€.
- Angle 4 : Former d'autres personnes au workflow Stitch + Cloud Code. Vendre une formation en ligne (29-99€) ou des coaching 1-to-1 (100-300€/heure).
- Angle 5 : Créer une agence 'architecte hybride' et embaucher d'autres personnes formées au workflow. Scaler en prenant des clients plus gros (startups, PME).
- Angle 6 : Développer des 'skills' ou 'plugins' spécialisés pour Stitch/Cloud Code (ex: sites Web3, sites SaaS, sites e-commerce) et les vendre ou les proposer en SaaS.
- Angle 7 : Créer un 'marketplace' de designs pré-générés avec Stitch que les utilisateurs peuvent customiser et déployer. Modèle freemium ou commission sur les ventes.

## Définitions

- **AI slope** : Problème où les IA génèrent du code logiquement correct mais avec des interfaces génériques, moches et sans identité visuelle
- **Design MD** : Fichier Markdown structuré généré automatiquement contenant la palette de couleurs, polices et arrondis pour assurer la cohérence visuelle de toutes les pages futures
- **Vibe design** : Approche où l'IA comprend l'ambiance et l'identité visuelle à partir d'images de référence pour générer des designs uniques et cohérents
- **Workflow hybride** : Combinaison de design frontend (Stitch) et développement backend (Cloud Code) pour créer des sites complets avec logique et esthétique
- **Architecte hybride** : Professionnel capable de créer à la fois des designs visuels exceptionnels et un backend solide avec automatisations et logique conditionnelle

## Outils & techniques mentionnés

- **Google Stitch 2.0** : Générateur de design IA gratuit qui crée des interfaces complètes à partir de descriptions texte et images d'inspiration
- **Cloud Code** : Outil de développement backend pour câbler les API, créer la logique conditionnelle et déployer le site
- **Claude / ChatGPT** : Modèles IA génériques incapables de générer des designs visuels de qualité
- **Figma** : Outil de design traditionnel remplacé par la combinaison Stitch + Cloud Code
- **Dribbble** : Plateforme de sourcing d'inspiration visuelle pour les designs
- **Next.js / React** : Framework JavaScript pour la construction du site multi-pages
- **Open Router** : API pour intégrer des modèles IA externes (Gemini 3.1 Flash)
- **Tailwind CSS** : Framework CSS pour le styling
- Sourcing d'inspiration sur Dribbble
- Prompt engineering avec images de référence
- Génération de variantes de design
- Export HTML/CSS depuis Stitch
- Conversion landing page en site multi-pages
- Intégration de chatbot avec API externe
- Design system automatique avec code couleur déterministe
- Création de formulaires et pages de tarification
- Déploiement avec sécurité et backup

## Connexions avec d'autres sujets IA

- Few-shot learning vs Zero-shot learning : Stitch utilise des images de référence (few-shot) plutôt que des descriptions abstraites (zero-shot). C'est un pattern puissant en IA.
- Constitutional AI et guardrails : Le Design MD est un exemple de 'guardrails' structurés pour forcer l'IA à respecter des contraintes.
- Spécialisation des modèles IA : La vidéo montre que deux IA spécialisées (Stitch + Cloud Code) battent une IA généraliste (Claude, ChatGPT). C'est un argument pour la spécialisation.
- Prompting avancé : Combiner images + texte + instructions déterministes est une technique de prompting avancée.
- Automatisation et workflows : Le workflow hybride est un exemple d'automatisation intelligente où l'IA fait le travail répétitif et l'humain fait les décisions stratégiques.
- Monétisation de l'IA : La vidéo montre comment monétiser l'IA en créant de la valeur pour les clients (sites professionnels gratuits vs 5000-15000€).
- Disruption de métiers : La vidéo implique que certains métiers (designers, développeurs frontend) vont être disrupted. C'est un sujet de réflexion sur l'impact social de l'IA.
- Model Context Protocol (MCP) : Mentionné mais non développé. C'est un protocole pour structurer le contexte donné à l'IA.
- Agents IA : Cloud Code fonctionne comme un 'agent' qui prend des instructions et les exécute. C'est un exemple d'IA agentic.

## Prérequis de compréhension

Avant de regarder cette vidéo, tu dois avoir compris : (1) Comment fonctionnent les modèles IA généraux (Claude, ChatGPT) et leurs limitations en design visuel. (2) Les bases du prompting (comment donner des instructions à l'IA). (3) Les concepts de design (palette de couleurs, typographie, cohérence visuelle). (4) Les bases du développement web (HTML, CSS, JavaScript, Next.js/React). (5) Le concept de 'workflow' ou 'processus' en création de produits. (6) La compréhension que l'IA n'est pas magique : elle fonctionne mieux avec de la préparation, des références et des contraintes claires. Si tu maîtrises ces concepts, tu pourras absorber la vidéo et appliquer le workflow immédiatement. Si tu manques l'un de ces prérequis, tu vas te perdre dans les détails techniques.

## Citations notables

> Les meilleurs modèles d'IA au monde c'est bien, ça génère du code, mais en général c'est du code qui est dégueulasse, le visuel, les designs sont complètement moches.

> C'est une combinaison entre Google Stitch et Cloud Code. C'est le combo qui tue aujourd'hui Figma et qui tue à peu près entre 3 à 5 métiers.

> L'action Figma elle a plongé, voilà donc elle a pris moins 60% en 6 mois et elle a pris moins 12% en 2 jours après Stitch 2.0.

> Ce que ça te coûte normalement, ce que je vais te montrer dans cette vidéo, entre 5 000 pour vraiment le mec le plus débutant, le micro-entrepreneur français qui démarque il y a 19 ans, entre 5 000 jusqu'à 15 000 euros sur le marché.

> Aujourd'hui, tu peux l'avoir gratuitement. Et tu peux faire 350 générations gratuites par mois avec Google Stitch.

> La méthode classique, c'est lent et cher. Et la méthode Stitch plus Cloud Code, c'est rapide et gratuit.

> Tu dois être un architecte hybride qui va faire les deux en même temps. Des sites hyper beaux, propres, avec un back-end solide, structuré.
