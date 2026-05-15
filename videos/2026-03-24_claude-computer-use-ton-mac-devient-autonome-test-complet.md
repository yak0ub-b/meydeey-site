# Claude Computer Use : ton Mac devient autonome (test complet)

**Date** : 2026-03-24 | **Durée** : 32:11 | **Niveau** : intermédiaire | **Catégorie** : Technique & Outils IA | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=yBOm8BfF3F0

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment l'IA passe de la réaction à l'action autonome | section Philosophie IA et Mental Models |
| savoir comment activer et utiliser Computer Use concrètement | section Ce que tu peux faire maintenant |
| explorer les implications de sécurité et les limites | section Ce qu'il ne dit pas et Ouvertures |
| monétiser cette capacité | section Business et Monétisation |

## Résumé

Le créateur démontre le Computer Use Tool de Claude (mise à jour 23 mars 2026), une fonctionnalité permettant à l'IA de contrôler l'écran, la souris et le clavier via une boucle itérative. Il teste trois cas concrets : créer et publier un post School, comparer les sites de concurrents, et analyser des pages de vente. Bien que plus lent qu'une API directe, cet outil offre une autonomie puissante pour automatiser des tâches sans API disponible, particulièrement utile en asynchrone pour traiter plusieurs instances simultanément. Le créateur souligne l'importance de bien entraîner les skills, de sécuriser les prompts et de monitorer les actions pour éviter les injections malveillantes.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    BOUCLE ITÉRATIVE CLAUDE                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────┐
                    │  SCREENSHOT      │
                    │  (Observation)   │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │  ANALYSE IA      │
                    │  (Raisonnement)  │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │  ACTION          │
                    │  Clic/Saisie/Nav │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │  VÉRIFICATION    │
                    │  (Feedback)      │
                    └────────┬─────────┘
                             ↓
                    ┌─ Succès? ─┐
                    │            │
                   OUI          NON
                    │            │
                   FIN      ↻ Itération
```

## Chapitres inférés

### Acte 1 — Présentation du Computer Use Tool
Explication de la mise à jour du 23 mars 2026, définition du Computer Use Tool comme système permettant à Claude de voir, cliquer, taper et naviguer. Présentation de la boucle itérative (screenshot → analyse → action → vérification)

### Acte 2 — Configuration et activation
Instructions pour activer Computer Use dans Claude Desktop (macOS uniquement), accès aux paramètres, activation de l'utilisation du navigateur et de l'ordinateur

### Acte 3 — Test 1 : Publication automatique de post School
Tentative de résumer une vidéo YouTube et créer un post School. Échec initial sur YouTube (limitations), succès partiel sur School avec navigation, remplissage de formulaire et injection de contenu via JavaScript

### Acte 4 — Test 2 : Recherche web et comparaison de concurrents
Recherche multi-source sur les mises à jour du 23 mars, création d'un tableau comparatif, identification de trois concurrents via recherche web

### Acte 5 — Test 3 : Analyse comparative de pages de vente
Ouverture de quatre onglets en parallèle (asynchrone), capture d'écran des pages de vente des concurrents, analyse du copywriting, structure des pages et comparaison avec la page personnelle

### Acte 6 — Analyse critique et recommandations
Discussion sur la lenteur relative du Computer Use vs API, importance de l'asynchrone pour traiter plusieurs instances, nécessité d'entraîner les skills, risques de prompt injection, sécurité et monitoring

## Philosophie IA & Pensée profonde

L'IA moderne (Claude) fonctionne par itération et correction : elle observe (screenshot), raisonne (analyse), agit (exécution), puis vérifie (nouvelle observation) dans une boucle continue jusqu'à succès. L'IA n'est pas un simple répondeur mais un agent autonome capable d'adapter son comportement en fonction du feedback visuel, ce qui la rapproche du fonctionnement humain mais à une vitesse et une échelle supérieures.

Le Computer Use Tool transforme Claude d'un simple répondeur en agent autonome capable de voir, analyser et agir sur votre écran via une boucle itérative (screenshot → analyse → action → vérification), ouvrant l'automatisation à des tâches sans API tout en introduisant des risques de sécurité uniques (prompt injection) qui exigent une maîtrise conceptuelle profonde, pas juste technique.

## Prompting & Sagesse d'usage

- Soyez explicite sur le canal d'exécution : précisez 'utilise le navigateur' ou 'utilise l'ordinateur' plutôt que de laisser l'IA deviner
- Entraînez vos skills avec des instructions précises et des règles de déclenchement claires pour éviter les ambiguïtés
- Utilisez l'asynchrone (plusieurs instances parallèles) plutôt que le synchrone pour les tâches répétitives : c'est exponentiellement plus efficace
- Packagez les actions réussies en mémoire pour que l'IA s'en souvienne et les réexécute plus rapidement la prochaine fois
- Attention : ne laissez jamais l'IA sans surveillance sur des sites sensibles ou non sécurisés ; le prompt injection est une menace réelle
- Soyez conscient que le Computer Use est plus lent qu'une API directe mais utile quand aucune API n'existe
- Donnez du contexte global : l'IA qui comprend l'écosystème complet (différence entre API, code, automatisation manuelle) prendra meilleures décisions

## Concepts clés expliqués

### Computer Use Tool
Fonctionnalité permettant à Claude de prendre des screenshots, analyser ce qu'il voit, puis exécuter des actions (clics, saisies, navigation) de manière autonome via une boucle itérative jusqu'à accomplissement de la tâche.
**Pourquoi c'est important** : C'est le passage de l'IA 'réactive' (répond à des questions) à l'IA 'agentive' (accomplit des tâches). Cela ouvre l'automatisation à des tâches sans API disponible, ce qui élargit massément le champ des possibles.

### Boucle itérative (screenshot → analyse → action → vérification)
Processus répétitif où Claude observe l'état actuel de l'écran, décide d'une action basée sur son analyse, l'exécute, puis observe le résultat pour vérifier et ajuster. Chaque itération apporte du feedback qui affine les itérations suivantes.
**Pourquoi c'est important** : C'est le mécanisme fondamental qui permet à Claude de corriger ses erreurs et de s'adapter. Sans cette boucle, l'IA serait aveugle et ne pourrait pas vérifier si ses actions ont fonctionné.

### Prompt injection
Technique malveillante où du code ou du texte malveillant enfoui dans un site web (ou un email, un document) peut contourner les instructions de l'utilisateur et faire faire à Claude des choses non autorisées.
**Pourquoi c'est important** : Avec Computer Use, ce risque augmente exponentiellement car l'IA ne lit plus juste du texte structuré (JSON, API), elle interprète du contenu visuel brut qui peut contenir des instructions cachées. C'est une nouvelle classe de vulnérabilité.

### Asynchrone vs Synchrone
Synchrone = une tâche à la fois, attendre la fin avant de commencer la suivante. Asynchrone = plusieurs tâches en parallèle, sans attendre. Avec Computer Use, l'asynchrone signifie lancer 100 instances de Claude simultanément sur 100 pages différentes.
**Pourquoi c'est important** : L'asynchrone transforme l'économie de l'automatisation. Une tâche qui prend 10 secondes en synchrone peut prendre 10 secondes en asynchrone si vous la parallélisez sur 100 instances. C'est un multiplicateur de puissance.

### Skills (compétences packagées)
Patterns d'action réutilisables entraînés et mémorisés par Claude. Une fois qu'il a appris à faire quelque chose (ex: publier un post School), il peut le refaire plus rapidement et plus précisément les fois suivantes.
**Pourquoi c'est important** : Les skills transforment l'IA d'un agent 'sans mémoire' à un agent 'avec mémoire procédurale'. C'est la différence entre apprendre à faire quelque chose une fois et devenir expert après 100 répétitions.

### MCP (Model Context Protocol)
Connecteurs permettant de relier Claude Desktop à des applications externes (Google Drive, N8N, Slack, etc.) pour étendre ses capacités sans avoir besoin de Computer Use.
**Pourquoi c'est important** : MCP offre une alternative plus sûre et plus rapide à Computer Use pour certaines tâches. C'est une question de choix : utiliser une API structurée (MCP) ou une automatisation visuelle (Computer Use).

## Insights non-évidents

- Insight 1 : Le Computer Use Tool est fondamentalement un système de feedback visuel continu. Contrairement aux APIs qui retournent des données structurées, Claude doit interpréter des pixels et des layouts, ce qui le force à développer une compréhension spatiale et contextuelle plus profonde du problème—c'est plus proche du raisonnement humain mais aussi plus fragile.
- Insight 2 : L'asynchrone mentionné en passant est en réalité la clé de la scalabilité. Exécuter 100 instances parallèles de Claude sur 100 pages différentes n'est pas juste plus rapide—c'est exponentiellement plus efficace qu'une boucle synchrone, ce qui change complètement le calcul économique de l'automatisation.
- Insight 3 : La distinction entre 'Cloud pour les pros' et 'OpenAI pour les débutants' cache une vérité plus profonde : Claude avec Computer Use exige une compréhension de l'écosystème global (quand utiliser API vs scraping vs automation), tandis que les solutions simples masquent cette complexité. C'est un marqueur de maturité IA.
- Insight 4 : Le prompt injection n'est pas juste un risque technique—c'est une conséquence philosophique de donner à l'IA le contrôle de l'écran. Vous ne contrôlez plus seulement le prompt, vous contrôlez aussi l'environnement d'exécution, ce qui multiplie les vecteurs d'attaque.

## Mental models

- {'modele': "L'IA comme observateur-acteur itératif", 'description': "Au lieu de penser à Claude comme un 'répondeur', pensez-le comme un agent qui observe (screenshot), pense (analyse), agit (exécution), puis observe à nouveau. Chaque itération réduit l'incertitude. C'est le même modèle que la boucle OODA (Observe-Orient-Decide-Act) en stratégie militaire."}
- {'modele': 'Asynchrone comme multiplicateur de puissance', 'description': "Une instance de Claude = 1x puissance. 10 instances parallèles ≠ 10x puissance, c'est souvent 50-100x puissance car elles n'attendent pas les unes les autres. Pensez à l'asynchrone comme un multiplicateur exponentiel, pas linéaire."}
- {'modele': 'Skills comme mémoire procédurale', 'description': "Les skills ne sont pas des 'features', ce sont des patterns d'action mémorisés. Quand vous entraînez Claude à faire quelque chose une fois, vous créez une procédure qu'il peut réexécuter plus rapidement et plus précisément. C'est comme l'apprentissage moteur humain."}
- {'modele': "Prompt injection comme attaque par l'environnement", 'description': "Vous ne contrôlez pas juste le prompt, vous contrôlez aussi l'environnement d'exécution (l'écran). Un attaquant qui contrôle le contenu de la page peut injecter des instructions qui contredisent votre prompt. C'est une attaque en deux couches : prompt + environnement."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Les limitations spécifiques des applications sensibles (Stripe, paiements) et la liste complète des applications bloquées
- Sujet mentionné mais non développé : Les détails techniques de l'entraînement des skills et de la mémoire conversationnelle pour optimiser les performances
- Question ouverte laissée sans réponse : Comment exactement empaqueter et réutiliser les actions réussies en skills pour les futures exécutions
- Sujet mentionné mais non développé : Les mécanismes précis de détection et prévention des prompt injections au niveau du code
- Question ouverte : Quels sont les délais exacts et les limitations de RAM du Computer Use Tool en exécution asynchrone massive
- Implication non-dite 1 : Si Claude peut voir et contrôler votre écran, il peut aussi voir vos données sensibles (mots de passe, tokens API, emails privés) affichées à l'écran. La sécurité n'est pas juste une question de code, c'est une question d'hygiène d'environnement.
- Implication non-dite 2 : Le Computer Use Tool rend obsolète une grande partie du web scraping traditionnel (Selenium, Beautiful Soup), mais seulement si vous acceptez une latence plus élevée. Le vrai choix n'est pas 'API vs Computer Use' mais 'latence vs flexibilité'.
- Ce qu'on peut en déduire : Les entreprises qui bloquent l'accès API (comme Meta Ads) créent involontairement un marché pour des outils comme Computer Use. C'est une forme de 'API par la porte de derrière'.
- Ce qu'on peut en déduire : L'entraînement de 43 skills personnalisés mentionné en passant suggère que la vraie valeur n'est pas dans l'outil lui-même, mais dans la mémoire conversationnelle et les patterns réutilisables. C'est une économie de connaissance, pas d'infrastructure.

## Ce que tu peux faire maintenant

- [ ] Activer Computer Use dans Claude Desktop (macOS) : Paramètres → Général → Utilisation de l'ordinateur, puis créer une nouvelle session pour que les changements prennent effet.
- [ ] Tester avec une tâche simple et non-sensible : demander à Claude de naviguer sur un site public, remplir un formulaire, ou extraire des informations. Commencez petit pour comprendre la boucle itérative.
- [ ] Créer votre premier skill : documentez précisément les étapes pour accomplir une tâche répétitive (ex: publier un post, comparer des prix), puis entraînez Claude à les exécuter. Réutilisez ce skill dans les conversations futures.
- [ ] Tester l'asynchrone : lancez plusieurs instances de Claude en parallèle sur des tâches similaires (ex: analyser 10 pages de concurrents simultanément) et mesurez le gain de temps.
- [ ] Identifier les cas d'usage sans API : listez les applications que vous utilisez qui n'ont pas d'API publique (Meta Ads, certains outils SaaS) et testez Computer Use pour les automatiser.
- [ ] Mettre en place un monitoring : loggez les actions que Claude exécute pour vérifier qu'elles correspondent à vos intentions et détecter les comportements anormaux (signe de prompt injection).
- [ ] Étudier les risques de sécurité : testez comment un site malveillant pourrait injecter des instructions pour faire faire à Claude des choses non autorisées. Comprenez les vecteurs d'attaque avant de déployer en production.

## Business & Monétisation

- Agence d'automatisation : offrir des services d'automatisation pour les PME qui n'ont pas accès à des APIs (Meta Ads, LinkedIn, etc.). Facturer par tâche automatisée ou par abonnement mensuel.
- SaaS d'automatisation : créer une plateforme qui encapsule Computer Use pour des cas d'usage spécifiques (ex: scraping de prix concurrents, publication multi-canal, extraction de leads). Vendre aux entreprises qui veulent l'automatisation sans la complexité technique.
- Consulting en IA agentive : aider les entreprises à identifier où Computer Use peut remplacer des processus manuels ou des outils coûteux. Facturer en audit + implémentation.
- Marketplace de skills : créer et vendre des skills pré-entraînés pour des tâches courantes (publier sur les réseaux, analyser des concurrents, extraire des données). Modèle SaaS ou one-time purchase.
- Intégration MCP : développer des connecteurs MCP pour des applications populaires qui n'en ont pas, puis les vendre ou les offrir en tant que service.
- Formation et certification : créer des cours sur comment utiliser Computer Use efficacement, comment entraîner des skills, comment sécuriser les prompts. Vendre aux développeurs et aux entreprises.

## Définitions

- **Computer Use Tool** : Fonctionnalité permettant à Claude de voir l'écran, cliquer, taper et naviguer de manière autonome via une boucle itérative
- **Boucle itérative** : Processus répétitif : screenshot → analyse IA → action → vérification → nouvelle itération
- **Prompt injection** : Technique malveillante où du code ou du texte malveillant enfoui dans un site web peut contourner les instructions de l'utilisateur
- **Asynchrone** : Exécution parallèle de plusieurs instances/tâches simultanément pour gagner en efficacité
- **Skills** : Compétences packagées et entraînées permettant à Claude d'accomplir des tâches spécifiques avec des instructions précises
- **MCP** : Connecteurs permettant de relier Claude Desktop à des applications externes (Google Drive, N8N, etc.)

## Outils & techniques mentionnés

- **Claude Desktop** : Interface locale permettant l'accès au Computer Use Tool sur macOS
- **School** : Plateforme de communauté utilisée pour tester la publication automatique de posts
- **N8N** : Outil d'automatisation mentionné comme alternative ou complément
- **Chrome/Arc/Safari** : Navigateurs contrôlables par Claude
- **Anthropic** : Entreprise ayant développé Claude et le Computer Use Tool
- **Selenium** : Librairie de scraping mentionnée comme alternative technique
- **Beautiful Soup** : Librairie Python pour le web scraping
- **Meta Ads** : Plateforme sans API utilisée comme cas d'usage pour l'automatisation
- Scraping de pages web via capture d'écran et analyse visuelle
- Navigation multi-onglets asynchrone
- Injection de contenu via JavaScript
- Extraction de classes CSS pour ciblage d'éléments
- Monitoring et logging des actions
- Entraînement de mémoire conversationnelle
- Packaging de skills avec instructions précises
- Gestion des erreurs et itération automatique

## Connexions avec d'autres sujets IA

- Agents IA autonomes : Computer Use est une implémentation concrète du concept d'agent autonome. Voir aussi : ReAct (Reasoning + Acting), AutoGPT, BabyAGI.
- Prompt engineering avancé : l'efficacité de Computer Use dépend fortement de la qualité du prompt initial. Voir aussi : Chain-of-Thought, Few-Shot Prompting, Instruction Tuning.
- Web scraping et extraction de données : Computer Use remplace partiellement Selenium et Beautiful Soup. Comprendre les différences : API > MCP > Computer Use en termes de vitesse/fiabilité.
- Sécurité IA et prompt injection : Computer Use augmente les risques de sécurité. Voir aussi : Adversarial prompts, Jailbreaking, Defense mechanisms.
- Mémoire conversationnelle et fine-tuning : l'entraînement de skills est une forme de fine-tuning léger. Voir aussi : In-context learning, Few-shot adaptation.
- Asynchrone et concurrence : l'utilisation d'instances parallèles de Claude relève de la programmation asynchrone. Voir aussi : Async/await, Event loops, Concurrency patterns.
- Évaluation et monitoring d'IA : comment vérifier que Computer Use fait ce qu'on lui demande. Voir aussi : Evals, Observability, Logging.

## Prérequis de compréhension

Avant d'absorber cette vidéo, vous devez comprendre : (1) Comment fonctionnent les modèles de langage (tokens, attention, génération) ; (2) La différence entre une API structurée et du scraping visuel ; (3) Les bases du prompting (comment formuler des instructions claires) ; (4) Qu'est-ce qu'une boucle de feedback et pourquoi c'est important en IA ; (5) Les concepts de base de la sécurité informatique (injections, vecteurs d'attaque). Si vous maîtrisez ces fondamentaux, vous pouvez absorber Computer Use comme une extension naturelle de vos connaissances. Sinon, vous risquez de voir l'outil comme 'magique' au lieu de comprendre ses mécanismes et ses limites.

## Citations notables

> Claude ne va plus se contenter de répondre, il va agir

> Claude qui voit ton écran, il clique, il tape et il navigue

> C'est une phrase un petit peu floue pour ceux qui utilisent Claude Code, qui ont des skills, qui ont des documentations vraiment vraiment solides

> Attention au prompt injection. Il s'agit d'une fonctionnalité bêta. Il y a des risques uniques, distincts

> Du code malveillant enfoui dans des sites peut outrepasser vos instructions afin de voler les données

> Cloud, c'est pour les pros, OpenAI, c'est pour les débutants

> Il faut une maîtrise, il faut bien connaître, il faut avoir la compréhension de l'environnement global
