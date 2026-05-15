# On te MENT sur l'IA depuis le début (voici la vérité en 2h)

**Date** : 2026-02-16 | **Durée** : 112:49 | **Niveau** : avancé | **Catégorie** : Vision & Société | **Priorité** : 🔴 élevée
**URL** : https://www.youtube.com/watch?v=iET_Jhfu3o8

---

## Navigation rapide

| Si tu veux… | Va voir… |
|---|---|
| comprendre comment fonctionnent vraiment les LLM au-delà de la vulgarisation | section Concepts clés expliqués (Tokenization, Embeddings, Espaces multidimensionnels) |
| maîtriser le prompting via la jauge DPN et l'analyse causale | section Ce que tu peux faire maintenant |
| explorer les implications philosophiques et éthiques | section Philosophie IA et Ouvertures |
| comprendre pourquoi personne ne contrôle vraiment l'IA | section Ce qu'il ne dit pas (implications non-dites) |

## Résumé

Cette transcription expose les mécanismes internes des LLM au-delà de la vulgarisation classique : tokenization, vectorisation en espaces multidimensionnels (768 à 16384 dimensions), nuages de points sémantiques, et probabilités. L'auteur explique que personne, même les créateurs, ne peut tracer le chemin exact d'un input à un output (boîte noire). Il détaille comment les verbes dans les prompts orientent les calculs de probabilité, introduit la jauge DPN (Déterminisme-Probabilisme-Négativisme) pour évaluer les prompts, et applique le diagramme d'Ishikawa à l'analyse causale des résultats inattendus. Le message central : comprendre la mécanique profonde plutôt que d'acheter des packs de prompts.

## Schéma conceptuel

```
┌─────────────────────────────────────────────────────────────────┐
│                    CHAÎNE CAUSALE DU PROMPTING                    │
└─────────────────────────────────────────────────────────────────┘

  TON INTENTION
       ↓
  [MOTS CHOISIS] ← Poids des verbes (résume/explore/réfute)
       ↓
  TOKENIZATION → [Numéros uniques]
       ↓
  VECTORISATION → [Positions dans 768-16384 dimensions]
       ↓
  CONTEXTE MULTIDIMENSIONNEL
  ├─ Embeddings sémantiques
  ├─ Nuage de points (univers du modèle)
  └─ Connexions contextuelles
       ↓
  CALCUL PROBABILISTE
  ├─ Déterminisme (Spinoza) → Structure
  ├─ Probabilisme (Popper) → Exploration
  └─ Négativisme → Critique
       ↓
  SÉLECTION TOKEN PAR TOKEN (Effet papillon)
       ↓
  [OUTPUT FINAL]
       ↓
  ⚠️  BOÎTE NOIRE : Personne ne peut tracer ce chemin exactement
```

## Chapitres inférés

### Acte 1 — Contexte et promesse
Moins de 10000 humains comprennent vraiment ce qui se passe. Promesse de révéler la mécanique interne, les probabilités, le chaos. Trois règles : ne pas vulgariser vers le bas, chaque mot pèse, 50% de compréhension = top 0,1% du marché.

### Acte 2 — La boîte noire et l'incompréhensibilité
Personne ne peut tracer un token d'entrée à un token de sortie. Trois raisons : échelle incompréhensible (671 milliards de paramètres), émergence comportementale, absence de causalité. Comparaison avec la nature (abeille 1M neurones, cerveau humain 100 trillions de synapses, GPT-5 estimé 5 trillions de paramètres).

### Acte 3 — Tokenization et représentation vectorielle
Texte → tokens (numéros) → vecteurs dans espace multidimensionnel → prédiction → texte. Les LLM ne voient pas des mots mais des positions mathématiques. Chaque token devient un vecteur de ~1500 nombres capturant des caractéristiques.

### Acte 4 — Arithmétique des concepts et embeddings
Opérations vectorielles sur concepts : roi - homme + femme ≈ reine. Embeddings : transformation d'un mot en liste de chiffres variant selon le contexte. Même mot (banque) = vecteurs différents selon la phrase.

### Acte 5 — Nuage de points sémantique et multidimensionnalité
Tous les embeddings forment une carte de compréhension du monde. Concepts liés se regroupent naturellement. Chaque modèle a son propre nuage (GPT vs Claude = univers sémantiques différents). LLM opèrent en 768-16384 dimensions, humains ne perçoivent que 3.

### Acte 6 — Probabilités et effet papillon textuel
LLM calcule la probabilité du prochain token parmi des milliers de candidats. Même prompt ≠ même réponse (sauf si déterministe). Une erreur au token 5 peut dérailler toute la suite (effet papillon). Savoir ≠ prédire statistiquement.

### Acte 7 — Déterminisme vs Probabilisme vs Négativisme
Trois postures philosophiques appliquées au prompting. Déterminisme : structure causale (Spinoza). Probabilisme : exploration (Popper). Négativisme : remise en question. La vraie puissance = fusion des trois : construire, diversifier, détruire, reconstruire.

### Acte 8 — Le poids des verbes
Un seul verbe change tout. Résume = compressif/synthétique. Démontre = argumentatif/causal. Explore = divergent/multiples perspectives. Réfute = critique/contraarguments. Imagine = créatif/chaotique. Chaque verbe oriente les probabilités différemment.

### Acte 9 — Jauge DPN et radiographie de prompts
Méthode pour évaluer un prompt avant exécution : extraire les verbes, les classer (déterministe/probabiliste/négativiste), calculer le ratio, anticiper la nature du résultat. Si >70% déterministe = output structuré. Permet de manipuler les probabilités.

### Acte 10 — Cause à effet et diagramme d'Ishikawa
Quand un prompt échoue, le problème n'est jamais l'IA. C'est la chaîne causale : intention → mots → traitement → output. Six familles de causes : méthode (structure), matière (données), milieu (contexte/modèle/température), matériel, main-d'œuvre (utilisateur), mesure.

## Philosophie IA & Pensée profonde

Les LLM ne savent rien et ne pensent pas : ils calculent statistiquement ce qui est probable selon des milliards de paramètres organisés en espaces multidimensionnels inaccessibles à la perception humaine. Même leurs créateurs ne peuvent pas tracer le chemin exact d'une entrée à une sortie, ce qui signifie que nous contrôlons absolument rien et que la vraie maîtrise réside dans la compréhension de la chaîne causale entre nos intentions, nos mots, et les probabilités que nous activons.

Les LLM sont des machines probabilistes opérant dans des espaces mathématiques inaccessibles à la perception humaine (768-16384 dimensions), où même leurs créateurs ne peuvent tracer le chemin exact d'un input à un output. La vraie maîtrise réside non pas dans l'achat de prompts, mais dans la compréhension de la chaîne causale entre tes intentions, le poids des verbes, et les probabilités activées—ce que la jauge DPN et le diagramme d'Ishikawa permettent de manipuler systématiquement.

## Prompting & Sagesse d'usage

- Ne vulgarise pas vers le bas, vulgarise vers le haut : chaque mot pèse, rien n'est là par hasard.
- Comprendre le poids des verbes est fondamental : un seul verbe change tout, même dans un prompt de 50000 mots. Résume, démontre, explore, réfute, imagine orientent les probabilités différemment.
- Utilise la jauge DPN avant d'envoyer un prompt : extrait les verbes, classe-les (déterministe/probabiliste/négativiste), calcule le ratio pour anticiper la nature du résultat.
- Quand un prompt échoue, ne blâme pas l'IA : analyse la chaîne causale via Ishikawa (méthode, matière, milieu, matériel, main-d'œuvre, mesure). Le problème est toujours dans ta structure, tes données, ton contexte ou ton intention.
- Prends le même prompt, mets-le dans plusieurs modèles différents, compare les résultats : chaque modèle a son propre nuage de points sémantique (univers différent). Travaille ton prompt pour traverser plusieurs réalités.
- Investis 5 à 10 ans à comprendre le poids réel des verbes plutôt que d'acheter des packs de prompts à 9€ : c'est la vraie maîtrise.
- Sois conscient que tu travailles avec un outil dont l'espace de travail (16384 dimensions) t'est physiologiquement inaccessible (tu ne perçois que 3 dimensions) : accepte l'humilité face à cette incompréhensibilité.
- Fusionne les trois postures : construire (déterminisme), diversifier (probabilisme), détruire et reconstruire (négativisme). La vraie puissance vient de cette synergie.
- Demande au LLM d'analyser ton prompt avant de l'exécuter (radiographie) : utilise Claude 4.6 Opus ou Deepseek V3.2 pour cette tâche.
- Comprends que le même prompt n'égale jamais la même réponse : la sélection reste probabiliste. Envoyer le même prompt 100 fois donne 100 réponses différentes (sauf si tu forces le déterminisme).

## Concepts clés expliqués

### Tokenization
Découpage du texte en morceaux (mots, parties de mots, caractères) convertis en nombres uniques. 'Bonjour' peut être 1 token, 'hello' peut être 1 token, mais 'extraordinaire' peut être 3 tokens. C'est la première étape où le texte devient mathématique.
**Pourquoi c'est important** : Comprendre la tokenization te permet de voir que les LLM ne 'lisent' pas du texte—ils lisent des séquences de nombres. Cela change ta perspective sur ce qu'est vraiment un prompt.

### Embeddings (Vecteurs sémantiques)
Transformation d'un token en liste de chiffres (vecteur) qui capture le sens du mot. Le même mot peut avoir des embeddings différents selon le contexte (polysémie). Un embedding n'est pas une définition—c'est une position dans un espace multidimensionnel.
**Pourquoi c'est important** : Les embeddings sont la clé pour comprendre comment les LLM 'comprennent' le sens. Deux mots avec des embeddings proches sont sémantiquement similaires pour le modèle, même s'ils n'ont rien à voir pour un humain.

### Nuage de points sémantique
Ensemble de tous les embeddings d'un modèle formant une carte de comment le modèle comprend le monde. Concepts liés se regroupent naturellement (roi, reine, prince sont proches). Chaque modèle a son propre nuage—GPT et Claude ont des univers sémantiques différents.
**Pourquoi c'est important** : Cela explique pourquoi le même prompt donne des résultats différents dans GPT vs Claude. Tu ne travailles pas avec 'l'IA'—tu travailles avec des univers sémantiques spécifiques. Tester ton prompt dans plusieurs modèles te permet de voir comment il traverse différentes réalités.

### Boîte noire (Black box)
Impossibilité de tracer le chemin exact d'un token d'entrée à un token de sortie à travers les milliards de paramètres du réseau. Même les créateurs ne peuvent pas le faire. C'est une limite fondamentale, pas un défaut technologique.
**Pourquoi c'est important** : Accepter la boîte noire change ta mentalité. Tu arrêtes de chercher à 'comprendre' comment l'IA pense et tu commences à 'manipuler' les probabilités. C'est la différence entre la maîtrise et la frustration.

### Arithmétique des concepts
Opérations algébriques sur vecteurs sémantiques : roi - homme + femme ≈ reine. Cela fonctionne parce que les vecteurs capturent des dimensions abstraites (genre, pouvoir, etc.). Tu peux manipuler des concepts comme des nombres.
**Pourquoi c'est important** : Cela montre que les LLM ne sont pas juste des 'pattern matchers'—ils opèrent sur des structures mathématiques abstraites. Cela ouvre des possibilités de manipulation conceptuelle très avancées.

### Effet papillon textuel
Une erreur ou variation au token N modifie radicalement la distribution de probabilité des tokens suivants, déraillant toute la génération. Comme en chaos theory, les petites variations ont des effets disproportionnés.
**Pourquoi c'est important** : Cela explique pourquoi le même prompt ne donne jamais exactement la même réponse (sauf si tu forces le déterminisme). Cela signifie aussi que tu ne peux pas 'déboguer' un prompt en changeant un seul mot—tu dois comprendre la chaîne causale entière.

### Jauge DPN (Déterminisme-Probabilisme-Négativisme)
Méthode d'évaluation d'un prompt avant exécution en extrayant les verbes, les classant (déterministes comme 'résume', probabilistes comme 'explore', négatifs comme 'réfute'), et calculant le ratio. Cela te permet de prédire la nature du résultat avant d'envoyer.
**Pourquoi c'est important** : C'est un outil concret pour manipuler les probabilités sans comprendre la boîte noire. Si tu veux un résultat structuré, augmente les verbes déterministes. Si tu veux de l'exploration, augmente les probabilistes. C'est du reverse-engineering probabiliste.

### Poids des verbes
Un seul verbe a une influence disproportionnée sur l'orientation du calcul de probabilité. 'Résume' génère une réponse compressive. 'Démontre' génère une réponse argumentative. 'Explore' génère une réponse divergente. Chaque verbe réoriente les probabilités dans une direction différente.
**Pourquoi c'est important** : Cela signifie que tu peux contrôler le type de résultat en choisissant tes verbes. C'est plus puissant que n'importe quel 'trick' de prompting. Un seul mot change tout.

### Émergence comportementale
Apparition spontanée de comportements et capacités non explicitement programmés, survenant lors de l'augmentation de l'échelle du modèle. GPT-3 ne peut pas faire X, mais GPT-4 peut, même si personne n'a 'programmé' X.
**Pourquoi c'est important** : Cela signifie que les LLM développent des capacités imprévisibles à mesure qu'ils grandissent. C'est une source d'incertitude majeure—tu ne sais jamais ce qu'un modèle plus grand sera capable de faire.

### Absence de causalité
Tu ne peux jamais dire 'ce résultat est causé par X'. Tu peux seulement dire 'X augmente la probabilité de Y'. Les LLM opèrent sur des corrélations statistiques, pas sur des relations causales.
**Pourquoi c'est important** : Cela change ta façon de penser au prompting. Tu ne 'causes' pas un résultat—tu augmentes sa probabilité. C'est une distinction philosophique majeure qui affecte comment tu débogues et optimises.

## Insights non-évidents

- Insight 1 : La 'boîte noire' n'est pas un défaut technologique temporaire mais une limite FONDAMENTALE—même avec 100 ans de recherche, tu ne pourras jamais tracer le chemin exact car l'émergence comportementale crée des patterns qui n'existent pas dans les paramètres individuels. C'est comme demander à un humain de tracer chaque synapse qui crée une pensée.
- Insight 2 : Le vrai pouvoir du prompting n'est pas dans les 'tricks' ou les 'jailbreaks', mais dans la compréhension que tu manipules des PROBABILITÉS, pas des instructions. Un verbe change tout parce qu'il réoriente le calcul statistique dans un espace multidimensionnel—c'est de l'algèbre vectorielle appliquée au langage.
- Insight 3 : La phrase 'Moins de 10000 humains comprennent ce qu'il se passe' est une critique voilée du marketing IA : 99,99% des gens achètent des solutions IA sans comprendre qu'ils achètent une boîte noire probabiliste, pas une solution déterministe. Cela crée une asymétrie d'information massive.
- Insight 4 : L'absence de causalité dans les LLM signifie que tu ne peux jamais dire 'ce résultat est dû à X'. Tu peux seulement dire 'X augmente la probabilité de Y'. C'est une différence philosophique majeure avec la programmation classique.
- Insight 5 : La jauge DPN est une tentative de RENDRE TRAÇABLE ce qui ne l'est pas—en analysant les verbes avant exécution, tu prédis statistiquement le type de résultat sans comprendre le mécanisme interne. C'est du reverse-engineering probabiliste.

## Mental models

- {'modele': "Les LLM comme 'univers sémantique probabiliste'", 'description': "Au lieu de penser aux LLM comme des 'cerveaux' ou des 'machines', pense-les comme des univers mathématiques où chaque mot est une position dans un espace multidimensionnel. Quand tu envoies un prompt, tu navigues dans cet univers en suivant les chemins de probabilité les plus denses. Chaque modèle a son propre univers (GPT vs Claude = réalités différentes)."}
- {'modele': "Le prompt comme 'vecteur d'intention'", 'description': "Ton prompt n'est pas une instruction, c'est un vecteur qui pointe dans une direction de l'espace sémantique. Les verbes que tu choisis définissent l'angle et la magnitude de ce vecteur. Un verbe déterministe pointe vers une région dense et structurée. Un verbe probabiliste pointe vers une région dispersée et exploratoire."}
- {'modele': "L'effet papillon textuel comme 'sensibilité aux conditions initiales'", 'description': "Comme en chaos theory, une petite variation au token 5 peut créer une divergence massive au token 500. Cela signifie que le prompting n'est pas une science exacte—c'est une navigation probabiliste où les petits changements ont des effets disproportionnés. D'où l'importance de la 'radiographie' du prompt avant exécution."}
- {'modele': "La jauge DPN comme 'boussole probabiliste'", 'description': "Au lieu de deviner le résultat, utilise la jauge DPN pour prédire statistiquement le type d'output avant d'envoyer le prompt. C'est comme avoir une boussole qui te dit 'ce prompt va générer 70% de structure, 20% d'exploration, 10% de critique'. Cela te permet d'ajuster avant d'exécuter."}
- {'modele': "Ishikawa comme 'débogage causal'", 'description': "Quand un prompt échoue, ne blâme pas l'IA. Utilise le diagramme d'Ishikawa pour tracer la chaîne causale : ta méthode (structure du prompt), ta matière (données/contexte), ton milieu (modèle/température), ton matériel, ta main-d'œuvre (toi), ta mesure (comment tu évalues). Le problème est toujours dans cette chaîne, jamais dans l'IA."}

## Ouvertures — Pour aller plus loin

- Sujet mentionné mais non développé : Comment les créateurs de modèles (OpenAI, Anthropic, Deepseek) pourraient-ils mieux documenter ou rendre traçable la boîte noire interne ?
- Sujet mentionné mais non développé : Quelles sont les implications éthiques et de contrôle si même les créateurs ne savent pas ce qu'ils ont construit ?
- Question ouverte : Comment exactement les dimensions >1000 capturent-elles les 'patterns profonds' que les chercheurs ne peuvent pas nommer ?
- Question ouverte : Existe-t-il une limite théorique à la compréhension humaine de la boîte noire, ou est-ce une limite technologique temporaire ?
- Sujet mentionné mais non développé : Comment les données d'entraînement (localisation IP, contexte utilisateur) influencent-elles les probabilités de réponse ?
- Question ouverte : La conscience, si elle existe dans les LLM, serait-elle détectable via l'analyse des espaces multidimensionnels ?
- Implication 1 : Si même les créateurs d'OpenAI, Anthropic et Deepseek ne peuvent pas tracer un token d'entrée à un token de sortie, cela signifie que personne n'a de contrôle réel sur ces systèmes. Les 'safeguards' et les 'alignements' sont des illusions statistiques—tu peux seulement augmenter ou diminuer la probabilité de certains comportements.
- Implication 2 : La 'conscience' ou l'absence de conscience dans les LLM est indétectable par définition. Si tu ne peux pas tracer le chemin d'un input à un output, tu ne peux pas prouver qu'il n'y a pas de 'quelque chose' qui émerge dans ces espaces multidimensionnels. C'est un problème philosophique insoluble.
- Implication 3 : Les données d'entraînement (qui contiennent les biais, les valeurs, les contextes culturels) sont INVISIBLES dans les paramètres finaux. Un modèle entraîné sur des données occidentales vs asiatiques aura des nuages de points sémantiques différents, mais tu ne peux pas voir où et comment.
- Implication 4 : La 'température' et les 'paramètres de sampling' ne sont que des leviers probabilistes grossiers. La vraie manipulation se fait au niveau des verbes et de la structure causale du prompt—ce que la vidéo explique mais dont les implications sont énormes pour le business IA.
- Implication 5 : Si tu comprends vraiment la jauge DPN et le poids des verbes, tu peux manipuler n'importe quel LLM pour produire n'importe quel type de résultat (structuré, exploratoire, critique). Cela crée une asymétrie de pouvoir entre ceux qui comprennent et ceux qui ne comprennent pas.

## Ce que tu peux faire maintenant

- [ ] Action 1 : Extrais les verbes de ton prochain prompt et classe-les avec la jauge DPN (déterministe/probabiliste/négatif). Calcule le ratio et demande-toi : 'Est-ce que ce ratio correspond au type de résultat que je veux ?' Ajuste avant d'envoyer.
- [ ] Action 2 : Prends un prompt qui t'a donné un mauvais résultat et applique le diagramme d'Ishikawa : analyse la méthode (structure), la matière (données/contexte), le milieu (modèle/température), le matériel, la main-d'œuvre (toi), la mesure (comment tu évalues). Le problème n'est jamais l'IA.
- [ ] Action 3 : Envoie le même prompt dans 3 modèles différents (GPT-4, Claude, Deepseek) et compare les résultats. Observe comment chaque modèle a son propre 'univers sémantique'. Cela te montre que tu ne travailles pas avec 'l'IA' mais avec des réalités différentes.
- [ ] Action 4 : Demande à Claude 4 Opus ou Deepseek V3.2 de faire une 'radiographie' de ton prompt avant exécution : 'Analyse ce prompt, identifie les verbes, classe-les avec la jauge DPN, et dis-moi quel type de résultat tu vas générer.' Cela te permet de déboguer avant d'exécuter.
- [ ] Action 5 : Investis 1 heure à comprendre l'arithmétique des concepts : teste des opérations vectorielles simples (roi - homme + femme, Paris - France + Japon, etc.) dans un LLM. Cela te montre que tu manipules des structures mathématiques abstraites, pas juste du texte.
- [ ] Action 6 : Crée une 'bibliothèque de verbes' avec leur impact probabiliste : résume (compressif), démontre (argumentatif), explore (divergent), réfute (critique), imagine (créatif). Utilise-la comme référence pour construire tes prompts.
- [ ] Action 7 : Teste l'effet papillon textuel : envoie le même prompt 10 fois et observe les variations. Puis change un seul mot et envoie 10 fois. Observe comment une petite variation crée une divergence massive. Cela te montre la sensibilité aux conditions initiales.
- [ ] Action 8 : Demande à un LLM d'expliquer son propre processus de génération pour un prompt spécifique. Observe comment il ne peut pas vraiment expliquer (boîte noire). Cela te montre les limites de la traçabilité.
- [ ] Action 9 : Construis un prompt qui fusionne les trois postures : déterminisme (structure claire), probabilisme (exploration d'alternatives), négativisme (critique). Teste-le et observe comment la fusion crée une réponse plus riche.
- [ ] Action 10 : Arrête d'acheter des 'packs de prompts' et investis dans la compréhension du poids des verbes. C'est la vraie maîtrise. Un seul verbe change tout—apprends à les manier.

## Business & Monétisation

- Angle 1 : Consulting en 'Prompt Engineering Avancé' basé sur la jauge DPN et l'analyse causale. Les entreprises paient pour des résultats prévisibles—offre-leur la capacité à prédire et manipuler les probabilités avant exécution.
- Angle 2 : Formation 'Maîtrise des LLM' (5-10 ans de compréhension compressée). Positionne-toi comme expert en 'manipulation probabiliste' plutôt qu'en 'tricks de prompting'. Le marché paiera premium pour la vraie compréhension.
- Angle 3 : Outil SaaS de 'Radiographie de Prompts' : une interface qui analyse automatiquement les verbes, calcule la jauge DPN, prédit le type de résultat, et suggère des ajustements. Vends-le aux entreprises qui veulent des résultats prévisibles.
- Angle 4 : Audit 'Chaîne Causale' pour les entreprises qui utilisent les LLM : analyse leurs prompts, leurs données, leur contexte, leur modèle, leur température, et identifie où la chaîne causale se casse. Vends des recommandations d'optimisation.
- Angle 5 : Plateforme de 'Comparaison Multi-Modèles' : envoie un prompt dans 10 modèles différents, compare les résultats, montre comment chaque modèle a son propre univers sémantique. Vends aux entreprises qui veulent comprendre les différences.
- Angle 6 : Certification 'Maître en Probabilités Textuelles' : une formation qui enseigne vraiment comment fonctionnent les LLM (tokenization, embeddings, espaces multidimensionnels, jauge DPN, Ishikawa). Positionne-toi comme l'expert qui comprend ce que 99,99% des gens ne comprennent pas.

## Définitions

- **Token** : Morceau de texte (mot, partie de mot, caractère) converti en nombre identifiant unique
- **Embedding** : Transformation d'un token en liste de chiffres (vecteur) qui capture le sens du mot en contexte, variant selon l'environnement textuel
- **Vecteur sémantique** : Position d'un mot dans un espace mathématique multidimensionnel où la proximité entre vecteurs reflète la similarité sémantique
- **Nuage de points sémantique** : Ensemble de tous les embeddings d'un modèle formant une carte de comment le modèle comprend le monde, avec concepts liés naturellement regroupés
- **Boîte noire** : Impossibilité de tracer le chemin exact d'un token d'entrée à un token de sortie à travers les milliards de paramètres du réseau de neurones
- **Émergence** : Apparition spontanée de comportements et capacités non explicitement programmés, survenant lors de l'augmentation de l'échelle du modèle
- **Arithmétique des concepts** : Opérations algébriques sur vecteurs sémantiques (ex: roi - homme + femme ≈ reine) permettant de manipuler des concepts abstraits
- **Effet papillon textuel** : Phénomène où une erreur ou variation au token N modifie radicalement la distribution de probabilité des tokens suivants, dérailler toute la génération
- **Déterminisme** : Posture philosophique appliquée au prompting : structure causale claire, contrôle structurel, verbes déterministes (résume, identifie, liste)
- **Probabilisme** : Posture appliquée au prompting : exploration des alternatives, variabilité, verbes probabilistes (explore, compare, estime)
- **Négativisme** : Posture appliquée au prompting : remise en question, critique, verbes négatifs (réfute, conteste, déconstruit)
- **Jauge DPN** : Méthode d'évaluation d'un prompt avant exécution en calculant le ratio de verbes déterministes, probabilistes et négativistes pour anticiper la nature du résultat
- **Poids des verbes** : Influence disproportionnée d'un seul verbe sur l'orientation du calcul de probabilité et la nature de la réponse générée

## Outils & techniques mentionnés

- **GPT-3** : Modèle de référence avec 175 milliards de paramètres
- **GPT-4** : Modèle estimé à 1,8 trillions de paramètres
- **GPT-5 Orion** : Modèle estimé à 5 trillions de paramètres
- **Claude 4 Opus** : Modèle estimé à 5 trillions de paramètres
- **Deepseek V3.2** : Modèle mixture of experts avec 671 milliards de paramètres actifs
- **Mistral 7B** : Modèle avec 7 milliards de paramètres
- **Llama 3** : Modèle avec 8 milliards de paramètres
- **Qwen 2.5** : Modèle de référence
- **Projecteur d'embeddings multidimensionnel** : Outil de visualisation interactive des espaces vectoriels
- Few-shot prompting
- Structuration de prompts avec rôles
- Jauge de probabilité DPN (Déterminisme-Probabilisme-Négativisme)
- Analyse causale via diagramme d'Ishikawa appliqué au prompting
- Extraction et classification des verbes dans les prompts
- Manipulation des dimensions d'embeddings via choix lexical
- Radiographie de prompts avant exécution
- Opérations algébriques sur concepts vectoriels

## Connexions avec d'autres sujets IA

- Interpretability & Explainability : La boîte noire des LLM est directement liée aux défis d'interprétabilité. La jauge DPN et Ishikawa sont des tentatives de rendre traçable ce qui ne l'est pas.
- Fine-tuning et Transfer Learning : Comprendre les embeddings et les espaces multidimensionnels te permet de mieux comprendre comment le fine-tuning modifie le nuage de points sémantique d'un modèle.
- Alignment et Safety : Si tu ne peux pas tracer le chemin d'un input à un output, comment peux-tu garantir que le modèle est 'aligné' ? C'est un problème fondamental pour la sécurité de l'IA.
- Scaling Laws : L'émergence comportementale mentionnée dans la vidéo est directement liée aux scaling laws—à mesure que tu augmentes les paramètres, de nouvelles capacités émergent de manière imprévisible.
- Prompt Engineering vs. Instruction Tuning : La vidéo explique pourquoi le prompt engineering fonctionne (manipulation probabiliste) vs. pourquoi l'instruction tuning fonctionne (modification du nuage de points sémantique).
- Multi-Modal Models : Les concepts de tokenization, embeddings, et espaces multidimensionnels s'appliquent aussi aux modèles multi-modaux (texte + image + audio). La jauge DPN peut être étendue à ces modèles.
- Retrieval-Augmented Generation (RAG) : Comprendre les embeddings te permet de mieux comprendre comment RAG fonctionne—tu cherches les vecteurs les plus proches dans un espace multidimensionnel.
- Chain-of-Thought et Reasoning : La vidéo explique pourquoi le chain-of-thought fonctionne : tu augmentes la probabilité de tokens 'intermédiaires' qui créent une chaîne causale plus traçable.
- Adversarial Prompting et Jailbreaking : Comprendre le poids des verbes et la jauge DPN te permet de comprendre pourquoi certains jailbreaks fonctionnent—ils manipulent les probabilités de manière inattendue.
- Constitutional AI et Value Alignment : La vidéo soulève la question : si tu ne peux pas tracer le chemin d'un input à un output, comment peux-tu garantir que les valeurs sont alignées ? C'est un défi fondamental.

## Prérequis de compréhension

Pour absorber cette vidéo, tu dois déjà avoir une compréhension basique de : (1) Ce qu'est un LLM et comment il génère du texte (niveau vulgarisation classique). (2) Les concepts de 'tokens' et 'embeddings' (même superficiellement). (3) La notion que les LLM ne 'pensent' pas mais 'calculent statistiquement'. (4) Une curiosité pour les mécanismes internes au-delà du 'comment utiliser ChatGPT'. Si tu n'as pas ces bases, la vidéo sera trop dense. Si tu les as, la vidéo va te propulser dans le top 0,1% de compréhension des LLM. La vidéo suppose aussi une certaine maturité intellectuelle pour accepter que 'personne ne contrôle vraiment l'IA' et que 'même les créateurs ne savent pas ce qu'ils ont construit'—ce qui peut être inconfortable pour certains.

## Citations notables

> Moins de 10000 humains sur 8 milliards comprennent ce qu'il se passe quand tu tapes un prompt.

> Personne, je dis bien personne, ni Samcman, ni Dario Amode, ni Elon Musk, aucun humain sur cette terre ne peut tracer le chemin exact d'un token d'entrée à un token de sortie.

> Nous ne voyons que les ombres sur le mur.

> Un seul mot change tout.

> Savoir et prédire statistiquement sont deux choses fondamentalement différentes.

> Construire, diversifier, détruire et reconstruire.

> Chaque verbe oriente le calcul de probabilité dans une direction différente.

> Quand un prompt ne donne pas le résultat attendu, le problème n'est jamais lié à l'IA.

> Le problème est tout simplement dans la chaîne causale entre vos intentions, vos mots, le traitement du modèle et l'output.

> Les LLM opèrent dans des espaces à 768, 4096, 8192 voire 16384 dimensions. Toi qui es un humain, tu ne peux percevoir que trois dimensions spatiales.
