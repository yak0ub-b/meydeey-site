# Kie AI : Veo 3, Nano Banana, Suno en un seul compte (en direct)

**Date** : 2026-04-06 | **Durée** : 28:45 | **Niveau** : intermédiaire | **Catégorie** : Technique & Outils IA | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=BCN6rh4mSX8

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi fragmenter les outils IA est un anti-pattern | section Philosophie IA et Mental Models |
| construire une application IA multimodale rapidement | section Ce que tu peux faire maintenant et Concepts clés expliqués |
| monétiser une application basée sur Kieai | section Business et Monétisation |
| maîtriser le prompting pour Claude Code | section Prompting sagesse (dans les données source) |
| explorer les limites et les questions ouvertes | section Ouvertures |

## Résumé

La vidéo présente Kieai, une plateforme centralisée permettant d'accéder à plusieurs modèles IA (images, vidéos, musique) via une seule clé API et un système de crédit au lieu d'abonnements. L'auteur explique comment cette approche résout le problème du 'zoo d'outils' coûteux et fragmentés. Il démontre ensuite comment construire une application complète de génération de contenu pour agents immobiliers en utilisant Claude Code, Open Router et Kieai, en deux messages seulement, avec déploiement sur Vercel.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    AVANT : Zoo d'outils                       │
│  Midjourney  Runway  Suno  ElevenLabs  OpenRouter  Gamma      │
│      ↓         ↓      ↓        ↓           ↓         ↓         │
│   5 comptes, 5 factures, 5 dashboards, 5 clés API             │
│   Coût : 200-1000€/mois | Friction : énorme                   │
└─────────────────────────────────────────────────────────────┘
                              ↓↓↓
┌─────────────────────────────────────────────────────────────┐
│              APRÈS : Robinet universel (Kieai)               │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         1 compte | 1 clé API | 1 dashboard           │   │
│  │         Système de crédit (pay-as-you-go)            │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│  ┌─────────────┬──────────────┬──────────┬──────────────┐   │
│  │   Images    │   Vidéos     │  Musique │  Texte+Audio │   │
│  │ (Nano Ban.) │ (Google Veo) │ (Suno)   │ (OpenRouter) │   │
│  └─────────────┴──────────────┴──────────┴──────────────┘   │
│                                                               │
│  Coût : transparent | Friction : minimale | Contrôle : total │
└─────────────────────────────────────────────────────────────┘
                              ↓↓↓
┌─────────────────────────────────────────────────────────────┐
│         Claude Code : Orchestrateur de l'orchestrateur        │
│                                                               │
│  Vision business (PRD) → Claude Code → Architecture complète  │
│  Humain = directeur | IA = exécutant + architecte            │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Le problème : le zoo d'outils
Identification du problème : multiplication des outils IA (Midjourney, Runway, Suno, etc.), création de multiples comptes, factures séparées, dashboards différents, coûts mensuels élevés (200-1000€/mois pour power users), perte de temps administrative

### Acte 2 — La solution : Kieai comme robinet universel
Présentation de Kieai comme plateforme centralisée : un seul compte, une seule clé API, accès à tous les modèles (images, vidéos, musique, audio, texte), système de crédit au lieu d'abonnement, paiement à la consommation, monitoring des coûts, support de multiples méthodes de paiement (carte, crypto, PayPal, Apple Pay)

### Acte 3 — Démonstration pratique : génération d'images avec Nano Banana
Exemple concret de génération d'une miniature YouTube avec Nano Banana 2 via Kieai, coût de 8 crédits (4 centimes USD), interface web et API documentation, segmentation par modèle, historique des générations

### Acte 4 — Cas d'usage réel : application pour agents immobiliers
Construction d'une application SaaS complète en deux messages avec Claude Code : input (description du bien), output (post prêt à publier + 1-4 visuels générés), stack technique (Next.js, Tailwind, Vercel), intégration Open Router pour texte et Kieai pour images

### Acte 5 — Mise en œuvre technique : création des clés API et déploiement
Création sécurisée des clés API avec limitations de dépense, configuration du .env local, orchestration via Claude Code avec skills personnalisés, déploiement sur Vercel, monitoring des coûts par clé API

### Acte 6 — Résultats et philosophie : orchestration d'IA
Démonstration des résultats réels (miniatures YouTube, posts LinkedIn avec 1200+ commentaires générés avec Nano Banana), explication de la philosophie : être l'orchestrateur de l'orchestrateur, donner des directives business plutôt que techniques, potentiel illimité de Claude Code

## Philosophie IA & Pensée profonde

L'IA doit être orchestrée intelligemment via des plateformes centralisées plutôt que fragmentée en multiples outils, et l'humain doit être l'orchestrateur qui donne des directives business claires à des systèmes IA capables de les exécuter autonomement. Claude Code représente une évolution où l'IA devient capable de gérer l'architecture complète d'un projet en fonction d'une vision donnée, transformant le développeur en directeur plutôt qu'en exécutant.

Kieai résout le problème fondamental de la fragmentation des outils IA en centralisant l'accès à tous les modèles (images, vidéos, musique, texte) via une seule API et un système de crédit, transformant ainsi le développeur en orchestrateur qui donne des directives business à Claude Code plutôt qu'en exécutant des tâches techniques. Cette approche révèle une évolution majeure : l'IA ne doit plus être utilisée comme des outils isolés mais comme un système cohérent où l'humain définit la vision et laisse le modèle gérer l'architecture complète. La démonstration pratique (SaaS immobilier en 2 messages) montre que cette philosophie d'orchestration transforme radicalement la vitesse et l'efficacité de création de produits IA.

## Prompting & Sagesse d'usage

- Créer un PRD (Product Requirements Document) complet avant de demander à Claude Code de coder : inclure la vision, les personas, le périmètre, la stack technique, les APIs, les règles métier, le user flow, les dépendances et les anticipations futures
- Donner la vision globale plutôt que des instructions rigides : laisser de la flexibilité pour que Claude Code puisse proposer des améliorations (B, C, D, etc.) au lieu de se limiter à A
- Créer des skills personnalisés dans Claude Code avec les documentations API directes pour éviter que le modèle se trompe sur les endpoints et les paramètres
- Utiliser des clés API séparées pour chaque projet ou environnement et définir des spend limits pour contrôler les coûts
- Être l'orchestrateur de l'orchestrateur : donner des directives business et laisser Claude Code gérer la dimension technique et architecturale
- Documenter via des changelogs pour que le projet puisse évoluer intelligemment au fil du temps avec un historique des modifications

## Concepts clés expliqués

### Zoo d'outils
Situation où tu dois utiliser 5+ outils différents pour accomplir des tâches liées, créant des comptes, factures et dashboards séparés. Chaque outil a sa propre courbe d'apprentissage, sa propre documentation, ses propres limites.
**Pourquoi c'est important** : C'est le problème fondamental que Kieai résout. Comprendre le coût caché du zoo d'outils (temps administratif, friction, coûts mensuels élevés) te montre pourquoi la centralisation est une révolution, pas juste une commodité.

### Robinet universel
Plateforme centralisée qui gère l'accès à plusieurs APIs et modèles, permettant à l'utilisateur de ne gérer qu'un seul compte et une seule clé API. Tu tournes le robinet, tu as accès à tout.
**Pourquoi c'est important** : C'est la métaphore clé pour comprendre Kieai. Un robinet universel n'invente pas l'eau, il la canalise. De même, Kieai n'invente pas les modèles, il les canalise intelligemment.

### Système de crédit vs abonnement
Abonnement = tu paies un montant fixe par mois, peu importe ton usage. Crédit = tu paies seulement ce que tu consommes, chaque appel API a un coût transparent. Kieai utilise le modèle de crédit.
**Pourquoi c'est important** : C'est un changement économique majeur. Cela aligne les incitations : Kieai gagne plus si tu utilises plus, et tu ne paies que ce que tu utilises. C'est plus juste et plus efficace que les abonnements fixes.

### Orchestration d'IA
Capacité à combiner plusieurs modèles IA (texte, images, vidéos, musique) pour créer une valeur émergente. L'orchestrateur donne des directives business, et les modèles exécutent.
**Pourquoi c'est important** : C'est la compétence clé du futur. Les développeurs qui maîtrisent l'orchestration vont créer des produits 10x plus rapidement que ceux qui utilisent les outils isolément. C'est un shift de paradigme.

### PRD (Product Requirements Document)
Document qui définit la vision, le périmètre, la stack technique, les personas, les règles métier et les user flows d'un projet. C'est le blueprint que tu donnes à Claude Code.
**Pourquoi c'est important** : Un bon PRD est la différence entre un SaaS qui fonctionne et un SaaS qui ne fonctionne pas. Claude Code peut générer du code, mais il ne peut pas inventer une vision. Tu dois la fournir.

### Skill (dans Claude Code)
Module spécialisé que tu ajoutes à Claude Code pour améliorer ses performances sur des tâches spécifiques. Par exemple, une skill qui contient la documentation API de Kieai pour que Claude Code ne se trompe pas sur les endpoints.
**Pourquoi c'est important** : Les skills transforment Claude Code d'un modèle généraliste en un expert spécialisé. C'est la différence entre 'Claude Code essaie de deviner l'API' et 'Claude Code connaît exactement l'API'.

### Polling asynchrone
Technique où les requêtes sont traitées séquentiellement dans une file d'attente plutôt que toutes en même temps. Tu envoies une requête, tu reçois un ID, tu polls régulièrement jusqu'à ce que le résultat soit prêt.
**Pourquoi c'est important** : C'est comment les modèles lents (génération vidéo, musique) fonctionnent. Comprendre le polling te permet de construire des apps qui ne bloquent pas l'utilisateur en attendant les résultats.

### Spend limit (limite de dépense)
Limite de dépense définie sur une clé API pour contrôler les coûts maximums. Si tu définis une spend limit de 10€, la clé API s'arrête de fonctionner une fois que tu as dépensé 10€.
**Pourquoi c'est important** : C'est une protection contre les bugs coûteux. Une boucle infinie qui appelle l'API peut te coûter des milliers d'euros. Une spend limit limite les dégâts à un montant que tu as défini.

### Orchestrateur de l'orchestrateur
Philosophie où tu ne donnes pas des instructions techniques à Claude Code, mais une vision business. Claude Code devient l'orchestrateur des APIs, et tu deviens l'orchestrateur de Claude Code.
**Pourquoi c'est important** : C'est un shift de mentalité majeur. Au lieu de penser 'comment je code cela', tu penses 'quelle est la vision que je veux que Claude Code réalise'. C'est plus puissant et plus scalable.

## Insights non-évidents

- Insight 1 : Le vrai problème n'est pas l'existence de multiples outils, mais l'absence de couche d'abstraction. Kieai ne crée pas de nouveaux modèles, il crée une interface unifiée qui change radicalement l'expérience utilisateur et les coûts opérationnels. C'est un problème d'architecture, pas de technologie.
- Insight 2 : Le système de crédit au lieu d'abonnement est une révolution économique cachée. Cela transforme le modèle de coût de 'payer pour la capacité' à 'payer pour l'usage réel', ce qui aligne parfaitement les incitations entre Kieai et l'utilisateur. Un power user ne paie que ce qu'il consomme réellement.
- Insight 3 : Claude Code avec skills personnalisés représente une évolution vers l'IA capable de gérer sa propre architecture. L'humain ne donne plus des instructions de bas niveau ('appelle cette API avec ces paramètres'), mais une vision de haut niveau ('crée une app pour agents immobiliers'). C'est le passage du programmeur au product manager.
- Insight 4 : La démonstration du SaaS immobilier en 2 messages révèle que la vraie barrière n'est plus la capacité technique, mais la capacité à articuler une vision claire (PRD). Les développeurs qui maîtrisent le prompting stratégique vont dominer ceux qui maîtrisent la syntaxe.
- Insight 5 : Le monitoring des coûts par clé API et par modèle n'est pas juste une feature, c'est une philosophie : chaque centime dépensé doit être justifié et tracé. Cela crée une culture de l'efficacité qui n'existe pas quand on paie des abonnements mensuels fixes.

## Mental models

- {'modele': 'Du fragmenté au centralisé', 'description': "Penser en termes de couches d'abstraction. Chaque outil isolé = une couche. Kieai = une couche unique qui abstrait la complexité. Plus tu montes dans les couches d'abstraction, moins tu dois gérer de détails, mais plus tu dois être clair sur ta vision."}
- {'modele': "De l'exécutant au directeur", 'description': "Avant : tu codes les appels API, tu gères les erreurs, tu optimises les prompts. Maintenant : tu définis le PRD (vision, personas, stack, règles métier), et Claude Code devient ton architecte. Tu passes de 'comment faire' à 'quoi faire'."}
- {'modele': 'Du coût fixe au coût variable', 'description': "Abonnements = tu paies même si tu n'utilises pas. Crédits = tu paies seulement ce que tu consommes. Cela change la psychologie : chaque appel API a un coût visible, ce qui crée une culture d'efficacité."}
- {'modele': "De l'outil à l'orchestration", 'description': "Un outil = tu l'utilises pour une tâche spécifique. L'orchestration = tu combines plusieurs outils pour créer une valeur émergente. Kieai + Claude Code = tu orchestres l'orchestrateur, ce qui crée une boucle de productivité exponentielle."}
- {'modele': "De la capacité à l'usage", 'description': "Avant : tu achètes de la capacité (100 générations d'images/mois avec Midjourney). Maintenant : tu achètes de l'usage (tu génères exactement ce dont tu as besoin). C'est un changement de paradigme économique."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment intégrer Stripe pour monétiser l'application SaaS créée
- Sujet mentionné mais non développé : Détails complets de la sécurisation en production (authentification, rate limiting, etc.)
- Question ouverte : Comment adapter cette approche pour d'autres métiers au-delà des agents immobiliers
- Sujet mentionné mais non développé : Comparaison détaillée entre Kieai et ses concurrents potentiels
- Sujet mentionné mais non développé : Stratégie de pricing pour une application SaaS basée sur Kieai
- Implication 1 : Si Kieai centralise l'accès aux modèles, il devient un point de défaillance critique. Une panne de Kieai paralyse toutes les applications qui en dépendent. La vidéo ne discute pas de la résilience, du fallback, ou de la stratégie multi-provider.
- Implication 2 : Le modèle économique de Kieai dépend de la marge entre ce qu'il paie aux providers (Midjourney, Runway, etc.) et ce qu'il facture aux utilisateurs. Si les providers augmentent leurs prix ou créent leurs propres agrégateurs, Kieai perd sa valeur. La vidéo ne discute pas de la durabilité long terme.
- Implication 3 : La création d'un SaaS en 2 messages avec Claude Code suppose que le PRD est parfait et que les cas d'usage sont simples. En réalité, les applications réelles nécessitent des itérations, des tests utilisateurs, et des ajustements. La vidéo montre le cas idéal, pas la réalité messy.
- Implication 4 : Le système de crédit crée une nouvelle forme de lock-in. Une fois que tu as des milliers de crédits Kieai et que ton app dépend de Kieai, tu es moins incité à explorer d'autres solutions. C'est un lock-in plus doux que les abonnements, mais toujours présent.
- Ce qu'on peut en déduire : Les développeurs qui adoptent Kieai + Claude Code tôt vont acquérir une compétence rare (orchestration d'IA) qui sera très demandée. Ceux qui restent sur des outils isolés vont progressivement devenir moins compétitifs.

## Ce que tu peux faire maintenant

- [ ] Créer un compte Kieai et explorer l'interface pour comprendre comment accéder à tous les modèles via une seule clé API. Génère une image avec Nano Banana 2 pour sentir le coût réel (quelques centimes).
- [ ] Rédiger un PRD complet pour une application IA que tu veux créer (même simple : générateur de descriptions de produits, créateur de posts LinkedIn, etc.). Inclure : vision, personas, périmètre, stack technique, APIs utilisées, règles métier, user flow.
- [ ] Ouvrir Claude Code et créer une skill personnalisée qui contient la documentation API de Kieai. Cela permettra à Claude Code de générer du code correct sans halluciner les endpoints.
- [ ] Demander à Claude Code de créer une application simple basée sur ton PRD. Commence par une version MVP (Minimum Viable Product) : input simple, output simple, une seule API appelée.
- [ ] Configurer des clés API séparées pour chaque projet ou environnement (dev, staging, prod) et définir des spend limits appropriées pour chaque clé. Cela crée une culture de contrôle des coûts.
- [ ] Monitorer les coûts réels de ton application en utilisant le dashboard Kieai. Segmente par modèle pour comprendre où va ton argent. Cela te rend conscient de chaque centime dépensé.
- [ ] Itérer sur ton application en donnant du feedback à Claude Code sous forme de directives business, pas techniques. Par exemple : 'les images doivent être plus professionnelles' au lieu de 'change le prompt en ajoutant professional photography'.
- [ ] Documenter les changements de ton projet via des changelogs. Cela crée un historique que Claude Code peut consulter pour comprendre l'évolution du projet.
- [ ] Déployer ton application sur Vercel et configurer les variables d'environnement (.env) pour que les clés API soient sécurisées.
- [ ] Rejoindre le groupe Discord/Telegram de Kieai (4200+ membres) pour apprendre des cas d'usage réels et des optimisations que d'autres utilisateurs ont découvertes.

## Business & Monétisation

- Modèle SaaS direct : Crée une application (comme celle pour agents immobiliers) et vends-la en abonnement mensuel. Tu paies Kieai au crédit, tu facturas tes clients en abonnement. La marge = abonnement - coûts Kieai.
- Modèle d'agence : Utilise Kieai pour créer du contenu pour tes clients (images, vidéos, posts LinkedIn). Tu facturas à l'heure ou au projet. Kieai devient ton outil de production.
- Modèle de marketplace : Crée une plateforme où les utilisateurs peuvent générer du contenu via Kieai. Tu prélèves une commission sur chaque génération (par exemple, 20% des crédits dépensés).
- Modèle de formation : Crée des cours ou des templates sur comment utiliser Kieai + Claude Code pour créer des applications IA. Vends ces cours à d'autres développeurs.
- Modèle de consulting : Aide les entreprises à orchestrer leurs workflows IA en utilisant Kieai. Tu deviens un expert en orchestration d'IA et tu facturas au jour ou au projet.
- Modèle d'API wrapper : Crée une API qui wraps Kieai avec des fonctionnalités supplémentaires (authentification, rate limiting, analytics). Vends l'accès à cette API.
- Modèle de white-label : Crée une application avec Kieai et vends-la en white-label à d'autres entreprises. Elles mettent leur branding, tu gères la technologie.
- Arbitrage de coûts : Si tu trouves un moyen de réduire les coûts Kieai (par exemple, en optimisant les prompts), tu peux vendre cette optimisation à d'autres utilisateurs.

## Définitions

- **Zoo d'outils** : Situation où on doit utiliser 5+ outils différents pour accomplir des tâches liées, créant des comptes, factures et dashboards séparés
- **Robinet universel** : Plateforme centralisée qui gère l'accès à plusieurs APIs et modèles, permettant à l'utilisateur de ne gérer qu'un seul compte et une seule clé API
- **Polling** : Technique où les requêtes sont traitées séquentiellement dans une file d'attente plutôt que toutes en même temps
- **Spend limit** : Limite de dépense définie sur une clé API pour contrôler les coûts maximums
- **MRR** : Monthly Recurring Revenue - modèle économique basé sur des factures mensuelles récurrentes
- **SaaS** : Software as a Service - logiciel fourni en tant que service avec abonnement
- **Skill** : Capacité ou module spécialisé ajouté à Claude Code pour améliorer ses performances sur des tâches spécifiques
- **PRD** : Product Requirements Document - document définissant la vision, le périmètre, la stack technique et les règles métier d'un projet

## Outils & techniques mentionnés

- **Kieai** : Plateforme centralisée d'accès à plusieurs modèles IA (images, vidéos, musique, audio, texte)
- **Claude Code** : Environnement de développement pour créer des applications avec IA
- **Nano Banana 2** : Modèle de génération et édition d'images
- **Google Veo 3.1** : Modèle de génération vidéo
- **Open Router** : Plateforme d'accès aux modèles de texte (Claude, ChatGPT, Gemini, DeepSeek)
- **Eleven Labs** : Modèle de text-to-speech
- **Suno** : Modèle de génération musicale
- **Midjourney** : Modèle de génération d'images
- **Runway** : Plateforme de génération vidéo
- **Gamma App** : Outil de création de présentations (remplacé par solution custom)
- **Next.js** : Framework pour la stack technique de l'application
- **Tailwind CSS** : Framework CSS pour le styling
- **Vercel** : Plateforme de déploiement
- **Supabase** : Backend et base de données
- Centralisation des outils via API marketplace
- Gestion des clés API avec limitations de dépense
- Système de crédit au lieu d'abonnement
- Polling d'images asynchrone
- Création de skills personnalisés dans Claude Code
- Prompting spécialisé par métier (agent immobilier)
- Génération en bulk de contenu
- Monitoring des coûts par clé API
- Segmentation des logs par modèle IA
- Architecture PRD (Product Requirements Document) légère
- Changelogs pour documentation du projet
- Orchestration multi-API
- Limitation temporaire des clés API

## Connexions avec d'autres sujets IA

- Prompting avancé : La qualité de ton PRD et de tes prompts détermine la qualité de ce que Claude Code génère. Maîtriser le prompting est essentiel.
- Fine-tuning de modèles : Si tu veux des résultats encore plus spécialisés, tu pourrais fine-tuner les modèles de Kieai. Cela va au-delà de la simple orchestration.
- Évaluation et monitoring d'IA : Une fois que tu as une application IA en production, tu dois évaluer sa qualité et monitorer ses performances. Cela nécessite des métriques et des dashboards.
- Sécurité et conformité : Si tu crées une application SaaS avec Kieai, tu dois gérer la sécurité des données, la conformité RGPD, et les audits. Kieai gère la sécurité de ses APIs, mais tu dois gérer la sécurité de ton app.
- Optimisation des coûts IA : Comprendre comment réduire les coûts sans sacrifier la qualité. Par exemple, utiliser des modèles plus petits pour les tâches simples, et des modèles plus grands pour les tâches complexes.
- Agentic AI : Claude Code avec skills est une forme d'agentic AI. Comprendre comment les agents IA fonctionnent te permet de créer des applications plus autonomes.
- Multimodal AI : Kieai combine texte, images, vidéos et musique. Comprendre comment combiner ces modalités crée une valeur émergente.
- Product management pour les produits IA : Créer un bon PRD est une compétence de product manager. Comprendre les personas, les user flows, et les règles métier est essentiel.

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionnent les APIs et les clés API. (2) Les bases du prompting (comment donner des instructions claires à un modèle IA). (3) Qu'il existe plusieurs modèles IA spécialisés (texte, images, vidéos, musique) et qu'ils ont des forces et des faiblesses différentes. (4) Le concept de SaaS et comment on monétise une application. (5) Que Claude Code est un outil qui peut générer du code basé sur des instructions en langage naturel. Si tu ne comprends pas ces concepts, la vidéo va te sembler magique plutôt que logique. Prends le temps de les maîtriser d'abord.

## Citations notables

> Si tu crées des projets IA, tu vas être confronté à un souci très très très pénible : avoir plein d'outils différents à plein d'endroits qui te font perdre un temps colossal

> 5 outils est toujours égal à 5 galères. Tu auras toujours un compte par outil, une facture par outil

> Cet outil c'est ce que j'appelle le robinet universel

> Tu tournes juste le robinet, t'as rien à faire

> Je ne peux pas m'en passer aujourd'hui

> En deux messages, nous avons construit un SaaS éventuel

> Je pense qu'il n'y a pas une personne au monde qui utilise 20% des capacités de Claude Code aujourd'hui

> Chaque centime qu'on va dépenser, on va l'utiliser

> 8 crédits ça m'a coûté 4 centimes de dollars, donc 3 centimes d'euros
