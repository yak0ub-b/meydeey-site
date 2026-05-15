# Claude Skills : le guide complet 2026 (tests & erreurs)

**Date** : 2025-12-22 | **Durée** : 21:33 | **Niveau** : intermédiaire | **Catégorie** : Technique & Outils IA | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=cF47rAbV_3M

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi les prompts classiques échouent à l'échelle | section Concepts clés expliqués (Jeux tables vs Cloud Skills) |
| savoir quand créer un skill et quand ne pas le faire | section Ce que tu peux faire maintenant (critères de décision) |
| voir comment Claude décide d'activer un skill automatiquement | section Mental models (Matching sémantique) |
| construire ton premier skill dès aujourd'hui | section Ce que tu peux faire maintenant (étapes pratiques) |
| explorer les limites et les questions ouvertes | section Ouvertures |

## Résumé

Cette vidéo explique les Cloud Skills, un système de compétences structurées dans Claude qui automatise les tâches répétitives en remplaçant les prompts fragiles par des instructions persistantes et contextuellement activées. Le créateur démontre comment créer un skill pour un client fictif (ABC Consulting) avec charte graphique, logo et prisme d'analyse comptable, puis teste son activation automatique sur différentes requêtes. Les skills permettent de standardiser intelligemment les processus, d'améliorer la cohérence et la scalabilité sans augmenter l'intelligence du modèle, contrairement aux prompts classiques qui dépendent du contexte immédiat et nécessitent répétition constante.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    REQUÊTE UTILISATEUR                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
            ┌────────────────────────┐
            │  ANALYSE D'INTENTION   │
            │  (Matching sémantique) │
            └────────────┬───────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    ┌─────────┐   ┌─────────┐   ┌─────────┐
    │ Skill A │   │ Skill B │   │ Skill C │
    │ (Actif) │   │(Inactif)│   │(Inactif)│
    └────┬────┘   └─────────┘   └─────────┘
         │
         ▼
    ┌──────────────────────────┐
    │ EXÉCUTION CONTEXTUALISÉE │
    │ (Règles stables + Assets)│
    └────────────┬─────────────┘
                 │
                 ▼
        ┌────────────────────┐
        │ RÉSULTAT COHÉRENT  │
        │ & PRÉVISIBLE       │
        └────────────────────┘
```

## Chapitres inférés

### Acte 1 — Problème et contexte
Présentation du problème : les prompts classiques sont fragiles, dépendants du contexte, nécessitent répétition constante et ne scalent pas. Cloud Skills est présenté comme solution sous-estimée du marché.

### Acte 2 — Définition et concepts fondamentaux
Explication de ce qu'est un Cloud Skill : briques d'expertise encapsulées, persistantes, structurées, avec intention claire et comportement attendu. Distinction avec les prompts classiques et les GPTs.

### Acte 3 — Mécanisme d'activation et matching sémantique
Comment Claude décide d'activer un skill : analyse de l'intention, matching avec les skills disponibles, sélection ciblée (singulier ou pluriel), pas d'exécution globale.

### Acte 4 — Quand créer un skill (critères)
Créer un skill quand : logique revient souvent, cohérence critique, plusieurs humains/systèmes l'utilisent. Ne pas créer pour : explorer une idée, réfléchir une seule fois, besoin flou.

### Acte 5 — Architecture technique et structure Markdown
Structure d'un skill : triple backticks, métadonnées (name, description, values), instructions en Markdown, assets (logos SVG), exemples de comportement attendu.

### Acte 6 — Démonstration pratique : création du skill ABC Consulting
Création d'un skill pour un client fictif avec charte graphique, logo SVG généré automatiquement, prisme d'analyse comptable, palette de couleurs et typographie définis.

### Acte 7 — Tests et activation contextuelle
Tests de l'activation du skill sur différentes requêtes (analyse comptable, création de devis). Démonstration du matching sémantique : Claude active le skill même sans mention explicite du client.

### Acte 8 — Valeur stratégique et conclusion
Les skills rendent Claude plus fiable, cohérent, exploitable et scalable. Pas d'augmentation d'intelligence, mais standardisation intelligente des processus. Invitation à rejoindre le Labo IA pour aller plus loin.

## Philosophie IA & Pensée profonde

Claude fonctionne par analyse profonde de l'intention sémantique et matching contextuel intelligent : il ne nécessite pas d'instructions explicites répétées si le contexte est bien structuré. L'IA devient plus utile non pas en devenant plus intelligente, mais en devenant plus fiable, cohérente et prévisible à travers des règles stables et persistantes.

Les Cloud Skills transforment Claude d'un outil réactif en système fiable et scalable en encapsulant des instructions répétitives dans des briques persistantes activées intelligemment par matching sémantique. Contrairement aux prompts classiques qui dépendent du contexte immédiat, les skills standardisent les processus sans augmenter l'intelligence du modèle, mais sa cohérence et prévisibilité. C'est le passage de 'dire à chaque fois' à 'structurer une fois pour toujours'.

## Prompting & Sagesse d'usage

- Identifier les répétitions dans tes instructions : si tu dis toujours la même chose, c'est un candidat pour un skill.
- Être précis dans la sémantique : utiliser 'mon logo', 'mon client', 'ma charte' plutôt que des références vagues pour que Claude fasse la corrélation correcte.
- Tester l'activation contextuelle : formuler des requêtes variées pour vérifier que le skill s'active intelligemment sans appel explicite.
- Ne pas créer de skill pour des besoins flous : le périmètre et les instructions doivent être clairs, sinon le skill rigidifie l'erreur.
- Combiner skills + mémoire Claude pour des résultats exceptionnels : la mémoire des conversations précédentes + les skills structurés = niveau 'ouf'.
- Utiliser l'example prompting dans les skills : donner des exemples concrets du comportement attendu (formules, conclusions types, structure).
- Attention aux limitations du modèle : vérifier les benchmarks (LM Arena) pour les domaines critiques (ex: mathématiques pour comptabilité).

## Concepts clés expliqués

### Cloud Skills
Briques d'expertise encapsulées avec intention claire, règles stables, contraintes définies et comportement attendu. Persistantes (valables partout), structurées (en Markdown/YAML), indépendantes du contexte immédiat.
**Pourquoi c'est important** : C'est la différence entre 'dire à chaque fois' et 'structurer une fois'. Sans skills, tu répètes les mêmes instructions à chaque conversation. Avec skills, tu les définis une fois et Claude les applique automatiquement.

### Matching sémantique
Processus par lequel Claude analyse l'intention profonde d'une requête et identifie les skills les plus pertinents sans activation explicite. C'est de la corrélation sémantique, pas du matching textuel.
**Pourquoi c'est important** : C'est ce qui rend les skills 'intelligents'. Claude ne cherche pas le mot-clé 'ABC Consulting', il comprend que tu parles d'une analyse comptable pour ce client et active le skill correspondant. C'est la magie de la compréhension contextuelle.

### Jeux tables (prompts classiques)
Instructions fragiles, dépendantes du contexte immédiat, susceptibles de dériver, nécessitant répétition constante. Chaque conversation recommence de zéro.
**Pourquoi c'est important** : C'est le problème que les skills résolvent. Les prompts classiques ne scalent pas parce qu'ils dépendent de la formulation exacte, du contexte, de la 'bonne humeur' du modèle. Les skills éliminent cette fragilité.

### Activation contextuelle
Les skills s'activent automatiquement selon la requête, sans appel manuel explicite. Claude décide seul quel skill utiliser en analysant l'intention.
**Pourquoi c'est important** : C'est ce qui rend les skills pratiques. Tu n'as pas à dire '/skill ABC Consulting', Claude le détecte tout seul. C'est transparent pour l'utilisateur, mais puissant pour la cohérence.

### Scalabilité
Capacité à appliquer les mêmes règles et comportements à plusieurs clients, projets ou contextes sans modification répétée. Un skill = N applications identiques.
**Pourquoi c'est important** : C'est le ROI des skills. Si tu as 10 clients, tu crées 10 skills une fois, puis tu les utilises 1000 fois sans refaire le travail. C'est la différence entre 'croissance linéaire' et 'croissance exponentielle'.

### Persistance vs Contextualité
Persistance = le skill reste valable partout, toujours. Contextualité = le prompt dépend du contexte immédiat de la conversation. Les skills sont persistants, les prompts sont contextuels.
**Pourquoi c'est important** : C'est la distinction fondamentale. Les prompts classiques oublient ce qu'ils ont dit il y a 5 messages. Les skills ne oublient jamais. C'est la différence entre 'mémoire courte' et 'mémoire longue'.

## Insights non-évidents

- Insight 1 : Les Cloud Skills ne rendent pas Claude plus intelligent, ils le rendent plus *fiable*. C'est une distinction philosophique majeure : l'IA n'a pas besoin de plus de capacités, elle a besoin de plus de structure. Cela inverse la logique classique du 'meilleur modèle = meilleur résultat'.
- Insight 2 : Le matching sémantique implicite révèle que Claude comprend déjà l'intention profonde des requêtes. Les skills ne créent pas cette compréhension, ils la *canalisent* vers des comportements prévisibles. C'est une confirmation que le problème n'est pas la compréhension, mais la cohérence.
- Insight 3 : La persistance des skills est une forme de mémoire structurée différente de la mémoire conversationnelle. Cela suggère une architecture mentale où les instructions persistantes et les conversations contextuelles jouent des rôles complémentaires, pas concurrents.
- Insight 4 : L'absence de mention explicite du client dans la requête mais activation correcte du skill ABC Consulting démontre que Claude fonctionne par *corrélation sémantique profonde*, pas par matching textuel. C'est crucial pour comprendre comment les IA modernes traitent le contexte.
- Insight 5 : La scalabilité mentionnée n'est pas technique (serveurs, API), elle est *conceptuelle* : appliquer les mêmes règles à N clients sans modification. Cela reframe la scalabilité comme un problème de standardisation, pas d'infrastructure.

## Mental models

- {'modele': 'Matching sémantique comme filtre intelligent', 'description': "Pense aux skills comme des filtres sémantiques : la requête entre, Claude analyse son intention, puis applique le filtre (skill) le plus pertinent. Le filtre ne change pas la requête, il change comment Claude la traite. C'est comme avoir des 'lunettes spécialisées' pour chaque domaine."}
- {'modele': 'Persistance vs Contextualité', 'description': "Les prompts classiques = instructions contextuelles (valables pour cette conversation). Les skills = instructions persistantes (valables pour toutes les conversations). Pense à la différence entre 'je te dis comment faire' (prompt) et 'voici comment on fait toujours' (skill)."}
- {'modele': 'Scalabilité par standardisation', 'description': "La scalabilité n'est pas 'faire plus vite', c'est 'faire pareil pour N clients sans répéter'. Un skill pour ABC Consulting s'applique à toutes les requêtes ABC, sans que tu aies à le redéfinir. C'est la différence entre 'croissance linéaire' (plus de clients = plus de travail) et 'croissance exponentielle' (plus de clients = même travail)."}
- {'modele': 'Fiabilité comme cohérence structurée', 'description': "La fiabilité n'est pas 'Claude ne se trompe jamais', c'est 'Claude fait toujours la même chose dans les mêmes conditions'. Les skills créent des conditions stables. C'est la différence entre 'un résultat correct' et 'un résultat prévisible'."}
- {'modele': "Intention comme clé d'activation", 'description': "Claude n'active pas les skills par commande explicite, mais par compréhension de l'intention. C'est comme avoir un assistant qui connaît tes habitudes : tu dis 'j'ai besoin d'une analyse', il sait automatiquement que tu veux l'analyse ABC Consulting, pas une analyse générique. L'intention est la clé, pas la commande."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment intégrer les Cloud Skills dans Claude Code pour des cas d'usage plus techniques et avancés.
- Sujet mentionné mais non développé : Limitations de Claude Opus en mathématiques (6e au leaderboard) et implications pour les skills comptables.
- Question ouverte laissée sans réponse : Comment gérer les conflits d'intention quand plusieurs skills pourraient s'appliquer à une même requête ?
- Sujet mentionné mais non développé : Sécurité et auditabilité des skills en contexte professionnel/entreprise.
- Sujet mentionné mais non développé : Versioning et évolution des skills au fil du temps.
- Implication non-dite 1 : Si les skills rendent Claude 'plus fiable', cela implique que sans skills, Claude est *intrinsèquement moins fiable* même avec le même prompt répété. Pourquoi ? Parce que chaque conversation a un contexte différent qui influence subtilement la réponse.
- Implication non-dite 2 : Le matching sémantique 'intelligent' suppose que Claude peut échouer à identifier le bon skill. La vidéo ne traite pas les cas de collision (plusieurs skills applicables) ou d'absence (aucun skill ne correspond). C'est une zone grise critique.
- Implication non-dite 3 : La mention de 'l'humeur humaine' (skills indépendants de l'humeur) suggère que les prompts classiques sont affectés par le ton, le contexte émotionnel ou les variations mineures de formulation. C'est une critique implicite de la fragilité du prompting humain.
- Implication non-dite 4 : Les skills sont présentés comme persistants, mais la vidéo ne clarifie pas : persistants *où* ? Dans Claude lui-même ? Dans un compte utilisateur ? Dans une base de données ? Cette ambiguïté technique cache une question architecturale majeure.
- Ce qu'on peut en déduire : Les Cloud Skills sont une réponse à un problème d'*opérationalisation* de l'IA, pas d'amélioration de l'IA. C'est un problème d'ingénierie organisationnelle, pas de science des modèles.

## Ce que tu peux faire maintenant

- [ ] Audit immédiat : Identifie 3 instructions que tu dis TOUJOURS à Claude (même formulation, même contexte). Si tu les dis plus d'une fois, c'est un candidat pour un skill.
- [ ] Créer ton premier skill : Prends une de ces instructions répétitives, structure-la en Markdown avec métadonnées (name, description, values), ajoute des exemples concrets du comportement attendu, et teste-la en formulant 5 requêtes variées pour vérifier l'activation automatique.
- [ ] Critères de décision : Avant de créer un skill, pose-toi ces 3 questions : (1) Cette logique revient-elle souvent ? (2) La cohérence est-elle critique pour mon cas d'usage ? (3) Plusieurs humains/systèmes l'utilisent-ils ? Si 2+ réponses = oui, crée le skill.
- [ ] Ne pas créer de skill pour : Explorer une idée (trop flou), réfléchir une seule fois (pas de répétition), besoin mal défini (le skill rigidifiera l'erreur). Les skills sont pour les processus stables, pas les expériences.
- [ ] Tester l'activation contextuelle : Crée un skill, puis formule des requêtes sans mentionner explicitement le skill. Vérifie que Claude l'active quand même. Si ça ne marche pas, affine la sémantique des instructions.
- [ ] Combiner skills + mémoire Claude : Utilise les skills pour les règles stables ET la mémoire conversationnelle pour les détails contextuels. C'est la combinaison qui crée des résultats 'ouf'.
- [ ] Vérifier les limitations du modèle : Si ton skill implique des mathématiques ou de la logique complexe, vérifie les benchmarks (LM Arena) pour Claude. Si Claude est faible dans ce domaine, le skill ne compensera pas.
- [ ] Documenter le skill : Ajoute des exemples concrets (formules, conclusions types, structure attendue) dans le skill. L'example prompting est crucial pour que Claude comprenne le comportement attendu.
- [ ] Partager et réutiliser : Cherche sur GitHub des skills existants (recherche 'cloud skills'). Réutilise plutôt que de réinventer. C'est la scalabilité horizontale.

## Business & Monétisation

- Modèle SaaS : Créer une plateforme de skills réutilisables pour des domaines spécifiques (comptabilité, marketing, RH) et les vendre par abonnement. Chaque skill = valeur immédiate pour le client.
- Agence IA : Proposer la création de skills personnalisés pour les entreprises. C'est du consulting IA, mais avec un livrable tangible et réutilisable. Tarification : création du skill (one-time) + maintenance (recurring).
- Marketplace de skills : Créer une marketplace où les utilisateurs vendent/achètent des skills. Modèle de commission (ex: 30% pour la plateforme). C'est l'Appstore de l'IA.
- Formation et certification : Vendre des formations sur 'comment créer des skills efficaces'. Le Labo IA mentionné dans la vidéo est un exemple. Tarification : accès à la formation + templates de skills.
- Intégration avec des outils existants : Créer des connecteurs entre les skills et des outils comme Zapier, Make, ou des CRM. Chaque intégration = nouveau cas d'usage = nouveau client.
- Audit de prompting : Proposer un service d'audit : 'Vous utilisez Claude de manière inefficace. Voici vos 10 skills à créer pour économiser 40% du temps.' C'est du consulting basé sur les données.

## Définitions

- **Cloud Skills** : Briques d'expertise encapsulées avec intention claire, règles stables, contraintes claires et comportement attendu. Persistantes, structurées et indépendantes de l'humeur humaine.
- **Compétences structurées activées par contexte** : Capacités réelles (non textuelles) avec intentions claires et périmètre défini, activées intelligemment selon la requête sans appel manuel explicite.
- **Matching sémantique** : Processus par lequel Claude analyse l'intention de la requête initiale et identifie les skills les plus adaptés sans activation globale.
- **Jeux tables (prompt classiques)** : Instructions fragiles dépendantes du contexte immédiat, susceptibles de dériver et nécessitant répétition constante.
- **Scalabilité** : Capacité à appliquer les mêmes règles et comportements à plusieurs clients, projets ou contextes sans modification répétée.

## Outils & techniques mentionnés

- **Claude (Anthropic)** : Modèle IA capable d'interpréter et d'activer des skills selon l'intention utilisateur
- **Cloud Skills** : Système de compétences structurées encapsulées avec règles stables et comportement attendu
- **Artefacts Claude** : Conteneurs visuels pour générer du code, des designs, des documents
- **GitHub** : Plateforme de ressources et d'exemples de Cloud Skills réutilisables
- **LM Arena** : Leaderboard de benchmarks pour comparer les performances des modèles IA en mathématiques et autres domaines
- Création de skills via conversation directe avec Claude
- Rédaction manuelle d'instructions en Markdown structuré
- Téléversement de fichiers ZIP ou .skill
- Activation contextuelle basée sur l'analyse d'intention
- Matching sémantique entre requête et skills disponibles
- Intégration de logos SVG et assets dans les skills
- Utilisation de triple backticks et structure YAML/Markdown
- Example prompting pour définir le comportement attendu

## Connexions avec d'autres sujets IA

- Prompt engineering : Les skills sont l'évolution du prompt engineering. Au lieu de perfectionner un prompt, tu structures une compétence. C'est le passage de 'art' à 'ingénierie'.
- RAG (Retrieval-Augmented Generation) : Les skills + RAG = puissance maximale. Les skills définissent le comportement, RAG fournit les données. Ensemble, c'est un système complet.
- Fine-tuning vs Skills : Les skills sont une alternative légère au fine-tuning. Au lieu de réentraîner le modèle, tu structures les instructions. C'est plus rapide, moins cher, plus flexible.
- Agents IA : Les skills sont les 'outils' des agents. Un agent utilise plusieurs skills pour accomplir une tâche complexe. C'est la brique de base de l'automatisation IA.
- Mémoire conversationnelle : Les skills + mémoire = système complet. Les skills pour les règles stables, la mémoire pour les détails contextuels. C'est la combinaison gagnante.
- Benchmarking des modèles (LM Arena) : Comprendre les limitations de Claude (ex: mathématiques) est crucial pour savoir quels skills créer. Un skill ne peut pas compenser une faiblesse du modèle.
- Chaînes de prompts (prompt chaining) : Les skills peuvent être chaînés. Un skill appelle un autre skill. C'est la composition de compétences.
- Governance et compliance : Les skills créent une auditabilité. Chaque skill a des règles claires, des comportements attendus. C'est crucial pour les contextes réglementés (finance, santé).

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionne le prompting basique (donner des instructions à Claude), (2) Pourquoi les prompts répétés échouent à l'échelle (fragilité, dépendance au contexte), (3) La différence entre 'intelligence' et 'fiabilité' (Claude peut être intelligent mais peu fiable sans structure), (4) Que Claude comprend l'intention sémantique, pas juste les mots-clés, (5) Les bases de Markdown et YAML (pour structurer les skills). Si tu maîtrises le prompting basique et tu as expérimenté ses limites, tu es prêt pour les skills.

## Citations notables

> Si tu ne connais pas Cloud Skills aujourd'hui, tu as un problème.

> Compétences structurées activées par contexte : des compétences qui ne sont pas du texte, des capacités réelles structurées avec des intentions claires et un périmètre qu'on va définir.

> Les promptes classiques, c'est fragile et ça ne scale pas.

> Un skill, c'est tout simplement une brique d'expertise encapsulée avec une intention très claire, des règles stables, des contraintes claires et un comportement attendu.

> Il ne rend pas Claude plus intelligent, il rend Claude plus fiable, plus cohérent, plus exploitable et plus scalable.

> Un skill, c'est persistant, structuré et il va être indépendant de l'humeur humaine.

> Si tu identifies des répétitions que tu dis tout le temps en instruction et que ça t'emmerde, ben là tu vas directement mettre un skill.
