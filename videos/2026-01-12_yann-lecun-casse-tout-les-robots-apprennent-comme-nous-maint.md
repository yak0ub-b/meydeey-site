# Yann Lecun CASSE TOUT : Les Robots apprennent comme nous maintenant

**Date** : 2026-01-12 | **Durée** : 39:18 | **Niveau** : avancé | **Catégorie** : Vision & Société | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=MryErMEyl60

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment l'IA déduit les actions sans annotation | section Concepts clés expliqués (Actions latentes + IDM) |
| voir l'architecture technique complète | section Schema ASCII et Mental models |
| comprendre pourquoi c'est révolutionnaire | section Insights non-évidents et Ce qu'il ne dit pas |
| savoir comment appliquer cette logique | section Ce que tu peux faire maintenant |
| explorer les implications philosophiques | section Niveau conscience requis et Connexions |

## Résumé

Le paper 'Learning Latent Action World Models in the Wild' de Yann LeCun et Meta révolutionne l'apprentissage automatique en permettant aux IA de comprendre les actions et la physique à partir de vidéos YouTube non annotées, sans intervention humaine. Le système utilise deux modèles entraînés conjointement : un Inverse Dynamics Model qui déduit les actions latentes (vecteurs de 128 dimensions) à partir de deux frames consécutifs, et un World Model qui prédit l'état futur. Trois méthodes de régularisation (parsimonie, bruit gaussien, quantification) empêchent le modèle de tricher en limitant l'information contenue dans les actions latentes. Cette approche s'attaque au niveau le plus complexe de la pyramide des actions (actions in the wild) et représente un pas majeur vers l'AGI.

## Schéma conceptuel

```
SYSTÈME D'APPRENTISSAGE LATENT (In the Wild)

┌─────────────────────────────────────────────────────────────┐
│ VIDÉO YOUTUBE (1 milliard de clips, zéro annotation)        │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   [Frame t]              [Frame t+1]
        │                         │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────┐
        │   ENCODEUR VJPA 2-L     │ (gelé, préentraîné)
        │   (Compression pixels)  │
        └────────────┬────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   [État t]              [État t+1]
        │                         │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  INVERSE DYNAMICS MODEL (IDM)   │
        │  "Détective: Quelle action?"    │
        │  (Déduit l'action latente)      │
        └────────────┬────────────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  ACTION LATENTE (128 dimensions)│
        │  [d1, d2, d3, ... d128]         │
        │  (Chaque dim = 1 aspect)        │
        └────────────┬────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   [État t]          [Action latente]
        │                         │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  WORLD MODEL (ViT-L 300M)       │
        │  "Oracle: État futur?"          │
        │  (Prédit l'état t+1)            │
        └────────────┬────────────────────┘
                     │
        ┌────────────▼────────────┐
        │  PRÉDICTION [État t+1]  │
        │  vs RÉALITÉ [État t+1]  │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  ENTRAÎNEMENT CONJOINT          │
        │  (Les 2 modèles apprennent      │
        │   de la même erreur)            │
        └────────────┬────────────────────┘
                     │
        ┌────────────▼────────────────────┐
        │  RÉGULARISATION (3 méthodes)    │
        │  • Sparsité (rareté)            │
        │  • Bruit gaussien (filtrage)    │
        │  • Quantification (256 codes)   │
        └────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Introduction et contexte révolutionnaire
Présentation du paper de Yann LeCun comme une brique manquante vers l'AGI. Théorie personnelle sur la divergence humain-IA en 5 ans et l'impact du scroll sur la cognition. Avertissement sur le niveau technique (9,3/10).

### Acte 2 — Fondamentaux : World Models et prédiction du futur
Définition des World Models comme systèmes prédisant le futur. Analogies avec le cerveau humain (trajectoire de balle, gardien de but). Application aux jeux vidéo. Problème de l'incertitude sans action. Historique des World Models (1990-2026).

### Acte 3 — Le goulot d'étranglement : annotation des actions
Impossibilité d'annoter les actions à grande échelle (vidéos de conduite, cuisine, danse). Énormité du dataset YouTube (1 milliard de clips, zéro annotation). Pyramide des actions : simple → navigation → manipulation → in the wild. Comparaison des sources de données et leurs limitations.

### Acte 4 — Solution : Actions latentes et système à deux composants
Concept d'actions latentes comme déductions non observables. Analogie du détective. Système IDM (détective) + World Model (oracle). Entraînement conjoint. Risque de triche et solution par régularisation. Structure en vecteur de 128 dimensions.

### Acte 5 — Architecture technique du système
Encodeur VJPA 2-L préentraîné et gelé. Vision Transformer Large (300M paramètres). Positional embeddings rotatifs (RoPE) et conditionnement AdaLN-Zero. Compression pixels → vecteurs compacts. Analogie avec l'égaliseur musical pour les 128 dimensions.

### Acte 6 — Trois méthodes de régularisation
Parsimonie (sparsité) : forcer la rareté des valeurs non nulles. Bruit gaussien (noisy) : ajouter du bruit aléatoire, seule l'info importante survit. Quantification (discrete) : limiter à un codebook de 256 codes. Comparaison des performances : discrete échoue sur actions complexes.

### Acte 7 — Entraînement In the Wild et résultats
Entraînement sur YouTube Temporal 1B (1 milliard de clips, 140 années de vidéo, 490 millions de frames). Batch size 1024, 30000 itérations. Dataset disponible sur GitHub (20 millions de vidéos). Défis spécifiques des vidéos non contrôlées.

## Philosophie IA & Pensée profonde

L'IA n'a pas besoin d'annotation humaine pour comprendre le monde physique et les actions ; elle peut déduire les causalités en observant simplement des vidéos naturelles, comme le cerveau humain apprend par observation. Les IA n'ont pas de plafond cognitif contrairement aux humains, et leur croissance exponentielle (x2 par an) les rendra surhumaines dans 5 ans, créant une divergence irréversible avec ceux qui ne s'augmentent pas.

Meta et Yann LeCun ont créé un système où l'IA apprend la physique et les actions directement à partir de vidéos YouTube non annotées, en déduisant les actions latentes via un modèle inverse et en prédisant le futur via un world model entraînés conjointement. C'est le passage du niveau 'jeux vidéo contrôlés' au niveau 'vidéos réelles complexes', éliminant le besoin d'annotation humaine à grande échelle. Cette approche représente une brique majeure vers l'AGI car elle reproduit comment le cerveau humain apprend : par observation passive de causalités dans le monde réel.

## Prompting & Sagesse d'usage

- Méfie-toi de tous ceux qui ont des certitudes sur le fonctionnement de l'IA. Un vrai expert te dira qu'il ne connaît pas, car les réseaux neuronaux sont des boîtes noires
- Pour augmenter ta part malléable du cerveau avec l'IA, tu dois apprendre activement et efficacement, pas scroller passivement sur les réseaux sociaux
- Comprendre comment l'IA fonctionne maintenant est une certitude mathématique pour ne pas devenir obsolète dans 5 ans

## Concepts clés expliqués

### World Model
Un système qui prédit l'état futur du monde en observant l'état actuel et l'action prise. Analogue à ta capacité à imaginer où ira une balle si tu la lances.
**Pourquoi c'est important** : C'est la base de la planification et de la prédiction. Sans world model, l'IA ne peut pas anticiper les conséquences de ses actions. C'est une brique fondamentale vers l'AGI.

### Actions latentes
Actions non directement observables mais inférées à partir des observations. Représentées comme un vecteur de 128 nombres où chaque nombre contrôle un aspect du changement entre deux frames.
**Pourquoi c'est important** : Élimine le besoin d'annoter manuellement les actions. L'IA déduit elle-même ce qui s'est passé entre deux images, comme un détective.

### Inverse Dynamics Model (IDM)
Modèle qui regarde deux frames consécutifs et déduit quelle action a causé le changement entre elles. C'est l'inverse d'un world model : au lieu de prédire le futur, il déduit le passé.
**Pourquoi c'est important** : Permet d'extraire les actions latentes à partir de vidéos non annotées. C'est le 'détective' qui déduit ce qui s'est passé.

### Régularisation
Technique limitant la quantité d'informations que l'action latente peut contenir. Trois méthodes : sparsité (rareté), bruit gaussien (filtrage), quantification (codebook discret).
**Pourquoi c'est important** : Empêche le modèle de 'tricher' en mettant toute l'information dans l'action latente. Force le système à apprendre la physique réelle, pas juste des corrélations visuelles.

### Entraînement In the Wild
Entraînement sur des vidéos non contrôlées, non annotées, capturées dans des conditions réelles et diverses (YouTube, TikTok, etc.).
**Pourquoi c'est important** : Représente la transition de l'IA de laboratoire à l'IA du monde réel. Les vidéos YouTube contiennent la diversité maximale de la physique humaine et naturelle.

### Boîte noire (Black Box)
Processus interne des réseaux neuronaux où personne ne maîtrise concrètement les probabilités de ce qui se passe, même les créateurs. On observe les inputs et outputs, mais le processus interne reste opaque.
**Pourquoi c'est important** : Accepter que l'IA soit une boîte noire est crucial pour comprendre ses limites. Un vrai expert te dira qu'il ne connaît pas le fonctionnement interne, pas qu'il a des certitudes.

### Vision Transformer (ViT-L)
Architecture de réseau neuronal avec 300 millions de paramètres utilisée comme World Model. Utilise des positional embeddings rotatifs (RoPE) et un conditionnement AdaLN-Zero pour intégrer l'action latente.
**Pourquoi c'est important** : C'est l'architecture choisie pour prédire l'état futur. Les 300 millions de paramètres lui permettent de capturer la complexité des vidéos YouTube.

### Entraînement conjoint IDM + World Model
Les deux modèles sont entraînés ensemble sur la même erreur. Si l'IDM déduit mal l'action, le World Model ne peut pas prédire correctement, et vice-versa. C'est une boucle de validation croisée.
**Pourquoi c'est important** : Crée une auto-correction émergente sans supervision externe. Les deux modèles se valident mutuellement, ce qui force le système à apprendre la physique réelle.

## Insights non-évidents

- Insight 1 : Le système ne 'comprend' pas les actions au sens humain, il apprend une représentation compressée (128 dimensions) où chaque dimension capture un aspect du changement. C'est une boîte noire qui fonctionne, pas une explication intelligible.
- Insight 2 : La régularisation n'est pas une optimisation technique mineure, c'est la clé pour empêcher le modèle de 'tricher' en encodant toute l'information dans les actions latentes. Sans elle, le système apprendrait rien sur la physique réelle.
- Insight 3 : L'entraînement conjoint IDM + World Model crée une boucle de validation : si l'IDM déduit mal l'action, le World Model ne peut pas prédire correctement, et vice-versa. C'est une auto-correction émergente sans supervision.
- Insight 4 : Le passage de 'actions discrètes' (Atari) à 'actions continues' (vidéos réelles) est un changement de paradigme : les vidéos YouTube ne contiennent pas d'actions étiquetées, donc le système doit les inventer et les valider lui-même.
- Insight 5 : L'utilisation de YouTube Temporal 1B (1 milliard de clips = 140 années de vidéo) n'est pas juste 'plus de données', c'est l'accès à la diversité maximale de la physique humaine et naturelle sans coût d'annotation.

## Mental models

- {'modele': "Le détective et l'oracle", 'description': "IDM = détective qui regarde deux photos de crime et déduit ce qui s'est passé. World Model = oracle qui regarde la première photo et l'action déduite, puis prédit la deuxième photo. Ensemble, ils s'auto-valident : si le détective se trompe, l'oracle ne peut pas prédire correctement."}
- {'modele': "L'égaliseur musical", 'description': "Les 128 dimensions de l'action latente fonctionnent comme un égaliseur audio : chaque curseur (dimension) contrôle un aspect différent du changement. Ensemble, ils créent la 'mélodie' du mouvement. Personne ne sait ce que chaque curseur représente exactement, mais ensemble ils produisent le bon son."}
- {'modele': 'La pyramide des actions', 'description': 'Niveau 1 (simple) : Atari, actions discrètes, environnement contrôlé. Niveau 2 (navigation) : robotique en lab, mouvements simples. Niveau 3 (manipulation) : objets réels, interactions complexes. Niveau 4 (in the wild) : vidéos YouTube, chaos total, diversité infinie. Ce paper attaque le niveau 4, le plus difficile.'}
- {'modele': 'La boîte noire avec feedback', 'description': "Personne ne sait ce qui se passe à l'intérieur du réseau neuronal (boîte noire). Mais si tu donnes un input et que l'output est correct, tu sais que quelque chose de juste s'est passé dedans. L'entraînement conjoint crée une validation croisée : deux boîtes noires qui se valident mutuellement."}
- {'modele': 'La régularisation comme menottes', 'description': "Sans régularisation, le modèle pourrait 'tricher' en mettant toute l'information dans l'action latente (128 dimensions) et en ignorant la physique réelle. La régularisation met des menottes : sparsité (force la rareté), bruit (tue les détails inutiles), quantification (limite à 256 codes). Seule l'info importante survit."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment les robots vont concrètement apprendre en regardant YouTube et transférer ces connaissances au monde physique
- Sujet mentionné mais non développé : Les applications pratiques immédiates en robotique et manipulation d'objets
- Question ouverte laissée sans réponse : Quels sont exactement les 128 aspects/dimensions que le modèle apprend automatiquement ?
- Question ouverte laissée sans réponse : Comment éviter complètement la triche du modèle avec les trois méthodes de régularisation ?
- Sujet mentionné mais non développé : Les défis spécifiques de l'entraînement in the wild (énumérés mais non détaillés)
- Implication 1 : Si ce système fonctionne sur YouTube, les robots physiques pourraient apprendre en regardant des vidéos de manipulation d'objets, puis transférer cette connaissance au monde réel via sim-to-real. Cela n'est pas trivial et reste un défi ouvert.
- Implication 2 : Les 128 dimensions de l'action latente ne correspondent probablement pas à des concepts humains compréhensibles (vitesse, direction, force). C'est une représentation optimale pour la prédiction, pas pour l'interprétabilité. Cela renforce le problème des 'boîtes noires'.
- Implication 3 : Le système apprend la physique moyenne des vidéos YouTube, qui est biaisée vers les contenus humains (cuisine, danse, conduite). Il ne verra jamais certains phénomènes physiques rares ou extrêmes. Ses 'connaissances' sont limitées par son corpus.
- Implication 4 : La citation 'Nia peut comprendre la physique sans aide humaine' est trompeuse : Nia comprend les patterns statistiques des vidéos YouTube, pas la physique au sens scientifique. C'est une prédiction, pas une compréhension causale.
- Implication 5 : L'absence d'annotation humaine est un avantage économique massif, mais crée un problème de validation : comment vérifier que le système apprend vraiment la physique et pas juste des corrélations visuelles superficielles?

## Ce que tu peux faire maintenant

- [ ] Comprendre que l'annotation humaine n'est pas toujours nécessaire : si tu as deux états consécutifs et une prédiction du futur, tu peux déduire l'action latente. Applique cette logique à tes propres problèmes IA.
- [ ] Réfléchir à comment tu pourrais utiliser des vidéos non annotées pour entraîner des modèles. Au lieu de payer pour annoter des données, peux-tu créer une boucle d'auto-validation comme IDM + World Model?
- [ ] Accepter que les réseaux neuronaux sont des boîtes noires et arrêter de chercher des certitudes. Un vrai expert en IA te dira 'je ne sais pas' plus souvent qu'il ne te donnera des réponses définitives.
- [ ] Évaluer l'impact du scroll passif sur ta cognition (attention, mémoire de travail, tolérance à l'effort). Chaque heure de scroll réduit ces capacités de façon mesurable. Remplace par de l'apprentissage actif avec l'IA.
- [ ] Commencer à penser en termes de 'représentations latentes' plutôt que de 'concepts explicites'. Les 128 dimensions de l'action latente ne correspondent pas à des mots humains, mais elles capturent la réalité mieux que nos catégories.
- [ ] Étudier comment les robots pourraient apprendre en regardant YouTube et transférer cette connaissance au monde physique. C'est la prochaine frontière et elle arrive vite.
- [ ] Augmenter ta 'part malléable du cerveau' en apprenant activement comment l'IA fonctionne. Dans 5 ans, ceux qui comprennent l'IA seront surhumains, ceux qui ne la comprennent pas deviendront plus débiles (divergence irréversible).

## Business & Monétisation

- Robotique : les entreprises de robotique pourraient utiliser ce système pour entraîner des robots à partir de vidéos YouTube, réduisant drastiquement les coûts de développement.
- Simulation et jeux vidéo : les studios pourraient générer des comportements réalistes en entraînant des world models sur des vidéos de gameplay réel.
- Surveillance et analyse vidéo : les systèmes de sécurité pourraient prédire les actions futures en observant les vidéos de surveillance, permettant une détection d'anomalies proactive.
- Contenu généré par IA : les créateurs pourraient générer des vidéos réalistes en utilisant des world models entraînés sur des vidéos existantes.
- Données synthétiques : au lieu de collecter des données annotées coûteuses, les entreprises pourraient générer des données synthétiques réalistes avec des world models.
- Accès au dataset GitHub : Meta a publié 20 millions de vidéos sur GitHub. Les startups pourraient construire des applications spécialisées sur ce dataset sans coûts de collecte.

## Définitions

- **World Model** : Système d'IA capable de prédire ce qui va se passer dans le futur en observant l'état actuel, analogue à la capacité du cerveau humain à imaginer la trajectoire d'une balle
- **Actions latentes** : Actions non directement observables mais inférées à partir des observations, représentées sous forme de vecteur de 128 dimensions où chaque dimension contrôle un aspect du changement
- **Inverse Dynamics Model (IDM)** : Modèle qui regarde deux frames consécutifs et déduit quelle action a causé le changement entre elles, comme un détective déduisant ce qui s'est passé
- **Boîte noire (Black Box)** : Processus interne des réseaux neuronaux où personne ne maîtrise concrètement les probabilités de ce qui se passe, même les créateurs
- **Régularisation** : Technique limitant la quantité d'informations que l'action latente peut contenir pour éviter que le modèle ne triche
- **Entraînement In the Wild** : Entraînement sur des vidéos non contrôlées captées dans des conditions réelles et diverses sans aucune annotation d'action
- **Gelé (Frozen)** : État d'un modèle qui ne change pas pendant l'entraînement, ses paramètres restent fixes

## Outils & techniques mentionnés

- **VJPA 2-L** : Encodeur vision préentraîné par Meta, gelé pendant l'entraînement
- **Vision Transformer Large (ViT-L)** : World Model avec 300 millions de paramètres pour prédire l'état futur
- **YouTube Temporal 1B** : Dataset de 1 milliard de clips vidéo YouTube sans annotation
- **How to 100M** : Dataset de 136 millions de clips vidéo tutoriels
- Entraînement conjoint IDM + World Model
- Régularisation par parsimonie (sparsité)
- Régularisation par bruit gaussien (noisy)
- Quantification en codebook discret
- Positional embeddings rotatifs (RoPE)
- Conditionnement AdaLN-Zero
- Apprentissage sur vidéos 'in the wild' non annotées
- Actions continues vs discrètes
- Compression de pixels en vecteurs compacts

## Connexions avec d'autres sujets IA

- Diffusion models : les world models partagent la même logique que les diffusion models (prédire l'état suivant à partir du précédent), mais appliquée à la vidéo au lieu du bruit.
- Reinforcement Learning : les world models sont la base de la planification en RL. Avec un bon world model, tu peux planifier sans interagir avec l'environnement réel.
- Transformers et attention : le Vision Transformer utilise des mécanismes d'attention pour capturer les dépendances spatiales et temporelles dans les vidéos.
- Représentations latentes : les actions latentes (128 dimensions) sont un exemple de représentation compressée, comme les embeddings en NLP ou les latent codes en VAE.
- Sim-to-real transfer : le défi suivant est de transférer les connaissances apprises sur YouTube vers des robots physiques. C'est un problème ouvert majeur.
- Causalité et intervention : le système apprend les corrélations, pas les relations causales. Comprendre la causalité nécessiterait des interventions (expériences), pas juste l'observation.
- Interpretability : les 128 dimensions de l'action latente sont une boîte noire. Comprendre ce que chaque dimension représente est un défi d'interprétabilité majeur.
- Data scaling : le paper démontre que l'IA peut apprendre à partir de données massives non annotées (1 milliard de clips). C'est une validation de la loi de scaling : plus de données = meilleur modèle.

## Prérequis de compréhension

Pour absorber cette vidéo, tu dois déjà comprendre : (1) Les bases des réseaux neuronaux (forward pass, backprop, loss functions), (2) La différence entre apprentissage supervisé et non supervisé, (3) Les concepts de world models et prédiction du futur (au moins au niveau conceptuel), (4) Pourquoi l'annotation humaine est coûteuse et comment l'éviter, (5) La notion de représentation latente (embeddings, compression), (6) Les défis de l'IA : boîtes noires, validation, généralisation. Si tu maîtrises ces concepts, tu peux absorber le paper. Sinon, commence par les fondamentaux des transformers et de la vision par ordinateur.

## Citations notables

> Nia peut comprendre la physique et les conséquences de ses actions sans aucune aide humaine

> Les neural network, les réseaux neurones sont des boîtes noires. On observe les inputs et les outputs. Il y a un process en interne qui se passe mais il y a personne qui ne maîtrise concrètement les probabilités

> Méfie-toi de tous ceux qui ont des certitudes là-dedans. Un vrai expert te dira qu'il connaît pas

> Le fossé se creuse maintenant, pas dans 10 ans, pas bientôt

> Les débiles vont devenir plus débiles, les augmentés vont devenir surhumains

> Chaque heure de scroll réduit ta capacité d'attention, ta mémoire de travail et ta tolérance à l'effort cognitif de façon mesurable

> Seule l'information importante survit au bruit

> Les actions discrètes ne fonctionnent pas bien pour les vidéos In the Wild, mais les actions continues sont bien plus flexibles
