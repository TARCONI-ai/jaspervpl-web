// Projects: index by category and one page per project. Add `github` to a project when its repo is public.
import type { Lang } from './i18n';

export const projectsPath: Record<Lang, string> = {
  en: '/projects/',
  es: '/es/proyectos/',
  nl: '/nl/projecten/',
};

export const categoryIds = ['apps', 'ai', 'mac'] as const;
export type CategoryId = (typeof categoryIds)[number];

type ProjectCopy = {
  tagline: string;
  summary: string;
  problem: string;
  constraint: string;
  decisions: string[];
  result: string;
};

type Project = {
  slug: string;
  name: string;
  category: CategoryId;
  home?: boolean; // shown on the home page
  stack: string[];
  github?: { url: string; label?: 'case' | 'code' };
  appStore?: string;
  resource?: Record<Lang, string>;
  modified: string;
  copy: Record<Lang, ProjectCopy>;
};

type Labels = {
  title: string;
  description: string;
  intro: string;
  categories: Record<CategoryId, string>;
  problem: string;
  constraint: string;
  decisions: string;
  result: string;
  stack: string;
  github: string;
  githubCase: string;
  appStore: string;
  resource: string;
  open: string;
  author: string;
  updated: string;
  dateLocale: string;
};

export const projectLabels: Record<Lang, Labels> = {
  es: {
    title: 'Proyectos',
    description: 'Proyectos de Jasper van Puffelen López, AI engineer: apps, IA aplicada y utilidades para Mac, con el problema, las decisiones y el resultado de cada uno.',
    intro: 'Lo que he construido, ordenado por tipo. Cada proyecto tiene su página con el problema, las decisiones y el resultado.',
    categories: { apps: 'Apps', ai: 'IA aplicada', mac: 'Utilidades para Mac' },
    problem: 'El problema',
    constraint: 'La restricción',
    decisions: 'Las decisiones',
    result: 'El resultado',
    stack: 'Stack',
    github: 'Ver en GitHub',
    githubCase: 'Caso práctico en GitHub',
    appStore: 'Ver en el App Store',
    resource: 'Descargar la skill',
    open: 'Ver el proyecto',
    author: 'Autor',
    updated: 'Actualizado',
    dateLocale: 'es-ES',
  },
  nl: {
    title: 'Projecten',
    description: 'Projecten van Jasper van Puffelen López, AI-engineer: apps, toegepaste AI en Mac-tools, met per project het probleem, de keuzes en het resultaat.',
    intro: 'Wat ik heb gebouwd, geordend op type. Elk project heeft een eigen pagina met het probleem, de keuzes en het resultaat.',
    categories: { apps: 'Apps', ai: 'Toegepaste AI', mac: 'Mac-tools' },
    problem: 'Het probleem',
    constraint: 'De beperking',
    decisions: 'De keuzes',
    result: 'Het resultaat',
    stack: 'Stack',
    github: 'Bekijk op GitHub',
    githubCase: 'Casestudy op GitHub',
    appStore: 'Bekijk in de App Store',
    resource: 'Download de skill',
    open: 'Bekijk het project',
    author: 'Auteur',
    updated: 'Bijgewerkt',
    dateLocale: 'nl-NL',
  },
  en: {
    title: 'Projects',
    description: 'Projects by Jasper van Puffelen López, AI engineer: apps, applied AI and Mac utilities, each with its problem, decisions and result.',
    intro: 'What I have built, sorted by type. Each project has its own page with the problem, the decisions and the result.',
    categories: { apps: 'Apps', ai: 'Applied AI', mac: 'Mac utilities' },
    problem: 'The problem',
    constraint: 'The constraint',
    decisions: 'The decisions',
    result: 'The result',
    stack: 'Stack',
    github: 'View on GitHub',
    githubCase: 'Case study on GitHub',
    appStore: 'View on the App Store',
    resource: 'Download the skill',
    open: 'See the project',
    author: 'Author',
    updated: 'Updated',
    dateLocale: 'en-GB',
  },
};

export const projects: Project[] = [
  {
    slug: 'nfc-huis',
    name: 'NFC-huis',
    category: 'apps',
    home: true,
    stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'GitHub Pages'],
    github: { url: 'https://github.com/TARCONI-ai/nfc-huis' },
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Una web con pegatinas NFC para la casa de mis abuelos.',
        summary: 'Mis abuelos llevaban la despensa en un Excel. Puse pegatinas NFC que abren una web con letra grande, sin login para no confundirles. La seguridad está en la base de datos. Importé 183 productos en 22 sitios, con prioridad por caducidad según las reglas de su Excel. Tiene 37 tests y cuesta 0 € al mes.',
        problem: 'Mis abuelos llevaban la despensa del garaje en un Excel, y en casa había preguntas de cada día: qué cubo toca sacar, cuánto queda en el congelador, qué caduca primero.',
        constraint: 'Tenía que poder usarlo una persona mayor sin cuentas ni menús que aprender, y costar 0 € al mes.',
        decisions: [
          'Sin login a propósito, para no confundirles. La web es pública y las políticas de seguridad de la base de datos (RLS) limitan el daño. El README explica cómo cerrarla con Supabase Auth.',
          'El calendario de basura es un JSON estático, así que funciona aunque Supabase esté pausado.',
          'El congelador y la despensa comparten pantalla y API de inventario. Cada balda lleva el mismo código que su etiqueta física.',
          'La prioridad por caducidad replica las reglas de su Excel: avisos a 60 y 21 días, y «Weggooien» a los 90 días de caducar.',
        ],
        result: 'Cuatro módulos en neerlandés: basura, congelador, despensa y lista de la compra. Importé 183 productos en 22 sitios, con 37 tests y 0 € al mes.',
      },
      nl: {
        tagline: 'Een website met NFC-stickers voor het huis van mijn grootouders.',
        summary: 'Mijn grootouders hielden hun voorraad bij in Excel. Ik plakte NFC-stickers die een website met grote letters openen, zonder inlog zodat ze niet in de war raken. De beveiliging zit in de database. Ik importeerde 183 producten op 22 plekken, met prioriteit op houdbaarheid volgens de regels uit hun Excel. Het heeft 37 tests en kost € 0 per maand.',
        problem: 'Mijn grootouders hielden de voorraad in de garage bij in Excel, en thuis kwamen dezelfde vragen terug: welke bak moet buiten, hoeveel ligt er nog in de vriezer, wat is het eerst over de datum.',
        constraint: 'Een oudere gebruiker moest ermee kunnen werken zonder accounts of menu’s om te leren, en het mocht € 0 per maand kosten.',
        decisions: [
          'Bewust geen inlog, zodat ze niet in de war raken. De site is openbaar en de beveiligingsregels van de database (RLS) beperken de schade. De README legt uit hoe je hem afsluit met Supabase Auth.',
          'De afvalkalender is statische JSON, dus hij werkt ook als Supabase gepauzeerd is.',
          'Vriezer en voorraad delen één scherm en één inventaris-API. Elke plank heeft dezelfde code als het fysieke etiket.',
          'De prioriteit op houdbaarheid volgt de regels uit hun Excel: waarschuwingen op 60 en 21 dagen, en «Weggooien» bij 90 dagen over de datum.',
        ],
        result: 'Vier onderdelen in het Nederlands: afval, vriezer, voorraden en boodschappen. Ik importeerde 183 producten op 22 plekken, met 37 tests en € 0 per maand.',
      },
      en: {
        tagline: 'A website with NFC stickers for my grandparents’ house.',
        summary: "My grandparents kept track of their pantry in Excel. I added NFC stickers that open a website with large type and no login, so they don't get confused. Security lives in the database. I imported 183 products across 22 locations, prioritised by expiry date using the rules from their spreadsheet. It has 37 tests and costs €0 a month.",
        problem: 'My grandparents kept their garage pantry in Excel, and the same everyday questions kept coming up: which bin goes out, what is left in the freezer, what expires first.',
        constraint: 'An older person had to be able to use it with no accounts or menus to learn, and it had to cost €0 a month.',
        decisions: [
          'No login on purpose, so they don’t get confused. The site is public and the database security policies (RLS) limit the damage. The README explains how to lock it down with Supabase Auth.',
          'The bin calendar is static JSON, so it works even if Supabase is paused.',
          'Freezer and pantry share one screen and one inventory API. Each shelf uses the same code as its physical label.',
          'Expiry priority follows the rules from their spreadsheet: warnings at 60 and 21 days, and “Weggooien” (throw away) at 90 days past the date.',
        ],
        result: 'Four modules in Dutch: bins, freezer, pantry and shopping list. I imported 183 products across 22 locations, with 37 tests and €0 a month.',
      },
    },
  },
  {
    slug: 'opogenius',
    name: 'OpoGenius',
    category: 'apps',
    home: true,
    stack: ['Swift', 'SwiftUI', 'Xcode', 'Claude'],
    github: { url: 'https://github.com/TARCONI-ai/opogenius-case-study', label: 'case' },
    appStore: 'https://apps.apple.com/app/id6772936773',
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Una app de estudio para iOS, mi primera aplicación.',
        summary: 'Mis amigos preparaban oposiciones y vi en ellos el público perfecto para mi primera app. La construí para iOS dirigiendo IA, con una especificación como guía y sin backend. Está publicada en el App Store.',
        problem: 'Mis amigos preparaban oposiciones: meses de temario que hay que repasar con constancia. Vi en ellos el público perfecto para mi primera app.',
        constraint: 'Era mi primer producto y lo construía dirigiendo IA. Todo dependía de decidir bien qué pedirle y de revisar lo que entregaba.',
        decisions: [
          'Mantuve una documentación maestra con la visión, las funciones y las instrucciones para la IA.',
          'La especificación preveía React Native o Flutter con sincronización. El producto final es Swift nativo y sin backend.',
          'Sin cuentas ni telemetría: los datos se quedan en el dispositivo.',
          'Gratis, sin anuncios ni compras dentro de la app.',
        ],
        result: 'Publicada en el App Store, con repaso por intervalos, calendario de exámenes, estadísticas y una mascota que evoluciona. El código es privado. El caso práctico cuenta el proceso completo.',
      },
      nl: {
        tagline: 'Een studie-app voor iOS, mijn eerste applicatie.',
        summary: 'Mijn vrienden bereidden zich voor op de Spaanse ambtenarenexamens en ik zag in hen de perfecte doelgroep voor mijn eerste app. Ik bouwde hem voor iOS door AI aan te sturen, met een specificatie als leidraad en zonder backend. Hij staat in de App Store.',
        problem: 'Mijn vrienden bereidden zich voor op de Spaanse ambtenarenexamens: maandenlang stof die je steeds moet herhalen. Ik zag in hen de perfecte doelgroep voor mijn eerste app.',
        constraint: 'Het was mijn eerste product en ik bouwde het door AI aan te sturen. Alles hing af van goed bepalen wat ik vroeg en reviewen wat eruit kwam.',
        decisions: [
          'Ik hield één hoofddocument bij met de visie, de functies en de instructies voor de AI.',
          'De specificatie ging uit van React Native of Flutter met synchronisatie. Het eindproduct is native Swift, zonder backend.',
          'Geen accounts en geen telemetrie: de gegevens blijven op het apparaat.',
          'Gratis, zonder advertenties of aankopen in de app.',
        ],
        result: 'Staat in de App Store, met herhalen op intervallen, een examenkalender, statistieken en een mascotte die meegroeit. De code is privé. De casestudy vertelt het hele proces.',
      },
      en: {
        tagline: 'A study app for iOS, my first application.',
        summary: "My friends were studying for Spanish civil service exams, and I saw in them the perfect audience for my first app. I built it for iOS by directing AI, with a specification as the guide and no backend. It's live on the App Store.",
        problem: 'My friends were studying for Spanish civil service exams: months of material to review steadily. I saw in them the perfect audience for my first app.',
        constraint: 'It was my first product and I built it by directing AI. Everything depended on deciding well what to ask for and reviewing what came back.',
        decisions: [
          'I kept one master document with the vision, the features and the instructions for the AI.',
          'The specification planned React Native or Flutter with sync. The final product is native Swift with no backend.',
          'No accounts and no telemetry: the data stays on the device.',
          'Free, with no ads or in-app purchases.',
        ],
        result: 'Live on the App Store, with interval-based review, an exam calendar, statistics and a mascot that evolves. The code is private. The case study tells the full process.',
      },
    },
  },
  {
    slug: 'silbo',
    name: 'Silbo',
    category: 'ai',
    home: true,
    stack: ['Swift', 'Ollama', 'gemma4 (12b-mlx)', 'SpeechTranscriber'],
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Dictado por voz para Mac, con todo el proceso en el dispositivo.',
        summary: 'Mi primer proyecto con IA en local. Quería dictar en el Mac sin enviar mi voz a la nube. Apple transcribe en el dispositivo y un modelo local limpia las muletillas. Lo conecté con una llamada directa a la API, porque aquí un MCP no aportaba nada.',
        problem: 'Quería dictar en el Mac sin enviar mi voz a la nube. También era mi primer proyecto con IA en local.',
        constraint: 'Todo tenía que ocurrir en mi propio Mac y funcionar en varios idiomas, incluido el neerlandés.',
        decisions: [
          'La transcripción usa los motores de Apple en el dispositivo: SpeechTranscriber para español e inglés, y DictationTranscriber para otros idiomas como el neerlandés.',
          'Un modelo de Ollama, a elegir, quita muletillas, repeticiones y autocorrecciones, sin traducir.',
          'Silbo y Ollama se comunican con una llamada HTTP directa. Aquí un MCP no aportaba nada.',
          'Al pegar el texto, guarda el portapapeles y después lo restaura.',
        ],
        result: 'Mantienes pulsado un atajo, hablas y, al soltar, el texto limpio aparece en la app activa. Admite unos 68 idiomas y corre en mi MacBook Pro con M5 Pro y 24 GB de memoria.',
      },
      nl: {
        tagline: 'Spraakdictatie voor de Mac, met het hele proces op het apparaat.',
        summary: 'Mijn eerste project met lokale AI. Ik wilde op mijn Mac dicteren zonder mijn stem naar de cloud te sturen. Apple zet spraak op het apparaat om in tekst en een lokaal model haalt de stopwoorden eruit. Ik koppelde het met een directe API-aanroep, want een MCP voegde hier niets toe.',
        problem: 'Ik wilde op mijn Mac dicteren zonder mijn stem naar de cloud te sturen. Het was ook mijn eerste project met lokale AI.',
        constraint: 'Alles moest op mijn eigen Mac gebeuren en in meerdere talen werken, ook in het Nederlands.',
        decisions: [
          'De transcriptie gebruikt de engines van Apple op het apparaat: SpeechTranscriber voor Spaans en Engels, en DictationTranscriber voor andere talen zoals Nederlands.',
          'Een Ollama-model naar keuze haalt stopwoorden, herhalingen en zelfcorrecties eruit, zonder te vertalen.',
          'Silbo en Ollama praten met elkaar via een directe HTTP-aanroep. Een MCP voegde hier niets toe.',
          'Bij het plakken bewaart Silbo het klembord en zet het daarna terug.',
        ],
        result: 'Je houdt een sneltoets ingedrukt, praat en laat los, en de opgeschoonde tekst verschijnt in de actieve app. Het ondersteunt zo’n 68 talen en draait op mijn MacBook Pro met M5 Pro en 24 GB geheugen.',
      },
      en: {
        tagline: 'Voice dictation for the Mac, with the whole process on the device.',
        summary: 'My first project with local AI. I wanted to dictate on my Mac without sending my voice to the cloud. Apple transcribes on the device and a local model cleans up the filler words. I connected them with a direct API call, because MCP added nothing here.',
        problem: 'I wanted to dictate on my Mac without sending my voice to the cloud. It was also my first project with local AI.',
        constraint: 'Everything had to happen on my own Mac and work in several languages, including Dutch.',
        decisions: [
          'Transcription uses Apple’s engines on the device: SpeechTranscriber for Spanish and English, and DictationTranscriber for other languages such as Dutch.',
          'An Ollama model of your choice removes filler words, repetitions and self-corrections, without translating.',
          'Silbo and Ollama talk through a direct HTTP call. MCP added nothing here.',
          'When pasting, it saves the clipboard and restores it afterwards.',
        ],
        result: 'You hold a shortcut, speak and let go, and the clean text appears in the active app. It supports about 68 languages and runs on my MacBook Pro with M5 Pro and 24 GB of memory.',
      },
    },
  },
  {
    slug: 'ai-overviews-writer',
    name: 'ai-overviews-writer',
    category: 'ai',
    home: true,
    stack: ['Agent Skills', 'Markdown'],
    github: { url: 'https://github.com/TARCONI-ai/skills/tree/main/ai-overviews-writer' },
    resource: {
      en: '/resources/ai-overviews-writer/',
      es: '/es/recursos/ai-overviews-writer/',
      nl: '/nl/resources/ai-overviews-writer/',
    },
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Una skill abierta para escribir artículos que la IA pueda citar.',
        summary: 'En 2025 hice un GPT que escribía artículos con una estructura fija, y salían genéricos. Esta skill abierta conserva la estructura y no redacta sin un caso propio del autor.',
        problem: 'En 2025 hice un GPT que escribía artículos con una estructura fija para AI Overviews. La estructura funcionaba, pero sin experiencia propia ni revisión humana los artículos salían genéricos.',
        constraint: 'Tenía que funcionar en cualquier agente compatible, sin depender de una sola plataforma.',
        decisions: [
          'Formato abierto Agent Skills: un archivo SKILL.md que cualquier agente compatible puede cargar.',
          'Cinco pasos: briefing, estructura, redacción, página y chequeo.',
          'No redacta sin un elemento propio del autor, y la revisión final siempre es suya.',
        ],
        result: 'Publicada con licencia MIT. Se puede descargar desde esta web o leer en GitHub.',
      },
      nl: {
        tagline: 'Een open skill om artikelen te schrijven die AI kan citeren.',
        summary: 'In 2025 maakte ik een GPT die artikelen schreef volgens een vaste structuur, en die werden generiek. Deze open skill behoudt de structuur en schrijft niets zonder een eigen voorbeeld van de auteur.',
        problem: 'In 2025 maakte ik een GPT die artikelen schreef volgens een vaste structuur voor AI Overviews. De structuur werkte, maar zonder eigen ervaring en menselijke review werden de artikelen generiek.',
        constraint: 'Het moest werken in elke compatibele agent, zonder afhankelijk te zijn van één platform.',
        decisions: [
          'Open Agent Skills-formaat: een SKILL.md-bestand dat elke compatibele agent kan laden.',
          'Vijf stappen: briefing, structuur, schrijven, pagina en controle.',
          'Het schrijft niets zonder een eigen element van de auteur, en de laatste review blijft altijd bij de auteur.',
        ],
        result: 'Gepubliceerd onder MIT-licentie. Je kunt het downloaden via deze site of lezen op GitHub.',
      },
      en: {
        tagline: 'An open skill for writing articles that AI can cite.',
        summary: 'In 2025 I built a GPT that wrote articles with a fixed structure, and they came out generic. This open skill keeps the structure and won’t draft without a first-hand example from the author.',
        problem: 'In 2025 I built a GPT that wrote articles with a fixed structure for AI Overviews. The structure worked, but without first-hand experience or human review the articles came out generic.',
        constraint: 'It had to work in any compatible agent, without depending on one platform.',
        decisions: [
          'Open Agent Skills format: a SKILL.md file that any compatible agent can load.',
          'Five steps: briefing, structure, drafting, page and check.',
          'It won’t draft without a first-hand element from the author, and the final review always stays with the author.',
        ],
        result: 'Published under the MIT license. You can download it from this site or read it on GitHub.',
      },
    },
  },
  {
    slug: 'dropwheel',
    name: 'DropWheel',
    category: 'mac',
    stack: ['Swift', 'AppKit', 'Vision', 'macOS 15'],
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Un conversor de archivos que aparece al arrastrar.',
        summary: 'Un conversor para la barra de menús del Mac. Al arrastrar archivos con ⌥ pulsada, aparece una rueda de formatos bajo el cursor. Casi todo funciona sin conexión y nunca sobrescribe el original.',
        problem: 'Convertir un archivo suele obligar a abrir otra app o a subirlo a una web.',
        constraint: 'Quería que funcionara sin conexión y sin pedir permisos de accesibilidad.',
        decisions: [
          'Un temporizador a 10 Hz consulta el ratón, las teclas y el portapapeles de arrastre. Así el gesto funciona sin permisos especiales.',
          'Usa las funciones de macOS (ImageIO, AVFoundation, PDFKit, Vision) siempre que puede. ffmpeg y webp son opcionales para formatos concretos.',
          'Nunca sobrescribe: guarda el resultado junto al original o en la carpeta que elijas.',
        ],
        result: 'Convierte imagen, vídeo, audio, PDF, documentos, subtítulos y archivos comprimidos. También une PDF, hace OCR y vigila carpetas.',
      },
      nl: {
        tagline: 'Een bestandsconverter die verschijnt tijdens het slepen.',
        summary: 'Een converter voor de menubalk van de Mac. Sleep je bestanden met ⌥ ingedrukt, dan verschijnt er een wiel met formaten onder de cursor. Bijna alles werkt offline en het origineel wordt nooit overschreven.',
        problem: 'Een bestand omzetten betekent meestal een andere app openen of het uploaden naar een website.',
        constraint: 'Het moest offline werken en zonder toegankelijkheidsrechten te vragen.',
        decisions: [
          'Een timer van 10 Hz leest de muis, de toetsen en het sleep-klembord uit. Zo werkt het gebaar zonder speciale rechten.',
          'Het gebruikt waar het kan de functies van macOS (ImageIO, AVFoundation, PDFKit, Vision). ffmpeg en webp zijn optioneel voor specifieke formaten.',
          'Het overschrijft nooit: het resultaat komt naast het origineel of in een map naar keuze.',
        ],
        result: 'Het zet afbeeldingen, video, audio, pdf’s, documenten, ondertitels en archieven om. Het voegt ook pdf’s samen, doet OCR en bewaakt mappen.',
      },
      en: {
        tagline: 'A file converter that appears while you drag.',
        summary: 'A converter for the Mac menu bar. Drag files while holding ⌥ and a wheel of formats appears under the cursor. Almost everything works offline and it never overwrites the original.',
        problem: 'Converting a file usually means opening another app or uploading it to a website.',
        constraint: 'I wanted it to work offline and without asking for accessibility permissions.',
        decisions: [
          'A 10 Hz timer reads the mouse, the keys and the drag pasteboard. That lets the gesture work with no special permissions.',
          'It uses macOS features (ImageIO, AVFoundation, PDFKit, Vision) wherever it can. ffmpeg and webp are optional for specific formats.',
          'It never overwrites: results go next to the original or into a folder you choose.',
        ],
        result: 'It converts images, video, audio, PDFs, documents, subtitles and archives. It also merges PDFs, runs OCR and watches folders.',
      },
    },
  },
  {
    slug: 'wheely',
    name: 'Wheely',
    category: 'mac',
    stack: ['Swift', 'macOS 13'],
    modified: '2026-11-05',
    copy: {
      es: {
        tagline: 'Un lanzador radial para macOS.',
        summary: 'Una rueda bajo el cursor para abrir tus apps, sin límites, sin trial y sin versión Pro. Se activa con un gesto de teclado y también se puede usar desde scripts.',
        problem: 'Quería abrir apps desde una rueda bajo el cursor, sin límites, sin trial y sin versión Pro.',
        constraint: 'Tenía que responder a un gesto rápido y poder usarse también desde el teclado y desde scripts.',
        decisions: [
          'Se activa con doble pulsación de ⌥, configurable, o con un atajo propio.',
          'Con la rueda abierta, casi todo tiene tecla: Tab para las apps abiertas, letras como acceso directo y Esc para cancelar.',
          'Se puede llamar desde scripts y Atajos con una notificación del sistema.',
        ],
        result: 'Una app nativa en Swift que se compila y se instala en Aplicaciones con un solo comando.',
      },
      nl: {
        tagline: 'Een radiale launcher voor macOS.',
        summary: 'Een wiel onder de cursor om je apps te openen, zonder limieten, zonder trial en zonder Pro-versie. Je activeert het met een toetsgebaar en je kunt het ook vanuit scripts gebruiken.',
        problem: 'Ik wilde apps openen vanuit een wiel onder de cursor, zonder limieten, zonder trial en zonder Pro-versie.',
        constraint: 'Het moest reageren op een snel gebaar en ook werken vanaf het toetsenbord en vanuit scripts.',
        decisions: [
          'Je activeert het door twee keer op ⌥ te drukken, instelbaar, of met een eigen sneltoets.',
          'Met het wiel open heeft bijna alles een toets: Tab voor open apps, letters als snelkoppeling en Esc om te annuleren.',
          'Je kunt het aanroepen vanuit scripts en Opdrachten via een systeemmelding.',
        ],
        result: 'Een native Swift-app die je met één commando bouwt en in Apps installeert.',
      },
      en: {
        tagline: 'A radial launcher for macOS.',
        summary: 'A wheel under the cursor to open your apps, with no limits, no trial and no Pro version. You trigger it with a key gesture and can also use it from scripts.',
        problem: 'I wanted to open apps from a wheel under the cursor, with no limits, no trial and no Pro version.',
        constraint: 'It had to respond to a quick gesture and also work from the keyboard and from scripts.',
        decisions: [
          'It opens with a double press of ⌥, configurable, or with its own shortcut.',
          'With the wheel open, almost everything has a key: Tab for open apps, letters as shortcuts and Esc to cancel.',
          'It can be called from scripts and Shortcuts through a system notification.',
        ],
        result: 'A native Swift app that builds and installs into Applications with one command.',
      },
    },
  },
];
