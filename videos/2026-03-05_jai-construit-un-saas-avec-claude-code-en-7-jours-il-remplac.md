# J'ai construit un SaaS avec Claude Code en 7 jours (il remplace 5 métiers)

**Date** : 2026-03-05 | **Durée** : 12:21 | **Niveau** : avancé | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔵 technique
**URL** : https://www.youtube.com/watch?v=ocy-oQQ0tsw

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi l'IA seule ne suffit pas | section Philosophie IA et Mental Models |
| construire un SaaS similaire | section Ce que tu peux faire maintenant et Concepts clés expliqués |
| optimiser les coûts d'une orchestration IA | section Insights non-évidents et Business monétisation |
| maîtriser le prompting par étape | section Ouvertures et Connexions avec autres sujets IA |

## Résumé

Un créateur YouTube présente un SaaS qu'il a développé en une semaine avec Claude Code pour automatiser la création de contenu. L'application remplace 5 métiers (designer, copywriter, community manager, SEO specialist, directeur artistique) en générant automatiquement des miniatures YouTube, des métadonnées optimisées et des publications pour LinkedIn/School/YouTube à partir d'un simple contexte vidéo. Le coût total est inférieur à 1 euro par vidéo (au lieu de 40 euros précédemment), et le système utilise une orchestration avancée de modèles IA via Open Router et Ki.ai avec monitoring complet des coûts et logs en base de données Supabase.

## Schéma conceptuel

```
CONTEXTE VIDÉO
     |
     v
[Métadonnées] -> [Directions Artistiques] -> [Textes Miniatures]
     |                    |                          |
     v                    v                          v
  GPT-4.5            Nano Banana 2          Claude 3.5 Sonnet
     |                    |                          |
     +-----> ORCHESTRATION AVANCÉE <-------+
              (Open Router + Ki.ai)
                    |
                    v
         [Batch Generation x10-20]
                    |
                    v
         [Sélection + A/B Testing]
                    |
                    v
      [Publications LinkedIn/YouTube]
                    |
                    v
    [Monitoring Coûts + Logs Supabase]
                    |
                    v
            RÉSULTAT: <1€/vidéo
            (vs 40€ avant)
```

## Chapitres inférés

### Acte 1 — Problème et solution (0:00-1:30)
Avant : paiement de 40€ par miniature à des freelances, processus manuel des métadonnées, dépendance et allers-retours. Après : moins de 2€ (en réalité <1€), 100% autonome, instantané, un seul clic, tout automatisé

### Acte 2 — Les 5 métiers remplacés et nuance importante (1:30-3:00)
Thumbnail Designer, Copywriter YouTube, Community Manager, SEO Specialist, Directeur Artistique. Nuance : ce n'est pas l'IA qui remplace tout, c'est les compétences techniques + IA qui changent les règles du jeu

### Acte 3 — Démonstration du workflow complet (3:00-8:00)
Étapes 1-11 : contexte → métadonnées → directions artistiques → textes miniatures → génération images → sélection → compression → publications → monitoring des coûts (74 centimes pour la démo)

### Acte 4 — Architecture technique et backend (8:00-10:30)
Orchestration avancée avec Open Router (500+ modèles), Supabase pour stockage, monitoring détaillé des coûts par étape, logs complets, paramètres modifiables (température, max retry, résolution, modèles), images de référence, prompts personnalisés

### Acte 5 — Conclusion et appel à l'action (10:30-fin)
Résumé du ROI (40€ → <1€), invitation à liker/partager/s'abonner, lien pour apprendre à créer le SaaS ou le vendre comme service

## Philosophie IA & Pensée profonde

L'IA n'est pas un remplacement magique mais un multiplicateur de compétences techniques : elle nécessite une maîtrise préalable du domaine et une orchestration intelligente des modèles pour chaque tâche spécifique. Le vrai pouvoir réside dans la capacité à monitorer, benchmarker et adapter dynamiquement les modèles selon les résultats et les coûts, transformant l'IA en outil de production scalable et mesurable.

Cette vidéo démontre que l'IA n'est pas un remplacement magique mais un multiplicateur de compétences : en orchestrant intelligemment plusieurs modèles IA (GPT-4.5, Claude, Nano Banana 2) via Open Router et Ki.ai, un développeur technique peut automatiser 5 métiers créatifs (designer, copywriter, SEO, community manager, directeur artistique) en une semaine, réduisant le coût de production de 40€ à <1€ par vidéo. Le vrai pouvoir réside dans la capacité à monitorer, benchmarker et adapter dynamiquement les modèles selon les résultats mesurables, transformant l'IA en outil de production scalable et rentable.

## Prompting & Sagesse d'usage

- Donner un contexte riche et détaillé à l'IA (pas juste un titre, mais la description complète de la vidéo) améliore significativement la qualité des métadonnées générées
- Utiliser des images de référence (face, profil) pour la génération d'images améliore la fidélité et la cohérence visuelle
- Générer par batch (5-20 images à la fois) plutôt que séquentiellement permet de sélectionner les meilleures et de faire de l'A/B testing
- Orchestrer différents modèles IA pour différentes étapes (GPT-4.5 pour métadonnées, Nano Banana 2 pour images, Claude pour publications) optimise le rapport qualité/coût
- Toujours monitorer les coûts et logs détaillés pour pouvoir benchmarker rapidement quand un nouveau modèle sort et décider si le changement est rentable
- Laisser la possibilité de modifier/désélectionner les outputs générés (titres, textes miniatures) car l'IA ne capture pas toujours 100% de la vision créative

## Concepts clés expliqués

### Orchestration avancée de modèles IA
Capacité à choisir un modèle IA différent pour chaque étape du workflow (GPT-4.5 pour métadonnées, Nano Banana 2 pour images, Claude pour publications) et les changer dynamiquement selon les besoins et les coûts. C'est l'inverse de 'utiliser un seul modèle pour tout'.
**Pourquoi c'est important** : Chaque modèle a des forces différentes. GPT-4.5 excelle en raisonnement textuel, Nano Banana 2 en génération d'images avec références, Claude en cohérence narrative. Orchestrer = optimiser le rapport qualité/coût pour chaque tâche.

### Batch generation
Générer 10-20 images simultanément au lieu de les générer une par une séquentiellement. Coûte ~2-3x plus cher en API mais permet de sélectionner les meilleures et de faire de l'A/B testing.
**Pourquoi c'est important** : C'est une stratégie de variance contrôlée : tu acceptes que l'IA soit variable, mais tu canalises cette variance vers la qualité en générant plusieurs options et en sélectionnant les meilleures. C'est plus efficace que d'optimiser un seul prompt.

### Monitoring des coûts en temps réel
Afficher le coût exact de chaque étape (74 centimes pour la démo complète) et stocker tous les logs en base de données. Permet de benchmarker rapidement quand un nouveau modèle sort et de décider si le changement est rentable.
**Pourquoi c'est important** : Sans monitoring, tu ne sais pas où va ton argent et tu ne peux pas optimiser. Avec monitoring, chaque vidéo produite est une donnée qui améliore les futurs workflows. C'est la différence entre utiliser l'IA et l'optimiser.

### Directions artistiques générées par IA
4 univers visuels générés automatiquement (palettes de couleurs, éclairage, style) adaptés au contexte de la vidéo. L'utilisateur en sélectionne une pour guider la génération des miniatures.
**Pourquoi c'est important** : Cela élimine une étape créative manuelle (définir l'univers visuel) tout en donnant des options à l'utilisateur. C'est un exemple de 'IA génère des options, humain décide'.

### Images de référence pour améliorer la génération
Utiliser une image de face et une image de profil comme références pour la génération d'images. Cela force le modèle à générer dans un espace de solution plus restreint mais plus cohérent.
**Pourquoi c'est important** : C'est une contrainte structurelle qui réduit la variance et améliore la fidélité. Au lieu de dire 'génère une personne', tu dis 'génère une personne qui ressemble à cette face et ce profil'. C'est plus efficace que d'optimiser le prompt seul.

### Métadonnées optimisées
Titres, descriptions, tags et hashtags générés par IA pour optimiser le référencement humain, l'algorithme IA et le SEO. Générés à partir du contexte riche de la vidéo (pas juste le titre).
**Pourquoi c'est important** : Les métadonnées sont invisibles mais critiques pour la découverte. L'IA peut générer des variantes rapidement et les tester. C'est un multiplicateur de portée sans coût additionnel.

### Prompting entraîné et optimisé
Utiliser des prompts spécifiques et testés pour chaque étape du workflow, avec des instructions détaillées et des critères de sélection. Ce n'est pas 'écrire une bonne instruction', c'est architecturer une séquence d'étapes.
**Pourquoi c'est important** : Un bon prompt peut multiplier la qualité par 2-3x sans changer le modèle. C'est l'outil le plus accessible et le plus puissant pour optimiser l'IA. Mais cela nécessite de l'expérimentation et du monitoring.

## Insights non-évidents

- Insight 1 : Le vrai coût n'est pas dans l'IA mais dans le temps d'orchestration et de prompting. Le créateur a passé une semaine à configurer les workflows, pas à générer du contenu. C'est un investissement initial qui se rentabilise à chaque vidéo.
- Insight 2 : La génération par batch (10-20 images au lieu de 1) n'est pas juste une optimisation de vitesse, c'est une stratégie de sélection : cela permet de faire de l'A/B testing et de choisir les meilleures, augmentant la qualité perçue sans augmenter le coût unitaire significativement.
- Insight 3 : Le monitoring des coûts en temps réel (74 centimes affichés) n'est pas une vanité, c'est une capacité de benchmarking : quand un nouveau modèle sort, il peut tester instantanément si le changement est rentable. C'est la différence entre utiliser l'IA et l'optimiser.
- Insight 4 : Les images de référence (face/profil) ne sont pas des 'prompts visuels' mais des contraintes structurelles : elles forcent le modèle à générer dans un espace de solution plus restreint mais plus cohérent, réduisant la variance et améliorant la fidélité.
- Insight 5 : La nuance 'ce n'est pas l'IA qui remplace, c'est les compétences techniques + IA' implique que sans compétences techniques (architecture, prompting, monitoring), l'IA génère du bruit. Le créateur aurait pu faire un SaaS sans IA, mais l'IA le rend 40x moins cher.

## Mental models

- {'modele': "L'IA comme multiplicateur, pas remplacement", 'description': "Ne pense pas 'l'IA remplace le designer', pense 'l'IA multiplie ma capacité de designer par 40 en réduisant le coût de 40€ à 1€'. Le designer (ou le créateur) reste au centre, l'IA est l'outil qui élimine la friction."}
- {'modele': 'Orchestration > Modèle unique', 'description': "Ne cherche pas le 'meilleur modèle IA'. Cherche le meilleur modèle pour chaque étape du workflow. GPT-4.5 pour les métadonnées, Nano Banana 2 pour les images, Claude pour les publications. C'est l'orchestration qui crée la valeur, pas le modèle."}
- {'modele': 'Batch generation comme stratégie de sélection', 'description': "Générer 20 images au lieu de 1 n'est pas 20x plus cher (c'est ~2-3x plus cher en API). Mais cela te permet de sélectionner les 3 meilleures pour A/B testing. C'est une stratégie de variance contrôlée : tu acceptes la variance de l'IA et tu la canalises vers la qualité."}
- {'modele': 'Monitoring = Optimisation continue', 'description': "Afficher les coûts (74 centimes) n'est pas une vanité, c'est une capacité de benchmarking. Chaque vidéo produite est une donnée : quel modèle a coûté combien, quel prompt a produit quel résultat. C'est une boucle d'apprentissage qui améliore le ROI à chaque itération."}
- {'modele': 'Prompting comme architecture logicielle', 'description': "Le prompting n'est pas 'écrire une bonne instruction'. C'est architecturer une séquence d'étapes où chaque étape a un prompt spécifique, des paramètres (température, max retry), un modèle assigné, et des critères de sélection. C'est de l'ingénierie, pas de la rédaction."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment exactement les images de référence (face/profil) améliorent la fidélité de génération avec Nano Banana 2
- Sujet mentionné mais non développé : Les détails du prompting entraîné utilisé pour chaque étape (métadonnées, directions artistiques, textes miniatures)
- Question ouverte laissée sans réponse : Quel est le taux de satisfaction/utilité réel des 4 directions artistiques générées (combien sont réellement utilisables)
- Sujet mentionné mais non développé : Comment gérer les cas où l'IA génère du contenu hors-brand ou non pertinent malgré les références et prompts
- Question ouverte laissée sans réponse : Quel est le processus exact de sélection des 3 meilleures miniatures parmi 10-20 (critères objectifs ou subjectifs)
- Implication non-dite 1 : Si le coût passe de 40€ à <1€, cela signifie que les 5 métiers remplacés (designer, copywriter, SEO specialist, etc.) ne créaient pas 40€ de valeur unique, mais plutôt 40€ de friction administrative et de délais. L'IA supprime la friction, pas la créativité.
- Implication non-dite 2 : Le système nécessite une sélection humaine à chaque étape (métadonnées, directions artistiques, textes miniatures, miniatures finales). Cela signifie que l'IA génère des options, pas des décisions. Le créateur reste le décideur.
- Implication non-dite 3 : Supabase stocke 'toutes les générations avec coûts'. Cela implique que le créateur peut analyser rétrospectivement quel modèle, quelle température, quel prompt a produit les meilleures miniatures. C'est une boucle d'apprentissage continu, pas une automatisation statique.
- Ce qu'on peut en déduire : Le SaaS n'est pas un produit fini mais un système d'expérimentation. Chaque vidéo produite est une donnée qui améliore les futurs workflows. C'est un avantage compétitif durable.
- Ce qu'on peut en déduire : La capacité à changer dynamiquement de modèles IA par étape (GPT-4.5 vs Claude vs DeepSeek) signifie que le créateur n'est pas verrouillé à un fournisseur. C'est une stratégie de résilience et d'optimisation continue.

## Ce que tu peux faire maintenant

- [ ] Identifier 3 tâches répétitives dans ton workflow créatif (design, copywriting, SEO, community management) et estimer leur coût actuel. Puis, construire un workflow IA simple avec Open Router pour automatiser une seule tâche et mesurer le coût réel.
- [ ] Créer un prompt spécifique pour une étape de ton workflow (ex: générer des titres YouTube optimisés). Tester 3 variantes du prompt avec le même modèle et comparer les résultats. Cela te montrera l'impact du prompting sans changer le modèle.
- [ ] Mettre en place un monitoring basique des coûts API : utilise une feuille de calcul ou une base de données simple pour tracker le coût de chaque génération. Cela te permettra de benchmarker rapidement quand un nouveau modèle sort.
- [ ] Tester la batch generation : au lieu de générer 1 image, génère 5-10 images et sélectionne les meilleures. Mesure le coût additionnel et compare la qualité perçue. Cela te montrera si la stratégie est rentable pour ton cas d'usage.
- [ ] Construire un workflow simple avec 2-3 modèles IA différents (ex: GPT-4.5 pour métadonnées, Nano Banana 2 pour images, Claude pour publications). Cela te montrera l'impact de l'orchestration vs l'utilisation d'un seul modèle.
- [ ] Documenter ton prompting : pour chaque étape de ton workflow, écris le prompt exact, les paramètres (température, max retry), le modèle utilisé, et les critères de sélection. Cela te permettra de reproduire et d'optimiser rapidement.
- [ ] Créer une boucle de feedback : après chaque génération, note ce qui a bien marché et ce qui n'a pas marché. Utilise ces données pour affiner tes prompts et tes paramètres. C'est une boucle d'apprentissage continu.

## Business & Monétisation

- Vendre le SaaS comme service : au lieu de le garder pour soi, le créateur peut le vendre à d'autres créateurs YouTube. À 10-20€/mois par utilisateur, avec un coût de <1€ par vidéo, la marge est énorme.
- Vendre comme template ou course : créer une course ou un template pour apprendre à construire un SaaS similaire. Le créateur a mentionné 'Premier lien dans la description (page d'explication complète du SaaS)', ce qui suggère une monétisation par éducation.
- Arbitrage de coûts : si le créateur peut réduire le coût de 40€ à <1€, il peut vendre le service à 5-10€ et garder une marge de 4-9€ par vidéo. Avec 100 clients générant 1 vidéo/semaine, c'est 20k-45k€/mois de marge brute.
- Optimisation continue comme avantage compétitif : le monitoring des coûts et des logs permet au créateur de rester en avance sur la courbe des modèles IA. Quand un nouveau modèle sort, il peut tester et adapter en heures, pas en semaines. C'est un avantage durable.
- Vendre l'expertise en orchestration IA : le vrai produit n'est pas le SaaS, c'est la capacité à orchestrer plusieurs modèles IA pour une tâche spécifique. Le créateur peut vendre du consulting ou du training sur cette compétence.

## Définitions

- **Orchestration avancée** : Capacité à choisir un modèle IA différent pour chaque étape du workflow (métadonnées, images, publications) et les changer dynamiquement selon les besoins
- **Directions artistiques** : 4 univers visuels générés automatiquement (palettes de couleurs, éclairage, style) adaptés au contexte de la vidéo
- **Métadonnées optimisées** : Titres, descriptions, tags et hashtags générés par IA pour optimiser le référencement humain, algorithme IA et SEO
- **Batch generation** : Génération simultanée de plusieurs images (5, 10, 20) au lieu de les générer une par une séquentiellement

## Outils & techniques mentionnés

- **Claude Code** : Framework de développement utilisé pour créer le SaaS en une semaine
- **Ki.ai** : Passerelle multimodale pour génération d'images, vidéos et audio (équivalent Open Router pour le multimodal)
- **Open Router** : Agrégateur de modèles IA (500+ modèles) pour orchestration flexible des étapes
- **Nano Banana 2** : Modèle de génération d'images avec support des références visuelles
- **Supabase** : Base de données pour stocker les générations, sessions et métadonnées
- **GPT-4.5 / Claude 3.5 Sonnet / DeepSeek V3.2** : Modèles IA interchangeables pour génération de métadonnées et publications
- **VS Code** : Environnement de développement du projet
- Génération par batch d'images (5 à la fois au lieu de 1 par 1)
- Compression et optimisation d'images (format 2K, réduction de poids)
- Prompting avec instructions spécifiques par étape
- Utilisation d'images de référence (face et profil) pour améliorer la fidélité
- Mapping de sessions pour tracer chaque génération
- Stockage en base de données de toutes les générations avec coûts
- Changement dynamique de modèles IA par étape
- Ajustement de température et max retry par étape
- Génération de textes spécifiques pour miniatures (feature custom)

## Connexions avec d'autres sujets IA

- Prompting avancé : cette vidéo montre que le prompting n'est pas juste 'écrire une bonne instruction', c'est architecturer une séquence d'étapes avec des prompts spécifiques, des paramètres et des critères de sélection.
- Fine-tuning vs prompting : le créateur utilise des prompts optimisés au lieu de fine-tuner les modèles. C'est une décision d'ingénierie : le prompting est plus flexible et plus rapide à itérer.
- Multimodal AI orchestration : utiliser Ki.ai comme 'passerelle multimodale' pour génération d'images, vidéos et audio. C'est une tendance vers l'orchestration de modèles multimodaux, pas juste texte.
- API aggregators (Open Router) : cette vidéo montre l'importance des agrégateurs d'API comme Open Router. Ils permettent de changer dynamiquement de modèles sans refactoriser le code.
- Cost optimization in AI : le monitoring des coûts et la batch generation sont des stratégies de cost optimization. C'est un sujet critique pour la scalabilité des SaaS IA.
- Human-in-the-loop AI : chaque étape du workflow a une sélection humaine (métadonnées, directions artistiques, miniatures). C'est un exemple de 'IA génère des options, humain décide'.
- Feedback loops and continuous improvement : le stockage de tous les logs et coûts en Supabase permet une boucle d'apprentissage continu. C'est la base de l'optimisation IA à long terme.
- Workflow automation : cette vidéo est un exemple de workflow automation avec IA, pas juste 'utiliser ChatGPT'. C'est une compétence critique pour les développeurs IA.

## Prérequis de compréhension

Avant d'absorber cette vidéo, tu dois comprendre : (1) Les bases des modèles IA (GPT, Claude, modèles de génération d'images) et leurs différences de coûts et de qualité. (2) Le concept de prompting et comment les instructions affectent la qualité des outputs. (3) Les APIs et comment les intégrer dans une application (REST, webhooks, rate limiting). (4) Les concepts de base de données (stockage, requêtes, logs). (5) La notion de 'orchestration' : choisir le bon outil pour la bonne tâche. (6) Un mindset d'optimisation : mesurer, benchmarker, itérer. Si tu es complètement nouveau en IA, commence par comprendre comment fonctionne un modèle de langage et comment le prompting affecte les résultats. Si tu es nouveau en développement, apprends les bases des APIs et des bases de données. Cette vidéo suppose que tu peux lire du code et que tu comprends l'architecture logicielle.

## Citations notables

> c'est pas l'IA remplace tout, c'est les compétences techniques plus l'IA qui changent les règles du jeu

> il faut quand même maîtriser la compétence technique, il ne faut pas être à zéro techniquement

> je peux venir le benchmarker et voir exactement combien ça coûte

> c'est un vrai use case concret que j'utilise, c'est pour moi le meilleur SaaS que j'ai pu développer pour moi

> avant je payais 40 euros plus je ne sais combien de temps maintenant ça me coûte moins de 1 euro
