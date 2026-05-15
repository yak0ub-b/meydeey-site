# Claude Code + Remotion DÉTRUIT After Effects : 10 vidéos en 2 min

**Date** : 2026-03-29 | **Durée** : 23:22 | **Niveau** : intermédiaire | **Catégorie** : Claude Code — Tutos & Pratique | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=k4_ZG1cAEXI

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi l'IA peut remplacer la créativité | section Philosophie IA |
| apprendre à générer ta première vidéo | section Ce que tu peux faire maintenant |
| explorer les implications business et éthiques | section Business Monétisation et Ce qu'il ne dit pas |
| maîtriser le prompting efficace | section Mental Models |

## Résumé

ReMotion est un framework open source qui permet de générer des vidéos MP4 en écrivant du code React. Combiné avec Claude Code (IA générative), il automatise complètement la création vidéo : l'utilisateur écrit un prompt en langage naturel, Claude Code génère le code React+ReMotion, qui s'exécute dans un navigateur headless et produit une vidéo. Contrairement aux outils traditionnels (After Effects, Premiere Pro), c'est 100% automatisable, gratuit, et le code est réutilisable. L'orateur prédit que 2027 sera l'année où le montage vidéo sera entièrement remplacé par l'IA.

## Schéma conceptuel

```
PIPELINE RÉALITÉ NOUVELLE vs ANCIENNE

┌─ AVANT (After Effects) ─────────────────┐
│ Idée → Monteur (8h) → Fichier → MP4    │
│ Coût: 800-3000€ | Temps: jours         │
└────────────────────────────────────────┘
                    ↓ DISRUPTION
┌─ MAINTENANT (ReMotion + Claude) ───────┐
│ Prompt texte → Claude Code              │
│        ↓                                 │
│ Code React déterministe                 │
│        ↓                                 │
│ Navigateur headless (localhost:3000)    │
│        ↓                                 │
│ FFmpeg → MP4 H.264                      │
│ Coût: 0€ | Temps: 2-5 min              │
│ Réutilisable à l'infini                │
└────────────────────────────────────────┘
        ↓ IMPLICATION
   Créativité = Mathématique
   Donc: Remplaçable par IA
```

## Chapitres inférés

### Acte 1 — Démonstration initiale et promesse
Génération d'une vidéo complète (Nova Pro) en quelques secondes via un prompt unique, montrant le résultat final avec animations, transitions, audio et texte

### Acte 2 — Explication technique et architecture
Clarification que ReMotion n'est pas de l'IA générative mais du code déterministe React; architecture du pipeline (prompt → Claude Code → navigateur headless → FFmpeg → MP4)

### Acte 3 — Comparaison avec outils traditionnels
Tableau comparatif After Effects/Premiere Pro vs ReMotion+Claude Code sur prix, automatisation, courbe d'apprentissage; coût motion designer (800-3000€) vs 0€

### Acte 4 — Installation et setup pratique
Commandes npx, choix de templates, installation de skills depuis skills.sh, configuration du projet dans VS Code/Warp

### Acte 5 — Démonstration de prompting
Technique icebreaker avec prompt imparfait, utilisation des skills ReMotion YouTube Intro et Best Practice pour améliorer automatiquement la qualité

### Acte 6 — Démonstration massive (10 compositions)
Génération parallèle de 10 vidéos différentes (compteur stats, carte avis, avant-après, TikTok countdown, terminal hacker, marque luxe, dashboard data, notifications, code review, API explainer)

### Acte 7 — Démythification et prédictions
Clarification qu'on n'a pas besoin d'être développeur; prédiction 2027 comme année du montage vidéo; affirmation que la créativité des monteurs sera remplacée par l'IA car elle est déterministe/mathématique

### Acte 8 — Vision future et multi-session
Plans internes : multi-session Claude Code parallèle, boucles pour 10 vidéos en 3 minutes, intégration voix IA (Eleven Labs), clonage de voix, vidéos longues multisènes

### Acte 9 — Exploration de l'écosystème ReMotion
Site officiel, templates disponibles, système d'assets (PNG, SVG), 3D avec React Three, visualisations musicales, documentation, Discord

### Acte 10 — Conclusion et appel à l'action
Invitation à rejoindre groupe gratuit (4000+ membres), préparation aux changements 2026-2027, affirmation que les métiers de monteur/motion designer vont être disrupted

## Philosophie IA & Pensée profonde

L'IA n'invente pas vraiment : elle applique une logique mathématique/déterministe basée sur des patterns appris (cause-effet). La créativité d'un monteur humain est elle-même déterministe et réplicable via l'IA en ajustant la température (probabilité créative). Donc l'IA peut non seulement remplacer le montage, mais aussi absorber et reproduire la 'patte créative' d'un artiste en la codifiant dans des skills réutilisables.

ReMotion + Claude Code transforme la création vidéo d'un processus créatif manuel (After Effects) en un pipeline automatisé et déterministe : tu décris en langage naturel, l'IA génère du code React exécutable, et tu obtiens une vidéo MP4 en secondes. Cela révèle que la 'créativité' du montage vidéo est en réalité une logique mathématique réplicable, ce qui signifie que 2027 marquera l'obsolescence complète du métier de monteur vidéo traditionnel.

## Prompting & Sagesse d'usage

- Technique icebreaker : envoyer 10 premiers prompts imparfaits/simples pour casser la glace et avoir une vision rapide, puis itérer et optimiser plutôt que de perfectionner le prompt dès le départ
- Utiliser le mode plan de Claude Code pour valider la structure avant exécution sur des prompts complexes
- Lancer ultra think sur les gros prompts pour laisser l'IA réfléchir en profondeur avant de générer
- Installer et utiliser les skills existants (ReMotion Best Practice, YouTube Intro) pour ajouter des garde-fous et améliorer automatiquement la qualité sans surcharger le prompt
- Lire les vérifications finales que Claude Code propose (compilation, rendu, audio sync, lisibilité texte) pour comprendre ce qu'il va valider
- Cloisonner les tâches par multi-agent asynchrone pour paralléliser et accélérer (3x plus rapide dans l'exemple)
- Itérer après génération : modifier texte, couleurs, polices, arrière-plans via Claude Code plutôt que de tout prévoir dans le prompt initial

## Concepts clés expliqués

### Composition ReMotion
Unité de base = composant React où chaque frame est une image rendue, assemblées en vidéo MP4 via FFmpeg. Contrairement à After Effects (timeline visuelle), tu écris du code JSX pour décrire chaque frame.
**Pourquoi c'est important** : Cela signifie que tu peux générer des vidéos programmatiquement, les versionner comme du code, et les automatiser à l'infini. C'est la clé de la disruption.

### Code déterministe
Code React qui produit toujours le même résultat visuel au pixel près, peu importe combien de fois tu l'exécutes. Contrairement à la génération IA générative (Sora) qui produit du contenu légèrement différent à chaque fois.
**Pourquoi c'est important** : Pour la production professionnelle, tu as besoin de reproductibilité. ReMotion la garantit. C'est pourquoi c'est supérieur à Sora pour les cas d'usage déterministes (intros, dashboards, explainers).

### Navigateur headless
Navigateur sans interface graphique (Chrome/Chromium) qui compile et rend les composants React en local sur localhost:3000, sans avoir besoin d'ouvrir une fenêtre visuelle. Produit des images PNG que FFmpeg assemble en MP4.
**Pourquoi c'est important** : C'est ce qui rend le pipeline automatisable et scalable. Tu peux lancer 100 navigateurs headless en parallèle sur un serveur cloud sans interface graphique.

### Wide coding vidéo
Pratique de coder directement des vidéos (écrire du code React pour générer des frames) plutôt que de les monter manuellement dans une timeline. 'Wide' = large, complet, du point A au point Z en code.
**Pourquoi c'est important** : C'est un changement de paradigme : de 'montage créatif' à 'programmation créative'. Cela rend le métier accessible aux développeurs et remplace les monteurs traditionnels.

### Skill (extension Claude Code)
Module réutilisable disponible sur skills.sh qui contient des instructions prédéfinies et des garde-fous pour Claude Code. Ex: 'ReMotion Best Practice' ajoute 10 bonnes pratiques automatiquement à chaque génération.
**Pourquoi c'est important** : C'est comment tu améliores la qualité sans surcharger le prompt. Les skills sont l'équivalent des 'templates' ou 'patterns' en programmation, mais pour l'IA générative.

### Icebreaker (technique de prompting)
Envoyer 10 premiers prompts imparfaits/simples pour 'casser la glace' et avoir une vision rapide du résultat, puis itérer et optimiser. Plutôt que de perfectionner le prompt dès le départ.
**Pourquoi c'est important** : C'est contre-intuitif mais plus efficace : la boucle feedback rapide (voir le résultat en 10 secondes) vaut mieux que la réflexion préalable. Cela change ta stratégie de prompting.

### Multi-agent asynchrone
Lancer plusieurs instances de Claude Code en parallèle (10 agents) pour générer 10 vidéos différentes simultanément, sans attendre que l'une finisse avant de lancer la suivante.
**Pourquoi c'est important** : Cela multiplie la vitesse par ~10x (2min pour 10 vidéos au lieu de 20min). C'est une stratégie clé pour la production de masse et les tests A/B rapides.

### Température créative en IA
Paramètre qui contrôle le degré de 'créativité' (probabilité) du modèle IA. Température basse (0.1) = déterministe et prévisible. Température haute (1.0+) = créatif et imprévisible.
**Pourquoi c'est important** : L'orateur affirme que tu peux coder la 'patte créative' d'un artiste en ajustant la température et les skills. Cela signifie que la créativité humaine est réplicable via des paramètres mathématiques.

### Vérification et validation automatique
Claude Code valide automatiquement : compilation TypeScript strict, rendu headless, synchronisation audio-vidéo, lisibilité du texte. Il détecte et corrige les erreurs avant de produire le MP4 final.
**Pourquoi c'est important** : Cela réduit les erreurs humaines et accélère l'itération. Mais le taux d'erreur (5 sur 10 dans l'exemple) montre que la validation n'est pas parfaite et nécessite révision.

## Insights non-évidents

- Insight 1 : La vidéo ne parle pas de 'générer' des vidéos au sens IA générative (Sora), mais de 'coder' des vidéos. C'est une distinction cruciale : ReMotion produit du code déterministe (même résultat pixel-parfait à chaque exécution), tandis que Sora produit du contenu probabiliste. Cela rend ReMotion + Claude infiniment plus fiable et reproductible pour la production professionnelle.
- Insight 2 : L'orateur affirme que la créativité du montage est 'déterministe et mathématique', donc remplaçable. Cela implique une philosophie IA radicale : il n'existe pas de créativité humaine irréductible, seulement des patterns appris et des règles appliquées. C'est une vision déterministe du monde qui mérite questionnement éthique.
- Insight 3 : Le vrai game-changer n'est pas ReMotion (qui existe depuis 2020), mais la combinaison ReMotion + Claude Code avec mode plan et skills. C'est l'IA générative qui comprend le contexte et valide avant exécution qui rend le système viable. Sans Claude, ReMotion reste un framework technique complexe.
- Insight 4 : La technique 'icebreaker' (10 prompts imparfaits avant optimisation) révèle une vérité sur le prompting : la perfection initiale est contre-productive. L'itération rapide et le feedback immédiat (via prévisualisation headless) battent la réflexion préalable. C'est l'inverse du workflow traditionnel.
- Insight 5 : L'orateur mentionne 'skills.sh avec 90k+ skills' mais ne développe pas : cela signifie que la vraie valeur future n'est pas dans ReMotion ou Claude seuls, mais dans l'écosystème de skills réutilisables (garde-fous, patterns, bonnes pratiques codifiées). C'est une économie de composants IA.

## Mental models

- {'modele': 'Code = Vidéo', 'explication': 'Penser à une vidéo non pas comme un fichier binaire (MP4) mais comme du code exécutable (React). Chaque frame est un composant, chaque animation est une fonction. Cela change tout : tu peux versionner, itérer, réutiliser, et automatiser comme du code logiciel.'}
- {'modele': 'Déterminisme vs Probabilisme', 'explication': 'ReMotion produit du code déterministe (même input = même output pixel-parfait). Claude Code génère ce code via probabilisme (température créative). La combinaison = déterminisme contrôlé. Comprendre cette distinction est clé pour savoir quand utiliser ReMotion vs Sora.'}
- {'modele': 'Prompting itératif > Prompting parfait', 'explication': "Ne pas chercher le prompt parfait dès le départ. Envoyer 10 prompts imparfaits, voir les résultats, itérer. C'est plus rapide que de réfléchir 1h au prompt idéal. La boucle feedback (prévisualisation headless) est ton meilleur outil."}
- {'modele': 'Skills = Garde-fous codifiés', 'explication': "Un skill (extension Claude Code) n'est pas une feature, c'est une contrainte intelligente. Elle dit à Claude : 'Quand tu génères du code ReMotion, respecte ces 10 bonnes pratiques.' C'est comment tu échelles la qualité sans surcharger le prompt."}
- {'modele': 'Parallélisation = Multiplication de vitesse', 'explication': "Au lieu de générer 1 vidéo, puis 1 autre, puis 1 autre (3 × 2min = 6min), lance 10 agents Claude en parallèle (2min total). C'est pas juste plus rapide, c'est une autre catégorie de vitesse. Cela change la stratégie : tu peux tester 100 variantes en 2min."}
- {'modele': 'Créativité = Pattern matching mathématique', 'explication': "L'orateur affirme que la créativité du monteur (transitions fluides, timing, couleurs harmonieuses) est en réalité du pattern matching : 'Si scène triste, alors musique mineure et transitions lentes.' C'est mathématique, donc remplaçable. Accepter ou rejeter cette prémisse change tout."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment intégrer des vidéos filmées (clips) avec ReMotion au-delà des animations programmatiques
- Sujet mentionné mais non développé : Détails techniques sur comment Johnny Burger (créateur) utilise Claude Code en interne pour ses propres vidéos ReMotion
- Sujet mentionné mais non développé : Système de clonage de voix IA et intégration Eleven Labs pour narration automatique
- Question ouverte : Comment gérer les vidéos très longues (3+ heures) à coût bas avec les outils actuels
- Question ouverte : Quels sont les garde-fous éthiques/légaux quand l'IA remplace 100% le travail créatif d'un monteur
- Sujet mentionné mais non développé : Détails sur les 5 erreurs corrigées automatiquement sur les 10 compositions
- Implication non-dite 1 : Si le montage vidéo est 100% remplaçable par l'IA en 2027, alors tous les monteurs vidéo actuels (métier estimé à 50k+ professionnels en France) doivent se reconvertir. L'orateur ne propose pas de solution de transition.
- Implication non-dite 2 : ReMotion + Claude Code fonctionne parfaitement pour les vidéos 'génériques' (intros, compteurs, dashboards, explainers). Mais pour les vidéos avec clips filmés, montage créatif complexe, ou storytelling nuancé, le système reste limité. L'orateur ne clarifie pas cette limite.
- Implication non-dite 3 : L'affirmation 'le code sera réutilisable à l'infini' cache une dépendance : réutilisable seulement si Claude Code reste accessible et gratuit. Si Anthropic change son modèle tarifaire, le coût peut exploser. Aucune mention de ce risque.
- Implication non-dite 4 : Générer 10 vidéos en 2 minutes avec multi-agent parallélisé suppose une infrastructure cloud (Vercel, AWS). Les coûts de compute ne sont pas mentionnés. À grande échelle (1000 vidéos/jour), cela peut devenir coûteux.
- Implication non-dite 5 : La 'vérification automatique' (5 erreurs corrigées sur 10 compositions) signifie que 50% des générations ont des bugs. Cela n'est pas un taux d'erreur acceptable pour la production professionnelle sans révision humaine.
- Ce qu'on peut en déduire : L'orateur vend une vision utopiste. La réalité est que ReMotion + Claude Code est excellent pour l'automatisation de masse (générer 100 variantes d'une vidéo), mais mauvais pour la création unique et hautement créative. Le marché se bifurquera : production de masse (IA) vs création d'auteur (humain).

## Ce que tu peux faire maintenant

- [ ] Installer ReMotion localement (npm create remotion) et choisir un template (Blank, Next.js, Hello World) pour comprendre la structure d'une composition React.
- [ ] Écrire ton premier prompt simple en français : 'Crée une vidéo d'intro de 5 secondes avec le texte "Bonjour" en blanc sur fond bleu, avec une animation de zoom.' Envoyer à Claude Code et voir le code généré.
- [ ] Utiliser le mode 'plan' de Claude Code avant d'exécuter : demander à Claude de te montrer la structure du code avant de le générer, pour valider que c'est ce que tu veux.
- [ ] Installer une skill depuis skills.sh (ex: 'ReMotion Best Practice') et relancer le même prompt pour voir comment la qualité s'améliore automatiquement.
- [ ] Lancer une prévisualisation headless (localhost:3000) et itérer : modifier le texte, la couleur, la police via Claude Code et voir le résultat en temps réel.
- [ ] Générer 3-5 variantes d'une même vidéo (couleurs différentes, textes différents) en parallèle avec multi-agent pour comprendre la puissance de la parallélisation.
- [ ] Exporter en MP4 avec FFmpeg et tester sur les réseaux sociaux (TikTok, YouTube Shorts, Instagram Reels) pour voir comment ça rend en conditions réelles.
- [ ] Documenter ton workflow : prompt → code généré → itérations → MP4 final. Cela devient ton 'template' réutilisable pour les prochaines vidéos.
- [ ] Rejoindre le groupe gratuit ReMotion (4000+ membres) et Discord pour apprendre des cas d'usage réels et des astuces de la communauté.
- [ ] Réfléchir à un cas d'usage personnel : quel type de vidéo génères-tu régulièrement (intros, explainers, dashboards) ? C'est ton premier candidat pour l'automatisation.

## Business & Monétisation

- Agence de création vidéo : au lieu d'employer 5 monteurs à 3000€/mois chacun, utiliser ReMotion + Claude Code pour générer 100 vidéos/mois avec 1 personne. Marge = 15k€/mois → 1k€/mois en coûts IA. ROI = 1400%.
- SaaS de génération vidéo : créer une plateforme où les clients uploadent un CSV (données produit) et reçoivent 100 vidéos de produit générées automatiquement. Modèle freemium : 5 vidéos/mois gratuit, puis 0.10€/vidéo.
- Vendre des skills ReMotion : créer des skills spécialisées (ex: 'YouTube Intro Pro', 'TikTok Trend Generator', 'Product Demo Automator') et les vendre sur skills.sh ou en direct. Chaque skill = 100-500€/mois en revenus passifs.
- Agence de prompting vidéo : devenir expert en prompting ReMotion et vendre des 'templates de prompts' (ex: 'Comment générer une vidéo de présentation produit en 2min'). Chaque template = 50-200€.
- Automatisation pour e-commerce : générer automatiquement des vidéos de produit pour chaque SKU (couleurs, angles, descriptions). Vendre à des boutiques Shopify. Coût = 0.05€/vidéo, prix = 0.50€/vidéo. Marge = 90%.
- Formation et consulting : vendre des formations 'Maîtriser ReMotion + Claude Code' (500-2000€) ou du consulting pour agences qui veulent automatiser leur production vidéo.
- Marketplace de templates : créer une marketplace où les créateurs vendent des templates ReMotion prêts à l'emploi (intros, transitions, effets). Chaque template = 10-50€, commission 30%.
- Intégration avec outils existants : créer des plugins pour Zapier, Make, ou n8n qui permettent de générer des vidéos ReMotion directement depuis un CRM ou un outil de marketing. Modèle SaaS = 50-500€/mois par client.

## Définitions

- **Composition ReMotion** : Unité de base = composant React où chaque frame est une image, assemblées en vidéo MP4
- **Code déterministe** : Code React qui produit toujours le même résultat visuel au pixel près, contrairement à la génération IA générative
- **Navigateur headless** : Navigateur sans interface graphique qui compile et rend les composants React en local sur localhost
- **Wide coding vidéo** : Pratique de coder directement des vidéos plutôt que de les monter manuellement
- **Skill** : Extension/module pour Claude Code disponible sur skills.sh, contenant des instructions et garde-fous prédéfinis
- **Icebreaker** : Technique de prompting : envoyer 10 premiers messages imparfaits pour casser la glace et avoir une vision avant optimisation

## Outils & techniques mentionnés

- **ReMotion** : Framework open source (41k stars GitHub) qui transforme chaque frame vidéo en composant React pour créer des vidéos MP4 programmatiquement
- **Claude Code** : Assistant IA qui génère du code React+ReMotion à partir de prompts textuels en langage naturel
- **Skills.sh** : Plateforme répertoriant 90k+ skills/extensions pour Claude Code, dont ReMotion Best Practice
- **FFmpeg** : Outil pour assembler les frames générées en fichiers MP4
- **Navigateur headless** : Environnement localhost:3000 pour prévisualiser les vidéos en temps réel sans interface graphique
- **After Effects / Premiere Pro / DaVinci Resolve** : Outils traditionnels de montage vidéo comparés à ReMotion
- **Eleven Labs** : Service de synthèse vocale IA mentionné pour narration automatique
- **Sora / Google VO3** : Outils de génération vidéo IA concurrents
- Prompting itératif (icebreaker technique)
- Mode plan pour validation avant exécution
- Ultra think pour réflexion approfondie sur prompts complexes
- Multi-agent asynchrone pour parallélisation
- Cloisonnement par batch pour éviter les dépendances
- Vérification de compilation TypeScript strict
- Rendu headless avec prévisualisation locale
- Intégration d'assets (PNG, SVG, images) dans les compositions
- Synchronisation audio-vidéo déterministe
- Customisation itérative post-génération

## Connexions avec d'autres sujets IA

- Prompting avancé : la technique 'icebreaker' et 'mode plan' sont des stratégies de prompting qui s'appliquent à tous les modèles IA (Claude, GPT, Gemini). C'est une compétence transversale.
- Agents IA et multi-agent : la parallélisation de 10 agents Claude pour générer 10 vidéos est un cas d'usage classique d'orchestration multi-agent. Cela se généralise à d'autres domaines (génération de contenu, analyse de données, etc.).
- Automatisation et RPA : ReMotion + Claude Code est une forme d'automatisation intelligente (Intelligent RPA). C'est l'évolution de l'RPA traditionnel (Selenium, UiPath) vers l'IA générative.
- Déterminisme vs Probabilisme : la distinction entre ReMotion (déterministe) et Sora (probabiliste) est centrale en IA. Elle s'applique à tous les modèles : quand utiliser un modèle déterministe vs génératif ?
- Économie des skills et composants IA : l'idée que 90k+ skills sur skills.sh forment un écosystème de composants réutilisables est analogue à npm (JavaScript), PyPI (Python), ou les plugins WordPress. C'est l'infrastructure future de l'IA.
- Disruption de métiers par l'IA : l'affirmation que le montage vidéo sera remplacé en 2027 est un cas d'étude de disruption technologique. Cela s'applique à d'autres métiers (design graphique, copywriting, développement web).
- Température créative et contrôle de l'IA : l'idée que tu peux coder la 'patte créative' en ajustant la température et les skills est une approche de 'creative control' en IA générative. C'est applicable à la génération de texte, musique, images.
- Validation et vérification automatique : la validation TypeScript strict et la vérification audio-vidéo sont des formes de 'guardrails' ou 'safety checks' en IA. C'est un sujet clé en AI safety.
- Coût marginal zéro : une fois que tu as écrit le code ReMotion, le coût de générer 1 vidéo ou 1000 vidéos est quasi-zéro (juste les coûts cloud). C'est l'économie des biens numériques et de l'IA.

## Prérequis de compréhension

Pour absorber cette vidéo efficacement, tu dois déjà comprendre : (1) Les bases de React et JSX (composants, props, hooks) — sinon le code généré par Claude Code te semblera magique. (2) Comment fonctionne le prompting IA (temperature, tokens, context window) — sinon la technique 'icebreaker' ne te semblera pas logique. (3) La différence entre IA générative (Sora, DALL-E) et code déterministe — sinon tu confondras ReMotion avec Sora. (4) Les concepts de base en vidéo (frames, FPS, codec H.264, FFmpeg) — sinon le pipeline technique restera opaque. (5) Une ouverture philosophique à l'idée que la créativité humaine est remplaçable par l'IA — sinon tu rejeteras la prémisse centrale de la vidéo. Si tu manques de (1) ou (2), regarde d'abord des tutoriels React et prompting. Si tu manques de (3), (4), ou (5), cette vidéo te challengera mais restera compréhensible.

## Citations notables

> C'est un game changer

> Du point A au point Z, c'est un game changer

> Avant il fallait aller sur After Effects ou Premiere Pro ou se faire chier

> En un seul prompt on va donner ça à Claude Code, il va générer une vidéo

> Le code sera réutilisable à l'infini

> C'est 100% automatisable, la base c'est l'automation

> Si t'es monteur vidéo aujourd'hui et que tu penses que t'es tranquille, remets-toi vraiment en question

> Le montage vidéo va être un problème qui va être résolu, qui va être remplacé par l'IA à 100%

> 2027, ça va être l'année du montage vidéo

> Ce qui est simple est souvent rentable
