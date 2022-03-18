import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  ca: {
    translation: {
      placeholder: "Poble...",
      guess: "Endevinar",
      share: "Compartir",
      showOnGoogleMaps: "👀 a Google Maps",
      welldone: "Ben fet!",
      unknownTown: "Poble desconegut!",
      copy: "Resultat copiat!",
      showTown: "🗺️ mostrar mapa!",
      cancelRotation: "🌀 Anular rotació",
      settings: {
        title: "Paràmetres",
        distanceUnit: "Unitat de distància",
        theme: "Tema",
        difficultyModifiers: "Modificador de dificultat",
        startingNextDay: "A partir de demà!",
        noImageMode: "Ocultar l'imatge del poble per un major desafiament.",
        rotationMode: "Gira l'imatge del poble aleatòriament",
      },
      stats: {
        title: "Estadístiques",
        played: "Jugades",
        win: "Guanyades %",
        currentStreak: "Sèrie actual",
        maxStreak: "Sèrie màxima",
        averageBestDistance: "Millor distància mesurada",
        guessDistribution: "Distribució d'encerts:",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "ca",
  });

export default i18n;
