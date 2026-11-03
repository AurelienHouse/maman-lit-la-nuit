export interface BookReview {
  slug: string;
  title: string;
  author: string;
  series?: string;
  publisher: string;
  pages: number;
  releaseYear: number;
  category: "Dark Romance" | "Romantasy" | "New Romance" | "Thriller Psychologique" | "Enemies to Lovers";
  rating: number; // sur 5
  spicyLevel: 1 | 2 | 3 | 4 | 5; // niveau de piment
  darknessLevel: 1 | 2 | 3 | 4 | 5; // niveau de noirceur / émotions intenses
  tropes: string[];
  triggerWarnings: string[];
  coverGradient: string;
  coverAccent: string;
  coverQuote: string;
  publishDate: string;
  readingContext: string; // l'anecdote de maman !
  verdictCourt: string;
  summary: string;
  fullReview: string[];
  pointsForts: string[];
  pourQui: string;
  isFavorite?: boolean;
  commentsCount: number;
  comments: {
    author: string;
    date: string;
    text: string;
    badge?: string;
  }[];
}

export interface CuratedList {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  iconName: string;
  description: string;
  mamaTip: string;
  bookSlugs: string[];
}

export const MAMA_PROFILE = {
  name: "Chloé",
  blogTitle: "❤️ & Lit",
  tagline: "Maman de 2 monstres le jour, dévoreuse de Dark Romance la nuit.",
  subtitle:
    "Entre deux biberons, les devoirs du grand et trois machines de linge, je m'évade dans les univers les plus sombres, intenses et passionnés de la littérature actuelle.",
  stats: [
    { label: "Livres dévorés cette année", value: "114", detail: "et l'année n'est pas finie !" },
    { label: "Enfants à la maison", value: "2", detail: "Léo (7 ans) & Mila (3 ans)" },
    { label: "Heure moyenne de lecture", value: "23h47", detail: "quand tout le monde dort enfin" },
    { label: "Tasses de café / jour", value: "4.5", detail: "survie post-chapitre à 2h du mat'" },
  ],
  currentlyReading: {
    title: "Haunting Adeline - Tome 2",
    author: "H.D. Carlton",
    currentPage: 342,
    totalPages: 580,
    status: "Caché sous le coussin du canapé entre deux épisodes de Pat'Patrouille",
    spicyLevel: 5,
  },
};

export const BOOK_REVIEWS: BookReview[] = [
  {
    slug: "captive-sarah-rivens",
    title: "Captive",
    author: "Sarah Rivens",
    series: "Série Captive - Tome 1",
    publisher: "BMR / HLab",
    pages: 560,
    releaseYear: 2023,
    category: "Dark Romance",
    rating: 4.8,
    spicyLevel: 4,
    darknessLevel: 5,
    tropes: ["Enemies to Lovers", "Mafia / Réseaux", "Proximité forcée", "Morally Grey Hero", "Slow Burn"],
    triggerWarnings: ["Violence", "Captivité", "Traumatismes psychologiques", "Langage explicite"],
    coverGradient: "from-rose-950 via-zinc-950 to-black",
    coverAccent: "#e11d48",
    coverQuote: "« Tu m'appartiens tant que je n'ai pas décidé du contraire. »",
    publishDate: "28 octobre 2026",
    readingContext:
      "Lu en 48h chrono : commencé dans la salle d'attente du pédiatre, terminé à 3h14 du matin avec des cernes jusqu'aux genoux pour préparer les tartines du lendemain.",
    verdictCourt:
      "Le phénomène qui m'a fait plonger tête la première dans la Dark Romance. Asher et Ella forment un duo électrique, toxique au début mais terriblement addictif.",
    summary:
      "Ella est une captive, un pion dans un réseau criminel ultra-codifié. Lorsqu'elle passe entre les mains d'Asher Scott, le chef redouté et glacial du clan le plus puissant, elle s'attend au pire. Mais derrière la violence de leur univers, une tension sourde et indomptable s'installe entre eux.",
    fullReview: [
      "Soyons honnêtes entre nous : quand j'ai vu tout le monde parler de Captive sur BookTok, je me suis dit « Encore un phénomène exagéré ». Et puis, un soir où les petits se sont enfin endormis à 20h30 (miracle !), j'ai ouvert le premier chapitre.",
      "Erreur fatale pour mon quota de sommeil. La plume de Sarah Rivens a ce truc indescriptible qui vous attrape par le col dès les vingt premières pages. Oui, c'est sombre. Oui, l'univers des réseaux est brutal et il faut absolument lire les Trigger Warnings avant de se lancer.",
      "Mais ce qui m'a totalement rendue accro, c'est l'évolution de la dynamique entre Ella et Asher. Ella n'est pas juste une victime passive : elle a du répondant, une résilience folle, et elle pousse Asher dans ses retranchements. Quant à Asher... l'archétype parfait du héros 'Morally Grey' qui brûlerait le monde entier pour elle.",
      "En tant que maman qui court toute la journée après la logistique familiale, cette lecture a été une décharge d'adrénaline pure. Impossible de poser le livre avant de savoir comment ils allaient s'en sortir.",
    ],
    pointsForts: [
      "Un rythme haletant qui empêche littéralement de dormir",
      "Une tension 'Enemies to Lovers' maîtrisée au millimètre",
      "Des personnages secondaires (coucou la famille Scott) qu'on adore",
    ],
    pourQui:
      "Pour celles qui veulent découvrir le pilier de la Dark Romance francophone et qui aiment les héros froids au cœur ultra-protecteur.",
    isFavorite: true,
    commentsCount: 24,
    comments: [
      {
        author: "Julie_BookAddict",
        date: "29 octobre 2026",
        badge: "Maman de 3 enfants",
        text: "Haha le coup de la salle d'attente du pédiatre en cachant la couverture dans le sac à langer, je me reconnais tellement ! Asher Scott a ruiné mes nuits aussi.",
      },
      {
        author: "Camille R.",
        date: "30 octobre 2026",
        badge: "Lectrice nocturne",
        text: "Merci pour ton avis sans filtre ! J'hésitais à cause du côté très sombre mais tu m'as convaincue de tenter le tome 1.",
      },
    ],
  },
  {
    slug: "haunting-adeline-hd-carlton",
    title: "Haunting Adeline",
    author: "H.D. Carlton",
    series: "Cat and Mouse Duet - Tome 1",
    publisher: "Roncière",
    pages: 620,
    releaseYear: 2024,
    category: "Dark Romance",
    rating: 4.9,
    spicyLevel: 5,
    darknessLevel: 5,
    tropes: ["Stalker Romance", "Manoir gothique", "Mystère familial", "Obsession", "Morally Pitch Black"],
    triggerWarnings: ["Stalking", "Dub-con", "Meurtres", "Trafic humain (combattu par le héros)", "Scènes très explicites"],
    coverGradient: "from-red-950 via-neutral-950 to-stone-950",
    coverAccent: "#dc2626",
    coverQuote: "« Cours tant que tu veux, petite souris. Je te retrouverai toujours dans l'ombre. »",
    publishDate: "21 octobre 2026",
    readingContext:
      "Lu exclusivement sur ma liseuse Kindle en mode sombre pendant la sieste de Mila et sur le parking du cours de judo de Léo.",
    verdictCourt:
      "Le niveau supérieur de la Dark Romance. Une ambiance gothique délicieusement angoissante, un double mystère fascinant et un Zade Meadows inoubliable.",
    summary:
      "Adeline hérite du manoir isolé de son arrière-grand-mère, autrice elle-même. En fouillant dans les journaux intimes de son aïeule assassinée, elle découvre qu'un mystérieux inconnu l'observe elle aussi chaque nuit depuis les ombres : Zade, un justicier de l'ombre qui traque les pires prédateurs du monde mais a développé une obsession totale pour elle.",
    fullReview: [
      "Attention, mesdames : ici on ne rigole plus ! Si vous cherchez une petite romance mignonne avec des papillons, fuyez. Haunting Adeline, c'est un mélange explosif entre un thriller gothique à la Stephen King et la Dark Romance la plus sulfureuse du moment.",
      "Ce que j'ai adoré par-dessus tout, c'est l'ambiance du manoir Parsons. L'histoire dans l'histoire avec les vieux journaux intimes de Gigi apporte un vrai suspense policier qui m'a fait frissonner (et vérifier deux fois que la porte d'entrée était bien fermée à clé après avoir couché les enfants !).",
      "Zade Meadows est un personnage totalement paradoxal : il sauve des innocents la journée dans l'ombre, mais devient le prédateur ultime face à Adeline. C'est dérangeant, provocateur, psychologique, et c'est exactement pour ça que ça fonctionne aussi bien.",
    ],
    pointsForts: [
      "Une atmosphère gothique digne d'un vrai thriller psychologique",
      "L'intrigue des journaux intimes de l'arrière-grand-mère",
      "Des scènes d'une intensité rare (5/5 piments bien mérités !)",
    ],
    pourQui:
      "Pour les lectrices aguerries de Dark Romance qui aiment avoir des frissons autant que des palpitations.",
    isFavorite: true,
    commentsCount: 31,
    comments: [
      {
        author: "Sarah_LitLaNuit",
        date: "22 octobre 2026",
        badge: "Team Liseuse",
        text: "La liseuse sur le parking du judo, c'est LA technique secrète des mamans qui lisent de la Dark Romance sans que personne ne voie la couverture !",
      },
      {
        author: "Manon D.",
        date: "24 octobre 2026",
        text: "Le tome 2 est encore plus intense émotionnellement, prépare ta boîte de mouchoirs Chloé !",
      },
    ],
  },
  {
    slug: "twisted-love-ana-huang",
    title: "Twisted Love",
    author: "Ana Huang",
    series: "Série Twisted - Tome 1",
    publisher: "Hugo Roman",
    pages: 440,
    releaseYear: 2023,
    category: "New Romance",
    rating: 4.5,
    spicyLevel: 4,
    darknessLevel: 3,
    tropes: ["Brother's Best Friend", "Grumpy x Sunshine", "Milliardaire", "Vengeance", "Redemption Arc"],
    triggerWarnings: ["Traumatisme d'enfance", "Peur de l'eau", "Trahison familiale", "Scènes explicites"],
    coverGradient: "from-amber-950 via-zinc-950 to-neutral-950",
    coverAccent: "#f59e0b",
    coverQuote: "« Il a un cœur de glace, mais pour elle, il réduirait le monde en cendres. »",
    publishDate: "14 octobre 2026",
    readingContext:
      "Mon compagnon idéal pendant les vacances scolaires : lu sur le transat pendant que les enfants construisaient des cabanes dans le jardin.",
    verdictCourt:
      "La porte d'entrée parfaite entre la New Romance épicée et la Dark Romance légère. Alex Volkov est froid, calculateur, mais tellement dévoué.",
    summary:
      "Alex Volkov est un génie de la finance au visage d'ange mais au cœur façonné par une tragédie passée qui ne lui laisse de place que pour une froide vengeance. Quand son meilleur ami lui demande de veiller sur sa petite sœur Ava, solaire et pleine de vie, ses barrières commencent dangereusement à se fissurer.",
    fullReview: [
      "On me demande très souvent sur Instagram : « Chloé, je veux me mettre à la romance un peu sombre et spicy, mais j'ai peur que ce soit trop violent d'un coup, je commence par quoi ? ». Ma réponse est toujours la même : la saga Twisted d'Ana Huang !",
      "Ava est un vrai rayon de soleil (le fameux trope Grumpy x Sunshine que j'aime d'amour) face à un Alex Volkov qui ne sourit jamais et contrôle absolument tout dans sa vie. Leur alchimie crève les pages.",
      "C'est le livre 'doudou mais pimenté' parfait quand on est épuisée de sa semaine de maman et qu'on veut un page-turner efficace, glamour, avec du suspense et une vraie tension amoureuse.",
    ],
    pointsForts: [
      "Idéal pour débuter dans les romances intenses sans traumatisme",
      "Le trope 'Meilleur ami du grand frère' exécuté à la perfection",
      "Un groupe d'amies soudées qui donne envie de lire tous les tomes suivants",
    ],
    pourQui:
      "Pour celles qui veulent du spicy, un héros ultra-possessif et du drame émotionnel sans tomber dans la violence extrême.",
    isFavorite: false,
    commentsCount: 18,
    comments: [
      {
        author: "Élodie_Maman2Kids",
        date: "15 octobre 2026",
        text: "J'ai commencé par celui-ci grâce à tes stories et j'ai enchaîné les 4 tomes en deux semaines ! Twisted Hate reste mon préféré.",
      },
    ],
  },
  {
    slug: "fourth-wing-rebecca-yarros",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    series: "The Empyrean - Tome 1",
    publisher: "Hugo Roman",
    pages: 680,
    releaseYear: 2024,
    category: "Romantasy",
    rating: 5.0,
    spicyLevel: 4,
    darknessLevel: 4,
    tropes: ["Enemies to Lovers", "Académie militaire", "Dragons", "Shadow Daddy", "Forced Proximity"],
    triggerWarnings: ["Morts de personnages", "Combats violents", "Brutalité militaire", "Scènes explicites"],
    coverGradient: "from-purple-950 via-slate-950 to-black",
    coverAccent: "#a855f7",
    coverQuote: "« Un dragon sans son cavalier est une tragédie. Un cavalier sans son dragon est mort. »",
    publishDate: "6 octobre 2026",
    readingContext:
      "Écouté moitié en livre audio en pliant 4 panières de linge, moitié dévoré en broché collector jusqu'à 2h du matin.",
    verdictCourt:
      "Coup de cœur intersidéral. Xaden Riorson est le roi incontesté des 'Shadow Daddies'. De l'action non-stop, des dragons sarcastiques et une tension folle.",
    summary:
      "Violet Sorrengail devait intégrer le paisible Quadrant des Scribes. Mais sa mère, générale impitoyable, l'oblige à rejoindre le Quadrant des Cavaliers de dragons, où la règle est simple : réussir ou mourir. Pire encore, le chef d'escadrille Xaden Riorson a toutes les raisons de vouloir la tuer.",
    fullReview: [
      "Même si ma spécialité reste la Dark Romance pure et dure, la Romantasy a pris une place énorme dans ma bibliothèque cette année, et Fourth Wing en est le coupable numéro un !",
      "Violet a une maladie chronique qui fragilise ses articulations (et en tant que maman souvent cassée de partout, j'ai adoré voir une héroïne qui utilise son intelligence plutôt que la seule force brute pour survivre).",
      "Et que dire de Xaden Riorson ? Le fameux pouvoir des ombres, la cicatrice, le côté ennemi juré qui finit par l'entraîner en secret... C'est un sans-faute absolu. Même mon mari a fini par me demander qui était ce fameux Xaden dont je parlais en faisant cuire les pâtes !",
    ],
    pointsForts: [
      "Un univers de fantasy hyper accessible même si on n'en lit jamais",
      "Les dialogues hilarants avec le dragon Tairn",
      "La tension électrique entre Violet et Xaden",
    ],
    pourQui:
      "Pour toutes les lectrices qui veulent vibrer, pleurer, rire et s'évader loin du quotidien dès la première page.",
    isFavorite: true,
    commentsCount: 42,
    comments: [
      {
        author: "Laura_B",
        date: "7 octobre 2026",
        badge: "Lectrice fidèle",
        text: "L'astuce du livre audio pendant le pliage du linge a changé ma vie de maman ! Merci Chloé !",
      },
    ],
  },
  {
    slug: "l-as-de-coeur-morgane-moncomble",
    title: "L'As de Cœur",
    author: "Morgane Moncomble",
    series: "Saisons - Tome 4",
    publisher: "Hugo New Romance",
    pages: 520,
    releaseYear: 2024,
    category: "Enemies to Lovers",
    rating: 4.7,
    spicyLevel: 3,
    darknessLevel: 3,
    tropes: ["Fake Dating", "Enemies to Lovers", " célébrité / Poker", "Secrets du passé", "Seconde chance"],
    triggerWarnings: ["Harcèlement médiatique", "Abandon parental", "Relations toxiques passées"],
    coverGradient: "from-fuchsia-950 via-zinc-950 to-black",
    coverAccent: "#d946ef",
    coverQuote: "« Au poker comme en amour, celui qui montre son jeu le premier a déjà perdu. »",
    publishDate: "28 septembre 2026",
    readingContext:
      "Lu pendant un week-end pluvieux pendant que les enfants faisaient de la pâte à modeler sur la table du salon.",
    verdictCourt:
      "Morgane Moncomble ne déçoit jamais. Un jeu du chat et de la souris psychologique, profond et terriblement touchant.",
    summary:
      "Levi est un joueur de poker professionnel réputé pour son sang-froid absolu et son refus de tout attachement. Rose est une influenceuse détestée par le public suite à un scandale. Pour redorer son image et servir les intérêts de Levi, ils signent un contrat de faux couple... mais les cartes sont truquées.",
    fullReview: [
      "Quand j'ai besoin de faire une pause entre deux Dark Romances très violentes tout en gardant des personnages torturés et une tension psychologique forte, je me tourne toujours vers Morgane Moncomble.",
      "La psychologie de Rose et Levi est travaillée avec une finesse incroyable. On comprend leurs armures, leurs failles, et leur jeu de manipulation mutuelle qui se transforme peu à peu en une vulnérabilité bouleversante.",
    ],
    pointsForts: [
      "Une plume fluide et addictive qui touche toujours juste",
      "Le milieu du poker professionnel à Las Vegas super immersif",
      "Deux personnages cabossés par la vie mais magnifiques ensemble",
    ],
    pourQui:
      "Pour celles qui aiment les romances psychologiques intenses où les sentiments prennent le dessus sur les apparences.",
    isFavorite: false,
    commentsCount: 15,
    comments: [],
  },
  {
    slug: "butcher-and-blackbird-brynne-weaver",
    title: "Butcher & Blackbird",
    author: "Brynne Weaver",
    series: "Ruinous Love Trilogy - Tome 1",
    publisher: "Korrigan",
    pages: 480,
    releaseYear: 2024,
    category: "Dark Romance",
    rating: 4.9,
    spicyLevel: 5,
    darknessLevel: 4,
    tropes: ["Comédie noire", "Serial Killers", "Rivals to Lovers", "Golden Retriever Psychopath", "Slow Burn"],
    triggerWarnings: ["Gore", "Cannibalisme évoqué", "Meurtres", "Humour très noir", "Scènes explicites"],
    coverGradient: "from-emerald-950 via-zinc-950 to-black",
    coverAccent: "#10b981",
    coverQuote: "« Qui a dit que deux tueurs en série ne pouvaient pas vivre un conte de fées ? »",
    publishDate: "18 septembre 2026",
    readingContext:
      "Lu en pouffant de rire dans mon lit à minuit (en essayant de ne pas réveiller le petit dernier qui avait fini dans notre chambre).",
    verdictCourt:
      "Une pépite d'humour noir ! Deux tueurs qui ne traquent que d'autres tueurs et qui tombent amoureux lors d'un concours annuel. Original, hilarant et très très chaud.",
    summary:
      "Sloane et Rowan sont deux tueurs en série qui ont une éthique : ils n'éliminent que les monstres. Après s'être croisés par hasard sur une scène de crime, ils lancent un défi annuel à travers les États-Unis. Au fil des années, leur compétition macabre devient la plus belle et la plus déjantée des histoires d'amour.",
    fullReview: [
      "Je n'aurais jamais cru dire un jour d'un livre parlant de deux tueurs en série qu'il est « adorable et hilarant », et pourtant ! Butcher & Blackbird est un OVNI génial dans le monde de la Dark Romance.",
      "Rowan est complètement fou amoureux de Sloane dès le premier regard. C'est ce qu'on appelle un 'Golden Retriever meurtrier' : dangereux pour le reste du monde, mais une vraie guimauve prête à tout pour la faire sourire.",
      "Petit conseil de maman : évitez juste de lire certains chapitres juste avant de préparer le repas du soir, et ne mangez plus jamais de glace aux cookies de la même façon !",
    ],
    pointsForts: [
      "Un mélange unique de Dark Romance et de comédie romantique noire",
      "Rowan Kane, le book boyfriend le plus drôle et dévoué de l'année",
      "Une alchimie explosive qui monte crescendo sur plusieurs années",
    ],
    pourQui:
      "Pour celles qui ont le cœur bien accroché mais qui veulent rire aux éclats tout en lisant de la Dark Romance.",
    isFavorite: true,
    commentsCount: 29,
    comments: [
      {
        author: "Mélanie_K",
        date: "19 septembre 2026",
        text: "Le coup de la glace Oreo/Cookies... je ne m'en remettrai jamais hahaha ! Excellente chronique !",
      },
    ],
  },
  {
    slug: "le-pont-des-tempetes-danielle-l-jensen",
    title: "Le Pont des Tempêtes",
    author: "Danielle L. Jensen",
    series: "Le Royaume du Pont - Tome 1",
    publisher: "Stardust",
    pages: 460,
    releaseYear: 2023,
    category: "Romantasy",
    rating: 4.6,
    spicyLevel: 3,
    darknessLevel: 3,
    tropes: ["Mariage arrangé", "Espionnage", "Enemies to Lovers", "Trahison", "Héroïne guerrière"],
    triggerWarnings: ["Violence de guerre", "Manipulation parentale", "Empoisonnement"],
    coverGradient: "from-cyan-950 via-slate-950 to-black",
    coverAccent: "#06b6d4",
    coverQuote: "« Formée pour le séduire. Envoyée pour le détruire. Condamnée à l'aimer. »",
    publishDate: "5 septembre 2026",
    readingContext:
      "Dévoré pendant le trajet en train pour aller chez les grands-parents pendant que les enfants jouaient aux gommettes.",
    verdictCourt:
      "Le trope du mariage arrangé et de l'espionne ennemie à son apogée. Une tension politique et amoureuse à couper au couteau.",
    summary:
      "Lara a été élevée dans le secret absolu avec ses sœurs pour une seule mission : épouser le roi d'Ithicana, percer les défenses du mythique Pont des Tempêtes et mettre le royaume ennemi à genoux. Mais que faire lorsque le monstre qu'on lui a décrit toute sa vie s'avère être un roi prêt à se sacrifier pour son peuple ?",
    fullReview: [
      "Si vous aimez les héroïnes badass entraînées comme des assassins mais plongées dans un dilemme moral déchirant, foncez tête baissée.",
      "Aren est un roi juste, protecteur, et voir Lara découvrir peu à peu que son propre père lui a menti toute sa vie crée une angoisse permanente : on sait que sa trahison va éclater, et on tourne les pages avec le cœur qui bat à 100 à l'heure.",
    ],
    pointsForts: [
      "Un cadre géographique (le pont au milieu des tempêtes et des requins) ultra original",
      "Le dilemme moral déchirant de l'héroïne",
      "Une fin de tome 1 qui oblige à avoir le tome 2 sous la main immédiatement",
    ],
    pourQui:
      "Pour les amatrices d'intrigues politiques, de mariages arrangés et de romances où la confiance se gagne au prix du sang.",
    isFavorite: false,
    commentsCount: 12,
    comments: [],
  },
  {
    slug: "la-femme-de-menage-freida-mcfadden",
    title: "La Femme de Ménage",
    author: "Freida McFadden",
    series: "Millie Calloway - Tome 1",
    publisher: "City Éditions",
    pages: 410,
    releaseYear: 2023,
    category: "Thriller Psychologique",
    rating: 4.8,
    spicyLevel: 2,
    darknessLevel: 4,
    tropes: ["Huis clos domestique", "Plot Twist massif", "Secrets de couple", "Manipulation", "Vengeance"],
    triggerWarnings: ["Séquestration", "Violence psychologique", "Abus domestiques"],
    coverGradient: "from-violet-950 via-neutral-950 to-black",
    coverAccent: "#8b5cf6",
    coverQuote: "« Bienvenue dans la famille. Fermez bien votre porte à clé la nuit... elle ne ferme que de l'extérieur. »",
    publishDate: "24 août 2026",
    readingContext:
      "Lu en une seule soirée (oui, nuit blanche complète) alors que j'avais promis de me coucher à 22h.",
    verdictCourt:
      "Quand je sors de la Dark Romance, c'est pour un thriller psychologique domestique. Celui-ci retourne le cerveau à mi-parcours !",
    summary:
      "Tout juste sortie de prison, Millie cherche désespérément un emploi pour ne pas dormir dans sa voiture. Lorsque la riche Nina Winchester l'embauche comme femme de ménage logée sur place, cela semble être un miracle. Jusqu'à ce que Nina commence à agir de façon de plus en plus inquiétante et que Millie découvre sa chambre sous les toits...",
    fullReview: [
      "Même si ce n'est pas une Dark Romance à proprement parler, toutes mes copines lectrices de Dark Romance l'ont adoré, et je comprends pourquoi : on retrouve cette ambiance électrique, cette tension psychologique et cet attrait pour le danger domestique.",
      "Le livre se lit à une vitesse folle grâce à des chapitres ultra-courts (le piège classique du « Allez, juste un dernier chapitre de 3 pages avant de dormir » qui finit à 3h du matin).",
    ],
    pointsForts: [
      "Un retournement de situation à la moitié du livre totalement jubilatoire",
      "Des chapitres courts parfaits pour les mamans qui n'ont que 15 minutes par-ci par-là",
      "Une ambiance de huis clos étouffante et addictive",
    ],
    pourQui:
      "Pour toutes celles qui ont une panne de lecture : ce livre vous remettra le pied à l'étrier en moins de 10 pages.",
    isFavorite: false,
    commentsCount: 37,
    comments: [],
  },
];

export const CURATED_LISTS: CuratedList[] = [
  {
    id: "debuter-dark-romance",
    title: "Par où commencer la Dark Romance sans traumatisme ?",
    subtitle: "Le guide progressif du niveau 1 au niveau 5",
    tag: "Guide Débutante",
    iconName: "Flame",
    description:
      "Vous voyez passer des dizaines de titres sur BookTok et Instagram mais vous avez peur de tomber sur un livre trop violent d'entrée de jeu ? Voici ma sélection progressive testée et approuvée.",
    mamaTip:
      "Commencez toujours par une New Romance sombre (type Twisted Love) avant de passer aux vrais 'Morally Pitch Black' comme Haunting Adeline !",
    bookSlugs: ["twisted-love-ana-huang", "l-as-de-coeur-morgane-moncomble", "captive-sarah-rivens"],
  },
  {
    id: "nuits-blanches-garanties",
    title: "Top 3 des livres qui ont ruiné mon quota de sommeil",
    subtitle: "À ne surtout pas commencer un soir d'école !",
    tag: "Addiction 100%",
    iconName: "Moon",
    description:
      "Ces romans ont un point commun : une fois dépassé le chapitre 5, il est humainement impossible de les reposer, même quand le réveil sonne à 6h45 pour préparer les petits-déjeuners.",
    mamaTip:
      "Préparez la cafetière la veille au soir avant d'ouvrir le premier chapitre, vous me remercierez le lendemain matin.",
    bookSlugs: ["captive-sarah-rivens", "fourth-wing-rebecca-yarros", "la-femme-de-menage-freida-mcfadden"],
  },
  {
    id: "5-piments-liseuse",
    title: "Sélection 5 Piments : à lire uniquement sur liseuse en public",
    subtitle: "Couvertures discrètes obligatoires au parc ou chez le pédiatre",
    tag: "Ultra Spicy 🌶️",
    iconName: "Sparkles",
    description:
      "Quand les scènes sont tellement intenses qu'on rougit toute seule sur le banc du parc à jeux pendant que les petits font du toboggan.",
    mamaTip:
      "La liseuse avec un étui fleuri bien sage est la meilleure alliée de la maman lectrice de Dark Romance.",
    bookSlugs: ["haunting-adeline-hd-carlton", "butcher-and-blackbird-brynne-weaver", "fourth-wing-rebecca-yarros"],
  },
];
