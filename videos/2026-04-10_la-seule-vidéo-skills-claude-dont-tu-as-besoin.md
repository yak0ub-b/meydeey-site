# LA SEULE vidéo Skills Claude dont tu as besoin

**Date** : 2026-04-10 | **Durée** : 21:28 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=R8NT2vHdmeA

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment Claude active vraiment les skills | section Philosophie IA |
| créer ton premier skill professionnel en 12 minutes | section Ce que tu peux faire maintenant |
| explorer les limites et cas complexes (300 skills, conflits d'activation) | section Ouvertures |
| maîtriser les 5 règles d'or avec exemples | section Concepts clés expliqués |

## Résumé

Cette vidéo enseigne les 5 règles fondamentales pour créer des skills Claude professionnels : l'impératif, la négation avec alternatives, l'architecture indentée, l'inclusion de code, et l'utilisation du dossier référence. Elle explique la différence entre Skill V1 (fichier simple) et V2 (dossier structuré avec chargement 3 tiers), et montre comment une description 'pushy' et une bonne architecture peuvent augmenter l'activation automatique de 20% à 90%. L'auteur propose un plan d'action de 12 minutes pour créer son premier skill professionnel.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    SKILL = EMPLOYÉ SPÉCIALISÉ                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
        ┌─────────────────────┴─────────────────────┐
        │                                           │
   SKILL V1 (AMATEUR)                      SKILL V2 (PRO)
   Fichier .md simple                      Dossier structuré
   347 lignes mélangées                    120 lignes routeur
   Activation: 20%                         Activation: 90%
        │                                           │
        └─────────────────────┬─────────────────────┘
                              ↓
              ┌───────────────────────────┐
              │  CHARGEMENT 3 TIERS       │
              ├───────────────────────────┤
              │ 1) Front matter (~100t)   │ ← Fiche de poste
              │ 2) skill.md (~5000t)      │ ← Orchestrateur
              │ 3) Référence/Scripts      │ ← À la demande
              └───────────────────────────┘
                              ↓
              ┌───────────────────────────┐
              │  5 RÈGLES D'OR            │
              ├───────────────────────────┤
              │ 1. Impératif (ordres)     │
              │ 2. Négation + Alternative │
              │ 3. Architecture indentée  │
              │ 4. Code embarqué          │
              │ 5. Doc externalisée       │
              └───────────────────────────┘
                              ↓
                    CLAUDE ACTIVÉ 90%
```

## Chapitres inférés

### Acte 1 — Problème initial et définitions (0-5 min)
Les débutants créent des fichiers CLAUDE.md de 500 lignes que Claude ignore à 50%. Définition d'un skill comme 'employé spécialisé' vs simple fichier. Différence entre CLAUDE.md (règles globales) et skills (expertises chargées à la demande)

### Acte 2 — Anatomie d'un skill et versions (5-15 min)
Structure d'un skill pro : skill.md (routeur), dossier référence, dossier script, assets. Comparaison V1 vs V2 : passage de fichier markdown simple à dossier complet avec front matter YAML et chargement 3 tiers progressif

### Acte 3 — Les 5 règles d'or (15-35 min)
Règle 1 : Impératif (ordres directs, pas suggestions). Règle 2 : Négation + alternatives (ne pas faire X, faire Y). Règle 3 : Architecture indentée (hiérarchie markdown vs structure plate). Règle 4 : Code embarqué (JSON, Python, HTML). Règle 5 : Dossier référence (doc détaillée chargée à la demande)

### Acte 4 — Skill amateur vs skill pro (35-45 min)
Skill amateur : 347 lignes mélangées, pas de front matter, instructions conditionnelles, négations sans alternatives, ignoré 80% du temps. Skill pro : 120 lignes, 3 dossiers référence, front matter pushy, impératif, négation + alternatives, activation automatique

### Acte 5 — Stratégie de création et cas d'usage (45-55 min)
Un domaine = 1 skill avec sous-sections. Plusieurs domaines = plusieurs skills. Cas d'usage : développeurs, créateurs de contenu, support, rapports, prospection. Quand NE PAS créer un skill : si la règle s'applique à tous les projets, la mettre dans CLAUDE.md

### Acte 6 — Synthèse 80-20 et plan d'action (55-62 min)
Les 5 piliers essentiels pour 80% des résultats. Plan d'action 12 minutes : créer dossier, front matter pushy, instructions impératives + négation + alternatives, déplacer doc, tester 5 prompts

## Philosophie IA & Pensée profonde

Claude fonctionne comme un employé qui a besoin d'instructions claires, hiérarchisées et contextualisées pour activer les bonnes compétences au bon moment. Il comprend mieux les raisons que les ordres rigides, et sa capacité à suivre les instructions dépend fortement de la structure architecturale et de la spécificité du contexte fourni (description 'pushy'), pas seulement du contenu textuel brut.

Les skills Claude ne sont pas des fichiers mais des employés spécialisés structurés en dossiers avec front matter, instructions impératives et chargement progressif 3 tiers. La différence entre un skill amateur (ignoré 80%) et professionnel (activation 90%) réside dans 5 règles : impératif, négation+alternatives, architecture indentée, code embarqué, et documentation externalisée. Cette approche transforme Claude d'un assistant généraliste en système d'experts contextuels qui s'activent automatiquement selon le besoin.

## Prompting & Sagesse d'usage

- Écris à l'impératif : 'FAIS ça' au lieu de 'Tu pourrais faire ça s'il te plaît'
- Toujours ajouter le POURQUOI après l'ordre : 'Vérifie les tests PARCE QUE cela évite les régressions'
- Négation + alternative : 'Ne modifie jamais les tests existants, À LA PLACE crée de nouveaux tests'
- Structure hiérarchisée avec markdown (H2, H3) pour donner priorité et contexte aux instructions
- Embarque du code (JSON, Python, HTML) pour que Claude reproduise tes patterns au lieu de les deviner
- Sépare instructions courtes (~5000 tokens max) dans skill.md et documentation détaillée dans dossier référence
- Rends ta description de skill 'pushy' et spécifique pour augmenter l'activation automatique de 20% à 90%
- Si une règle s'applique à TOUS tes projets, mets-la dans CLAUDE.md global, pas dans un skill
- Teste avec 5 prompts différents pour vérifier que le skill s'active automatiquement au bon moment
- Pense à un skill comme un employé à recruter : donne-lui une fiche de poste (front matter), des instructions claires (skill.md), de la documentation (référence), et des outils (scripts)

## Concepts clés expliqués

### Skill (employé spécialisé)
Un skill n'est pas un fichier mais un dossier structuré contenant un front matter YAML (métadonnées), un skill.md (orchestrateur), et des dossiers référence/script/assets (ressources). C'est une unité d'expertise chargée à la demande selon le contexte.
**Pourquoi c'est important** : Penser à un skill comme un 'fichier' mène à des structures plates et ignorées par Claude. Penser à un skill comme un 'employé' force à créer une hiérarchie claire, une fiche de poste (front matter), et des responsabilités définies (skill.md).

### Front matter YAML
Métadonnées structurées en YAML contenant le nom du skill et une description 'pushy' (spécifique et contextualisée). C'est la fiche de poste du skill : qui es-tu, quand dois-tu t'activer, pourquoi es-tu important.
**Pourquoi c'est important** : Une description pushy augmente l'activation automatique de 20% à 90%. Sans front matter, Claude ne sait pas quand activer le skill. Avec un front matter optimisé, Claude reconnaît le contexte et s'active automatiquement.

### Chargement progressif 3 tiers
Processus d'optimisation énergétique : 1) Charger le front matter (~100 tokens) pour reconnaître le contexte, 2) Charger le skill.md (~5000 tokens max) pour les instructions, 3) Charger référence/scripts/assets à la demande seulement si nécessaire.
**Pourquoi c'est important** : Économise 98% d'énergie (tokens) en ne chargeant que ce qui est nécessaire au moment où c'est nécessaire. Un skill amateur charge 5000+ tokens d'un coup. Un skill pro charge 100 tokens, puis 5000 tokens, puis le reste à la demande.

### Invocation automatique vs manuelle
Invocation manuelle = l'utilisateur tape '/nom_du_skill'. Invocation automatique = Claude reconnaît le contexte et active le skill sans commande explicite. Une description pushy augmente l'invocation automatique.
**Pourquoi c'est important** : L'invocation automatique crée une expérience utilisateur fluide. L'utilisateur n'a pas besoin de connaître les skills existants. Claude les active au bon moment. C'est la différence entre un assistant passif et un système d'experts proactifs.

### Skill.md (routeur)
Fichier obligatoire qui orchestre les références, scripts et assets selon le contexte. Il contient les instructions de déclenchement (quand s'activer), les instructions d'exécution (comment faire), et les instructions de vérification (comment confirmer que c'est fait).
**Pourquoi c'est important** : Le skill.md est le cœur du skill. C'est là que la logique réside. Sans skill.md bien structuré, le skill est juste une collection de fichiers. Avec un skill.md optimisé, c'est un système cohérent.

### Description pushy
Description spécifique et contextualisée du skill qui augmente la probabilité que Claude l'active automatiquement. Au lieu de 'Skill pour écrire du code', une description pushy serait 'Skill pour écrire du code Python avec tests unitaires et documentation, activé quand l'utilisateur demande du code Python'.
**Pourquoi c'est important** : La différence entre 20% d'activation et 90% d'activation. Une description pushy force Claude à reconnaître le contexte comme pertinent. C'est la différence entre un skill ignoré et un skill utilisé.

### Architecture indentée
Structure hiérarchisée avec titres markdown (H2 pour priorité haute, H3 pour détails) donnant contexte et priorité aux instructions. Vs architecture plate où toutes les instructions sont au même niveau.
**Pourquoi c'est important** : Claude comprend mieux une hiérarchie claire qu'une liste plate. L'architecture indentée force Claude à reconnaître les priorités. Une instruction H2 est plus importante qu'une instruction H3. C'est une forme de 'mise en évidence' structurelle.

### Négation avec alternative
Au lieu de dire 'ne fais pas X', dire 'ne fais pas X, fais Y à la place'. Cela donne à Claude une direction positive au lieu d'une simple interdiction.
**Pourquoi c'est important** : Les négations seules sont ignorées 50% du temps par Claude. Les négations avec alternatives sont suivies 90% du temps. C'est une insight psychologique : Claude est un prédicteur de tokens, pas un validateur de contraintes. Il comprend mieux ce qu'il DOIT faire que ce qu'il NE DOIT PAS faire.

### Tokens comme ressource énergétique
Les tokens sont l'unité de consommation de Claude, équivalente à l'énergie pour un humain. Chaque instruction, chaque référence, chaque script consomme des tokens. Un skill bien optimisé minimise la consommation de tokens.
**Pourquoi c'est important** : Comprendre les tokens comme une ressource finie force à optimiser. Un skill amateur peut consommer 10x plus de tokens qu'un skill pro pour le même résultat. C'est une question d'efficacité et de coût.

### Activation contextuelle des skills
Un skill s'active quand le contexte correspond à sa description pushy. Si la description dit 'activé quand l'utilisateur demande du code Python', le skill s'active seulement dans ce contexte.
**Pourquoi c'est important** : Permet une gestion fine des skills. Au lieu d'avoir un skill géant qui fait tout, tu as plusieurs skills spécialisés qui s'activent selon le contexte. C'est la différence entre un assistant généraliste et un système d'experts.

## Insights non-évidents

- Insight 1 : Claude a un biais naturel à ignorer les instructions longues et à 'gérer seul' — la description 'pushy' du front matter n'est pas juste du marketing, c'est une correction de ce biais comportemental du modèle. Une description spécifique augmente l'activation de 20% à 90% parce qu'elle force Claude à reconnaître le contexte comme pertinent.
- Insight 2 : Les tokens sont présentés comme 'l'énergie' de Claude — cela implique que chaque skill doit être optimisé pour minimiser la consommation tout en maximisant la clarté. Le chargement 3 tiers n'est pas juste une architecture, c'est une gestion énergétique : charger 100 tokens de front matter au lieu de 5000 tokens de documentation complète économise 98% d'énergie pour une activation identique.
- Insight 3 : La règle 'négation + alternative' résout 50% des violations non pas par la force mais par la clarté comportementale — Claude comprend mieux ce qu'il DOIT faire que ce qu'il NE DOIT PAS faire. C'est une insight psychologique sur le fonctionnement des LLM : ils sont des prédicteurs de tokens, pas des validateurs de contraintes.
- Insight 4 : Un skill amateur de 347 lignes = un skill pro de 120 lignes + 3 dossiers référence. La différence n'est pas la quantité d'information mais sa structure et son chargement progressif — cela révèle que Claude fonctionne mieux avec une hiérarchie claire qu'avec une masse d'informations plates.
- Insight 5 : La citation 'Si tu peux décrire le skill en une phrase, c'est un skill. Si tu as besoin de trois phrases, c'est trois skills' est une heuristique de granularité — elle implique que la spécialisation augmente l'activation et la précision. Un skill trop large = plusieurs contextes = activation faible.

## Mental models

- Modèle mental 1 : Pense à un skill comme une fiche de poste + contrat de travail pour un employé. Le front matter est la fiche de poste (qui es-tu, quand t'actives-tu), le skill.md est le contrat (voici tes responsabilités), les dossiers référence/script/assets sont les outils et la documentation du poste.
- Modèle mental 2 : Les tokens sont l'énergie vitale de Claude. Chaque instruction consomme de l'énergie. Un skill bien structuré économise 98% d'énergie pour le même résultat. Pense à l'optimisation de tokens comme tu penserais à l'optimisation énergétique d'une maison : isolation (front matter), chauffage ciblé (skill.md), ressources à la demande (référence).
- Modèle mental 3 : Claude a un biais à ignorer les instructions longues et à 'gérer seul'. Une description pushy est une correction de ce biais. Pense à la description comme un 'appel d'urgence' qui force Claude à reconnaître que ce contexte est critique.
- Modèle mental 4 : Architecture indentée vs architecture plate = hiérarchie vs chaos. Claude comprend mieux une hiérarchie claire (H2 = priorité haute, H3 = détails) qu'une liste plate. Pense à la structure markdown comme une pyramide de priorités, pas une liste de courses.
- Modèle mental 5 : Négation + alternative = clarté comportementale. Au lieu de dire 'ne fais pas ça' (ce que Claude peut ignorer), dis 'ne fais pas ça, fais ceci à la place' (ce que Claude comprend comme une redirection). C'est comme diriger un enfant : 'ne crie pas' vs 'ne crie pas, parle doucement'.

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment gérer les conflits entre plusieurs skills qui pourraient s'activer simultanément
- Sujet mentionné mais non développé : Les détails techniques du leaking du code source de Claude Code et ses implications
- Question ouverte : Comment optimiser un skill avec 150 fichiers et orchestrateurs multiples (mentionné pour Amine avec 300 skills)
- Sujet mentionné mais non développé : Les spécificités des skills pour CloudAI vs CloudCode au-delà de la duplication
- Question ouverte : Quels sont les patterns exacts de code Python/HTML à utiliser pour maximiser la reproduction de patterns par Claude
- Implication non-dite 1 : Si 100 skills amateurs = 3-4 skills pro en efficacité, cela signifie que 97% des skills créés par les débutants sont mal structurés. La courbe d'apprentissage est très raide.
- Implication non-dite 2 : Le leaking du code source de Claude Code (août et octobre 2025) est mentionné comme source de ces insights — cela implique que les meilleures pratiques viennent de l'ingénierie interne d'Anthropic, pas de la documentation publique. Les utilisateurs qui créent des skills pro utilisent des patterns que Claude lui-même utilise en interne.
- Implication non-dite 3 : Claude Code et Claude AI ont des skills distincts, mais Cursor et Gemini peuvent utiliser les skills universels — cela implique une fragmentation future du marché des skills. Les créateurs doivent choisir : skills universels (moins puissants) ou skills spécifiques (plus puissants mais limités à une plateforme).
- Implication non-dite 4 : Amine avec 300 skills en 8+ mois = ~1 skill par jour — c'est un record communautaire mentionné comme aspirationnel. Cela implique que la création de skills à grande échelle est possible mais demande une discipline extrême et une compréhension profonde des patterns.
- Implication non-dite 5 : 'Ton business, il va tourner même quand tu dors' — cette phrase finale implique que les skills sont une forme d'automatisation qui crée de la valeur sans intervention humaine continue. C'est une vision de délégation complète à Claude.
- Ce qu'on peut en déduire : Les skills vont devenir un marché (marketplace de skills, vente de skills spécialisés). Les créateurs qui maîtrisent les 5 règles auront un avantage compétitif énorme.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Créer un dossier skill dans ta config Claude (0 minute). Ouvre ton fichier de config Claude et crée un dossier 'skills' à la racine.
- [ ] Action 2 : Rédiger un front matter YAML avec nom + description pushy (3 minutes avec IA). Utilise ce template : name: [Nom du skill], description: [Description spécifique et contextualisée qui force l'activation].
- [ ] Action 3 : Rédiger les instructions en impératif avec sections structurées markdown (5 minutes). Utilise H2 pour les priorités hautes, H3 pour les détails. Écris à l'impératif : 'FAIS ça' au lieu de 'Tu pourrais faire ça'.
- [ ] Action 4 : Ajouter négation + alternatives à chaque instruction (2 minutes). Pour chaque 'ne fais pas X', ajoute 'fais Y à la place'.
- [ ] Action 5 : Déplacer la documentation lourde dans un dossier 'référence' (2 minutes). Garde le skill.md à ~5000 tokens max. Mets le reste dans référence/.
- [ ] Action 6 : Tester avec 5 prompts différents pour vérifier l'activation automatique (2 minutes). Écris 5 prompts qui devraient déclencher le skill. Vérifie que Claude l'active automatiquement.
- [ ] Action 7 : Évaluer si tu as 1 skill ou 3 skills (1 minute). Peux-tu décrire ton skill en une phrase ? Si oui, c'est 1 skill. Si tu as besoin de 3 phrases, c'est 3 skills. Divise si nécessaire.
- [ ] Action 8 : Embarquer du code (JSON, Python, HTML) dans le skill.md pour que Claude reproduise tes patterns (3 minutes). Ajoute des exemples de code que Claude doit suivre.
- [ ] Action 9 : Documenter le POURQUOI après chaque ordre impératif (2 minutes). 'Vérifie les tests PARCE QUE cela évite les régressions' au lieu de juste 'Vérifie les tests'.
- [ ] Action 10 : Créer 3 skills spécialisés au lieu d'1 skill généraliste (10 minutes). Divise ton domaine en 3 sous-domaines. Crée un skill pour chacun. Teste l'activation de chacun.

## Business & Monétisation

- Angle 1 : Marketplace de skills. Les créateurs qui maîtrisent les 5 règles peuvent vendre leurs skills à d'autres utilisateurs. Un skill pro bien structuré peut se vendre 50-500€ selon la spécialisation.
- Angle 2 : Agences de skills. Créer une agence qui conçoit des skills sur mesure pour les entreprises. Tarif : 2000-10000€ par skill selon la complexité.
- Angle 3 : Formation et certification. Créer une formation payante sur la création de skills pro. Tarif : 500-2000€ par personne. La communauté gratuite a 4000+ membres — il y a une demande.
- Angle 4 : Automatisation de business. Créer 50-100 skills spécialisés pour automatiser un business entier (support, prospection, rapports, etc.). Vendre l'accès à ces skills : 500-5000€/mois par entreprise.
- Angle 5 : Consulting en optimisation de skills. Auditer les skills existants d'une entreprise et les optimiser selon les 5 règles. Tarif : 5000-20000€ par audit.
- Angle 6 : Amine avec 300 skills en 8 mois = potentiel de revenu énorme. Si chaque skill génère 100€/mois en valeur (automatisation, vente, etc.), c'est 30 000€/mois passif.

## Définitions

- **Skill** : Un employé spécialisé, pas un simple fichier. C'est un dossier structuré avec front matter, instructions, références, scripts et assets, chargé à la demande selon le contexte
- **Front matter** : Métadonnées YAML contenant le nom et la description pushy du skill (fiche de poste)
- **Skill.md (routeur)** : Fichier obligatoire qui orchestre les références, scripts et assets selon le contexte, donnant les instructions de déclenchement et vérification
- **Chargement 3 tiers** : Processus progressif : 1) Front matter (~100 tokens), 2) Corps du skill.md (~5000 tokens max), 3) Références/scripts/assets à la demande
- **Invocation** : Déclenchement du skill, soit manuel (slash /nom), soit automatique (langage naturel si description pushy)
- **Description pushy** : Description spécifique et contextualisée qui augmente l'activation automatique du skill de 20% à 90%
- **Architecture indentée** : Structure hiérarchisée avec titres markdown (H2, H3) donnant priorité et contexte aux instructions, vs architecture plate
- **Négation avec alternative** : Au lieu de dire 'ne fais pas X', dire 'ne fais pas X, fais Y à la place' pour éviter 50% de violations
- **Universalité** : Capacité d'un skill à fonctionner sur plusieurs outils (Claude, Cursor, Gemini, etc.)
- **Tokens** : Unité d'énergie/ressource de Claude, équivalent à l'énergie pour un humain

## Outils & techniques mentionnés

- **Claude AI** : Modèle de langage principal pour lequel les skills sont créés
- **Claude Code** : Plateforme avec ses propres skills distincts de Claude AI
- **Cursor** : Outil compatible avec les skills universels
- **Gemini** : Outil compatible avec les skills universels
- **Skill Creator V1** : Ancienne version (août 2025) : fichier markdown simple sans front matter
- **Skill Creator V2** : Nouvelle version (octobre 2025) : dossier complet avec front matter, chargement 3 tiers, invocation auto/manuelle
- Écrire à l'impératif (ordres directs, pas suggestions)
- Négation avec alternatives (ne pas faire X, faire Y à la place)
- Architecture indentée avec hiérarchie markdown (H2, H3)
- Inclusion de code (JSON, Python, HTML) dans les skills
- Dossier référence pour documentation détaillée chargée à la demande
- Dossier script pour code exécutable
- Dossier assets pour templates et exemples
- Description pushy du skill (spécifique et déclenchante)
- Skill.md comme orchestrateur (avant/pendant/après)
- Limitation du skill.md à ~5000 tokens

## Connexions avec d'autres sujets IA

- Prompting avancé : Les 5 règles des skills sont une application avancée des principes de prompting (impératif, clarté, hiérarchie, contexte). Maîtriser les skills = maîtriser le prompting.
- Agents IA : Les skills sont une forme d'agents spécialisés. Chaque skill est un agent qui s'active selon le contexte. C'est une architecture multi-agents.
- Retrieval-Augmented Generation (RAG) : Le chargement 3 tiers des skills est similaire à RAG — charger les informations pertinentes à la demande au lieu de tout charger d'un coup.
- Fine-tuning vs skills : Les skills sont une alternative au fine-tuning. Au lieu de fine-tuner Claude sur un domaine spécifique, tu crées un skill spécialisé. C'est plus flexible et moins coûteux.
- Systèmes d'experts : Les skills sont une implémentation moderne des systèmes d'experts classiques. Chaque skill est un expert dans un domaine. Ensemble, ils forment un système d'experts.
- Gestion de contexte : Les skills résolvent le problème de la gestion de contexte — comment garder Claude focalisé sur une tâche spécifique sans surcharger son contexte.
- Optimisation de coûts : Les skills réduisent les coûts d'API en optimisant la consommation de tokens. C'est une stratégie de réduction de coûts pour les applications IA à grande échelle.
- Automatisation d'entreprise : Les skills sont l'outil pour automatiser les processus d'entreprise avec Claude. C'est la couche d'application pratique de la théorie IA.

## Prérequis de compréhension

Pour absorber cette vidéo, tu dois déjà comprendre : 1) Comment fonctionne Claude (c'est un modèle de langage qui prédit des tokens), 2) Les bases du prompting (clarté, contexte, structure), 3) La différence entre instructions générales et instructions spécialisées, 4) Comment fonctionne YAML et markdown (syntaxe basique), 5) Le concept de 'contexte' en IA (ce que Claude 'voit' pour prendre une décision). Si tu ne maîtrises pas ces bases, regarde d'abord des vidéos sur le prompting fondamental et le fonctionnement des LLM.

## Citations notables

> Un skill, c'est un employé, ce n'est pas un fichier

> Il y a une différence entre donner des instructions et former un spécialiste

> Les tokens sont l'énergie de Claude

> Explique au modèle pourquoi c'est important, plutôt que d'empiler des musts rigides

> La négation seule, c'est mauvais... il faut apporter la négation avec l'alternative

> Si tu peux décrire le skill en une phrase, c'est un skill. Si tu as besoin de trois phrases, c'est trois skills

> Claude, il a tendance à ne pas activer les skills, il préfère gérer seul

> Avec une description optimisée, l'activation passe de 20% à 90%

> Si tu as 100 skills amateur, c'est comme si tu en avais 3 ou 4 en pro

> Ton business, il va tourner même quand tu dors
