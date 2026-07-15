/* =========================================================
   Dr. Ali Fathy Alsherif — Personal Brand · main.js
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- ICONS (inline SVG paths) ---------------- */
  const svg = (inner) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
  const ICONS = {
    library: svg('<path d="M3 4h4v16H3zM10 4h4v16h-4zM17 5l4 1-3 14-4-1z"/>'),
    repo: svg('<path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 3v6h6"/><path d="M8 13h6M8 17h4"/>'),
    archive: svg('<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M9 12h6"/>'),
    km: svg('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'),
    ai: svg('<rect x="5" y="7" width="14" height="12" rx="2"/><path d="M9 3v4M15 3v4M9 12h.01M15 12h.01M9 16h6"/><path d="M2 12h3M19 12h3"/>'),
    transform: svg('<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>'),
    metadata: svg('<path d="M4 7h16M4 12h16M4 17h10"/><circle cx="19" cy="17" r="2"/>'),
    research: svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
    training: svg('<path d="M12 3l10 5-10 5L2 8z"/><path d="M6 10v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6"/>'),
    consult: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>'),
    cap: svg('<path d="M12 3L2 8l10 5 10-5z"/><path d="M6 10v5c0 1.6 2.7 3 6 3s6-1.4 6-3v-5"/><path d="M22 8v6"/>'),
    calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    pin: svg('<path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    doc: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>'),
    star: svg('<path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8z"/>'),
    mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
    zoom: svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/>'),
    heart: svg('<path d="M12 21s-7-4.6-9.2-9C1.3 8.5 3 5 6.2 5 8 5 9.3 6 12 8.5 14.7 6 16 5 17.8 5 21 5 22.7 8.5 21.2 12 19 16.4 12 21 12 21z"/>'),
    people: svg('<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 20"/>'),
    quote: svg('<path d="M7 7h4v6a4 4 0 0 1-4 4M15 7h4v6a4 4 0 0 1-4 4"/>'),
  };

  /* ------ Research topic art — generated "AI-era" SVG covers ------
     Each research card gets a vector illustration describing its topic,
     picked from the paper's title. Colours flow from the CSS design tokens. */
  function researchTheme(title) {
    const s = (title || "").toLowerCase();
    if (/\bai\b|artificial intelligence|generative|falcon|llama|\bllm\b|prompt|intelligent/.test(s)) return "ai";
    if (/manuscript/.test(s)) return "manuscript";
    if (/archiv|preservation|records/.test(s)) return "archive";
    if (/heritage|arabic language|\blanguage\b/.test(s)) return "heritage";
    if (/repositor|open access/.test(s)) return "repository";
    if (/\bict\b|technolog|public librar/.test(s)) return "library";
    return "repository";
  }
  const raWrap = (inner) =>
    `<svg class="ra" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;

  const RART = {
    ai() {
      const L = [[62, [46, 80, 114]], [158, [30, 66, 102, 130]], [254, [64, 100]]];
      let edges = "", nodes = "";
      for (let i = 0; i < L.length - 1; i++) {
        const [x1, a] = L[i], [x2, b] = L[i + 1];
        a.forEach((y1) => b.forEach((y2) => { edges += `<line class="ra-edge" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; }));
      }
      L.forEach(([x, ys], li) => ys.forEach((y) => {
        const c = li === 1 ? "ra-node ra-node--b" : "ra-node ra-node--a";
        nodes += `<circle class="${c}" cx="${x}" cy="${y}" r="${li === 1 ? 7 : 6}"/>`;
      }));
      return raWrap(edges + nodes);
    },
    repository() {
      const db = (cx, top) => {
        let s = "";
        for (let i = 0; i < 3; i++) {
          const y = top + i * 22;
          s += `<ellipse class="ra-stroke" cx="${cx}" cy="${y}" rx="42" ry="12"/>` +
               `<path class="ra-stroke ra-dim" d="M${cx - 42} ${y} v18 a42 12 0 0 0 84 0 v-18"/>`;
        }
        return s;
      };
      return raWrap(
        db(96, 50) +
        `<circle class="ra-node ra-node--a" cx="96" cy="50" r="4"/>` +
        `<path class="ra-stroke ra-dim" stroke-dasharray="4 5" d="M150 96 H206"/>` +
        `<path class="ra-stroke" d="M214 96 q-6 0 -6 -12 a16 16 0 0 1 31 -4 a12 12 0 0 1 3 24 h-24 z"/>` +
        `<path class="ra-stroke ra-node--b" style="stroke:var(--violet-400)" d="M228 104 v-22 m-8 8 l8 -8 l8 8" fill="none"/>`
      );
    },
    manuscript() {
      return raWrap(
        `<path class="ra-stroke" d="M160 44 C128 32 100 38 84 46 V118 C100 110 128 106 160 116 Z"/>` +
        `<path class="ra-stroke" d="M160 44 C192 32 220 38 236 46 V118 C220 110 192 106 160 116 Z"/>` +
        `<line class="ra-stroke ra-dim" x1="160" y1="46" x2="160" y2="115"/>` +
        `<path class="ra-dim2" d="M100 60 h40 M100 72 h34 M100 84 h40 M180 60 h40 M186 72 h34 M180 84 h40"/>` +
        `<rect class="ra-scan" x="76" y="76" width="168" height="5" rx="2.5"/>` +
        `<rect class="ra-accent" x="196" y="44" width="7" height="7" rx="1.5"/>` +
        `<rect class="ra-accent2" x="210" y="34" width="6" height="6" rx="1.5"/>` +
        `<rect class="ra-accent" x="224" y="26" width="5" height="5" rx="1.5"/>`
      );
    },
    heritage() {
      return raWrap(
        `<line class="ra-stroke" x1="70" y1="122" x2="176" y2="122"/>` +
        `<path class="ra-stroke" d="M86 122 V86 Q86 58 123 46 Q160 58 160 86 V122"/>` +
        `<line class="ra-stroke ra-dim" x1="123" y1="122" x2="123" y2="60"/>` +
        `<circle class="ra-accent" cx="200" cy="60" r="4"/>` +
        `<rect class="ra-accent2" x="214" y="72" width="7" height="7" rx="1.5"/>` +
        `<rect class="ra-accent" x="232" y="52" width="6" height="6" rx="1.5"/>` +
        `<rect class="ra-accent2" x="238" y="88" width="5" height="5" rx="1.5"/>` +
        `<rect class="ra-accent" x="252" y="70" width="7" height="7" rx="1.5"/>` +
        `<path class="ra-edge" d="M170 70 L214 76 M188 96 L236 92"/>`
      );
    },
    archive() {
      const box = (x, y) =>
        `<rect class="ra-stroke" x="${x}" y="${y}" width="70" height="26" rx="3"/>` +
        `<line class="ra-stroke ra-dim" x1="${x}" y1="${y + 9}" x2="${x + 70}" y2="${y + 9}"/>` +
        `<rect class="ra-dim2b" x="${x + 27}" y="${y + 3}" width="16" height="3" rx="1.5"/>`;
      return raWrap(
        box(58, 48) + box(58, 78) + box(58, 108) +
        `<path class="ra-stroke" d="M226 46 l26 9 v20 c0 17 -13 26 -26 32 c-13 -6 -26 -15 -26 -32 v-20 z"/>` +
        `<path class="ra-stroke ra-check" d="M215 80 l8 8 l16 -18"/>`
      );
    },
    library() {
      return raWrap(
        `<path class="ra-stroke" d="M92 122 C118 110 150 110 160 118 C170 110 202 110 228 122 V132 C202 120 170 120 160 128 C150 120 118 120 92 132 Z"/>` +
        `<line class="ra-stroke ra-dim" x1="160" y1="118" x2="160" y2="128"/>` +
        `<circle class="ra-node ra-node--a" cx="160" cy="86" r="5"/>` +
        `<path class="ra-signal" d="M144 78 a22 22 0 0 1 32 0"/>` +
        `<path class="ra-signal" d="M134 68 a36 36 0 0 1 52 0"/>` +
        `<path class="ra-signal" d="M124 58 a50 50 0 0 1 72 0"/>` +
        `<circle class="ra-node ra-node--b" cx="112" cy="44" r="3.5"/>` +
        `<circle class="ra-node ra-node--b" cx="208" cy="44" r="3.5"/>` +
        `<path class="ra-edge" d="M112 44 L160 86 L208 44"/>`
      );
    },
  };
  const researchArt = (title) => RART[researchTheme(title)]();

  /* ---------------- DATA (bilingual) ---------------- */
  const DATA = {
    marquee: [
      "Digital Repositories", "DSpace · Fedora", "MARC21 · RDA · LCSH",
      "AI in Libraries", "Knowledge Management", "Archives & Preservation",
      "Koha ILS", "Digitization of Heritage", "Metadata Governance",
      "Generative AI Services", "Open Access", "Research Support",
    ],

    expertise: [
      { icon: "library", en: ["Academic Libraries", "Strategy, operations and services for university and research libraries."], ar: ["المكتبات الأكاديمية", "الاستراتيجية والتشغيل والخدمات لمكتبات الجامعات والبحث العلمي."] },
      { icon: "repo", en: ["Digital Repositories", "Planning and building institutional repositories on DSpace & Fedora."], ar: ["المستودعات الرقمية", "تخطيط وبناء المستودعات المؤسسية على DSpace وFedora."] },
      { icon: "archive", en: ["Archives & Preservation", "Digital archiving, security tagging and long-term preservation."], ar: ["الأرشفة والحفظ", "الأرشفة الرقمية ووسم الحماية والحفظ طويل المدى."] },
      { icon: "km", en: ["Knowledge Management", "Capturing, organising and governing institutional knowledge."], ar: ["إدارة المعرفة", "التقاط وتنظيم وحوكمة المعرفة المؤسسية."] },
      { icon: "ai", en: ["Artificial Intelligence", "Generative-AI information services, prompt engineering & automation."], ar: ["الذكاء الاصطناعي", "خدمات المعلومات بالذكاء التوليدي وهندسة الأوامر والأتمتة."] },
      { icon: "transform", en: ["Digital Transformation", "Modernising information environments and workflows end-to-end."], ar: ["التحول الرقمي", "تحديث بيئات المعلومات وسير العمل بشكل متكامل."] },
      { icon: "metadata", en: ["Metadata Standards", "MARC21, RDA and LCSH cataloguing and metadata governance."], ar: ["معايير الميتاداتا", "الفهرسة وحوكمة الميتاداتا وفق MARC21 وRDA وLCSH."] },
      { icon: "research", en: ["Research Support", "Aligning collections and services with teaching and research."], ar: ["دعم البحث العلمي", "مواءمة المجموعات والخدمات مع التعليم والبحث."] },
      { icon: "training", en: ["Training & Capacity", "Designing and delivering professional development programmes."], ar: ["التدريب وبناء القدرات", "تصميم وتقديم برامج التطوير المهني."] },
      { icon: "consult", en: ["Consulting", "Advisory and implementation for knowledge institutions."], ar: ["الاستشارات", "الاستشارات والتنفيذ لمؤسسات المعرفة."] },
    ],

    experience: [
      {
        period: "Nov 2021 — Present", periodAr: "نوفمبر 2021 — حتى الآن",
        role: "Chief Knowledge & Digital Services Officer", roleAr: "الرئيس التنفيذي للمعرفة والخدمات الرقمية",
        org: "Digital Library Technology FZ", orgAr: "شركة تقنية المكتبة الرقمية",
        place: "Sharjah Publishing City, UAE", placeAr: "مدينة الشارقة للنشر، الإمارات",
        pts: [
          ["Lead the Knowledge Management Strategy, aligned with institutional goals and accreditation.", "قيادة استراتيجية إدارة المعرفة بما يتوافق مع الأهداف المؤسسية والاعتماد."],
          ["Oversee design and continuous improvement of knowledge repositories and digital archives.", "الإشراف على تصميم وتطوير المستودعات المعرفية والأرشيف الرقمي."],
          ["Lead digital-transformation projects: digitization, metadata, AI-enabled services & automation.", "قيادة مشاريع التحول الرقمي: الرقمنة والميتاداتا وخدمات الذكاء الاصطناعي والأتمتة."],
          ["Deliver training and awareness programmes to build a knowledge-sharing culture.", "تقديم برامج تدريب وتوعية لبناء ثقافة تشارك المعرفة."],
        ],
        tags: ["Strategy", "AI Services", "Governance", "Digitization"],
      },
      {
        period: "May 2016 — Nov 2021", periodAr: "مايو 2016 — نوفمبر 2021",
        role: "Lecturer & Library Team Leader / KM", roleAr: "محاضر وقائد فريق المكتبة / إدارة المعرفة",
        org: "Jumeira University", orgAr: "جامعة جميرا",
        place: "Dubai, UAE", placeAr: "دبي، الإمارات",
        pts: [
          ["Led the Library Strategic, Operational and Action Plans and information governance.", "قيادة الخطط الاستراتيجية والتشغيلية للمكتبة وحوكمة المعلومات."],
          ["Planned and built the university's Digital Repository on DSpace.", "تخطيط وبناء المستودع الرقمي للجامعة على نظام DSpace."],
          ["Represented the library in Commission for Academic Accreditation (CAA) reviews.", "تمثيل المكتبة في مراجعات هيئة الاعتماد الأكاديمي."],
          ["Taught Information Technology courses in the College of Islamic & Arabic Studies.", "تدريس مقررات تقنية المعلومات بكلية الدراسات الإسلامية والعربية."],
        ],
        tags: ["DSpace", "Teaching", "Accreditation", "Collection Dev."],
      },
      {
        period: "Jan 2013 — Apr 2016", periodAr: "يناير 2013 — أبريل 2016",
        role: "Senior Librarian / Cataloger", roleAr: "أخصائي مكتبات أول / مفهرس",
        org: "Alhosn University", orgAr: "جامعة الحصن",
        place: "Abu Dhabi, UAE", placeAr: "أبوظبي، الإمارات",
        pts: [
          ["Selection, acquisition, cataloguing and classification (LC, MARC) in Arabic & English.", "الاختيار والتزويد والفهرسة والتصنيف (LC، MARC) بالعربية والإنجليزية."],
          ["Delivered information-literacy sessions and hands-on e-resource demonstrations.", "تقديم جلسات الثقافة المعلوماتية وعروض المصادر الإلكترونية."],
          ["Developed a comprehensive approach to library instructional services.", "تطوير منهجية شاملة للخدمات التعليمية بالمكتبة."],
        ],
        tags: ["Cataloging", "MARC", "Info Literacy"],
      },
      {
        period: "Oct 2009 — Nov 2012", periodAr: "أكتوبر 2009 — نوفمبر 2012",
        role: "Library Supervisor", roleAr: "مشرف مكتبة",
        org: "Institute of Training & Judicial Studies", orgAr: "معهد التدريب والدراسات القضائية",
        place: "Sharjah, UAE", placeAr: "الشارقة، الإمارات",
        pts: [
          ["Supervised technical services: cataloging, indexing, classification and subject analysis.", "الإشراف على الخدمات الفنية: الفهرسة والتكشيف والتصنيف والتحليل الموضوعي."],
          ["Evaluated and selected resources for judicial research and training programmes.", "تقييم واختيار المصادر لبرامج البحث والتدريب القضائي."],
        ],
        tags: ["Technical Services", "Judicial Research"],
      },
      {
        period: "Apr 2006 — Aug 2009", periodAr: "أبريل 2006 — أغسطس 2009",
        role: "Senior Cataloger", roleAr: "مفهرس أول",
        org: "Juma Al Majid Center for Culture & Heritage", orgAr: "مركز جمعة الماجد للثقافة والتراث",
        place: "Dubai, UAE", placeAr: "دبي، الإمارات",
        pts: [
          ["Technical processing and cataloguing of diverse heritage information materials.", "المعالجة الفنية وفهرسة مواد المعلومات التراثية المتنوعة."],
          ["Operated the Al Majid library system for search, cataloguing and acquisition.", "تشغيل نظام الماجد للبحث والفهرسة والتزويد."],
        ],
        tags: ["Heritage", "Cataloging"],
      },
      {
        period: "Nov 2003 — Nov 2005", periodAr: "نوفمبر 2003 — نوفمبر 2005",
        role: "Librarian — Technical Processing", roleAr: "أخصائي مكتبة — معالجة فنية",
        org: "Mubarak Public Library", orgAr: "مكتبة مبارك العامة",
        place: "Port Said, Egypt", placeAr: "بورسعيد، مصر",
        pts: [
          ["Acquisition, cataloguing and classification of print and audiovisual materials.", "التزويد والفهرسة والتصنيف للمواد المطبوعة والسمعبصرية."],
          ["Delivered high-quality information services to library users.", "تقديم خدمات معلومات عالية الجودة لمستفيدي المكتبة."],
        ],
        tags: ["Public Library", "Acquisition"],
      },
    ],

    education: [
      { year: "2024 — 2026", en: ["Higher National Diploma, Software Development", "42 Abu Dhabi — Dept. of Education & Knowledge (ADEK)"], ar: ["دبلوم وطني عالٍ في تطوير البرمجيات", "42 أبوظبي — دائرة التعليم والمعرفة"], badge: "" },
      { year: "2020", en: ["PhD, Library & Information Science", "Sohag University, Faculty of Arts — Egypt"], ar: ["دكتوراه في علم المكتبات والمعلومات", "جامعة سوهاج، كلية الآداب — مصر"], badge: "Excellent · First Class Honors", badgeAr: "امتياز مع مرتبة الشرف الأولى", note: ["Thesis: Digital Repositories of Academic & Public Libraries in the UAE — Reality & Future Plan."], noteAr: ["الأطروحة: المستودعات الرقمية للمكتبات الأكاديمية والعامة في الإمارات — الواقع وخطة المستقبل."] },
      { year: "2016", en: ["Master (MLIS), Library & Information Science", "Cairo University, Faculty of Arts — Egypt"], ar: ["ماجستير في علم المكتبات والمعلومات", "جامعة القاهرة، كلية الآداب — مصر"], badge: "Excellent", badgeAr: "امتياز" },
      { year: "2002", en: ["Bachelor of Arts, Library & Information", "Minia University — Egypt"], ar: ["بكالوريوس آداب في المكتبات والمعلومات", "جامعة المنيا — مصر"], badge: "" },
    ],

    books: [
      {
        color: "linear-gradient(150deg,#4f46e5,#0891b2)", year: "2026",
        en: ["Artificial Intelligence Prompt Engineering in Libraries & Archives",
          "An Emirates vision for 2031 toward the centennial 2071 — a practical guide for knowledge workers and smart services.",
          "AI · Practical Guide"],
        ar: ["هندسة أوامر الذكاء الاصطناعي في المكتبات والأرشيف",
          "رؤية إماراتية لـ2031 نحو مئوية 2071 — دليل عملي لصنّاع المعرفة والخدمات الذكية.",
          "ذكاء اصطناعي · دليل عملي"],
        publisher: "Dar Al Nahda Al Ilmiya, Dubai", publisherAr: "دار النهضة العلمية، دبي",
        cover: "المستودعات الرقمية", coverTitle: "AI Prompt Engineering",
        img: "assets/img/books/ai-prompt-engineering.jpg",
      },
      {
        color: "linear-gradient(150deg,#0f2b5b,#2563eb)", year: "2021",
        en: ["Digital Repositories & Open Access to Information",
          "The United Arab Emirates as a model — a study of repository software, evaluation and deployment.",
          "Repositories · Open Access"],
        ar: ["المستودعات الرقمية والوصول الحر للمعلومات",
          "دولة الإمارات نموذجًا — دراسة في برمجيات المستودعات والتقييم والنشر.",
          "مستودعات · وصول حر"],
        publisher: "Dar Al Nahda Al Ilmiya, Dubai", publisherAr: "دار النهضة العلمية، دبي",
        coverTitle: "Digital Repositories",
        img: "assets/img/books/digital-repositories.jpg",
      },
      {
        color: "linear-gradient(150deg,#7c3aed,#c026a3)", year: "2019",
        en: ["Digitization of Arab Heritage in the UAE",
          "The Juma Al Majid Center for Culture & Heritage in Dubai as a model.",
          "Heritage · Digitization"],
        ar: ["رقمنة التراث العربي في دولة الإمارات",
          "مركز جمعة الماجد للثقافة والتراث بدبي نموذجًا.",
          "تراث · رقمنة"],
        publisher: "Dar Al Nahda Al Ilmiya, Dubai", publisherAr: "دار النهضة العلمية، دبي",
        coverTitle: "Arab Heritage Digitization",
        img: "assets/img/books/arab-heritage-digitization.jpg",
      },
    ],

    research: [
      { type: "conference", year: "2025", en: ["The Use of Generative AI in Delivering Information Services in Academic Libraries: A Foresight Study Using Falcon LLM & Llama AI Models", "First Intl. Conference on Library Sciences — Al Wasl University & MBR Library, Dubai"], ar: ["استخدام الذكاء الاصطناعي التوليدي في تقديم الخدمات المعلوماتية بالمكتبات الأكاديمية: دراسة استشرافية باستخدام نماذج Falcon وLlama", "المؤتمر الدولي الأول لعلوم المكتبات — جامعة الوصل ومكتبة محمد بن راشد، دبي"] },
      { type: "conference", year: "2024", en: ["Digital Knowledge & Archival Services in the Post-Repository Era: Building a Repository for Documents & Heritage of UAE National Heritage Centers", "Digital Archiving in the Arab World — National Library & Archives & Sorbonne University, Abu Dhabi"], ar: ["الخدمات المعرفية والأرشيفية الرقمية في ما بعد عصر المستودعات: بناء مستودع لوثائق وتراث مراكز التراث الوطني بالإمارات", "الأرشفة الرقمية في العالم العربي — الأرشيف والمكتبة الوطنية وجامعة السوربون، أبوظبي"] },
      { type: "talk", year: "2024", en: ["Digitization of Arab Heritage and Its Role in Enriching the Arabic Language", "Abu Dhabi Arabic Language Centre & Qasr Al Watan Library — Abu Dhabi International Book Fair"], ar: ["رقمنة التراث العربي ودورها في إثراء اللغة العربية", "مركز أبوظبي للغة العربية ومكتبة قصر الوطن — معرض أبوظبي الدولي للكتاب"] },
      { type: "conference", year: "2023", en: ["Digitization of Arabic Manuscripts at the Juma Al Majid Center: Current State & Future Planning", "First Intl. Manuscripts Conference — Al Qasimia University, Sharjah"], ar: ["رقمنة المخطوطات العربية بمركز جمعة الماجد: الواقع والتخطيط المستقبلي", "المؤتمر الدولي الأول للمخطوطات — جامعة القاسمية، الشارقة"] },
      { type: "paper", year: "2022", en: ["Digital Repositories in Arab University Libraries: A Study of Evaluation Criteria & Deployment Software", "Research in Library & Information Science, No. 28"], ar: ["المستودعات الرقمية في المكتبات الجامعية العربية: دراسة لمعايير التقييم وبرمجيات النشر", "بحوث في علم المكتبات والمعلومات، العدد 28"] },
      { type: "paper", year: "2020", en: ["Digital Repositories & the Enrichment of Scientific Research in the Arab World: The UAE Model", "Journal of the Faculty of Arts, Sohag University, V.56, N.2"], ar: ["المستودعات الرقمية وإثراء البحث العلمي في العالم العربي: نموذج الإمارات", "مجلة كلية الآداب، جامعة سوهاج، مج 56، ع 2"] },
      { type: "conference", year: "2018", en: ["Digital Repositories of Public Libraries & Enrichment of Digital Content in the UAE", "First Intl. Conference for Libraries & Documentation — Jordan Library Association, Amman"], ar: ["المستودعات الرقمية للمكتبات العامة وإثراء المحتوى الرقمي في الإمارات", "المؤتمر الدولي الأول للمكتبات والتوثيق — جمعية المكتبات الأردنية، عمّان"] },
      { type: "paper", year: "2016", en: ["Digitalization of Arabic Heritage at the Juma Al Majid Center: Review & Analysis", "Intl. Journal of Libraries & Information Sciences, Vol. 3"], ar: ["رقمنة التراث العربي بمركز جمعة الماجد: مراجعة وتحليل", "المجلة الدولية لعلوم المكتبات والمعلومات، مج 3"] },
      { type: "paper", year: "2016", en: ["Arab Heritage Libraries & the Challenges of the Digital Age", "Sharjah Book Authority — Sharjah Library Literature Award (17th session)"], ar: ["مكتبات التراث العربي وتحديات العصر الرقمي", "هيئة الشارقة للكتاب — جائزة الشارقة لأدب المكتبات (الدورة 17)"] },
      { type: "paper", year: "2005", en: ["ICT & Its Role in Cultural Development in Public Libraries", "Supreme Council of Culture — Book & Publication Symposium, Cairo"], ar: ["تكنولوجيا المعلومات والاتصالات ودورها في التنمية الثقافية بالمكتبات العامة", "المجلس الأعلى للثقافة — ندوة الكتاب والنشر، القاهرة"] },
    ],

    events: [
      { img: "assets/img/events/award-sharjah-prize.jpg", tag: "Award", tagAr: "جائزة",
        en: ["Sharjah Library Literature Award", "Sharjah Book Authority (SBA)", "Sharjah, UAE", "2016", "Honored for research on Arab heritage libraries in the digital age."],
        ar: ["جائزة الشارقة لأدب المكتبات", "هيئة الشارقة للكتاب", "الشارقة، الإمارات", "2016", "تكريم عن بحث حول مكتبات التراث العربي في العصر الرقمي."] },
      { img: "assets/img/events/award-afli-2022.jpg", tag: "Recognition", tagAr: "تكريم",
        en: ["Arab Federation for Libraries & Information", "AFLI Conference — honoring", "United Arab Emirates", "2022", "Recognition for contribution to the library & information profession."],
        ar: ["الاتحاد العربي للمكتبات والمعلومات", "مؤتمر أفلي — تكريم", "الإمارات العربية المتحدة", "2022", "تكريم عن الإسهام في مهنة المكتبات والمعلومات."] },
      { img: "assets/img/events/book-signing.jpg", tag: "Book Signing", tagAr: "توقيع كتاب",
        en: ["Signing “Digital Repositories & Open Access”", "Sharjah International Book Fair", "Sharjah, UAE", "2022", "Book signing at “The World Reads from Sharjah”."],
        ar: ["توقيع كتاب «المستودعات الرقمية والوصول الحر»", "معرض الشارقة الدولي للكتاب", "الشارقة، الإمارات", "2022", "توقيع الكتاب في «العالم يقرأ من الشارقة»."] },
      { img: "assets/img/events/sharjah-university-2019.jpg", tag: "Symposium", tagAr: "ملتقى",
        en: ["University of Sharjah Libraries Forum", "Reading & Digital Content", "Sharjah, UAE", "2019", "Panel on libraries, reading and digital content development."],
        ar: ["ملتقى مكتبات جامعة الشارقة", "القراءة والمحتوى الرقمي", "الشارقة، الإمارات", "2019", "جلسة حول المكتبات والقراءة وتطوير المحتوى الرقمي."] },
      { img: "assets/img/events/culture-science-symposium.jpg", tag: "Symposium", tagAr: "ندوة",
        en: ["Culture & Science Symposium", "Cultural & Scientific Association", "Dubai, UAE", "2019", "International gathering of library and information professionals."],
        ar: ["ندوة الثقافة والعلوم", "ندوة الثقافة والعلوم", "دبي، الإمارات", "2019", "ملتقى دولي لمهنيي المكتبات والمعلومات."] },
      { img: "assets/img/gallery/gallery-03.jpg", tag: "Conference", tagAr: "مؤتمر",
        en: ["Sharjah International Library Conference", "SILC — with library leaders", "Sharjah, UAE", "2025", "Networking with regional and international library leaders."],
        ar: ["مؤتمر الشارقة الدولي للمكتبات", "مع قادة المكتبات", "الشارقة، الإمارات", "2025", "تواصل مع قادة المكتبات الإقليميين والدوليين."] },
    ],

    workshops: [
      { en: "Smart Digital Transformation in Academic Event Management Using AI Tools", ar: "التحول الرقمي الذكي في إدارة الفعاليات الأكاديمية باستخدام أدوات الذكاء الاصطناعي", topic: "AI" },
      { en: "Institutional Innovation with AI in Information & Research Centers", ar: "الابتكار المؤسسي بالذكاء الاصطناعي في مراكز المعلومات والبحوث", topic: "AI" },
      { en: "AI Prompt Engineering for Libraries: From Fundamentals to Practical Models", ar: "هندسة أوامر الذكاء الاصطناعي للمكتبات: من الأساسيات إلى النماذج العملية", topic: "AI" },
      { en: "Planning & Building Digital Repositories Based on Global Standards", ar: "تخطيط وبناء المستودعات الرقمية وفق المعايير العالمية", topic: "Repositories" },
      { en: "Developing Library Services Using AI & Machine Learning Tools", ar: "تطوير خدمات المكتبات باستخدام أدوات الذكاء الاصطناعي والتعلم الآلي", topic: "AI" },
      { en: "Strategic Planning for Information Institutions in the Big-Data Era", ar: "التخطيط الاستراتيجي لمؤسسات المعلومات في عصر البيانات الضخمة", topic: "Strategy" },
      { en: "Managing Technical Operations in the Modern Digital Library", ar: "إدارة العمليات الفنية في بيئة المكتبة الرقمية الحديثة", topic: "Technical" },
      { en: "Automated Cataloging Using MARC 21: Advanced Applications", ar: "الفهرسة الآلية باستخدام مارك 21: تطبيقات متقدمة", topic: "Metadata" },
      { en: "Descriptive & Subject Cataloging According to RDA & LCSH", ar: "الفهرسة الوصفية والموضوعية وفق معياري RDA وLCSH", topic: "Metadata" },
      { en: "Using & Managing Integrated Library Systems (ILS)", ar: "استخدام وإدارة نظم المكتبات المتكاملة", topic: "Technical" },
      { en: "Building & Developing Digital Collections in Libraries", ar: "بناء وتطوير المجموعات الرقمية في المكتبات", topic: "Repositories" },
      { en: "Information & Document Security in Digital Environments", ar: "أمن المعلومات والوثائق في البيئات الرقمية", topic: "Archives" },
      { en: "Digital Preservation & Digitization of Manuscripts & Heritage", ar: "الحفظ الرقمي ورقمنة المخطوطات والتراث", topic: "Archives" },
      { en: "Digital Repositories, Archiving & Preservation in the Age of AI & Open Access", ar: "المستودعات الرقمية والأرشفة والحفظ في عصر الذكاء الاصطناعي والوصول الحر", topic: "Repositories" },
    ],

    volunteer: [
      { period: "2013 — 2022", periodAr: "2013 — 2022",
        role: "Coordinator, Arab Federation for Libraries & Information (AFLI)", roleAr: "منسّق الاتحاد العربي للمكتبات والمعلومات (أفلي)",
        org: "AFLI — United Arab Emirates", orgAr: "أفلي — الإمارات العربية المتحدة",
        impact: ["Represented and coordinated AFLI activities across the UAE for nine years.", "تمثيل وتنسيق أنشطة أفلي في الإمارات لمدة تسع سنوات."] },
      { period: "Ongoing", periodAr: "مستمر",
        role: "Volunteer — UAE Volunteer Platform", roleAr: "متطوع — منصة متطوعين.امارات",
        org: "volunteers.ae — National Platform", orgAr: "منصة متطوعين.امارات الوطنية",
        impact: ["Active volunteer on the nation's largest smart volunteering platform.", "متطوع نشط على أكبر منصة تطوعية ذكية في الدولة."] },
      { period: "2001 — 2005", periodAr: "2001 — 2005",
        role: "Volunteer — Egyptian Library Association (ELA)", roleAr: "متطوع — جمعية المكتبات المصرية",
        org: "ELA — Annual Conference organization", orgAr: "جمعية المكتبات المصرية — تنظيم المؤتمر السنوي",
        impact: ["Supported the organization of the association's annual conferences.", "دعم تنظيم المؤتمرات السنوية للجمعية."] },
    ],

    certs: [
      { img: "assets/img/events/volunteer-cert-1.jpg", en: ["Certificate of Appreciation", "volunteers.ae · UAE National Day"], ar: ["شهادة شكر وتقدير", "متطوعين.امارات · اليوم الوطني"] },
      { img: "assets/img/events/volunteer-cert-2.jpg", en: ["Certificate of Appreciation", "volunteers.ae · Community Service"], ar: ["شهادة شكر وتقدير", "متطوعين.امارات · خدمة المجتمع"] },
      { img: "assets/img/events/volunteer-cert-3.jpg", en: ["Certificate of Appreciation", "volunteers.ae · Volunteering Hours"], ar: ["شهادة شكر وتقدير", "متطوعين.امارات · ساعات تطوعية"] },
    ],

    services: [
      { icon: "ai", en: ["AI Consulting", "Adopting generative AI, prompt engineering and smart services responsibly."], ar: ["استشارات الذكاء الاصطناعي", "التبني المسؤول للذكاء التوليدي وهندسة الأوامر والخدمات الذكية."] },
      { icon: "library", en: ["Library Automation", "ILS selection and deployment — Koha, Symphony, Horizon and more."], ar: ["أتمتة المكتبات", "اختيار وتنفيذ نظم المكتبات — كوها وسيمفوني وهورايزن وغيرها."] },
      { icon: "repo", en: ["Digital Repository Development", "End-to-end DSpace & Fedora repositories for open access & preservation."], ar: ["تطوير المستودعات الرقمية", "بناء مستودعات DSpace وFedora للوصول الحر والحفظ."] },
      { icon: "archive", en: ["Archive Consulting", "Digital archiving, security tagging and heritage preservation."], ar: ["استشارات الأرشيف", "الأرشفة الرقمية ووسم الحماية وحفظ التراث."] },
      { icon: "metadata", en: ["Metadata Consulting", "Cataloguing frameworks and governance with MARC21, RDA and LCSH."], ar: ["استشارات الميتاداتا", "أطر الفهرسة والحوكمة وفق MARC21 وRDA وLCSH."] },
      { icon: "training", en: ["Training Programs", "Tailored professional development for librarians and knowledge teams."], ar: ["البرامج التدريبية", "تطوير مهني مُخصّص لأخصائيي المكتبات وفرق المعرفة."] },
      { icon: "research", en: ["Research Consulting", "Research support services, evaluation studies and foresight work."], ar: ["الاستشارات البحثية", "خدمات دعم البحث ودراسات التقييم والاستشراف."] },
      { icon: "transform", en: ["Digital Transformation", "Strategy and roadmaps to modernise information environments."], ar: ["التحول الرقمي", "الاستراتيجيات وخرائط الطريق لتحديث بيئات المعلومات."] },
    ],

    gallery: (function () {
      const arr = [];
      for (let i = 1; i <= 39; i++) {
        const n = String(i).padStart(2, "0");
        arr.push({ img: `assets/img/gallery/gallery-${n}.jpg` });
      }
      return arr;
    })(),
  };

  /* ---------------- i18n dictionary ---------------- */
  const I18N = {
    en: {
      "a11y.skip": "Skip to main content",
      "brand.name": "Dr. Ali Fathy Alsherif", "brand.role": "LIS · AI · Digital Repositories",
      "nav.about": "About", "nav.expertise": "Expertise", "nav.experience": "Experience",
      "nav.books": "Books", "nav.research": "Research", "nav.speaking": "Speaking",
      "nav.gallery": "Gallery", "nav.services": "Services", "nav.contact": "Contact", "nav.cv": "Download CV",
      "search.placeholder": "Search books, research, workshops…",
      "hero.eyebrow": "Dubai, United Arab Emirates · Golden Visa Holder",
      "hero.hello": "Dr. Ali Fathy", "hero.name": "Alsherif",
      "hero.roles": "Academic Lecturer · Researcher · Library & Information Science Expert · Digital Repositories & Archives Consultant · AI Consultant for Libraries & Knowledge Management · International Trainer & Speaker",
      "hero.bio": "Two decades building modern, data-driven knowledge environments across leading academic and governmental institutions in the UAE — from digital repositories and large-scale digitization to AI-enabled information services.",
      "cta.cv": "Download CV", "cta.consult": "Book a Consultation", "cta.speak": "Invite to Speak",
      "stat.years": "Years experience", "stat.books": "Books published", "stat.pubs": "Publications", "stat.workshops": "Workshops",
      "hero.badge.title": "Sharjah Award", "hero.badge.sub": "Library Literature, 2016",
      "about.kicker": "About", "about.title": "Turning information into institutional knowledge",
      "about.p1": "I am a Library & Information Science professional with more than twenty years of experience leading library operations, digital transformation, and knowledge-management programmes across academic and governmental institutions in the United Arab Emirates and the wider Arab world.",
      "about.p2": "My work spans the full information lifecycle — designing and building digital repositories, implementing integrated library systems, and delivering large-scale digitization of heritage and research collections — with deep competence in metadata standards such as MARC21, RDA and LCSH.",
      "about.p3": "Today my focus is the responsible adoption of Artificial Intelligence in libraries, archives and knowledge institutions: from generative-AI information services to smart repositories and process automation. I hold a PhD in Library & Information Science and a UAE Golden Visa, and I train and speak internationally.",
      "about.mission": "Knowledge is an institution's most renewable asset — my mission is to make it findable, preserved and intelligent.",
      "about.facts.title": "At a glance",
      "about.fact.based": "Based in", "about.fact.role": "Current role", "about.fact.roleval": "Chief Knowledge & Digital Services Officer",
      "about.fact.edu": "Education", "about.fact.eduval": "PhD · MLIS · BA (LIS)",
      "about.fact.lang": "Languages", "about.fact.langval": "Arabic (native) · English",
      "about.fact.visa": "Residency", "about.fact.visaval": "UAE Golden Visa",
      "expertise.kicker": "Expertise", "expertise.title": "Areas of expertise",
      "expertise.sub": "Ten interlocking disciplines that turn scattered content into governed, discoverable, future-ready knowledge.",
      "experience.kicker": "Career", "experience.title": "Professional experience",
      "experience.sub": "Two decades of leadership across universities, government bodies and cultural institutions.",
      "education.kicker": "Academic", "education.title": "Education",
      "books.kicker": "Authored", "books.title": "Books",
      "books.sub": "Three scholarly volumes on digital repositories, heritage digitization and AI in libraries — published by Dar Al Nahda Al Ilmiya, Dubai.",
      "research.kicker": "Scholarship", "research.title": "Research & publications",
      "research.sub": "Peer-reviewed papers, conference research and articles on digital repositories, AI and Arabic heritage.",
      "speaking.kicker": "Stage", "speaking.title": "Conferences & speaking",
      "speaking.sub": "Keynotes, research presentations and award moments across the region's leading knowledge events.",
      "workshops.kicker": "Training", "workshops.title": "Workshops & training",
      "workshops.sub": "Professional programmes delivered to librarians, archivists and knowledge teams across the Arab world.",
      "volunteer.kicker": "Community", "volunteer.title": "Volunteer work",
      "volunteer.sub": "Giving back to the profession and the community across the UAE and Egypt.",
      "gallery.kicker": "Moments", "gallery.title": "Professional gallery",
      "gallery.sub": "Conferences, awards, training and networking across the region.",
      "services.kicker": "Work with me", "services.title": "Consulting services",
      "services.sub": "Advisory, implementation and capacity-building for institutions modernising their knowledge infrastructure.",
      "testi.kicker": "Recognition", "testi.title": "What partners say",
      "testi.sub": "A space reserved for testimonials from institutions and collaborators.",
      "testi.placeholder": "Your testimonial could appear here.",
      "contact.kicker": "Contact", "contact.title": "Let's build something intelligent",
      "contact.sub": "For consulting, training, keynote invitations or research collaboration.",
      "contact.email": "Email", "contact.phone": "Phone", "contact.location": "Location",
      "contact.locationval": "Dubai, United Arab Emirates", "contact.map": "Dubai · United Arab Emirates",
      "form.name": "Full name", "form.name.ph": "Your name", "form.email": "Email", "form.email.ph": "you@institution.org",
      "form.org": "Organisation", "form.org.ph": "University / Ministry / Library", "form.topic": "I'm interested in",
      "form.topic.1": "Consulting", "form.topic.2": "Keynote / Speaking", "form.topic.3": "Training & workshops",
      "form.topic.4": "Digital repository project", "form.topic.5": "Research collaboration", "form.topic.6": "Other",
      "form.message": "Message", "form.message.ph": "Tell me about your project or event…", "form.submit": "Send message",
      "form.ok": "Thank you — your message is ready. Your email app will open to send it.",
      "form.err": "Please complete the required fields.",
      "footer.tagline": "Library & Information Science · AI · Digital Repositories · Knowledge Management",
      "footer.rights": "© 2026 Dr. Ali Fathy Alsherif. All rights reserved.",
      "footer.made": "Designed & built as a personal knowledge brand.",
      "research.all": "All",
    },
    ar: {
      "a11y.skip": "تخطَّ إلى المحتوى الرئيسي",
      "brand.name": "د. علي فتحي الشريف", "brand.role": "مكتبات · ذكاء اصطناعي · مستودعات رقمية",
      "nav.about": "نبذة", "nav.expertise": "الخبرات", "nav.experience": "المسيرة",
      "nav.books": "الكتب", "nav.research": "الأبحاث", "nav.speaking": "المؤتمرات",
      "nav.gallery": "المعرض", "nav.services": "الخدمات", "nav.contact": "تواصل", "nav.cv": "تحميل السيرة",
      "search.placeholder": "ابحث في الكتب والأبحاث والورش…",
      "hero.eyebrow": "دبي، الإمارات العربية المتحدة · حاصل على الإقامة الذهبية",
      "hero.hello": "د. علي فتحي", "hero.name": "الشريف",
      "hero.roles": "محاضر أكاديمي · باحث · خبير علم المكتبات والمعلومات · مستشار المستودعات الرقمية والأرشيف · مستشار الذكاء الاصطناعي للمكتبات وإدارة المعرفة · مدرب ومتحدث دولي",
      "hero.bio": "عقدان من بناء بيئات معرفية حديثة قائمة على البيانات في كبرى المؤسسات الأكاديمية والحكومية بالإمارات — من المستودعات الرقمية والرقمنة واسعة النطاق إلى خدمات المعلومات المدعومة بالذكاء الاصطناعي.",
      "cta.cv": "تحميل السيرة الذاتية", "cta.consult": "احجز استشارة", "cta.speak": "دعوة للتحدث",
      "stat.years": "سنوات خبرة", "stat.books": "كتب منشورة", "stat.pubs": "أبحاث ومقالات", "stat.workshops": "ورش عمل",
      "hero.badge.title": "جائزة الشارقة", "hero.badge.sub": "أدب المكتبات، 2016",
      "about.kicker": "نبذة", "about.title": "تحويل المعلومات إلى معرفة مؤسسية",
      "about.p1": "أنا متخصص في علم المكتبات والمعلومات بخبرة تتجاوز عشرين عامًا في قيادة عمليات المكتبات والتحول الرقمي وبرامج إدارة المعرفة في المؤسسات الأكاديمية والحكومية بدولة الإمارات والعالم العربي.",
      "about.p2": "يمتد عملي عبر دورة حياة المعلومات كاملة — تصميم وبناء المستودعات الرقمية، وتطبيق نظم المكتبات المتكاملة، وتنفيذ مشاريع رقمنة واسعة للتراث والمجموعات البحثية — بكفاءة عميقة في معايير الميتاداتا مثل MARC21 وRDA وLCSH.",
      "about.p3": "ينصبّ تركيزي اليوم على التبني المسؤول للذكاء الاصطناعي في المكتبات والأرشيف ومؤسسات المعرفة: من خدمات المعلومات التوليدية إلى المستودعات الذكية وأتمتة العمليات. أحمل درجة الدكتوراه في علم المكتبات والمعلومات والإقامة الذهبية الإماراتية، وأقدّم التدريب والمحاضرات دوليًا.",
      "about.mission": "المعرفة هي أكثر أصول المؤسسة تجدّدًا — ورسالتي أن أجعلها قابلة للاكتشاف ومحفوظة وذكية.",
      "about.facts.title": "لمحة سريعة",
      "about.fact.based": "المقر", "about.fact.role": "المنصب الحالي", "about.fact.roleval": "الرئيس التنفيذي للمعرفة والخدمات الرقمية",
      "about.fact.edu": "المؤهلات", "about.fact.eduval": "دكتوراه · ماجستير · بكالوريوس",
      "about.fact.lang": "اللغات", "about.fact.langval": "العربية (الأم) · الإنجليزية",
      "about.fact.visa": "الإقامة", "about.fact.visaval": "الإقامة الذهبية الإماراتية",
      "expertise.kicker": "الخبرات", "expertise.title": "مجالات الخبرة",
      "expertise.sub": "عشرة تخصصات متكاملة تحوّل المحتوى المبعثر إلى معرفة محوكمة وقابلة للاكتشاف وجاهزة للمستقبل.",
      "experience.kicker": "المسيرة", "experience.title": "الخبرة المهنية",
      "experience.sub": "عقدان من القيادة عبر الجامعات والجهات الحكومية والمؤسسات الثقافية.",
      "education.kicker": "المؤهلات", "education.title": "المؤهلات العلمية",
      "books.kicker": "المؤلفات", "books.title": "الكتب",
      "books.sub": "ثلاثة مؤلفات علمية حول المستودعات الرقمية ورقمنة التراث والذكاء الاصطناعي في المكتبات — صادرة عن دار النهضة العلمية، دبي.",
      "research.kicker": "الإنتاج العلمي", "research.title": "الأبحاث والمنشورات",
      "research.sub": "أوراق محكّمة وأبحاث مؤتمرات ومقالات حول المستودعات الرقمية والذكاء الاصطناعي والتراث العربي.",
      "speaking.kicker": "المنصة", "speaking.title": "المؤتمرات والمحاضرات",
      "speaking.sub": "كلمات رئيسية وعروض بحثية ولحظات تكريم في أبرز فعاليات المعرفة بالمنطقة.",
      "workshops.kicker": "التدريب", "workshops.title": "ورش العمل والتدريب",
      "workshops.sub": "برامج مهنية قُدّمت لأخصائيي المكتبات والأرشيف وفرق المعرفة عبر العالم العربي.",
      "volunteer.kicker": "المجتمع", "volunteer.title": "العمل التطوعي",
      "volunteer.sub": "العطاء لخدمة المهنة والمجتمع في الإمارات ومصر.",
      "gallery.kicker": "لحظات", "gallery.title": "المعرض المهني",
      "gallery.sub": "مؤتمرات وجوائز وتدريب وتواصل مهني عبر المنطقة.",
      "services.kicker": "اعمل معي", "services.title": "الخدمات الاستشارية",
      "services.sub": "الاستشارات والتنفيذ وبناء القدرات للمؤسسات التي تحدّث بنيتها المعرفية.",
      "testi.kicker": "تقدير", "testi.title": "آراء الشركاء",
      "testi.sub": "مساحة مخصّصة لآراء المؤسسات والمتعاونين.",
      "testi.placeholder": "يمكن أن يظهر رأيك هنا.",
      "contact.kicker": "تواصل", "contact.title": "لنبنِ شيئًا ذكيًا معًا",
      "contact.sub": "للاستشارات والتدريب ودعوات المحاضرات أو التعاون البحثي.",
      "contact.email": "البريد", "contact.phone": "الهاتف", "contact.location": "الموقع",
      "contact.locationval": "دبي، الإمارات العربية المتحدة", "contact.map": "دبي · الإمارات العربية المتحدة",
      "form.name": "الاسم الكامل", "form.name.ph": "اسمك", "form.email": "البريد الإلكتروني", "form.email.ph": "you@institution.org",
      "form.org": "الجهة", "form.org.ph": "جامعة / وزارة / مكتبة", "form.topic": "مهتم بـ",
      "form.topic.1": "استشارات", "form.topic.2": "محاضرة / تحدّث", "form.topic.3": "تدريب وورش",
      "form.topic.4": "مشروع مستودع رقمي", "form.topic.5": "تعاون بحثي", "form.topic.6": "أخرى",
      "form.message": "الرسالة", "form.message.ph": "أخبرني عن مشروعك أو فعاليتك…", "form.submit": "إرسال الرسالة",
      "form.ok": "شكرًا لك — رسالتك جاهزة، وسيفتح تطبيق البريد لإرسالها.",
      "form.err": "يرجى إكمال الحقول المطلوبة.",
      "footer.tagline": "علم المكتبات والمعلومات · الذكاء الاصطناعي · المستودعات الرقمية · إدارة المعرفة",
      "footer.rights": "© 2026 د. علي فتحي الشريف. جميع الحقوق محفوظة.",
      "footer.made": "صُمّم وبُني كعلامة معرفية شخصية.",
      "research.all": "الكل",
    },
  };

  const RTYPE = {
    en: { paper: "Journal Paper", conference: "Conference Research", talk: "Presentation", article: "Article" },
    ar: { paper: "بحث في دورية", conference: "بحث مؤتمر", talk: "محاضرة", article: "مقال" },
  };

  /* ---------------- State ---------------- */
  let lang = localStorage.getItem("af-lang") || "en";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const t = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.en[k] || k);
  const pick = (o) => (lang === "ar" ? o.ar : o.en);

  /* ---------------- Render collections ---------------- */
  function render() {
    // Marquee
    const mt = $("#marqueeTrack");
    const mItems = DATA.marquee.concat(DATA.marquee)
      .map((x) => `<span>${x}</span>`).join("");
    mt.innerHTML = mItems;

    // Expertise
    $("#expertiseGrid").innerHTML = DATA.expertise.map((x, i) => {
      const [ti, de] = pick(x);
      return `<article class="xcard reveal" style="transition-delay:${i * 40}ms">
        <div class="xicon">${ICONS[x.icon]}</div>
        <h3>${ti}</h3><p>${de}</p></article>`;
    }).join("");

    // Experience
    $("#experienceTimeline").innerHTML = DATA.experience.map((x) => {
      const pts = x.pts.map((p) => `<li>${lang === "ar" ? p[1] : p[0]}</li>`).join("");
      const tags = x.tags.map((tg) => `<span>${tg}</span>`).join("");
      return `<div class="tl-item reveal">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <span class="tl-period">${lang === "ar" ? x.periodAr : x.period}</span>
          <h3 class="tl-role">${lang === "ar" ? x.roleAr : x.role}</h3>
          <div class="tl-org">${lang === "ar" ? x.orgAr : x.org} <span class="tl-place">· ${lang === "ar" ? x.placeAr : x.place}</span></div>
          <ul class="tl-list">${pts}</ul>
          <div class="tl-tags">${tags}</div>
        </div></div>`;
    }).join("");

    // Education
    $("#educationGrid").innerHTML = DATA.education.map((x, i) => {
      const [deg, inst] = pick(x);
      const badge = x.badge ? `<span class="edu-badge">${ICONS.star} ${lang === "ar" && x.badgeAr ? x.badgeAr : x.badge}</span>` : "";
      const note = x.note ? `<p class="edu-note">${lang === "ar" && x.noteAr ? x.noteAr[0] : x.note[0]}</p>` : "";
      return `<article class="edu-card reveal" style="transition-delay:${i * 50}ms">
        <div class="edu-cap">${ICONS.cap}</div>
        <span class="edu-year">${x.year}</span>
        <h3>${deg}</h3><div class="edu-inst">${inst}</div>${note}${badge}</article>`;
    }).join("");

    // Books
    $("#booksGrid").innerHTML = DATA.books.map((x) => {
      const [title, desc, tag] = pick(x);
      const cover = x.img
        ? `<div class="book-cover has-img" data-lb="${x.img}" data-cap="${title}">
            <img src="${x.img}" alt="${title}" loading="lazy" decoding="async">
          </div>`
        : `<div class="book-cover" style="background:${x.color}">
            <span class="bc-title">${x.coverTitle}</span>
            <span class="bc-imprint">Dar Al Nahda Al Ilmiya</span>
            <span class="bc-year">${x.year}</span>
          </div>`;
      return `<article class="book-card reveal">
        ${cover}
        <div class="book-info">
          <span class="book-tag">${tag}</span>
          <h3>${title}</h3><p>${desc}</p>
          <div class="book-meta">
            <span>${ICONS.doc} <b>${lang === "ar" ? x.publisherAr : x.publisher}</b></span>
            <span>${lang === "ar" ? "سنة" : "Year"}: <b>${x.year}</b></span>
          </div>
        </div></article>`;
    }).join("");

    // Research + filters
    renderResearch("all");
    const types = ["all"].concat(Array.from(new Set(DATA.research.map((r) => r.type))));
    $("#researchFilters").innerHTML = types.map((ty, i) =>
      `<button class="filter-chip${i === 0 ? " active" : ""}" data-filter="${ty}">${ty === "all" ? t("research.all") : (RTYPE[lang][ty] || ty)}</button>`
    ).join("");
    $$("#researchFilters .filter-chip").forEach((c) =>
      c.addEventListener("click", () => {
        $$("#researchFilters .filter-chip").forEach((x) => x.classList.remove("active"));
        c.classList.add("active");
        renderResearch(c.dataset.filter);
      }));

    // Events
    $("#eventsGrid").innerHTML = DATA.events.map((x, i) => {
      const c = pick(x);
      return `<article class="ecard reveal" style="transition-delay:${i * 40}ms">
        <div class="ecard-media" data-lb="${x.img}" data-cap="${c[0]}">
          <img src="${x.img}" alt="${c[0]}" loading="lazy" />
          <span class="etag">${lang === "ar" ? x.tagAr : x.tag}</span>
        </div>
        <div class="ecard-body">
          <h3>${c[0]}</h3>
          <div class="ecard-meta">
            <span>${ICONS.pin} ${c[2]}</span>
            <span>${ICONS.calendar} ${c[3]}</span>
          </div>
          <p>${c[4]}</p>
        </div></article>`;
    }).join("");

    // Workshops
    $("#workshopsGrid").innerHTML = DATA.workshops.map((x, i) =>
      `<article class="wcard reveal" style="transition-delay:${(i % 4) * 40}ms">
        <div class="wcard-num">${String(i + 1).padStart(2, "0")}</div>
        <h3>${lang === "ar" ? x.ar : x.en}</h3>
        <div class="wcard-foot"><span>${x.topic}</span><span>${lang === "ar" ? "بالعربية" : "Arabic"}</span></div>
      </article>`).join("");

    // Volunteer
    $("#volunteerTimeline").innerHTML = DATA.volunteer.map((x) =>
      `<div class="tl-item reveal">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <span class="tl-period">${lang === "ar" ? x.periodAr : x.period}</span>
          <h3 class="tl-role">${lang === "ar" ? x.roleAr : x.role}</h3>
          <div class="tl-org">${lang === "ar" ? x.orgAr : x.org}</div>
          <ul class="tl-list"><li>${lang === "ar" ? x.impact[1] : x.impact[0]}</li></ul>
        </div></div>`).join("");

    // Certs
    $("#certStrip").innerHTML = DATA.certs.map((x) => {
      const c = pick(x);
      return `<div class="cert-card" data-lb="${x.img}" data-cap="${c[0]} — ${c[1]}">
        <img class="cert-thumb" src="${x.img}" alt="${c[0]}" loading="lazy" />
        <div><strong>${c[0]}</strong><span>${c[1]}</span></div>
      </div>`;
    }).join("");

    // Gallery
    $("#galleryGrid").innerHTML = DATA.gallery.map((x, i) =>
      `<div class="gitem" data-lb="${x.img}" data-cap="">
        <img src="${x.img}" alt="Professional event photo ${i + 1}" loading="lazy" />
        <span class="gicon">${ICONS.zoom}</span>
      </div>`).join("");

    // Services
    $("#servicesGrid").innerHTML = DATA.services.map((x, i) => {
      const [ti, de] = pick(x);
      return `<article class="scard reveal" style="transition-delay:${(i % 4) * 40}ms">
        <div class="sicon">${ICONS[x.icon]}</div>
        <h3>${ti}</h3><p>${de}</p></article>`;
    }).join("");

    // Testimonials (placeholders)
    $("#testiGrid").innerHTML = [0, 1, 2].map(() =>
      `<article class="tcard placeholder reveal">${ICONS.quote}<span>${t("testi.placeholder")}</span></article>`
    ).join("");

    bindLightboxTargets();
    observeReveal();
  }

  function renderResearch(filter) {
    $("#researchGrid").innerHTML = DATA.research.map((x, i) => {
      const c = pick(x);
      const show = filter === "all" || x.type === filter;
      return `<article class="rcard${show ? "" : " hide"} reveal" data-type="${x.type}" style="transition-delay:${(i % 3) * 40}ms">
        <div class="rcard-media">${researchArt(x.en[0])}</div>
        <div class="rcard-body">
          <span class="rtype">${RTYPE[lang][x.type] || x.type}</span>
          <h3>${c[0]}</h3>
          <div class="rvenue"><span class="ryear">${x.year}</span> · ${c[1]}</div>
        </div>
      </article>`;
    }).join("");
    observeReveal();
  }

  /* ---------------- Apply translations to static DOM ---------------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      const val = t(k);
      if (k === "footer.rights") {
        el.innerHTML = val.replace("2026", `<span id="year">${new Date().getFullYear()}</span>`);
      } else {
        el.textContent = val;
      }
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
    $("#langLabel").textContent = lang === "ar" ? "EN" : "ع";
    document.title = lang === "ar"
      ? "د. علي فتحي الشريف — علم المكتبات والمعلومات · مستشار الذكاء الاصطناعي والمستودعات الرقمية"
      : "Dr. Ali Fathy Alsherif — Library & Information Science · AI & Digital Repositories Consultant";
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem("af-lang", l);
    applyI18n();
    render();
  }

  /* ---------------- Theme ---------------- */
  function initTheme() {
    const saved = localStorage.getItem("af-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("af-theme", next);
    $('meta[name="theme-color"]').setAttribute("content", next === "dark" ? "#0a0e1f" : "#ffffff");
  }

  /* ---------------- Reveal on scroll ---------------- */
  let revealObserver;
  function observeReveal() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    $$(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------------- Counters ---------------- */
  function animateCounters() {
    $$("[data-count]").forEach((el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target + suffix; }
        else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
      };
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => { if (e.isIntersecting) { tick(); io.disconnect(); } });
      }, { threshold: 0.5 });
      io.observe(el);
    });
  }

  /* ---------------- Lightbox ---------------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCaption");
  let lbList = [], lbIndex = 0;
  function bindLightboxTargets() {
    lbList = $$("[data-lb]");
    lbList.forEach((el, i) => {
      el.onclick = () => openLb(i);
    });
  }
  function openLb(i) {
    lbIndex = i;
    const el = lbList[i];
    lbImg.src = el.dataset.lb;
    lbImg.alt = el.dataset.cap || "";
    lbCap.textContent = el.dataset.cap || "";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function stepLb(d) {
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    openLb(lbIndex);
  }
  $("#lbClose").onclick = closeLb;
  $("#lbNext").onclick = () => stepLb(1);
  $("#lbPrev").onclick = () => stepLb(-1);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") stepLb(lang === "ar" ? -1 : 1);
    if (e.key === "ArrowLeft") stepLb(lang === "ar" ? 1 : -1);
  });

  /* ---------------- Search ---------------- */
  function buildSearchIndex() {
    const idx = [];
    DATA.books.forEach((x) => idx.push({ cat: "Book", catAr: "كتاب", en: x.en[0], ar: x.ar[0], to: "#books" }));
    DATA.research.forEach((x) => idx.push({ cat: "Research", catAr: "بحث", en: x.en[0], ar: x.ar[0], to: "#research" }));
    DATA.workshops.forEach((x) => idx.push({ cat: "Workshop", catAr: "ورشة", en: x.en, ar: x.ar, to: "#workshops" }));
    DATA.expertise.forEach((x) => idx.push({ cat: "Expertise", catAr: "خبرة", en: x.en[0], ar: x.ar[0], to: "#expertise" }));
    DATA.services.forEach((x) => idx.push({ cat: "Service", catAr: "خدمة", en: x.en[0], ar: x.ar[0], to: "#services" }));
    DATA.events.forEach((x) => idx.push({ cat: "Event", catAr: "فعالية", en: x.en[0], ar: x.ar[0], to: "#speaking" }));
    return idx;
  }
  const SEARCH_IDX = buildSearchIndex();
  function runSearch(q) {
    const box = $("#searchResults");
    q = q.trim().toLowerCase();
    if (!q) { box.innerHTML = ""; return; }
    const hits = SEARCH_IDX.filter((x) =>
      (x.en || "").toLowerCase().includes(q) || (x.ar || "").includes(q)
    ).slice(0, 12);
    if (!hits.length) { box.innerHTML = `<p class="search-empty">${lang === "ar" ? "لا نتائج" : "No results"}</p>`; return; }
    box.innerHTML = hits.map((h) =>
      `<a class="search-hit" href="${h.to}"><small>${lang === "ar" ? h.catAr : h.cat}</small><strong>${lang === "ar" ? h.ar : h.en}</strong></a>`
    ).join("");
    $$(".search-hit", box).forEach((a) => a.addEventListener("click", closeSearch));
  }
  function openSearch() {
    $("#searchPanel").classList.add("open");
    $("#searchPanel").setAttribute("aria-hidden", "false");
    setTimeout(() => $("#searchInput").focus(), 200);
  }
  function closeSearch() {
    $("#searchPanel").classList.remove("open");
    $("#searchPanel").setAttribute("aria-hidden", "true");
    $("#searchInput").value = ""; $("#searchResults").innerHTML = "";
  }

  /* ---------------- Nav / scroll behaviours ---------------- */
  function initScroll() {
    const header = $("#siteHeader");
    const prog = $("#scrollProgress");
    const toTop = $("#toTop");
    const sections = $$("main section[id]");
    const navLinks = $$(".main-nav a");
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 20);
      toTop.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (y / h * 100) + "%";
      let cur = "";
      sections.forEach((s) => { if (y >= s.offsetTop - 120) cur = s.id; });
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initMenu() {
    const btn = $("#menuToggle"), nav = $("#mainNav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    $$(".main-nav a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------------- Contact form ---------------- */
  function initForm() {
    const form = $("#contactForm"), note = $("#formNote");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cf-name").value.trim();
      const email = $("#cf-email").value.trim();
      const msg = $("#cf-msg").value.trim();
      if (!name || !email || !msg) {
        note.textContent = t("form.err"); note.className = "form-note err"; return;
      }
      const org = $("#cf-org").value.trim();
      const topic = $("#cf-topic").value;
      const subject = encodeURIComponent(`[Website] ${topic} — ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganisation: ${org}\nTopic: ${topic}\n\n${msg}`);
      note.textContent = t("form.ok"); note.className = "form-note ok";
      window.location.href = `mailto:a.elsherif79@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  /* ---------------- Init ---------------- */
  function init() {
    initTheme();
    applyI18n();
    render();
    animateCounters();
    initScroll();
    initMenu();
    initForm();

    $("#themeToggle").addEventListener("click", toggleTheme);
    $("#langToggle").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));
    $("#searchToggle").addEventListener("click", () => {
      const open = $("#searchPanel").classList.contains("open");
      open ? closeSearch() : openSearch();
    });
    $("#searchClose").addEventListener("click", closeSearch);
    $("#searchInput").addEventListener("input", (e) => runSearch(e.target.value));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
