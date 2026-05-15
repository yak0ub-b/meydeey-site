# Claude /routines ÉCRASE les tâches répétitives (démo live)

**Date** : 2026-04-16 | **Durée** : 25:36 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=jzlsiyy054Q

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment l'IA passe de réactive à autonome | section Mental Models |
| savoir quand utiliser Routines vs Cowork vs Zapier | section Concepts clés expliqués |
| implémenter ta première routine demain | section Ce que tu peux faire maintenant |
| comprendre les pièges RGPD et données sensibles | section Ce qu'il ne dit pas |
| explorer les limites et cas d'usage avancés | section Ouvertures |

## Résumé

La vidéo présente Routine, une fonctionnalité d'Anthropic Claude permettant d'automatiser des tâches répétitives via des agents IA autonomes exécutés en arrière-plan. Elle explique les trois composants essentiels (fiche de poste/prompt, accès aux outils, déclencheur), les trois modes d'exécution (planification cron, webhook, événement GitHub), et démontre pratiquement comment configurer des routines locales (Cloud Desktop) et distantes (Cloud Code) pour des cas d'usage réels (veille juridique avocat, reporting comptable, triage CV RH). La vidéo souligne que cette automatisation coûte 100$/mois contre 14x le SMIC pour un employé, mais requiert une gestion attentive des données sensibles et du RGPD.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    ROUTINE AUTONOME CLAUDE                      │
└─────────────────────────────────────────────────────────────┘

  DÉCLENCHEUR              EXÉCUTION                 RÉSULTAT
  ┌──────────┐             ┌──────────┐             ┌──────────┐
  │ Cron     │             │ Persona  │             │ Fichier  │
  │ Webhook  │──────────→  │ Périmètre│──────────→  │ Email    │
  │ GitHub   │             │ Mémoire  │             │ Webhook  │
  └──────────┘             └──────────┘             └──────────┘
       ↓                         ↓                        ↓
  Planifié/Événement      Réflexion Claude         Déterministe
  Sans PC allumé          + Recherche web          + Cohérent
                          + Contexte entreprise    + Répétable

  ┌─ LOCAL (Cloud Desktop) ─────────────────────────────────┐
  │ Données sensibles → Pas de passage par serveurs         │
  │ Utilise Cowork pour fichiers confidentiels              │
  └─────────────────────────────────────────────────────────┘

  ┌─ DISTANT (Cloud Code) ──────────────────────────────────┐
  │ GitHub repo → Données passent par Anthropic             │
  │ Webhooks + MCP pour intégrations complexes              │
  └─────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Présentation de Routine et concept du stagiaire cloud
Introduction à la fonctionnalité Routine d'Anthropic, métaphore du stagiaire autonome travaillant 24/7 sans coûts, avantages économiques (100$/mois vs SMIC)

### Acte 2 — Architecture et composants essentiels
Les trois éléments requis : fiche de poste (prompt structuré), clés d'accès (outils/services), déclencheurs (cron/webhook/GitHub). Distinction Cloud Desktop vs Cloud Code

### Acte 3 — Tableau décisionnel et cas d'usage métier
Trois exemples concrets : veille juridique avocat (45 min/jour), reporting comptable expert-comptable (10h/30 clients), triage CV DRH. Gains de temps quantifiés

### Acte 4 — Pièges et considérations critiques
Pricing (Team Premium 100$/mois requis), limites de données sensibles (RGPD, données clients passent par serveurs Anthropic), nécessité de rester local pour données confidentielles

### Acte 5 — Comparaison Routine vs Cowork vs Zapier
Routine pour tâches réfléchies sans PC allumé, Cowork pour fichiers locaux sensibles, Zapier pour tâches mécaniques. Recommandations d'usage selon contexte

### Acte 6 — Démonstration pratique Cloud Desktop (local)
Création pas-à-pas d'une routine de veille juridique : nommage, prompt structuré, sélection dossier, fréquence quotidienne, exécution et historique

### Acte 7 — Démonstration pratique Cloud Code (distant)
Création repo GitHub, connexion à Cloud Code, configuration routine DRH, push données locales vers GitHub, exécution manuelle et automatisation du triage CV

### Acte 8 — Bonnes pratiques et conseils avancés
Tester 5-6 fois avant automatisation, vérifier déterminisme, utiliser bases mémorielles solides, combiner avec automatisations email pour flux complet, monitoring via historique

## Philosophie IA & Pensée profonde

L'IA (Claude) est présentée comme un agent autonome capable de réflexion contextuelle et de respect strict de périmètres définis, fonctionnant de manière déterministe quand bien encadrée par des instructions claires. Elle n'est pas une boîte noire aléatoire mais un outil prévisible et fiable pour automatiser la cognition répétitive, à condition de lui fournir une base mémorielle solide et des limites explicites.

Claude Routines transforme l'IA d'un outil réactif (tu poses une question, il répond) en agent autonome proactif qui exécute des tâches complexes 24/7 sans intervention humaine, en respectant un périmètre strict défini par des instructions claires. Le vrai pouvoir n'est pas l'automatisation mécanique (Zapier le fait), mais la capacité de Claude à réfléchir contextuellement, adapter ses décisions et maintenir une cohérence comportementale sur la durée. Cela redéfinit le ROI de l'IA : passer de 'gagner du temps sur une tâche' à 'créer un agent cognitif permanent qui remplace un employé junior pour 100$/mois'.

## Prompting & Sagesse d'usage

- Créer un persona explicite (ex: 'Je suis Catherine Morel, directrice recrutement senior') pour structurer le comportement de l'IA
- Définir un périmètre strict et fermé (domaines à couvrir, sources autorisées) plutôt que laisser l'IA explorer librement
- Fournir un template de sortie exact (format, structure, sections) pour que l'IA reproduise fidèlement le format attendu
- Construire une base mémorielle solide (contexte entreprise, fiches de poste, archives) accessible à l'IA pour enrichir ses décisions
- Tester manuellement 5-6 fois avant d'automatiser pour valider que le comportement est cohérent et respecte le périmètre
- Utiliser des instructions négatives claires ('Tu n'es pas là pour rassurer, tu es là pour protéger') pour désambiguïser les intentions
- Structurer les dossiers de manière hiérarchisée avec un README expliquant l'architecture, pour que l'IA comprenne le contexte
- Accepter automatiquement les modifications seulement si le périmètre est proprement défini et testé
- Pour données sensibles (RGPD, contrats), rester en local (Cloud Desktop) plutôt que cloud (Cloud Code)
- Combiner routines avec automatisations email/webhook pour créer des flux complets (CV reçus → GitHub → traitement → résultats)

## Concepts clés expliqués

### Routine
Configuration cloud sauvegardée qui exécute automatiquement un prompt Claude selon un déclencheur (planification cron, webhook, événement GitHub). Contrairement à un script, une routine peut réfléchir, adapter ses décisions et maintenir du contexte.
**Pourquoi c'est important** : C'est la différence entre automatisation mécanique (Zapier) et automatisation cognitive (Claude). Une routine peut analyser un CV et décider si c'est un bon candidat. Un script Zapier ne peut que router l'email.

### Périmètre
Ensemble de limites explicites définies dans le prompt pour restreindre les actions de l'IA à un domaine précis. Ex: 'Tu analyses UNIQUEMENT les arrêts de la Cour de cassation. Tu ne cherches pas sur Google. Tu ne donnes pas d'avis personnel.'
**Pourquoi c'est important** : Sans périmètre, l'IA explore librement et produit des résultats imprévisibles. Avec un périmètre strict, elle devient fiable et déterministe. C'est la clé pour passer de 'outil cool' à 'agent de production'.

### Base mémorielle
Ensemble de documents contextuels (fiches de poste, archives, rapports, règles métier) fournis à l'IA pour enrichir ses décisions. Ex: pour une routine RH, tu fournis les fiches de poste, les critères de sélection, les salaires, les avantages.
**Pourquoi c'est important** : L'IA ne peut pas inventer du contexte. Elle doit l'avoir. Une base mémorielle solide multiplie par 10 la qualité des décisions. C'est du knowledge management.

### Déclencheur
Événement qui lance l'exécution d'une routine. Trois types : cron (planification temporelle, ex: chaque jour à 9h), webhook (événement externe, ex: formulaire rempli), GitHub (événement repo, ex: pull request créée).
**Pourquoi c'est important** : Le déclencheur détermine quand et comment la routine s'exécute. Cron = tâches régulières. Webhook = réactivité à des événements. GitHub = intégration avec workflows dev. Choisir le bon déclencheur est crucial pour le ROI.

### Cloud Desktop vs Cloud Code
Cloud Desktop = exécution locale sur ton ordi, données ne quittent pas ta machine, limité à des fichiers locaux. Cloud Code = exécution distante sur serveurs Anthropic, données passent par Anthropic, accès à GitHub et webhooks.
**Pourquoi c'est important** : C'est un trade-off confidentialité vs puissance. Données sensibles (RGPD, contrats) → Cloud Desktop. Workflows complexes (GitHub, webhooks) → Cloud Code. Beaucoup de PME vont choisir Cloud Code sans réaliser les implications RGPD.

### Déterminisme comportemental
Capacité de l'IA à produire des résultats cohérents et prévisibles quand elle est bien encadrée (périmètre strict, base mémorielle solide, prompt structuré). Pas d'aléatoire, pas de surprises.
**Pourquoi c'est important** : C'est ce qui permet à une routine de remplacer un employé. Un humain peut avoir une mauvaise journée. Une IA déterministe non. C'est aussi ce qui permet de valider et de monitorer : si la routine dévie de son comportement attendu, tu le détectes.

### MCP (Model Context Protocol)
Protocole permettant à Claude d'interagir avec des services externes (GitHub, APIs, bases de données) de manière standardisée. Abstraction qui simplifie l'intégration.
**Pourquoi c'est important** : MCP est ce qui permet à Cloud Code de se connecter à GitHub et d'autres services sans que tu aies à coder des intégrations custom. C'est de l'infrastructure, mais c'est crucial pour la scalabilité.

### Persona
Rôle explicite donné à l'IA dans le prompt pour structurer son comportement. Ex: 'Tu es Catherine Morel, directrice recrutement senior chez TechCorp. Tu as 15 ans d'expérience. Tu cherches des profils senior.'
**Pourquoi c'est important** : Un persona clair aide l'IA à adopter le bon ton, les bonnes priorités, les bonnes limites. C'est plus efficace que de dire 'sois objectif'. C'est du prompt engineering avancé.

### Template de sortie
Format exact défini pour les résultats de la routine. Ex: 'Retourne un JSON avec champs [nom, email, score_match, raison_rejet]'. Force l'IA à structurer ses résultats de manière prévisible.
**Pourquoi c'est important** : Sans template, l'IA peut retourner du texte libre, du markdown, du JSON mal formé. Avec un template, tu peux parser automatiquement les résultats et les intégrer dans d'autres systèmes. C'est essentiel pour l'automatisation complète.

## Insights non-évidents

- Insight 1 : Le vrai changement n'est pas technique mais philosophique. Zapier automatise des actions (si X alors Y). Routines automatisent de la cognition (analyser, juger, décider). C'est pourquoi Claude peut faire du triage CV intelligent alors que Zapier ne peut que router des emails.
- Insight 2 : La notion de 'déterminisme' est clé mais contre-intuitive. Les gens pensent que l'IA est aléatoire. En réalité, quand tu définis un périmètre strict + une base mémorielle solide + un prompt structuré, Claude devient plus prévisible qu'un humain. C'est l'inverse du chaos.
- Insight 3 : Le coût (100$/mois) n'est pas le vrai levier. Le vrai levier est le coût d'opportunité : si une routine te libère 10h/semaine, tu peux servir 14x plus de clients. À 100$/mois, c'est 0,5% du chiffre d'affaires d'un avocat solo. Le ROI est asymétrique.
- Insight 4 : La vidéo ne le dit pas explicitement, mais elle montre que l'IA autonome nécessite une architecture organisationnelle claire (dossiers structurés, README, fiches de poste). C'est du management d'IA, pas juste du prompting. Tu dois penser comme un manager qui embauche un stagiaire.
- Insight 5 : Le passage par les serveurs Anthropic pour Cloud Code est une décision architecturale majeure qui n'est pas neutre. Cela signifie que tes données clients, tes stratégies, tes secrets métier sont visibles par Anthropic (même chiffrés). C'est un trade-off entre puissance (GitHub webhooks) et confidentialité (Cloud Desktop local).

## Mental models

- {'modele': "L'IA comme employé vs l'IA comme outil", 'explication': "Avant Routines, l'IA était un outil (tu l'utilises quand tu en as besoin). Avec Routines, l'IA devient un employé (elle travaille même quand tu dors). Ce changement de mentalité est crucial. Tu dois penser en termes de fiche de poste, de responsabilités, de limites, de monitoring. C'est du management, pas du prompting."}
- {'modele': 'Périmètre = Sécurité + Fiabilité', 'explication': "Un périmètre strict n'est pas une limitation, c'est une garantie. Plus tu restreins ce que l'IA peut faire, plus elle est fiable et prévisible. C'est contre-intuitif : on pense que plus de liberté = plus de puissance. En réalité, pour l'IA autonome, c'est l'inverse. Un avocat qui dit à sa routine 'tu analyses UNIQUEMENT les arrêts de la Cour de cassation depuis 2020' obtient des résultats 10x meilleurs qu'un qui dit 'analyse tout ce que tu trouves sur internet'."}
- {'modele': 'Base mémorielle = Contexte entreprise externalisé', 'explication': "Quand tu embauches un humain, tu lui donnes un manuel d'onboarding, des fiches de poste, des archives. C'est sa 'base mémorielle'. Pour l'IA, c'est pareil. Plus ta base mémorielle est riche et structurée, plus l'IA prend de bonnes décisions. C'est du knowledge management, pas de la magie."}
- {'modele': 'Déterminisme = Reproductibilité', 'explication': "Une routine déterministe signifie que si tu la lances 100 fois avec les mêmes inputs, tu obtiens 100 fois les mêmes outputs (ou très similaires). C'est l'opposé du chaos. Cela demande une architecture claire (prompt structuré, périmètre fermé, mémoire stable). Mais une fois atteint, c'est plus fiable qu'un humain."}
- {'modele': 'Local vs Distant = Confidentialité vs Intégration', 'explication': "Cloud Desktop (local) = tes données ne quittent pas ton ordi. Sûr, mais limité (pas de GitHub webhooks). Cloud Code (distant) = tes données passent par Anthropic. Moins sûr, mais puissant (intégrations complètes). C'est un trade-off classique. Choisis selon ton contexte : données sensibles → local. Workflows complexes → distant."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment gérer les erreurs ou anomalies détectées par Claude lors d'une exécution autonome
- Sujet mentionné mais non développé : Intégration complète avec d'autres outils (Slack, Teams, Discord) pour notifications de résultats
- Question ouverte : Comment adapter les routines pour des tâches nécessitant validation humaine intermédiaire sans casser l'automatisation
- Sujet mentionné mais non développé : Coûts réels en tokens et scaling pour 100+ routines simultanées
- Question ouverte : Quels sont les benchmarks de fiabilité et taux d'erreur de Claude en exécution autonome prolongée
- Implication non-dite 1 : Si tu utilises Cloud Code avec données clients, tu dois avoir une clause RGPD explicite dans tes conditions d'utilisation. Anthropic traite les données pour exécuter la routine, donc c'est un sous-traitant au sens CNIL. Beaucoup de PME vont oublier ça et se retrouver en infraction.
- Implication non-dite 2 : Le coût de 100$/mois est le coût d'API (Team Premium). Mais il y a un coût caché : le coût de conception et de test. Créer une routine qui fonctionne bien demande 5-6 itérations manuelles. C'est 1-2h de travail. Si tu as 10 routines, c'est 10-20h. Le ROI réel dépend de la fréquence d'exécution.
- Implication non-dite 3 : La vidéo montre des cas d'usage où l'IA a raison 99% du temps (veille juridique, triage CV). Mais elle ne parle pas des 1% où Claude hallucine ou se trompe. Qui gère les erreurs ? Qui valide ? Si tu laisses une routine trier des CV sans relecture, tu risques de rejeter un bon candidat. L'automatisation complète est dangereuse.
- Implication non-dite 4 : Le modèle économique d'Anthropic change avec Routines. Avant, tu payais par token utilisé (usage variable). Maintenant, tu paies 100$/mois pour exécution illimitée. Cela signifie qu'Anthropic a intérêt à ce que tu utilises beaucoup de tokens. Pas de conflit d'intérêt direct, mais c'est à noter.
- Ce qu'on peut en déduire : Les entreprises qui vont dominer dans 2 ans ne seront pas celles qui utilisent l'IA réactivement (chat), mais celles qui l'ont intégrée en tant qu'agents autonomes dans leurs workflows. C'est un changement de paradigme comparable à l'adoption du cloud en 2010.

## Ce que tu peux faire maintenant

- [ ] Identifier 1-2 tâches répétitives que tu fais chaque semaine (veille, reporting, triage, analyse). Estime le temps que tu y passes. Si c'est >2h/semaine, c'est un bon candidat pour une routine.
- [ ] Créer un dossier structuré avec un README expliquant l'architecture (dossiers, fichiers, contexte). C'est ta 'base mémorielle'. Même si tu ne crées pas de routine demain, cette structure te sera utile.
- [ ] Rédiger un prompt structuré pour une de ces tâches : persona explicite + périmètre fermé + template de sortie. Teste-le manuellement 5-6 fois dans Claude pour voir si le comportement est cohérent.
- [ ] Décider : Cloud Desktop (local, sûr) ou Cloud Code (distant, puissant) ? Si données sensibles (RGPD, contrats) → Cloud Desktop. Sinon → Cloud Code.
- [ ] Choisir un déclencheur : cron (tâche régulière) ou webhook (réactivité) ? Cron pour veille quotidienne. Webhook pour 'quand un CV arrive'.
- [ ] Créer ta première routine dans Claude (Team Premium requis). Commence par Cloud Desktop local pour tester sans risque RGPD.
- [ ] Tester manuellement 5-6 fois avant d'activer l'automatisation. Vérifie que le comportement est cohérent et respecte le périmètre.
- [ ] Mettre en place un monitoring : consulte l'historique d'exécution chaque semaine pour détecter les dérives ou erreurs.
- [ ] Documenter ta routine : pourquoi elle existe, ce qu'elle fait, quels sont ses limites, qui la valide. C'est du management d'IA.
- [ ] Combiner avec d'autres outils : si ta routine génère des résultats, configure un webhook pour envoyer un email ou créer une tâche Slack. Crée un flux complet.

## Business & Monétisation

- Modèle de coût : 100$/mois (Team Premium) pour exécution illimitée de routines. ROI positif si tu libères >2h/semaine (valeur ~50-100€/h pour PME). Payback en 1-2 mois.
- Cas d'usage avocat solo : 45 min/jour de veille juridique automatisée = 3,75h/semaine libérées = ~200€/semaine de valeur. ROI = 25x en 1 an.
- Cas d'usage expert-comptable : 10h/30 clients de reporting automatisé = 300h/an libérées = ~3000€/an de valeur. ROI = 30x en 1 an.
- Cas d'usage DRH : triage CV automatisé = 5h/semaine libérées = ~250€/semaine. ROI = 25x en 1 an.
- Pricing pour clients : tu peux facturer à tes clients l'automatisation de leurs tâches. Ex: 'Veille juridique automatisée = 500€/mois'. Marge = 400€/mois par client. Scalable sans coûts additionnels.
- Avantage compétitif : une PME avec 5 routines automatisées peut servir 5x plus de clients sans embaucher. C'est un multiplicateur de productivité.
- Risque : si tu automatises mal (sans validation, sans périmètre), tu risques des erreurs coûteuses (mauvais conseil juridique, CV rejeté à tort). Assurance responsabilité civile requise.

## Définitions

- **Routine** : Configuration cloud sauvegardée qui s'exécute automatiquement selon un déclencheur (planification, webhook, événement GitHub) pour automatiser des tâches sans intervention humaine
- **Stagiaire qui vit dans le cloud** : Métaphore pour décrire une IA autonome travaillant 24/7 sans coûts de bureau, exécutant des tâches répétitives avec précision
- **Déterministe** : Comportement prévisible et cohérent de l'IA qui respecte strictement le périmètre et les instructions définies, sans variations aléatoires
- **Webhook** : Déclencheur basé sur événement qui lance une routine quand une action spécifique se produit (ex: formulaire rempli, email reçu)
- **Cron** : Planification temporelle pour exécuter une routine à des moments précis (quotidien à 9h, chaque lundi, etc.)
- **Repo GitHub** : Dépôt distant stockant données, contexte et fichiers accessibles à Claude pour exécution de routines cloud
- **Base mémorielle** : Ensemble de documents contextuels (fiches de poste, archives, rapports) fournis à l'IA pour structurer ses décisions
- **Périmètre** : Ensemble de limites et de domaines définis pour restreindre les actions de l'IA à un scope précis

## Outils & techniques mentionnés

- **Claude (Anthropic)** : Modèle IA exécutant les routines avec capacités de recherche web et analyse
- **Cloud Desktop** : Interface locale pour créer et gérer les routines sur fichiers locaux
- **Cloud Code** : Environnement cloud pour routines distantes avec accès GitHub et connecteurs
- **GitHub** : Dépôt distant pour stocker données et déclencher routines via webhooks
- **Zapier** : Alternative mentionnée pour automatisations mécaniques sans réflexion
- **Cowork** : Outil pour traiter fichiers locaux sensibles en temps réel
- **MCP (Model Context Protocol)** : Protocole permettant à Claude d'interagir avec GitHub et autres services
- Création de persona pour structurer les instructions
- Définition de périmètres stricts pour limiter les actions de l'IA
- Utilisation de templates de sortie pour formater les résultats
- Structuration hiérarchisée des dossiers (architecture indentée)
- Création de bases mémorielles (contexte entreprise, fiches de poste)
- Déclenchement par planification cron (quotidien, hebdomadaire, horaire)
- Déclenchement par événement GitHub (pull request, push)
- Déclenchement par webhook/API
- Autorisation granulaire d'accès aux dossiers et services
- Historique d'exécution et logs pour validation
- Exécution manuelle pour tester avant automatisation

## Connexions avec d'autres sujets IA

- Prompting avancé : Routines demandent un prompting très structuré (persona, périmètre, template). C'est du prompting d'entreprise, pas du chat casual.
- Agents IA : Routines sont des agents autonomes. Connexion directe avec AutoGPT, LangChain, frameworks d'agents. Routines sont la version 'production-ready' des agents.
- RAG (Retrieval-Augmented Generation) : La base mémorielle d'une routine est essentiellement du RAG. Tu fournis des documents, l'IA les utilise pour enrichir ses réponses.
- Évaluation et monitoring d'IA : Comment valider qu'une routine fonctionne bien ? C'est un sujet entier. Métriques, benchmarks, détection d'anomalies.
- RGPD et conformité : Routines qui traitent des données personnelles doivent respecter RGPD. Sous-traitance, consentement, droit à l'oubli. Sujet critique pour PME.
- Orchestration de workflows : Routines + webhooks + APIs = orchestration complète. Connexion avec Make, Zapier, n8n pour workflows complexes.
- Fine-tuning et adaptation : Peut-on fine-tuner Claude pour une routine spécifique ? Pas encore, mais c'est une direction future.
- Coûts et optimisation : Comment optimiser les coûts en tokens pour routines ? Compression de contexte, caching, batch processing.
- Sécurité et confidentialité : Cloud Desktop vs Cloud Code = trade-off sécurité/puissance. Connexion avec chiffrement, isolation, audit.
- Éthique et responsabilité : Une routine qui rejette des CV ou refuse des demandes de crédit a des implications éthiques. Qui est responsable des erreurs ?

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionne un LLM (il génère du texte token par token, pas de 'vraie' compréhension, mais du pattern matching très sophistiqué). (2) La différence entre prompting réactif (tu poses une question) et prompting autonome (l'IA agit sans toi). (3) Les bases du RGPD et de la confidentialité des données (ce que tu peux/ne peux pas faire avec données clients). (4) Le concept de 'périmètre' et de 'limites' en IA (pourquoi restreindre l'IA la rend plus fiable). (5) La notion de 'déterminisme' vs 'aléatoire' (une IA bien encadrée est prévisible). Si tu n'as pas ces bases, regarde d'abord des vidéos sur le prompting, le fonctionnement des LLMs, et les risques de l'IA autonome. Sinon, tu vas créer des routines qui hallucinent ou violent le RGPD sans le savoir.

## Citations notables

> Anthropic vient de sortir une fonctionnalité qui s'appelle Routine et elle te permet de créer des employés illimités à 400 QI qui travaillent 24 sur 7

> C'est ce qu'on appelle le stagiaire qui vit dans le cloud

> Il va bosser pour toi, même la nuit

> Tu n'as pas besoin de lui payer de bureau chez toi, il va dormir dans un cloud

> C'est un mini cerveau en autonomie

> 100 dollars par mois, c'est 14 fois moins cher qu'un SMIC

> Toutes tes données clients ne passent pas par là. Sache-le, routine, ils tournent dans le cloud d'Anthropic

> Soit tu utilises pas l'IA et tu restes un homme des cavernes, soit tu utilises l'IA, tu gagnes du temps et tu aides encore plus tes clients

> Il va pas le faire avec de l'IA, il va le faire avec du code Python pour faire des calculs mathématiques déterministes

> La routine elle garde son rôle de préparateur, toi tu gardes ton rôle de contrôleur

> Claude c'est vrai qu'il y en a beaucoup qui disent oui Gemini il est très fort, mais sur les benchmarks en search, en recherche internet il n'y en a qu'un seul qui est au-dessus de tous c'est Claude4OpusSearch
