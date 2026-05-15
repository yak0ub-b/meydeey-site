# Claude Code + Apify : Scrape tout le web en 1 prompt

**Date** : 2026-04-14 | **Durée** : 26:44 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🟡 moyenne
**URL** : https://www.youtube.com/watch?v=6401hShkLKA

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi l'IA change le scraping | section Philosophie IA et Mental Models |
| appliquer cela à ton business | section Ce que tu peux faire maintenant et Business Monétisation |
| maîtriser le prompting pour Claude Code | section Concepts Clés Expliqués (Plan → Scrape → Exploit → Invoice) |
| identifier les pièges et limites | section Ce qu'il ne dit pas et Ouvertures |
| connecter cela à d'autres outils IA | section Connexions avec autres sujets IA |

## Résumé

La vidéo présente une combinaison puissante et bon marché pour scraper des données : Apify (plateforme avec 24,631+ scrapers cloud) + Claude Code (IA qui traduit les besoins en scripts Python). Le créateur démontre en live comment scraper 100 gyms à Paris (0,88$), 150 profils LinkedIn à Lyon (0,60$), et crawler 20 sites concurrents pour générer un article SEO de 2,000 mots (1,57$), contre 50-200$/mois pour les outils traditionnels. Il insiste sur l'importance d'une stratégie (Plan → Scrape → Exploit → Invoice) et montre trois modèles de rentabilité : prospection commerciale, intelligence concurrentielle, et services d'agence.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTENTION BUSINESS (Langage naturel)           │
│         "Je veux 100 leads qualifiés avec emails à Paris"         │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │   CLAUDE CODE (Traducteur)   │
          │  Comprend le contexte        │
          │  Planifie la stratégie       │
          │  Génère les prompts Apify    │
          └──────────────┬───────────────┘
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
    ┌──────────────┐          ┌──────────────────┐
    │ APIFY ACTORS │          │ PYTHON SCRIPTS   │
    │ (Cloud API)  │          │ (Structuration)  │
    │ - Google Maps│          │ - Tri            │
    │ - LinkedIn   │          │ - Enrichissement │
    │ - Website    │          │ - Scoring        │
    └──────┬───────┘          └────────┬─────────┘
           │                           │
           └───────────────┬───────────┘
                           ▼
                  ┌─────────────────┐
                  │  DELIVERABLE    │
                  │  (Excel/JSON)   │
                  │  Coût: 0.88$    │
                  │  Valeur: 50-200$│
                  └─────────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │  MONÉTISATION   │
                  │  (Vendre service)│
                  │  ou données     │
                  └─────────────────┘
```

## Chapitres inférés

### Acte 1 — Le problème et la promesse (0-2 min)
Les concurrents utilisent des données pour dominer le marché. Les outils traditionnels coûtent 200-300$/mois. Promesse : montrer une combo puissante et bon marché avec 3 méthodes et 4 deliverables.

### Acte 2 — Pourquoi les données étaient inaccessibles avant (2-5 min)
Avant : Python + Beautiful Soup/Selenium, ou payer un dev, ou outils complexes. 95% des gens n'avaient pas accès. Données partout mais inaccessibles et non structurées.

### Acte 3 — Présentation de la combo : Apify + Claude Code (5-10 min)
Apify = App Store du scraping avec 24,631 actors pré-construits. Claude Code = IA pour traduire les besoins en exécution technique. Sweet spot : haute valeur business + effort technique minimal.

### Acte 4 — Le framework de rentabilité (10-15 min)
Plan → Scrape → Exploit → Invoice. Trois modèles : prospection commerciale, intelligence concurrentielle, services d'agence. Exemples de coûts vs valeur (4$ vs 50-200$/mois).

### Acte 5 — Cas d'usage et ROI (15-25 min)
Trois cas réels : site PPE (1,800 articles, explosion SEO), e-commerce Polynésie (radar TikTok 6x/jour, 800€/mois), crypto (tokenomics en 2 min vs 2h). Tous profitables.

### Acte 6 — Démonstration live (25-50 min)
Prompt simple en markdown. Claude Code lance 3 scrapes : 100 gyms Paris (0,88$), 150 profils LinkedIn Lyon (0,60$), crawl 20 sites concurrents + article SEO 2,000 mots (1,57$). Total ~3$ vs 5-10$ estimé.

### Acte 7 — Détails techniques et avertissements (50-fin)
Installation MCP Apify. Logs en temps réel. 26,000+ actors disponibles. Modèles de pricing (usage vs subscription). Compliance et responsabilité. Scraping ne remplace pas la stratégie.

## Philosophie IA & Pensée profonde

L'IA (Claude Code) fonctionne comme un traducteur universel : elle convertit des instructions en langage naturel en exécution technique précise (scripts Python, appels API, structuration de données). Elle n'a pas besoin de compétences techniques de l'utilisateur car elle gère toute la complexité ; l'utilisateur fournit juste la stratégie et le plan, l'IA exécute.

Cette vidéo démontre que l'IA (Claude Code) transforme le scraping web de compétence technique rare et coûteuse en processus accessible via langage naturel, en combinaison avec Apify (plateforme cloud). Le vrai insight : ce n'est pas une vidéo sur le scraping, c'est une vidéo sur comment l'IA traduit des intentions business en exécution technique sans friction, et comment cette traduction crée une asymétrie économique (3$ vs 200$/mois) qui ouvre des niches de monétisation.

## Prompting & Sagesse d'usage

- Écrire des prompts clairs et structurés en markdown avec des sections distinctes (Plan, Scrape, Exploit, Invoice) pour que Claude comprenne chaque étape.
- Spécifier exactement les colonnes/champs désirés dans le deliverable (ex: 'name, title, company, URL, sans emails') pour éviter les données inutiles.
- Toujours définir d'abord le plan business et le deliverable AVANT de scraper, sinon on finit avec des Excel inutiles.
- Donner à Claude les URLs spécifiques des concurrents plutôt que de le laisser chercher aveuglément, pour plus de précision.
- Copier la transcription de la vidéo et la paster dans Claude avec son problème business spécifique pour obtenir une solution personnalisée.
- Mentionner les conditions et guardrails (compliance, TOS) dans le prompt pour que Claude les respecte.
- Demander une estimation de coût AVANT l'exécution pour valider la rentabilité.
- Utiliser le MCP Apify plutôt que des requêtes CLI manuelles pour une intégration plus fluide.

## Concepts clés expliqués

### Actors (Apify)
Ce sont des scrapers pré-construits et maintenus par des développeurs mondiaux. Tu ne codes pas, tu appelles une API. Apify a 24,631+ actors pour Google Maps, LinkedIn, sites web, etc. C'est comme un 'App Store du scraping'.
**Pourquoi c'est important** : Cela supprime la barrière technique. Avant, tu devais coder en Python avec Beautiful Soup ou Selenium. Maintenant, tu appelles une API. Claude Code peut appeler ces APIs en langage naturel.

### Claude Code (IA exécutrice)
C'est Claude avec la capacité d'exécuter du code Python et d'appeler des APIs (via MCP Apify). Tu lui donnes un prompt en langage naturel, il génère le code, l'exécute, et te retourne les résultats.
**Pourquoi c'est important** : C'est le traducteur entre intention business et exécution technique. Sans Claude Code, tu devrais coder toi-même ou payer un dev. Avec Claude Code, tu écris un prompt et c'est fait.

### MCP (Model Context Protocol)
C'est un protocole qui permet à Claude Code de communiquer directement avec Apify. Tu installes le MCP Apify, et Claude peut appeler les actors Apify comme s'il avait accès à une API native.
**Pourquoi c'est important** : C'est ce qui rend la combo Apify + Claude Code fluide. Sans MCP, tu devrais faire des appels API manuels. Avec MCP, Claude gère tout.

### Plan → Scrape → Exploit → Invoice
C'est un framework en 4 étapes. Plan : définir le deliverable et le business outcome. Scrape : extraire les données via Apify. Exploit : enrichir et transformer les données. Invoice : vendre le service ou les données. C'est un cycle de création de valeur.
**Pourquoi c'est important** : Beaucoup de gens sautent le 'Plan' et scrape aveuglément, générant zéro valeur. Ce framework force à penser stratégie d'abord, exécution ensuite. C'est un mental model, pas juste une checklist.

### Scraping vs Crawling
Scraping = extraction de données d'une page. Crawling = navigation automatisée dans toutes les pages d'un site pour collecter des données complètes. Exemple : scraper une page LinkedIn vs crawler 20 pages d'un site concurrent.
**Pourquoi c'est important** : Comprendre la différence te permet de choisir le bon actor Apify et d'estimer le coût correctement. Crawling coûte plus cher que scraping.

### Enrichissement de données
Prendre des données brutes (100 noms + emails) et les enrichir avec du contexte (scoring de qualité, analyse concurrentielle, données démographiques, etc.). C'est ce qui transforme les données brutes en données précieuses.
**Pourquoi c'est important** : Les données brutes sont presque sans valeur. L'enrichissement est ce qui crée la vraie valeur. Claude Code peut enrichir automatiquement via des scripts Python ou des appels API à d'autres outils (SEMrush, Ahrefs, etc.).

### Asymétrie économique (3$ vs 200$/mois)
Les outils traditionnels (ZoomInfo, Apollo) coûtent 50-200$/mois. Apify + Claude Code coûte quelques centimes par scrape. Cette asymétrie existe parce que les outils traditionnels vendent du SaaS avec marge, support, interface. Apify vend de l'infrastructure brute.
**Pourquoi c'est important** : Cette asymétrie crée une opportunité d'arbitrage. Tu peux acheter de l'infrastructure bon marché, ajouter de la stratégie et du service, et revendre comme service premium. C'est un modèle de monétisation viable.

### Deliverable
C'est le produit final que tu vends au client. Exemples : Excel avec 100 leads, article SEO de 2,000 mots, rapport d'analyse concurrentielle, base de données structurée. Le deliverable doit être défini AVANT de scraper.
**Pourquoi c'est important** : Si tu ne définis pas le deliverable d'abord, tu vas scraper des données inutiles et générer zéro valeur. Le deliverable est ce qui justifie le scraping.

## Insights non-évidents

- Insight 1 : Le vrai produit n'est pas le scraping, c'est la STRATÉGIE. La vidéo insiste sur 'Plan → Scrape → Exploit → Invoice' mais le 'Plan' (définir le deliverable et le business outcome) est 90% du travail intellectuel. Le scraping est juste l'exécution. Beaucoup de gens vont scraper sans plan et générer zéro valeur.
- Insight 2 : Claude Code fonctionne comme un 'middleware cognitif' entre l'intention humaine et l'API technique. C'est une abstraction qui supprime la friction entre 'ce que je veux' et 'comment le faire'. Cette abstraction est la vraie innovation, pas Apify ou Claude individuellement.
- Insight 3 : L'asymétrie économique (3$ vs 200$/mois) existe parce que les outils traditionnels (ZoomInfo, Apollo) vendent du SaaS avec marge, support, interface. Apify + Claude vend de l'infrastructure brute. Le créateur crée de la valeur en COMBINANT ces briques et en STRATÉGISANT. C'est un modèle d'arbitrage : acheter de l'infrastructure bon marché, ajouter de la stratégie, revendre comme service.
- Insight 4 : La citation 'Si vous ne mettez pas en action tout ce que j'explique, vous ne produirez pas de valeur' révèle que la vidéo est une invitation à l'action, pas juste de l'information. Le vrai apprentissage est dans l'exécution, pas la compréhension passive.
- Insight 5 : Le scraping est un proxy pour 'accès aux données'. Mais les données brutes sont inutiles. La vraie valeur est dans l'ENRICHISSEMENT (scoring, analyse concurrentielle, génération de contenu). Claude Code n'est pas juste un exécuteur, c'est un enrichisseur de données.

## Mental models

- {'modele': "L'IA comme traducteur universel", 'description': "Pense à Claude Code comme un traducteur qui convertit 'langage business' en 'langage technique'. Tu dis 'Je veux 100 leads avec emails', Claude traduit cela en 'appelle l'actor Google Maps, filtre par catégorie, extrait name/email/phone, structure en Excel'. Cette traduction supprime la friction entre intention et exécution. C'est pourquoi les non-techniques peuvent maintenant faire du scraping."}
- {'modele': 'Arbitrage économique via abstraction', 'description': "L'asymétrie (3$ vs 200$/mois) existe parce que les outils traditionnels vendent une abstraction complète (interface, support, compliance). Apify + Claude vend une abstraction partielle (infrastructure + IA). Le créateur crée de la valeur en COMBINANT ces abstractions et en ajoutant de la STRATÉGIE. C'est un modèle d'arbitrage : acheter des briques bon marché, les assembler intelligemment, revendre comme service premium."}
- {'modele': 'Données brutes vs données enrichies', 'description': "Les données brutes (100 noms + emails) sont presque sans valeur. Les données enrichies (100 noms + emails + scoring de qualité + analyse concurrentielle + contexte) sont très précieuses. Claude Code n'est pas juste un scraper, c'est un enrichisseur. Le vrai travail est dans l'enrichissement, pas l'extraction."}
- {'modele': 'Plan → Scrape → Exploit → Invoice', 'description': "C'est un cycle de création de valeur. Le 'Plan' (définir le deliverable et le business outcome) est 80% du travail intellectuel. Le 'Scrape' est 10% (Claude le fait). Le 'Exploit' (enrichissement) est 10%. L'erreur commune : sauter le Plan et scraper aveuglément. Pense à cela comme un framework de pensée, pas juste une checklist technique."}
- {'modele': 'Compliance comme feature, pas obstacle', 'description': "La vidéo mentionne 'compliance' mais ne la détaille pas. Pense à la compliance (respect des ToS, RGPD, etc.) comme une feature qui te différencie. Si tu scrapes LinkedIn légalement (avec permission), tu peux vendre un service premium. Si tu scrapes illégalement, tu risques tout. La compliance n'est pas un coût, c'est un moat."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment gérer les restrictions légales et RGPD du scraping LinkedIn et autres plateformes avec données personnelles.
- Sujet mentionné mais non développé : Comment automatiser l'envoi d'emails après scraping (SMTP/Brevo) sans détails techniques complets.
- Question ouverte laissée sans réponse : Comment choisir le bon niche/marché pour que le scraping soit réellement profitable ?
- Sujet mentionné mais non développé : Comment scorer et filtrer les données brutes pour ne garder que les leads/contenus de qualité.
- Sujet mentionné mais non développé : Stratégies de pricing pour revendre les données/services (pourquoi 50€ vs 200€/mois pour le même service).
- Implication non-dite 1 : Le scraping de LinkedIn, Google Maps, et sites concurrents peut violer les ToS (Terms of Service) de ces plateformes. La vidéo mentionne 'compliance' mais ne détaille pas les risques légaux réels (blocage de compte, poursuites). Utiliser Apify ne rend pas le scraping légal si la plateforme l'interdit.
- Implication non-dite 2 : La scalabilité a des limites. Scraper 100 leads coûte 0,88$. Mais scraper 1 million de leads ? Les coûts Apify vont exploser, et les plateformes vont bloquer les IPs. La vidéo montre des cas petits/moyens, pas la scalabilité extrême.
- Implication non-dite 3 : Claude Code doit avoir accès à un dossier de travail et à Internet pour exécuter les actors Apify. Cela signifie que tu dois faire confiance à Claude avec tes clés API Apify. Risque de sécurité non mentionné.
- Implication non-dite 4 : La compétition va augmenter. Si 4,300 personnes dans le groupe apprennent cela, et que chacun commence à scraper et revendre des services, le marché va se saturer. La vidéo ne parle pas de comment se différencier quand tout le monde peut faire la même chose.
- Ce qu'on peut en déduire : Le vrai moat (avantage compétitif) n'est pas le scraping, c'est la STRATÉGIE et la NICHE. Quelqu'un qui scrape des données génériques et les revend va perdre face à quelqu'un qui scrape pour une niche spécifique (ex: leads immobilier à Paris avec scoring de solvabilité). La vidéo montre l'outil, pas comment construire un moat.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Définir une niche spécifique (ex: leads immobilier à Paris, profils LinkedIn en tech, sites e-commerce en Polynésie) et écrire un prompt clair en markdown avec les sections Plan → Scrape → Exploit → Invoice. Teste avec Claude Code.
- [ ] Action 2 : Installer le MCP Apify dans Claude Code et faire un scrape test simple (ex: 10 leads Google Maps) pour vérifier que tout fonctionne et comprendre les coûts réels.
- [ ] Action 3 : Identifier 3 niches où tu pourrais revendre un service de scraping + enrichissement de données. Pour chaque niche, estimer le coût (Apify + Claude) et le prix de vente potentiel.
- [ ] Action 4 : Copier la transcription de la vidéo et la paster dans Claude avec ton problème business spécifique (ex: 'Je veux scraper les 100 meilleurs restaurants à Lyon et générer un article SEO'). Demander une solution personnalisée.
- [ ] Action 5 : Avant de scraper, toujours demander à Claude une estimation de coût. Valider que le coût (0,88$ pour 100 leads) est inférieur à la valeur que tu vas générer (50-200$ si tu revends comme service).
- [ ] Action 6 : Créer un template de prompt réutilisable pour ta niche. Exemple : 'Scrape [X leads] de [plateforme] dans [région], enrichis avec [données], génère [deliverable]'. Cela te permet de répéter rapidement.
- [ ] Action 7 : Tester l'enrichissement de données. Scrape 10 leads, puis enrichis-les avec scoring, analyse concurrentielle, ou génération de contenu. Mesure le temps et le coût. C'est là que la vraie valeur se crée.
- [ ] Action 8 : Rejoindre le groupe de 4,300+ membres mentionné dans la vidéo pour apprendre des cas d'usage réels et des pièges à éviter.

## Business & Monétisation

- Modèle 1 : Prospection commerciale. Scrape 100-500 leads qualifiés (Google Maps, LinkedIn) avec emails et contexte. Revends comme service B2B (50-200$/mois par client). Coût : 0,88-5$. Marge : 95%+.
- Modèle 2 : Intelligence concurrentielle. Scrape et crawl 20-50 sites concurrents, enrichis avec analyse SEO (SEMrush, Ahrefs), génère un rapport ou article. Revends comme service ou produit digital (100-500€). Coût : 1-5$. Marge : 95%+.
- Modèle 3 : Services d'agence. Offre du scraping + enrichissement + génération de contenu comme service complet. Exemple : 'Nous générons 50 articles SEO par mois basés sur les données de tes concurrents'. Pricing : 500-2,000€/mois. Coût : 50-100$. Marge : 90%+.
- Modèle 4 : Produits data. Scrape une niche spécifique (ex: tous les restaurants à Paris avec avis, prix, horaires), enrichis, et vends comme produit digital ou API. Pricing : 10-50€/mois par utilisateur. Coût : 5-20$ pour scraper. Marge : 80%+ si tu as 10+ clients.
- Modèle 5 : Automation pour clients. Offre une automation qui scrape et enrichit les données de tes clients chaque jour/semaine. Exemple : 'Nous te donnons les 10 meilleurs leads qualifiés chaque jour'. Pricing : 100-500€/mois. Coût : 5-20$. Marge : 90%+.
- Piège à éviter : Ne pas confondre volume avec valeur. Scraper 10,000 leads génériques et les revendre 1€ chacun ne va pas marcher. La vraie valeur est dans la NICHE et l'ENRICHISSEMENT. Scraper 100 leads très qualifiés et enrichis pour une niche spécifique, et les revendre 50€ chacun, c'est viable.

## Définitions

- **Actors** : Scrapers pré-construits et maintenus par des développeurs mondiaux sur Apify, prêts à l'emploi via API
- **Scraping** : Extraction automatisée de données structurées depuis des sites web ou plateformes
- **Crawling** : Navigation automatisée dans toutes les pages d'un site pour collecter des données complètes
- **MCP** : Model Context Protocol permettant à Claude Code de communiquer directement avec Apify
- **Deliverable** : Produit final à facturer au client (Excel, article, rapport, etc.)
- **Tokenomics** : Analyse de la structure économique et technique d'un token crypto

## Outils & techniques mentionnés

- **Apify** : Plateforme cloud avec 24,631+ scrapers pré-construits (appelés 'actors') pour extraire des données de multiples plateformes
- **Claude Code** : IA qui traduit les besoins en langage naturel en scripts Python exécutables et gère l'exploitation des données
- **Google Maps Scraper (actor Apify)** : Extraction de données commerciales locales avec contacts
- **LinkedIn Scraper (actor Apify)** : Extraction de profils professionnels qualifiés
- **Website Content Crawler (actor Apify)** : Crawl complet de sites concurrents pour analyse SEO
- **Beautiful Soup** : Ancienne méthode Python pour scraper (mentionnée comme obsolète)
- **Selenium** : Ancienne méthode Python pour scraper (mentionnée comme obsolète)
- **ZoomInfo** : Outil concurrent coûteux (50-200$/mois)
- **Apollo** : Outil concurrent coûteux (50-200$/mois)
- **SEMrush** : Outil SEO pour enrichir les analyses
- **Ahrefs** : Outil SEO pour enrichir les analyses
- **YourTextGuru** : Outil SEO pour enrichir les analyses
- Scraping via API cloud (sans IP personnelle bloquée)
- Utilisation de MCP (Model Context Protocol) pour connecter Claude à Apify
- Crawling multi-pages avec fallbacks intelligents
- Extraction structurée en markdown et Excel
- Analyse concurrentielle via scraping de contenu
- Génération d'articles SEO data-driven
- Enrichissement de données avec scoring et analyse
- Automatisation d'envoi d'emails via SMTP/Brevo après scraping

## Connexions avec d'autres sujets IA

- Prompting avancé : Cette vidéo est un cas d'usage avancé de prompting. Tu dois écrire des prompts clairs et structurés pour que Claude Code comprenne exactement ce que tu veux. Les principes de prompting (clarté, structure, contexte) s'appliquent ici.
- Agents IA : Claude Code fonctionne comme un agent IA simple. Il reçoit une intention, planifie les étapes, exécute les actions (appels API), et retourne les résultats. C'est un exemple de comment les agents IA peuvent automatiser des workflows complexes.
- Retrieval-Augmented Generation (RAG) : L'enrichissement de données (ajouter du contexte à partir d'autres sources) est similaire à RAG. Tu scrapes des données brutes, puis tu les enrichis avec du contexte externe (SEMrush, Ahrefs, etc.). C'est une forme de RAG.
- Fine-tuning et transfer learning : Les actors Apify sont des modèles pré-entraînés pour des tâches spécifiques (scraper Google Maps, LinkedIn, etc.). C'est un exemple de transfer learning : au lieu de coder un scraper from scratch, tu utilises un modèle pré-entraîné.
- Automation et workflow : Cette vidéo est un cas d'usage d'automation. Tu automatises un workflow complexe (Plan → Scrape → Exploit → Invoice) via IA et APIs. C'est applicable à d'autres domaines (marketing automation, data pipelines, etc.).
- Business intelligence et data analytics : Le scraping + enrichissement est une forme de business intelligence. Tu collectes des données brutes, les enrichis avec du contexte, et les transformes en insights actionnables. C'est ce que font les outils BI (Tableau, Power BI), mais à bas coût.
- Compliance et éthique IA : La vidéo mentionne 'compliance' mais ne la détaille pas. C'est un sujet important : comment utiliser l'IA et le scraping de manière légale et éthique ? Quels sont les risques légaux ? Comment respecter les ToS et le RGPD ?
- Pricing et monétisation : Cette vidéo est un cas d'étude en pricing. Comment fixer le prix d'un service basé sur du scraping + IA ? Comment créer une asymétrie économique (coût bas, prix de vente haut) ? C'est applicable à d'autres produits IA.

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionnent les APIs et les appels HTTP de base (Apify expose une API REST). (2) Qu'est-ce que le scraping web et pourquoi c'est utile (extraction de données structurées). (3) Comment fonctionne Claude et le prompting basique (tu dois écrire des prompts clairs). (4) Qu'est-ce qu'une stratégie business simple (Plan → Scrape → Exploit → Invoice). (5) Qu'est-ce que la monétisation et comment créer de la valeur (coût bas + prix de vente haut = marge). Si tu ne comprends pas ces 5 points, la vidéo va te sembler magique mais tu ne pourras pas l'appliquer.

## Citations notables

> Je suis fatigué de voir les gens faire du scraping avec des outils qui coûtent 200-300 dollars par mois, alors qu'on peut le faire pour juste quelques centimes.

> Scraping sans plan c'est inutile. Le scraping est un moyen, pas une fin. Sans stratégie, c'est zéro, zilch, nada.

> Vous bénéficiez des cerveaux de développeurs très compétents qui sont payés, parce que quand vous utilisez des actors, ils sont compensés bien sûr, mais vous êtes libérés de tout.

> Si vous ne mettez pas en action tout ce que j'explique depuis le début, vous ne produirez pas de valeur.

> La valeur que vous générez est bien supérieure à ce que vous payez.

> Scraping 100 leads avec emails et tout, ça nous a coûté 88 cents.

> Vous avez vraiment besoin de réaliser parfois la chance qu'on a de pouvoir faire le travail d'une personne qui aurait pris une semaine, et là on boit un café en le regardant travailler, c'est incroyable.

> Fiverr est une arnaque comparé à ça.
