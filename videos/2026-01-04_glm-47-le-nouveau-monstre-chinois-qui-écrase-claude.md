# GLM-4.7 : Le nouveau monstre chinois qui écrase Claude

**Date** : 2026-01-04 | **Durée** : 38:41 | **Niveau** : intermédiaire | **Catégorie** : Vision & Société | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=FKZGwYX1yX4

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment fonctionne réellement une architecture MOE et pourquoi c'est révolutionnaire | section Concepts clés expliqués - Mixture of Experts |
| saisir la philosophie IA derrière l'activation sélective d'experts | section Mental models |
| évaluer si GLM-4.7 est viable pour tes cas d'usage | section Ce que tu peux faire maintenant |
| comprendre les implications géopolitiques et commerciales | section Business monétisation |
| explorer les limites et risques cachés | section Ce qu'il ne dit pas |

## Résumé

GLM 4.7 est un modèle IA chinois open weight de Zhipu AI utilisant une architecture Mixture of Experts (355B paramètres, 32B activés par requête) pour un coût de 3$/mois. Il surpasse Claude 4.5 Sonnet sur les benchmarks de code (SWE-bench 73.8) et raisonnement complexe (HumanityLastExam 42.8 vs 32%), offrant trois modes de pensée (deep thinking, flash mode, preserved thinking) et un context window de 200k tokens. Bien que performant et accessible, il présente des risques géopolitiques, des hallucinations culturelles et une maturité écosystémique inférieure aux modèles américains, mais représente une menace compétitive majeure pour 2026.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    GLM-4.7 ARCHITECTURE MOE                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  REQUÊTE UTILISATEUR                                          │
│         │                                                     │
│         ▼                                                     │
│  ┌──────────────────┐                                         │
│  │ ROUTING SYSTEM   │ (Sélection intelligente)               │
│  │ (Probabiliste)   │                                         │
│  └────────┬─────────┘                                         │
│           │                                                   │
│    ┌──────┴──────┬──────────┬──────────┐                      │
│    ▼             ▼          ▼          ▼                      │
│  [Expert]    [Expert]   [Expert]   [Expert]                  │
│   Code       Math      Reasoning   Language                  │
│    │             │          │          │                      │
│    └──────┬──────┴──────┬───┴──────┬───┘                      │
│           ▼             ▼          ▼                          │
│      32 MILLIARDS DE PARAMÈTRES ACTIVÉS                      │
│      (sur 355B totaux)                                        │
│           │                                                   │
│           ▼                                                   │
│      RÉPONSE OPTIMISÉE                                        │
│      (Rapide + Pas cher)                                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Contexte géopolitique et présentation de Zhipu AI
Positionnement de la Chine dans la guerre de l'IA, présentation de Zhipu AI comme élite chinoise préparant IPO Hong Kong, stratégie d'investissement en Asie vs États-Unis

### Acte 2 — Architecture technique : Mixture of Experts expliquée
Explication détaillée du MOE avec analogie des 10 experts, activation sélective de 32B/355B paramètres, routing system, comparaison avec architecture standard

### Acte 3 — Caractéristiques clés et modes de pensée
Deep thinking, flash mode, preserved thinking, context window 200k tokens, spécialisation en code et UI, benchmarks (SWE-bench, HumanityLastExam)

### Acte 4 — Avantages commerciaux et stratégie de marché
Pricing révolutionnaire (3$ vs 20-30$), open weight vs propriétaire, adoption massive des développeurs, intégration Open Router/Cursor Code

### Acte 5 — Limitations et risques
Hallucinations culturelles, risques géopolitiques/sanctions US, souveraineté données européennes, maturité écosystémique inférieure

### Acte 6 — Démonstration pratique et test en direct
Accès plateforme try.glm4.ai, test landing page Nebula AI, critique du design marketing chinois, prompting déterministe

## Philosophie IA & Pensée profonde

L'IA fonctionne par activation sélective d'experts spécialisés plutôt que par traitement global, et sa qualité dépend de la capacité du prompteur à comprendre les probabilités sémantiques pour activer les bons experts. Le vrai test n'est pas le benchmark papier mais la rentabilité pratique en cas d'usage réels, et les modèles open source chinois représentent une disruption majeure non par la supériorité technologique absolue mais par le rapport coût-performance et la liberté d'intégration.

GLM-4.7 représente une disruption majeure non par la supériorité technologique absolue mais par le rapport coût-performance (3$/mois vs 20-30$) combiné à l'architecture MOE qui active sélectivement 32B/355B paramètres selon la requête. Ce modèle chinois open weight démontre que la vraie compétition en IA ne se joue plus sur les benchmarks papier mais sur la rentabilité pratique et la liberté d'intégration, forçant une réévaluation du positionnement des modèles américains propriétaires. La philosophie sous-jacente : l'IA fonctionne par activation d'experts spécialisés, pas par traitement global, et le prompteur qui comprend cette mécanique probabiliste peut extraire bien plus de valeur qu'un utilisateur naïf.

## Prompting & Sagesse d'usage

- Maîtriser les probabilités et l'influence sémantique pour activer les bons experts dans une architecture MOE
- Éviter les prompts sans logique qui 'ne servent à rien' et n'ont 'aucune logique sur le marché'
- Tester en pratique plutôt que de se fier aux benchmarks papier qui 'peuvent être trafiqués'
- Utiliser le preserved thinking pour maintenir le fil conducteur sur plusieurs tours de conversation complexe
- Donner des consignes déterministes et techniques précises (format HTML/CSS/JS, visuellement impressionnant, prêt à publier)
- Adapter le mode de pensée à la requête : deep thinking pour complexe, flash mode pour rapide, preserved thinking pour contextuel
- Fournir du contexte costaud (200-300 pages) plutôt que fragmenté pour éviter la dilution de l'essence du raisonnement

## Concepts clés expliqués

### Mixture of Experts (MOE)
Architecture où un modèle avec 355 milliards de paramètres n'active que 32 milliards ultra-spécialisés par requête. Un routeur intelligent sélectionne les experts pertinents selon la nature de la requête (code, math, langage, etc.), rendant le traitement plus rapide et moins coûteux qu'un modèle dense qui activerait tous les paramètres.
**Pourquoi c'est important** : C'est la clé de la viabilité économique de GLM-4.7. Sans MOE, un modèle de 355B paramètres coûterait 10x plus cher à faire tourner. MOE permet d'avoir la puissance d'un modèle énorme avec le coût d'un modèle petit.

### Open weight vs Propriétaire
Open weight = les poids du modèle sont téléchargeables et modifiables, tu as la liberté totale. Propriétaire (Claude API) = tu loues l'accès via une API, tu ne vois pas les poids, tu dépends du fournisseur. GLM-4.7 est open weight, Claude est propriétaire.
**Pourquoi c'est important** : Open weight crée une dépendance technologique zéro et une souveraineté maximale. Pour les entreprises qui veulent du contrôle ou qui craignent les sanctions géopolitiques, c'est un avantage décisif.

### Routing system
Mécanisme intelligent qui sélectionne les experts spécialisés appropriés selon la nature de la requête. Si tu demandes du code, il active l'expert 'codeur'. Si tu demandes de la math, il active l'expert 'mathématicien'. C'est une probabilité, pas une règle binaire.
**Pourquoi c'est important** : La qualité du routing détermine la qualité de la réponse. Un mauvais routing = mauvaise réponse. Un bon routing = réponse optimale. C'est pourquoi le prompting (qui influence le routing) est crucial.

### Deep thinking vs Flash mode vs Preserved thinking
Deep thinking = le modèle réfléchit longuement avant de répondre (bon pour les problèmes complexes). Flash mode = réponse rapide sans réflexion profonde (bon pour les conversations rapides). Preserved thinking = le modèle garde le fil du raisonnement sur plusieurs tours (bon pour les conversations longues et complexes).
**Pourquoi c'est important** : Ce sont trois stratégies différentes pour différents cas d'usage. Utiliser le bon mode pour la bonne requête = meilleure qualité + moins de coût. C'est une forme de 'routing' au niveau de la stratégie de pensée.

### Context window (200k tokens)
Capacité de mémoire du modèle : 200 000 tokens en entrée (équivalent à 200-300 pages de texte) et 128 000 en sortie (100 pages). Plus le context window est grand, plus le modèle peut 'voir' de contexte avant de répondre.
**Pourquoi c'est important** : Un context window énorme permet de donner du contexte costaud (une documentation entière, un codebase complet) au modèle, ce qui améliore la qualité de la réponse. C'est un avantage majeur pour les tâches complexes.

### Hallucination culturelle
Tendance du modèle à générer des informations erronées sur des faits spécifiques hors de Chine. Exemple : GLM-4.7 peut halluciner sur des personnalités politiques américaines mais être précis sur des personnalités chinoises.
**Pourquoi c'est important** : C'est une révélation que les modèles sont optimisés pour leur marché d'origine. GLM-4.7 est optimisé pour le marché chinois, donc il va dominer en Asie mais être moins fiable en Occident. C'est un risque géopolitique majeur.

### Benchmarks (SWE-bench, HumanityLastExam)
Tests standardisés pour évaluer la performance des modèles. SWE-bench = capacité à résoudre des problèmes de code réels. HumanityLastExam = capacité à réussir des examens universitaires. GLM-4.7 score 73.8 sur SWE-bench vs 65 pour Claude.
**Pourquoi c'est important** : Les benchmarks sont des indicateurs utiles mais trompeurs. Ils ne mesurent pas la rentabilité réelle ou la satisfaction utilisateur. Un modèle peut gagner sur les benchmarks mais perdre sur le marché (et vice versa).

## Insights non-évidents

- Insight 1 : Le vrai coût de Claude/GPT-4 n'est pas dans les tokens mais dans l'activation de TOUS les paramètres à chaque requête. GLM-4.7 économise 90% de la puissance de calcul en n'activant que les experts pertinents—c'est une révolution d'efficacité énergétique, pas juste de pricing.
- Insight 2 : L'open weight n'est pas un avantage technique mais un avantage GÉOPOLITIQUE. Zhipu AI offre la liberté d'intégration (pas de dépendance API, pas de risque de censure/sanctions), ce qui attire les développeurs qui veulent du contrôle souverain sur leurs données.
- Insight 3 : Les benchmarks (SWE-bench 73.8) sont des pièges. La vraie question n'est pas 'qui gagne sur HumanityLastExam' mais 'quel modèle génère du ROI positif sur mes cas d'usage réels'. GLM-4.7 gagne parce qu'il coûte 10x moins cher, pas parce qu'il est 10x meilleur.
- Insight 4 : Le 'preserved thinking' est une réponse à un problème fondamental des LLM : la dilution du raisonnement sur plusieurs tours. C'est une admission que les modèles oublient leur propre logique—GLM-4.7 force le modèle à garder le fil conducteur explicitement.
- Insight 5 : L'hallucination culturelle n'est pas un bug, c'est une feature révélatrice. Elle montre que les modèles chinois sont optimisés pour le marché chinois (données d'entraînement, benchmarks locaux), ce qui signifie qu'ils vont dominer en Asie avant les États-Unis.

## Mental models

- {'modele': "Modèle de l'activation sélective", 'description': "Pense à une équipe de 10 experts (mathématicien, codeur, linguiste, etc.). Au lieu de les faire tous réfléchir à chaque problème (coûteux, lent), un routeur intelligent sélectionne les 3-4 experts pertinents. C'est plus rapide, moins cher, et souvent plus précis. GLM-4.7 fonctionne exactement comme ça : 355B paramètres = 10 experts, 32B activés = 3-4 experts sélectionnés."}
- {'modele': 'Modèle du coût caché', 'description': "Quand tu paies 20$ pour Claude, tu ne paies pas juste les tokens—tu paies l'activation de TOUS les paramètres du modèle. Quand tu paies 3$ pour GLM-4.7, tu paies seulement l'activation des experts pertinents. C'est comme payer un restaurant où tu ne paies que pour les cuisiniers qui ont travaillé sur ton plat, pas pour tous les cuisiniers de la cuisine."}
- {'modele': 'Modèle de la probabilité sémantique', 'description': "Chaque mot que tu écris dans un prompt active certains experts avec une probabilité. Un prompt vague (ex: 'fais un site') active les mauvais experts. Un prompt déterministe et technique (ex: 'fais un site HTML/CSS/JS avec Tailwind, dark mode, animations Framer Motion') active les bons experts. Le prompteur qui comprend cette mécanique probabiliste extrait 10x plus de valeur."}
- {'modele': 'Modèle de la souveraineté technologique', 'description': "Open weight = tu télécharges les poids, tu les héberges chez toi, tu les modifies, tu les contrôles. Propriétaire (Claude API) = tu dépends d'Anthropic, tu ne vois pas les poids, tu es vulnérable aux changements de pricing/politique. Pour les entreprises qui veulent du contrôle, GLM-4.7 est irrésistible même s'il est moins bon techniquement."}
- {'modele': 'Modèle de la disruption par le coût', 'description': "La disruption ne vient pas toujours de la supériorité technologique (meilleur = 10% mieux) mais de la supériorité économique (moins cher = 10x moins cher). GLM-4.7 ne doit pas être 10x meilleur pour gagner—il doit juste être 'assez bon' et 10x moins cher. C'est la stratégie classique des disrupteurs (Tesla vs BMW, Airbnb vs Hilton)."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Protocoles spécifiques sortis de Deepseek et Zhipu AI cette année
- Sujet mentionné mais non développé : Détails techniques complets de l'IPO Hong Kong de Zhipu AI
- Question ouverte : Quels seront les modèles chinois open source qui vont 'trembler les marchés' en 2026 ?
- Sujet mentionné mais non développé : Comparaison détaillée avec Deepseek V3.2 au-delà des benchmarks
- Question ouverte : Comment les régulations européennes vont-elles impacter l'adoption de GLM 4.7 ?
- Sujet mentionné mais non développé : Cas d'usage spécifiques rentables au-delà des landing pages
- Implication non-dite 1 : Si GLM-4.7 coûte 3$/mois et que Claude coûte 20-30$, cela signifie que Zhipu AI a soit une marge brute inférieure (moins rentable) soit une efficacité de coût de calcul supérieure (avantage technologique durable). La vidéo ne clarifie pas lequel.
- Implication non-dite 2 : L'IPO Hong Kong de Zhipu AI en 2026 suggère que le modèle est une arme géopolitique chinoise. Les sanctions US pourraient couper l'accès aux chips NVIDIA, rendant GLM-4.7 inaccessible du jour au lendemain—risque existentiel non mentionné.
- Implication non-dite 3 : Si les développeurs adoptent massivement GLM-4.7 open weight, ils deviennent dépendants d'une infrastructure chinoise. Cela crée un risque de rétorsion (données exfiltrées, modèle dégradé, support coupé) que les entreprises occidentales ne peuvent pas se permettre.
- Ce qu'on peut en déduire : La vraie bataille n'est pas technique mais économique et politique. Zhipu AI gagne en 2026 non parce que GLM-4.7 est meilleur mais parce que le coût-performance est irrésistible pour les startups et les développeurs indépendants qui ne peuvent pas se payer Claude.
- Ce qu'on peut en déduire : Les modèles américains (Claude, GPT-4) vont être forcés de baisser les prix ou d'offrir des avantages non-technologiques (support, compliance, souveraineté) pour rester compétitifs. La guerre des prix a commencé.

## Ce que tu peux faire maintenant

- [ ] Accès immédiat : Va sur try.glm4.ai et teste GLM-4.7 avec un prompt déterministe et technique (ex: 'Crée une landing page HTML/CSS/JS pour un SaaS de gestion de tâches, dark mode, animations Framer Motion, prêt à publier'). Compare la qualité et la vitesse avec Claude.
- [ ] Évaluation pratique : Prends un cas d'usage réel où tu utilises Claude (landing page, dashboard, intégration paiement) et teste-le sur GLM-4.7. Mesure le temps de réponse, la qualité du code, et le coût. Calcule le ROI.
- [ ] Intégration : Si GLM-4.7 passe le test, intègre-le via Open Router ou Cursor Code. Commence par les tâches non-critiques (landing pages, documentation) avant les tâches critiques (backend, sécurité).
- [ ] Prompting optimisé : Apprends à écrire des prompts déterministes qui activent les bons experts. Exemple : au lieu de 'fais un site', écris 'fais un site HTML/CSS/JS avec Tailwind, dark mode, animations Framer Motion, formulaire de contact avec validation, prêt à publier sur Vercel'.
- [ ] Utilise preserved thinking : Pour les conversations longues et complexes (ex: design d'une architecture logicielle), utilise le mode preserved thinking pour que le modèle garde le fil du raisonnement.
- [ ] Benchmark personnel : Crée tes propres benchmarks basés sur tes cas d'usage réels, pas sur les benchmarks papier. Mesure : temps de réponse, qualité du code, coût par requête, satisfaction utilisateur.
- [ ] Surveillance géopolitique : Suis les actualités sur les sanctions US contre les chips chinois et l'IPO de Zhipu AI. Si les sanctions arrivent, GLM-4.7 devient inaccessible—prépare un plan B.
- [ ] Expérimentation : Teste les trois modes (deep thinking, flash mode, preserved thinking) sur différents cas d'usage et note lequel donne le meilleur ROI pour chaque type de requête.

## Business & Monétisation

- Arbitrage de coût : Si tu utilises Claude à 20-30$/mois et que tu passes à GLM-4.7 à 3$/mois, tu économises 85-90% sur les coûts d'IA. Pour une agence avec 50 clients, c'est 50 * 27$ * 12 = 16 200$ d'économies par an. Réinvestis dans la qualité ou la marge.
- Différenciation produit : Intègre GLM-4.7 dans ton SaaS et offre des prix 3x moins chers que tes concurrents qui utilisent Claude. Exemple : au lieu de 99$/mois, tu peux offrir 33$/mois et garder la même marge.
- Souveraineté technologique : Vends à des entreprises européennes/asiatiques qui veulent éviter la dépendance aux APIs américaines. GLM-4.7 open weight = contrôle total, pas de risque de censure/sanctions.
- Cas d'usage rentables : Landing pages, dashboards, intégrations paiement, chatbots, documentation auto-générée. Ces tâches ne nécessitent pas la perfection—elles nécessitent la rentabilité. GLM-4.7 gagne sur tous ces fronts.
- Modèle freemium : Offre GLM-4.7 en free tier (limité) et Claude en premium tier (illimité). Les utilisateurs gratuits vont tester, certains vont upgrader, d'autres vont rester gratuits mais vont te recommander.
- Consulting : Aide les entreprises à migrer de Claude vers GLM-4.7. Charge pour l'audit, la migration, l'optimisation des prompts, et le support. C'est un service à forte marge.
- Monitoring et alertes : Crée un service qui monitore la performance de GLM-4.7 vs Claude en temps réel et alerte les clients si GLM-4.7 se dégrade (risque géopolitique). Charge un abonnement mensuel.
- Arbitrage géopolitique : Si les sanctions US arrivent et que GLM-4.7 devient inaccessible, tu as une opportunité de vendre des solutions de fallback (Claude, GPT-4) à un prix premium aux entreprises qui dépendaient de GLM-4.7.

## Définitions

- **Mixture of Experts (MOE)** : Architecture où un modèle avec 355 milliards de paramètres n'active que 32 milliards ultra-spécialisés par requête, rendant le traitement plus rapide et moins coûteux
- **Open weight** : Les poids du modèle sont téléchargeables et modifiables, contrairement à une API propriétaire, donnant liberté totale aux développeurs
- **Preserved thinking** : Mode de pensée qui garde le fil du raisonnement sur plusieurs tours de conversation, maintenant la logique initiale
- **Context window** : Capacité de mémoire du modèle : 200 000 tokens en entrée (200-300 pages), 128 000 en sortie (100 pages)
- **Hallucination culturelle** : Tendance du modèle à générer des informations erronées sur des faits spécifiques hors de Chine
- **Routing system** : Mécanisme intelligent qui sélectionne les experts spécialisés appropriés selon la nature de la requête

## Outils & techniques mentionnés

- **GLM 4.7** : Modèle IA chinois open weight pour coding et raisonnement complexe
- **Zhipu AI** : Entreprise chinoise développant GLM 4.7, préparant IPO à Hong Kong
- **Claude 4.5 Sonnet** : Modèle concurrent américain d'Anthropic
- **GPT-4 Turbo** : Modèle OpenAI de référence antérieur
- **Gemini 3 Pro** : Modèle Google concurrent
- **Deepseek** : Modèle chinois concurrent en open source
- **Open Router** : Plateforme d'intégration de modèles IA
- **Cursor Code** : IDE avec intégration IA
- **Spec Kit** : Framework technique pour projets complexes
- Mixture of Experts (MOE) avec 355 milliards de paramètres, 32 milliards activés par requête
- Routing system intelligent pour sélectionner experts spécialisés
- Deep thinking pour problèmes complexes et mathématiques
- Flash mode pour conversations rapides
- Preserved thinking pour maintenir fil conducteur sur plusieurs tours
- Context window de 200 000 tokens en entrée, 128 000 en sortie
- Prompting probabiliste pour activer bons experts
- Benchmarking (SWE-bench, HumanityLastExam, LiveCodeBench)

## Connexions avec d'autres sujets IA

- Prompting avancé : Comment écrire des prompts qui activent les bons experts dans une architecture MOE. Lien direct avec la philosophie du prompting probabiliste.
- Fine-tuning et adaptation : Si GLM-4.7 est open weight, tu peux le fine-tuner sur tes données. Cela ouvre des possibilités de personnalisation que Claude (propriétaire) ne permet pas.
- Évaluation de modèles : Comment évaluer réellement un modèle au-delà des benchmarks papier. Lien avec la méthodologie d'évaluation pratique vs académique.
- Géopolitique et IA : Comment la géopolitique (sanctions, IPO, données) influence le développement et l'adoption des modèles IA. Lien avec la stratégie long-terme.
- Architecture des LLM : Comprendre MOE c'est comprendre comment les modèles modernes optimisent l'efficacité. Lien avec les architectures Transformer, attention, etc.
- Coût de calcul et efficacité énergétique : MOE est une révolution d'efficacité énergétique. Lien avec la durabilité et le coût environnemental de l'IA.
- Souveraineté technologique : Open weight vs propriétaire est une question de contrôle et de dépendance. Lien avec la stratégie d'entreprise et la gestion des risques.
- Adoption et disruption : Comment un modèle moins bon techniquement peut dominer le marché par le coût. Lien avec la théorie de la disruption (Clayton Christensen).

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionnent les LLM de base (tokens, paramètres, entraînement). (2) La différence entre une API propriétaire et un modèle open source. (3) Les concepts de benchmarking et ses limites. (4) La notion de coût de calcul et d'efficacité. (5) Les bases du prompting et comment les modèles répondent aux instructions. Si tu ne maîtrises pas ces concepts, commence par des vidéos d'introduction aux LLM avant de regarder celle-ci. Cette vidéo suppose que tu comprends déjà comment les modèles fonctionnent—elle te montre comment GLM-4.7 les optimise différemment.

## Citations notables

> GLM 4.7, c'est le modèle chinois qui coûte 3 dollars par mois et qui bat Claude en code sur le papier

> C'est pas juste une API que tu peux louer, c'est en fait les poids du modèle qui sont téléchargeables

> Si quelqu'un te dit je suis un expert en IA, tu dis c'est quoi une architecture mixture of expert ?

> À quoi ça sert de faire raisonner 10 personnes si on sait déjà lesquels il faut faire activer ?

> GLM 4.7 n'est pas l'avenir, c'est le présent

> Prix cassé plus performance, c'est égal adoption explosive

> On veut facturer, on est là pour rentabiliser l'outil, on n'est pas là pour dire waouh, ça fait du beau code

> Faut arrêter les conneries là et en plus ils te font pas cher
