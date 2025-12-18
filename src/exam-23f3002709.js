import { displayQuestions } from "./utils/display.js";
import { md } from "./utils/markdown.js";

// Core Tools in Data Science (from all GA modules)
import excel from "./tds/spreadsheets.md";
import json from "./tds/json.md";
import pythonAnalysis from "./tds/data-analysis-with-python.md";
import dataTransformation from "./tds/data-transformation-in-excel.md";
import webScraping from "./tds/scraping-imdb-with-javascript.md";
import geospatial from "./tds/geospatial-analysis-with-excel.md";
import imageCompression from "./tds/image-compression.md";
import largeLanguageModels from "./tds/large-language-models.md";
import visualization from "./tds/data-visualization-with-seaborn.md";

export async function questions(user, elementMap) {
  const results = [
    // GA1: Core Tools - JSON Wrangling
    {
      ...(await import("./q-sort-filter-json.js").then((m) => m.default({ user, weight: 1.0 })));
      help: md(json),
    },

     // ---- Examples for Additional Creative Questions ------

     // 1. GA2: Create EDA in Python for Dataset Summary
     {
         ...(await import("./q-eda-python-style.js").then((m)\=>