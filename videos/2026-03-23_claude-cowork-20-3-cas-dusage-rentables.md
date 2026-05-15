# Claude Cowork 2.0 : 3 cas d'usage rentables

**Date** : 2026-03-23 | **Durée** : 11:13 | **Niveau** : intermédiaire | **Catégorie** : Management & Entrepreneuriat | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=bfklayc9Xs0

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi la persistance change tout | section Philosophie IA et Mental Models |
| appliquer Projects à ton workflow | section Ce que tu peux faire maintenant |
| éviter les pièges (context rot, permissions) | section Ce qu'il ne dit pas |
| monétiser cette approche | section Business et Monétisation |

## Résumé

Claude Cowork intègre une nouvelle fonctionnalité Projects (lancée le 20 mars 2026) transformant l'assistant en collaborateur persistant. Chaque projet contient des instructions, une mémoire cloisonnée, des fichiers et des tâches planifiées qui persistent entre les sessions. L'auteur présente trois cas d'usage (freelance/agence, créateur de contenu, développeur), quatre conseils d'exploitation (prompt de fin, centralisation docs, housekeeping, slash commandes) et démontre la création d'un projet de veille technologique avec tâches automatisées.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    AVANT (Stateless)                        │
│  Session 1 → Explique contexte → Réponse → Oubli            │
│  Session 2 → Réexplique contexte → Réponse → Oubli          │
│  Session 3 → Réexplique contexte → Réponse → Oubli          │
│  ❌ Perte d'apprentissage, répétition, context rot           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              APRÈS (Projects Persistant)                    │
│                                                             │
│  ┌──────────────────────────────────────┐                  │
│  │  PROJECT = Conteneur Persistant      │                  │
│  │  ├─ Instructions (règles fixes)      │                  │
│  │  ├─ Mémoire (apprentissage)          │                  │
│  │  ├─ Fichiers (contexte)              │                  │
│  │  └─ Tâches (automatisation)          │                  │
│  └──────────────────────────────────────┘                  │
│           ↓                                                 │
│  Session 1 → Onboarding une fois → Apprentissage           │
│  Session 2 → Reprend où on a laissé → Accélération         │
│  Session 3 → Applique + améliore → Compounding             │
│  ✅ Continuité, cohérence, qualité croissante              │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Contexte et annonce
Présentation de la mise à jour Projects du 20 mars 2026, disponible pour abonnements pro/max/team/entreprise. Transition de Cowork d'assistant jetable à collaborateur persistant.

### Acte 2 — Théorie et concepts
Explication de la structure Projects (instructions, mémoire, fichiers, tâches planifiées), trois modes de création (from scratch, import, dossier local), et avantages de la persistance du contexte.

### Acte 3 — Quatre conseils d'exploitation
Prompt de fin, centralisation de documentation, housekeeping régulier, et création de slash commandes pour automatiser les tâches.

### Acte 4 — Trois cas d'usage
Freelance/agence (onboarding client), créateur de contenu (style éditorial persistant), développeur (repo local avec conventions de code).

### Acte 5 — Limitations et démonstration pratique
Limitations actuelles (desktop only, pas de sync cloud, pas de partage team). Création d'un projet de veille technologique avec tâches planifiées et mémoire persistante.

### Acte 6 — Conclusion et appel à l'action
Résumé des points clés, invitation à rejoindre la communauté et le Labo IA premium.

## Philosophie IA & Pensée profonde

L'IA fonctionne mieux avec une mémoire structurée et cloisonnée : elle retient ce qu'on lui enseigne une seule fois et l'applique de manière cohérente sur la durée. La persistance du contexte transforme l'IA d'un outil stateless en collaborateur capable de maintenir une continuité de travail, mais cela exige une gestion intelligente des permissions et du contexte pour éviter la dégradation de qualité.

Claude Projects transforme l'IA d'un outil stateless en collaborateur persistant en cloisonnant mémoire, instructions et fichiers par projet, éliminant le besoin de réexpliquer le contexte à chaque session. Cette persistance structurée accélère exponentiellement le travail répétitif (freelance, contenu, dev) à condition de maintenir activement la qualité du contexte via housekeeping et prompts de fin. Le vrai game-changer n'est pas la technologie mais le changement mental : traiter Claude comme un employé qu'on onboarde une fois plutôt qu'un outil qu'on réinitialise à chaque utilisation.

## Prompting & Sagesse d'usage

- Utiliser un prompt de fin qui synthétise et propose une reprise pour maintenir la continuité entre sessions
- Centraliser toute la documentation (clients, projets, décisions, erreurs) dans la mémoire du projet pour accélérer les futurs travaux
- Faire du housekeeping régulier pour épurer le contexte inutile et éviter le context rot qui détruit la qualité des réponses
- Créer des slash commandes personnalisées pour automatiser les tâches récurrentes (onboarding, veille, etc.) plutôt que de les retaper
- Cloisonner intelligemment les projets et les permissions : ne pas donner accès à des dossiers contenant 50 000 fichiers, mais créer des projets spécifiques par client ou par tâche
- Inventer de manière factuelle les éléments manquants quand on demande à Claude de générer du contenu pour un test ou un prototype

## Concepts clés expliqués

### Mémoire cloisonnée
Chaque projet a sa propre mémoire isolée des autres projets. Cela signifie que ce que Claude apprend sur le Client A ne 'pollue' pas son travail sur le Client B. C'est une forme de compartimentage cognitif.
**Pourquoi c'est important** : Sans cloisonnement, Claude pourrait mélanger les contextes (confondre les styles, les règles, les données sensibles). Le cloisonnement garantit que chaque projet reste pur et cohérent.

### Context rot
Dégradation progressive de la qualité des réponses quand tu accumules trop de contexte inutile. Plus il y a de bruit, moins Claude peut se concentrer sur le signal.
**Pourquoi c'est important** : C'est le piège principal de la persistance. Si tu ne fais pas de housekeeping, ta mémoire devient un dépotoir et les réponses se dégradent. La persistance sans maintenance est pire que pas de persistance du tout.

### Housekeeping
Maintenance régulière du projet : tu relis la mémoire, tu supprimes ce qui n'est plus pertinent, tu mets à jour ce qui a changé, tu consolides ce qui s'est répété.
**Pourquoi c'est important** : C'est l'activité qui transforme la persistance d'une charge en un atout. Sans housekeeping, tu accumules de la dette cognitive. Avec housekeeping, tu construis un asset qui s'améliore avec le temps.

### Slash commandes
Commandes personnalisées (ex: /onboarding, /veille) que tu définis une fois et que Claude exécute à chaque fois que tu les invoques. C'est du prompt engineering permanent.
**Pourquoi c'est important** : Cela élimine la répétition. Au lieu de retaper 'fais un onboarding pour ce client' à chaque fois, tu tapes /onboarding et Claude sait exactement quoi faire. C'est une forme d'automatisation du prompting.

### Prompt de fin
Un prompt structuré que tu utilises à la fin de chaque session pour synthétiser ce qu'on a fait et proposer ce qu'on pourrait faire ensuite. Cela crée un pont entre les sessions.
**Pourquoi c'est important** : Sans prompt de fin, Claude doit deviner où on en est à la session suivante. Avec un prompt de fin, tu lui donnes un résumé clair et une direction, ce qui accélère la reprise.

### MCP (Model Context Protocol)
Protocole qui permet de connecter Claude à des services externes (GitHub, Slack, etc.) pour que Claude puisse accéder à des données en temps réel sans qu'elles soient stockées dans le projet.
**Pourquoi c'est important** : Cela résout le problème de la 'mémoire statique'. Au lieu de copier-coller des données dans le projet, tu peux connecter Claude directement à la source, ce qui garde les données fraîches.

## Insights non-évidents

- Insight 1 : La vraie valeur n'est pas la mémoire technique mais la mémoire décisionnelle. Stocker 'on a essayé X et ça a échoué parce que Y' crée une base de connaissances qui accélère les décisions futures de manière exponentielle.
- Insight 2 : Projects force un changement de mentalité : tu dois documenter et structurer ton travail AVANT de le donner à Claude, ce qui améliore ta propre clarté. L'IA devient un miroir de ta pensée organisée.
- Insight 3 : Le cloisonnement par projet n'est pas une limitation mais une feature de sécurité cognitive. Donner à Claude accès à 50 000 fichiers dilue son attention et crée du context rot. Les meilleurs projets sont les plus restreints.
- Insight 4 : Les slash commandes sont une forme de 'prompt engineering permanent'. Au lieu de retaper /onboarding à chaque fois, tu l'encodes une fois et tu la réutilises infiniment, ce qui est une forme d'automatisation du prompting lui-même.
- Insight 5 : Le housekeeping régulier est une activité d'IA literacy, pas une corvée. Chaque fois que tu épures la mémoire, tu apprends ce qui était utile vs inutile, ce qui affine ta compréhension de comment l'IA apprend.

## Mental models

- {'modele': 'Claude comme employé vs Claude comme outil', 'explication': "Avant Projects, tu traitais Claude comme un outil jetable (tu l'utilises, tu jettes). Après Projects, tu dois le traiter comme un employé : tu l'onboardes une fois, tu lui donnes des instructions claires, tu lui construis une mémoire, et tu lui assigines des tâches. Cela change complètement la relation et l'ROI."}
- {'modele': 'Contexte comme ressource rare', 'explication': "Le contexte (tokens) n'est pas infini. Plus tu donnes de fichiers et de mémoire, plus tu dilues l'attention de Claude. Le housekeeping n'est pas une corvée mais une optimisation : tu dois garder seulement ce qui est utile pour cette tâche spécifique. C'est comme gérer la RAM d'un ordinateur."}
- {'modele': 'Persistance = Compounding', 'explication': "Chaque session ajoute de la valeur à la mémoire du projet. Session 1 : tu construis les fondations. Session 2 : tu construis dessus. Session 3 : tu construis encore dessus. C'est un effet de compounding où la valeur croît exponentiellement, pas linéairement."}
- {'modele': 'Cloisonnement = Clarté cognitive', 'explication': "Un projet par client, par tâche, par domaine force une clarté mentale. Tu ne peux pas mélanger les contextes. Cela t'oblige à penser en termes de 'qu'est-ce que ce projet doit faire exactement?' plutôt que 'je vais donner tout à Claude et voir ce qui se passe'."}
- {'modele': 'Prompt de fin = Continuité', 'explication': "Le prompt de fin (synthèse + proposition de reprise) est une forme de 'handoff' entre toi et Claude. Tu dis 'voici ce qu'on a fait, voici où on en est, voici ce qu'on pourrait faire ensuite'. Cela crée une continuité narrative qui aide Claude à reprendre le fil."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Le support de Claude Code dans Projects est annoncé comme imminent mais pas encore disponible au moment de la vidéo
- Sujet mentionné mais non développé : La synchronisation cloud entre machines et le partage team/entreprise sont listés comme limitations futures à résoudre
- Question ouverte : Comment gérer optimalement le cloisonnement des projets pour éviter de donner accès à trop de fichiers sensibles à Claude
- Sujet mentionné mais non développé : Les connecteurs MCP (Model Context Protocol) sont mentionnés mais non détaillés dans la démonstration
- Implication 1 : Si Projects ne synchro pas en cloud et n'est que desktop, cela signifie que la vraie limite n'est pas technique mais organisationnelle. Anthropic force les utilisateurs à choisir : soit tu travailles sur une machine, soit tu dois dupliquer les projets. Cela crée un problème de gouvernance pour les équipes.
- Implication 2 : L'absence de partage team natif suggère que Projects est conçu pour des workflows individuels ou freelance, pas pour des équipes. Les agences devront inventer leurs propres systèmes de synchronisation (GitHub, Notion, etc.).
- Implication 3 : Le fait que Claude Code ne soit pas encore supporté dans Projects indique une hiérarchie de priorités : la persistance de la mémoire et des instructions est plus importante que l'exécution de code. Cela dit quelque chose sur la vision d'Anthropic.
- Implication 4 : La mention de 'ne pas donner 50 000 fichiers' révèle un problème caché : les utilisateurs vont naturellement vouloir donner TOUT à Claude pour qu'il soit 'complet', mais cela détruit la qualité. Il faut une discipline active pour cloisonner.
- Implication 5 : L'auteur mentionne 'inventer de manière factuelle' pour les tests. Cela signifie que Projects encourage une forme de prototypage rapide où tu peux demander à Claude de générer du contenu fictif pour tester la structure avant de la remplir de vraies données. C'est une technique de design thinking appliquée à l'IA.

## Ce que tu peux faire maintenant

- [ ] Créer un premier projet Projects pour ton cas d'usage principal (client, projet, domaine) et y mettre tes instructions, ta mémoire initiale et tes fichiers clés. Teste pendant 3 sessions et observe comment la qualité s'améliore.
- [ ] Écrire un 'prompt de fin' template que tu utilises systématiquement à la fin de chaque session. Inclus : résumé de ce qu'on a fait, état actuel du projet, prochaines étapes proposées.
- [ ] Identifier 3 tâches récurrentes que tu fais avec Claude (onboarding, veille, génération de contenu) et créer une slash commande pour chacune. Encode les instructions une fois, réutilise infiniment.
- [ ] Faire un audit de ta mémoire de projet : qu'est-ce qui est utile? Qu'est-ce qui est du bruit? Supprime 30% de ce qui n'est pas pertinent. Observe comment les réponses s'améliorent.
- [ ] Si tu es freelance/agence, créer un projet par client avec ses instructions, son style, ses fichiers. Cela devient ton 'onboarding permanent' pour ce client.
- [ ] Documenter une décision importante que tu as prise (pourquoi tu as choisi X plutôt que Y, ce que tu as appris). Ajoute-la à la mémoire du projet. Cela crée une base de connaissances décisionnelle.
- [ ] Tester MCP en connectant Claude à un service externe (GitHub, Notion) pour que la mémoire soit fraîche sans copier-coller manuel.
- [ ] Créer un projet 'bac à sable' où tu testes des structures avant de les appliquer à des projets réels. Utilise la technique 'inventer de manière factuelle' pour prototyper rapidement.

## Business & Monétisation

- Angle freelance/agence : Projects permet de facturer plus cher parce que tu peux onboarder un client une fois et ensuite livrer du travail 3-5x plus vite. La mémoire persistante devient un asset que tu vends (ex: 'je connais votre style, vos règles, vos erreurs passées').
- Angle créateur de contenu : Projects permet de maintenir une voix/style cohérent sur des mois/années sans avoir à réexpliquer à chaque fois. Cela améliore la qualité perçue et permet de facturer une 'cohérence de marque' comme service.
- Angle développeur : Projects permet de maintenir une base de code avec conventions, patterns et décisions architecturales persistantes. Cela réduit les bugs et accélère les features, ce qui se traduit en moins de temps de debug et plus de temps de feature development.
- Angle formation/coaching : Vendre des 'Projects templates' pré-configurés pour différents cas d'usage (freelance, agence, créateur, dev). Chaque template inclut instructions, mémoire initiale, slash commandes, et un prompt de fin. C'est un produit digital scalable.
- Angle consulting : Aider les entreprises à structurer leurs Projects pour différents départements (marketing, dev, support). Cela devient une forme de 'IA governance' qu'on peut facturer.
- Angle communauté : Créer une communauté autour des Projects (comme l'auteur le fait avec 4000+ personnes). Monétiser via formation premium, templates, ou accès à des projets pré-configurés.

## Définitions

- **Projects** : Espace centralisé et persistant contenant instructions, mémoire, fichiers et tâches planifiées qui restent accessibles session après session
- **Mémoire cloisonnée** : Mémoire isolée par projet pour éviter la confusion entre différents contextes de travail
- **Context rot** : Dégradation de la qualité des réponses due à l'accumulation de contexte inutile
- **Slash commandes** : Commandes personnalisées (ex: /onboarding) permettant d'automatiser des tâches récurrentes
- **Housekeeping** : Maintenance régulière du projet pour épurer et mettre à jour la mémoire et les fichiers

## Outils & techniques mentionnés

- **Claude Cowork** : Assistant collaboratif avec nouvelle fonctionnalité Projects
- **Claude Projects (natifs)** : Espace de stockage avec base de connaissances, conversations et fichiers
- **Claude Code** : Outil de développement intégré (non encore supporté dans Projects)
- **MCP (Model Context Protocol)** : Protocole pour connecter des services externes comme GitHub
- **VS Code / Warp** : Éditeurs pour modifier les fichiers markdown générés
- Création de projet from scratch
- Import depuis un chat existant
- Liaison d'un dossier local
- Configuration de la mémoire du projet
- Création de slash commandes personnalisées
- Housekeeping (épuration régulière du contexte)
- Prompt de fin avec synthèse et reprise
- Centralisation de documentation
- Planification de tâches récurrentes

## Connexions avec d'autres sujets IA

- Prompt engineering : Projects est du prompt engineering permanent. Au lieu de crafting un prompt à chaque fois, tu l'encodes dans les instructions du projet et tu le réutilises.
- RAG (Retrieval Augmented Generation) : Projects est une forme de RAG maison. Tu donnes à Claude des fichiers et une mémoire pour qu'il puisse retriever le contexte pertinent à chaque requête.
- Fine-tuning vs Projects : Projects est une alternative au fine-tuning. Au lieu de fine-tuner le modèle, tu utilises Projects pour adapter Claude à ton cas d'usage spécifique. C'est plus flexible et moins coûteux.
- Agentic AI : Projects + slash commandes + tâches planifiées = une forme d'agentic AI. Claude devient un agent autonome qui exécute des tâches selon tes instructions.
- Knowledge management : Projects force une discipline de knowledge management. Tu dois documenter, structurer et maintenir ta connaissance pour que Claude puisse l'utiliser.
- Context window optimization : Housekeeping est une forme d'optimisation du context window. Tu dois garder seulement ce qui est pertinent pour maximiser la qualité des réponses.
- Persona engineering : Les instructions du projet créent une persona pour Claude. Au lieu de dire 'sois un expert en X', tu encodes cette persona dans les instructions du projet.
- Continuity and memory in AI : Projects résout le problème classique de l'IA : comment maintenir une continuité et une mémoire entre les interactions. C'est un problème fondamental en AI design.

## Prérequis de compréhension

Tu dois avoir compris : (1) comment fonctionne le context window et pourquoi il est limité, (2) la différence entre prompt engineering et fine-tuning, (3) comment l'IA 'apprend' à partir du contexte fourni (elle ne retient rien entre les sessions sans persistance), (4) le concept de 'persona' ou 'rôle' en prompting, (5) pourquoi la clarté et la structure du contexte affectent la qualité des réponses. Si tu comprends ces 5 points, tu es prêt pour Projects. Si tu ne les comprends pas, regarde d'abord des vidéos sur le prompting et le context window.

## Citations notables

> Cowork passe d'un assistant jetable à un collaborateur persistant

> C'est vraiment Game Changer

> Avant on avait du contexte qui était perdu entre les sessions, il fallait réexpliquer à chaque fois

> Tout va rester session après session

> Il faut que tu puisses créer une mémoire de ton business, de tes prises de décision, de tes erreurs, c'est un travail colossal à faire, mais quand tu l'as fait, tout s'accélère beaucoup plus vite

> Faites attention à pas donner le dossier où il y a 50 000 projets, ils ont accès à tout

> Un projet, c'est instruction, mémoire, fichier, et tâches planifiées
