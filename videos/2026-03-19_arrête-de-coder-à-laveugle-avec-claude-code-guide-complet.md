# Arrête de coder à l'aveugle avec Claude Code (Guide Complet)

**Date** : 2026-03-19 | **Durée** : 30:29 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=VnIMIEMeFFk

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi Claude Code échoue sur les projets complexes | section Philosophie IA |
| appliquer l'architecture relationnelle sur ton projet SaaS | section Ce que tu peux faire maintenant |
| explorer comment l'IA comprend les dépendances | section Mental Models |
| voir comment monétiser cette approche | section Business Monétisation |
| aller plus loin sur les sub-agents et le monitoring | section Ouvertures |

## Résumé

La vidéo expose le problème critique des projets SaaS complexes : Claude Code casse involontairement des fonctionnalités interconnectées faute de comprendre les dépendances. L'auteur propose une méthode appelée 'architecture relationnelle' basée sur un arbre indenté documentant chaque feature (core, feature, sub, hook, utility) et ses relations explicites (utilise, déclenche, dépend de, persiste dans). Cette approche, testée sur Ultimate Transcript (SaaS d'analyse de transcripts avec 17 pages, 11 APIs, 15 hooks), améliore la lisibilité, accélère les modifications de 5-10x, réduit les bugs en cascade et augmente la valeur du projet pour revente ou délégation à d'autres IA.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│  PROJET SAAS COMPLEXE (87 fichiers, 17 pages, 11 APIs)       │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    SANS ARCHITECTURE
                              ↓
    ┌─────────────────────────────────────────────────────┐
    │ Claude Code modifie Feature A                        │
    │ → Casse Feature B (dépendance invisible)             │
    │ → Casse Feature C (relation cachée)                  │
    │ → Casse Feature D (effet de cascade)                 │
    │ Temps : 5-10x plus lent, bugs partout               │
    └─────────────────────────────────────────────────────┘
                              ↓
                   ARCHITECTURE RELATIONNELLE
                              ↓
    ┌─────────────────────────────────────────────────────┐
    │ CORE (Auth)                                          │
    │  └─ FEATURE (Paiement Stripe)                        │
    │      └─ SUB (Webhook validation)                     │
    │      └─ HOOK (onPaymentSuccess)                      │
    │      └─ UTILITY (formatPrice)                        │
    │                                                      │
    │ Relations explicites : utilise, déclenche,           │
    │ dépend de, persiste dans                             │
    └─────────────────────────────────────────────────────┘
                              ↓
    Claude Code voit TOUTES les dépendances
    → Modifications 5-10x plus rapides
    → Zéro bugs en cascade
    → Projet scalable et délégable
```

## Chapitres inférés

### Acte 1 — Le problème : Claude Code casse tout
Illustration du problème : modifier une feature (résumé IA) casse 3 autres (Stripe, notifications, dashboard). Cause : Claude Code ignore les dépendances entre fichiers. Symptôme : à 87 fichiers sans documentation, c'est l'enfer.

### Acte 2 — La solution : Architecture relationnelle
Présentation de la méthode en 4 étapes (lister, classifier, relier, documenter). Définition des 5 niveaux (core, feature, sub, hook, utility). Introduction des 4 types de relations (utilise, déclenche, dépend de, persiste dans).

### Acte 3 — Avant/Après et bénéfices
Comparaison visuelle : projet sans architecture vs avec. Bénéfices : lisibilité, vitesse 5-10x, moins de bugs, scalabilité, délégation à d'autres IA, valorisation du projet.

### Acte 4 — Cas concret : Ultimate Transcript
Démonstration live sur un SaaS réel avec 17 pages, 11 APIs, 15 hooks, 35 composants. Utilisation de Claude Code avec Super Power (multi-agents). Coût : 200k tokens. Résultat : architecture.md généré avec arbre indenté, table des relations, schéma DB, flux de données.

### Acte 5 — Techniques avancées et monitoring
Utilisation de Gemini 3.1 Pro pour analyse. Monitoring en temps réel du travail de Claude Code. Techniques de sécurité (RLS, middleware). Extraction de concepts, références, glossaire, flashcards. Conseils sur configuration initiale et sub-agents parallèles.

## Philosophie IA & Pensée profonde

Claude Code fonctionne comme un développeur humain sans mémoire contextuelle globale : il traite les demandes localement sans comprendre l'architecture globale, d'où les bugs en cascade. L'IA a besoin d'une 'mémoire conversationnelle' explicite (l'architecture relationnelle) pour maintenir la cohérence d'un projet complexe, exactement comme un humain aurait besoin de documentation pour reprendre un projet ancien.

Claude Code casse les projets SaaS complexes parce qu'il manque de contexte global sur les dépendances entre fonctionnalités. L'architecture relationnelle (arbre indenté documentant core/feature/sub/hook/utility et leurs relations explicites) crée une 'mémoire conversationnelle' que l'IA peut consulter, transformant les modifications de 5-10x plus rapides et éliminant les bugs en cascade. C'est moins une technique de code qu'une philosophie : l'IA a besoin de la même documentation qu'un humain pour maintenir la cohérence d'un système complexe.

## Prompting & Sagesse d'usage

- Force l'analyse complète du projet avec 'analyse l'intégralité de ce projet' plutôt que de laisser l'IA se baser sur une documentation existante potentiellement incomplète
- Utilise une température basse et un langage 'froid' pour les instructions techniques : évite les descriptions métaphoriques, sois explicite et déterministe
- Documente les relations avec des verbes précis (utilise, déclenche, dépend de, persiste dans) plutôt que des descriptions vagues
- Crée un arbre indenté visuel plutôt que du texte linéaire : l'IA comprend mieux la hiérarchie et les dépendances
- Utilise des multi-agents (Super Power, sub-agents) pour analyser les gros projets en parallèle plutôt que séquentiellement
- Monitore le travail de l'IA en temps réel via le terminal pour ajuster les décisions avant qu'elles ne se cristallisent

## Concepts clés expliqués

### Architecture relationnelle
Un arbre indenté documentant chaque fonctionnalité (classifiée en core/feature/sub/hook/utility) et ses relations explicites (utilise, déclenche, dépend de, persiste dans). C'est une 'carte des dépendances' que Claude Code peut consulter avant de modifier.
**Pourquoi c'est important** : Sans elle, Claude Code modifie à l'aveugle et casse des fonctionnalités interconnectées. Avec elle, il comprend l'impact de chaque changement et peut anticiper les bugs en cascade.

### Température basse
Configuration IA qui rend les réponses déterministes et 'froides' (pas créatives). Pour le code, c'est essentiel : tu veux que Claude Code suive les règles de l'architecture, pas qu'il improvise.
**Pourquoi c'est important** : Une température haute (créative) peut sembler bien pour du contenu, mais elle est désastreuse pour l'architecture. L'IA doit être prévisible et respecter les contraintes explicites.

### Core vs Feature vs Sub vs Hook vs Utility
5 niveaux hiérarchiques. Core = fondations (auth). Feature = fonctionnalités principales (paiement). Sub = sous-fonctionnalités (webhook validation). Hook = déclencheurs (onPaymentSuccess). Utility = outils transversaux (formatPrice).
**Pourquoi c'est important** : Chaque niveau a une 'portée de cassage' différente. Modifier core affecte tout. Modifier utility n'affecte rien. Cette hiérarchie te montre le risque de chaque modification.

### Mémoire conversationnelle
L'IA n'a pas de mémoire à long terme entre prompts. L'architecture relationnelle crée une 'mémoire explicite' que tu fournis à chaque prompt. C'est comme donner à Claude Code les notes de projet qu'il consulterait automatiquement.
**Pourquoi c'est important** : Sans elle, chaque prompt est isolé. Avec elle, Claude Code peut maintenir la cohérence sur des centaines de modifications. C'est la différence entre un développeur junior et un senior.

### Multi-agents et sub-agents parallèles
Au lieu de faire analyser tout le projet par une seule IA (séquentiellement), tu le divises en sous-tâches et les fais analyser en parallèle par plusieurs agents. Super Power (plugin) permet ça.
**Pourquoi c'est important** : Pour les gros projets (100+ fichiers), c'est 5-10x plus rapide. Chaque agent se concentre sur une partie, puis tu les coordonnes via l'architecture relationnelle.

### Row Level Security (RLS) et middleware anti-injection
Techniques de sécurité mentionnées pour protéger les données dans Superbase. RLS = chaque utilisateur ne voit que ses données. Middleware = filtre les requêtes malveillantes.
**Pourquoi c'est important** : L'architecture relationnelle doit aussi documenter les flux de sécurité. Si Claude Code modifie une API sans comprendre le RLS, il peut créer une faille.

### Arbre indenté vs texte linéaire
Au lieu de décrire les dépendances en prose, tu les visualises avec indentation (niveau 1, 1.1, 1.1.1). C'est plus facile à scanner et à comprendre pour l'IA.
**Pourquoi c'est important** : L'IA comprend mieux la hiérarchie visuelle que le texte linéaire. Un arbre indenté est aussi plus facile à maintenir et à mettre à jour.

## Insights non-évidents

- Insight 1 : L'architecture relationnelle n'est pas une documentation technique classique, c'est une 'interface de communication' entre l'humain et l'IA. Elle traduit la compréhension humaine en format que Claude Code peut consulter et respecter. C'est du prompting structurel, pas du code.
- Insight 2 : La température basse mentionnée n'est pas juste une config technique, c'est une philosophie : l'IA doit être 'froide' et déterministe quand elle touche à l'architecture. Les descriptions métaphoriques ou créatives sont des ennemis de la cohérence.
- Insight 3 : Le problème n'est pas que Claude Code est mauvais, c'est qu'il fonctionne comme un développeur junior sans mémoire à long terme. Lui donner l'architecture, c'est lui donner les 'notes de projet' qu'un senior consulterait automatiquement.
- Insight 4 : La valorisation du projet augmente non pas parce que le code est meilleur, mais parce qu'il est documenté et compréhensible. Une entreprise bien documentée vaut 2-3x plus à la revente ou à la délégation.
- Insight 5 : Les 5 niveaux (core/feature/sub/hook/utility) ne sont pas arbitraires : ils reflètent la hiérarchie naturelle des dépendances. Chaque niveau a une 'portée de cassage' différente si modifié.

## Mental models

- {'modele': "L'IA comme développeur sans mémoire", 'explication': "Claude Code traite chaque prompt comme un nouveau contexte. Sans documentation explicite, il ne 'sait' pas ce qui est connecté à quoi. L'architecture relationnelle est sa 'mémoire conversationnelle' — exactement comme tu consulterais des notes avant de modifier un vieux projet."}
- {'modele': 'Les dépendances comme un graphe invisible', 'explication': "Chaque modification dans un projet complexe crée des ondes de choc. Sans visualiser ce graphe (via l'arbre indenté), tu modifies à l'aveugle. L'architecture relationnelle rend le graphe visible et navigable."}
- {'modele': 'La documentation comme outil de pensée, pas juste de communication', 'explication': "En documentant l'architecture, tu forces ton cerveau à clarifier les dépendances. Souvent, tu découvres des bugs ou des inefficacités juste en écrivant. La documentation n'est pas un sous-produit, c'est le produit principal."}
- {'modele': "Les 5 niveaux comme 'cercles de dépendance'", 'explication': "Core affecte tout. Feature affecte sub/hook/utility. Sub affecte hook/utility. Hook affecte utility. Utility n'affecte rien. Modifier au niveau 'core' est 100x plus risqué qu'au niveau 'utility'. L'architecture te montre où tu es dans cette hiérarchie."}
- {'modele': "L'IA comme miroir de ta clarté mentale", 'explication': "Si Claude Code casse des choses, ce n'est pas sa faute — c'est que toi-même tu n'as pas clarifié les dépendances. L'architecture relationnelle force cette clarification. L'IA devient un test de ta compréhension du projet."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment transformer cette méthode en 'skill' adaptatif pour Claude Code
- Sujet mentionné mais non développé : Méthode complète de déploiement de SaaS pour clients (promise pour prochaine vidéo)
- Question ouverte : Comment gérer les projets avec plus de 100 fichiers markdown (endof) sans créer de confusion contextuelle
- Sujet mentionné mais non développé : Optimisation des performances (score de performance) pour les SaaS
- Implication 1 : Cette méthode suppose que tu as déjà une compréhension claire de ton projet. Si tu ne sais pas toi-même quelles sont les dépendances, l'architecture relationnelle te forcera à les découvrir (ce qui est un bénéfice caché).
- Implication 2 : L'architecture relationnelle crée une 'dette de documentation' initiale (200k tokens pour Ultimate Transcript), mais elle se paie en vitesse de développement future. C'est un investissement, pas un coût.
- Implication 3 : Si tu utilises plusieurs IA (Claude, Gemini, etc.), chacune aura besoin de cette architecture. L'architecture devient le 'langage commun' entre IA, pas juste entre humain et IA.
- Implication 4 : Le monitoring en temps réel du travail de Claude Code (via terminal) implique que tu dois rester actif et ajuster. Ce n'est pas du 'fire and forget', c'est du 'co-pilotage'.
- Implication 5 : La mention de 'skills adaptatifs' pour Claude Code suggère que la prochaine étape est d'automatiser la création et la maintenance de l'architecture elle-même, pas juste de la documenter manuellement.

## Ce que tu peux faire maintenant

- [ ] Étape 1 : Liste toutes les features de ton projet SaaS (même si c'est juste 5-10). Sois exhaustif.
- [ ] Étape 2 : Classe chaque feature dans les 5 niveaux (core, feature, sub, hook, utility). Si tu ne sais pas, c'est que tu n'as pas compris ton projet — c'est un signal.
- [ ] Étape 3 : Pour chaque feature, identifie ses dépendances avec les 4 verbes (utilise, déclenche, dépend de, persiste dans). Sois explicite.
- [ ] Étape 4 : Crée un fichier architecture.md avec un arbre indenté. Utilise le format : [NIVEAU] Nom (type de relation → dépendance).
- [ ] Étape 5 : Crée un fichier relations.md avec une table : FROM → TO → TYPE (utilise/déclenche/dépend de/persiste dans).
- [ ] Étape 6 : Copie l'architecture.md dans le contexte de Claude Code avec le prompt : 'Analyse l'intégralité de ce projet en respectant cette architecture. Ne modifie rien sans vérifier les dépendances.'
- [ ] Étape 7 : Teste une modification simple (ex: changer un message d'erreur) et observe si Claude Code respecte l'architecture. Ajuste si besoin.
- [ ] Étape 8 : Pour les gros projets (50+ fichiers), utilise Super Power pour lancer des sub-agents en parallèle. Chaque agent analyse une partie, puis tu les coordonnes.
- [ ] Étape 9 : Monitore le travail de Claude Code en temps réel via le terminal. Si tu vois une modification risquée, arrête et ajuste le prompt.
- [ ] Étape 10 : Mets à jour l'architecture.md à chaque nouvelle feature. C'est une 'dette de documentation' qui se paie en vitesse future.

## Business & Monétisation

- Angle 1 : Offre un service de 'documentation d'architecture' pour les SaaS complexes. Charge 5k-20k€ pour créer l'architecture relationnelle d'un projet existant. Bénéfice client : 5-10x plus rapide à développer, valeur augmente de 2-3x.
- Angle 2 : Crée un template ou un outil (type Obsidian plugin ou SaaS) qui génère automatiquement l'architecture relationnelle à partir du code. Monétise via abonnement (50-200€/mois).
- Angle 3 : Propose du 'co-pilotage' pour les SaaS en développement : tu fournis l'architecture, tu monitores le travail de Claude Code, tu ajustes. Charge à l'heure ou au projet (100-300€/h).
- Angle 4 : Vends des 'skills' ou des 'prompts' pré-configurés pour Claude Code qui respectent l'architecture relationnelle. Marché : développeurs qui utilisent Claude Code mais qui ont peur de casser leurs projets.
- Angle 5 : Crée une agence de 'délégation IA' : tu documentes l'architecture d'un client, tu laisses Claude Code développer, tu monitores. Charge au projet ou au retainer. Bénéfice : client obtient du développement 5-10x plus rapide et moins cher.
- Angle 6 : Offre une formation (cours, workshop) sur 'comment documenter son architecture pour l'IA'. Cible : founders et développeurs qui utilisent Claude Code. Prix : 500-2000€ par personne.

## Définitions

- **Architecture relationnelle** : Arbre indenté qui mappe chaque fonctionnalité et ses dépendances avec 5 niveaux : core, feature, sub, hook et utility
- **Core** : Fonctionnalités fondamentales du projet (ex: authentification)
- **Feature** : Fonctionnalités principales construites sur le core
- **Sub** : Sous-fonctionnalités dépendantes des features
- **Hook** : Déclencheurs ou événements qui activent d'autres fonctionnalités
- **Utility** : Fonctionnalités utilitaires transversales
- **Température basse** : Configuration IA pour réponses déterministes et froides, adaptée au code
- **Pépites** : Éléments clés extraits automatiquement des transcripts

## Outils & techniques mentionnés

- **Claude Code** : Générateur de code et développeur IA principal
- **Superbase** : Base de données utilisée dans le projet
- **Stripe** : Système de paiement intégré
- **Gemini 3.1 Pro** : Modèle IA pour analyse de transcripts
- **Open Router** : API pour routage de modèles IA
- **Super Power** : Plugin pour exécution multi-agents
- **Ultimate Transcript** : SaaS en développement pour analyser transcripts
- Arbre indenté de dépendances
- Indentation hiérarchique (niveau 1, 1.1, 1.1.1)
- Mapping des relations (utilise, déclenche, dépend de, persiste dans)
- Documentation markdown avec architecture.md et relations.md
- Classification des fonctionnalités (core, feature, sub, hook, utility)
- Row Level Security (RLS) Superbase
- Middleware anti-injection
- Recherche sémantique
- Diagramme textuel de pipeline

## Connexions avec d'autres sujets IA

- Prompting avancé : L'architecture relationnelle est une forme de 'structured prompting' — tu structures l'information pour que l'IA la comprenne mieux.
- Context windows et token budgets : Avec 87 fichiers, tu dois optimiser ce que tu mets en contexte. L'architecture relationnelle te montre quels fichiers sont critiques.
- Chain of Thought (CoT) : Claude Code utilise implicitement du CoT. L'architecture relationnelle force une 'pensée structurée' avant la modification.
- Multi-agent systems : Les sub-agents parallèles (Super Power) sont une application directe de la théorie multi-agent. L'architecture relationnelle les coordonne.
- Knowledge graphs : L'architecture relationnelle EST un knowledge graph simplifié. Les concepts avancés (RAG, semantic search) pourraient l'améliorer.
- Retrieval Augmented Generation (RAG) : Au lieu de mettre toute l'architecture en contexte, tu pourrais utiliser RAG pour récupérer seulement les dépendances pertinentes à chaque prompt.
- Fine-tuning et adaptation : La mention de 'skills adaptatifs' suggère que tu pourrais fine-tune Claude Code sur ton architecture spécifique.
- Monitoring et observabilité : Le monitoring en temps réel du travail de Claude Code est une forme d'observabilité IA — tu vois ce qu'elle fait et tu ajustes.
- Prompt injection et sécurité : L'architecture relationnelle doit aussi documenter les flux de sécurité (RLS, middleware) pour éviter que Claude Code crée des failles.
- Agentic workflows : Claude Code + architecture relationnelle + monitoring = un workflow agentic complet où l'IA agit mais tu restes en contrôle.

## Prérequis de compréhension

Tu dois avoir compris : (1) que Claude Code fonctionne sans mémoire à long terme et traite chaque prompt isolément, (2) que les projets SaaS complexes ont des dépendances invisibles qui causent des bugs en cascade, (3) que la documentation n'est pas juste pour les humains mais aussi pour l'IA, (4) les bases du prompting (température, contexte, instructions claires), (5) que l'IA est un outil qui amplifie ta clarté mentale (si tu es confus, l'IA sera confuse). Bonus : une expérience avec Claude Code ou un autre LLM pour coder, et une compréhension basique de l'architecture logicielle (dépendances, modules, APIs).

## Citations notables

> Claude Code va casser des fonctionnalités

> il ne sait pas ce qui est connecté à quoi, il y a un vrai problème marché

> ton projet ça va devenir une bombe à retardement

> les modifications elles vont être 5 à 10 fois plus rapide

> il faut que ce soit à une température très faible

> les textes qu'on va mettre vont être froids parce que c'est une IA derrière

> une société lorsqu'elle est documentée, lorsqu'il y a des SOP, et bien elle augmente sa valorisation naturellement

> il ne faudra pas que ce soit le dashboard permet de faire ça, non ça va être très froid
