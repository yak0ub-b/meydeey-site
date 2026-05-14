# Zones d'ombre & sujets à approfondir

> Cartographie des angles morts intentionnels, des fils non terminés et des concepts cités mais jamais développés.
> Basé sur l'analyse de 9 vidéos (transcriptions complètes) — 2026-05-05

---

## Comment lire ce fichier

Chaque entrée suit cette structure :
- **Ce qui est dit** : ce que la vidéo effleure
- **Ce qui est tu / flou** : la zone d'ombre réelle
- **Pourquoi c'est flou** : intentionnel (payant), manque de temps, pas encore testé, ou à venir
- **Pour approfondir** : piste concrète

Légende priorité : 🔴 urgent · 🟠 important · 🟡 moyen · 🔵 curiosité

---

## 1. Info & Actualité IA

### 🔴 Claude Mythos — le modèle fantôme

**Ce qui est dit** : Mythos existe, il est bien au-dessus de 4.7, il est "bridé parce que trop puissant", certaines boîtes y ont accès.

**Ce qui est tu** : Aucun benchmark public accessible. Zéro cas d'usage documenté. Qui y a accès ? Sous quelles conditions ? Pourquoi Anthropic l'a annoncé publiquement s'il n'est pas disponible ?

**Pourquoi c'est flou** : Stratégie délibérée d'Anthropic ("ils ont 2 à 3 tours d'avance") + pas d'accès possible pour l'auteur au moment du tournage.

**Pour approfondir** : Surveiller les pages Anthropic Research + les annonces enterprise. Le benchmark "Misalign Behavior" est la seule donnée publique — creuser ce que ça mesure exactement.

---

### 🔴 Protocole de test 21 jours — jamais montré en public

**Ce qui est dit** : "J'ai un protocole de 3 semaines, 21 jours pour donner un avis concret sur un modèle." Mentionné pour Claude 4.7 (vidéo du 16 avril) et DeepSeek V4 (vidéo du 24 avril).

**Ce qui est tu** : Le protocole lui-même n'est jamais détaillé. Quelles dimensions ? Quels tests ? Comment noter la "profondeur sémantique" ?

**Pourquoi c'est flou** : Contenu réservé au Labo IA Elite (masterclass mercredi). C'est un actif propriétaire.

**Pour approfondir** : Reconstituer le protocole à partir des indices éparpillés : profondeur sémantique, reconnaissance de patterns, raisonnement long, anti-hallucination, vitesse d'inférence. Créer sa propre grille.

---

### 🟠 DeepSeek V4 Pro — rapport jamais sorti

**Ce qui est dit** : "Je vous donne mon avis dans 3 semaines." Comparatif partiel sur benchmarks. Affirmation "7 à 15 fois moins cher" sans démonstration complète sur un projet réel.

**Ce qui est tu** : Le vrai verdict sur du code sérieux. Est-ce qu'il tient vraiment la comparaison avec Opus 4.7 sur un SaaS complet ? La vidéo du 24 avril n'a que 11 minutes.

**Pourquoi c'est flou** : Pas encore testé (J+0 de la sortie au moment du tournage).

**Pour approfondir** : Test comparatif sur 3 cas : refactoring d'un projet existant, debugging complexe, génération d'architecture. Utiliser OpenRouter pour tester les deux en parallèle.

---

### 🟠 Adaptive Thinking vs Extended Thinking — comparaison superficielle

**Ce qui est dit** : Distinction faite (adaptatif = interne et modulé vs étendu = visible et binaire). Test rapide de vitesse montré.

**Ce qui est tu** : Dans quels cas l'Adaptive est réellement supérieur ? Y a-t-il des tâches où l'Extended reste meilleur ? Impact sur le coût réel en tokens ?

**Pourquoi c'est flou** : Manque de temps dans la vidéo (12 minutes sur un modèle entier).

**Pour approfondir** : Tester les deux modes sur : (1) une question simple, (2) un raisonnement complexe en plusieurs étapes, (3) une tâche de code avec débug — mesurer tokens consommés et qualité.

---

### 🟡 "Mes sources" — informations internes jamais citées

**Ce qui est dit** : "D'après mes sources..." concernant Mythos et les modèles en développement interne chez Anthropic.

**Ce qui est tu** : Qui ? Comment ? Fiabilité ?

**Pourquoi c'est flou** : Sources protégées (probablement membres du Labo ou contacts dans l'industrie).

---

## 2. Technique & Outils IA

### 🔴 MiroShark — simulation inachevée, questions non résolues

**Ce qui est dit** : Test en direct avec DeepSeek V4 Pro (trop lent), puis Qwen 3 (plus rapide). Génération d'un graphe de 33 nœuds. Rapport partiel obtenu.

**Ce qui est tu** :
- La vraie valeur du rapport final quand on fait 40 rounds complets avec un modèle adapté
- Polymarket intégré dans une simulation d'entreprise : réellement utile ou bruit ?
- Comparaison qualitative MiroShark vs MiroFish sur un même prompt
- Quel modèle choisir selon le type de décision ?

**Pourquoi c'est flou** : Test en live improvisé, problèmes de performance, complexité de l'outil.

**Pour approfondir** : Lancer une simulation complète (40 rounds) avec Qwen 3-235B sur un cas métier réel. Comparer le rapport vs une prise de décision solo. Documenter le coût en tokens.

---

### 🔴 Obsidian GodMode — consolidation finale jamais montrée

**Ce qui est dit** : 7 agents en parallèle lancés, structure de 8 clusters créée, ~400+ pages générées, protocole anti-hallucination décrit.

**Ce qui est tu** :
- La phase 5 (consolidation finale avec toutes les interconnexions) n'est pas montrée — atteinte de la limite de contexte à 102%
- Benchmark avant/après consolidation (mentionné explicitement comme "ce qui m'aurait intéressé")
- Le prompt complet dans le repo GitHub : jamais vérifié si vraiment disponible
- Comment faire ça sur API sans l'abonnement 200€ de Claude Code ?

**Pourquoi c'est flou** : Limite technique atteinte en direct. Contenu approfondi en interne.

**Pour approfondir** : Récupérer le prompt GitHub. Tester la phase de consolidation séparément, en découpant par cluster. Mesurer la différence de qualité des Wikilinks avant/après.

---

### 🟠 Hermès Agent — 77 skills jamais détaillés

**Ce qui est dit** : Installation montrée sur Mac, connexion Telegram démontrée, 77 skills disponibles.

**Ce qui est tu** :
- Ce que sont réellement les 77 skills (une liste a été entrevue : Arxiv, BlockWatcher, LLM Wiki, PolyMarket, Google Workspace...)
- La fonctionnalité Godmode / jailbreak mentionnée mais non expliquée
- La différence concrète avec n8n sur des workflows précis
- Performance de la mémoire persistante sur le long terme (après 30 jours d'usage)

**Pourquoi c'est flou** : Vidéo de présentation, pas de guide opérationnel. Contenu avancé en Labo.

**Pour approfondir** : Lire le README complet du repo Hermès Agent (502 contributeurs). Cartographier les 77 skills par catégorie. Tester le cas "consultant veille" cité comme idéal.

---

### 🟠 LightRAG — entièrement absent des transcriptions

**Ce qui est dit** : Présent dans l'index (vidéo du 3 avril, 17 minutes), pas de transcription disponible.

**Ce qui est tu** : Tout. C'est une vidéo "guide complet" sur une technologie RAG nouvelle génération.

**Pourquoi c'est flou** : Pas encore traité dans la base de connaissances.

**Pour approfondir** : Transcription à traiter en priorité — LightRAG est directement lié au concept de "base mémorielle" qui revient dans 5 vidéos différentes.

---

### 🟡 Orchestration multi-agents en parallèle — montrée, jamais architecturée

**Ce qui est dit** : "7 agents en parallèle" dans Obsidian, "300 agents" dans MiroFish, "swarm agents" avec DeepSeek V4.

**Ce qui est tu** : Comment concrètement orchestrer 7 agents qui ne se marchent pas dessus ? Quel framework ? Quelle structure de communication entre agents ? Comment gérer les conflits de fichiers ?

**Pourquoi c'est flou** : Complexité technique réservée au Labo. Ce serait une vidéo entière.

**Pour approfondir** : La vidéo du 9 avril "Claude lance ses AGENTS AUTONOMES" (pas encore transcrite) est probablement la réponse directe à ça.

---

### 🟡 Claude Design → Claude Code — handoff incomplet

**Ce qui est dit** : Export "End to Claude Code" montré, commande générée, principe expliqué.

**Ce qui est tu** : Comment Claude Code interprète réellement ce handoff ? Le résultat final (design + logique combinés) n'est jamais montré de A à Z.

**Pourquoi c'est flou** : Vidéo tournée à J+1 de la sortie (research preview), outils non finalisés.

---

## 3. Management & Entrepreneuriat

### 🔴 La pyramide d'intégration IA — niveaux 3 et 4 jamais détaillés

**Ce qui est dit** : 4 niveaux (Individu → Équipe → Département → Organisation). Niveaux 1 et 2 décrits. Niveaux 3 et 4 esquissés.

**Ce qui est tu** :
- Comment concrètement passer du niveau 2 au niveau 3 ? Qui installe l'orchestration multi-agent dans un département de 30 personnes ?
- Le niveau 4 (franchisation) : quel format ? Quel document livrable ? Comment valoriser à la cession ?
- La "valorisation x4" d'une boîte documentée vs non documentée : aucune source citée

**Pourquoi c'est flou** : C'est le coeur de l'offre payante (done for you 3 mois). Révéler le comment en détail = donner la méthode gratuitement.

**Pour approfondir** : Modéliser soi-même la pyramide sur un cas réel. Identifier quel département automatiser en premier (ROI le plus rapide). Chercher les cas des 3 boîtes citées (cabinet avocats parisien, agence communication 40 personnes, industriel familial 110 personnes).

---

### 🔴 L'AI Officer — concept clé sans guide de formation

**Ce qui est dit** : "Un manager existant formé à l'IA, pas un nouveau chief officer à 120k€." Périmètre : pilotage, monitoring, évolution des systèmes IA.

**Ce qui est tu** : Quel cursus de formation ? En combien de temps ? Quels outils doit-il maîtriser ? Comment est-il évalué ? Quels KPI surveille-t-il sur le "dashboard" ?

**Pourquoi c'est flou** : C'est ce que l'auteur vend (accompagnement 3 mois).

**Pour approfondir** : Construire une fiche de poste AI Officer à partir des indices éparpillés dans les vidéos. Croiser avec les 450 transcripts d'appels mentionnés.

---

### 🟠 Socle mémoriel d'entreprise — concept central, jamais construit step by step

**Ce qui est dit** : Mentionné dans 4 vidéos différentes. "Documenter son savoir intelligemment pour augmenter la valorisation." Exemples : fonderie 80 personnes, industriel 140 personnes.

**Ce qui est tu** : Quel format exactement ? Markdown ? Obsidian ? Base vectorielle ? Comment l'alimenter au quotidien ? Qui est responsable ?

**Pourquoi c'est flou** : C'est le livrable principal de l'accompagnement. La vidéo Obsidian GodMode s'en approche le plus mais reste sur la psychologie (pas une boîte réelle).

**Pour approfondir** : La vidéo Obsidian GodMode + la vidéo sur le protocole mémoriel (27 mars, non transcrite) sont les deux pièces du puzzle.

---

### 🟠 Vente d'automatisations à 5000€+ — mentionné sans méthode

**Ce qui est dit** : Référence à une vidéo du 1er janvier 2026 "Comment je vends des automatisations à +5000€". Plusieurs membres cités ayant vendu ou revendu des boîtes.

**Ce qui est tu** : La méthode concrète de prospection, de pricing, de qualification client.

**Pourquoi c'est flou** : Vidéo séparée non encore transcrite. Contenu payant.

**Pour approfondir** : Prioriser la transcription de cette vidéo + "Ton agence IA te rend PAUVRE" (30 janvier, 1h21).

---

### 🟡 "18 mois d'écart opérationnel" — affirmation forte sans preuve

**Ce qui est dit** : "Si tu n'as pas franchisé l'IA dans tes process d'ici 18 mois, tu vendras ta boîte avec une décote de 30% en 2027."

**Ce qui est tu** : Quelle source pour ce chiffre ? Le rapport McKinsey cité (70% des tâches automatisables) est de 2023, pas de 2026. L'écart opérationnel de 3,5x aussi.

**Pourquoi c'est flou** : Chiffres utilisés comme éléments de conviction commerciale. Probablement empiriques + extrapolés.

**Pour approfondir** : Vérifier le rapport McKinsey original (Generative AI and the future of work). Chercher des études récentes 2025-2026 sur la productivité IA en entreprise.

---

## 4. Claude Code — Tutos & Pratique

### 🔴 Les Skills Claude — outil central jamais documenté exhaustivement

**Ce qui est dit** : Mentionnés dans de nombreuses vidéos. Une vidéo entière leur est consacrée (10 avril, 21 minutes, non transcrite). "LA SEULE vidéo Skills Claude dont tu as besoin."

**Ce qui est tu** : Qu'est-ce qu'un skill exactement ? Comment en créer un ? Comment les versionner ? Différence avec CLAUDE.md ?

**Pourquoi c'est flou** : Vidéo pas encore transcrite dans la base.

**Pour approfondir** : Traiter en priorité la transcription du 10 avril. C'est une vidéo fondatrice citée dans plusieurs autres.

---

### 🔴 CLAUDE.md — architecture jamais détaillée

**Ce qui est dit** : Mentionné dans plusieurs vidéos ("j'ai mis dans mes skills", "mon CLAUDE.md"). Utilisé pour driver le comportement du modèle.

**Ce qui est tu** : Structure exacte. Que met-on dedans ? Comment le versionner ? Différence entre CLAUDE.md global et CLAUDE.md de projet ?

**Pourquoi c'est flou** : Contenu très avancé. Probablement traité dans "Arrête de coder à l'aveugle" (19 mars, non transcrit).

---

### 🟠 Claude /routines — pricing non résolu

**Ce qui est dit** : Fonctionnalité puissante, plan Team premium à 100$/mois requis.

**Ce qui est tu** : Est-ce que le plan Pro individuel à 20$/mois permet d'accéder aux routines via Claude Code ? Quelle est la limite de runs par jour/mois ?

**Pourquoi c'est flou** : Anthropic n'a pas encore tout documenté (fonctionnalité récente au moment du tournage).

---

### 🟡 Protocole anti-hallucination Obsidian — pas encore généralisé

**Ce qui est dit** : Deux requêtes web max par page sensible, fichier fact-check-log.md, statut "to verify" si rien trouvé.

**Ce qui est tu** : Comment adapter ce protocole à d'autres domaines que la psychologie ? Quid du médical, juridique, financier où l'hallucination est vraiment dangereuse ?

**Pourquoi c'est flou** : La vidéo elle-même mentionne cette limite mais ne la résout pas.

---

## 5. Vision & Société

### 🟠 Le médecin IA — question posée, jamais tranchée

**Ce qui est dit** : "Si on enlève la dimension émotionnelle, ça n'a plus aucun sens d'avoir un médecin physique en face de toi pour qu'il te donne quelque chose qui est déjà déterminé et écrit. À creuser."

**Ce qui est tu** : La réponse. La dimension émotionnelle justement (accompagnement, cas atypiques, urgences). Quelles spécialités résistent vraiment ?

**Pourquoi c'est flou** : Question rhétorique lancée en passant. Pas l'objet de la vidéo.

---

### 🟡 Architecte vs Exécutant — thèse incomplète

**Ce qui est dit** : Référence à la vidéo "Exécutant ou Architecte : L'IA va DÉTRUIRE l'un des deux" (24 janvier, non transcrite).

**Ce qui est tu** : Tout le contenu. C'est un concept central dans la philosophie de l'auteur.

**Pour approfondir** : Prioriser la transcription de cette vidéo. Elle donne probablement la clé de lecture de tout le reste.

---

## 6. Zones intentionnellement opaques (réservées au payant)

Ces sujets sont **délibérément** gardés flous dans les vidéos publiques. Les nommer est utile pour ne pas les chercher en vain dans les transcriptions.

| Sujet | Où c'est caché | Indice disponible |
|-------|---------------|-------------------|
| Masterclass mercredi (Labo Elite) | MiroShark vidéo | Contenu sur le décorticage technique |
| Les 450+ transcripts d'appels analysés | Vidéo 70% | Base de connaissance empirique |
| Protocole de test 21 jours complet | Vidéos 4.7 et DeepSeek | Dimensions : sémantique, patterns, raisonnement |
| Templates Labo Elite (prompts versionnés) | Vidéo 70% | "Prompts adaptés pas packs" |
| Architecture complète d'un système client | Vidéo 70% | "Mois 1 audit, mois 2 build, mois 3 production" |
| Pôle investissement / trading IA | MiroShark | Traders + banquiers 30 ans d'expérience |

---

## 7. Vidéos non transcrites à prioriser

Classées par impact sur la compréhension globale :

| Priorité | Date | Vidéo | Pourquoi prioritaire |
|----------|------|-------|---------------------|
| 🔴 1 | 2026-04-10 | LA SEULE vidéo Skills Claude dont tu as besoin | Skills = fondation de Claude Code |
| 🔴 2 | 2026-03-27 | J'ai inventé un PROTOCOLE pour que l'IA ne m'oublie PLUS JAMAIS | Protocole mémoriel = base de tout |
| 🔴 3 | 2026-04-07 | Ce protocole DÉTRUIT la façon dont tu utilises l'IA | Protocole usage quotidien |
| 🟠 4 | 2026-04-03 | LightRAG : Guide Complet du RAG nouvelle génération | Complète le concept base mémorielle |
| 🟠 5 | 2026-01-24 | Exécutant ou Architecte : L'IA va DÉTRUIRE l'un des deux | Thèse philosophique centrale |
| 🟠 6 | 2026-03-19 | Arrête de coder à l'aveugle avec Claude Code (Guide Complet) | Probablement contient CLAUDE.md |
| 🟠 7 | 2026-04-02 | J'ai créé une ENTREPRISE IA AUTONOME (Paperclip + Claude Code) | Cas concret niveau 4 pyramide |
| 🟡 8 | 2026-01-30 | Ton agence IA te rend PAUVRE | Vision business complète |
| 🟡 9 | 2026-04-09 | Claude lance ses AGENTS AUTONOMES : 3 cas d'usage concrets | Multi-agents détaillés |
| 🟡 10 | 2026-04-13 | Le piège Claude Code qui te garde pauvre | Erreurs management |

---

## 8. Questions transversales encore ouvertes

Ces questions traversent plusieurs vidéos sans être jamais résolues :

1. **Quel est le vrai coût d'un système IA en entreprise ?** (tokens + temps + maintenance + formation AI Officer) — estimations données mais jamais totalisées

2. **Comment mesurer le ROI d'une automatisation ?** — mentionné comme étape clé mais aucune formule donnée

3. **Open source vs propriétaire : quelle frontière selon le cas ?** — Hermès vs Claude Code, DeepSeek vs Opus 4.7, mais pas de règle claire

4. **Souveraineté des données en pratique** — le paradoxe Microsoft/Google vs IA est soulevé mais la solution (pseudonymisation, anonymisation) reste vague

5. **Comment choisir son premier processus à automatiser ?** — cité comme étape 1 mais les critères de choix ne sont jamais explicités

---

*Dernière mise à jour : 2026-05-05 — 9 vidéos analysées sur 79*
