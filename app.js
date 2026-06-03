// Class 10 Biology - Main Application Controller

// UI String Translations
const UI_TRANSLATIONS = {
  en: {
    appTitle: "Class 10 Biology",
    appSubtitle: "Objective & Test Portal",
    practiceBtn: "Practice Mode",
    testBtn: "Test Mode",
    quickTestBtn: "Quick Test",
    practiceTitle: "Practice (अभ्यास)",
    statsHeader: "Learning Progress",
    practicedLabel: "Practiced",
    testsAttemptedLabel: "Tests Taken",
    avgScoreLabel: "Avg Test Score",
    chaptersTitle: "Chapters (अध्याय)",
    globalTestTitle: "Ready to Test Your Knowledge?",
    globalTestDesc: "Take a customizable, timed test with questions selected from all or selected chapters to evaluate your exam readiness.",
    startGlobalTest: "Configure Test",
    langToggleLabel: "Language",
    backToDashboard: "Dashboard",
    practiceOf: "Practice",
    question: "Question",
    of: "of",
    next: "Next Question",
    prev: "Previous",
    finish: "Finish Practice",
    explanationTitle: "Explanation:",
    correctFeedback: "Correct Answer!",
    incorrectFeedback: "Incorrect Answer!",
    configureTestTitle: "Configure Your Test",
    configureTestDesc: "Select the chapters and format for your practice examination.",
    selectChapters: "Select Chapters to Include:",
    selectQuestionCount: "Number of Questions:",
    selectTimeLimit: "Time Limit:",
    minutes: "Minutes",
    startTestBtn: "Start Examination",
    hudTime: "Time Remaining",
    hudProgress: "Progress",
    hudScore: "Answered",
    flagQuestion: "Flag for Review",
    submitTest: "Submit Test",
    confirmSubmit: "Are you sure you want to submit your test?",
    testTimeUp: "Time is up! Your test has been submitted automatically.",
    scorecardTitle: "Test Scorecard",
    scorecardDesc: "Here is your detailed performance report.",
    scoreLabel: "Your Score",
    correctStats: "Correct",
    incorrectStats: "Incorrect",
    unattemptedStats: "Unattempted",
    timeSpent: "Time Spent",
    excellentMsg: "Outstanding Performance! Excellent job!",
    goodMsg: "Good Job! Keep practicing to get even higher scores.",
    poorMsg: "Keep Learning! Review the explanations below and try again.",
    reviewAnswers: "Question Review & Explanations",
    reviewCorrect: "Correct Answer",
    reviewIncorrect: "Your Answer (Incorrect)",
    reviewCorrectLabel: "Correct",
    reviewIncorrectLabel: "Incorrect",
    reviewYourChoice: "Your Choice",
    reviewUnattempted: "Not Answered",
    sec: "seconds",
    alertSelectChapter: "Please select at least one chapter to start the test."
  },
  hi: {
    appTitle: "कक्षा 10 जीव विज्ञान",
    appSubtitle: "ऑब्जेक्टिव एवं टेस्ट पोर्टल",
    practiceBtn: "अभ्यास मोड",
    testBtn: "टेस्ट मोड",
    quickTestBtn: "त्वरित टेस्ट",
    practiceTitle: "अभ्यास",
    statsHeader: "शिक्षण प्रगति (प्रोग्रेस)",
    practicedLabel: "अभ्यास किए प्रश्न",
    testsAttemptedLabel: "दिए गए टेस्ट",
    avgScoreLabel: "औसत टेस्ट स्कोर",
    chaptersTitle: "अध्याय (Chapters)",
    globalTestTitle: "अपनी तैयारी जाँचना चाहते हैं?",
    globalTestDesc: "बोर्ड परीक्षा की तैयारी का मूल्यांकन करने के लिए सभी या चुनिंदा अध्यायों के साथ एक समयबद्ध (Timed) टेस्ट दें।",
    startGlobalTest: "टेस्ट सेट करें",
    langToggleLabel: "भाषा",
    backToDashboard: "डैशबोर्ड",
    practiceOf: "अभ्यास",
    question: "प्रश्न",
    of: "में से",
    next: "अगला प्रश्न",
    prev: "पिछला",
    finish: "अभ्यास समाप्त",
    explanationTitle: "व्याख्या (Explanation):",
    correctFeedback: "सही उत्तर!",
    incorrectFeedback: "गलत उत्तर!",
    configureTestTitle: "अपना टेस्ट सेट करें",
    configureTestDesc: "अपनी परीक्षा के लिए अध्याय और प्रारूप चुनें।",
    selectChapters: "शामिल करने के लिए अध्याय चुनें:",
    selectQuestionCount: "प्रश्नों की संख्या:",
    selectTimeLimit: "समय सीमा:",
    minutes: "मिनट",
    startTestBtn: "परीक्षा शुरू करें",
    hudTime: "बचा हुआ समय",
    hudProgress: "प्रगति",
    hudScore: "उत्तर दिए",
    flagQuestion: "समीक्षा के लिए चिह्नित करें",
    submitTest: "टेस्ट जमा करें",
    confirmSubmit: "क्या आप वाकई अपना टेस्ट जमा करना चाहते हैं?",
    testTimeUp: "समय समाप्त! आपका टेस्ट स्वचालित रूप से जमा कर दिया गया है।",
    scorecardTitle: "टेस्ट स्कोरकार्ड",
    scorecardDesc: "यह आपका विस्तृत प्रदर्शन रिपोर्ट कार्ड है।",
    scoreLabel: "आपका स्कोर",
    correctStats: "सही",
    incorrectStats: "गलत",
    unattemptedStats: "बिना प्रयास के",
    timeSpent: "लगा समय",
    excellentMsg: "शानदार प्रदर्शन! बहुत बढ़िया!",
    goodMsg: "अच्छा प्रयास! उच्च स्कोर के लिए अभ्यास जारी रखें।",
    poorMsg: "सीखते रहें! नीचे दी गई व्याख्याओं को पढ़ें और पुनः प्रयास करें।",
    reviewAnswers: "प्रश्नों की समीक्षा और व्याख्या",
    reviewCorrect: "सही उत्तर",
    reviewIncorrect: "आपका उत्तर (गलत)",
    reviewCorrectLabel: "सही",
    reviewIncorrectLabel: "गलत",
    reviewYourChoice: "आपका विकल्प",
    reviewUnattempted: "प्रयास नहीं किया",
    sec: "सेकंड",
    alertSelectChapter: "कृपया टेस्ट शुरू करने के लिए कम से कम एक अध्याय चुनें।"
  }
};

// Application State
let appState = {
  lang: "hi", // default to Hindi
  currentView: "dashboard",
  stats: {
    practicedIds: [], // array of unique question IDs answered in practice mode
    testAttemptsCount: 0,
    testScoresSum: 0,
    testHistory: [] // array of test result objects
  },
  activePractice: {
    chapterId: null,
    questions: [],
    currentIdx: 0,
    selectedOption: null, // index of option selected for current question
    answersHistory: {} // questionId -> selectedIndex
  },
  activeTest: {
    questions: [],
    currentIdx: 0,
    answers: {}, // questionId -> selectedIndex
    flagged: {}, // questionId -> boolean
    timeRemaining: 0, // in seconds
    timeTotal: 0, // total seconds configured
    timerIntervalId: null,
    startTime: null
  }
};

// Initializer
document.addEventListener("DOMContentLoaded", () => {
  loadStatsFromLocalStorage();
  setupEventListeners();
  detectUserLanguage();
  renderDashboard();
  renderChaptersList();
});

// Load stats
function loadStatsFromLocalStorage() {
  const stored = localStorage.getItem("biology_quiz_stats");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      appState.stats = { ...appState.stats, ...parsed };
    } catch (e) {
      console.error("Failed to parse stats from localStorage", e);
    }
  }
}

// Save stats
function saveStatsToLocalStorage() {
  localStorage.setItem("biology_quiz_stats", JSON.stringify(appState.stats));
}

// Detect language settings or browser default
function detectUserLanguage() {
  const savedLang = localStorage.getItem("biology_quiz_lang");
  if (savedLang === "en" || savedLang === "hi") {
    appState.lang = savedLang;
  } else {
    appState.lang = "hi"; // Default to Hindi
  }
  updateActiveLanguageButtons();
  applyLanguageTranslations();
}

// Update Active Language Switch UI
function updateActiveLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === appState.lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Toggle language
function setLanguage(lang) {
  if (lang !== "en" && lang !== "hi") return;
  appState.lang = lang;
  localStorage.setItem("biology_quiz_lang", lang);
  updateActiveLanguageButtons();
  applyLanguageTranslations();
  
  // Re-render the active view to reflect language change
  refreshCurrentView();
}

// Apply text translations globally
function applyLanguageTranslations() {
  const t = UI_TRANSLATIONS[appState.lang];
  
  // Translate static UI elements with data-tr attributes
  document.querySelectorAll("[data-tr]").forEach(el => {
    const key = el.dataset.tr;
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // HTML Page Titles
  document.title = `${t.appTitle} | ${t.appSubtitle}`;
}

// View Router
function switchView(viewName) {
  // Clear any running quiz timers
  if (viewName !== "test-active" && appState.activeTest.timerIntervalId) {
    clearInterval(appState.activeTest.timerIntervalId);
    appState.activeTest.timerIntervalId = null;
  }

  // Remove active class from all view elements
  document.querySelectorAll(".view").forEach(el => {
    el.classList.remove("active");
  });

  // Activate chosen view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add("active");
    appState.currentView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    refreshCurrentView();
  }
}

// Refresh whatever view is currently active
function refreshCurrentView() {
  switch (appState.currentView) {
    case "dashboard":
      renderDashboard();
      renderChaptersList();
      break;
    case "practice":
      renderPracticeQuestion();
      break;
    case "test-config":
      renderTestConfig();
      break;
    case "test-active":
      renderActiveTestQuestion();
      break;
    case "scorecard":
      // Scorecard is rendered once on submit, but we can re-render if language changes
      if (appState.activeTest.questions.length > 0) {
        renderScorecard();
      }
      break;
  }
}

// Setup core event listeners
function setupEventListeners() {
  // Language button clicks
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Logo home click
  document.querySelector(".logo-container").addEventListener("click", () => {
    switchView("dashboard");
  });

  // Global Config Test click
  document.getElementById("btn-global-test").addEventListener("click", () => {
    switchView("test-config");
  });

  // Form submission for test creation
  document.getElementById("btn-start-test").addEventListener("click", () => {
    initiateTest();
  });
}

// RENDER: Dashboard view
function renderDashboard() {
  const t = UI_TRANSLATIONS[appState.lang];
  
  // Update stats counters
  const totalPracticeCount = appState.stats.practicedIds.length;
  document.getElementById("stat-practiced-val").textContent = totalPracticeCount;
  document.getElementById("stat-tests-val").textContent = appState.stats.testAttemptsCount;
  
  let avgScore = 0;
  if (appState.stats.testAttemptsCount > 0) {
    avgScore = Math.round(appState.stats.testScoresSum / appState.stats.testAttemptsCount);
  }
  document.getElementById("stat-avg-score-val").textContent = `${avgScore}%`;
}

// RENDER: Chapters on dashboard
function renderChaptersList() {
  const container = document.getElementById("chapters-container");
  container.innerHTML = "";
  const t = UI_TRANSLATIONS[appState.lang];

  CHAPTERS.forEach(ch => {
    // Calculate progress for this chapter
    const chQuestions = BIOLOGY_QUESTIONS.filter(q => q.chapterId === ch.id);
    const chTotal = chQuestions.length;
    
    // Find how many questions in this chapter have been practiced
    const chPracticedCount = chQuestions.filter(q => 
      appState.stats.practicedIds.includes(q.id)
    ).length;
    
    const progressPercent = chTotal > 0 ? Math.round((chPracticedCount / chTotal) * 100) : 0;
    
    // Generate chapter card
    const card = document.createElement("div");
    card.className = "chapter-card";
    
    card.innerHTML = `
      <div class="chapter-header">
        <div class="chapter-icon">${ch.icon}</div>
        <div class="chapter-badge">${chTotal} Qs</div>
      </div>
      <h4>${ch.name[appState.lang]}</h4>
      <p>${ch.description[appState.lang]}</p>
      
      <div class="chapter-progress">
        <div class="progress-text">
          <span>${t.practicedLabel}</span>
          <span>${progressPercent}% (${chPracticedCount}/${chTotal})</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>
      
      <div class="chapter-actions">
        <button class="btn btn-primary" onclick="startPractice('${ch.id}')">
          ${t.practiceBtn}
        </button>
        <button class="btn btn-secondary" onclick="startQuickTest('${ch.id}')">
          ${t.quickTestBtn}
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// ================= PRACTICE MODE LOGIC =================

// Start Practice for a specific chapter
window.startPractice = function(chapterId) {
  const chQuestions = BIOLOGY_QUESTIONS.filter(q => q.chapterId === chapterId);
  if (chQuestions.length === 0) return;
  
  appState.activePractice = {
    chapterId: chapterId,
    questions: shuffleArray([...chQuestions]),
    currentIdx: 0,
    selectedOption: null,
    answersHistory: {}
  };
  
  switchView("practice");
};

// Render Practice Question Interface
function renderPracticeQuestion() {
  const t = UI_TRANSLATIONS[appState.lang];
  const ap = appState.activePractice;
  const currentQuestion = ap.questions[ap.currentIdx];
  const chMeta = CHAPTERS.find(c => c.id === ap.chapterId);
  
  // Set Chapter Title in Back Header
  document.getElementById("practice-chapter-title").textContent = 
    `${t.practiceOf}: ${chMeta.name[appState.lang]}`;
    
  // Render Progress
  document.getElementById("practice-progress-num").textContent = 
    `${t.question} ${ap.currentIdx + 1} ${t.of} ${ap.questions.length}`;
    
  // Render Question Body
  document.getElementById("practice-question-text").textContent = 
    currentQuestion.question[appState.lang];
    
  // Render Options
  const optionsContainer = document.getElementById("practice-options-container");
  optionsContainer.innerHTML = "";
  
  const optionsList = currentQuestion.options[appState.lang];
  const alphabet = ["A", "B", "C", "D"];
  
  // Check if this question was already answered in this practice session
  const answeredIdx = ap.answersHistory[currentQuestion.id];
  const hasBeenAnswered = answeredIdx !== undefined;

  optionsList.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-item";
    
    // Set appropriate styling if answered
    if (hasBeenAnswered) {
      btn.classList.add("disabled");
      if (index === currentQuestion.correctIndex) {
        btn.classList.add("correct");
      } else if (index === answeredIdx) {
        btn.classList.add("incorrect");
      }
    }
    
    btn.innerHTML = `
      <span class="option-badge">${alphabet[index]}</span>
      <span class="option-content">${optText}</span>
    `;
    
    btn.addEventListener("click", () => {
      if (!hasBeenAnswered) {
        handlePracticeAnswer(index);
      }
    });
    
    optionsContainer.appendChild(btn);
  });

  // Render Explanation Box if answered
  const explanationContainer = document.getElementById("practice-explanation-container");
  explanationContainer.innerHTML = "";
  
  if (hasBeenAnswered) {
    const isCorrect = answeredIdx === currentQuestion.correctIndex;
    const explBox = document.createElement("div");
    explBox.className = "explanation-box";
    explBox.innerHTML = `
      <div class="explanation-title">
        <span>${isCorrect ? "✅" : "❌"}</span>
        <span>${isCorrect ? t.correctFeedback : t.incorrectFeedback}</span>
      </div>
      <div class="explanation-title" style="margin-top: 8px;">
        <span>🔍</span>
        <span>${t.explanationTitle}</span>
      </div>
      <div class="explanation-text">${currentQuestion.explanation[appState.lang]}</div>
    `;
    explanationContainer.appendChild(explBox);
  }

  // Setup Next/Prev buttons
  const prevBtn = document.getElementById("practice-btn-prev");
  const nextBtn = document.getElementById("practice-btn-next");
  
  // Previous button visibility
  if (ap.currentIdx > 0) {
    prevBtn.style.visibility = "visible";
    prevBtn.textContent = `← ${t.prev}`;
  } else {
    prevBtn.style.visibility = "hidden";
  }

  // Next / Finish button labels
  if (ap.currentIdx < ap.questions.length - 1) {
    nextBtn.textContent = `${t.next} →`;
    nextBtn.className = "btn btn-primary";
    // Enable next button only if current question has been answered
    if (hasBeenAnswered) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", "true");
    }
  } else {
    nextBtn.textContent = t.finish;
    nextBtn.className = "btn btn-accent";
    if (hasBeenAnswered) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", "true");
    }
  }
}

// Handle selected option in practice mode
function handlePracticeAnswer(selectedIndex) {
  const ap = appState.activePractice;
  const currentQuestion = ap.questions[ap.currentIdx];
  
  // Save response to history
  ap.answersHistory[currentQuestion.id] = selectedIndex;
  
  // Save practiced question ID to stats if not already added
  if (!appState.stats.practicedIds.includes(currentQuestion.id)) {
    appState.stats.practicedIds.push(currentQuestion.id);
    saveStatsToLocalStorage();
  }
  
  // Re-render view to show correct/incorrect state and explanation
  renderPracticeQuestion();
}

// Navigation functions for practice
window.practicePrev = function() {
  if (appState.activePractice.currentIdx > 0) {
    appState.activePractice.currentIdx--;
    renderPracticeQuestion();
  }
};

window.practiceNext = function() {
  const ap = appState.activePractice;
  if (ap.currentIdx < ap.questions.length - 1) {
    ap.currentIdx++;
    renderPracticeQuestion();
  } else {
    // End practice session
    switchView("dashboard");
  }
};

window.exitPractice = function() {
  switchView("dashboard");
};

// ================= TEST MODE CONFIGURATION & SETUP =================

// Direct click from Chapter cards "Quick Test"
window.startQuickTest = function(chapterId) {
  // Preconfigure test for a single chapter: 10 Qs, 10 minutes
  const chQuestions = BIOLOGY_QUESTIONS.filter(q => q.chapterId === chapterId);
  if (chQuestions.length === 0) return;

  const testQs = shuffleArray([...chQuestions]).slice(0, 10);
  setupAndLaunchTest(testQs, 10 * 60);
};

// Render Test Config Setup Page
function renderTestConfig() {
  const t = UI_TRANSLATIONS[appState.lang];
  const listContainer = document.getElementById("config-chapters-list");
  listContainer.innerHTML = "";
  
  // Populate chapters selection checkboxes
  CHAPTERS.forEach(ch => {
    const label = document.createElement("label");
    label.className = "checkbox-label";
    
    label.innerHTML = `
      <input type="checkbox" class="checkbox-input chapter-select-checkbox" value="${ch.id}" checked>
      <span>${ch.icon} ${ch.name[appState.lang]}</span>
    `;
    listContainer.appendChild(label);
  });

  // Render question count toggle selectors
  setupConfigToggleSelectors("config-qcount", [10, 20, 30], 10);
  
  // Render time limit selectors
  setupConfigToggleSelectors("config-time", [5, 10, 15, 20, 30], 10, t.minutes);
}

// Help create custom selector buttons (like radio buttons but nicer styled)
function setupConfigToggleSelectors(containerId, options, defaultValue, suffix = "") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-toggle-option";
    if (opt === defaultValue) btn.classList.add("active");
    btn.textContent = `${opt} ${suffix}`;
    btn.dataset.val = opt;
    
    btn.addEventListener("click", () => {
      container.querySelectorAll(".btn-toggle-option").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    
    container.appendChild(btn);
  });
}

// Initiate Test from Custom Config
function initiateTest() {
  const t = UI_TRANSLATIONS[appState.lang];
  
  // Get Selected Chapters
  const selectedChapters = [];
  document.querySelectorAll(".chapter-select-checkbox").forEach(cb => {
    if (cb.checked) selectedChapters.push(cb.value);
  });
  
  if (selectedChapters.length === 0) {
    alert(t.alertSelectChapter);
    return;
  }
  
  // Gather available questions in chosen chapters
  let filteredQuestions = BIOLOGY_QUESTIONS.filter(q => selectedChapters.includes(q.chapterId));
  if (filteredQuestions.length === 0) return;
  
  // Get Selected Question Count
  const activeQCountBtn = document.querySelector("#config-qcount .btn-toggle-option.active");
  const maxQCount = parseInt(activeQCountBtn ? activeQCountBtn.dataset.val : 10);
  
  // Select and Shuffle Questions
  const shuffledPool = shuffleArray([...filteredQuestions]);
  const finalTestQuestions = shuffledPool.slice(0, Math.min(maxQCount, shuffledPool.length));
  
  // Get Selected Time limit
  const activeTimeBtn = document.querySelector("#config-time .btn-toggle-option.active");
  const timeInMinutes = parseInt(activeTimeBtn ? activeTimeBtn.dataset.val : 10);
  const timeInSeconds = timeInMinutes * 60;
  
  // Setup & start
  setupAndLaunchTest(finalTestQuestions, timeInSeconds);
}

// Common Test Launching Sequence
function setupAndLaunchTest(questions, durationSeconds) {
  if (appState.activeTest.timerIntervalId) {
    clearInterval(appState.activeTest.timerIntervalId);
  }
  
  appState.activeTest = {
    questions: questions,
    currentIdx: 0,
    answers: {},
    flagged: {},
    timeRemaining: durationSeconds,
    timeTotal: durationSeconds,
    timerIntervalId: null,
    startTime: new Date()
  };
  
  switchView("test-active");
  startTestTimer();
}

// Timer management
function startTestTimer() {
  updateTimerUI();
  
  appState.activeTest.timerIntervalId = setInterval(() => {
    appState.activeTest.timeRemaining--;
    updateTimerUI();
    
    if (appState.activeTest.timeRemaining <= 0) {
      clearInterval(appState.activeTest.timerIntervalId);
      appState.activeTest.timerIntervalId = null;
      alert(UI_TRANSLATIONS[appState.lang].testTimeUp);
      submitTestExam();
    }
  }, 1000);
}

// Sync timer display with state
function updateTimerUI() {
  const minutes = Math.floor(appState.activeTest.timeRemaining / 60);
  const seconds = appState.activeTest.timeRemaining % 60;
  const timerVal = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  const hudTimeEl = document.getElementById("hud-time-val");
  if (hudTimeEl) {
    hudTimeEl.textContent = timerVal;
    
    // Add pulsing alert styling when under 1 minute remaining
    if (appState.activeTest.timeRemaining < 60) {
      hudTimeEl.classList.add("timer-alert");
    } else {
      hudTimeEl.classList.remove("timer-alert");
    }
  }
}

// RENDER: Exam Interface & Navigation
function renderActiveTestQuestion() {
  const t = UI_TRANSLATIONS[appState.lang];
  const at = appState.activeTest;
  const currentQ = at.questions[at.currentIdx];
  const alphabet = ["A", "B", "C", "D"];
  
  // HUD Statistics updates
  const totalQuestions = at.questions.length;
  const answeredCount = Object.keys(at.answers).length;
  
  document.getElementById("hud-progress-val").textContent = `${at.currentIdx + 1} / ${totalQuestions}`;
  document.getElementById("hud-score-val").textContent = `${answeredCount} / ${totalQuestions}`;
  
  // Flag Question state sync
  const flagBtn = document.getElementById("test-btn-flag");
  const isFlagged = !!at.flagged[currentQ.id];
  if (isFlagged) {
    flagBtn.classList.add("active");
    flagBtn.innerHTML = `★ ${t.flagQuestion}`;
  } else {
    flagBtn.classList.remove("active");
    flagBtn.innerHTML = `☆ ${t.flagQuestion}`;
  }

  // Question Text
  document.getElementById("test-question-text").textContent = currentQ.question[appState.lang];
  
  // Options rendering
  const optionsContainer = document.getElementById("test-options-container");
  optionsContainer.innerHTML = "";
  
  const selectedIdx = at.answers[currentQ.id];
  
  currentQ.options[appState.lang].forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-item";
    
    if (selectedIdx === index) {
      btn.classList.add("selected");
    }
    
    btn.innerHTML = `
      <span class="option-badge">${alphabet[index]}</span>
      <span class="option-content">${optText}</span>
    `;
    
    btn.addEventListener("click", () => {
      selectTestAnswer(currentQ.id, index);
    });
    
    optionsContainer.appendChild(btn);
  });

  // Next / Prev control state sync
  const prevBtn = document.getElementById("test-btn-prev");
  const nextBtn = document.getElementById("test-btn-next");
  
  prevBtn.textContent = `← ${t.prev}`;
  nextBtn.textContent = `${t.next} →`;
  
  if (at.currentIdx > 0) {
    prevBtn.removeAttribute("disabled");
  } else {
    prevBtn.setAttribute("disabled", "true");
  }
  
  if (at.currentIdx < totalQuestions - 1) {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", "true");
  }

  // Draw Grid Navigator (the footer buttons that let users skip around)
  renderTestGridNavigator();
}

// Select an answer in test mode
function selectTestAnswer(questionId, optionIndex) {
  // If user clicks already selected option, deselect it (allow unattempting)
  if (appState.activeTest.answers[questionId] === optionIndex) {
    delete appState.activeTest.answers[questionId];
  } else {
    appState.activeTest.answers[questionId] = optionIndex;
  }
  
  renderActiveTestQuestion();
}

// Flag a question for later review
window.toggleFlagQuestion = function() {
  const at = appState.activeTest;
  const currentQ = at.questions[at.currentIdx];
  
  if (at.flagged[currentQ.id]) {
    delete at.flagged[currentQ.id];
  } else {
    at.flagged[currentQ.id] = true;
  }
  
  renderActiveTestQuestion();
};

// Next & Prev page in Test
window.testPrev = function() {
  if (appState.activeTest.currentIdx > 0) {
    appState.activeTest.currentIdx--;
    renderActiveTestQuestion();
  }
};

window.testNext = function() {
  if (appState.activeTest.currentIdx < appState.activeTest.questions.length - 1) {
    appState.activeTest.currentIdx++;
    renderActiveTestQuestion();
  }
};

// Jump to specific index from footer grid
window.testJumpTo = function(idx) {
  if (idx >= 0 && idx < appState.activeTest.questions.length) {
    appState.activeTest.currentIdx = idx;
    renderActiveTestQuestion();
  }
};

// Grid navigator display
function renderTestGridNavigator() {
  const at = appState.activeTest;
  const container = document.getElementById("test-navigator-grid");
  container.innerHTML = "";
  
  at.questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "nav-grid-btn";
    btn.textContent = idx + 1;
    
    // Add styling states
    if (idx === at.currentIdx) {
      btn.classList.add("active");
    } else if (at.flagged[q.id]) {
      btn.classList.add("flagged");
    } else if (at.answers[q.id] !== undefined) {
      btn.classList.add("answered");
    }
    
    btn.addEventListener("click", () => {
      testJumpTo(idx);
    });
    
    container.appendChild(btn);
  });
}

// Final submission trigger
window.promptSubmitTest = function() {
  const t = UI_TRANSLATIONS[appState.lang];
  if (confirm(t.confirmSubmit)) {
    submitTestExam();
  }
};

// Calculate scores & process submission
function submitTestExam() {
  const at = appState.activeTest;
  
  // Cancel active interval
  if (at.timerIntervalId) {
    clearInterval(at.timerIntervalId);
    at.timerIntervalId = null;
  }
  
  // Calculate results
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  
  at.questions.forEach(q => {
    const response = at.answers[q.id];
    if (response === undefined) {
      unattemptedCount++;
    } else if (response === q.correctIndex) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalQuestionsCount = at.questions.length;
  const percentage = totalQuestionsCount > 0 ? Math.round((correctCount / totalQuestionsCount) * 100) : 0;
  const timeSpentSeconds = Math.round((new Date() - at.startTime) / 1000);
  
  // Update overall app performance history and statistics
  appState.stats.testAttemptsCount++;
  appState.stats.testScoresSum += percentage;
  appState.stats.testHistory.push({
    date: new Date().toISOString(),
    correct: correctCount,
    incorrect: incorrectCount,
    unattempted: unattemptedCount,
    total: totalQuestionsCount,
    percentage: percentage,
    timeSpent: timeSpentSeconds
  });
  
  saveStatsToLocalStorage();
  
  // Store summary of this specific exam run to render scorecard
  appState.lastQuizScorecard = {
    percentage: percentage,
    correct: correctCount,
    incorrect: incorrectCount,
    unattempted: unattemptedCount,
    total: totalQuestionsCount,
    timeSpent: timeSpentSeconds
  };
  
  switchView("scorecard");
}

// ================= SCORECARD RENDERING =================

// RENDER: Score Card page
function renderScorecard() {
  const t = UI_TRANSLATIONS[appState.lang];
  const cardData = appState.lastQuizScorecard;
  if (!cardData) return;
  
  // Render Percentage Circle
  const percentEl = document.getElementById("scorecard-percentage");
  const circleEl = document.getElementById("scorecard-circle");
  
  percentEl.textContent = `${cardData.percentage}%`;
  
  // Set performance classes for coloring
  circleEl.className = "score-circle";
  const msgEl = document.getElementById("scorecard-feedback-msg");
  
  if (cardData.percentage >= 80) {
    circleEl.classList.add("excellent");
    msgEl.textContent = t.excellentMsg;
  } else if (cardData.percentage >= 40) {
    circleEl.classList.add("good");
    msgEl.textContent = t.goodMsg;
  } else {
    circleEl.classList.add("poor");
    msgEl.textContent = t.poorMsg;
  }

  // Update statistic totals
  document.getElementById("scorecard-correct").textContent = cardData.correct;
  document.getElementById("scorecard-incorrect").textContent = cardData.incorrect;
  document.getElementById("scorecard-unattempted").textContent = cardData.unattempted;
  
  // Time formatting
  const minSpent = Math.floor(cardData.timeSpent / 60);
  const secSpent = cardData.timeSpent % 60;
  let timeStr = "";
  if (minSpent > 0) {
    timeStr = `${minSpent}m ${secSpent}s`;
  } else {
    timeStr = `${secSpent} ${t.sec}`;
  }
  document.getElementById("scorecard-time").textContent = timeStr;

  // Render question-by-question explanations review list
  renderScorecardReview();
}

// Render Review lists
function renderScorecardReview() {
  const t = UI_TRANSLATIONS[appState.lang];
  const reviewContainer = document.getElementById("scorecard-review-list");
  reviewContainer.innerHTML = "";
  
  const at = appState.activeTest;
  const alphabet = ["A", "B", "C", "D"];
  
  at.questions.forEach((q, qIndex) => {
    const selectedIdx = at.answers[q.id];
    const isCorrect = selectedIdx === q.correctIndex;
    const isUnattempted = selectedIdx === undefined;
    
    const card = document.createElement("div");
    card.className = "review-question-card";
    
    // Header for review status
    let statusBadge = "";
    if (isUnattempted) {
      statusBadge = `<span class="review-badge your-choice">${t.reviewUnattempted}</span>`;
    } else if (isCorrect) {
      statusBadge = `<span class="review-badge correct">${t.reviewCorrectLabel}</span>`;
    } else {
      statusBadge = `<span class="review-badge incorrect">${t.reviewIncorrectLabel}</span>`;
    }
    
    let htmlOptions = "";
    q.options[appState.lang].forEach((optText, optIdx) => {
      let optionClass = "neutral";
      let optionBadgeText = "";
      
      if (optIdx === q.correctIndex) {
        optionClass = "correct";
        optionBadgeText = ` (${t.reviewCorrect})`;
      } else if (optIdx === selectedIdx && !isCorrect) {
        optionClass = "incorrect";
        optionBadgeText = ` (${t.reviewIncorrect})`;
      } else if (optIdx === selectedIdx) {
        optionClass = "correct";
      }
      
      htmlOptions += `
        <div class="review-option ${optionClass}">
          <span><strong>${alphabet[optIdx]}.</strong> ${optText}</span>
          <span style="font-size: 0.75rem; font-weight: bold;">${optionBadgeText}</span>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
        <span style="color: var(--primary); font-weight: 700; font-size: 0.85rem;">Q${qIndex + 1}</span>
        ${statusBadge}
      </div>
      <div class="review-question-text">${q.question[appState.lang]}</div>
      <div class="review-options">
        ${htmlOptions}
      </div>
      <div class="explanation-box" style="margin-top: 1rem;">
        <div class="explanation-title">
          <span>🔍</span>
          <span>${t.explanationTitle}</span>
        </div>
        <div class="explanation-text">${q.explanation[appState.lang]}</div>
      </div>
    `;
    
    reviewContainer.appendChild(card);
  });
}

// Scorecard navigation
window.returnToDashboard = function() {
  switchView("dashboard");
};

// ================= UTILITY HELPER FUNCTIONS =================

// Fisher-Yates array shuffling algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
