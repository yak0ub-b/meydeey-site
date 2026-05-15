# Comment créer un MULTI AGENT N8N qui fait travailler d’autres IA 2026

**Date** : 2025-12-19 | **Durée** : 16:05 | **Niveau** : intermédiaire | **Catégorie** : Technique & Outils IA | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=mDysRdvQMg4

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi les systèmes multi-agents surpassent les agents uniques | section Philosophie IA et Mental Models |
| construire ton premier système multi-agents | section Ce que tu peux faire maintenant et Concepts clés expliqués |
| maîtriser le prompting avancé pour orchestrer l'IA | section Concepts clés expliqués (Prompt système vs utilisateur) et Sagesse du prompting |
| explorer les limites et les questions ouvertes | section Ouvertures et Ce qu'il ne dit pas |

## Résumé

Le créateur montre comment construire un système multi-agents IA sur N8N avec un agent orchestrateur qui route intelligemment les requêtes vers des sous-agents spécialisés (prospection, conversion, psychologie). Il explique l'importance des descriptions claires, de la séparation prompt système/utilisateur, et du choix des modèles LLM appropriés. Le workflow permet de combiner les réponses de plusieurs agents spécialisés pour produire une réponse finale de meilleure qualité, applicable à différents secteurs d'une entreprise.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    UTILISATEUR (Chat Input)                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────┐
        │  AGENT ORCHESTRATEUR (GPT 5.2) │
        │  Rôle: Analyser & Router       │
        │  Tâche: Décider qui fait quoi  │
        └────────────┬───────────────────┘
                     │
        ┌────────────┼────────────┬──────────────┐
        │            │            │              │
        ▼            ▼            ▼              ▼
   ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ Agent   │ │ Agent    │ │ Agent    │ │ Agent N  │
   │Prospect │ │Conversion│ │Psycho    │ │(Custom)  │
   │(GPT4.1) │ │(GPT5.2)  │ │(GPT5.2)  │ │          │
   └────┬────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘
        │           │            │            │
        └───────────┼────────────┼────────────┘
                    │
                    ▼
        ┌──────────────────────────┐
        │  RÉPONSE COMBINÉE FINALE │
        │  (Meilleure qualité)     │
        └──────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Introduction et vision globale
Présentation du concept de multi-agents IA orchestrés, cas d'usage pour les entreprises, possibilités de mémoires personnalisées et RAG

### Acte 2 — Architecture et structure de base
Explication des composants : chat input, agent orchestrateur, sous-agents, LLM, et comment les connecter dans N8N

### Acte 3 — Configuration des agents
Remplissage des descriptions, prompts système et utilisateur pour chaque sous-agent (prospection, conversion, psychologie)

### Acte 4 — Tests et itération
Premiers tests avec requêtes simples, observation du routing, analyse des logs, identification des erreurs

### Acte 5 — Entraînement et optimisation
Ajout d'instructions explicites à l'orchestrateur pour forcer l'intervention de certains agents, modification des modèles LLM

### Acte 6 — Principes de prompting avancé
Techniques de structuration des prompts, importance hiérarchique, séparation rôle/tâche, utilisation d'un GPT custom pour optimiser

### Acte 7 — Conclusion et scalabilité
Résumé de la méthode, possibilité de duplication pour d'autres domaines, ressources pour aller plus loin

## Philosophie IA & Pensée profonde

L'IA fonctionne mieux quand elle est spécialisée et guidée par des instructions claires et hiérarchisées ; un système multi-agents où chaque agent maîtrise un domaine spécifique produit des résultats supérieurs à un agent généraliste, car la combinaison de perspectives spécialisées enrichit la réponse finale. L'IA n'est pas déterministe mais probabiliste, donc les instructions doivent trouver l'équilibre entre précision et flexibilité pour éviter le chaos ou la rigidité.

La vidéo enseigne comment construire un système d'IA multi-agents orchestrés où un agent superviseur route intelligemment les requêtes vers des sous-agents spécialisés, produisant des réponses de meilleure qualité qu'un agent généraliste. Le vrai pouvoir réside dans la combinaison de perspectives spécialisées guidées par des instructions hiérarchisées claires, plutôt que dans la puissance brute d'un seul modèle. Cette architecture transforme l'IA d'un outil réactif en un système proactif capable de décomposer et résoudre des problèmes complexes en entreprise.

## Prompting & Sagesse d'usage

- Donnez des descriptions claires et succinctes à chaque agent pour que l'orchestrateur puisse router automatiquement sans être ultra-déterministe
- Séparez toujours le prompt système (rôle : 'tu es un...') du prompt utilisateur (tâche : 'tu dois faire...')
- Utilisez le markdown et structurez bien vos instructions pour éviter de les mélanger
- Placez les instructions les plus importantes au début ou à la fin, pas au milieu
- Marquez l'importance relative des instructions (importance 1, 2, etc.) pour guider le modèle
- Testez d'abord avec des requêtes simples, puis complexes, et analysez les logs pour déboguer
- Si un agent ne fait pas ce que vous attendez, entraînez l'orchestrateur avec des instructions explicites plutôt que de rendre le système trop déterministe
- Choisissez le bon modèle LLM selon le besoin : GPT 5.2 pour raisonnement complexe, GPT 4.1 pour logique mathématique
- Utilisez des timeouts pour éviter les erreurs de raisonnement prolongé avec les modèles puissants
- La qualité du fond (contenu) prime sur la forme (présentation) ; optimisez d'abord le contenu, puis la forme

## Concepts clés expliqués

### Agent orchestrateur
Un agent IA superviseur qui analyse chaque requête utilisateur et décide intelligemment quel sous-agent est le mieux placé pour la traiter. Il agit comme un 'dispatcher' cognitif, pas un simple routeur.
**Pourquoi c'est important** : Sans orchestrateur, tu dois créer des règles manuelles pour router les tâches (if/else). Avec un orchestrateur IA, le routing devient flexible et adaptatif—il peut gérer des cas limites et des requêtes ambiguës.

### Sous-agents spécialisés
Des agents IA entraînés pour exceller dans un domaine spécifique (prospection, conversion, psychologie, etc.). Chacun a ses propres prompts système/utilisateur et peut être configuré avec un modèle LLM différent.
**Pourquoi c'est important** : La spécialisation produit une meilleure qualité qu'un agent généraliste. Un agent 'prospection' comprend les nuances du cold outreach mieux qu'un agent généraliste, ce qui se traduit par des réponses plus pertinentes.

### Prompt système vs prompt utilisateur
Le prompt système définit le rôle et l'identité de l'agent ('Tu es un expert en prospection'). Le prompt utilisateur définit la tâche spécifique ('Écris un email de prospection pour X'). Ils doivent être séparés et clairs.
**Pourquoi c'est important** : Cette séparation crée une architecture cognitive stable. Si tu mélanges rôle et tâche, le modèle devient confus et produit des réponses incohérentes. C'est la fondation du prompting avancé.

### RAG (Retrieval-Augmented Generation)
Une technique qui enrichit les agents avec des connaissances externes (bases de données, documents, APIs) en temps réel. Au lieu de compter sur les connaissances du modèle, tu lui fournis les données pertinentes.
**Pourquoi c'est important** : RAG rend les agents plus précis et à jour. Un agent sans RAG peut halluciner ou donner des informations obsolètes. Avec RAG, tu contrôles les sources de vérité.

### Routing intelligent
Le processus par lequel l'orchestrateur décide quel sous-agent traiter une requête. Le routing est 'intelligent' quand il est basé sur la compréhension sémantique de la requête, pas sur des règles rigides.
**Pourquoi c'est important** : Un bon routing évite les erreurs (donner une tâche de conversion à un agent de prospection) et optimise la qualité. C'est le cœur du système multi-agents.

### Hiérarchie des instructions
Marquer les instructions par ordre d'importance (importance 1 = critique, importance 2 = important, etc.) et les placer au début ou à la fin du prompt, pas au milieu.
**Pourquoi c'est important** : Les LLM traitent les instructions de manière positionnelle—celles au début et à la fin ont plus de poids. Marquer l'importance aide le modèle à prioriser les directives critiques.

### Timeout
Une limite de temps ou de tokens pour éviter que le modèle ne 'raisonne trop longtemps' et ne fasse des erreurs. Par exemple, limiter GPT 5.2 à 30 secondes de raisonnement.
**Pourquoi c'est important** : Les modèles puissants peuvent halluciner ou diverger si on les laisse raisonner indéfiniment. Les timeouts sont des garde-fous qui maintiennent la qualité.

### Mémoires personnalisées
Des contextes ou historiques spécifiques à chaque agent ou utilisateur, permettant aux agents de 'se souvenir' des interactions précédentes et d'adapter leurs réponses.
**Pourquoi c'est important** : Avec mémoire, les agents deviennent plus contextuels et personnalisés. Sans mémoire, chaque interaction est isolée et moins pertinente.

## Insights non-évidents

- Insight 1 : L'orchestrateur n'est pas juste un routeur passif—c'est un agent IA qui doit lui-même être entraîné et guidé. Si l'orchestrateur fait du 'bordel', tout le système en fait. La qualité du système dépend de la clarté des instructions données à l'orchestrateur, pas seulement à ses sous-agents.
- Insight 2 : La séparation prompt système/utilisateur n'est pas une simple convention—c'est une architecture cognitive. Le prompt système définit l'identité et les limites de l'agent (qui il est), tandis que le prompt utilisateur définit la mission (ce qu'il doit faire). Mélanger les deux crée de la confusion probabiliste.
- Insight 3 : Le choix du modèle LLM (5.2 vs 4.1) est une décision architecturale, pas une question de puissance brute. GPT 4.1 peut être plus efficace pour la logique déterministe, tandis que 5.2 excelle au raisonnement complexe. Cela implique que chaque agent doit être dimensionné pour sa tâche spécifique.
- Insight 4 : L'importance hiérarchique des instructions (marquage en markdown, placement début/fin) révèle que les LLM ne traitent pas les instructions de manière égale—elles ont une 'gravité' positionnelle. Les instructions au début et à la fin ont plus de poids que celles au milieu.
- Insight 5 : La citation 'Si c'est le bordel, et bien ça, tu feras pareil avec tes clients' implique que l'IA reflète la qualité de la pensée qui l'a créée. Un système chaotique produit du chaos. C'est une leçon sur la responsabilité du designer IA.

## Mental models

- Modèle mental 1 : Pense à l'orchestrateur comme un 'directeur de casting' qui connaît les forces de chaque acteur et assigne les rôles en fonction de la scène. Un bon directeur ne donne pas tous les rôles au meilleur acteur—il optimise pour la qualité globale de la production.
- Modèle mental 2 : Les prompts système et utilisateur sont comme la 'nature vs nurture' en IA. Le prompt système est la nature (qui tu es fondamentalement), le prompt utilisateur est la nurture (ce qu'on te demande de faire maintenant). Les deux doivent être en harmonie.
- Modèle mental 3 : Un système multi-agents est comme une équipe de consultants spécialisés. Un consultant généraliste peut répondre à tout, mais mal. Une équipe de spécialistes coordonnée par un chef de projet produit une meilleure solution, car chacun apporte sa profondeur.
- Modèle mental 4 : Les timeouts et les limites de raisonnement sont comme des 'garde-fous' cognitifs. Sans eux, un modèle puissant peut 'halluciner' en raisonnant trop longtemps. C'est une leçon sur la nécessité de contraintes pour la qualité.
- Modèle mental 5 : La hiérarchie des instructions (importance 1, 2, 3) est comme une 'hiérarchie des besoins' en IA. Les instructions critiques doivent être marquées comme telles, sinon le modèle les traite comme du bruit.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment intégrer des bases de données ou des APIs externes aux sous-agents
- Sujet mentionné mais non développé : Détails complets sur l'implémentation des RAG pour chaque agent
- Sujet mentionné mais non développé : Métriques de qualité pour évaluer la performance du système multi-agents
- Question ouverte laissée sans réponse : Comment gérer les conflits quand plusieurs agents proposent des solutions contradictoires ?
- Question ouverte laissée sans réponse : Quel est le coût optimal en tokens pour un système multi-agents complexe ?
- Implication non-dite 1 : Le coût en tokens d'un système multi-agents est multiplicatif, pas additif. Chaque requête traverse l'orchestrateur PUIS les sous-agents, ce qui peut doubler ou tripler la consommation de tokens. La vidéo ne discute pas de l'optimisation des coûts.
- Implication non-dite 2 : La scalabilité horizontale (dupliquer la structure pour d'autres domaines) suppose que les domaines sont indépendants. Mais que se passe-t-il quand les agents doivent collaborer ou quand leurs réponses entrent en conflit ? La vidéo ne couvre pas la gestion des conflits inter-agents.
- Implication non-dite 3 : L'entraînement de l'orchestrateur via 'instructions explicites' est en réalité du prompt engineering itératif. Cela signifie que le système n'est jamais vraiment 'fini'—il demande une maintenance continue et une réoptimisation des prompts.
- Ce qu'on peut en déduire : Un système multi-agents bien conçu est plus robuste qu'un agent unique, mais aussi plus complexe à déboguer. Les erreurs peuvent venir de l'orchestrateur, d'un sous-agent, ou de la combinaison de leurs réponses.
- Ce qu'on peut en déduire : La psychologie est présentée comme un agent spécialisé, mais elle est en réalité une couche transversale qui devrait influencer TOUS les autres agents. Cela suggère une architecture où certains agents sont 'horizontaux' (transversaux) et d'autres 'verticaux' (spécialisés).

## Ce que tu peux faire maintenant

- [ ] Créer un workflow N8N simple avec un chat input, un agent orchestrateur (GPT 5.2) et 2-3 sous-agents spécialisés pour tester le concept.
- [ ] Écrire des descriptions claires et succinctes pour chaque sous-agent (2-3 phrases max) pour que l'orchestrateur puisse les identifier automatiquement.
- [ ] Séparer explicitement le prompt système (rôle) et le prompt utilisateur (tâche) pour chaque agent, en utilisant du markdown pour structurer.
- [ ] Tester ton système avec des requêtes simples d'abord ('Écris un email'), puis complexes ('Écris un email de prospection qui utilise la psychologie pour X'), et observer le routing dans les logs.
- [ ] Ajouter une instruction explicite à l'orchestrateur forçant l'intervention d'un agent spécifique (ex: 'Toujours consulter l'agent Psychologie') et mesurer l'impact sur la qualité.
- [ ] Dupliquer la structure pour un autre domaine métier (ex: support client, création de contenu) et adapter les sous-agents.
- [ ] Analyser les erreurs de routing en examinant les logs et en réentraînant l'orchestrateur avec des instructions plus précises.
- [ ] Expérimenter avec différents modèles LLM pour chaque agent (GPT 5.2 pour raisonnement, GPT 4.1 pour logique) et comparer les résultats.
- [ ] Ajouter un timeout à l'orchestrateur pour éviter les raisonnements prolongés et les hallucinations.
- [ ] Connecter une source de données (RAG) à au moins un sous-agent pour enrichir ses réponses avec des connaissances externes.

## Business & Monétisation

- Offrir un service d'automatisation multi-agents pour les entreprises (prospection, conversion, support client) en tant que SaaS ou agence.
- Vendre des templates de systèmes multi-agents pré-configurés pour différents secteurs (immobilier, e-commerce, B2B, etc.).
- Proposer du consulting pour optimiser les prompts et l'architecture des systèmes multi-agents existants (audit + optimisation).
- Créer une formation ou une masterclass sur le design de systèmes multi-agents IA (vendre la connaissance).
- Intégrer des systèmes multi-agents dans des produits existants (CRM, email marketing, chatbots) pour augmenter la valeur perçue.
- Facturer à l'usage : chaque requête traitée par le système multi-agents génère un coût (tokens) que tu peux monétiser via un modèle SaaS.

## Définitions

- **Agent orchestrateur** : Agent IA superviseur qui analyse les requêtes initiales et décide intelligemment à quel sous-agent assigner la tâche
- **Sous-agents** : Agents IA spécialisés dans des domaines spécifiques (prospection, conversion, psychologie, etc.) qui exécutent les tâches assignées
- **Distributeur de tâches** : Synonyme d'agent orchestrateur, celui qui route les requêtes vers les bons agents
- **Prompt système** : Instructions définissant le rôle et le comportement de l'agent (équivalent à 'roll')
- **Prompt utilisateur** : Instructions définissant la tâche spécifique à accomplir (équivalent à 'tâche')
- **RAG** : Retrieval-Augmented Generation : technique pour enrichir les agents avec des connaissances externes
- **Timeout** : Délai limite pour éviter que GPT 5.2 ne fasse des erreurs lors du raisonnement prolongé

## Outils & techniques mentionnés

- **N8N** : Plateforme d'automatisation pour créer des workflows multi-agents
- **ChatGPT 5.2** : Modèle LLM pour l'agent orchestrateur/distributeur
- **ChatGPT 4.1** : Modèle LLM alternatif pour logique mathématique sans raisonnement lourd
- **GPT secret (custom)** : GPT personnalisé pour optimiser les prompts
- Structuration hiérarchique des agents (orchestrateur + exécuteurs)
- Descriptions claires et succinctes des agents pour routing automatique
- Séparation prompt système (rôle) et prompt utilisateur (tâche)
- Utilisation de timeouts pour éviter les erreurs de raisonnement
- Entraînement des agents via instructions précises
- Duplication d'agents pour scalabilité
- Connexion de RAG aux agents
- Analyse des logs pour déboguer
- Importance hiérarchique des instructions (marquage en markdown)
- Placement des instructions (début/fin plutôt qu'au milieu)

## Connexions avec d'autres sujets IA

- Prompt engineering avancé : la vidéo est une application pratique des principes de prompting (séparation rôle/tâche, hiérarchie, placement).
- Agents autonomes et réflexion : les systèmes multi-agents sont une étape vers les agents autonomes qui peuvent planifier et exécuter des tâches complexes.
- Fine-tuning vs prompting : la vidéo montre que le prompting intelligent peut remplacer le fine-tuning pour créer des agents spécialisés.
- Évaluation et monitoring d'IA : déboguer un système multi-agents nécessite des métriques et des logs pour comprendre où les erreurs se produisent.
- RAG et knowledge management : enrichir les agents avec des connaissances externes est une application directe de RAG.
- Coûts et optimisation des tokens : un système multi-agents a un coût multiplicatif en tokens, ce qui soulève des questions d'optimisation.
- Éthique et responsabilité IA : la citation 'Si c'est le bordel, tu feras pareil avec tes clients' soulève des questions sur la responsabilité du designer IA.
- Collaboration homme-machine : les systèmes multi-agents peuvent être augmentés avec des boucles humaines pour validation et correction.

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionnent les LLM et les prompts de base (rôle + tâche). (2) Les concepts fondamentaux du prompting (clarté, structure, contexte). (3) Comment fonctionne N8N ou une plateforme d'automatisation similaire (workflows, nodes, connexions). (4) La différence entre un agent IA et un simple appel API à un LLM. (5) Les limites des modèles LLM (hallucinations, raisonnement limité, coûts en tokens). Si tu maîtrises ces fondamentaux, tu peux absorber cette vidéo et l'appliquer immédiatement.

## Citations notables

> Tu dois être précis. Ne donne pas la tâche à n'importe qui. Analyse bien l'input à chaque fois.

> Une règle importante est que tu dois toujours faire intervenir l'agent IA psychologie car chacune des requêtes devra être influencée par la compréhension profonde et fine de la psychologie de mes clients prospects et public cible.

> Si c'est le bordel, et bien ça, tu feras pareil avec tes clients, tu feras le bordel.

> Le fond est plus important que la forme. La forme, elle se travaille après, dès que le fond marche.

> Dès qu'il y a une erreur, je t'invite vraiment à la noter, à essayer de comprendre. C'est du pain banni.

> Plus ça va être des profils qui vont être liés donc très proche entre eux. Plus ça va être difficile dans les instructions. Donc plus il va falloir être déterministe.
