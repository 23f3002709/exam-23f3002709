    // GA1: Extended JSON Manipulation
    {
      ...(await import("./q-enhanced-json-processor.js").then((m) => m.default({ user, weight: 1.25 })));
      help: md(json),
    },

    // GA2: Advanced Excel Analysis
    {
      ...(await import("./q-excel-data-charts.js").then((m) => m.default({ user, weight: 1.0 })));
      help: md(excel),
    },

    // GA3: AI for Automated Code Review
    {
      ...(await import("./q-ai-code-review.js").then((m) => m.default({ user, weight: 1.5 })));
      help: md(largeLanguageModels),
    },

    // GA5: Dynamic Web Scraping Techniques
    {
      ...(await import("./q-dynamic-web-extractor.js").then((m) => m.default({ user, weight: 1.0 })));
      help: md(webScraping),
    },

    // GA7: Cohort Analysis Project
    {
      ...(await import("./q-cohort-analysis.js").then((m) => m.default({ user, weight: 1.5 })));
      help: md(pythonAnalysis),
    },

    // GA8: Seaborn Projects
    {
      ...(await import("./q-seaborn-advanced-visualization.js").then((m) => m.default({ user, weight: 1.75 })));
      help: md(visualization),
    },