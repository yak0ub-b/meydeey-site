# J'ai codé une APP RENTABLE avec Cursor + Claude (méthode 2026 débutant)

**Date** : 2026-01-02 | **Durée** : 32:19 | **Niveau** : intermédiaire | **Catégorie** : Management & Entrepreneuriat | **Priorité** : 🟡 moyenne
**URL** : https://www.youtube.com/watch?v=r-mEDLPlWgA

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre pourquoi Claude Opus vaut plus cher que Sonnet | section Philosophie IA |
| créer ta première app dès aujourd'hui | section Ce que tu peux faire maintenant |
| maîtriser les Skills et le Socratic Prompting | section Ouvertures |
| voir comment monétiser cette approche | section Business et monétisation |

## Résumé

Cette vidéo présente une méthodologie complète pour créer rapidement des applications web en utilisant Cursor (éditeur IA) et Claude 4.5 Opus. Le processus repose sur la création d'un PRD (cahier des charges) généré par IA via un Skill personnalisé, suivi de questions de clarification pour affiner le contexte. Une fois le PRD complet, il est copié dans Cursor qui code automatiquement l'application en mode agent. L'auteur montre des exemples concrets (dashboard personnel, studio YouTube, éditeur de texte) et explique pourquoi il préfère payer plus cher pour Claude Opus plutôt que des modèles moins chers, afin d'éviter les itérations inutiles et obtenir des résultats en une seule requête bien structurée.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUX CRÉATION D'APP (2026)                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Idée brute (vocale/texte)                                   │
│         │                                                     │
│         ↓                                                     │
│  [Skill: PRD Générateur]                                     │
│  Claude pose questions de clarification                      │
│         │                                                     │
│         ↓                                                     │
│  PRD complet (Markdown structuré)                            │
│  • Vision • Architecture • Modèle données • Phases           │
│         │                                                     │
│         ↓                                                     │
│  Copier → Cursor (Mode Plan)                                 │
│         │                                                     │
│         ↓                                                     │
│  [Mode Agent] → Auto-code + Auto-accept                      │
│         │                                                     │
│         ↓                                                     │
│  App fonctionnelle (V1 MVP)                                  │
│         │                                                     │
│         ↓                                                     │
│  Itérations mineures (si erreurs)                            │
│                                                               │
│  ⏱️  Temps total : 2-3h | Coût : ~6-8$ (Opus)               │
│  vs 40h + 100$ (itérations avec Sonnet)                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Chapitres inférés

### Acte 1 — Introduction et contexte
Présentation de la méthodologie pour créer des applications avec Cursor et Claude 4.5 Opus, adressée aux débutants et intermédiaires. Installation de Cursor et ouverture d'un projet.

### Acte 2 — Concept des Skills personnalisés
Explication des Skills comme instructions personnalisées dans Claude. Démonstration du Skill 'PRD Générateur' créé par l'auteur pour structurer les projets.

### Acte 3 — Processus de création du PRD
Description vocale du projet (dashboard, notes, tâches, calendrier). Claude pose des questions de clarification. L'auteur répond précisément. Claude génère un PRD complet en Markdown avec vision, architecture, modèle de données, phases et estimations.

### Acte 4 — Exécution dans Cursor
Copie du PRD dans Cursor. Activation du mode Plan. L'agent IA code automatiquement le projet étape par étape. Explication des modes auto-accept et autorun.

### Acte 5 — Cas d'usage concrets
Démonstration de trois projets réels : dashboard personnel centralisé, studio YouTube avec génération de miniatures IA, éditeur de texte avec stockage Airtable. Montrant la polyvalence de la méthodologie.

### Acte 6 — Justification des choix techniques
Explication pourquoi utiliser Claude Opus (plus cher) plutôt que Sonnet : éviter les itérations, obtenir du one-shot prompting. Coûts réels : 261$ en décembre pour 40 interfaces, passage à abonnement 90$/mois.

### Acte 7 — Alternatives et perspectives
Mention d'alternatives (Antigravity, Gemini 3 Pro, Claude Code). Protocoles propriétaires pour atteindre le niveau 10/10 (Socratic Prompting, QCP). Invitation à rejoindre la communauté payante pour apprentissage avancé.

## Philosophie IA & Pensée profonde

L'IA fonctionne mieux quand elle reçoit un contexte complet et structuré dès le départ, plutôt que de devoir itérer. L'IA doit poser des questions pour clarifier le contexte manquant, et une fois bien entraînée via des Skills, elle peut générer des solutions complexes en une seule requête (one-shot prompting), ce qui économise du temps et de l'argent malgré un coût initial plus élevé.

Cette vidéo enseigne une méthodologie systématique pour transformer une idée en application web fonctionnelle en 2-3 heures, en utilisant l'IA pour générer d'abord un cahier des charges structuré (PRD), puis en laissant Cursor coder automatiquement. Le vrai insight : la qualité du contexte initial (via un Skill personnalisé) détermine si l'IA peut résoudre le problème en une seule requête (one-shot) plutôt qu'en 10 itérations, ce qui économise temps et argent malgré un coût par requête plus élevé.

## Prompting & Sagesse d'usage

- Apporter du contexte complet au départ : quand l'IA pose des questions, c'est bon signe qu'elle a identifié un manque de contexte
- Répondre aux questions de clarification avec précision et en utilisant des listes à puces pour une meilleure compréhension
- Créer des Skills personnalisés bien formatés et entraînés pour que l'IA reconnaisse les contextes spécifiques
- Utiliser le one-shot prompting : une requête bien structurée vaut mieux que plusieurs itérations avec un modèle moins performant
- Préférer un modèle plus puissant (Opus) plutôt que d'itérer avec un modèle moins cher (Sonnet) pour économiser du temps
- Laisser l'IA générer un plan avant l'exécution pour valider la stratégie
- Utiliser le mode auto-accept et autorun quand on sait exactement ce qu'on veut, pour gagner du temps

## Concepts clés expliqués

### Skill personnalisé
Instructions persistantes dans Claude qui lui permettent de reconnaître des contextes spécifiques et d'adapter son comportement. Exemple : le Skill 'PRD Générateur' dit à Claude 'quand tu vois une description de projet, pose ces 7 questions précises avant de générer le PRD'.
**Pourquoi c'est important** : Sans Skills, tu dois re-expliquer à l'IA comment tu veux qu'elle fonctionne à chaque requête. Avec un Skill, c'est automatique et reproductible.

### PRD (Product Requirement Document)
Cahier des charges structuré en Markdown qui contient : vision du produit, problèmes résolus, architecture technique, modèle de données, phases de développement, estimations. Généré par Claude via le Skill PRD Générateur.
**Pourquoi c'est important** : Le PRD force la clarté. Si tu ne peux pas écrire un PRD clair, ton projet n'est pas prêt. C'est aussi le document que tu passes à Cursor pour qu'il code sans ambiguïté.

### Mode Plan vs Mode Agent
Mode Plan : Cursor analyse la requête et crée un plan détaillé avant de coder (plus lent, plus sûr). Mode Agent : Cursor code directement et autonomement (plus rapide, recommandé après le premier prompt).
**Pourquoi c'est important** : Le Mode Plan est une validation. Le Mode Agent est pour la vitesse. Utilise Plan pour la première requête, puis bascule à Agent une fois que tu sais que la direction est bonne.

### One-shot prompting
Technique où une seule requête bien structurée suffit à obtenir un résultat complet sans itérations. Nécessite un contexte complet et un modèle puissant (Opus).
**Pourquoi c'est important** : Économise du temps et de l'argent. Au lieu de 10 requêtes à 0,5$ chacune, tu fais 1 requête à 5$. Le résultat est meilleur et plus rapide.

### Mémoire conversationnelle (290 variables)
Claude peut maintenir en mémoire jusqu'à 290 variables contextuelles (préférences, décisions antérieures, contraintes) dans une conversation. Cela permet à l'IA de rester cohérente sur plusieurs messages.
**Pourquoi c'est important** : Plus la mémoire est riche, moins tu dois répéter le contexte. C'est pourquoi une conversation longue et bien structurée produit de meilleurs résultats qu'une requête isolée.

### Auto-accept et Autorun dans Cursor
Auto-accept : Cursor accepte automatiquement les changements de code sans attendre ta validation. Autorun : Cursor exécute automatiquement les commandes (npm install, etc.). À utiliser quand tu sais exactement ce que tu veux.
**Pourquoi c'est important** : Gagne du temps en éliminant les clics manuels. Mais attention : à utiliser seulement quand tu as confiance en la direction, sinon tu vas accepter des erreurs.

## Insights non-évidents

- Insight 1 : L'auteur ne dit pas 'Cursor code mieux que les autres', il dit 'un PRD bien structuré = moins d'itérations'. Le vrai levier n'est pas l'outil, c'est la clarté du contexte initial. Cursor est juste le meilleur exécuteur de ce contexte.
- Insight 2 : Quand Claude pose des questions, c'est un signal positif (pas une faiblesse). Cela signifie que l'IA a détecté un manque de contexte et cherche à le combler avant de générer. C'est l'inverse d'une IA qui hallucine sans poser de questions.
- Insight 3 : Le coût réel n'est pas le prix par token, c'est le coût par application livrée. 261$ pour 40 interfaces = 6,5$ par interface. Comparer Opus à Sonnet sur le prix du token est une erreur de calcul économique.
- Insight 4 : Les Skills personnalisés sont une forme de 'fine-tuning léger' sans fine-tuning. Ils entraînent l'IA à reconnaître des patterns spécifiques (ex: 'quand tu vois PRD Générateur, pose ces 7 questions') sans modifier les poids du modèle.
- Insight 5 : Le one-shot prompting n'est pas magique, c'est une conséquence directe d'un contexte complet. L'auteur a juste systématisé le processus pour que le contexte soit toujours complet dès le départ.

## Mental models

- {'modele': 'Contexte = Déterminisme', 'explication': "Plus le contexte est complet et structuré, plus l'IA se comporte de manière déterministe (prévisible, reproductible). Moins il y a de contexte, plus l'IA doit 'deviner' et itérer. Le PRD est un outil pour maximiser le déterminisme."}
- {'modele': 'Coût par itération vs Coût par requête', 'explication': "Ne pense pas 'Opus coûte 2x plus cher que Sonnet'. Pense 'Opus résout le problème en 1 requête, Sonnet en 10 requêtes'. Le coût réel est coût_par_requête × nombre_de_requêtes, pas juste coût_par_token."}
- {'modele': "Skills = Mémoire structurée de l'IA", 'explication': "Un Skill n'est pas une instruction aléatoire. C'est une mémoire persistante qui dit à l'IA 'quand tu reconnais ce pattern, applique ces règles'. C'est comme donner à l'IA une checklist qu'elle doit toujours consulter."}
- {'modele': "PRD = Contrat entre toi et l'IA", 'explication': "Le PRD n'est pas juste un document. C'est un contrat qui dit 'voici exactement ce que je veux, voici l'architecture, voici les phases'. L'IA peut alors coder sans ambiguïté."}
- {'modele': 'One-shot = Contexte complet dès le départ', 'explication': "One-shot prompting n'est pas une technique magique. C'est juste le résultat naturel d'avoir fourni 100% du contexte nécessaire en une seule requête. Si tu dois itérer, c'est que le contexte initial était incomplet."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Les protocoles de Socratic Prompting et QCP (Quality Control Protocol) réservés aux membres élite
- Sujet mentionné mais non développé : Comment intégrer Supabase en V2 (mentionné comme roadmap future)
- Sujet mentionné mais non développé : Détails techniques sur la mémoire conversationnelle (290 variables remplies)
- Question ouverte : Comment optimiser les Skills pour distinguer les requêtes déterministes vs probabilistes ?
- Sujet mentionné mais non développé : Pourquoi Gemini 3 Pro 'cartonne assez bien' comparé à Claude (affirmation sans justification détaillée)
- Implication 1 : Si tu utilises cette méthode sans créer de Skill personnalisé, tu vas itérer beaucoup. Le Skill est 80% de la magie, pas Cursor ou Opus.
- Implication 2 : Cette approche suppose que tu peux décrire ton projet clairement. Si tu ne sais pas ce que tu veux, aucune IA ne peut t'aider. Le PRD force cette clarté.
- Implication 3 : L'auteur mentionne 'Gemini 3 Pro cartonne assez bien' mais ne l'utilise pas. Cela suggère que Opus est meilleur, mais il ne quantifie pas la différence. Peut-être que pour 80% des projets, Gemini suffit.
- Implication 4 : Les protocoles 'Socratic Prompting' et 'QCP' sont réservés à la communauté payante. Cela signifie que la méthode publique (PRD + Cursor) est V1, et qu'il existe une V2 propriétaire plus puissante.
- Ce qu'on peut en déduire : L'auteur a probablement itéré 100+ fois avant de trouver cette formule. Le Skill 'PRD Générateur' n'a pas été créé en 5 minutes, c'est le résultat de mois d'optimisation.

## Ce que tu peux faire maintenant

- [ ] Créer un Skill 'PRD Générateur' dans Claude en copiant le format montré dans la vidéo (7 questions de clarification, structure Markdown). Teste-le sur un projet personnel.
- [ ] Décrire un projet que tu veux créer (dashboard, app de notes, studio YouTube) et demander à Claude de générer un PRD complet via le Skill. Prends 30 min pour répondre aux questions de clarification avec précision.
- [ ] Copier le PRD généré dans Cursor, activer le Mode Plan, et laisser l'IA coder la V1 MVP. Observe combien de requêtes il faut pour avoir une app fonctionnelle.
- [ ] Comparer le coût réel : compte le nombre de requêtes et le coût total pour créer une app avec cette méthode. Compare avec le temps que tu aurais passé à coder manuellement.
- [ ] Créer un deuxième Skill personnalisé pour un autre type de projet (ex: 'SaaS Générateur', 'Landing Page Générateur'). Observe comment l'IA adapte son comportement selon le Skill actif.
- [ ] Documenter tes 3 premiers projets créés avec cette méthode. Note les erreurs, les itérations nécessaires, et comment améliorer le PRD initial pour éviter ces erreurs.
- [ ] Tester Gemini 3 Pro sur le même projet et comparer la qualité du code avec Claude Opus. Mesure le nombre d'itérations nécessaires pour chaque modèle.

## Business & Monétisation

- Angle 1 : Agence de développement IA. Utilise cette méthode pour créer des apps pour des clients en 2-3h. Facture 2000-5000$ par app. Coût réel : 50-100$ (Opus + Cursor). Marge : 95%+.
- Angle 2 : Template marketplace. Crée des Skills réutilisables (PRD Générateur, SaaS Générateur, etc.) et vends-les sur une marketplace. Chaque Skill peut être vendu 50-200$ et utilisé par 100+ personnes.
- Angle 3 : Communauté payante. Comme l'auteur, crée une communauté avec protocoles propriétaires (Socratic Prompting, QCP) et vends l'accès à 50-200$ par mois. Coût marginal : quasi zéro.
- Angle 4 : Audit et optimisation de PRD. Offre un service où tu audites les PRD générés par l'IA d'autres personnes et les optimises pour réduire les itérations. Facture 500-1000$ par audit.
- Angle 5 : Formation en ligne. Crée un cours 'Créer des apps avec Cursor + Claude' et vends-le 97-297$. Coût de création : 10h. Potentiel de vente : 1000+ étudiants × 100$ = 100k$.
- Angle 6 : Productivité personnelle. Utilise cette méthode pour créer tes propres apps (dashboard personnel, studio YouTube, etc.) et monétise-les via abonnement, publicité, ou vente de données.

## Définitions

- **PRD** : Product Requirement Document - cahier des charges détaillant la vision, les problèmes résolus, l'architecture technique et les phases de développement d'un projet
- **Skills** : Instructions personnalisées dans Claude qui permettent à l'IA de reconnaître des contextes spécifiques et d'adapter sa réponse selon des règles définies
- **MVP** : Minimum Viable Product - version minimale d'un produit avec les fonctionnalités essentielles pour itérer rapidement
- **Mode Plan** : Mode dans Cursor qui analyse la requête et crée un plan détaillé avant d'exécuter le code
- **Mode Agent** : Mode dans Cursor recommandé après le premier prompt pour une exécution plus autonome
- **One-shot prompting** : Technique de prompting où une seule requête bien structurée suffit à obtenir un résultat complet sans itérations

## Outils & techniques mentionnés

- **Cursor** : Éditeur de code avec agent IA intégré pour développer des applications
- **Claude 4.5 Opus** : Modèle IA utilisé pour générer PRD et coder les applications
- **Google Gemini 3 Pro** : Alternative à Claude pour le développement d'applications
- **Supabase** : Base de données pour la persistance des données en production
- **Airtable** : Stockage des prompts et métadonnées de projets
- **Local Storage** : Stockage local des données en V1 avant migration vers Supabase
- **Antigravity (Google)** : Alternative à Cursor pour le développement d'applications
- **Nano Banana** : Service de génération d'images IA pour les miniatures
- Création de Skills personnalisés dans Claude
- Génération de PRD structuré en Markdown
- Approche itérative avec questions de clarification
- Mode auto-accept commit dans Cursor
- Autorun mode pour exécution automatique des commandes
- Gamification des interfaces (système de points XP)
- Génération de miniatures avec contexte IA
- Intégration Airtable pour stockage de métadonnées
- Architecture MVP avec roadmap V2
- Modèle de données structuré pour SQL/Supabase

## Connexions avec d'autres sujets IA

- Fine-tuning léger : Les Skills sont une alternative au fine-tuning complet. Ils entraînent l'IA sans modifier les poids du modèle.
- Prompt engineering : Le PRD est une forme avancée de prompt engineering. C'est un prompt structuré et itératif qui force l'IA à clarifier le contexte.
- Retrieval-Augmented Generation (RAG) : La mémoire conversationnelle (290 variables) fonctionne comme un mini-RAG interne. L'IA récupère le contexte de la conversation précédente.
- Agentic AI : Cursor en Mode Agent est un exemple d'IA agentic. Elle prend des décisions autonomes (quels fichiers modifier, quelles commandes exécuter) sans attendre ta validation.
- Cost optimization : Cette méthode est une optimisation économique. Elle réduit le coût par application en réduisant le nombre d'itérations (coût par itération × nombre d'itérations).
- Knowledge management : Les Skills et le PRD sont des outils de gestion des connaissances. Ils structurent et persistent le savoir sur comment créer des apps.
- Socratic method : Le Skill PRD Générateur utilise la méthode socratique (poser des questions pour clarifier). C'est une technique pédagogique appliquée au prompting.
- Deterministic vs probabilistic AI : Le PRD maximise le déterminisme (résultats reproductibles). Sans PRD, l'IA est plus probabiliste (résultats variables).

## Prérequis de compréhension

Tu dois avoir compris : (1) Comment fonctionne un modèle de langage (tokens, contexte, probabilités). (2) Qu'est-ce qu'un prompt et pourquoi la clarté du prompt affecte la qualité de la réponse. (3) Qu'est-ce qu'un Skill ou une instruction personnalisée dans Claude. (4) Les bases du développement web (HTML, CSS, JavaScript, ou au moins savoir ce qu'est une base de données). (5) Pourquoi itérer avec l'IA coûte du temps et de l'argent. Si tu ne comprends pas ces 5 points, regarde d'abord des vidéos sur les fondamentaux de l'IA et du prompting avant de suivre celle-ci.

## Citations notables

> Je vais te montrer ma technique pour créer des applications, des sass, des solutions développées grâce à Cursor et le meilleur modèle du marché actuellement pour moi, Cloud 4.5 Opus

> S'il y a des erreurs, tant mieux, on va les corriger

> Quand il vous pose des questions, moi ça me fait toujours plaisir. Ça veut dire qu'il a identifié que le contexte était manquant

> Je préfère payer un petit peu plus cher que la moyenne des gens, mais pas faire des itérations inutiles

> Quand ton perd il est propre, tu sais ce que tu veux, tu es clair opérationnel, soyons one shot

> Les Mini Makers sont complètement morts

> On fait des agendas qui servent à des choses réelles qu'on crée en cas terrain
