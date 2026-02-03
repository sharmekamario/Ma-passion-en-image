/* 
   FICHIER : data.js
   Contient toutes les infos de mes artistes prefs (+ LIENS ARTICLES)
*/

// 1. LISTE DE MES ARTISTES =) (MesArtistes)
const collectionMusique = [
    {
        titre: "Rihanna",
        image: "https://startitkbs.org/wp-content/uploads/2024/05/rihanna.jpg",
        alt: "Portrait de Rihanna souriante avec des belles tresses",
        source: "Start It KBS",
        sourceUrl: "https://startitkbs.org/index.php/2024/05/30/rihanna-de-la-barbade-a-la-celebrite-lascension-dune-icone-du-rnb/",
        description: "Dancehall, reggae et pop",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/5pKCCKE2ajJHZ9KAiaK11H",
        raison: "Rihanna est l’artiste américaine avec qui j’ai commencé à écouter et à essayer de comprendre la musique en anglais"
    },
    {
        titre: "Beyoncé",
        image: "https://dynamicmedia.livenationinternational.com/v/k/s/06123e97-67bb-4744-8aa1-468a08b2103c.jpg?format=webp&width=3840&quality=75",
        alt: "Beyoncé blonde de face",
        source: "Live Nation",
        sourceUrl: "https://www.livenation.fr/beyoncé-tickets-adp960",
        description: "RnB, pop, hip-hop, afrobeats, house et country",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/6vWDO969PvNqNYHIOW5v0m",
        raison: "Beyoncé est une artiste que j'aime voir performer en live pour son énergie ses chorégraphies et sa présence scénique incroyable"
    },
    {
        titre: "Raye",
        image: "https://www.nme.com/wp-content/uploads/2024/01/raye-2024-getty.jpg",
        alt: "La chanteuse Raye ",
        source: "NME",
        sourceUrl: "https://www.nme.com/news/music/raye-calls-out-evil-music-industry-practises-claims-songwriters-are-being-manipulated-3618329",
        description: "RnB, jazz, blues et pop",
        lienSpotify: "https://open.spotify.com/intl-fr/track/55lijDD6OAjLFFUHU9tcDm",
        raison: "J’admire Raye pour sa voix puissante qui modernise le jazz et le blues, avec ses visuels et ses orchestres en live."
    },
    {
        titre: "Frank Ocean",
        image: "https://www.radiofrance.fr/s3/cruiser-production/2022/02/2ff4da71-5449-419c-b0c9-0bc7a245f182/1200x680_sans-titre-10.jpg",
        alt: "Frank Ocean de face avec une veste noir et jaune",
        source: "Radio France",
        sourceUrl: "https://www.radiofrance.fr/mouv/frank-ocean-un-retour-qui-se-precise-enfin-8749232",
        description: "Hip-hop et RnB",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/2h93pZq0e7k5yf4dywlkpM",
        raison: "Frank Ocean est un artiste qui m'inspire fortement dans ma manière de créer de la musique, à travers sa manière d'écrire et de composer ses sons"
    },
    {
        titre: "Travis Scott",
        image: "https://www.rollingstone.fr/wp-content/uploads/2023/07/Travis-Scott-Utopia-Features.jpg",
        alt: "Travis Scott avec des lunettes de soleil et une veste noire",
        source: "Rolling Stone",
        sourceUrl: "https://www.rollingstone.fr/travis-scott-fait-appel-a-beyonce-drake-the-weeknd-et-dautres-sur-utopia/",
        description: "Hip-hop, trap, rap, et pop",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/0Y5tJX1MQlPlqiwlOH1tJY",
        raison: "J'apprécie Travis Scott pour son style de rap américain."
    },
    {
        titre: "Lana Del Rey",
        image: "https://img.nrj.fr/ZeDNitp1pKej02JxHh8yXULLIH8=/http%3A%2F%2Fmedia.nrj.fr%2F436x327%2F2012%2F11%2Flana-del-rey_2382.jpg",
        alt: " le visage de Lana Del Rey ",
        source: "NRJ",
        sourceUrl: "https://www.nrj.fr/artistes/lana-del-rey/photos",
        description: "Pop alternative, dream pop et sadcore",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/00FQb4jTyendYWaN8pK0wa",
        raison: "Lana Del Rey est une artiste qui m'inspire car elle arrive à nous transporter dans son univers unique"
    },
    {
        titre: "Amy Winehouse",
        image: "https://images.rtl.fr/~c/1200v800/rtl2/www/944484-amy-winehouse-inspire-de-nombreuses-chanteuses-a-voix.jpg",
        alt: "Amy Winehouse sur un fond bleu et les cheveux bouclé",
        source: "RTL",
        sourceUrl: "https://www.rtl2.fr/evenements/un-clip-inedit-d-amy-winehouse-va-sortir-le-journal-de-la-musique-du-mercredi-24-janvier-7900345052",
        description: "Soul, rhythm and blues, jazz,",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/6Q192DXotxtaysaqNPy5yR",
        raison: "Amy Winehouse est une artiste légendaire qui a marqué la musique avec sa voix unique et son style"
    },
    {
        titre: "Burna Boy",
        image: "https://www.yanga899.fm/wp-content/uploads/2025/04/Burna-Boy-News-Central-TV-1-819x1024-1.jpg",
        alt: "Burna Boy sur un fond blanc portant un chapeaus",
        source: "Yanga 899 FM",
        sourceUrl: "https://www.yanga899.fm/2025/04/25/people-for-music-industry-try-break-me-burna-boy/",
        description: "Afrobeat, riddims dancehall, reggae",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/3wcj11K77LjEY1PkEazffa",
        raison: "J'aime Burna Boy pour ses sons afrobeat"
    },
    {
        titre: "Aya Nakamura",
        image: "https://generations.fr/media/news/aya-nakamura-brise-un-gros-record-avec-djadja_67bd9328399e3.webp",
        alt: "Aya Nakamura posant avec assurance dans sa robe marron",
        source: "Generations",
        sourceUrl: "https://generations.fr/news/musique/79298/aya-nakamura-brise-un-gros-record-avec-djadja",
        description: "Afrobeat, RnB contemporain français, pop urbaine",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/7IlRNXHjoOCgEAWN5qYksg",
        raison: "Aya Nakamura est une artiste qui à la capacité de créer des hits incontournables"
    },
    {
        titre: "Damso",
        image: "https://www.radiofrance.fr/pikapi/images/989dfb67-d1af-40e1-9546-28d812a0edea/1200x680?webp=false",
        alt: "Portrait de Damso avec ses lunettes de soleil",
        source: "Radio France",
        sourceUrl: "https://www.radiofrance.fr/mouv/podcasts/feed-info/damso-j-etais-dans-la-survie-maintenant-je-vis-le-rappeur-belge-presente-son-ultime-album-beyah-7658399",
        description: "Hip-hop, rap hardcore et trap",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/2UwqpfQtNuhBwviIC0f2ie",
        raison: "Damso est un artiste belge qui inspire par la profondeur de ses textes et sa manière de poser sur les prods"
    },
    {
        titre: "Tiakola",
        image: "https://hiphopcorner.fr/wp-content/uploads/2025/03/Tiakola-nouvel-album-pour-2026-800x800.jpg",
        alt: "Tiakola portant un bonnet blanc et une veste bleu",
        source: "Hip Hop Corner",
        sourceUrl: "https://hiphopcorner.fr/tiakola-annonce-nouvel-album-pour-2026-sortie-tres-attendue/",
        description: "Hip-hop français, drill, et RnB",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/3vUMXQ9kPnZAQkMkZZ7Hfh",
        raison: "Tiakola me suit depuis ma primaire et est un de mes artistes préférés grâce à son style unique entre rap et chant"
    },
    {
        titre: "Pierre Garnier",
        image: "https://cdn-p.smehost.net/sites/6cf68c188f684ae28f321f8329b6359f/wp-content/uploads/2024/10/NEW-CREDITS-NAUMAUR-2-scaled.jpg",
        alt: "Pierre Garnier posant avec une chemise blanche et un gilet noir",
        source: "Sony Music",
        sourceUrl: "https://www.pierregarniermusique.fr/photos/",
        description: "Variété française, Pop française",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/07UyhXWf7aDbvCZKhTKCpr",
        raison: "J'ai commencé à écouter Pierre Garnier grâce à la Star Ac et depuis commencé à m'intéresser à la variété française"
    },
    {
        titre: "Helena Bailly",
        image: "https://rtleng.rosselcdn.net/sites/default/files/dpistyles_v2/rtl_16_9_749w/2024/11/28/node_729983/3970899/public/2024/11/28/helena.jpg?itok=8fYY97vy1732806621",
        alt: "Helena Bailly souriante dans une robe blanche et noir",
        source: "RTL",
        sourceUrl: "https://www.rtl.be/people/news/japprends-devenir-une-femme-et-une-artiste-le-nouveau-quotidien-dhelena-depuis/2024-03-23/article/650669",
        description: "Variété française, Pop française",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/6M0dlWzmJ9Z81JM2WpHbsC",
        raison: "J'aime Helena Bailly depuis que je l'ai connu à la Star AC, et elle m'inspire beaucoup grâce à sa DA travaillée"
    },
    {
        titre: "Ninho",
        image: "https://talents2kin.com/wp-content/uploads/Fz4tlE3WYAImZNT.jpeg",
        alt: "Le rappeur Ninho posant sérieusement avec des lunettes de soleil",
        source: "Talents 2 Kin",
        sourceUrl: "https://talents2kin.com/ninho-le-roi-est-de-retour-son-album-ni-cumule-6m/",
        description: "Rap Français",
        lienSpotify: "https://open.spotify.com/search/ninho",
        raison: "J'apprécie Ninho car c'est un des premier rappeurs français que j'ai écouté et il sait toujours se renouveler"
    },
    {
        titre: "Michael Jackson",
        image: "https://www.onthisday.com/images/people/michael-jackson.jpg?w=360",
        alt: "Michael Jackson portant une veste noire et un gant blanc",
        source: "On This Day",
        sourceUrl: "https://www.onthisday.com/people/michael-jackson",
        description: "Soul, funk, pop et rock",
        lienSpotify: "https://open.spotify.com/search/mickael",
        raison: "J'adore Michael Jackson pour son talent incroyable, c'est un virtuose intemporel qui a révolutionné la musique pop"
    },
    {
        titre: "Boney M.",
        image: "https://mn2s.com/wp-content/uploads/2017/03/Boney-M-MN2S.png",
        alt: "Photo du groupe Boney M ",
        source: "MN2S",
        sourceUrl: "https://mn2s.com/booking-agency/talent-roster/boney-m/",
        description: "Disco, pop, dance et funk",
        lienSpotify: "https://open.spotify.com/search/boney%20m",
        raison: "J'aime Boney M. pour leurs musiques qui me suivent depuis mon enfance et qui me mettent toujours de bonne humeur"
    },
    {
        titre: "ABBA",
        image: "https://img.nrj.fr/S-LdKsNbzP3tf9iGSn0Crz-lD00=/medias%2F2022%2F12%2Fvny3jvhunswjmfrwxq46asbakykf6uhxwyzzas19gxi_63906a11d4b9c.jpg",
        alt: "Les quatre membres du groupe ABBA posant ensemble",
        source: "NRJ",
        sourceUrl: "https://www.nostalgie.fr/artistes/abba/biographie",
        description: "Pop et disco",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/0LcJLqbBmaGUft1e9Mm8HV",
        raison: "J'adore ABBA pour leurs sons entraînants et leur impact culturel durable"
    },
    {
        titre: "Rosalía",
        image: "https://image.tmdb.org/t/p/w500/cXX26s2wZsoChCAP2HjA92CMyYG.jpg",
        alt: "Rosalía regardant la caméra avec une expression intense",
        source: "TMDB",
        sourceUrl: "https://www.themoviedb.org/person/2231189-rosalia?language=fr-FR",
        description: "flamenco, Rnb américain et trap espagnole",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/7ltDVBr6mKbRvohxheJ9h1",
        raison: "Rosalia est une artiste très douée qui me suit depuis le collège à travers ses musiques qui mélangent flamenco et sons modernes"
    },
    {
        titre: "Daniel Caesar",
        image: "https://www.billboard.com/wp-content/uploads/2025/07/cover-daniel-caesar-billboard-2025-bb11-heather-hazzan-2-1240.jpg?w=800",
        alt: "Daniel Caesar posant pour la couverture du magazine Billboard",
        source: "Billboard",
        description: "RnB et Soul",
        sourceUrl: "https://www.billboard.com/photos/daniel-caesar-photos-billboard-cover-shoot-1236027031/",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/20wkVLutqVOYrc0kxFs7rA",
        raison: "Daniel Caesar est un artiste qui apporte une profondeur émotionelle à la musique Rnb et au soul"
    },
    {
        titre: "Labrinth",
        image: "https://hips.hearstapps.com/hmg-prod/images/du01-iconoclast-sony-labrinth-200718-01-060-1604077878.jpg?crop=0.668xw:1.00xh;0.0918xw,0&resize=1200:*",
        alt: "Labrinth assis portant un tenuee jaune moutarde",
        source: "Esquire",
        sourceUrl: "https://www.esquire.com/uk/culture/a34516614/labrinth-interview/",
        description: "RnB, Rap, Pop et Soul",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/2feDdbD5araYcm6JhFHHw7",
        raison: "J'aime Labrinth car il est un artiste polyvalent qui produit lui-même sa musique, de la composition à la performence"
    },
    {
        titre: "Billie Eilish",
        image: "https://focus.courrierinternational.com/2024/05/17/0/0/4854/3236/1280/0/60/0/17882be_1715953228670-000-34la6fr.jpg",
        alt: "Gros plan sur le visage de Billie Eilish aux yeux clairs",
        source: "Courrier International",
        sourceUrl: "https://www.courrierinternational.com/article/vu-de-l-etranger-avec-hit-me-hard-and-soft-billie-eilish-au-firmament-de-la-pop-americaine",
        description: "Electropop, pop, indie pop et dark pop",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/6qqNVTkY8uBg9cP3Jd7DAH",
        raison: "J'admire particulièrement Billie Eilish et son frère Finneaspour leur capacité à collaborer et toujours produire de la musique innovante"
    },
    {
        titre: "PNL",
        image: "https://revrse.b-cdn.net/wp-content/uploads/2021/07/LIVE-PNL-scaled-min.jpg",
        alt: "Le duo PNL sur un fond violet ",
        source: "Revrse",
        sourceUrl: "https://revrse.fr/pnl/",
        description: "Rap Français",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/3NH8t45zOTqzlZgBvZRjvB",
        raison: "Le duo qui a révolutionné le rap français avec leur style unique et textes profonds"
    },
    {
        titre: "Drake",
        image: "https://imgix.bustle.com/uploads/image/2022/9/19/ff94251c-5ce8-4871-9a35-17fb440e17c2-gettyimages-1425027887.jpg",
        alt: "Drake souriant portant un costume noir et un noeud papillon noir",
        source: "Elite Daily",
        sourceUrl: "https://www.elitedaily.com/style/drake-face-tattoo-mom-tribute-red-carpet-photos",
        description: "Hip-Hop et Rap",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/3TVXtAsR1Inumwj472S9r4",
        raison: "C'est un hitmaker mondial capable de rapper et chanter à travers des paroles qui me parlent"
    },
    {
        titre: "Ariana Grande",
        image: "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ftel.2F2020.2F12.2F10.2Fcb05b6dc-9318-4c04-ba30-c419b0c0f0d4.2Epng/1200x900/crop-from/top/quality/80/ariana-grande-fait-une-grande-annonce-qui-va-ravir-ses-fans.jpg",
        alt: "Ariana Grande avec deux couettes ",
        source: "Programme TV",
        sourceUrl: "https://www.programme-tv.net/news/people/266513-ariana-grande-fait-une-grande-annonce-qui-va-ravir-ses-fans/",
        description: "Pop et RnB",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/66CXWjxzNUsdJxJ2JdwvnR",
        raison: "J’aime Ariana Grande parce que sa façon de composer, produire et interpréter la musique"
    },
    {
        titre: "Bruno Mars",
        image: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
        alt: "Bruno Mars portant un costume et des lunettes de soleil jaune",
        source: "Spotify",
        sourceUrl: "https://open.spotify.com/intl-fr/artist/0du5cEVh5yTK9QJze8zA0C",
        description: "Pop,soul, et reggae",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/0du5cEVh5yTK9QJze8zA0C",
        raison: "J’aime Bruno Mars parce qu’il combine une voix exceptionnelle, une énergie incroyable et des styles musicaux variés qui donnent toujours envie de danser"
    },
    {
        titre: "Rnboi",
        image: "https://cdn-images.dzcdn.net/images/cover/e7aecd820984da11a73287ad99392e58/0x1900-000000-80-0-0.jpg",
        alt: "Pochette d'album  de l'artiste Rnboi",
        source: "Deezer",
        sourceUrl: "https://www.16x16.fr/rnboi/",
        description: "RnB, pop et hip-hop",
        lienSpotify: "https://open.spotify.com/intl-fr/artist/4yPFe6ZiSjH5mgjDwiYZgc",
        raison: "Rnboi est un artiste émergent que j'aime écouter actuellement"
    }
];

// 2.  (FunFacts)
const secretsStudio = [
    {
        artiste: "Billie Eilish",
        titre: "Bad Guy",
        image: "https://blog.andersonhopkins.com/wp-content/uploads/2023/10/1349657-env-Billie-Eilish-Finneas-Grammy-Envelope123.jpg",
        alt: "Billie Eilish et son frère Finneas dans un studio d'enregistrement",
        source: "Anderson Hopkins",
        sourceUrl: "https://x.com/FinneasARG/status/1712077479924441328",
        embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        funFact: "Billie Eilish et son frère Finneas utilisent des sons du quotidien dans leurs chansons. Par exemple, dans bury a friend, on peut entendre un bruit inspiré d’une fraise dentaire, et dans bad guy, un son rythmique vient d’un signal sonore de passage piéton.",
        conception: "La majorité des chansons de Billie Eilish sont composées à la maison, dans une chambre ou un petit studio improvisé. Finneas est à la fois compositeur, producteur et beatmaker."
    },
    {
        artiste: "Rihanna",
        titre: "Diamonds",
        image: "https://yamahaden.com/wp-content/uploads/2025/06/Rihannas-Studio.jpg",
        alt: "Rihanna en session d'enregistrement dans un studio",
        source: "Yamaha Den",
        sourceUrl: "https://yamahaden.com/yamaha-products-that-belong-in-rihannas-studio/",
        embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/65YsalQBmQCzIPaay72CzQ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        funFact: "Diamonds, extrait de l’album Unapologetic (2012), a connu un énorme succès dès sa sortie. En France, elle est restée numéro 1 pendant trois semaines . La chanson a été écrite par Sia en seulement 14 minutes et n’était à l’origine pas destinée à Rihanna, mais à Kanye West ou Lana Del Rey. ",
        conception: "Au départ, le producteur Benny Blanco imaginait la chanson pour un rappeur, avec une interprétation plus parlée et minimaliste. Finalement, le duo Stargate a choisi une production plus aérienne, avec une instrumentation simple et des sons atmosphériques, laissant à Rihanna l’espace pour transformer le morceau."
    },
    {
        artiste: "Michael Jackson",
        titre: "Billie Jean",
        image: "https://preview.redd.it/was-michael-jackson-recording-an-album-in-2003-2009-v0-ms3iwb0ezbg91.jpg?width=640&crop=smart&auto=webp&s=1e918c53ce4a5cd6cc96dc4fb46ee504b99daec6",
        alt: "Michael Jackson en studio",
        source: "Reddit",
        sourceUrl: "https://www.reddit.com/r/MichaelJackson/comments/wilum2/was_michael_jackson_recording_an_album_in_20032009/?tl=fr",
        embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7J1uxwnxfQLu4APicE5Rnj?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        funFact: "Billie Jean raconte l’histoire d’une femme qui affirme que Michael Jackson est le père de son enfant, ce qu’il nie fermement. Le personnage s’inspire de plusieurs fans obsédées que Michael et ses frères ont connues dans les années 70.",
        conception: "Michael utilisait sa bouche comme une véritable boîte à rythmes et enregistrait des démos très détaillées. Sur Billie Jean, il a insisté pour que le morceau commence directement par le rythme afin de captiver l’auditeur immédiatement."
    }
];

// 3. la teammm ❤️ !!!!
const defaultData = [
    {
        nom: "Solène", 
        link: "https://open.spotify.com/embed/track/0cu5BBrOXZ1cPVniP6kFPx?utm_source=generator", 
        raison: "Les effets sur la voix et l'ambiance, c'est du génie.", 
        initial: "S"
    },
    {
        nom: "Hadrien C.",
        link: "https://open.spotify.com/embed/track/4E4w4GfRDiI5Qb8OsrxPHO?utm_source=generator",
        raison: "J'aime beaucoup ce son en ce moment",
        initial: "H"
    },
    {
        nom: "Thomas",
        link: "https://open.spotify.com/embed/track/4t9PBD27dndlf6YMBK2ROc?utm_source=generator",
        raison: "Le bridge est divin !",
        initial: "T"
    },
    {
        nom: "Curthis",
        link: "https://open.spotify.com/embed/track/0dZG4yK5yPxGBbViV97mky?utm_source=generator", 
        raison: "J'aime trop les musiques de Kehlani !",
        initial: "C"
    },
    {
        nom: "Yogan",
        link: "https://open.spotify.com/embed/track/1K8HNwB0nnWNKOIbAbFKvl?utm_source=generator", 
        raison: "J'ai découvert l'artiste lors d'un concert, le son m'a d'abord plu pour la prod mais aussi le rythme.",
        initial: "Y"
    },
    {
        nom: "Samantha",
        link: "https://open.spotify.com/embed/track/3irSUC04Pqyzhr51oglyhF?utm_source=generator", 
        raison: "Impossible de ne pas bouger la tête sur ce refrain !",
        initial: "S"
    },
    {
        nom: "Sanjai",
        link: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b", 
        raison: "The Weekend est un artiste incroyable et cette chanson en est la preuve.",
        initial: "S"
    },
    {
        nom: "Kamelia",
        link: "https://open.spotify.com/embed/track/31kxPC3ZB9AYwCLyHaqEVX?utm_source=generator", 
        raison: "J'aime beaucoup la vibe de la musique",
        initial: "K"
    },
    {
        nom: "Rima",
        link: "https://open.spotify.com/embed/track/3oTuTpF1F3A7rEC6RKsMRz?utm_source=generator", 
        raison: "Un son bien doux !!",
        initial: "R"
    }
];