# 65% de l'IA vient de CHINE et personne n'en parle (preuves en direct)

**Date** : 2026-01-05 | **Durée** : 41:23 | **Niveau** : avancé | **Catégorie** : Vision & Société | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=aqUzEf1xjhk

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi les agents IA actuels échouent | section Concepts clés expliqués (Paradigme d'accumulation passive) |
| voir comment REM fonctionne concrètement | section Schema ASCII et Ce que tu peux faire maintenant |
| implémenter REM dans tes projets | section Ce que tu peux faire maintenant (actions 1-3) |
| comprendre les implications philosophiques | section Mental models et Insights non-évidents |
| explorer les limites et extensions | section Ouvertures (via connexions_avec_autres_sujets_ia) |

## Résumé

Cette vidéo analyse en détail le framework REM (Remember Me, Refine Me), un système de mémoire procédurale dynamique pour agents IA créé par 6 chercheurs chinois. Le framework résout le problème fondamental des agents actuels qui accumulent passivement les données sans les trier ni les adapter. REM fonctionne en trois phases continues : acquisition d'expérience (extraction de règles via multifaceted distillation), réutilisation (recall, rerank, rewrite), et raffinement (suppression de l'obsolète). Le système utilise embeddings et similarité cosinus pour récupérer les expériences pertinentes et les adapter au contexte actuel, avec des confidence scores non-binaires.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    FRAMEWORK REM (Remember Me, Refine Me)     │
└─────────────────────────────────────────────────────────────┘

  PHASE 1: ACQUISITION              PHASE 2: RÉUTILISATION      PHASE 3: RAFFINEMENT
  ─────────────────────             ──────────────────────      ────────────────────
  
  Agent exécute 8x                  Nouvelle tâche arrive
  la même tâche                              │
         │                                   ↓
         ↓                          [Embedding → Vecteur]
  [Multifaceted Distillation]              │
         │                                   ↓
    ┌────┴────┬──────────┐         [Similarité Cosinus]
    ↓         ↓          ↓                  │
 Success  Failure  Comparative         ┌────┴────┬──────┐
 Patterns Analysis   Insights          ↓         ↓      ↓
    │         │          │          Recall  Rerank  Rewrite
    └────┬────┴──────────┘             │       │       │
         ↓                             └───┬───┴───┬───┘
  [LLM as Judge]                           ↓       ↓
    Validation                      [Adapter au contexte]
    Fusion                                 │
    Archivage                              ↓
         │                          [Exécuter & Valider]
         ↓                                 │
  [Memory Store]                          ↓
  (Confidence 0-1)                  [Garder/Jeter/Fusionner]
         │                                 │
         └─────────────────────────────────┘
              (Boucle continue)
```

## Chapitres inférés

### Acte 1 — Contexte et domination chinoise en IA
65% des papers récents sur ArXiv en IA sont créés par des chercheurs chinois, qui ne sont pas assez mis en avant. Analyse des profils des contributeurs (spécialistes en systèmes complexes, quantique, etc.). Comparaison open-source (70% chinois) vs closed-source (90% USA). Modèles phares de janvier 2026 : G Mini 3 Pro, GPT 5.2, Claude 4.5 Opus (tous fermés) vs GLM 4.7, Mistral 3, Dipsic V3 (ouverts).

### Acte 2 — Problèmes fondamentaux des agents IA actuels
Trois limitations identifiées : (1) Coarse grain trajectory level experiences (stockage de tout sans filtrer), (2) Fetched experiences applied without adaptation (réutilisation sans personnalisation), (3) Lack of timely update strategies (pas de nettoyage mémoire). Exemple concret : agent sans mémoire invente un prix d'action (échec), agent avec REM appelle d'abord get_stock_info (succès).

### Acte 3 — Critères d'un système de mémoire idéal
Trois critères : (1) High quality extraction (extraire des règles réutilisables, pas des logs bruts), (2) Task grounding (adapter les solutions au nouveau contexte), (3) Progressive optimization (garder ce qui marche, jeter l'obsolète). Analogie du chef cuisinier qui extrait les principes de ses recettes ratées sans tout rejeter.

### Acte 4 — Framework REM : structure et phases
REM = Remember Me, Refine Me. Cycle en trois phases : Phase 1 Acquisition (multifaceted distillation : 8 tentatives, extraction de success patterns, failure analysis, comparative insights). Structure d'expérience : W (usage scenario), E (experience content), K (keywords), C (confidence score 0-1), T (tools used). Validation par LLM as judge (rejet, fusion, archivage).

### Acte 5 — Phase 2 : Réutilisation et embeddings
Contexte adaptive reuse : Recall (récupérer 5 expériences similaires), Rerank (retrier par pertinence), Rewrite (reformuler). Embeddings : transformation texte en vecteurs numériques. Similarité cosinus : mesure l'angle entre vecteurs pour déterminer proximité sémantique. Exemple : 'préparer des œufs' vs 'faire une omelette' sont proches, 'chat' vs 'bouteille' sont loin.

### Acte 6 — Résultats et découvertes du paper
Quatre méthodes d'indexation testées : Recall (fouiller mémoire), Refine (adapter solution), Execute (mettre en œuvre), Reflect (observer résultats). Importance de la non-binarité des confidence scores. Projection 2026 : explosion des innovations en mémoires dynamiques, frameworks avancés intégrables dans les outils existants.

## Philosophie IA & Pensée profonde

L'IA actuelle souffre d'une accumulation passive de données sans apprentissage véritable ; les agents doivent fonctionner comme des humains qui extraient les principes de leurs erreurs, adaptent dynamiquement leurs solutions et oublient activement ce qui ne marche plus. L'intelligence véritable en IA réside non pas dans la quantité de données stockées mais dans la capacité à raffiner continuellement la qualité et la pertinence de ce qui est retenu.

Le framework REM (Remember Me, Refine Me) résout le problème fondamental des agents IA actuels : ils accumulent passivement les données sans les trier ni les adapter. REM fonctionne en trois phases continues (acquisition, réutilisation, raffinement) pour extraire des règles réutilisables des expériences, les adapter dynamiquement au contexte et supprimer activement l'obsolète. Cette approche transforme la mémoire d'une archive statique en un système d'apprentissage continu qui fonctionne comme un humain : extraire les principes de ses erreurs, adapter ses solutions et oublier ce qui ne marche plus.

## Prompting & Sagesse d'usage

- Ne pas donner des templates sans comprendre le fonctionnement sous-jacent : 'Je vais pas te donner des templates à la con, tu vas les vendre à n'importe qui sans maîtriser rien du tout'
- Lire et analyser les papers scientifiques directement plutôt que de faire traduire par un LLM : 'Prendre une documentation scientifique, la mettre dans notre bouquelem et lui demander de traduire, ce n'est pas comprendre une documentation scientifique'
- Comprendre que les agents IA doivent appeler les bons outils dans le bon ordre : exemple de l'ordre boursier où il faut d'abord vérifier le prix réel (get_stock_info) avant de placer l'ordre (place_order)
- Utiliser des confidence scores non-binaires (0 à 1) plutôt que des validations binaires (0 ou 1) pour une meilleure adaptation contextuelle
- Implémenter un système de nettoyage actif de la mémoire : supprimer ou fusionner les expériences obsolètes plutôt que de tout conserver

## Concepts clés expliqués

### Paradigme d'accumulation passive
Les agents IA actuels traitent la mémoire comme une archive statique en mode 'append-only' : ils ajoutent continuellement des données sans les trier, les adapter ou les supprimer. C'est comme un disque dur qui se remplit sans jamais nettoyer les fichiers inutiles.
**Pourquoi c'est important** : C'est le problème fondamental qui rend les agents IA actuels inefficaces à long terme. Sans nettoyage actif, la mémoire devient polluée, les recherches ralentissent et les agents confondent les expériences pertinentes avec les obsolètes.

### Mémoire procédurale dynamique
Un système de mémoire qui n'accumule pas passivement mais extrait des règles réutilisables (success patterns, failure analysis), les adapte au contexte actuel et supprime activement les informations obsolètes. C'est une mémoire vivante qui se raffine continuellement.
**Pourquoi c'est important** : C'est le cœur de REM. Elle transforme la mémoire d'une archive statique en un système d'apprentissage continu, permettant aux agents de s'améliorer exponentiellement avec le temps.

### Multifaceted distillation
Processus où l'agent exécute une tâche 8 fois avec différentes approches, puis un LLM summarizer extrait trois types d'insights : (1) success patterns (ce qui marche), (2) failure analysis (pourquoi ça échoue), (3) comparative insights (différences entre approches). C'est l'extraction de principes généralisables à partir d'expériences brutes.
**Pourquoi c'est important** : C'est la phase critique qui transforme les données brutes en connaissances réutilisables. Sans cette distillation, la mémoire reste une simple archive de logs.

### Contexte adaptive reuse
Phase 2 de REM où les expériences passées sont récupérées (recall), retriées par pertinence (rerank) et reformulées (rewrite) pour s'adapter à la nouvelle tâche. C'est l'application intelligente de l'expérience passée au présent.
**Pourquoi c'est important** : C'est ce qui rend REM pratique. Sans adaptation contextuelle, les expériences passées seraient rigides et inapplicables. Avec elle, chaque expérience devient flexible et réutilisable dans de multiples contextes.

### Embedding et similarité cosinus
Les embeddings transforment du texte en vecteurs numériques (ex: [0.1, 0.5, 0.3, ...]). La similarité cosinus mesure l'angle entre deux vecteurs : plus l'angle est petit, plus les textes sont sémantiquement similaires. C'est la mécanique qui permet de trouver les expériences pertinentes.
**Pourquoi c'est important** : C'est le moteur de recherche de REM. Sans embeddings et similarité cosinus, il n'y aurait pas de moyen efficace de trouver les expériences pertinentes parmi des milliers stockées.

### Confidence score (0 à 1)
Score non-binaire attribué à chaque expérience pour indiquer le degré de certitude de sa validité. Contrairement aux systèmes binaires (valide ou invalide), un confidence score peut être 0.7 (probablement valide) ou 0.3 (probablement invalide). C'est une probabilité, pas une certitude.
**Pourquoi c'est important** : La non-binarité est philosophiquement cruciale. Elle reconnaît que la certitude est contextuelle et dépend de la situation. Une expérience peut être 70% valide dans un contexte et 30% dans un autre. C'est plus proche du raisonnement humain.

### LLM as a judge
Un LLM utilisé pour valider les expériences extraites. Il décide si une expérience est valide (archivage), vague/incorrecte (rejet) ou dupliquée (fusion). C'est un filtre de qualité automatisé.
**Pourquoi c'est important** : Sans validation, la mémoire se pollue avec des expériences mauvaises ou redondantes. Le LLM as judge maintient la qualité de la mémoire en continu.

### REM (Remember Me, Refine Me)
Framework en trois phases continues : (1) Acquisition (extraire des règles des expériences), (2) Réutilisation (adapter et appliquer les règles), (3) Raffinement (garder ce qui marche, jeter l'obsolète). C'est une boucle infinie d'apprentissage.
**Pourquoi c'est important** : REM est le framework qui résout le problème fondamental des agents IA actuels. C'est une architecture complète pour créer des agents qui apprennent vraiment, pas juste qui accumulent.

## Insights non-évidents

- Insight 1 : REM n'est pas juste un système de cache amélioré, c'est un système d'apprentissage continu qui transforme l'agent en entité capable de généraliser. Chaque expérience n'est pas stockée brute mais distillée en principes réutilisables (success patterns, failure analysis, comparative insights), ce qui signifie que l'agent apprend à penser, pas juste à mémoriser.
- Insight 2 : La non-binarité des confidence scores (0 à 1 au lieu de 0 ou 1) est philosophiquement crucial : elle reconnaît que la certitude est contextuelle et dépend de la situation. Une expérience peut être 70% valide dans un contexte et 30% dans un autre. C'est l'inverse de la logique booléenne classique et plus proche du raisonnement humain.
- Insight 3 : Le framework REM implique que la vraie intelligence en IA réside dans la capacité à oublier activement, pas à accumuler. Les systèmes actuels souffrent de 'pollution mémoire' : plus ils accumulent, plus ils deviennent lents et confus. REM inverse ce paradigme en faisant du nettoyage une fonction première.
- Insight 4 : La domination chinoise en recherche IA open-source (65% sur ArXiv, 70% en open-source) n'est pas mentionnée par hasard. Elle signale que les innovations les plus avancées en mémoire dynamique, systèmes multi-agents et apprentissage continu viennent de l'écosystème chinois, pas occidental. C'est une inversion de la narration habituelle.
- Insight 5 : L'analogie du chef cuisinier à Shenzhen qui extrait les principes de ses recettes ratées plutôt que de tout rejeter révèle une philosophie : l'apprentissage véritable est l'extraction de principes généralisables, pas l'accumulation d'expériences brutes. C'est applicable bien au-delà de l'IA.

## Mental models

- Modèle mental 1 : Penser REM comme un système immunitaire pour l'IA. Tout comme le système immunitaire humain apprend des infections passées, crée des anticorps spécifiques et oublie les menaces obsolètes, REM apprend des erreurs passées, crée des règles réutilisables et supprime les expériences obsolètes.
- Modèle mental 2 : Penser la mémoire procédurale dynamique comme la différence entre 'avoir une bibliothèque' et 'être un lecteur intelligent'. Une bibliothèque accumule passivement les livres (paradigme actuel). Un lecteur intelligent lit, extrait les principes clés, oublie les détails inutiles et applique les principes à de nouveaux problèmes (REM).
- Modèle mental 3 : Visualiser les embeddings et la similarité cosinus comme une carte mentale multidimensionnelle. Chaque expérience est un point dans un espace à N dimensions. La similarité cosinus mesure la distance entre points. Les expériences proches sont sémantiquement similaires, les lointaines sont différentes. Récupérer les 5 expériences les plus proches = trouver les voisins les plus pertinents.
- Modèle mental 4 : Penser le confidence score comme une probabilité bayésienne. Chaque expérience a une probabilité d'être valide dans un nouveau contexte. Cette probabilité n'est pas binaire (0 ou 1) mais continue (0 à 1). Elle peut être mise à jour à chaque nouvelle utilisation, comme une croyance bayésienne.
- Modèle mental 5 : Comprendre que REM est un système d'optimisation multi-objectifs. Il optimise simultanément pour : (1) qualité des expériences extraites, (2) pertinence contextuelle, (3) efficacité mémoire (suppression de l'obsolète). Ces trois objectifs sont en tension : plus tu gardes d'expériences, moins tu peux les raffiner finement.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment implémenter REM en JavaScript/Node.js sur des plateformes comme N8N sans Python
- Sujet mentionné mais non développé : Les détails mathématiques complets des formules du paper (notation avec symboles complexes)
- Question ouverte laissée sans réponse : Quel est le nombre exact de dimensions des embeddings utilisés ?
- Question ouverte laissée sans réponse : Comment REM se compare-t-il précisément aux systèmes de mémoire existants comme Zep en termes de performance ?
- Sujet mentionné mais non développé : Les implications éthiques de la domination chinoise en recherche IA open-source
- Implication non-dite 1 : Si REM fonctionne en boucle continue, cela signifie que les agents IA deviennent potentiellement imprévisibles à long terme car ils se raffinent constamment. Les garanties de sécurité et de déterminisme deviennent plus difficiles à maintenir.
- Implication non-dite 2 : Le système de confidence score non-binaire crée un problème de seuil : à partir de quel score (0.5 ? 0.7 ?) une expérience est-elle considérée comme valide ? Cette décision est arbitraire et peut avoir des conséquences majeures sur le comportement de l'agent.
- Implication non-dite 3 : REM suppose que les expériences peuvent être généralisées et réutilisées. Or, certaines erreurs sont contextuelles et non-transférables. Le framework ne dit pas comment distinguer une erreur généralisable d'une erreur spécifique au contexte.
- Implication non-dite 4 : La phase de 'Rewrite' (reformulation des expériences) nécessite un LLM puissant. Cela crée une dépendance à la qualité du modèle de langage utilisé. Un mauvais LLM produira des reformulations mauvaises, ce qui pollue la mémoire.
- Ce qu'on peut en déduire : Les agents IA du futur ne seront pas jugés sur leur performance initiale mais sur leur capacité à s'améliorer continuellement. C'est un changement de paradigme : passer de 'quel est le meilleur modèle ?' à 'quel agent apprend le plus vite ?'.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Analyser tes agents IA actuels et identifier où ils souffrent du 'paradigme d'accumulation passive'. Cherche les points où la mémoire s'accumule sans être triée ou adaptée. C'est ton diagnostic.
- [ ] Action 2 : Implémenter une version simple de REM en Python avec AgentScope REM. Commence par la Phase 1 (Acquisition) : fais exécuter une tâche 8 fois à ton agent et extrait les success patterns et failure analysis avec un LLM summarizer.
- [ ] Action 3 : Ajouter des embeddings et similarité cosinus à tes agents. Utilise une librairie comme 'sentence-transformers' pour transformer tes expériences en vecteurs et mesurer leur similarité. C'est la base de la Phase 2 (Réutilisation).
- [ ] Action 4 : Implémenter un système de confidence score non-binaire pour tes expériences. Au lieu de 'valide/invalide', utilise des scores 0-1. Cela te permettra de gérer l'incertitude contextuelle.
- [ ] Action 5 : Créer un 'LLM as judge' pour valider tes expériences extraites. Écris un prompt qui demande au LLM de rejeter les expériences vagues, fusionner les doublons et archiver les valides.
- [ ] Action 6 : Mettre en place un système de nettoyage actif de la mémoire. Définis des règles pour supprimer les expériences obsolètes (ex: confidence score < 0.3 après 100 utilisations). C'est la Phase 3 (Raffinement).
- [ ] Action 7 : Tester REM sur un cas d'usage concret (ex: agent de trading qui doit apprendre à vérifier les prix avant de placer des ordres). Mesure comment la performance s'améliore au fil des cycles REM.
- [ ] Action 8 : Lire le paper ArXiv original sur REM pour comprendre les détails mathématiques et les résultats empiriques. Ne pas juste prendre un template, comprendre le fonctionnement sous-jacent.

## Business & Monétisation

- Angle 1 : Vendre des agents IA 'auto-améliorants' basés sur REM comme service SaaS. Les clients paient pour des agents qui s'améliorent continuellement sans intervention manuelle. C'est un modèle de valeur croissante : plus l'agent est utilisé, plus il devient bon.
- Angle 2 : Créer une plateforme de 'mémoire dynamique as a service' (comme Zep mais basée sur REM). Les entreprises intègrent REM dans leurs agents existants pour les rendre plus intelligents. Modèle de pricing : par nombre d'expériences stockées ou par nombre de cycles REM.
- Angle 3 : Offrir du consulting pour implémenter REM dans les agents IA d'entreprises. Les clients paient pour l'expertise de transformer leurs agents statiques en agents auto-améliorants. Valeur : réduction des coûts de maintenance et amélioration continue de la performance.
- Angle 4 : Créer des templates et frameworks REM spécialisés par industrie (trading, customer service, code generation, etc.). Vendre ces templates à des entreprises qui veulent des agents pré-optimisés pour leur domaine.
- Angle 5 : Développer des outils de monitoring et d'analytics pour REM. Les entreprises veulent voir comment leurs agents apprennent, quelles expériences sont les plus utiles, comment la mémoire évolue. Vendre la visibilité et le contrôle.
- Angle 6 : Créer une communauté autour de REM (comme ArXiv mais pour les expériences d'agents). Les développeurs partagent leurs expériences distillées, les autres les réutilisent. Modèle : marketplace d'expériences avec revenue share.

## Définitions

- **Mémoire procédurale dynamique** : Système de mémoire qui n'accumule pas passivement mais extrait des règles réutilisables, les adapte au contexte et supprime les informations obsolètes
- **Paradigme d'accumulation passive** : Problème actuel des agents IA qui traitent la mémoire comme une archive statique en mode append-only, sans tri ni mise à jour des informations
- **Multifaceted distillation** : Processus d'extraction où l'agent analyse ses tentatives (N=8) et en extrait trois types d'insights : success patterns, failure analysis, comparative insights
- **Contexte adaptive reuse** : Phase 2 du REM où les expériences passées sont récupérées, retriées et reformulées pour s'adapter à la nouvelle tâche
- **Embedding** : Transformation de texte en vecteurs numériques (ex: 0.1, 0.5, etc.) permettant de mesurer la similarité sémantique entre textes
- **Similarité cosinus** : Mesure mathématique de l'angle entre deux vecteurs pour déterminer la proximité sémantique : plus l'angle est petit, plus les textes sont similaires
- **Confidence score** : Score de confiance non-binaire (0 à 1) attribué à chaque expérience pour indiquer le degré de certitude de sa validité
- **REM** : Remember Me, Refine Me - Framework en trois phases (acquisition, réutilisation, raffinement) tournant en continu pour améliorer les agents IA

## Outils & techniques mentionnés

- **ArXiv** : Plateforme de publication de papers scientifiques en IA, dominée à 65% par des chercheurs chinois
- **AgentScope REM** : Framework open-source en Python pour créer des agents IA avec mémoire dynamique
- **Zep** : Système de mémoire dynamique existant pour agents IA
- **LLM Summarizer** : Modèle spécialisé dans l'extraction et résumé d'expériences
- **get_stock_info** : Outil exemple pour récupérer les prix réels des actions
- **place_order** : Outil exemple pour placer des ordres boursiers
- Success pattern recognition
- Failure analysis
- Comparative insight generation
- Embedding transformation (texte en vecteurs)
- Similarité cosinus
- Recall et reranking d'expériences
- Rewrite et adaptation contextuelle
- Validation par LLM as judge
- Fusion et suppression de doublons d'expériences
- Confidence scoring (0 à 1, non-binaire)

## Connexions avec d'autres sujets IA

- Retrieval-Augmented Generation (RAG) : REM est une évolution de RAG. Tandis que RAG récupère simplement des documents pertinents, REM récupère, adapte et raffine continuellement les expériences. C'est RAG + apprentissage continu.
- Fine-tuning et adaptation : REM est une alternative au fine-tuning traditionnel. Au lieu de réentraîner le modèle, REM adapte la mémoire. C'est plus efficace et plus flexible.
- Reinforcement Learning from Human Feedback (RLHF) : REM utilise des concepts similaires (apprendre des retours, adapter le comportement) mais appliqués à la mémoire plutôt qu'aux poids du modèle.
- Multi-agent systems : REM devient crucial dans les systèmes multi-agents où les agents doivent partager et apprendre les uns des autres. Chaque agent a sa propre mémoire REM mais peut accéder aux expériences des autres.
- Knowledge graphs et ontologies : REM peut être combiné avec des knowledge graphs pour structurer les expériences de manière plus riche. Au lieu de simples vecteurs, les expériences pourraient être des nœuds dans un graphe.
- Continual learning et catastrophic forgetting : REM résout le problème du 'catastrophic forgetting' (oublier les connaissances anciennes en apprenant les nouvelles) en gérant activement ce qui est oublié.
- Prompt engineering et in-context learning : REM améliore l'in-context learning en fournissant des exemples plus pertinents et mieux adaptés au contexte. C'est une forme de 'dynamic few-shot learning'.
- Explainability et interpretability : REM rend les agents plus explicables car les expériences et les règles extraites sont lisibles. On peut voir exactement pourquoi l'agent a pris une décision.
- Agentic AI et autonomous systems : REM est une brique fondamentale pour créer des agents vraiment autonomes qui peuvent s'améliorer sans supervision humaine.
- Scaling laws et emergent abilities : REM pourrait révéler de nouvelles lois d'échelle : comment la performance s'améliore avec le nombre de cycles REM, la taille de la mémoire, la qualité des expériences.

## Prérequis de compréhension

Pour absorber cette vidéo, tu dois déjà comprendre : (1) Comment fonctionnent les LLM et les embeddings (transformation texte en vecteurs), (2) Le concept de similarité sémantique et de recherche vectorielle, (3) Les bases des agents IA (boucle perception-action-réflexion), (4) Pourquoi la mémoire est importante pour les agents (sans mémoire, ils répètent les mêmes erreurs), (5) La différence entre apprentissage statique (fine-tuning) et apprentissage dynamique (adaptation en temps réel). Si tu ne maîtrises pas ces concepts, commence par des vidéos sur les embeddings, RAG et les agents IA avant de revenir à REM.

## Citations notables

> 99 % du marché ne se rend peut-être pas compte, mais tous les jours, il y a des nouveaux papers sur Arxive, des documentations scientifiques IA créé à plus de 65 % par des Chinois

> on va décortiquer concrètement un papers que je trouve exceptionnel

> Je vais pas te donner des templates à la con, tu vas les vendre à n'importe qui sans maîtriser rien du tout. Là aujourd'hui, on fait le vrai travail d'IA

> Remember me, refine me. En français, on peut dire souviens-toi de moi, raffine-moi

> les agents actuels souffrent d'un paradigme d'accumulation passive

> C'est exactement ce que font les agents actuels avec leur mémoire

> C'est comme un chef cuisinier à Shenzen, on va vraiment lui donner une destination et bien il ne va pas garder toutes ses recettes ratées. Il va extraire les principes

> Plus votre QI de base est élevé, plus vous allez avoir des idées et plus en fait vous allez corréler et matcher avec cette vidéo

> C'est pas juste en prenant un template and reten. Bref, vous avez compris. Je vais pas continuer avec ça parce que je perds mon énergie
