# Un étudiant de 20 ans crée l'IA #1 GitHub (MiroFish)

**Date** : 2026-04-04 | **Durée** : 45:06 | **Niveau** : intermédiaire | **Catégorie** : Info & Actualité IA | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=Y8biCoPYmTo

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi Swarm Intelligence change tout | section Philosophie IA et Mental Models |
| voir comment construire un système multi-agents | section Concepts clés expliqués et Schema ASCII |
| appliquer Mirofish à un cas réel | section Ce que tu peux faire maintenant |
| explorer les implications éthiques | section Ce qu'il ne dit pas |
| aller plus loin techniquement | section Ouvertures |

## Résumé

Mirofish est un outil open-source chinois créé en 10 jours par un développeur de 20 ans qui utilise l'intelligence collective (Swarm Intelligence) pour simuler des milliers d'agents IA avec des personnalités uniques. L'outil combine Graph RAG pour l'extraction de concepts, le moteur Oasis pour gérer jusqu'à 1 million d'agents, et ZepCloud pour la mémoire persistante. Il permet de tester comment le marché réagira à un produit, une annonce ou une décision avant sa publication réelle, en simulant des débats sur Twitter et Reddit en parallèle. Le créateur a reçu 4,1 millions de dollars d'investissement en 24 heures et le projet a atteint le numéro 1 sur GitHub en avril 2026.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    MIROFISH ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  INPUT DOCUMENT  ->  [GRAPH RAG]  ->  KNOWLEDGE GRAPH        │
│                                              |                │
│                                              v                │
│  AGENT GENERATION  <-  [Personality + Memory + Rules]        │
│       |                                                       │
│       v                                                       │
│  [OASIS ENGINE: 1M Agents]                                   │
│       |                                                       │
│       +---> BEHAVIORAL LOOP (each agent, each turn)          │
│       |     ┌─ Perception (read feed + memory)               │
│       |     ├─ Thinking (reason by personality)              │
│       |     ├─ Action (post/like/ignore)                     │
│       |     └─ Memory (ZepCloud: persist + summarize)        │
│       |                                                       │
│       v                                                       │
│  PARALLEL SIMULATION (Twitter + Reddit)                      │
│       |                                                       │
│       v                                                       │
│  [ANALYSIS] -> Opinion shifts, patterns, predictions         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Introduction et contexte du problème
Présentation de Mirofish comme solution révolutionnaire pour tester les réactions du marché. Problème identifié : les humains et les IA classiques sont biaisés et ne peuvent pas simuler les réactions réelles du marché. Contexte : créateur chinois de 20 ans, investissement massif, adoption explosive sur GitHub.

### Acte 2 — Fondamentaux techniques et architecture
Explication du concept de Swarm Intelligence via l'analogie des fourmis. Description des 5 étapes du pipeline : Graph RAG, génération d'agents, simulation, rapport, interaction. Détail des composants : Oasis Engine (1 million d'agents), ZepCloud (mémoire persistante), boucle comportementale (Perception-Pensée-Action-Mémorisation).

### Acte 3 — Cas d'usage et preuves de concept
Cas concrets : prédictions de paris sur PolyMarket (2 847 agents, $4 266 de profits), reconstruction de fin de roman chinois. Cas d'usage business : test de prix, restructuration, positionnement marketing. Démystification des mythes : Mirofish ne prédit pas l'avenir avec précision, les agents polarisent plus vite que les humains réels.

### Acte 4 — Perspective personnelle et vision future
Prise de position de l'auteur : l'outil est révolutionnaire mais nécessite une compréhension profonde. Annonce d'une solution propriétaire en open-source développée avec ses meilleurs étudiants, dédiée à Isaac Asimov. Appel à la vigilance sur les usages potentiellement manipulatoires.

### Acte 5 — Démonstration pratique et setup technique
Installation locale de Mirofish via Cloud Code. Configuration des API keys (Open Router, ZepCloud). Préparation d'un cas d'usage réel : test de lancement d'un programme Elite à 497€/mois. Importance de préparer le contexte et les questions avant de lancer la simulation.

## Philosophie IA & Pensée profonde

L'IA n'est pas une entité unique mais un système collectif où l'intelligence émerge de l'interaction de nombreux agents simples suivant des règles basiques, similaire à la nature (colonies de fourmis). La mémoire persistante et contextuelle est fondamentale pour créer des comportements réalistes : sans elle, les agents ne peuvent pas vraiment apprendre ou évoluer comme des humains.

Mirofish démontre que l'intelligence collective émerge quand des milliers d'agents IA simples, dotés de mémoire persistante et de personnalités uniques, interagissent selon des règles comportementales basiques (Perception-Pensée-Action-Mémorisation). Cet outil transforme la prédiction de marché en simulation testable : au lieu de demander à une IA unique ce qu'elle pense, on crée un écosystème d'agents qui débattent, changent d'avis et polarisent comme des humains réels. C'est un changement de paradigme fondamental : passer de l'IA comme oracle à l'IA comme laboratoire social.

## Prompting & Sagesse d'usage

- Préparez votre contexte avant de lancer une simulation : définissez clairement votre objectif, identifiez les tensions connues, et formulez des questions de prédiction spécifiques
- Utilisez l'anglais de préférence pour les prompts de simulation, même si votre document d'entrée est en français, car les modèles IA répondent mieux en anglais
- Ne confondez pas open-source et gratuit : les simulations coûtent entre 50 cents et 1 000€ selon la complexité et le modèle utilisé
- Lancez plusieurs simulations en parallèle pour comparer des hypothèses plutôt que de tester séquentiellement
- Soyez conscient que les agents IA polarisent plus vite que les humains réels, donc les résultats peuvent être plus extrêmes que la réalité

## Concepts clés expliqués

### Swarm Intelligence
Principe où des milliers d'agents simples, suivant des règles basiques et locales, créent collectivement des comportements complexes et intelligents. Exemple : une colonie de fourmis sans chef central trouve le chemin le plus court, construit des ponts, résout des problèmes complexes.
**Pourquoi c'est important** : C'est le fondement philosophique de Mirofish. Au lieu de créer une IA super-intelligente, on crée des milliers d'IA simples qui interagissent. L'intelligence émerge de la collectivité, pas de la sophistication individuelle. C'est plus réaliste, plus scalable, et plus robuste.

### Graph RAG (Retrieval-Augmented Generation via Knowledge Graphs)
Technique qui extrait les concepts clés et les relations d'un document texte, puis les organise en graphe (nœuds = concepts, arêtes = relations). Cela crée une 'structure sémantique' que les agents peuvent utiliser comme base de connaissance.
**Pourquoi c'est important** : Sans Graph RAG, tu donnerais du texte brut aux agents et ils ne comprendraient pas la structure. Avec Graph RAG, tu transformes le texte en une structure logique que les agents peuvent naviguer, interroger, et utiliser pour raisonner. C'est la différence entre 'lire un document' et 'comprendre un document'.

### Persistent Memory (Mémoire Persistante)
Système où chaque agent conserve un historique de ses expériences, interactions, et apprentissages à travers les tours de simulation. ZepCloud résume automatiquement cet historique pour éviter que la mémoire ne devienne trop grande.
**Pourquoi c'est important** : La mémoire persistante est ce qui rend les agents 'réalistes'. Sans elle, chaque agent recommence à zéro chaque tour et ne peut pas vraiment apprendre ou évoluer. Avec elle, les agents développent des trajectoires personnelles, des changements d'opinion, des apprentissages. C'est ce qui crée l'illusion (et la réalité) d'une personnalité.

### Behavioral Loop (Boucle Comportementale)
Cycle en 4 étapes que chaque agent exécute à chaque tour : (1) Perception : lire le feed social et ses mémoires, (2) Pensée : réfléchir selon sa personnalité et ses biais, (3) Action : poster, liker, ignorer, ou répondre, (4) Mémorisation : mettre à jour sa mémoire persistante.
**Pourquoi c'est important** : C'est le 'moteur' de la simulation. Chaque agent répète cette boucle à chaque tour, créant une dynamique qui émerge de l'interaction collective. C'est très proche du cycle OODA (Observe-Orient-Decide-Act) utilisé en stratégie militaire et en IA.

### Oasis Engine
Moteur d'exécution capable de gérer jusqu'à 1 million d'agents IA simultanément, chacun avec sa propre personnalité, mémoire, et boucle comportementale. Développé par un consortium international (Shanghai, Oxford, Coast).
**Pourquoi c'est important** : C'est l'infrastructure qui rend Mirofish possible. Sans Oasis Engine, tu ne pourrais simuler que quelques dizaines d'agents. Avec lui, tu peux simuler des écosystèmes entiers. C'est un problème d'ingénierie massive : comment exécuter 1M de boucles comportementales en parallèle sans que le système ne s'effondre ?

### Crash Test Intelligence
Utilisation de simulations pour tester les décisions commerciales, les annonces, les produits, avant leur implémentation réelle. Au lieu de lancer et d'espérer, tu simules d'abord et tu apprends.
**Pourquoi c'est important** : C'est le cas d'usage principal de Mirofish. Au lieu de faire un focus group de 50 personnes, tu simules 10 000 agents et tu vois comment ils réagissent. C'est plus rapide, moins cher, et plus représentatif. C'est un changement de paradigme : de la prédiction intuitive à la prédiction basée sur la simulation.

### Agent Personality Generation
Processus de création de centaines ou de milliers de personas IA uniques, chacun avec sa propre personnalité, background, âge, profession, opinions, et biais. Ces personas ne sont pas des clones ; elles sont générées pour être diversifiées et représentatives.
**Pourquoi c'est important** : C'est ce qui rend la simulation réaliste. Si tous les agents avaient la même personnalité, la simulation serait triviale. Avec des milliers de personas uniques, tu captures la diversité réelle du marché et tu vois comment différents types de personnes réagissent différemment.

## Insights non-évidents

- Insight 1 : La mémoire persistante n'est pas un luxe, c'est le fondement de la réalisme comportemental. Sans elle, chaque tour de simulation repart de zéro et les agents ne peuvent pas vraiment 'apprendre' ou 'évoluer' comme des humains. C'est pourquoi ZepCloud est critique : elle transforme des agents stateless en agents avec une trajectoire personnelle.
- Insight 2 : Mirofish révèle une vérité cachée sur les réseaux sociaux réels : les algorithmes de recommandation créent déjà des 'simulations' de comportement humain. Mirofish inverse le processus : au lieu de laisser l'algorithme prédire, on crée notre propre écosystème contrôlé pour tester des hypothèses avant de les déployer.
- Insight 3 : Le créateur a reçu 4,1M$ en 24h non pas pour la technologie (qui est open-source), mais pour la validation que ce paradigme fonctionne. C'est un signal que le marché croit que 'prédire via simulation' est plus fiable que 'prédire via intuition ou modèles statistiques classiques'.
- Insight 4 : La citation 'agents polarize faster than real humans' est une bombe conceptuelle : elle signifie que Mirofish ne simule pas la réalité, elle simule une version accélérée et extrême de la réalité. C'est un outil de stress-test, pas de prédiction précise.
- Insight 5 : Graph RAG + LLM + Multi-agent simulation est une architecture qui émerge comme le nouveau standard pour transformer du texte brut en prédictions actionnables. C'est la même architecture que les systèmes de reasoning avancés (o1, DeepSeek V3).

## Mental models

- Modèle mental 1 : Penser Mirofish comme un 'laboratoire social contrôlé' plutôt qu'un 'oracle prédictif'. Tu ne cherches pas la vérité absolue, tu cherches à comprendre les dynamiques et les points de rupture. C'est comme un crash-test pour les idées.
- Modèle mental 2 : Comprendre que chaque agent est une 'mini-simulation d'un humain' avec sa propre mémoire, ses biais, ses préférences. La magie émerge de l'interaction collective, pas de la sophistication individuelle. C'est le principe de la Swarm Intelligence : simple + nombreux = complexe.
- Modèle mental 3 : Voir la boucle comportementale (Perception-Pensée-Action-Mémorisation) comme le 'cycle de vie' d'un agent. Chaque tour, l'agent vit une micro-vie : il perçoit son environnement, réfléchit selon sa personnalité, agit, puis se souvient. C'est un modèle très proche de la cognition humaine réelle.
- Modèle mental 4 : Penser Graph RAG comme la 'traduction' entre le langage humain et la structure machine. Au lieu de donner des instructions directes, tu donnes un document, et Graph RAG en extrait les concepts clés et les relations. C'est une forme de 'compréhension sémantique' qui prépare le terrain pour la simulation.
- Modèle mental 5 : Comprendre que la mémoire persistante (ZepCloud) est ce qui transforme une simulation stateless en une simulation avec 'histoire'. Sans elle, chaque agent recommence à zéro chaque tour. Avec elle, les agents développent des trajectoires, des évolutions, des apprentissages. C'est la différence entre un chatbot et une personnalité.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment exactement le moteur Oasis gère-t-il 1 million d'agents simultanément ? Quelles sont les limites computationnelles ?
- Question ouverte laissée sans réponse : Quel est le taux de précision réel de Mirofish comparé aux réactions réelles du marché ? Existe-t-il des benchmarks publiés ?
- Sujet mentionné mais non développé : Les implications éthiques et légales de la manipulation d'opinion via cet outil
- Question ouverte : Comment les agents gèrent-ils les contradictions ou les informations conflictuelles dans leurs mémoires persistantes ?
- Sujet mentionné mais non développé : La différence de comportement entre agents simulés en français vs anglais et ses implications
- Implication non-dite 1 : Si Mirofish peut prédire les réactions du marché, elle peut aussi les manipuler. Le créateur l'admet à la fin ('double-edged sword'), mais ne développe pas les implications légales et éthiques. Qui régule l'usage de cet outil pour la désinformation ?
- Ce qu'on peut en déduire : Les gouvernements et les régulateurs vont probablement chercher à contrôler ou interdire cet outil, comme ils l'ont fait avec d'autres technologies de manipulation de masse.
- Implication non-dite 2 : Le coût de simulation (50€ à 1000€ par run) crée une barrière économique. Seules les grandes entreprises et les gouvernements peuvent vraiment l'utiliser à grande échelle. C'est un outil de pouvoir asymétrique.
- Ce qu'on peut en déduire : L'open-source ne suffit pas à démocratiser l'outil si les coûts d'exécution restent élevés. Il y aura probablement une version 'freemium' ou des alternatives moins chères qui émergeront.
- Implication non-dite 3 : Le créateur mentionne que les agents IA polarisent plus vite que les humains réels. Cela signifie que les simulations Mirofish vont systématiquement sur-estimer la polarisation et sous-estimer le consensus. Aucun benchmark n'est fourni pour quantifier cet écart.
- Ce qu'on peut en déduire : Les décisions prises sur la base de Mirofish pourraient être systématiquement biaisées vers l'extrême. Il faut toujours appliquer un 'facteur de correction' basé sur des données réelles.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Installer Mirofish localement via Cloud Code et configurer tes API keys (Open Router, ZepCloud). Cela te prend 30 minutes et te donne accès à l'outil.
- [ ] Action 2 : Identifier un cas d'usage réel dans ton business ou ton projet : un lancement de produit, une annonce, une restructuration, un changement de prix. Prépare un document d'entrée (1-2 pages) décrivant le contexte et les questions clés.
- [ ] Action 3 : Utiliser Graph RAG pour extraire les concepts clés de ton document et créer une knowledge graph. Cela te force à clarifier ta pensée et à structurer ton problème.
- [ ] Action 4 : Lancer une simulation avec 500-1000 agents sur 5-10 tours. Observe comment les opinions évoluent, qui change d'avis, quels sont les points de rupture. Cela te prend 1-2 heures et coûte 50-200€.
- [ ] Action 5 : Comparer les résultats de la simulation avec tes intuitions initiales. Où te trompais-tu ? Où avais-tu raison ? Cela te calibre sur la fiabilité de Mirofish pour ton contexte spécifique.
- [ ] Action 6 : Lancer plusieurs simulations en parallèle avec des hypothèses différentes (prix différents, messages différents, audiences différentes). Cela te permet de comparer et de trouver l'option optimale.
- [ ] Action 7 : Documenter tes apprenants et créer un 'benchmark interne' : pour chaque simulation, compare les prédictions avec les résultats réels une fois que tu as lancé. Cela te permet de calibrer le 'facteur de correction' pour tes futures simulations.
- [ ] Action 8 : Rejoindre la communauté Mirofish sur GitHub (49k+ stars) et apprendre des cas d'usage des autres : PolyMarket (prédictions de paris), Dream in the Red Pavilion (reconstruction de fiction), etc.

## Business & Monétisation

- Angle 1 : Vendre des 'simulations de marché' comme service B2B. Au lieu de faire des focus groups coûteux, les entreprises paient pour une simulation Mirofish. Marge : 70-80% (coût de simulation 50-200€, prix de vente 500-2000€).
- Angle 2 : Créer une plateforme SaaS 'Mirofish as a Service' avec interface no-code. Les clients uploadent un document, cliquent sur 'Simulate', et reçoivent un rapport. Modèle : abonnement mensuel (500-5000€) ou pay-per-simulation.
- Angle 3 : Vendre des 'personas pré-générées' pour des industries spécifiques (e-commerce, SaaS, politique, finance). Au lieu de générer des personas from scratch, les clients utilisent tes personas validées. Marge : très élevée (coût marginal quasi-zéro).
- Angle 4 : Offrir du consulting : aider les clients à préparer leur simulation, interpréter les résultats, et prendre des décisions basées sur les insights. Tarif : 5000-50000€ par projet.
- Angle 5 : Créer des 'templates de simulation' pour des cas d'usage courants (lancement de produit, changement de prix, crise de réputation, etc.). Vendre ces templates sur une marketplace. Marge : très élevée.
- Angle 6 : Monétiser via les données : avec la permission des clients, agréger les données de simulation pour créer des 'rapports d'industrie' (e.g., 'Comment les consommateurs réagissent aux augmentations de prix en 2026'). Vendre ces rapports à des investisseurs, des consultants, des gouvernements.
- Angle 7 : Créer une version 'gratuite' avec limitations (max 100 agents, 3 tours, 1 simulation/mois) et une version 'pro' payante. Freemium model : 10-20% de conversion, LTV 5000-20000€.

## Définitions

- **Swarm Intelligence** : Principe où une colonie d'agents simples (comme des fourmis) crée des comportements collectifs intelligents en suivant des règles basiques, capable de résoudre des problèmes complexes
- **Graph RAG** : Technique d'extraction de concepts et de relations à partir de documents pour créer un graphe de connaissances avec nœuds et arêtes
- **Persistent Memory** : Système de mémoire qui persiste à travers les tours de simulation, stockant l'historique de chaque agent et le résumant automatiquement
- **Behavioral Loop** : Cycle en 4 étapes : Perception (lire le feed et mémoires), Pensée (réfléchir selon personnalité), Action (poster, liker, ignorer), Mémorisation (mettre à jour la mémoire)
- **Crash Test Intelligence** : Utilisation de simulations pour tester les décisions commerciales avant leur implémentation réelle

## Outils & techniques mentionnés

- **Mirofish** : Outil de simulation multi-agents pour tester les réactions du marché avant publication
- **Oasis Engine** : Moteur capable de gérer jusqu'à 1 million d'agents IA avec personnalités uniques
- **ZepCloud** : Système de mémoire persistante pour les agents, stockage et résumé automatique des expériences
- **Graph RAG** : Extraction de concepts et création de graphes de connaissances à partir de documents
- **Open Router** : Plateforme multi-LLM et multi-fournisseur pour accéder à différents modèles IA
- **DeepSeek V3.2** : Modèle IA utilisé pour la simulation dans la démonstration
- **Cloud Code** : Outil de développement et d'automatisation mentionné pour configurer Mirofish
- Extraction de concepts par LLM
- Construction de graphes de connaissances
- Génération de personas IA uniques
- Simulation multi-tours avec boucles de comportement
- Perception-Pensée-Action-Mémorisation (cycle comportemental)
- Résumé automatique de mémoire longue
- Recherche sémantique
- Analyse par loop reasoning
- Simulation parallèle de réseaux sociaux (Twitter et Reddit)
- Détection de changements d'opinion et de patterns

## Connexions avec d'autres sujets IA

- Reasoning avancé (o1, DeepSeek V3) : Mirofish utilise le même principe que les modèles de reasoning : au lieu de répondre directement, on crée une 'boucle de pensée' où l'agent réfléchit, teste, corrige, et mémorise. C'est une forme de 'reasoning distribué'.
- Retrieval-Augmented Generation (RAG) : Graph RAG est une évolution du RAG classique. Au lieu de chercher des documents similaires, on cherche des concepts et des relations dans un graphe de connaissances. C'est plus structuré et plus sémantique.
- Multi-agent systems et orchestration : Mirofish est un cas d'usage avancé de multi-agent systems. Les concepts d'orchestration, de communication inter-agents, et de résolution de conflits sont tous présents.
- Knowledge graphs et semantic search : Graph RAG crée des knowledge graphs. Ces graphes peuvent être interrogés avec des requêtes sémantiques, ce qui est un domaine actif de recherche en IA.
- Memory systems et long-context LLMs : ZepCloud est un système de mémoire persistante. C'est lié aux recherches sur les long-context LLMs (Claude 200k, GPT-4 128k) et sur comment les modèles peuvent 'se souvenir' à long terme.
- Behavioral simulation et agent-based modeling : Mirofish est une application moderne de l'agent-based modeling (ABM), un domaine classique en économie computationnelle et en sciences sociales.
- Opinion dynamics et social network analysis : Les simulations de Mirofish sur Twitter et Reddit sont des études d'opinion dynamics. C'est lié aux recherches sur comment les opinions se propagent et se polarisent dans les réseaux sociaux.
- Prompt engineering et few-shot learning : La qualité des simulations dépend fortement de comment on 'prompt' les agents. C'est un domaine où le prompt engineering et le few-shot learning sont critiques.
- Evaluation et benchmarking : Un grand défi non résolu est comment évaluer la précision de Mirofish. Cela nécessite des benchmarks robustes et des méthodes de validation contre des données réelles.
- Ethics et AI safety : Mirofish soulève des questions éthiques majeures : peut-on l'utiliser pour manipuler l'opinion ? Comment régule-t-on cet outil ? C'est un sujet d'AI safety et d'éthique.

## Prérequis de compréhension

Pour absorber cette vidéo pleinement, tu dois avoir compris : (1) Les bases des LLMs et comment ils 'pensent', (2) Le concept de prompting et comment les instructions affectent les réponses, (3) La différence entre un modèle unique et un système multi-agent, (4) Les bases de la simulation et du modeling computationnel, (5) Comment les réseaux sociaux fonctionnent et comment les opinions se propagent, (6) Les concepts de mémoire et de contexte dans les LLMs. Si tu ne maîtrises pas ces concepts, la vidéo te semblera magique plutôt que compréhensible. Je recommande de d'abord regarder des vidéos sur 'comment fonctionnent les LLMs', 'prompting avancé', et 'multi-agent systems' avant de plonger dans Mirofish.

## Citations notables

> It's a SimCity that allows you to make AI predictions

> An ant is alone, it's pretty simple, it's going to follow basic rules. While an ant colony, thousands of ants, maybe even millions, they're going to find the shortest way, they're going to build bridges, they're going to solve complex problems

> It's used to test how people will react to your idea before publishing it

> Each agent will be unique. So if we dissect the anatomy of a single agent... she will have her personality, background, age, profession, her own memory with historic persistent with ZEP Cloud

> Agents behave like real humans. In fact, they're going to polarize faster

> Mirofish doesn't predict the future with precision. It's just going to simulate plausible scenarios

> It's a double-edged sword. This same tool can predict an opinion. But it can also be used to manipulate it
