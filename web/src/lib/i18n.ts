export type Language = "en" | "fr" | "mg" | "es" | "de";

export const supportedLanguages: { id: Language; label: string }[] = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "mg", label: "Malagasy" },
  { id: "es", label: "Español" },
  { id: "de", label: "Deutsch" },
];

export type TranslationKey =
  | "nav_visa"
  | "nav_guided"
  | "nav_stay"
  | "nav_contact"
  | "hero_kicker"
  | "hero_title"
  | "hero_body"
  | "hero_cta_guided"
  | "hero_cta_visa"
  | "visa_eyebrow"
  | "visa_title"
  | "visa_disclaimer_title"
  | "visa_disclaimer_body"
  | "visa_sources_title"
  | "visa_sources_ev_portal"
  | "visa_sources_thirdparty"
  | "visa_tip"
  | "guided_eyebrow"
  | "guided_title_prefix"
  | "guided_card1_title"
  | "guided_card1_body"
  | "guided_card2_title"
  | "guided_card2_body"
  | "guided_card3_title"
  | "guided_card3_body"
  | "guided_cta_body"
  | "guided_cta_button"
  | "stay_eyebrow"
  | "stay_title"
  | "stay_host_title"
  | "stay_host_body"
  | "stay_host_button"
  | "stay_card_cta"
  | "contact_eyebrow"
  | "contact_title_prefix"
  | "contact_whatsapp"
  | "contact_whatsapp_hint"
  | "contact_email"
  | "contact_email_hint"
  | "disclaimer_footer"
  | "toggle_dark"
  | "toggle_light"
  | "toggle_language"
  | "toggle_auto_translate";

type Dict = Record<TranslationKey, string>;

const dicts: Record<Language, Dict> = {
  en: {
    nav_visa: "Visa",
    nav_guided: "Guided tourism",
    nav_stay: "Stay",
    nav_contact: "Contact",
    hero_kicker: "Main tourism hub for Madagascar",
    hero_title:
      "Plan your Madagascar trip with clear visa guidance and a trusted local guide.",
    hero_body:
      "A simple, infographic-first platform that explains the basics of visiting Madagascar and highlights DMA tourisme as a reliable option for guided tourism.",
    hero_cta_guided: "Explore guided tourism",
    hero_cta_visa: "Visa basics",
    visa_eyebrow: "Visa",
    visa_title: "Visa basics (high level, traveler-friendly)",
    visa_disclaimer_title: "Quick disclaimer",
    visa_disclaimer_body:
      "Visa rules and fees can change. This page is for orientation only. Before booking, always verify with official channels (embassy/consulate or the official e-visa portal).",
    visa_sources_title: "Official sources",
    visa_sources_ev_portal: "Madagascar eVisa portal",
    visa_sources_thirdparty:
      "Be cautious with third‑party “e‑visa” websites that add extra fees.",
    visa_tip:
      "Tip: Save your application confirmation and keep a copy of your travel details accessible on arrival.",
    guided_eyebrow: "Guided tourism",
    guided_title_prefix: "Why travel with",
    guided_card1_title: "Less logistics, more trip",
    guided_card1_body:
      "A good guide coordinates transport, timing, and local logistics so you can focus on parks, nature, and culture.",
    guided_card2_title: "Local knowledge",
    guided_card2_body:
      "Spot the right routes, seasons, and highlights with someone who knows Madagascar beyond the map.",
    guided_card3_title: "Confidence and safety",
    guided_card3_body:
      "Help with language, etiquette, and practical decisions reduces stress—especially on multi-stop itineraries.",
    guided_cta_body:
      "Reach out directly to plan a guided trip across Madagascar.",
    guided_cta_button: "Contact DMA tourisme",
    stay_eyebrow: "Stay",
    stay_title: "Example rentals (third‑party)",
    stay_host_title: "Airbnb host",
    stay_host_body:
      "The listings below are external links. Prices and availability are managed by Airbnb.",
    stay_host_button: "DMA Distribution host profile",
    stay_card_cta: "View on Airbnb →",
    contact_eyebrow: "Contact",
    contact_title_prefix: "Contact",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_hint:
      "Fastest way to coordinate routes, timing, and logistics.",
    contact_email: "Email",
    contact_email_hint:
      "Share your dates, cities, and interests to get a trip plan.",
    disclaimer_footer:
      "Visa information on this site is informational only and may be outdated. Always verify requirements and fees using official sources before you travel.",
    toggle_dark: "Dark",
    toggle_light: "Light",
    toggle_language: "Language",
    toggle_auto_translate: "Auto-translate",
  },
  fr: {
    nav_visa: "Visa",
    nav_guided: "Tour guidé",
    nav_stay: "Séjour",
    nav_contact: "Contact",
    hero_kicker: "Le hub tourisme pour Madagascar",
    hero_title:
      "Préparez votre voyage à Madagascar avec des infos visa claires et un guide local de confiance.",
    hero_body:
      "Une plateforme simple et très visuelle pour comprendre l’essentiel et mettre en avant DMA tourisme comme option fiable pour un voyage guidé.",
    hero_cta_guided: "Découvrir le guidage",
    hero_cta_visa: "Visa (essentiel)",
    visa_eyebrow: "Visa",
    visa_title: "Visa (niveau général, facile à lire)",
    visa_disclaimer_title: "Avertissement",
    visa_disclaimer_body:
      "Les règles et frais peuvent changer. Cette page est indicative. Avant de réserver, vérifiez toujours via les canaux officiels (ambassade/consulat ou portail e‑visa).",
    visa_sources_title: "Sources officielles",
    visa_sources_ev_portal: "Portail eVisa Madagascar",
    visa_sources_thirdparty:
      "Attention aux sites “e‑visa” tiers qui ajoutent des frais.",
    visa_tip:
      "Astuce : gardez la confirmation de demande et une copie de vos détails de voyage à portée de main à l’arrivée.",
    guided_eyebrow: "Tourisme guidé",
    guided_title_prefix: "Pourquoi voyager avec",
    guided_card1_title: "Moins de logistique",
    guided_card1_body:
      "Un bon guide gère transport, horaires et logistique locale pour vous laisser profiter des parcs, de la nature et de la culture.",
    guided_card2_title: "Connaissance locale",
    guided_card2_body:
      "Choisissez les bons itinéraires, saisons et incontournables avec un expert du terrain.",
    guided_card3_title: "Sérénité & sécurité",
    guided_card3_body:
      "Aide pour la langue, les usages et les décisions pratiques—idéal sur un itinéraire multi‑étapes.",
    guided_cta_body:
      "Contactez‑nous pour planifier un voyage guidé à Madagascar.",
    guided_cta_button: "Contacter DMA tourisme",
    stay_eyebrow: "Séjour",
    stay_title: "Locations (tiers)",
    stay_host_title: "Hôte Airbnb",
    stay_host_body:
      "Les liens ci‑dessous sont externes. Prix et disponibilités sont gérés par Airbnb.",
    stay_host_button: "Profil hôte DMA Distribution",
    stay_card_cta: "Voir sur Airbnb →",
    contact_eyebrow: "Contact",
    contact_title_prefix: "Contacter",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_hint:
      "Le moyen le plus rapide pour organiser itinéraire et logistique.",
    contact_email: "Email",
    contact_email_hint:
      "Partagez vos dates, villes et envies pour recevoir un plan.",
    disclaimer_footer:
      "Les informations visa sont indicatives et peuvent être obsolètes. Vérifiez toujours via les sources officielles avant le voyage.",
    toggle_dark: "Sombre",
    toggle_light: "Clair",
    toggle_language: "Langue",
    toggle_auto_translate: "Traduction auto",
  },
  mg: {
    nav_visa: "Visa",
    nav_guided: "Fitsidihana miaraka amin’ny mpitari-dalana",
    nav_stay: "Toerana hipetrahana",
    nav_contact: "Fifandraisana",
    hero_kicker: "Foibe fizahan-tany ho an’i Madagasikara",
    hero_title:
      "Amboary ny dianao any Madagasikara: visa mazava sy mpitari‑dàlana azo itokisana.",
    hero_body:
      "Sehatra tsotra, feno sary sy tabilao, hanazava ny fototra ary hanasongadina an’i DMA tourisme ho safidy azo itokisana.",
    hero_cta_guided: "Hijery fitsidihana tarihin’olona",
    hero_cta_visa: "Fototry ny visa",
    visa_eyebrow: "Visa",
    visa_title: "Fototry ny visa (amin’ny ankapobeny)",
    visa_disclaimer_title: "Fanamarihana",
    visa_disclaimer_body:
      "Mety hiova ny fitsipika sy sarany. Ity pejy ity dia fanazavana ankapobeny. Hamarino hatrany amin’ny loharano ofisialy alohan’ny hividianana tapakila.",
    visa_sources_title: "Loharano ofisialy",
    visa_sources_ev_portal: "Tranokala eVisa Madagascar",
    visa_sources_thirdparty:
      "Mitandrema amin’ny tranonkala “e‑visa” tsy ofisialy izay manampy sarany.",
    visa_tip:
      "Soso-kevitra: tehirizo ny fanamafisana (confirmation) sy ny antsipirihan’ny diany rehefa tonga.",
    guided_eyebrow: "Fitsidihana tarihin’olona",
    guided_title_prefix: "Nahoana no miaraka amin’i",
    guided_card1_title: "Kely kokoa ny fikarakarana",
    guided_card1_body:
      "Ny mpitari‑dàlana tsara dia mikarakara fitaterana, ora, sy ny logistika eo an‑toerana.",
    guided_card2_title: "Fahalalana an‑toerana",
    guided_card2_body:
      "Misafidiana lalana sy toerana tsara indrindra araka ny vanim‑potoana sy ny traikefa.",
    guided_card3_title: "Filaminana",
    guided_card3_body:
      "Fanampiana amin’ny fiteny sy ny fomban‑drazana, indrindra raha maro ny toerana haleha.",
    guided_cta_body:
      "Mifandraisa mivantana hanamboatra dia tarihin’olona manerana an’i Madagasikara.",
    guided_cta_button: "Hifandray amin’i DMA tourisme",
    stay_eyebrow: "Toerana hipetrahana",
    stay_title: "Toerana hipetrahana (antoko fahatelo)",
    stay_host_title: "Hôte Airbnb",
    stay_host_body:
      "Rohy ivelany ireo. Airbnb no mitantana ny vidiny sy ny fisiana.",
    stay_host_button: "Profilan’ny hôte DMA Distribution",
    stay_card_cta: "Hijery ao amin’ny Airbnb →",
    contact_eyebrow: "Fifandraisana",
    contact_title_prefix: "Hifandray amin’i",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_hint:
      "Haingana indrindra amin’ny fandrindrana lalana sy logistika.",
    contact_email: "Email",
    contact_email_hint:
      "Alefaso ny daty, tanàna, ary zavatra tianao hahazoana drafitra.",
    disclaimer_footer:
      "Fanazavana ankapobeny ihany ny momba ny visa ary mety ho lany andro. Hamarino amin’ny loharano ofisialy alohan’ny handehanana.",
    toggle_dark: "Maizina",
    toggle_light: "Mazava",
    toggle_language: "Fiteny",
    toggle_auto_translate: "Auto-translate",
  },
  es: {
    nav_visa: "Visa",
    nav_guided: "Tours guiados",
    nav_stay: "Alojamiento",
    nav_contact: "Contacto",
    hero_kicker: "Hub turístico de Madagascar",
    hero_title:
      "Planifica tu viaje a Madagascar con información clara de visa y un guía local de confianza.",
    hero_body:
      "Una plataforma simple y visual que explica lo esencial y destaca a DMA tourisme como una opción confiable para turismo guiado.",
    hero_cta_guided: "Ver tours guiados",
    hero_cta_visa: "Visa (básico)",
    visa_eyebrow: "Visa",
    visa_title: "Visa (nivel general, fácil de leer)",
    visa_disclaimer_title: "Aviso",
    visa_disclaimer_body:
      "Las reglas y tarifas pueden cambiar. Esta página es solo orientativa. Antes de reservar, verifica siempre en canales oficiales.",
    visa_sources_title: "Fuentes oficiales",
    visa_sources_ev_portal: "Portal eVisa de Madagascar",
    visa_sources_thirdparty:
      "Cuidado con sitios de “e‑visa” de terceros que cobran tarifas extra.",
    visa_tip:
      "Consejo: guarda tu confirmación y una copia de tus datos de viaje para la llegada.",
    guided_eyebrow: "Turismo guiado",
    guided_title_prefix: "Por qué viajar con",
    guided_card1_title: "Menos logística",
    guided_card1_body:
      "Un buen guía coordina transporte, horarios y logística local para que disfrutes del viaje.",
    guided_card2_title: "Conocimiento local",
    guided_card2_body:
      "Elige rutas, temporadas y puntos clave con alguien que conoce el terreno.",
    guided_card3_title: "Confianza y seguridad",
    guided_card3_body:
      "Ayuda con idioma, costumbres y decisiones prácticas, ideal en itinerarios con varias paradas.",
    guided_cta_body:
      "Contáctanos para planificar un viaje guiado por Madagascar.",
    guided_cta_button: "Contactar DMA tourisme",
    stay_eyebrow: "Alojamiento",
    stay_title: "Alojamientos (terceros)",
    stay_host_title: "Anfitrión de Airbnb",
    stay_host_body:
      "Los enlaces son externos. Precios y disponibilidad los gestiona Airbnb.",
    stay_host_button: "Perfil del anfitrión DMA Distribution",
    stay_card_cta: "Ver en Airbnb →",
    contact_eyebrow: "Contacto",
    contact_title_prefix: "Contacto",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_hint:
      "La forma más rápida de coordinar rutas y logística.",
    contact_email: "Email",
    contact_email_hint:
      "Comparte fechas, ciudades e intereses para recibir un plan.",
    disclaimer_footer:
      "La información de visa es solo orientativa y puede estar desactualizada. Verifica siempre en fuentes oficiales antes de viajar.",
    toggle_dark: "Oscuro",
    toggle_light: "Claro",
    toggle_language: "Idioma",
    toggle_auto_translate: "Traducción auto",
  },
  de: {
    nav_visa: "Visum",
    nav_guided: "Geführte Touren",
    nav_stay: "Unterkunft",
    nav_contact: "Kontakt",
    hero_kicker: "Tourismus‑Hub für Madagaskar",
    hero_title:
      "Plane deine Madagaskar‑Reise mit klaren Visa‑Infos und einem vertrauenswürdigen lokalen Guide.",
    hero_body:
      "Eine einfache, visuelle Plattform, die das Wichtigste erklärt und DMA tourisme als verlässliche Option für geführte Reisen hervorhebt.",
    hero_cta_guided: "Geführte Touren ansehen",
    hero_cta_visa: "Visa‑Basics",
    visa_eyebrow: "Visum",
    visa_title: "Visa‑Basics (überblick, leicht verständlich)",
    visa_disclaimer_title: "Hinweis",
    visa_disclaimer_body:
      "Regeln und Gebühren können sich ändern. Diese Seite dient nur zur Orientierung. Bitte immer über offizielle Stellen prüfen.",
    visa_sources_title: "Offizielle Quellen",
    visa_sources_ev_portal: "Madagascar eVisa‑Portal",
    visa_sources_thirdparty:
      "Vorsicht bei Drittanbieter‑„e‑visa“‑Websites mit Zusatzgebühren.",
    visa_tip:
      "Tipp: Bestätigung speichern und Reisedaten bei der Ankunft griffbereit haben.",
    guided_eyebrow: "Geführter Tourismus",
    guided_title_prefix: "Warum reisen mit",
    guided_card1_title: "Weniger Organisation",
    guided_card1_body:
      "Ein guter Guide koordiniert Transport, Timing und lokale Logistik.",
    guided_card2_title: "Lokales Know‑how",
    guided_card2_body:
      "Routen, Saison und Highlights mit jemandem planen, der das Land kennt.",
    guided_card3_title: "Sicherheit & Vertrauen",
    guided_card3_body:
      "Hilfe bei Sprache, Etikette und Entscheidungen—besonders bei mehreren Stopps.",
    guided_cta_body:
      "Melde dich, um eine geführte Reise durch Madagaskar zu planen.",
    guided_cta_button: "DMA tourisme kontaktieren",
    stay_eyebrow: "Unterkunft",
    stay_title: "Beispiel‑Unterkünfte (Drittanbieter)",
    stay_host_title: "Airbnb‑Host",
    stay_host_body:
      "Externe Links. Preise und Verfügbarkeit werden von Airbnb verwaltet.",
    stay_host_button: "DMA Distribution Host‑Profil",
    stay_card_cta: "Auf Airbnb ansehen →",
    contact_eyebrow: "Kontakt",
    contact_title_prefix: "Kontakt",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_hint:
      "Schnellster Weg, Route und Logistik zu koordinieren.",
    contact_email: "E‑Mail",
    contact_email_hint:
      "Daten, Städte und Interessen senden, um einen Plan zu erhalten.",
    disclaimer_footer:
      "Visa‑Infos sind nur orientierend und können veraltet sein. Bitte vor der Reise immer offiziell prüfen.",
    toggle_dark: "Dunkel",
    toggle_light: "Hell",
    toggle_language: "Sprache",
    toggle_auto_translate: "Auto‑Übersetzen",
  },
};

export function detectBrowserLanguage(): Language {
  const raw = (typeof navigator !== "undefined" ? navigator.language : "en")
    .toLowerCase()
    .trim();
  if (raw.startsWith("fr")) return "fr";
  if (raw.startsWith("mg")) return "mg";
  if (raw.startsWith("es")) return "es";
  if (raw.startsWith("de")) return "de";
  return "en";
}

export function t(lang: Language, key: TranslationKey): string {
  return dicts[lang]?.[key] ?? dicts.en[key];
}

