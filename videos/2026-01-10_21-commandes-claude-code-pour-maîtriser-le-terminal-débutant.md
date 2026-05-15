# 21 Commandes Claude Code pour Maîtriser le Terminal (débutant)

**Date** : 2026-01-10 | **Durée** : 20:07 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔵 technique
**URL** : https://www.youtube.com/watch?v=wq0HVJ1rqtM

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi Cloud Code change le jeu en 2026 | section Philosophie IA et Mental Models |
| appliquer immédiatement sur ton projet | section Ce que tu peux faire maintenant |
| maîtriser les concepts cachés (tokens, contexte, agents) | section Concepts clés expliqués et Insights non-évidents |
| explorer les limites et aller plus loin | section Ouvertures et Ce qu'il ne dit pas |

## Résumé

Cette vidéo présente les 21 commandes principales de Cloud Code, une extension VS Code intégrant Claude directement dans le terminal. Elle couvre la gestion des modèles, la configuration, le suivi des tokens, l'export/import de conversations, la création d'agents spécialisés, l'audit de sécurité, la compaction de contexte et la documentation automatique. L'auteur démontre chaque commande avec des exemples concrets, notamment la création d'un site de voitures de luxe et un audit de sécurité, montrant comment Cloud Code peut accélérer drastiquement le développement même pour des débutants.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    CLOUD CODE WORKFLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Projet] -> /init -> [Cloud.md] (structure globale)        │
│      ↓                                                        │
│  [Contexte] -> /memory -> [Instructions persistantes]       │
│      ↓                                                        │
│  [Tâche] -> /agent -> [Agent spécialisé] (MCP + tools)      │
│      ↓                                                        │
│  [Conversation] -> /context -> [Tokens utilisés]            │
│      ↓                                                        │
│  [Historique] -> /compact -> [Contexte libéré]              │
│      ↓                                                        │
│  [Résultat] -> /export -> [Sauvegarde + Audit]              │
│                                                               │
│  Résultat : 1-2 mois → 4-5 jours (Cédric)                   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Introduction et contexte
Présentation de Cloud Code comme outil essentiel en 2026, installation dans VS Code, justification de son importance malgré l'interface terminal moins attrayante

### Acte 2 — Commandes de gestion basique (1-5)
/model pour changer de modèle, /config pour personnaliser, /stats pour voir l'utilisation, /clear pour nettoyer l'historique, /export pour sauvegarder les conversations

### Acte 3 — Commandes de navigation et contexte (6-10)
/rewind pour revenir en arrière, /usage pour voir les crédits, /todo pour les listes de tâches, /output style pour changer le format de réponse, /mcp pour gérer les serveurs externes

### Acte 4 — Agents et automatisation (11-13)
/agent pour créer des agents spécialisés, démonstration avec un agent d'audit de sécurité, utilisation sémantique du langage naturel pour invoquer les agents

### Acte 5 — Analyse et optimisation (14-18)
/context pour voir l'utilisation détaillée, /resume pour reprendre une conversation, /exit pour quitter, /compact pour compacter le contexte, /export rapide avec nom personnalisé

### Acte 6 — Documentation et mémoire (19-20)
/init pour créer Cloud.md, /memory pour modifier les instructions globales et par projet

### Acte 7 — Débogage et permissions (21)
/debug pour analyser les erreurs intelligemment, /permission pour contrôler les accès automatisés, cas d'usage avancés

### Acte 8 — Conclusion et cas d'usage réel
Témoignage de Cédric passant de 1-2 mois à 4-5 jours de développement, démonstration que même les débutants peuvent créer des projets de qualité

## Philosophie IA & Pensée profonde

Claude fonctionne comme un assistant contextuel capable de comprendre globalement un projet et d'adapter ses réponses selon le contexte fourni ; plus on lui donne d'informations structurées (via Cloud.md, agents spécialisés, mémoire), plus il devient précis et efficace, transformant le développement logiciel en processus collaboratif où l'IA anticipe les besoins plutôt que de simplement réagir aux demandes.

Cloud Code transforme Claude en assistant de développement intégré au terminal, où la gestion intelligente du contexte (tokens, agents spécialisés, compaction) devient la clé pour accélérer drastiquement la production de code. La vraie puissance réside non pas dans les 21 commandes elles-mêmes, mais dans la philosophie sous-jacente : structurer l'information (via Cloud.md, MCP, mémoire) pour que Claude anticipe les besoins plutôt que de réagir passivement. Cela transforme le développement d'un processus linéaire (demande → réponse) en processus collaboratif où l'IA comprend le projet globalement et s'adapte automatiquement.

## Prompting & Sagesse d'usage

- Utiliser le langage naturel pour invoquer les agents plutôt que des commandes rigides : 'audit la sécurité' plutôt que '/security review'
- Toujours faire un /export avant un /compact pour ne pas perdre les détails importants
- Créer des agents spécialisés pour les tâches répétitives plutôt que de relancer les mêmes prompts
- Consulter /context régulièrement pour éviter de dépasser la limite de tokens et maintenir la qualité
- Initialiser avec /init dès l'arrivée sur un nouveau projet pour que Claude comprenne la structure globale
- Désactiver les MCP Tools inutiles pour économiser les tokens et améliorer la performance
- Utiliser /memory pour encoder les préférences de style et les règles métier une fois, plutôt que de les répéter à chaque prompt
- Documenter les décisions importantes dans Cloud.md pour que les agents futurs comprennent le contexte historique

## Concepts clés expliqués

### Tokens
Unités de consommation des modèles IA (mots fragmentés). Claude Opus a 200k tokens de contexte. Chaque prompt consomme des tokens ; une fois la limite atteinte, tu dois compacter ou créer une nouvelle conversation.
**Pourquoi c'est important** : Gérer les tokens = gérer les coûts et la qualité. Si tu dépasses la limite, Claude perd le contexte et la qualité baisse. /context et /compact sont tes outils pour rester dans les limites.

### Contexte (fenêtre de contexte)
La 'mémoire' disponible pour Claude dans une conversation. Plus le contexte est grand, plus Claude peut se souvenir. Mais plus grand = plus lent et plus cher. Cloud Code aide à optimiser cette fenêtre.
**Pourquoi c'est important** : Un bon contexte = Claude comprend le projet globalement et fait des choix cohérents. Un mauvais contexte = Claude oublie les décisions précédentes et fait du code incohérent. /init + Cloud.md structurent le contexte.

### MCP (Model Context Protocol)
Protocole permettant de connecter des serveurs externes (GitHub, Codebase Context, etc.) à Claude. Cela donne à Claude accès à tes données en temps réel sans les copier dans la conversation.
**Pourquoi c'est important** : Sans MCP, tu dois copier-coller ton code dans le chat. Avec MCP, Claude peut lire directement tes repos, analyser la structure, et faire des suggestions contextuelles. C'est la différence entre 'aveugle' et 'voyant'.

### Agent
Instance spécialisée de Claude configurée pour une tâche spécifique (ex: audit de sécurité). Un agent a ses propres instructions, MCP Tools, et peut être invoqué en langage naturel ('audit la sécurité').
**Pourquoi c'est important** : Au lieu de relancer le contexte complet pour chaque tâche, tu crées un agent une fois. Ensuite, tu l'invoques simplement. C'est plus rapide, moins cher, et plus fiable car l'agent est optimisé pour sa tâche.

### Compaction (/compact)
Processus de transformation de l'historique conversationnel (détails bruts, faux pas, corrections) en instructions condensées. Exemple : 100 messages → 5 instructions claires.
**Pourquoi c'est important** : Libère du contexte sans perdre la sagesse extraite. Permet de continuer une conversation longue sans dépasser les limites de tokens. C'est l'IA qui 'apprend' de sa propre conversation.

### Cloud.md
Fichier de documentation auto-généré par /init qui décrit la structure du projet, les conventions, les décisions architecturales. Claude le consulte automatiquement.
**Pourquoi c'est important** : Crée une 'constitution' du projet que Claude respecte sans qu'on la rappelle. Évite les incohérences et les régressions. C'est comme avoir une 'mémoire long-terme' du projet.

### Mémoire (/memory)
Instructions persistantes qui s'appliquent à tous les prompts (globales) ou à un projet spécifique. Exemple : 'Toujours utiliser TypeScript', 'Préférer les composants fonctionnels'.
**Pourquoi c'est important** : Encode les préférences une fois plutôt que de les répéter à chaque prompt. Réduit la taille des prompts et améliore la cohérence. C'est du 'prompt engineering' permanent.

## Insights non-évidents

- Insight 1 : Les 21 commandes ne sont que l'interface ; le vrai système est la gestion du contexte. Cloud Code force à penser en termes de 'fenêtres de tokens' plutôt que de 'conversations infinies', ce qui change radicalement comment on structure les prompts.
- Insight 2 : /init + Cloud.md crée un 'mur de contexte' permanent que Claude consulte automatiquement. C'est l'équivalent d'une base de connaissances interne au projet, transformant Claude d'un chatbot stateless en assistant avec mémoire de projet.
- Insight 3 : Les agents (/agent) ne sont pas juste des 'rôles' ; ce sont des instances de Claude avec des MCP Tools spécifiques et des instructions encodées. Cela signifie que tu peux créer des 'mini-Claude' optimisés pour une tâche (audit de sécurité, refactoring, etc.) sans relancer le contexte complet.
- Insight 4 : La compaction (/compact) est un acte philosophique : transformer l'historique conversationnel (détails bruts) en instructions condensées (sagesse extraite). C'est l'IA qui apprend de sa propre conversation.
- Insight 5 : L'absence de mention sur 'comment entraîner un agent' suggère que les agents ne sont pas fine-tunés mais plutôt 'configurés' via prompts + MCP Tools. C'est un paradigme différent du machine learning classique.

## Mental models

- Modèle 1 — Contexte comme ressource finie : Pense à la fenêtre de tokens (200k pour Opus) comme une batterie. Chaque prompt consomme de l'énergie. /compact est le 'recharge rapide' qui transforme l'historique en instructions condensées. /clear est le 'reset'. /context est le 'fuel gauge'.
- Modèle 2 — Agents comme délégation intelligente : Au lieu de relancer Claude avec le même contexte pour chaque tâche, crée un agent spécialisé. C'est comme embaucher un expert qui connaît déjà le projet et n'a besoin que de la tâche spécifique.
- Modèle 3 — Cloud.md comme constitution du projet : /init crée un document qui décrit la structure, les conventions, les décisions. Claude le consulte automatiquement. C'est comme avoir une 'charte du projet' que l'IA respecte sans qu'on la rappelle à chaque fois.
- Modèle 4 — MCP comme système nerveux : Les MCP Tools (GitHub, Codebase Context) sont les 'sens' de Claude. Plus tu connectes de serveurs, plus Claude a d'informations en temps réel. C'est l'équivalent d'une IA avec accès à tes données.
- Modèle 5 — Développement comme conversation structurée : Au lieu de 'faire du code', tu 'guides Claude à travers une conversation'. Les commandes (/agent, /compact, /export) sont les 'points de contrôle' qui structurent cette conversation pour qu'elle reste productive.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment créer des skills personnalisés au-delà des agents fournis
- Sujet mentionné mais non développé : Configuration avancée des permissions et mode 100% automatique
- Sujet mentionné mais non développé : Intégration avec d'autres outils comme Lovable ou GLM 4.7
- Question ouverte : Comment optimiser les MCP Tools pour ne pas consommer trop de tokens
- Question ouverte : Quelles sont les meilleures pratiques pour entraîner un agent sur un domaine spécifique
- Implication non-dite 1 : Si Cloud Code est 'essentiel en 2026', cela signifie que les workflows sans gestion explicite du contexte (ChatGPT web, interfaces simples) deviendront obsolètes pour le développement professionnel. Le terminal redevient le centre du pouvoir.
- Implication non-dite 2 : La citation 'Si tu n'utilises pas Cloud Code en 2026, tu as un problème' implique une adoption massive et une standardisation. Cela crée un effet de réseau : plus de gens l'utilisent, plus les outils/intégrations se construisent dessus.
- Ce qu'on peut en déduire 1 : Les MCP (Model Context Protocol) sont le vrai jeu. Cloud Code n'est que l'interface ; le pouvoir vient de la capacité à connecter GitHub, Codebase Context, et d'autres serveurs. C'est une architecture de plugins.
- Ce qu'on peut en déduire 2 : La gestion des tokens devient une compétence critique. Savoir quand compacter, quand exporter, quand créer un agent = savoir optimiser les coûts et la performance. C'est du DevOps pour l'IA.
- Ce qu'on peut en déduire 3 : L'absence de détails sur les 'skills personnalisés' suggère que le système est encore en évolution. Les utilisateurs avancés vont créer des extensions propriétaires.

## Ce que tu peux faire maintenant

- [ ] Installer Cloud Code dans VS Code et lancer /init sur un projet existant pour générer Cloud.md. Observe comment Claude comprend soudain la structure globale.
- [ ] Créer un agent spécialisé pour une tâche répétitive (ex: 'audit de sécurité', 'refactoring', 'documentation'). Teste-le sur un petit module et mesure le temps économisé.
- [ ] Consulter /context et /stats régulièrement pour comprendre ta consommation de tokens. Identifie les conversations qui consomment le plus et teste /compact pour les optimiser.
- [ ] Configurer /memory avec tes préférences de style (langage, framework, conventions). Relance une conversation et observe comment Claude s'adapte automatiquement.
- [ ] Connecter un MCP Tool (GitHub ou Codebase Context) et demander à Claude d'analyser ton projet. Compare la qualité des suggestions avec/sans MCP.
- [ ] Exporter une conversation importante avec /export avant de la compacter. Crée une 'base de connaissances' de tes meilleures conversations.
- [ ] Tester /rewind pour revenir à un point antérieur d'une conversation. Utile pour explorer des branches alternatives sans perdre le contexte.
- [ ] Créer un workflow : /init → /memory → /agent → /context → /compact → /export. Mesure le temps de développement avant/après.

## Business & Monétisation

- Réduction drastique du time-to-market : Cédric passe de 1-2 mois à 4-5 jours. Pour une agence ou une startup, c'est 6-10x de productivité = 6-10x de marge ou de capacité.
- Démocratisation du développement : Les débutants peuvent créer des projets de qualité. Cela crée un marché pour les 'Cloud Code experts' et les 'agents spécialisés' (vendus comme templates).
- Monétisation des agents : Les agents spécialisés (audit de sécurité, refactoring, documentation) peuvent être vendus comme produits ou services. Exemple : 'Agent d'audit de sécurité pour React' = $99/mois.
- Monétisation des MCP Tools : Les entreprises peuvent créer des MCP Tools propriétaires (ex: 'Accès à notre base de données interne') et les vendre aux développeurs.
- Réduction des coûts d'infrastructure : Moins de développeurs nécessaires pour la même output. Pour une équipe de 10, tu peux passer à 3-4 avec Cloud Code.
- Création de services de consulting : 'Cloud Code optimization' = aider les entreprises à structurer leurs projets pour maximiser la productivité avec Claude.

## Définitions

- **Tokens** : Unités de consommation des modèles IA, utilisées pour mesurer l'utilisation et les coûts
- **Contexte** : Fenêtre de tokens disponibles pour le modèle (ex: 200 000 tokens pour Claude Opus)
- **MCP** : Model Context Protocol permettant de connecter des serveurs externes (GitHub, etc.) pour enrichir les capacités de Claude
- **Agent** : Instance spécialisée de Claude configurée pour une tâche spécifique avec des outils et instructions personnalisées
- **Compaction** : Processus de transformation de l'historique conversationnel en instructions condensées pour libérer du contexte
- **Cloud.md** : Fichier de documentation auto-généré décrivant la structure et le contexte du projet

## Outils & techniques mentionnés

- **Cloud Code** : Extension VS Code pour intégrer Claude directement dans le terminal
- **Visual Studio Code** : Éditeur de code utilisé comme interface
- **Claude (modèles)** : Moteur IA générant du code et des analyses
- **GitHub** : MCP connecté pour accès aux repositories
- **Codebase Context** : MCP pour analyse du contexte du projet
- Gestion des modèles (/model)
- Configuration personnalisée (/config)
- Suivi des statistiques d'utilisation (/stats)
- Nettoyage de l'historique (/clear)
- Export de conversations (/export)
- Restauration de contexte (/rewind)
- Gestion des agents (/agent)
- Audit de sécurité (/security review)
- Compaction de contexte (/compact)
- Initialisation de documentation (/init)
- Gestion de la mémoire (/memory)
- Débogage assisté (/debug)
- Gestion des permissions (/permission)

## Connexions avec d'autres sujets IA

- Prompt Engineering : Cloud Code force à penser en termes de 'prompts structurés' plutôt que de 'conversations libres'. Les techniques de prompt engineering (few-shot, chain-of-thought) deviennent critiques.
- Fine-tuning vs Configuration : Cloud Code montre que la 'configuration' (agents, mémoire, MCP Tools) peut remplacer le fine-tuning. C'est un paradigme shift : moins de ML, plus de prompt engineering.
- Gestion du contexte : Directement lié à la 'fenêtre de contexte' des transformers. Comprendre les tokens = comprendre comment les LLMs fonctionnent.
- Agents IA autonomes : Les agents de Cloud Code sont des précurseurs des 'agents IA autonomes' qui peuvent prendre des décisions sans intervention humaine.
- RAG (Retrieval-Augmented Generation) : Les MCP Tools sont une forme de RAG : au lieu de copier les données dans le prompt, on les récupère dynamiquement.
- DevOps pour l'IA : Cloud Code introduit des concepts de DevOps (versioning, monitoring, optimization) appliqués à l'IA. C'est l'équivalent de 'MLOps' pour les prompts.
- Mémoire et persistance : /memory et Cloud.md sont des formes de 'mémoire persistante' pour l'IA, un sujet clé en recherche IA.
- Sécurité et audit : /security review et /permission montrent comment auditer et contrôler les actions de l'IA. C'est critique pour la confiance et la conformité.

## Prérequis de compréhension

Avant d'absorber cette vidéo, tu dois comprendre : (1) Comment fonctionnent les LLMs basiquement (tokens, contexte, probabilités) ; (2) Qu'est-ce qu'un prompt et comment l'IA répond ; (3) Les limites des interfaces web simples (ChatGPT) pour le développement professionnel ; (4) Pourquoi la gestion du contexte est critique (fenêtre finie, coûts) ; (5) Notions basiques de développement logiciel (git, structure de projet, conventions de code). Si tu maîtrises ces 5 points, tu peux absorber Cloud Code. Sinon, commence par des tutoriels sur les LLMs et le prompt engineering.

## Citations notables

> Si tu n'utilises pas Cloud Code en 2026, tu as un problème.

> C'est beaucoup moins sexy qu'une interface web.

> Le MCP qui va nous permettre de manager nos serveurs MCP connectés.

> Il va nous faire une todo liste où il va préparer étape une.

> C'est extrêmement puissant.

> Il a une meilleure compréhension fine que la plupart des autres modèles, surtout dans le terminal.

> En 4 5 jours, bah il avait déjà tout développé.

> Des projets de qualité.
