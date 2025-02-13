// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = [
  "a",
  "ab",
  "al",
  "av",
  "b",
  "ba",
  "bi",
  "bu",
  "c",
  "ca",
  "cc",
  "ce",
  "co",
  "cr",
  "cs",
  "cu",
  "gc",
  "gi",
  "gr",
  "gu",
  "h",
  "hu",
  "ib",
  "j",
  "l",
  "le",
  "lo",
  "lu",
  "m",
  "ma",
  "ml",
  "mu",
  "na",
  "o",
  "ou",
  "p",
  "po",
  "s",
  "sa",
  "se",
  "sg",
  "so",
  "ss",
  "t",
  "te",
  "tf",
  "to",
  "v",
  "va",
  "vi",
  "z",
  "za",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    code: "A",
    latitude: 38.4786378049,
    longitude: -0.568699068376,
    name: "Alicante",
  },
  {
    code: "AB",
    latitude: 38.8254086192,
    longitude: -1.98037326935,
    name: "Albacete",
  },
  {
    code: "AL",
    latitude: 37.1960852121,
    longitude: -2.3448128003,
    name: "Almeria",
  },
  {
    code: "AV",
    latitude: 40.5710367492,
    longitude: -4.94553505619,
    name: "Avila",
  },
  {
    code: "B",
    latitude: 41.7310008895,
    longitude: 1.98405401772,
    name: "Barcelona",
  },
  {
    code: "BA",
    latitude: 38.7097707381,
    longitude: -6.14158521981,
    name: "Badajoz",
  },
  {
    code: "BI",
    latitude: 43.2376797057,
    longitude: 2.85260007926,
    name: "Vizcaya",
  },
  {
    code: "BU",
    latitude: 42.3687127267,
    longitude: 3.58574245567,
    name: "Burgos",
  },
  {
    code: "C",
    latitude: 43.1257958229,
    longitude: -8.4642836868,
    name: "Coruña",
  },
  {
    code: "CA",
    latitude: 36.5538729195,
    longitude: 5.7604183752,
    name: "Cadiz",
  },
  {
    code: "CC",
    latitude: 39.7118899607,
    longitude: -6.16082194997,
    name: "Caceres",
  },
  {
    code: "CE",
    latitude: 35.8934069863,
    longitude: -5.34342403891,
    name: "Ceuta",
  },
  {
    code: "CO",
    latitude: 37.9926944409,
    longitude: -4.80926161095,
    name: "Cordoba",
  },
  {
    code: "CR",
    latitude: 38.9256128254,
    longitude: -3.82809764894,
    name: "Ciudad Real",
  },
  {
    code: "CS",
    latitude: 40.2413705852,
    longitude: -0.146777086937,
    name: "Castellon",
  },
  {
    code: "CU",
    latitude: 39.8960496846,
    longitude: -2.19567153274,
    name: "Cuenca",
  },
  {
    code: "GC",
    latitude: 28.3624928216,
    longitude: -14.5509933924,
    name: "Gran Canaria",
  },
  {
    code: "GI",
    latitude: 42.1280117119,
    longitude: 2.6735559327,
    name: "Girona",
  },
  {
    code: "GR",
    latitude: 37.3125169672,
    longitude: -3.26788107732,
    name: "Granada",
  },
  {
    code: "GU",
    latitude: 40.8134495654,
    longitude: -2.62368878371,
    name: "Guadalajara",
  },
  {
    code: "H",
    latitude: 37.5771794021,
    longitude: -6.82930221031,
    name: "Huelva",
  },
  {
    code: "HU",
    latitude: 42.2030557371,
    longitude: -0.0728865943582,
    name: "Huesca",
  },
  {
    code: "IB",
    latitude: 39.5751889864,
    longitude: 2.91229172079,
    name: "Baleares",
  },
  {
    code: "J",
    latitude: 38.0165122783,
    longitude: -3.44169215171,
    name: "Jaen",
  },
  {
    code: "L",
    latitude: 42.0439686698,
    longitude: 1.04798206104,
    name: "Lerida",
  },
  {
    code: "LE",
    latitude: 42.6199552439,
    longitude: -5.83988102629,
    name: "Leon",
  },
  {
    code: "LO",
    latitude: 42.2748706958,
    longitude: -2.5170441194,
    name: "La Rioja",
  },
  {
    code: "LU",
    latitude: 43.011764,
    longitude: -7.44638404764,
    name: "Lugo",
  },
  {
    code: "M",
    latitude: 40.4950873744,
    longitude: -3.71704619215,
    name: "Madrid",
  },
  {
    code: "MA",
    latitude: 36.8138591651,
    longitude: -4.72586195603,
    name: "Malaga",
  },
  {
    code: "ML",
    latitude: 35.2908279949,
    longitude: -2.95053552337,
    name: "Melilla",
  },
  {
    code: "MU",
    latitude: 38.0023681653,
    longitude: -1.48575629332,
    name: "Murcia",
  },
  {
    code: "NA",
    latitude: 42.6672011509,
    longitude: -1.64611414443,
    name: "Navarra",
  },
  {
    code: "O",
    latitude: 43.292357861,
    longitude: -5.99350932547,
    name: "Asturias",
  },
  {
    code: "OU",
    latitude: 42.1964503002,
    longitude: -7.59259790937,
    name: "Ourense",
  },
  {
    code: "P",
    latitude: 42.3718338546,
    longitude: -4.53585717538,
    name: "Palencia",
  },
  {
    code: "PO",
    latitude: 42.435764706,
    longitude: -8.46106294738,
    name: "Pontevedra",
  },
  {
    code: "S",
    latitude: 43.1975220484,
    longitude: -4.03002122038,
    name: "Cantabria",
  },
  {
    code: "SA",
    latitude: 40.8049892162,
    longitude: -6.06541224773,
    name: "Salamanca",
  },
  {
    code: "SE",
    latitude: 37.4356699135,
    longitude: -5.68277303032,
    name: "Sevilla",
  },
  {
    code: "SG",
    latitude: 41.1710254065,
    longitude: -4.05415057783,
    name: "Segovia",
  },
  {
    code: "SO",
    latitude: 41.6207742504,
    longitude: -2.58874304739,
    name: "Soria",
  },
  {
    code: "SS",
    latitude: 43.1437759117,
    longitude: -2.19417845709,
    name: "Gipuzcoa",
  },
  {
    code: "T",
    latitude: 41.0876143957,
    longitude: 0.818127863314,
    name: "Tarragona",
  },
  {
    code: "TE",
    latitude: 40.6612619615,
    longitude: -0.815532258446,
    name: "Teruel",
  },
  {
    code: "TF",
    latitude: 28.3125567678,
    longitude: -17.017856743,
    name: "Tenerife",
  },
  {
    code: "TO",
    latitude: 39.7937341614,
    longitude: -4.14815562595,
    name: "Toledo",
  },
  {
    code: "V",
    latitude: 39.3702562375,
    longitude: -0.800789615081,
    name: "Valencia",
  },
  {
    code: "VA",
    latitude: 41.6341260695,
    longitude: -4.84719141141,
    name: "Valladolid",
  },
  {
    code: "VI",
    latitude: 42.8351264353,
    longitude: -2.72060346921,
    name: "Alava",
  },
  {
    code: "Z",
    latitude: 41.6203648019,
    longitude: -1.06449678144,
    name: "Zaragoza",
  },
  {
    code: "ZA",
    latitude: 41.7271743961,
    longitude: -5.98053925522,
    name: "Zamora",
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

// Source: https://fr.wikipedia.org/wiki/ISO_3166
const frenchCountryNames: Record<string, string> = {
  AF: "Afghanistan",
  AX: "Åland",
  AL: "Albanie",
  DZ: "Algérie",
  AS: "Samoa américaines",
  AD: "Andorre",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctique",
  AG: "Antigua-et-Barbuda",
  AR: "Argentine",
  AM: "Arménie",
  AW: "Aruba",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerbaïdjan",
  BS: "Bahamas",
  BH: "Bahreïn",
  BD: "Bangladesh",
  BB: "Barbade",
  BY: "Bélarus",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "Bénin",
  BM: "Bermudes",
  BT: "Bhoutan",
  BO: "Bolivie",
  BQ: "Bonaire, Saint-Eustache et Saba",
  BA: "Bosnie-Herzégovine",
  BW: "Botswana",
  BV: "Bouvet",
  BR: "Brésil",
  IO: "Indien",
  BN: "Brunéi Darussalam",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  KY: "Caïmans",
  CF: "République centrafricaine",
  TD: "Tchad",
  CL: "Chili",
  CN: "Chine",
  CX: "Christmas",
  CC: "Cocos",
  CO: "Colombie",
  KM: "Comores",
  CD: "République démocratique du Congo",
  CG: "Congo",
  CK: "Cook",
  CR: "Costa Rica",
  HR: "Croatie",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Chypre",
  CZ: "Tchéquie",
  DK: "Danemark",
  DJ: "Djibouti",
  DM: "Dominique",
  DO: "République dominicaine",
  EC: "Équateur",
  EG: "Égypte",
  SV: "Salvador",
  GQ: "Guinée équatoriale",
  ER: "Érythrée",
  EE: "Estonie",
  SZ: "Eswatini",
  ET: "Éthiopie",
  FK: "Îles Falkland (Malvinas)",
  FO: "Féroé",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GF: "Guyane française",
  PF: "Polynésie française",
  TF: "Terres australes françaises",
  GA: "Gabon",
  GM: "Gambie",
  GE: "Géorgie",
  DE: "Allemagne",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Grèce",
  GL: "Groenland",
  GD: "Grenade",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guinée",
  GW: "Guinée-Bissau",
  GY: "Guyana",
  HT: "Haïti",
  HM: "Heard-et-Îles MacDonald",
  VA: "Saint-Siège",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hongrie",
  IS: "Islande",
  IN: "Inde",
  ID: "Indonésie",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Irlande",
  IM: "Île de Man",
  IL: "Israël",
  IT: "Italie",
  CI: "Côte d'Ivoire",
  JM: "Jamaïque",
  JP: "Japon",
  JE: "Jersey",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Corée du Nord",
  KR: "Corée du Sud",
  KW: "Koweït",
  KG: "Kirghizistan",
  LA: "Lao",
  LV: "Lettonie",
  LB: "Liban",
  LS: "Lesotho",
  LR: "Libéria",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaisie",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MH: "Marshall",
  MQ: "Martinique",
  MR: "Mauritanie",
  MU: "Maurice",
  YT: "Mayotte",
  MX: "Mexique",
  FM: "Micronésie",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Monténégro",
  MS: "Montserrat",
  MA: "Maroc",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibie",
  NR: "Nauru",
  NP: "Népal",
  NL: "Pays-Bas",
  NC: "Nouvelle-Calédonie",
  NZ: "Nouvelle-Zélande",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigéria",
  NU: "Niue",
  NF: "Norfolk",
  MK: "Macédoine du Nord",
  MP: "Mariannes du Nord",
  NO: "Norvège",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palaos",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guinée",
  PY: "Paraguay",
  PE: "Pérou",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Pologne",
  PT: "Portugal",
  PR: "Porto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Roumanie",
  RU: "Russie",
  RW: "Rwanda",
  BL: "Saint-Barthélemy",
  SH: "Sainte-Hélène, Ascension et Tristan da Cunha",
  KN: "Saint-Kitts-et-Nevis",
  LC: "Sainte-Lucie",
  MF: "Saint-Martin",
  PM: "Saint-Pierre-et-Miquelon",
  VC: "Saint-Vincent-et-les Grenadines",
  WS: "Samoa",
  SM: "Saint-Marin",
  ST: "Sao Tomé-et-Principe",
  SA: "Arabie saoudite",
  SN: "Sénégal",
  RS: "Serbie",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SX: "Saint-Martin",
  SK: "Slovaquie",
  SI: "Slovénie",
  SB: "Salomon",
  SO: "Somalie",
  ZA: "Afrique du Sud",
  GS: "Géorgie du Sud-et-les Îles Sandwich du Sud",
  SS: "Soudan du Sud",
  ES: "Espagne",
  LK: "Sri Lanka",
  SD: "Soudan",
  SR: "Suriname",
  SJ: "Svalbard et l'Île Jan Mayen",
  SE: "Suède",
  CH: "Suisse",
  SY: "Syrie",
  TW: "Taïwan",
  TJ: "Tadjikistan",
  TZ: "Tanzanie",
  TH: "Thaïlande",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinité-et-Tobago",
  TN: "Tunisie",
  TR: "Turquie",
  TM: "Turkménistan",
  TC: "Turks-et-Caïcos",
  TV: "Tuvalu",
  UG: "Ouganda",
  UA: "Ukraine",
  AE: "Émirats arabes unis",
  GB: "Royaume-Uni",
  UM: "Îles mineures éloignées des États-Unis",
  US: "États-Unis d'Amérique",
  UY: "Uruguay",
  UZ: "Ouzbékistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Vierges britanniques",
  VI: "Vierges des États-Unis",
  WF: "Wallis-et-Futuna",
  EH: "Sahara occidental",
  YE: "Yémen",
  ZM: "Zambie",
  ZW: "Zimbabwe",
  AN: "Antilles néerlandaises",
  GZ: "Bande de Gaza",
  XK: "Kosovo",
};

export function getCountryName(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
