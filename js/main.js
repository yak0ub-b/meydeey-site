/* ==========================================================================
   meydeey Knowledge Base — Main JS
   Data store · Search · Tabs · Library · Filters · Persistence
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // MODULE 1 — Data Store
  // --------------------------------------------------------------------------

  const CATEGORY_DATA = [
    { id: 'vision',      label: 'Vision & Société',          num: 1, desc: "L'IA dans le monde — impacts, philosophie, société, futur du travail", count: 9  },
    { id: 'info',        label: 'Info & Actualité IA',        num: 2, desc: 'Sorties de modèles, benchmarks, tests comparatifs — ce qui se passe dans l\'IA', count: 21 },
    { id: 'management',  label: 'Management & Entrepreneuriat', num: 3, desc: 'Freelancing, agences IA, vendre, mindset business, cas concrets', count: 16 },
    { id: 'technique',   label: 'Technique & Outils IA',     num: 4, desc: 'Agents, protocoles, outils IA, automatisation n8n, RAG', count: 16 },
    { id: 'claude-code', label: 'Claude Code — Tutos',       num: 5, desc: 'Guides pas-à-pas, démos, commandes, intégrations — passer à l\'action', count: 17 },
  ];

  const VIDEO_DATA = [
    // ── VISION & SOCIÉTÉ (cat 1) ─────────────────────────────────────────
    {
      slug: '2026-02-27_neuralink-drones-credit-social',
      title: 'Neuralink, Drones tueurs, Crédit social : Ce que l\'IA prépare (Lionel Mohr)',
      date: '2026-02-27', duration: '4h48', durationSecs: 17280,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=xhXdUM0lQBo',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Neuralink', 'Crédit social', 'IA militaire', 'Futur du travail'],
      tools: [],
      summary: 'Analyse des implications profondes de l\'IA sur la société, de Neuralink aux drones militaires en passant par le crédit social chinois.'
    },
    {
      slug: '2026-02-23_ia-nous-remplacera',
      title: 'L\'IA nous REMPLACERA et personne ne fait RIEN (analyse complète)',
      date: '2026-02-23', duration: '1h55', durationSecs: 6900,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=cQSNYNOoTJE',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Remplacement des emplois', 'Architecte vs Exécutant', 'Transition IA'],
      tools: [],
      summary: 'Analyse de 2h sur le remplacement des travailleurs par l\'IA et la thèse architecte vs exécutant.'
    },
    {
      slug: '2026-02-16_on-te-ment-sur-ia',
      title: 'On te MENT sur l\'IA depuis le début (voici la vérité en 2h)',
      date: '2026-02-16', duration: '1h52', durationSecs: 6720,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=iET_Jhfu3o8',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Vérité sur l\'IA', 'Désinformation', 'Analyse critique'],
      tools: [],
      summary: 'Démontage des mensonges et mythes autour de l\'IA, avec des faits et analyses concrètes.'
    },
    {
      slug: '2026-02-09_banquier-60-ans-ia',
      title: 'Ce banquier de 60 ans a tout compris à l\'IA avant 99% des gens',
      date: '2026-02-09', duration: '56:55', durationSecs: 3415,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=HfQnECdcQUY',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Vision IA long terme', 'Adoption IA', 'Finance et IA'],
      tools: [],
      summary: 'Interview d\'un banquier de 60 ans qui a adopté l\'IA avant tout le monde et partage sa vision unique.'
    },
    {
      slug: '2026-01-12_yann-lecun-robots',
      title: 'Yann Lecun CASSE TOUT : Les Robots apprennent comme nous maintenant',
      date: '2026-01-12', duration: '39:18', durationSecs: 2358,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=MryErMEyl60',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Robotique', 'Apprentissage par renforcement', 'Yann LeCun'],
      tools: [],
      summary: 'Analyse des annonces de Yann LeCun sur l\'apprentissage des robots et ce que cela change pour l\'IA.'
    },
    {
      slug: '2026-01-24_executant-architecte-ia',
      title: 'Exécutant ou Architecte : L\'IA va DÉTRUIRE l\'un des deux',
      date: '2026-01-24', duration: '23:02', durationSecs: 1382,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=McEpiBJClZs',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Architecte vs Exécutant', 'Futur des métiers', 'Positionnement IA'],
      tools: [],
      summary: 'La thèse : l\'IA détruira les exécutants mais propulsera les architectes. Comment se positionner ?'
    },
    {
      slug: '2026-01-05_ia-vient-de-chine',
      title: '65% de l\'IA vient de CHINE et personne n\'en parle (preuves en direct)',
      date: '2026-01-05', duration: '41:23', durationSecs: 2483,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=aqUzEf1xjhk',
      hasFullContent: false, hasMdFile: false,
      concepts: ['IA chinoise', 'Géopolitique IA', 'Open Source'],
      tools: ['DeepSeek', 'Qwen'],
      summary: 'Analyse de la domination chinoise invisible dans l\'IA open source et ce que ça implique.'
    },
    {
      slug: '2026-04-05_pensee-profonde-ecrase-technique',
      title: 'La pensée profonde ÉCRASE la technique en IA (preuves)',
      date: '2026-04-05', duration: '23:41', durationSecs: 1421,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=zdmh--1YTcg',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Pensée profonde', 'Raisonnement IA', 'Méta-cognition'],
      tools: [],
      summary: 'Démonstration que la qualité du raisonnement prime sur la maîtrise technique des outils IA.'
    },
    {
      slug: '2025-12-08_live-premium-secrets-ia',
      title: 'Le LIVE Premium que je ne devais JAMAIS publier (4h de secrets IA)',
      date: '2025-12-08', duration: '4h16', durationSecs: 15360,
      level: '', category: 'vision', categoryLabel: 'Vision & Société', categoryNum: 1,
      url: 'https://www.youtube.com/watch?v=eqnjBYkOjxQ',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Secrets IA', 'Stratégie long terme', 'Vision exclusive'],
      tools: [],
      summary: 'LIVE premium de 4h partagé exceptionnellement — secrets et stratégies IA avancées.'
    },

    // ── INFO & ACTUALITÉ IA (cat 2) ──────────────────────────────────────
    {
      slug: '2026-04-16_claude-opus-47',
      title: 'Claude Opus 4.7 est sorti (un MONSTRE)',
      date: '2026-04-16', duration: '12:39', durationSecs: 759,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=IlzcKZRBxxc',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude Opus 4.7', 'Benchmarks LLM', 'Tests en direct'],
      tools: ['Claude Opus 4.7', 'Anthropic'],
      summary: 'Test et analyse du lancement de Claude Opus 4.7 — benchmark complet et comparaison avec les modèles concurrents.'
    },
    {
      slug: '2026-04-24_deepseek-v4-humilie-claude',
      title: 'DeepSeek V4 HUMILIE Claude Opus 4.7 (preuves en direct)',
      date: '2026-04-24', duration: '11:03', durationSecs: 663,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=8tlcac9ndeo',
      hasFullContent: true, hasMdFile: true,
      concepts: ['DeepSeek V4', 'Comparaison LLM', 'Open source vs propriétaire'],
      tools: ['DeepSeek V4 Pro', 'Claude Opus 4.7'],
      summary: 'DeepSeek V4 Pro surpasse Claude Opus 4.7 sur plusieurs benchmarks clés à une fraction du coût — preuves en direct.'
    },
    {
      slug: '2026-04-08_claude-mythos',
      title: 'Claude Mythos : Anthropic REFUSE de le sortir (ce qu\'ils cachent)',
      date: '2026-04-08', duration: '16:42', durationSecs: 1002,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=y77BEEXfo9w',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Claude Mythos', 'Modèle fantôme', 'Anthropic secrets'],
      tools: ['Claude Mythos'],
      summary: 'Investigation sur Claude Mythos, le modèle qu\'Anthropic refuse de publier — rumeurs et indices.'
    },
    {
      slug: '2026-04-01_gros-leak-ia',
      title: 'Le plus GROS leak de l\'IA : j\'ai tout décortiqué pour toi',
      date: '2026-04-01', duration: '28:41', durationSecs: 1721,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=IhZweGIZGHY',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Leak IA', 'Roadmap Claude', 'Insider'],
      tools: [],
      summary: 'Analyse complète du plus gros leak de l\'IA — ce que ça révèle sur la roadmap des grands modèles.'
    },
    {
      slug: '2026-03-31_openai-codex-claude-code',
      title: 'OpenAI met Codex dans Claude Code : j\'ai testé (verdict honnête)',
      date: '2026-03-31', duration: '17:23', durationSecs: 1043,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=dtKtnw1aqnQ',
      hasFullContent: false, hasMdFile: true,
      concepts: ['OpenAI Codex', 'Claude Code', 'Comparaison agents coding'],
      tools: ['Claude Code', 'OpenAI Codex'],
      summary: 'Test honnête de l\'intégration Codex dans Claude Code — est-ce vraiment mieux ?'
    },
    {
      slug: '2026-03-06_gpt54-test',
      title: 'GPT-5.4 n\'est pas exceptionnel (test concret)',
      date: '2026-03-06', duration: '38:53', durationSecs: 2333,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=H9qkIzC6YJs',
      hasFullContent: false, hasMdFile: true,
      concepts: ['GPT-5.4', 'Benchmark', 'Honnêteté sur les LLM'],
      tools: ['GPT-5.4', 'OpenAI'],
      summary: 'Test objectif de GPT-5.4 — les résultats ne correspondent pas au marketing.'
    },
    {
      slug: '2026-02-07_claude-46-opus-detruit',
      title: 'Claude 4.6 Opus DÉTRUIT ChatGPT & Gemini (preuves en direct)',
      date: '2026-02-07', duration: '32:04', durationSecs: 1924,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=_-QtNmoQjGA',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude 4.6', 'Comparaison ChatGPT', 'Gemini'],
      tools: ['Claude 4.6 Opus', 'ChatGPT', 'Gemini'],
      summary: 'Benchmark complet Claude 4.6 Opus vs ChatGPT et Gemini — les preuves en direct.'
    },
    {
      slug: '2026-02-04_openclaw-arnaque',
      title: 'OpenClaw est une ARNAQUE et je vais te le prouver',
      date: '2026-02-04', duration: '20:58', durationSecs: 1258,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=1mOOn8zVUw0',
      hasFullContent: false, hasMdFile: false,
      concepts: ['OpenClaw', 'Arnaque IA', 'Critique outils'],
      tools: ['OpenClaw'],
      summary: 'Démonstration point par point que OpenClaw est une arnaque — preuves concrètes.'
    },
    {
      slug: '2026-01-09_deepseek-detruit-openai',
      title: 'DeepSeek DÉTRUIT OpenAI avec cette innovation (mHC expliqué)',
      date: '2026-01-09', duration: '20:51', durationSecs: 1251,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=fKXkrUzChFo',
      hasFullContent: false, hasMdFile: false,
      concepts: ['DeepSeek', 'mHC', 'Architecture IA chinoise'],
      tools: ['DeepSeek'],
      summary: 'L\'innovation mHC de DeepSeek expliquée — pourquoi elle change tout face à OpenAI.'
    },
    {
      slug: '2026-01-04_glm47-monstre-chinois',
      title: 'GLM-4.7 : Le nouveau monstre chinois qui écrase Claude',
      date: '2026-01-04', duration: '38:41', durationSecs: 2321,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=FKZGwYX1yX4',
      hasFullContent: false, hasMdFile: false,
      concepts: ['GLM-4.7', 'Modèle chinois', 'Comparaison LLM'],
      tools: ['GLM-4.7'],
      summary: 'Test de GLM-4.7, le nouveau modèle chinois qui prétend surpasser Claude sur plusieurs tâches.'
    },
    {
      slug: '2026-01-03_claude-meilleure-ia-2026',
      title: 'Pourquoi Claude est la MEILLEURE IA en 2026 (7 raisons + démo)',
      date: '2026-01-03', duration: '24:13', durationSecs: 1453,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=yyWbDa-jcZQ',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude supériorité', '7 raisons', 'Démonstration'],
      tools: ['Claude'],
      summary: '7 raisons concrètes pourquoi Claude domine les autres LLM en 2026 — avec démonstrations live.'
    },
    {
      slug: '2026-04-04_mirofish-etudiant-20-ans',
      title: 'Un étudiant de 20 ans crée l\'IA #1 GitHub (MiroFish)',
      date: '2026-04-04', duration: '45:06', durationSecs: 2706,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=Y8biCoPYmTo',
      hasFullContent: false, hasMdFile: true,
      concepts: ['MiroFish', 'Multi-agent', 'Open source IA'],
      tools: ['MiroFish'],
      summary: 'MiroFish, l\'outil multi-agent créé par un étudiant de 20 ans qui devient #1 GitHub.'
    },
    {
      slug: '2026-04-27_miroshark',
      title: 'MiroShark EXPLOSE MiroFish (test en direct)',
      date: '2026-04-27', duration: '41:56', durationSecs: 2516,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=Fn5VNh_msJw',
      hasFullContent: true, hasMdFile: true,
      concepts: ['MiroShark', 'Swarm Agency', 'Simulation multi-agent', 'Neo4j', 'Polymarket'],
      tools: ['MiroShark', 'MiroFish', 'Neo4j', 'DeepSeek V4 Pro', 'OpenRouter', 'Qwen 3'],
      summary: 'MiroShark, le fork de MiroFish, testé en direct sur 40 rounds de simulation d\'agents — 678 événements générés.'
    },
    {
      slug: '2025-12-17_google-perd-images',
      title: 'Google vient de perdre sa place de n°1 en génération d\'images',
      date: '2025-12-17', duration: '43:44', durationSecs: 2624,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=XGC52IIcJIU',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Génération d\'images', 'Rivalité IA', 'Midjourney'],
      tools: ['Google Imagen', 'Midjourney'],
      summary: 'Analyse du moment où Google a perdu la couronne en génération d\'images.'
    },
    {
      slug: '2025-12-16_benchmark-360-tests-gpt52',
      title: 'J\'ai benchmarké 360 tests LLM : GPT-5.2 choque tout le monde',
      date: '2025-12-16', duration: '39:24', durationSecs: 2364,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=F743X0oIUpI',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Benchmark LLM', 'GPT-5.2', 'Protocole de test'],
      tools: ['GPT-5.2'],
      summary: 'Protocole de benchmark rigoureux sur 360 tests — GPT-5.2 surprend le monde entier.'
    },
    {
      slug: '2025-12-14_gpt52-43-tests',
      title: 'J\'ai TESTÉ GPT-5.2 sur 43 tests (le protocole le plus puissant)',
      date: '2025-12-14', duration: '27:40', durationSecs: 1660,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=IiD6nVZqsc4',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Protocole 21 jours', 'GPT-5.2', 'Évaluation rigoureuse'],
      tools: ['GPT-5.2'],
      summary: 'Protocole de test sur 43 dimensions pour évaluer GPT-5.2 de façon rigoureuse.'
    },
    {
      slug: '2025-12-12_gpt52-sans-pitie',
      title: 'J\'ai testé GPT-5.2 sans pitié… OpenAI va détester cette vidéo',
      date: '2025-12-12', duration: '35:30', durationSecs: 2130,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=u8BRa0knEW0',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Critique GPT-5.2', 'Test sans filtre', 'Limites LLM'],
      tools: ['GPT-5.2'],
      summary: 'Test brutal et sans concession de GPT-5.2 — les vrais points faibles révélés.'
    },
    {
      slug: '2025-11-25_claude-opus-45-humilie',
      title: 'Claude Opus 4.5 vient d\'humilier ChatGPT et Gemini (preuves CHOC)',
      date: '2025-11-25', duration: '56:10', durationSecs: 3370,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=BFekK0ZSZgw',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude Opus 4.5', 'Benchmark', 'Humiliation ChatGPT'],
      tools: ['Claude Opus 4.5', 'ChatGPT', 'Gemini'],
      summary: 'Claude Opus 4.5 surpasse radicalement ChatGPT et Gemini — preuves concrètes en direct.'
    },
    {
      slug: '2025-11-24_gemini3-humilie-chatgpt',
      title: 'GEMINI 3 HUMILIE ChatGPT & Claude (tests réels choc)',
      date: '2025-11-24', duration: '41:09', durationSecs: 2469,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=90tlq2snw-0',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Gemini 3', 'Benchmark choc', 'Google IA'],
      tools: ['Gemini 3'],
      summary: 'Tests choc de Gemini 3 qui surprend le marché en battant ChatGPT et Claude sur certains benchmarks.'
    },
    {
      slug: '2025-11-18_gpt51-humilie-claude',
      title: 'GPT-5.1 HUMILIE Claude : j\'ai codé 20 apps pour le prouver',
      date: '2025-11-18', duration: '29:31', durationSecs: 1771,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=j5bhNisq7LE',
      hasFullContent: false, hasMdFile: false,
      concepts: ['GPT-5.1', 'Coding benchmark', '20 apps test'],
      tools: ['GPT-5.1', 'Claude'],
      summary: 'Protocole 20 apps pour comparer GPT-5.1 et Claude sur des tâches réelles de coding.'
    },
    {
      slug: '2025-11-17_gpt51-detruit-claude',
      title: 'GPT-5.1 DÉTRUIT CLAUDE (les preuves en direct)',
      date: '2025-11-17', duration: '23:33', durationSecs: 1413,
      level: '', category: 'info', categoryLabel: 'Info & Actualité IA', categoryNum: 2,
      url: 'https://www.youtube.com/watch?v=wnhjKCyltW0',
      hasFullContent: false, hasMdFile: false,
      concepts: ['GPT-5.1', 'Claude', 'Comparaison directe'],
      tools: ['GPT-5.1', 'Claude'],
      summary: 'Comparaison directe GPT-5.1 vs Claude — les preuves que GPT gagne sur certains axes.'
    },

    // ── MANAGEMENT & ENTREPRENEURIAT (cat 3) ────────────────────────────
    {
      slug: '2026-04-17_dette-22-ans',
      title: 'Il avait 30 000€ de dette à 22 ans, voici ce qu\'il a fait',
      date: '2026-04-17', duration: '1h32', durationSecs: 5520,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=JTagUbRgVQ0',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Transformation business', 'Endettement entrepreneurial', 'IA et revenus', 'Pivot stratégique'],
      tools: ['Claude Code', 'IA générative'],
      summary: 'Étude de cas réelle : comment passer de 30 000€ de dette à 22 ans à un business IA qui tourne — parcours complet.'
    },
    {
      slug: '2026-04-25_70-equipes-ia',
      title: '70% du temps de tes équipes part en fumée (système IA)',
      date: '2026-04-25', duration: '25:25', durationSecs: 1525,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=j_TsYKeVlgw',
      hasFullContent: true, hasMdFile: true,
      concepts: ['Pyramide d\'intégration IA', 'AI Officer', 'Base mémorielle entreprise', 'Franchise compétences'],
      tools: ['Claude', 'Systèmes IA organisationnels'],
      summary: 'Le système IA pour récupérer 70% du temps perdu en entreprise — pyramide en 4 niveaux, rôle AI Officer.'
    },
    {
      slug: '2026-04-13_piege-claude-code-pauvre',
      title: 'Le piège Claude Code qui te garde pauvre',
      date: '2026-04-13', duration: '20:23', durationSecs: 1223,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=TGy0YRthCkc',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Erreurs Claude Code', 'Rentabilité IA', 'Mindset business'],
      tools: ['Claude Code'],
      summary: 'Le piège mental qui empêche les gens de vraiment gagner de l\'argent avec Claude Code.'
    },
    {
      slug: '2026-04-02_entreprise-ia-autonome',
      title: 'J\'ai créé une ENTREPRISE IA AUTONOME (Paperclip + Claude Code)',
      date: '2026-04-02', duration: '42:58', durationSecs: 2578,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=EJqbJlbDIVg',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Entreprise autonome', 'Paperclip IA', 'Organisation auto-gérée'],
      tools: ['Paperclip', 'Claude Code'],
      summary: 'Création d\'une entreprise IA entièrement autonome avec Paperclip et Claude Code.'
    },
    {
      slug: '2026-03-17_tout-quitte-claude-code',
      title: 'J\'ai tout quitté pour Claude Code (pivot radical)',
      date: '2026-03-17', duration: '47:44', durationSecs: 2864,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=tk3DcfWuC04',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Pivot business', 'Claude Code revenus', 'Témoignage'],
      tools: ['Claude Code'],
      summary: 'Témoignage d\'un pivot radical : tout quitter pour construire un business 100% Claude Code.'
    },
    {
      slug: '2026-03-05_saas-7-jours',
      title: 'J\'ai construit un SaaS avec Claude Code en 7 jours (il remplace 5 métiers)',
      date: '2026-03-05', duration: '12:21', durationSecs: 741,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=ocy-oQQ0tsw',
      hasFullContent: false, hasMdFile: true,
      concepts: ['SaaS en 7 jours', 'Remplacement emplois', 'Speed building'],
      tools: ['Claude Code'],
      summary: 'Construction d\'un SaaS complet en 7 jours avec Claude Code — remplace 5 postes à temps plein.'
    },
    {
      slug: '2026-01-30_agence-ia-te-rend-pauvre',
      title: 'Ton agence IA te rend PAUVRE (et tu ne le sais pas encore)',
      date: '2026-01-30', duration: '1h21', durationSecs: 4860,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=oBk2udxroVA',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Agence IA', 'Pricing', 'Erreurs business'],
      tools: [],
      summary: 'Analyse sans concession des erreurs qui font que la plupart des agences IA sont sous-rentables.'
    },
    {
      slug: '2026-01-27_app-rentable-claude-code',
      title: 'Il a créé une APP RENTABLE en moins d\'un mois avec Claude Code',
      date: '2026-01-27', duration: '1h09', durationSecs: 4140,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=UPf5zvKgZd4',
      hasFullContent: false, hasMdFile: false,
      concepts: ['App rentable', 'Speed to market', 'Cas concret'],
      tools: ['Claude Code'],
      summary: 'Étude de cas : création d\'une app rentable en moins d\'un mois avec Claude Code.'
    },
    {
      slug: '2026-01-21_erreur-fatale-projets-ia',
      title: 'L\'erreur FATALE qui tue 95% des projets IA (comment l\'éviter)',
      date: '2026-01-21', duration: '20:01', durationSecs: 1201,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=tBjlN5_G3vg',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Erreur fatale IA', 'Succès projet', 'Mindset'],
      tools: [],
      summary: 'L\'erreur de mindset qui sabote 95% des projets IA avant même qu\'ils démarrent.'
    },
    {
      slug: '2026-01-07_n8n-business-sans-moi',
      title: 'J\'ai TRANSFORMÉ mon expertise n8n en business qui tourne SANS MOI',
      date: '2026-01-07', duration: '39:24', durationSecs: 2364,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=L7ckZdRbeBc',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Automatisation n8n', 'Business passif', 'Franchise expertise'],
      tools: ['n8n'],
      summary: 'Comment transformer une expertise technique n8n en business qui tourne sans intervention.'
    },
    {
      slug: '2026-01-02_app-rentable-cursor-claude',
      title: 'J\'ai codé une APP RENTABLE avec Cursor + Claude (méthode 2026 débutant)',
      date: '2026-01-02', duration: '32:19', durationSecs: 1939,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=r-mEDLPlWgA',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Cursor', 'Claude', 'App pour débutants'],
      tools: ['Cursor', 'Claude'],
      summary: 'Méthode 2026 pour créer une app rentable avec Cursor + Claude — accessible aux débutants.'
    },
    {
      slug: '2026-01-01_vendre-automatisations-5000',
      title: 'Comment je vends des automatisations à +5000€ en 2026',
      date: '2026-01-01', duration: '34:40', durationSecs: 2080,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=Yt-EF20gvys',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Vente automatisations', 'Pricing premium', 'Méthode commerciale'],
      tools: [],
      summary: 'La méthode exacte pour vendre des automatisations IA à +5000€ — scripts, positionnement, closes.'
    },
    {
      slug: '2025-12-06_argent-avec-ia-verite',
      title: 'Ce que PERSONNE ne te dit sur l\'argent avec l\'IA (1h de vérité brutale)',
      date: '2025-12-06', duration: '55:36', durationSecs: 3336,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=6R4ESYqetsI',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Vérité revenus IA', 'Désillusion', 'Réalité business'],
      tools: [],
      summary: '1h de vérité brutale sur ce que ça prend vraiment pour gagner de l\'argent avec l\'IA.'
    },
    {
      slug: '2025-11-14_freelances-ia-ne-vendent-rien',
      title: 'Pourquoi 95% des freelances IA NE VENDENT RIEN (et comment je facture 10K€)',
      date: '2025-11-14', duration: '25:58', durationSecs: 1558,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=N9GUcIt3cT4',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Freelance IA', 'Vente', 'Positionnement premium'],
      tools: [],
      summary: 'Les 3 erreurs qui font que 95% des freelances IA ne vendent rien — et comment facturer 10K€.'
    },
    {
      slug: '2025-11-10_freelances-restent-pauvres',
      title: 'Pourquoi 90% des Freelances IA RESTENT PAUVRES (la vérité qui pique)',
      date: '2025-11-10', duration: '45:58', durationSecs: 2758,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=cNfb2D32Fxo',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Pauvreté freelance', 'Erreurs récurrentes', 'Sortie de spirale'],
      tools: [],
      summary: 'Analyse des raisons profondes pour lesquelles 90% des freelances IA restent dans la galère.'
    },
    {
      slug: '2025-11-05_client-au-restaurant',
      title: 'Il a trouvé son MEILLEUR CLIENT au restaurant (5000€/mois avec l\'IA)',
      date: '2025-11-05', duration: '53:09', durationSecs: 3189,
      level: '', category: 'management', categoryLabel: 'Management & Entrepreneuriat', categoryNum: 3,
      url: 'https://www.youtube.com/watch?v=zHB6dTk6Q7o',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Acquisition clients', 'Vente consultative', 'Business IA réel'],
      tools: [],
      summary: 'Histoire vraie : comment trouver des clients premium dans la vraie vie pour son activité IA.'
    },

    // ── TECHNIQUE & OUTILS IA (cat 4) ────────────────────────────────────
    {
      slug: '2026-04-19_hermes-agent',
      title: 'Hermes Agent : l\'agent IA qui t\'appartient vraiment',
      date: '2026-04-19', duration: '21:01', durationSecs: 1261,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=ho_ba_TtSWk',
      hasFullContent: true, hasMdFile: true,
      concepts: ['Hermes Agent', 'Agent personnel', 'Telegram IA', 'Souveraineté données'],
      tools: ['Hermes Agent', 'Telegram', 'Claude'],
      summary: 'Hermes Agent : l\'agent IA avec 77 compétences qui t\'appartient vraiment — autonomie et souveraineté totale.'
    },
    {
      slug: '2026-04-18_claude-design-freelances',
      title: 'Claude Design : la fin des freelances templates',
      date: '2026-04-18', duration: '18:23', durationSecs: 1103,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=5FcFUw_n59M',
      hasFullContent: true, hasMdFile: true,
      concepts: ['Claude Design', 'Fin des freelances design', 'Génération UI'],
      tools: ['Claude Design', 'Anthropic'],
      summary: 'Claude Design arrive et va détruire le marché des freelances templates — démonstration et analyse.'
    },
    {
      slug: '2026-04-09_claude-agents-autonomes',
      title: 'Claude lance ses AGENTS AUTONOMES : 3 cas d\'usage concrets',
      date: '2026-04-09', duration: '30:41', durationSecs: 1841,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=gwbR-CtFLYI',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Agents autonomes Claude', 'Cas d\'usage', 'Automatisation avancée'],
      tools: ['Claude Agents'],
      summary: '3 cas d\'usage concrets des agents autonomes Claude — comment les déployer en production.'
    },
    {
      slug: '2026-04-07_protocole-ia-detruit',
      title: 'Ce protocole DÉTRUIT la façon dont tu utilises l\'IA',
      date: '2026-04-07', duration: '24:01', durationSecs: 1441,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=bWZAvvQ-dmY',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Protocole IA', 'Anti-hallucination', 'Méthode avancée'],
      tools: [],
      summary: 'Le protocole qui change radicalement la façon d\'utiliser l\'IA — anti-hallucination et fact-checking.'
    },
    {
      slug: '2026-04-06_kie-ai-veo3',
      title: 'Kie AI : Veo 3, Nano Banana, Suno en un seul compte (en direct)',
      date: '2026-04-06', duration: '28:45', durationSecs: 1725,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=BCN6rh4mSX8',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Kie AI', 'Veo 3', 'Agrégateur IA'],
      tools: ['Kie AI', 'Veo 3', 'Nano Banana', 'Suno'],
      summary: 'Kie AI agrège Veo 3, Nano Banana et Suno en un seul compte — démo live de toutes les fonctionnalités.'
    },
    {
      slug: '2026-04-03_lightrag-guide',
      title: 'LightRAG : Guide Complet du RAG nouvelle génération (2026)',
      date: '2026-04-03', duration: '17:12', durationSecs: 1032,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=2FE6Tp5bROc',
      hasFullContent: false, hasMdFile: true,
      concepts: ['LightRAG', 'RAG nouvelle génération', 'Graphe de connaissance'],
      tools: ['LightRAG'],
      summary: 'LightRAG révolutionne le RAG classique avec des graphes de connaissance — guide complet 2026.'
    },
    {
      slug: '2026-03-27_protocole-memoire-ia',
      title: 'J\'ai inventé un PROTOCOLE pour que l\'IA ne m\'oublie PLUS JAMAIS',
      date: '2026-03-27', duration: '35:07', durationSecs: 2107,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=b6QEN3y-18I',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Protocole mémoire IA', 'Persistance contexte', 'CLAUDE.md'],
      tools: ['Claude', 'Obsidian'],
      summary: 'Protocole inventé pour que l\'IA garde une mémoire parfaite entre les sessions — CLAUDE.md et au-delà.'
    },
    {
      slug: '2026-03-24_claude-computer-use',
      title: 'Claude Computer Use : ton Mac devient autonome (test complet)',
      date: '2026-03-24', duration: '32:11', durationSecs: 1931,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=yBOm8BfF3F0',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Computer Use', 'Mac autonome', 'Agent desktop'],
      tools: ['Claude Computer Use', 'Mac OS'],
      summary: 'Claude Computer Use testé en profondeur — transforme ton Mac en agent autonome qui contrôle l\'interface.'
    },
    {
      slug: '2026-03-23_claude-cowork-20',
      title: 'Claude Cowork 2.0 : 3 cas d\'usage rentables',
      date: '2026-03-23', duration: '11:13', durationSecs: 673,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=bfklayc9Xs0',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Claude Cowork 2.0', 'Collaboration IA', 'Cas d\'usage rentables'],
      tools: ['Claude Cowork'],
      summary: '3 cas d\'usage rentables de Claude Cowork 2.0 — collaboration humain-IA en pratique.'
    },
    {
      slug: '2025-12-26_ia-comme-idiot',
      title: 'Tu utilises l\'IA comme un idiot (voici comment changer en 2026)',
      date: '2025-12-26', duration: '43:34', durationSecs: 2614,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=ZymYZJ145gU',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Usage IA intelligent', 'Prompting avancé', 'Erreurs communes'],
      tools: [],
      summary: 'Les erreurs d\'usage IA que tout le monde fait et comment les corriger pour 2026.'
    },
    {
      slug: '2025-12-22_claude-skills-guide',
      title: 'Claude Skills : le guide complet 2026 (tests & erreurs)',
      date: '2025-12-22', duration: '21:33', durationSecs: 1293,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=cF47rAbV_3M',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude Skills', 'Guide complet', 'Erreurs Skills'],
      tools: ['Claude Skills'],
      summary: 'Guide complet Claude Skills 2026 avec tests réels et erreurs à éviter.'
    },
    {
      slug: '2025-12-19_multi-agent-n8n',
      title: 'Comment créer un MULTI AGENT N8N qui fait travailler d\'autres IA',
      date: '2025-12-19', duration: '16:05', durationSecs: 965,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=mDysRdvQMg4',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Multi-agent n8n', 'Orchestration IA', 'Pipeline automation'],
      tools: ['n8n', 'IA'],
      summary: 'Création d\'un système multi-agent n8n où des IA orchestrent d\'autres IA — guide pratique.'
    },
    {
      slug: '2025-12-11_n8n-maj-importante',
      title: 'La mise à jour N8N la plus IMPORTANTE de l\'année (démo complète)',
      date: '2025-12-11', duration: '10:35', durationSecs: 635,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=DWzwwp4o6Wk',
      hasFullContent: false, hasMdFile: false,
      concepts: ['n8n mise à jour', 'Nouvelles fonctionnalités', 'Automatisation'],
      tools: ['n8n'],
      summary: 'La mise à jour majeure de n8n démontrée — nouvelles capacités et cas d\'usage inédits.'
    },
    {
      slug: '2025-12-09_openai-super-pouvoirs-n8n',
      title: 'OpenAI intègre des SUPER-POUVOIRS dans n8n : code, analyse, recherche en 1 clic',
      date: '2025-12-09', duration: '15:21', durationSecs: 921,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=A_8SxZAnRKs',
      hasFullContent: false, hasMdFile: false,
      concepts: ['OpenAI n8n', 'Code + Analyse', 'Intégration IA'],
      tools: ['n8n', 'OpenAI'],
      summary: 'OpenAI intègre code, analyse et recherche dans n8n — démo des super-pouvoirs en 1 clic.'
    },
    {
      slug: '2025-11-27_google-antigravity-saas',
      title: 'Google Antigravity construit un SaaS… ou c\'est du bluff ? (TEST RÉEL)',
      date: '2025-11-27', duration: '32:10', durationSecs: 1930,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=7HjPG594K2Q',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Google Antigravity', 'No-code IA', 'Vrai test'],
      tools: ['Google Antigravity'],
      summary: 'Test réel de Google Antigravity pour construire un SaaS — bluff ou révolution ?'
    },
    {
      slug: '2025-11-26_google-antigravity-developpeurs',
      title: 'Google Antigravity va remplacer 80% des développeurs (preuve en direct)',
      date: '2025-11-26', duration: '38:15', durationSecs: 2295,
      level: '', category: 'technique', categoryLabel: 'Technique & Outils IA', categoryNum: 4,
      url: 'https://www.youtube.com/watch?v=p0Mm-sMrc8I',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Remplacement développeurs', 'Google Antigravity', 'No-code'],
      tools: ['Google Antigravity'],
      summary: 'Google Antigravity peut-il vraiment remplacer 80% des développeurs ? Preuves en direct.'
    },

    // ── CLAUDE CODE TUTOS (cat 5) ─────────────────────────────────────────
    {
      slug: '2026-01-08_plus-de-developpeur-debutant',
      title: 'Je ne paierai PLUS de développeur (Claude Code pour débutants)',
      date: '2026-01-08', duration: '19:36', durationSecs: 1176,
      level: 'debutant', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=Ael6Py8O6PI',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Claude Code débutant', 'No developer', 'Premier projet'],
      tools: ['Claude Code'],
      summary: 'Comment utiliser Claude Code pour ne plus jamais payer un développeur — guide pour débutants absolus.'
    },
    {
      slug: '2025-12-20_premier-projet-claude-code',
      title: 'Créer ton premier projet avec Claude Code (aucune compétence technique)',
      date: '2025-12-20', duration: '23:41', durationSecs: 1421,
      level: 'debutant', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=j06wUxLk23s',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Débutant Claude Code', 'Premier projet', 'Sans compétence technique'],
      tools: ['Claude Code'],
      summary: 'Guide pas-à-pas pour créer ton premier projet avec Claude Code sans aucune compétence technique.'
    },
    {
      slug: '2026-01-10_21-commandes-claude-code',
      title: '21 Commandes Claude Code pour Maîtriser le Terminal (débutant)',
      date: '2026-01-10', duration: '20:07', durationSecs: 1207,
      level: 'debutant', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=wq0HVJ1rqtM',
      hasFullContent: false, hasMdFile: false,
      concepts: ['Commandes terminal', '21 commandes', 'Maîtrise CLI'],
      tools: ['Claude Code', 'Terminal'],
      summary: 'Les 21 commandes essentielles Claude Code pour maîtriser le terminal — guide débutant.'
    },
    {
      slug: '2026-03-03_claude-code-tout-comprendre',
      title: 'Claude Code : Tout comprendre en une vidéo (démo incluse)',
      date: '2026-03-03', duration: '55:59', durationSecs: 3359,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=gsxiFd8AZQU',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Vue d\'ensemble Claude Code', 'Architecture', 'Démo complète'],
      tools: ['Claude Code'],
      summary: 'La vidéo référence pour tout comprendre de Claude Code en une seule session — avec démo complète.'
    },
    {
      slug: '2026-04-10_seule-video-skills-claude',
      title: 'LA SEULE vidéo Skills Claude dont tu as besoin',
      date: '2026-04-10', duration: '21:28', durationSecs: 1288,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=R8NT2vHdmeA',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Claude Skills', 'Skill tool', 'Personnalisation Claude'],
      tools: ['Claude Code', 'Claude Skills'],
      summary: 'Le guide définitif sur les Skills Claude Code — tout ce qu\'il faut savoir en une seule vidéo.'
    },
    {
      slug: '2026-04-16_claude-routines',
      title: 'Claude /routines ÉCRASE les tâches répétitives (démo live)',
      date: '2026-04-16', duration: '25:36', durationSecs: 1536,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=jzlsiyy054Q',
      hasFullContent: true, hasMdFile: true,
      concepts: ['Claude /routines', 'Automatisation tâches répétitives', 'Démo live', 'Productivité'],
      tools: ['Claude Code', 'Claude /routines'],
      summary: 'Claude /routines automatise toutes les tâches répétitives — démo live avec cas concrets et pricing.'
    },
    {
      slug: '2026-04-12_10-erreurs-facture-claude',
      title: '10 erreurs qui EXPLOSENT ta facture Claude Code',
      date: '2026-04-12', duration: '18:23', durationSecs: 1103,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=wznK7nVLhOE',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Coût Claude Code', '10 erreurs', 'Optimisation dépenses'],
      tools: ['Claude Code'],
      summary: 'Les 10 erreurs qui font exploser la facture Claude Code — et comment passer de $300 à $30/mois.'
    },
    {
      slug: '2026-03-19_arreter-coder-aveugle',
      title: 'Arrête de coder à l\'aveugle avec Claude Code (Guide Complet)',
      date: '2026-03-19', duration: '30:29', durationSecs: 1829,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=VnIMIEMeFFk',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Méthode structurée', 'Debug intelligent', 'Planning avant code'],
      tools: ['Claude Code'],
      summary: 'Guide complet pour arrêter de coder à l\'aveugle avec Claude Code — méthode, debug et planning.'
    },
    {
      slug: '2026-03-25_claude-code-dream-memoire',
      title: 'Claude Code /dream : ENFIN une mémoire propre (test en direct)',
      date: '2026-03-25', duration: '28:53', durationSecs: 1733,
      level: 'intermediaire', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=zG3SvXCNBbM',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Claude /dream', 'Mémoire propre', 'Persistance sessions'],
      tools: ['Claude Code', 'Claude /dream'],
      summary: 'Claude /dream offre enfin une vraie mémoire propre entre sessions — test en direct.'
    },
    {
      slug: '2026-04-11_avocats-ia-claude-code',
      title: 'Avocats et IA : Guide Complet avec Claude Code (2026)',
      date: '2026-04-11', duration: '17:41', durationSecs: 1061,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=PvqOUdJgz2k',
      hasFullContent: false, hasMdFile: true,
      concepts: ['IA pour avocats', 'Legal tech', 'Claude Code juridique'],
      tools: ['Claude Code'],
      summary: 'Guide complet Claude Code pour la profession d\'avocat — cas d\'usage légaux et bonnes pratiques.'
    },
    {
      slug: '2026-04-20_obsidian-notion-claude-code',
      title: 'J\'ai supprimé Notion pour ça (Claude Code + Obsidian)',
      date: '2026-04-20', duration: '33:48', durationSecs: 2028,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=555m6SpTGnU',
      hasFullContent: true, hasMdFile: true,
      concepts: ['Obsidian GodMode', 'Wiki compilé', 'Base de connaissance IA', 'YAML', 'Wikilinks'],
      tools: ['Claude Code', 'Obsidian', 'Notion'],
      summary: 'Remplacement de Notion par Obsidian + Claude Code — 1000 pages, 10 000 relations, 7 agents parallèles.'
    },
    {
      slug: '2026-04-14_claude-code-apify-web',
      title: 'Claude Code + Apify : Scrape tout le web en 1 prompt',
      date: '2026-04-14', duration: '26:44', durationSecs: 1604,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=6401hShkLKA',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Apify', 'Web scraping IA', 'Collecte données'],
      tools: ['Claude Code', 'Apify'],
      summary: 'Combinaison Claude Code + Apify pour scraper tout le web en 1 prompt — guide avancé.'
    },
    {
      slug: '2026-03-30_firecrawl-claude-code',
      title: 'J\'ai scrapé tout le web avec Firecrawl et Claude Code (guide complet)',
      date: '2026-03-30', duration: '37:09', durationSecs: 2229,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=qZckFHNK9P4',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Firecrawl', 'Web scraping avancé', 'Pipeline données'],
      tools: ['Firecrawl', 'Claude Code'],
      summary: 'Guide complet pour scraper tout le web avec Firecrawl et Claude Code — pipeline de A à Z.'
    },
    {
      slug: '2026-03-29_claude-code-remotion-after-effects',
      title: 'Claude Code + Remotion DÉTRUIT After Effects : 10 vidéos en 2 min',
      date: '2026-03-29', duration: '23:22', durationSecs: 1402,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=k4_ZG1cAEXI',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Remotion', 'After Effects IA', 'Génération vidéo automatique'],
      tools: ['Claude Code', 'Remotion'],
      summary: 'Claude Code + Remotion génère 10 vidéos en 2 minutes — fin d\'After Effects pour la vidéo répétitive.'
    },
    {
      slug: '2026-03-26_google-stitch-claude-code',
      title: 'J\'ai fusionné Google Stitch et Claude Code (le résultat est INCROYABLE)',
      date: '2026-03-26', duration: '36:27', durationSecs: 2187,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=vltKl5kiTp0',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Google Stitch', 'Fusion outils IA', 'Résultats inattendus'],
      tools: ['Google Stitch', 'Claude Code'],
      summary: 'Google Stitch + Claude Code fusionnés — le résultat dépasse les attentes.'
    },
    {
      slug: '2026-03-21_projet-pirate-claude-code',
      title: 'Ton projet se fait pirater en 30 Secondes (Claude Code corrige tout)',
      date: '2026-03-21', duration: '31:45', durationSecs: 1905,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=DjgioQcYI7Y',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Sécurité IA', 'Audit sécurité Claude Code', 'OWASP'],
      tools: ['Claude Code'],
      summary: 'Démonstration : ton projet se fait pirater en 30 secondes — Claude Code audite et corrige tout.'
    },
    {
      slug: '2026-02-11_agent-teams-claude-code',
      title: 'J\'ai créé une APP COMPLÈTE avec les Agent Teams de Claude Code',
      date: '2026-02-11', duration: '36:32', durationSecs: 2192,
      level: 'avance', category: 'claude-code', categoryLabel: 'Claude Code — Tutos', categoryNum: 5,
      url: 'https://www.youtube.com/watch?v=DmV0xF7aTSg',
      hasFullContent: false, hasMdFile: true,
      concepts: ['Agent Teams', 'Multi-agent Claude Code', 'App complète'],
      tools: ['Claude Code', 'Agent Teams'],
      summary: 'Création d\'une app complète avec les Agent Teams de Claude Code — orchestration multi-agents avancée.'
    },
  ];

  // --------------------------------------------------------------------------
  // MODULE 2 — Global Search
  // --------------------------------------------------------------------------
  const Search = {
    index: null,

    buildIndex() {
      this.index = VIDEO_DATA.map(v => ({
        slug: v.slug,
        title: v.title,
        text: [v.title, v.summary, ...v.concepts, ...v.tools].join(' ').toLowerCase(),
        url: 'videos/' + v.slug + '.html',
        category: v.categoryLabel,
        hasContent: v.hasFullContent,
        catNum: v.categoryNum,
      }));
    },

    query(q) {
      if (!q || q.length < 2) return [];
      const terms = q.toLowerCase().trim().split(/\s+/);
      return this.index
        .filter(item => terms.every(term => item.text.includes(term)))
        .slice(0, 8);
    },

    renderResult(r) {
      const catColors = ['','#7c6af7','#4a9eff','#4caf82','#f97316','#a855f7'];
      const dot = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${catColors[r.catNum]};margin-right:4px;"></span>`;
      return `<a class="search-result-item" href="${r.url}">
        <div class="result-title">${r.title}</div>
        <div class="result-meta">${dot}${r.category}${r.hasContent ? ' · <span style="color:#4caf82">✓ Analysée</span>' : ''}</div>
      </a>`;
    },

    init() {
      this.buildIndex();
      const input = document.getElementById('global-search');
      const dropdown = document.getElementById('search-results');
      if (!input || !dropdown) return;

      input.addEventListener('input', () => {
        const results = this.query(input.value.trim());
        if (!results.length) { dropdown.classList.add('hidden'); return; }
        dropdown.innerHTML = results.map(r => this.renderResult(r)).join('');
        dropdown.classList.remove('hidden');
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { dropdown.classList.add('hidden'); input.blur(); }
      });

      document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 3 — Tab System (video pages)
  // --------------------------------------------------------------------------
  const Tabs = {
    init() {
      const tabs = document.querySelectorAll('.tab-btn');
      if (!tabs.length) return;

      const hash = window.location.hash.replace('#', '');
      if (hash) this.switchTo(hash);
      else this.switchTo('resume');

      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          const tabId = btn.dataset.tab;
          this.switchTo(tabId);
          history.replaceState(null, '', '#' + tabId);
        });
      });
    },

    switchTo(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.tab === tabId)
      );
      document.querySelectorAll('.tab-panel').forEach(p =>
        p.classList.toggle('active', p.id === 'tab-' + tabId)
      );
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 4 — Library Filter & Sort (videos.html)
  // --------------------------------------------------------------------------
  const Library = {
    state: { category: '', content: '', level: '', sort: 'date-desc', query: '' },

    init() {
      const grid = document.getElementById('video-grid');
      if (!grid) return;

      this.render();

      const bindings = [
        ['filter-category', 'category'],
        ['filter-content',  'content'],
        ['filter-level',    'level'],
        ['sort-by',         'sort'],
      ];
      bindings.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => {
          this.state[key] = el.value;
          this.render();
        });
      });

      const search = document.getElementById('library-search');
      if (search) search.addEventListener('input', (e) => {
        this.state.query = e.target.value.toLowerCase();
        this.render();
      });
    },

    filter() {
      let data = [...VIDEO_DATA];
      const { category, content, level, query } = this.state;
      if (category)          data = data.filter(v => v.category === category);
      if (content === 'full') data = data.filter(v => v.hasFullContent);
      if (content === 'stub') data = data.filter(v => !v.hasFullContent);
      if (level)             data = data.filter(v => v.level === level);
      if (query) data = data.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.concepts.some(c => c.toLowerCase().includes(query)) ||
        v.tools.some(t => t.toLowerCase().includes(query)) ||
        v.summary.toLowerCase().includes(query)
      );
      return data;
    },

    sort(data) {
      const s = this.state.sort;
      if (s === 'date-desc')     return data.sort((a, b) => b.date.localeCompare(a.date));
      if (s === 'date-asc')      return data.sort((a, b) => a.date.localeCompare(b.date));
      if (s === 'duration-desc') return data.sort((a, b) => b.durationSecs - a.durationSecs);
      if (s === 'duration-asc')  return data.sort((a, b) => a.durationSecs - b.durationSecs);
      return data;
    },

    renderCard(v) {
      const contentBadge = v.hasFullContent
        ? '<span class="badge badge-green">✓ Analysée</span>'
        : '<span class="badge badge-stub">⏳ En attente</span>';
      const levelBadge = v.level
        ? `<span class="badge level-${v.level}">${v.level.charAt(0).toUpperCase() + v.level.slice(1)}</span>`
        : '';
      let visited = [];
      try { visited = JSON.parse(localStorage.getItem('kb_visited') || '[]'); } catch (e) {}
      const visitedClass = visited.includes(v.slug) ? ' visited' : '';
      return `<a class="video-card ${v.hasFullContent ? 'has-content' : 'stub'}${visitedClass}" href="videos/${v.slug}.html">
        <div class="card-badges">
          <span class="badge cat-badge cat-${v.categoryNum}">${v.categoryLabel}</span>
          ${contentBadge}
          ${levelBadge}
        </div>
        <div class="card-title">${v.title}</div>
        <div class="card-meta">${v.date} · ⏱ ${v.duration}</div>
        ${v.hasFullContent ? `<div class="card-summary">${v.summary}</div>` : ''}
      </a>`;
    },

    render() {
      const filtered = this.sort(this.filter());
      const grid = document.getElementById('video-grid');
      const count = document.getElementById('results-count');
      if (count) {
        const n = filtered.length;
        count.textContent = `${n} vidéo${n !== 1 ? 's' : ''} affichée${n !== 1 ? 's' : ''}`;
      }
      if (grid) grid.innerHTML = filtered.map(v => this.renderCard(v)).join('') ||
        '<p style="color:var(--text-muted);padding:2rem 0">Aucune vidéo ne correspond à ces filtres.</p>';
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 5 — Ouvertures Filter (ouvertures.html)
  // --------------------------------------------------------------------------
  const Ouvertures = {
    init() {
      const btns = document.querySelectorAll('.filter-btn[data-priority]');
      if (!btns.length) return;
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const prio = btn.dataset.priority;
          document.querySelectorAll('.ouverture-card').forEach(card => {
            card.style.display = (prio === 'all' || card.dataset.priority === prio) ? '' : 'none';
          });
          document.querySelectorAll('.ouverture-section-title').forEach(t => {
            const section = t.closest('.ouverture-section');
            if (!section) return;
            const visibleCards = section.querySelectorAll('.ouverture-card:not([style*="none"])');
            section.style.display = (prio === 'all' || visibleCards.length > 0) ? '' : 'none';
          });
        });
      });
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 6 — Transcript Search (video pages)
  // --------------------------------------------------------------------------
  const TranscriptSearch = {
    init() {
      const btn = document.getElementById('transcript-search-btn');
      const input = document.getElementById('transcript-search');
      const body = document.getElementById('transcript-content');
      if (!btn || !body) return;

      const original = body.innerHTML;

      btn.addEventListener('click', () => {
        input.classList.toggle('hidden');
        if (!input.classList.contains('hidden')) input.focus();
        else {
          body.innerHTML = original;
        }
      });

      if (input) {
        input.addEventListener('input', () => {
          const q = input.value.trim();
          if (!q) { body.innerHTML = original; return; }
          const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`(${escaped})`, 'gi');
          body.innerHTML = original.replace(regex, '<mark class="highlight">$1</mark>');
        });
      }
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 7 — Action Checkboxes (persist in localStorage)
  // --------------------------------------------------------------------------
  const ActionCheckboxes = {
    init() {
      const checkboxes = document.querySelectorAll('.action-list input[type="checkbox"]');
      if (!checkboxes.length) return;
      const pageId = window.location.pathname + window.location.search;

      checkboxes.forEach((cb, i) => {
        const key = 'action_' + pageId + '_' + i;
        cb.checked = localStorage.getItem(key) === 'true';
        cb.addEventListener('change', () => localStorage.setItem(key, String(cb.checked)));
      });
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 8 — Obsidian Graph Animation (demo.html)
  // --------------------------------------------------------------------------
  const ObsidianGraph = {
    init() {
      const container = document.getElementById('obsidian-graph');
      if (!container) return;

      const w = container.offsetWidth || 700;
      const h = container.offsetHeight || 420;
      const cx = w / 2;
      const cy = h / 2;

      const clusters = [
        { label: 'Agents IA',    angle: 0,   r: 150 },
        { label: 'Prompting',    angle: 45,  r: 160 },
        { label: 'Business',     angle: 90,  r: 155 },
        { label: 'Mémoire',      angle: 135, r: 150 },
        { label: 'Modèles',      angle: 180, r: 160 },
        { label: 'Philosophie',  angle: 225, r: 150 },
        { label: 'Design',       angle: 270, r: 155 },
        { label: 'Outils',       angle: 315, r: 160 },
      ];

      // Draw lines using canvas-like approach with absolutely positioned divs
      clusters.forEach(c => {
        const rad = (c.angle * Math.PI) / 180;
        const nx = cx + Math.cos(rad) * c.r;
        const ny = cy + Math.sin(rad) * c.r;

        // Line from center to cluster
        const dx = nx - cx;
        const dy = ny - cy;
        const len = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        const line = document.createElement('div');
        line.className = 'g-line';
        line.style.cssText = `left:${cx}px;top:${cy}px;width:${len}px;transform:rotate(${angle}deg);`;
        container.appendChild(line);

        // Cluster node
        const node = document.createElement('div');
        node.className = 'g-node cluster';
        node.style.cssText = `left:${nx - 24}px;top:${ny - 24}px;`;
        node.textContent = c.label;
        container.appendChild(node);
      });

      // Central node
      const central = document.createElement('div');
      central.className = 'g-node central';
      central.style.cssText = `left:${cx - 32}px;top:${cy - 32}px;`;
      central.innerHTML = '🧠<br>Ego Node';
      container.appendChild(central);

      // Stats overlay
      const stats = document.createElement('div');
      stats.style.cssText = 'position:absolute;top:12px;right:12px;background:rgba(20,23,32,.9);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:12px 16px;font-size:11px;color:#9aa3c0;';
      stats.innerHTML = '<div style="color:#7c6af7;font-size:18px;font-weight:900;font-family:monospace">1 000+</div><div>pages Obsidian</div><div style="margin-top:6px;color:#7c6af7;font-size:18px;font-weight:900;font-family:monospace">10 000+</div><div>relations</div>';
      container.appendChild(stats);
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 9 — Active nav link
  // --------------------------------------------------------------------------
  function setActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.replace('../', '').replace('./', '');
      const currentPage = path.split('/').pop() || 'index.html';
      link.classList.toggle('active', currentPage === linkPage ||
        (linkPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))
      );
    });
  }

  // --------------------------------------------------------------------------
  // MODULE 10 — Info Panel (index.html only)
  // --------------------------------------------------------------------------
  const InfoPanel = {
    init() {
      const btn = document.getElementById('info-panel-btn');
      const panel = document.getElementById('info-panel');
      const closeBtn = document.getElementById('info-panel-close');
      const backdrop = document.getElementById('info-panel-backdrop');
      if (!btn || !panel) return;

      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;

      const open = () => {
        panel.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (scrollbarW > 0) document.body.style.paddingRight = scrollbarW + 'px';
        closeBtn && closeBtn.focus();
        localStorage.setItem('kb_info_seen', 'true');
      };

      const close = () => {
        panel.classList.remove('open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        btn.focus();
      };

      btn.addEventListener('click', open);
      closeBtn && closeBtn.addEventListener('click', close);
      backdrop && backdrop.addEventListener('click', close);

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && panel.classList.contains('open')) close();
      });

      if (!localStorage.getItem('kb_info_seen')) {
        setTimeout(open, 1500);
      }
    }
  };

  // --------------------------------------------------------------------------
  // MODULE 11 — Visited page tracking
  // --------------------------------------------------------------------------
  function markVisited() {
    const slug = window.location.pathname.split('/').pop().replace('.html', '');
    const skip = ['', 'index', 'videos', 'categories', 'ouvertures', 'demo'];
    if (!slug || skip.includes(slug)) return;
    try {
      const visited = JSON.parse(localStorage.getItem('kb_visited') || '[]');
      if (!visited.includes(slug)) {
        visited.push(slug);
        localStorage.setItem('kb_visited', JSON.stringify(visited));
      }
    } catch (e) {}
  }

  function applyVisitedToCards() {
    try {
      const visited = JSON.parse(localStorage.getItem('kb_visited') || '[]');
      if (!visited.length) return;
      document.querySelectorAll('a.video-card[href]').forEach(card => {
        const href = card.getAttribute('href') || '';
        const slug = href.split('/').pop().replace('.html', '');
        if (visited.includes(slug)) card.classList.add('visited');
      });
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // MODULE 12 — Reading progress bar (video pages only)
  // --------------------------------------------------------------------------
  function initReadingProgress() {
    if (!document.querySelector('.tab-nav-sticky')) return;
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    document.body.prepend(bar);
    window.addEventListener('scroll', () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docH > 0 ? (window.scrollY / docH * 100) + '%' : '0%';
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Init
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    Search.init();
    Tabs.init();
    Library.init();
    Ouvertures.init();
    TranscriptSearch.init();
    ActionCheckboxes.init();
    ObsidianGraph.init();
    InfoPanel.init();
    markVisited();
    applyVisitedToCards();
    initReadingProgress();
  });

  // Expose data for video pages
  window.VIDEO_DATA = VIDEO_DATA;
  window.CATEGORY_DATA = CATEGORY_DATA;

})();
