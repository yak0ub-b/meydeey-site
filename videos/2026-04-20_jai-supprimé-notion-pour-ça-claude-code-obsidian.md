# J'ai supprimé Notion pour ça (Claude Code + Obsidian)

**Date** : 2026-04-20 | **Durée** : 33:48 | **Niveau** : avancé | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=555m6SpTGnU

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi RAG est inefficace et comment penser différemment l'IA | section Philosophie IA |
| construire ton premier vault ou appliquer le protocole GodMode | section Ce que tu peux faire maintenant |
| explorer les implications cachées et les connexions avec d'autres concepts IA | section Insights non-évidents |
| voir comment monétiser ou industrialiser cette approche | section Business et monétisation |

## Résumé

La vidéo présente une méthode propriétaire appelée 'GodMode' pour créer des bases de connaissances structurées (vaults Obsidian) via Claude Code, remplaçant les systèmes RAG jetables par des wikis compilés et interconnectés. Le protocole en 8 phases inclut un bootstrap, une cartographie de clusters, une rédaction progressive avec checkpoints humains, et un système anti-hallucination basé sur le fact-checking web. L'auteur démontre en direct la création d'un vault de psychologie avec 40+ pages pilotes, montrant comment Claude Opus 4.7 génère automatiquement des pages Markdown interconnectées avec wikilinks, métadonnées YAML et sources vérifiées.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARADIGME ANCIEN vs NOUVEAU                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  RAG JETABLE (Ancien)          WIKI COMPILÉ (Nouveau)            │
│  ═══════════════════          ═════════════════════              │
│                                                                   │
│  Requête → Recherche           Compilation 1x → Vault Obsidian   │
│      ↓         ↓                    ↓              ↓              │
│  Recalcul → Hallucination      Wikilinks → Graph View            │
│      ↓         ↓                    ↓              ↓              │
│  Coût élevé   Imprécis         Souverain    Réutilisable         │
│                                                                   │
│  ┌─ Fact-check: Web Search (max 2/page)                          │
│  ├─ Logging: fact-check-log.md (traçabilité)                     │
│  ├─ Checkpoints: 8 pages pilote avant scaling                    │
│  └─ Modèle: Claude Opus 4.7 (qualité sources)                    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Contexte et problème (0-5 min)
Présentation d'un ancien vault Obsidian (2023, GPT-4) décrit comme 'de la merde'. Introduction du concept de RAG jetable vs wiki compilé. Référence à André Karpathy et sa position sur le wiki structuré. Critique de la réutilisation inefficace des ressources.

### Acte 2 — Explication d'Obsidian et ses fondamentaux (5-15 min)
Tutoriel rapide sur Obsidian : Markdown local, Wikilinks, Graph View. Explication des trois couches (Markdown, Wikilinks, Graph). Avantage de la souveraineté des données (local vs cloud). Comparaison RAG jetable vs wiki compilé.

### Acte 3 — Présentation du protocole GodMode (15-30 min)
Annonce de la méthode propriétaire. Identification des deux pièges majeurs (hallucinations en full auto, données sensibles). Présentation des 3 phases : pilote (40 pages, 2-5h), débrief, scaling (500+ pages). Détail des 8 étapes du protocole : bootstrap, cartographie, validation, rédaction pilote, rédaction complète, linking, audit, débrief.

### Acte 4 — Système anti-hallucination et fact-checking (30-40 min)
Explication du fact-checking : web search sur pages sensibles (personnes, expériences, controverses, chiffres), max 2 requêtes par page. Logging dans fact-check-log.md avec statut 'to verify'. Avantages de Claude Opus 4.7 pour la qualité des sources.

### Acte 5 — Démonstration pratique en direct (40-90 min)
Création d'un nouveau vault 'Psychologie V2' en local. Ouverture de Claude Code. Copie du prompt propriétaire. Interaction avec Claude : clarification du sujet, choix du cluster (Biais Cognitif), validation du protocole pilote. Observation du bootstrap (création de Cloud.md, README, 99_meta/fact-check-log.md). Cartographie du cluster : 47 termes, 27 pages à fact-checker. Rédaction des 8 pages pilotes (Biais Cognitif, Biais de Confirmation, Daniel Kahneman, etc.). Web search en direct pour fact-checking. Observation du graph view se remplissant progressivement.

### Acte 6 — Cas d'usage et implications (90-100 min)
Trois idées d'utilisation : chatbots d'exercice, skills de psychologie, avocat du diable pour challenger les biais. Critique implicite des médecins et professions remplaçables. Avertissement sur le retard européen et l'avantage compétitif de maîtriser cette technique maintenant.

## Philosophie IA & Pensée profonde

L'IA doit être utilisée non pas pour répondre à des questions ponctuelles (RAG), mais pour compiler une fois une base de connaissances structurée et permanente qui peut être réutilisée, navigable et vérifiable. L'IA est capable de générer du contenu de qualité avec fact-checking intégré si on lui donne un protocole strict et des checkpoints humains, ce qui la rend fiable pour des domaines sensibles.

Cette vidéo présente une inversion de paradigme : remplacer les systèmes RAG jetables (qui recalculent à chaque requête) par des wikis compilés une seule fois en Obsidian via Claude Code, créant une base de connaissances permanente, interconnectée et vérifiable. Le protocole GodMode en 8 phases intègre des checkpoints humains et un fact-checking automatisé pour éliminer les hallucinations, transformant l'IA d'un outil de réponse ponctuelle en compilateur de savoir structuré et souverain.

## Prompting & Sagesse d'usage

- Structurer le prompt avec des phases claires (bootstrap, cartographie, rédaction, audit) plutôt que de demander tout d'un coup
- Intégrer des checkpoints humains et des questions de clarification pour éviter les hallucinations massives
- Utiliser le web search automatisé pour fact-checker les données sensibles (personnes, chiffres, controverses)
- Créer un fichier de logging (fact-check-log.md) pour tracer ce qui n'a pas pu être vérifié
- Utiliser Claude Opus 4.7 plutôt que des modèles plus faibles pour la qualité des sources
- Définir une architecture YAML claire (titre, type, priorité, controverse) pour que le LLM respecte la structure
- Faire un pilote sur 40 pages avant de scaler à 500+ pour valider le protocole
- Laisser le LLM créer un plan (plan.md) avant la rédaction pour assurer la cohérence
- Utiliser des multi-agents pour paralléliser la génération (mentionné mais pas détaillé)
- Jouer sur la souveraineté des données : garder les fichiers Markdown en local plutôt qu'en cloud

## Concepts clés expliqués

### RAG jetable
Système qui recompute et réutilise les mêmes ressources à chaque requête, sans base persistante. À chaque fois que tu poses une question, le système recherche, récupère et génère une réponse de zéro.
**Pourquoi c'est important** : C'est inefficace (coût token élevé), imprécis (hallucinations à chaque fois) et non-cumulatif (tu ne bénéficies pas de ce que tu as déjà appris). C'est le modèle dominant en 2026 mais il est en train de devenir obsolète.

### Wiki compilé
Base de connaissances structurée créée une seule fois avec vérification, puis réutilisée et navigable. Tu compiles une fois, tu réutilises infiniment.
**Pourquoi c'est important** : C'est efficace (coût token minimal après compilation), précis (vérification une seule fois) et cumulatif (chaque page renforce les autres via les wikilinks). C'est le futur.

### Wikilinks
Syntaxe [[double crochet]] permettant de créer des liens automatiques entre notes. [[Biais Cognitif]] crée un lien vers la page Biais Cognitif.
**Pourquoi c'est important** : C'est ce qui transforme une collection de pages isolées en un graphe interconnecté. Sans wikilinks, c'est juste des fichiers. Avec wikilinks, c'est un système de connaissances.

### Graph view
Visualisation réseau montrant toutes les relations entre les pages du vault. Tu vois comment les concepts sont connectés visuellement.
**Pourquoi c'est important** : C'est la preuve visuelle que ton savoir est structuré et interconnecté. C'est aussi un outil de navigation et de découverte : tu peux explorer les relations entre concepts.

### Protocole GodMode
Méthode propriétaire en 8 phases pour générer des vaults via Claude Code avec anti-hallucination et structuration : bootstrap → cartographie → validation → rédaction pilote → rédaction complète → linking → audit → débrief.
**Pourquoi c'est important** : C'est le protocole qui rend la génération IA fiable et scalable. Sans protocole, tu génères du chaos. Avec protocole, tu génères du savoir structuré et vérifiable.

### Fact-checking automatisé
Web search intégré pour vérifier les données sensibles (personnes, dates, chiffres, controverses). Max 2 requêtes par page pour rester efficace.
**Pourquoi c'est important** : C'est la couche de sécurité qui réduit les hallucinations sur les faits. Pour les domaines sensibles (médical, juridique), c'est indispensable. Ça transforme l'IA d'un outil non-fiable en outil fiable.

### Checkpoint humain
Validation manuelle à des étapes clés du protocole (8 pages pilote avant scaling à 500+). L'humain vérifie que le protocole fonctionne avant de l'appliquer à grande échelle.
**Pourquoi c'est important** : C'est ce qui prévient les hallucinations massives. Si tu lances 500 pages en full automatique sans vérifier les 8 premières, tu vas te retrouver avec du chaos. Les checkpoints réduisent le risque exponentiellement.

### Souveraineté des données
Garder les fichiers Markdown en local plutôt qu'en cloud. Tu contrôles tes données, tu peux les auditer, les modifier, les versionner.
**Pourquoi c'est important** : C'est une question de contrôle et de confidentialité. Si tes données sont en cloud, tu dépends du fournisseur. Si elles sont en local, tu es libre. C'est particulièrement important pour les données sensibles.

## Insights non-évidents

- Insight 1 : Le vrai problème n'est pas l'IA qui hallucine, c'est l'architecture qui force l'IA à réinventer à chaque fois. En compilant une seule fois avec vérification, on transforme l'IA en outil fiable pour domaines sensibles (médical, juridique).
- Insight 2 : Obsidian n'est qu'un conteneur ; le vrai pouvoir est dans la structure YAML + Wikilinks + Graph. N'importe quel format (JSON, base de données) pourrait fonctionner si on respecte la logique de compilation + interconnexion + vérification.
- Insight 3 : Le protocole GodMode est une réponse implicite au problème de scaling de l'IA : on ne peut pas faire confiance à 500 pages générées d'un coup, mais on peut faire confiance à 8 pages vérifiées manuellement, puis utiliser ce pattern pour valider le reste.
- Insight 4 : La souveraineté des données (local vs cloud) n'est pas juste une question de confidentialité, c'est une question de contrôle : tu peux versionner, auditer, modifier ton savoir sans dépendre d'une API ou d'un service tiers.
- Insight 5 : L'auteur critique implicitement le modèle économique des LLM actuels (payer par token à chaque requête). Un wiki compilé réduit drastiquement les coûts tokens à long terme, ce qui change l'équation économique de l'IA.

## Mental models

- Modèle 1 — Compilation vs Requête : Pense à la différence entre compiler un programme une seule fois (wiki) vs l'interpréter à chaque exécution (RAG). La compilation est plus lente au départ mais infiniment plus rapide et fiable après.
- Modèle 2 — Effet cumulé : Chaque page du vault renforce les autres via les wikilinks. C'est un graphe de connaissances qui devient plus puissant à mesure qu'il grandit. RAG n'a pas cet effet cumulé.
- Modèle 3 — Checkpoint humain : Ne pas faire confiance à l'IA pour 500 pages d'un coup, mais faire confiance à 8 pages vérifiées manuellement. C'est un pattern de validation progressive qui réduit le risque exponentiellement.
- Modèle 4 — Souveraineté = Contrôle : Les données locales en Markdown = tu peux les auditer, les modifier, les versionner, les migrer. Les données en cloud = tu dépends du fournisseur.
- Modèle 5 — Fact-checking comme couche de sécurité : Le web search n'est pas une solution parfaite, mais c'est une couche de sécurité qui réduit les hallucinations sur les données factuelles (personnes, dates, chiffres). Pour le reste, c'est du jugement humain.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment intégrer ce vault Obsidian avec des agents IA pour automatiser la formation des nouveaux employés
- Sujet mentionné mais non développé : Stratégie de multi-agent pour paralléliser la génération des 500 pages (mentionné mais pas implémenté en direct)
- Sujet mentionné mais non développé : Cryptage et sécurité des données sensibles stockées localement
- Question ouverte laissée sans réponse : Quel est exactement le contenu du prompt propriétaire (promis en description GitHub mais non montré en détail)
- Question ouverte laissée sans réponse : Comment maintenir et mettre à jour le vault une fois créé (versioning, collaboration)
- Sujet mentionné mais non développé : Comparaison détaillée avec d'autres outils de knowledge management (Notion, Roam Research, etc.)
- Question ouverte laissée sans réponse : Coût réel en tokens Claude pour générer 500+ pages
- Implication non-dite 1 : Si tu maîtrises cette technique maintenant (2026), tu as un avantage compétitif énorme avant 2030. L'auteur le dit implicitement : 'il y a presque personne qui est prêt sur le marché'.
- Ce qu'on peut en déduire : Les systèmes RAG vont devenir obsolètes ou marginalisés. Les entreprises qui continuent à utiliser RAG jetable en 2026-2027 vont se rendre compte qu'elles paient trop cher pour une qualité inférieure.
- Implication non-dite 2 : Le fact-checking automatisé (web search) n'est pas une solution complète pour les domaines très sensibles. L'auteur dit explicitement 'un humain doit les vérifier' pour médical/juridique, ce qui signifie que cette approche crée un nouveau rôle : vérificateur de contenu IA.
- Ce qu'on peut en déduire : Les métiers de vérification et de validation de contenu IA vont exploser en demande. C'est un nouveau marché.
- Implication non-dite 3 : Le protocole GodMode n'est pas montré en détail (le prompt propriétaire n'est pas révélé). Cela signifie que l'auteur garde l'avantage compétitif pour lui ou ses clients. La vraie valeur n'est pas dans Obsidian ou Claude, c'est dans le protocole.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Crée un petit vault Obsidian sur un sujet que tu maîtrises (ex: ta spécialité professionnelle). Commence par 5-10 pages interconnectées avec wikilinks. Observe comment le graph view se remplit.
- [ ] Action 2 : Utilise Claude Code pour générer 3-5 pages Markdown structurées avec YAML (titre, type, priorité). Demande-lui de créer les wikilinks automatiquement. Valide manuellement.
- [ ] Action 3 : Crée un fichier fact-check-log.md et enregistre les 3 données les plus sensibles de ton vault (personnes, chiffres, dates). Fais un web search pour les vérifier. Marque le statut 'verified' ou 'to verify'.
- [ ] Action 4 : Exporte ton vault en GitHub (fichiers Markdown + YAML). Cela te donne du versioning et de la traçabilité. C'est aussi une sauvegarde.
- [ ] Action 5 : Identifie un cas d'usage concret pour ton vault : formation interne, chatbot d'exercice, documentation produit, base de connaissances client. Définis comment tu vas l'utiliser après compilation.
- [ ] Action 6 : Lis le prompt propriétaire de l'auteur (promis en description GitHub). Adapte-le à ton domaine. C'est la vraie valeur.
- [ ] Action 7 : Teste Claude Opus 4.7 vs un modèle moins cher (GPT-4o, Claude 3.5 Sonnet) pour générer 2 pages identiques. Compare la qualité des sources et les hallucinations. Mesure le coût token.
- [ ] Action 8 : Crée un plan de scaling : si tu as validé 8 pages pilote, comment vas-tu générer les 500+ pages suivantes ? Parallélisation ? Multi-agent ? Batch processing ?

## Business & Monétisation

- Angle 1 — Vendre des vaults compilés : Crée des vaults spécialisés (Psychologie, Neuroscience, Droit, Médecine) et vends-les comme produits numériques. Chaque vault est compilé une seule fois, puis vendu infiniment. Marge très élevée.
- Angle 2 — Service de compilation : Offre un service où tu compiles le savoir d'une entreprise en vault Obsidian. Charge par page ou par projet. C'est du consulting IA.
- Angle 3 — Chatbots alimentés par vaults : Crée des chatbots d'exercice ou de formation qui utilisent le vault comme source de vérité. Vends l'accès au chatbot (SaaS).
- Angle 4 — Formation et certification : Crée des formations basées sur tes vaults. Certifie les gens sur le contenu du vault. Vends les formations.
- Angle 5 — Outils et plugins : Crée des plugins Obsidian ou des outils qui automatisent le protocole GodMode. Vends les outils.
- Angle 6 — Audit et vérification : Offre un service d'audit et de fact-checking pour les vaults générés par d'autres. Les entreprises sensibles (médical, juridique) vont payer pour avoir quelqu'un qui vérifie.
- Angle 7 — Avantage compétitif interne : Si tu maîtrises cette technique, tu peux créer des vaults internes pour ta propre entreprise et avoir un avantage compétitif énorme sur tes concurrents. C'est un moat.

## Définitions

- **Vault Obsidian** : Coffre-fort de notes Markdown stockées localement, interconnectées par wikilinks et visualisables en graph
- **Wikilinks** : Syntaxe [[double crochet]] permettant de créer des liens automatiques entre notes
- **Graph view** : Visualisation réseau montrant toutes les relations entre les pages du vault
- **RAG jetable** : Système qui recompute et réutilise les mêmes ressources à chaque requête, sans base persistante
- **Wiki compilé** : Base de connaissances structurée créée une seule fois, réutilisable et navigable
- **Cluster** : Groupe thématique de pages (ex: Biais Cognitif, Psychologie Sociale) avec structure définie
- **Protocole GodMode** : Méthode propriétaire de génération de vaults via Claude Code avec anti-hallucination et structuration

## Outils & techniques mentionnés

- **Obsidian** : Logiciel de gestion de notes Markdown en local avec graph view et wikilinks
- **Claude Code (Anthropic)** : LLM utilisé pour générer automatiquement les pages et structures du vault
- **Claude Opus 4.7** : Modèle spécifique utilisé pour sa qualité de sources et réduction des hallucinations
- **Superpowers (plugin Obsidian)** : Plugin pour orchestrer les multi-agents dans le vault
- **VS Code / Warp / Z** : Terminaux pour lancer Claude Code
- **GitHub** : Versioning et stockage des fichiers Markdown (avec attention à la souveraineté)
- Bootstrap du vault : création de la structure YAML et schémas
- Cartographie des clusters : planification de 40 pages pilotes avec types et priorités
- Rédaction par phases : 8 pages pilote + checkpoint, puis scaling à 500+ pages
- Fact-checking automatisé : 2 requêtes web search max par page sensible
- Logging des vérifications : fichier fact-check-log.md avec statut 'to verify'
- Linking sémantique : création automatique de wikilinks entre pages
- Graph view : visualisation des relations entre concepts
- Audit qualité et débrief : validation avant scaling
- Structuration YAML : métadonnées (titre, type, priorité, controverse)

## Connexions avec d'autres sujets IA

- Prompting avancé : Le protocole GodMode est un exemple de prompting structuré avec phases, checkpoints et feedback loops. C'est du prompting d'entreprise.
- Agents IA multi-agents : Le plugin Superpowers permet d'orchestrer des agents pour paralléliser la génération. C'est une application concrète des agents IA.
- Fine-tuning vs Compilation : Au lieu de fine-tuner un modèle sur tes données, tu compiles une base de connaissances. C'est une alternative plus efficace et moins coûteuse.
- Retrieval-Augmented Generation (RAG) : Cette vidéo est une critique directe du RAG. Elle propose une alternative : compilation au lieu de retrieval.
- Knowledge Graphs : Le vault Obsidian est essentiellement un knowledge graph en Markdown. C'est une implémentation simple mais puissante.
- Fact-checking automatisé : Web search intégré pour vérifier les hallucinations. C'est une technique de sécurité IA.
- Souveraineté des données : Garder les données en local vs cloud. C'est une question de contrôle et de confidentialité, pertinente pour tous les systèmes IA.
- Évaluation de la qualité IA : Comment mesurer si une page générée est bonne ? Le protocole GodMode propose des critères : sources vérifiées, wikilinks cohérents, pas de hallucinations.
- Coût d'utilisation des LLM : RAG jetable = coût token élevé. Wiki compilé = coût token minimal. C'est une question d'économie IA.
- Pensée systémique : Le vault est un système interconnecté où chaque page renforce les autres. C'est une application de la pensée systémique à la gestion des connaissances.

## Prérequis de compréhension

Tu dois avoir compris : (1) comment fonctionnent les LLM et pourquoi ils hallucinent, (2) ce qu'est le RAG et ses limites, (3) les bases du prompting (structure, clarté, feedback), (4) pourquoi la vérification des sources est importante, (5) la différence entre données en local vs cloud. Si tu ne maîtrises pas ces concepts, regarde d'abord des vidéos sur le prompting avancé, le RAG, et la sécurité IA.

## Citations notables

> Arrêtez de refaire du RAG jetable, laissez le LLM compiler une fois pour toutes dans un wiki structuré

> Votre savoir doit bénéficier de l'effet cumulé, il ne doit pas se dissoudre à chaque requête

> Le RAG aujourd'hui en 2026 c'est du McDonald, par contre le wiki compilé c'est ce que j'appelle la huitième merveille du monde

> C'est complètement con de repayer à chaque fois et de recalculer ce que tu savais déjà

> Jouez la carte de la souveraineté pour vous donner en interne

> La méthode que je vais te montrer, elle n'existe pas sur le marché. Je l'ai développée depuis plusieurs semaines

> Si on lance 500 pages en full automatique comme un bourrin n'importe comment, on va se retrouver avec des hallucinations partout, des Wikilinks cassés, de la merde

> Avec Opus 4.7, les sources qu'il va récupérer sont de meilleure qualité, il se trompe presque jamais, les hallucinations on dirait qu'elles ont été totalement supprimées

> Si demain tu bosses sur un coffre-fort médical, juridique, ces données sont sensibles. Un humain doit les vérifier

> Obsidian n'est qu'un outil, c'est juste une question de structure, de données en fait

> Il y a presque personne qui est prêt sur le marché, ce qui va nous tomber dessus avant 2030, le remplacement magistral est en cours

> Différenciez-vous à partir de maintenant et travaillez dur, c'est très important
