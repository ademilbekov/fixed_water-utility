const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "rus",
  otherLanguages: ["kg"], // Другие поддерживаемые языки
  localePath:
    typeof window === "undefined" ? "public/static/locales" : "static/locales",
});
