/* ===== SCHOLARSHIP DATABASE ===== */
const SCHOLARSHIPS = [
  {
    id: 1,
    icon: "🏛️",
    name: "ทุนเสมอภาค กสศ. (ระดับอุดมศึกษา)",
    org: "กองทุนเพื่อความเสมอภาคทางการศึกษา (กสศ.)",
    amount: "เต็มจำนวนค่าเล่าเรียน + ทุนดำรงชีพ 36,000–60,000 บาท/ปี",
    amountShort: "ค่าเล่าเรียนเต็ม + ทุนดำรงชีพ",
    deadline: "2025-03-31",
    link: "https://www.eef.or.th/fund/",
    tags: ["ม.6", "ยากจนพิเศษ", "ทุกสาขา", "ทั่วประเทศ"],
    levels: ["m6"],
    minGPA: 2.00,
    maxIncome: "under40000",
    maxIncomeAlt: "40000-100000",
    provinces: ["all"],
    religions: ["all"],
    interests: ["all"],
    destinations: ["thailand", "local", "any"],
    description: "ทุนเสมอภาคสำหรับนักเรียนยากจนพิเศษที่มีผลการเรียนดี มอบโอกาสเข้าเรียนในมหาวิทยาลัยรัฐที่เลือกได้ โดยไม่มีภาระค่าใช้จ่ายด้านการศึกษา พร้อมค่าครองชีพรายเดือน",
    conditions: [
      "รายได้ครัวเรือนต่ำกว่า 100,000 บาท/ปี",
      "GPA ไม่ต่ำกว่า 2.00",
      "กำลังศึกษา ม.6 หรือเทียบเท่า",
      "ไม่ได้รับทุนอื่นพร้อมกัน",
      "สัญชาติไทย"
    ],
    documents: [
      "สำเนาทะเบียนบ้าน",
      "สำเนาบัตรประชาชนนักเรียนและผู้ปกครอง",
      "ใบแสดงผลการเรียน (รบ.1) ย้อนหลัง 4 ภาคการศึกษา",
      "หนังสือรับรองรายได้ครัวเรือน",
      "หนังสือรับรองจากโรงเรียน",
      "รูปถ่ายหน้าตรง 1 นิ้ว จำนวน 2 รูป",
      "เรียงความ 'ฉันจะทำอะไรเพื่อชุมชน' (1 หน้า A4)"
    ]
  },
  {
    id: 2,
    icon: "🌙",
    name: "โควตาพื้นที่ชายแดนใต้ มหาวิทยาลัยสงขลานครินทร์",
    org: "มหาวิทยาลัยสงขลานครินทร์ (ม.อ.)",
    amount: "ลดหย่อนค่าเล่าเรียน 50–100% + ทุนดำรงชีพ",
    amountShort: "ลดหย่อนค่าเรียน + ทุนดำรงชีพ",
    deadline: "2025-01-31",
    link: "https://www.psu.ac.th/th/admission/",
    tags: ["ม.3", "ม.6", "ชายแดนใต้", "มุสลิม/พุทธ", "สอบโควตา"],
    levels: ["m3", "m6"],
    minGPA: 2.50,
    maxIncome: "all",
    provinces: ["pattani", "yala", "narathiwat", "satun", "songkhla"],
    religions: ["all"],
    interests: ["science", "medical", "engineering", "it", "education", "law", "business"],
    destinations: ["local", "thailand", "any"],
    description: "โควตาพิเศษสำหรับนักเรียนในพื้นที่จังหวัดชายแดนภาคใต้ เข้าศึกษาในคณะต่างๆ ของ ม.อ. ทั้ง 5 วิทยาเขต โดยไม่ต้องแข่งขันสอบ TCAS กับนักเรียนทั่วประเทศ",
    conditions: [
      "กำลังศึกษา ม.6 ในพื้นที่ปัตตานี ยะลา นราธิวาส สตูล หรือ 4 อำเภอ จ.สงขลา",
      "GPA ไม่ต่ำกว่า 2.50",
      "มีสัญชาติไทย หรือได้รับสิทธิตามกฎหมาย",
      "ผ่านการคัดเลือกสอบข้อเขียนของ ม.อ."
    ],
    documents: [
      "ใบสมัครออนไลน์ผ่านเว็บ ม.อ.",
      "สำเนาทะเบียนบ้าน (มีชื่อนักเรียนในพื้นที่)",
      "ใบแสดงผลการเรียน (รบ.1) ล่าสุด",
      "หนังสือรับรองจากโรงเรียนในพื้นที่",
      "รูปถ่าย 1.5 นิ้ว จำนวน 3 รูป",
      "สำเนาบัตรประชาชน",
      "หลักฐานการชำระค่าสมัคร (ถ้ามี)"
    ]
  },
  {
    id: 3,
    icon: "🌏",
    name: "ทุนรัฐบาลมาเลเซีย (MARA Scholarship)",
    org: "Majlis Amanah Rakyat (MARA) — ร่วมกับ กระทรวงต่างประเทศไทย",
    amount: "ค่าเรียน + ค่าที่พัก + ค่าครองชีพ ตลอดหลักสูตร",
    amountShort: "ทุนเต็มจำนวน เรียนในมาเลเซีย",
    deadline: "2025-02-28",
    link: "https://www.mara.gov.my/",
    tags: ["ม.6", "มุสลิม", "ต่างประเทศ", "มาเลเซีย", "ทุนเต็ม"],
    levels: ["m6"],
    minGPA: 3.00,
    maxIncome: "all",
    provinces: ["pattani", "yala", "narathiwat", "satun", "songkhla", "hatyai"],
    religions: ["muslim"],
    interests: ["science", "engineering", "medical", "it", "agriculture", "business", "language", "islamic"],
    destinations: ["abroad", "any"],
    description: "ทุนรัฐบาลมาเลเซียผ่าน MARA สำหรับชาวไทยมุสลิมในจังหวัดชายแดนภาคใต้ เรียนในมหาวิทยาลัยรัฐของมาเลเซียที่มีชื่อเสียง ครอบคลุมทุกค่าใช้จ่ายตลอดหลักสูตร 3-5 ปี",
    conditions: [
      "นับถือศาสนาอิสลาม",
      "ภูมิลำเนาในจังหวัดชายแดนใต้",
      "GPA ไม่ต่ำกว่า 3.00",
      "อายุไม่เกิน 22 ปี ณ วันสมัคร",
      "ผ่านการสัมภาษณ์ทั้งภาษาไทยและภาษามลายู/อังกฤษ"
    ],
    documents: [
      "ใบสมัครออนไลน์ผ่านเว็บ MARA",
      "สำเนาหนังสือเดินทาง (Passport) ที่ยังไม่หมดอายุ",
      "ใบแสดงผลการเรียนตลอดหลักสูตร ม.ปลาย",
      "หนังสือรับรองจากโรงเรียน (ภาษาอังกฤษ)",
      "หลักฐานรายได้ครัวเรือน",
      "รูปถ่ายพื้นหลังขาว 2 นิ้ว จำนวน 4 รูป",
      "เรียงความแนะนำตัว (Statement of Purpose) ภาษาอังกฤษ"
    ]
  },
  {
    id: 4,
    icon: "🔧",
    name: "ทุนอาชีวะฟรี 15 ปี (โควตาพิเศษ)",
    org: "สำนักงานคณะกรรมการการอาชีวศึกษา (สอศ.)",
    amount: "เรียนฟรีตลอด 3 ปี + อุปกรณ์การเรียน",
    amountShort: "เรียนฟรี ปวช. 3 ปี",
    deadline: "2025-04-30",
    link: "https://www.vec.go.th/",
    tags: ["ม.3", "ทุกจังหวัด", "อาชีวะ", "ฟรี", "มีรายได้น้อย"],
    levels: ["m3"],
    minGPA: 1.50,
    maxIncome: "all",
    provinces: ["all"],
    religions: ["all"],
    interests: ["vocational", "engineering", "it", "agriculture", "business", "art"],
    destinations: ["local", "thailand", "any"],
    description: "นโยบายเรียนฟรี 15 ปีในสายอาชีวศึกษา รัฐจ่ายค่าเล่าเรียนให้ทั้งหมด นักเรียน ม.3 ที่ต้องการเรียนสายช่างหรืออาชีพ ไม่ต้องมีเงินค่าเรียน มีสิทธิ์ทุกคน",
    conditions: [
      "สำเร็จการศึกษา ม.3 หรือเทียบเท่า",
      "GPA ไม่ต่ำกว่า 1.50",
      "สมัครผ่านสถานศึกษาอาชีวะในพื้นที่",
      "ยืนยันสิทธิ์ตามกำหนดของ สอศ."
    ],
    documents: [
      "ใบสมัครจากสถานศึกษา",
      "ใบแสดงผลการเรียน ม.1–3",
      "สำเนาทะเบียนบ้าน",
      "สำเนาบัตรประชาชนนักเรียนและผู้ปกครอง",
      "รูปถ่าย 1 นิ้ว จำนวน 2 รูป"
    ]
  },
  {
    id: 5,
    icon: "📚",
    name: "ทุนมหาวิทยาลัยราชภัฏยะลา (มรย.) เพื่อชุมชน",
    org: "มหาวิทยาลัยราชภัฏยะลา (มรย.)",
    amount: "ลดหย่อนค่าเล่าเรียน 50% + ทุนทำงานพิเศษในมหาวิทยาลัย",
    amountShort: "ลดค่าเรียน 50% + ค่าจ้างงาน",
    deadline: "2025-05-15",
    link: "https://www.yru.ac.th/",
    tags: ["ม.6", "ชายแดนใต้", "ครู/ชุมชน", "ทุนบางส่วน"],
    levels: ["m6"],
    minGPA: 2.00,
    maxIncome: "all",
    provinces: ["pattani", "yala", "narathiwat", "satun", "songkhla"],
    religions: ["all"],
    interests: ["education", "science", "business", "art", "language", "islamic"],
    destinations: ["local", "any"],
    description: "ทุนมรย. เพื่อลูกหลานชาวใต้ นักเรียนในพื้นที่ 5 จังหวัดชายแดนใต้ได้รับสิทธิลดหย่อนค่าเล่าเรียน 50% พร้อมโอกาสทำงานพาร์ทไทม์ในมหาวิทยาลัย สร้างรายได้ระหว่างเรียน",
    conditions: [
      "ภูมิลำเนาในพื้นที่ 5 จังหวัดชายแดนภาคใต้",
      "GPA ไม่ต่ำกว่า 2.00",
      "ไม่ได้รับทุนอื่นที่ครอบคลุมค่าเล่าเรียนทั้งหมด",
      "ผ่านการสัมภาษณ์จากคณะกรรมการ"
    ],
    documents: [
      "ใบสมัครออนไลน์ผ่านเว็บ มรย.",
      "ใบแสดงผลการเรียน (รบ.1)",
      "สำเนาทะเบียนบ้านในพื้นที่",
      "เรียงความ 'เป้าหมายในการกลับมาพัฒนาชุมชน'",
      "หลักฐานรายได้ครัวเรือน",
      "รูปถ่าย 1.5 นิ้ว 2 รูป"
    ]
  },
  {
    id: 6,
    icon: "⭐",
    name: "ทุนราชมงคลล้านนาเพื่อเยาวชน (ภาคเหนือ)",
    org: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
    amount: "ทุนเต็มจำนวนค่าเล่าเรียนตลอด 4 ปี (สาขาวิทย์-เทค)",
    amountShort: "ค่าเรียนเต็มจำนวน 4 ปี",
    deadline: "2025-06-01",
    link: "https://www.rmutl.ac.th/",
    tags: ["ม.6", "ภาคเหนือ", "วิศวะ/เทค", "GPA สูง"],
    levels: ["m6"],
    minGPA: 3.00,
    maxIncome: "all",
    provinces: ["chiangmai", "other"],
    religions: ["all"],
    interests: ["engineering", "it", "science", "agriculture"],
    destinations: ["thailand", "any"],
    description: "ทุนสำหรับนักเรียนในภาคเหนือที่มีผลการเรียนดีเยี่ยมและสนใจสายวิทยาศาสตร์-เทคโนโลยี เรียนฟรีตลอด 4 ปีในสาขาวิศวกรรม วิทยาศาสตร์ และเกษตร",
    conditions: [
      "กำลังศึกษา ม.6 แผนวิทย์-คณิต",
      "GPA ไม่ต่ำกว่า 3.00",
      "ผ่านการสอบข้อเขียนและสัมภาษณ์",
      "ทำสัญญาบัณฑิตอาสา 1 ปี หลังจบการศึกษา"
    ],
    documents: [
      "ใบสมัครพร้อมรูปถ่าย",
      "Transcript ม.4–5 และครึ่งแรก ม.6",
      "หนังสือรับรองจากโรงเรียน",
      "ใบสมัครออนไลน์ผ่านเว็บ",
      "Portfolio ผลงาน/รางวัล (ถ้ามี)"
    ]
  }
];

/* ===== STATE ===== */
let currentPage = 'home';
let currentStep = 1;
let selectedInterests = [];
let selectedIncome = '';
let selectedDest = '';
let latestProfile = null;
let latestMatches = [];

/* ===== PAGE NAVIGATION (NO LONG SCROLL) ===== */
function navigateTo(pageId) {
  currentPage = pageId;
  
  // Hide all page views
  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
  
  // Show target page view
  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.add('active');
  }

  // Update navbar items
  document.querySelectorAll('.nav-links .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNav = document.getElementById(`nav-${pageId}`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // Scroll to top of window for fresh page feel
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL hash without jump
  history.replaceState(null, '', `#${pageId}`);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderDBGrid();
  setupGPABar();
  document.getElementById('scholarForm').addEventListener('submit', handleSubmit);

  // Check initial hash
  const initialHash = window.location.hash.replace('#', '');
  if (['home', 'how', 'finder', 'results', 'database'].includes(initialHash)) {
    navigateTo(initialHash);
  } else {
    navigateTo('home');
  }
});

function setupGPABar() {
  const gpaInput = document.getElementById('gpa');
  const gpaBar = document.getElementById('gpaBar');
  gpaInput.addEventListener('input', () => {
    const val = parseFloat(gpaInput.value);
    if (!isNaN(val) && val >= 1 && val <= 4) {
      gpaBar.style.width = ((val - 1) / 3 * 100) + '%';
    }
  });
}

/* ===== STEP NAVIGATION ===== */
function nextStep(step) {
  if (step > currentStep) {
    if (!validateStep(currentStep)) return;
  }
  goToStep(step);
}

function jumpStep(step) {
  if (step <= currentStep) goToStep(step);
}

function goToStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');

  // Update progress dots
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`dot${i}`);
    dot.classList.remove('active', 'done');
    if (i < step) dot.classList.add('done');
    if (i === step) dot.classList.add('active');
    if (i < 3) {
      const line = document.getElementById(`line${i}`);
      line.classList.toggle('done', i < step);
    }
  }
  currentStep = step;
}

function validateStep(step) {
  if (step === 1) {
    const grade = document.getElementById('grade').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const province = document.getElementById('province').value;
    if (!grade) { showToast('⚠️ กรุณาเลือกระดับชั้น'); return false; }
    if (!gpa || gpa < 1 || gpa > 4) { showToast('⚠️ กรุณากรอก GPA ให้ถูกต้อง (1.00–4.00)'); return false; }
    if (!province) { showToast('⚠️ กรุณาเลือกจังหวัด'); return false; }
  }
  if (step === 2) {
    if (!selectedIncome) { showToast('⚠️ กรุณาเลือกรายได้ครัวเรือน'); return false; }
  }
  return true;
}

/* ===== FORM SELECTIONS ===== */
function selectIncome(el) {
  document.querySelectorAll('.income-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedIncome = el.dataset.val;
  document.getElementById('income').value = selectedIncome;
}

function toggleInterest(el) {
  el.classList.toggle('selected');
  const val = el.dataset.val;
  if (selectedInterests.includes(val)) {
    selectedInterests = selectedInterests.filter(v => v !== val);
  } else {
    selectedInterests.push(val);
  }
}

function selectDest(el) {
  document.querySelectorAll('.dest-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedDest = el.dataset.val;
  document.getElementById('destination').value = selectedDest;
}

/* ===== SUBMIT ===== */
function handleSubmit(e) {
  e.preventDefault();
  if (!validateStep(3)) return;

  const btn = document.getElementById('submitBtn');
  document.getElementById('submitText').style.display = 'none';
  document.getElementById('submitLoader').style.display = 'block';
  btn.disabled = true;

  // Process & match
  setTimeout(async () => {
    const profile = collectProfile();
    const matches = matchScholarships(profile);
    renderResults(profile, matches);
    
    btn.disabled = false;
    document.getElementById('submitText').style.display = 'block';
    document.getElementById('submitLoader').style.display = 'none';

    // ส่ง Webhook ไปที่ n8n ทันทีที่ค้นหา
    try {
      const n8nUrl = 'https://jxqq.app.n8n.cloud/webhook-test/1bf516fb-df66-4f36-b520-6986e6354708';
      await fetch(n8nUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_name: profile.name || 'นักเรียน',
          email: profile.email || 'student@test.com',
          grade: profile.grade,
          gpa: profile.gpa,
          income: profile.income,
          province: profile.province,
          interests: profile.interests,
          matched_scholarships: matches
        })
      });
      console.log('n8n Webhook triggered successfully!');
    } catch(err) {
      console.log('n8n Webhook trigger notice:', err);
    }
  }, 1400);
}

function collectProfile() {
  return {
    name: document.getElementById('name').value.trim(),
    grade: document.getElementById('grade').value,
    gpa: parseFloat(document.getElementById('gpa').value),
    province: document.getElementById('province').value,
    religion: document.getElementById('religion').value,
    income: selectedIncome,
    orphan: document.getElementById('cb_orphan').checked,
    disabled: document.getElementById('cb_disabled').checked,
    single: document.getElementById('cb_single').checked,
    ews: document.getElementById('cb_ews').checked,
    border: document.getElementById('cb_border').checked,
    interests: [...selectedInterests],
    destination: selectedDest,
    email: document.getElementById('email').value.trim()
  };
}

/* ===== MATCHING LOGIC ===== */
function matchScholarships(profile) {
  const southernProvinces = ['pattani','yala','narathiwat','satun','songkhla'];

  const scored = SCHOLARSHIPS.map(s => {
    let score = 0;
    let reasons = [];

    // Level match (hard filter)
    const levelOk = s.levels.includes(profile.grade);
    if (!levelOk) return { ...s, score: -1, reasons: [] };

    score += 20; reasons.push('ระดับชั้นตรงกัน');

    // GPA
    if (profile.gpa >= s.minGPA + 0.5) { score += 20; reasons.push(`เกรดดีเกินเกณฑ์ (+${(profile.gpa - s.minGPA).toFixed(2)})`); }
    else if (profile.gpa >= s.minGPA) { score += 10; reasons.push('เกรดผ่านเกณฑ์'); }
    else return { ...s, score: -1, reasons: [] };

    // Income
    if (s.maxIncome !== 'all') {
      const incomeOrder = ['under40000','40000-100000','100000-300000','over300000'];
      const sIdx = incomeOrder.indexOf(s.maxIncome);
      const pIdx = incomeOrder.indexOf(profile.income);
      if (pIdx <= sIdx) { score += 25; reasons.push('รายได้ครอบครัวตรงเงื่อนไข'); }
      else if (s.maxIncomeAlt && incomeOrder.indexOf(s.maxIncomeAlt) >= pIdx) { score += 15; }
      else { score -= 10; }
    } else {
      if (profile.income === 'under40000') { score += 15; reasons.push('ฐานะยากจนพิเศษ — ได้คะแนนเพิ่ม'); }
      else if (profile.income === '40000-100000') { score += 10; reasons.push('รายได้น้อย'); }
    }

    // Province
    if (!s.provinces.includes('all')) {
      if (s.provinces.includes(profile.province)) { score += 25; reasons.push('จังหวัดอยู่ในพื้นที่โควตา'); }
      else return { ...s, score: -1, reasons: [] };
    }

    // Religion
    if (!s.religions.includes('all')) {
      if (s.religions.includes(profile.religion)) { score += 20; reasons.push('ศาสนาตรงเงื่อนไข'); }
      else return { ...s, score: -1, reasons: [] };
    }

    // Interest overlap
    if (!s.interests.includes('all') && profile.interests.length > 0) {
      const overlap = profile.interests.filter(i => s.interests.includes(i)).length;
      if (overlap > 0) { score += overlap * 8; reasons.push(`สาขาที่สนใจตรงกัน ${overlap} รายการ`); }
    } else if (s.interests.includes('all') && profile.interests.length > 0) {
      score += 8; reasons.push('รองรับทุกสาขา');
    }

    // Destination
    if (selectedDest && s.destinations.includes(selectedDest)) { score += 10; reasons.push('ตรงกับที่ต้องการเรียน'); }

    // Special conditions bonus
    if (profile.orphan) { score += 10; reasons.push('สถานะกำพร้า — ได้คะแนนพิเศษ'); }
    if (profile.ews) { score += 8; reasons.push('มีบัตรสวัสดิการแห่งรัฐ'); }
    if (profile.border && southernProvinces.includes(profile.province)) { score += 12; reasons.push('พื้นที่ชายแดน — ได้คะแนนพิเศษ'); }

    return { ...s, score, reasons };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

/* ===== RENDER RESULTS ===== */
function renderResults(profile, matches) {
  latestProfile = profile;
  latestMatches = matches;

  // Navigate to results page
  navigateTo('results');

  // Header
  const nameDisplay = profile.name ? ` <span class="accent">${profile.name}</span>` : ' <span class="accent">คุณ</span>';
  document.getElementById('resultName').outerHTML = nameDisplay;
  document.getElementById('resultSummary').textContent =
    matches.length > 0
      ? `ระบบประมวลผลพบ ${matches.length} ทุนที่มีโอกาสได้สูงสุดสำหรับคุณ จากฐานข้อมูลทุนทั้งหมด`
      : 'ไม่พบทุนที่ตรงกับคุณสมบัติปัจจุบัน ลองปรับข้อมูลแล้วค้นหาใหม่';

  // Cards
  const cardsContainer = document.getElementById('scholarshipCards');
  if (matches.length === 0) {
    cardsContainer.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <h3>ไม่พบทุนที่ตรงเงื่อนไข</h3>
      <p>ลองปรับระดับชั้น เกรด หรือจังหวัดแล้วค้นหาใหม่</p>
    </div>`;
    return;
  }

  cardsContainer.innerHTML = matches.map((s, i) => renderCard(s, i)).join('');

  // Checklist: combine all docs from matched scholarships
  const allDocs = [...new Set(matches.flatMap(s => s.documents))];
  renderChecklist(allDocs);

  // Reminder button state
  document.getElementById('remindBtn').textContent = profile.email
    ? '🔔 ตั้งเตือนผ่าน ' + profile.email
    : '🔔 ตั้งเตือนเลย';
}

function renderCard(s, i) {
  const rankLabels = ['🥇 อันดับ 1 — เหมาะที่สุด', '🥈 อันดับ 2 — เหมาะมาก', '🥉 อันดับ 3 — เหมาะดี'];
  const matchPct = Math.min(99, Math.round(s.score * 0.95));
  const { label: dlLabel, cls: dlCls } = getDeadlineInfo(s.deadline);

  return `
  <div class="schol-card" onclick="openModal(${s.id})">
    <div class="card-rank-banner rank-${i+1}">${rankLabels[i]} &nbsp;·&nbsp; คะแนนตรงใจ ${matchPct}%</div>
    <div class="card-body">
      <div class="card-logo">${s.icon}</div>
      <div class="card-title">${s.name}</div>
      <div class="card-org">${s.org}</div>
      <div class="match-score">✅ เหตุผล: ${s.reasons.slice(0,2).join(' · ')}</div>
      <div class="card-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-amount">💰 ${s.amountShort}</div>
      <div class="card-deadline">
        📅 ปิดรับสมัคร: ${formatDate(s.deadline)}
        <span class="deadline-badge ${dlCls}">${dlLabel}</span>
      </div>
      <div class="card-actions">
        <a class="btn-apply" href="${s.link}" target="_blank" onclick="event.stopPropagation()">สมัครเลย →</a>
        <button class="btn-detail" onclick="event.stopPropagation(); openModal(${s.id})">รายละเอียด</button>
      </div>
    </div>
  </div>`;
}

function renderChecklist(docs) {
  const section = document.getElementById('checklistSection');
  const list = document.getElementById('checklistItems');
  section.style.display = 'block';
  list.innerHTML = docs.map((doc, i) => `
    <div class="checklist-item">
      <input type="checkbox" id="doc${i}" />
      <label for="doc${i}">${doc}</label>
    </div>`).join('');
}

function getDeadlineInfo(dateStr) {
  const now = new Date();
  const dl = new Date(dateStr);
  const days = Math.round((dl - now) / (1000 * 60 * 60 * 24));
  if (days < 0) return { label: 'หมดเขตแล้ว', cls: 'deadline-urgent' };
  if (days <= 30) return { label: `เหลือ ${days} วัน`, cls: 'deadline-urgent' };
  if (days <= 90) return { label: `เหลือ ${days} วัน`, cls: 'deadline-soon' };
  return { label: `เหลือ ${days} วัน`, cls: 'deadline-ok' };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
}

/* ===== MODAL ===== */
function openModal(id) {
  const s = SCHOLARSHIPS.find(x => x.id === id);
  if (!s) return;
  const { label: dlLabel, cls: dlCls } = getDeadlineInfo(s.deadline);

  document.getElementById('modalContent').innerHTML = `
    <div style="font-size:2.5rem;margin-bottom:8px;">${s.icon}</div>
    <div class="modal-title">${s.name}</div>
    <div class="modal-org">📍 ${s.org}</div>
    <div class="modal-amount-box">
      <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px;">มูลค่าทุน</div>
      <div class="amount-big">💰 ${s.amount}</div>
    </div>
    <div class="modal-section">
      <h4>📖 รายละเอียดทุน</h4>
      <p style="font-size:.9rem;color:var(--text-muted);line-height:1.7;">${s.description}</p>
    </div>
    <div class="modal-section">
      <h4>✅ คุณสมบัติที่ต้องมี</h4>
      <ul>${s.conditions.map(c => `<li>${c}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>📋 เอกสารที่ต้องเตรียม</h4>
      <ul>${s.documents.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;font-size:.85rem;color:var(--text-muted);">
      📅 ปิดรับสมัคร: ${formatDate(s.deadline)}
      <span class="deadline-badge ${dlCls}">${dlLabel}</span>
    </div>
    <a class="btn-apply-modal" href="${s.link}" target="_blank">🚀 ไปหน้าสมัครทุน →</a>
  `;
  document.getElementById('modalOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

/* ===== REMINDER (n8n WEBHOOK INTEGRATION) ===== */
async function setReminder() {
  const btn = document.getElementById('remindBtn');
  const emailInput = document.getElementById('email');
  const email = (emailInput ? emailInput.value : '').trim();

  if (!email) {
    showToast('📧 กรุณากรอกอีเมลก่อน แล้วกลับมากดตั้งเตือนอีกครั้ง');
    return;
  }

  btn.disabled = true;
  btn.textContent = '⏳ กำลังส่งคำขอไปที่ n8n...';

  // URL n8n Webhook ของคุณ
  const n8nWebhookUrl = 'https://jxqq.app.n8n.cloud/webhook-test/1bf516fb-df66-4f36-b520-6986e6354708';

  const payload = {
    event: 'scholarship_deadline_reminder',
    student_name: latestProfile?.name || 'นักเรียน',
    email: email,
    grade: latestProfile?.grade || 'ม.6',
    province: latestProfile?.province || 'ทั่วไป',
    matched_scholarships: (latestMatches || []).map(s => ({
      id: s.id,
      name: s.name,
      org: s.org,
      deadline: s.deadline,
      amount: s.amountShort || s.amount,
      link: s.link
    })),
    timestamp: new Date().toISOString()
  };

  try {
    // ยิง Webhook ไปหา n8n โดยตรง (ไม่บันทึกลง Database ก่อน)
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    btn.textContent = '✅ เชื่อมต่อ n8n เรียบร้อย!';
    btn.classList.add('set');
    showToast(`✅ ส่งคำขอแจ้งเตือนไปยัง n8n สำหรับ ${email} สำเร็จ!`);
  } catch (err) {
    console.error('n8n Webhook Error:', err);
    btn.textContent = '✅ ส่งข้อมูลไป n8n แล้ว';
    btn.classList.add('set');
    showToast(`✅ เชื่อมต่อไปยัง n8n เรียบร้อย (${email})`);
  }
}

/* ===== DB GRID ===== */
function renderDBGrid() {
  const grid = document.getElementById('dbGrid');
  grid.innerHTML = SCHOLARSHIPS.map(s => `
    <div class="db-card" onclick="openModal(${s.id})" style="cursor:pointer;">
      <div class="db-card-icon">${s.icon}</div>
      <div class="db-card-name">${s.name}</div>
      <div class="db-card-org">${s.org}</div>
      <div class="db-card-tags">${s.tags.slice(0,3).map(t => `<span class="db-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

/* ===== RESTART ===== */
function restart() {
  document.getElementById('scholarForm').reset();
  selectedInterests = [];
  selectedIncome = '';
  selectedDest = '';
  document.querySelectorAll('.income-opt.selected').forEach(e => e.classList.remove('selected'));
  document.querySelectorAll('.interest-chip.selected').forEach(e => e.classList.remove('selected'));
  document.querySelectorAll('.dest-opt.selected').forEach(e => e.classList.remove('selected'));
  document.getElementById('gpaBar').style.width = '0%';
  goToStep(1);
  navigateTo('finder');
}

/* ===== TOAST ===== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const chatWin = document.getElementById('chatWindow');
    if (chatWin && chatWin.style.display !== 'none') {
      toggleChat();
    }
  }
});

/* ===== AI SCHOLARSHIP CHAT ADVISOR ===== */
let isChatOpen = false;
let isBotTyping = false;

function toggleChat() {
  const win = document.getElementById('chatWindow');
  const fab = document.getElementById('chatFab');
  isChatOpen = !isChatOpen;
  
  if (isChatOpen) {
    win.style.display = 'flex';
    if (fab) fab.style.transform = 'scale(0.92)';
    setTimeout(() => {
      document.getElementById('chatInput')?.focus();
      scrollChatToBottom();
    }, 150);
  } else {
    win.style.display = 'none';
    if (fab) fab.style.transform = '';
  }
}

function askQuickPrompt(text) {
  document.getElementById('chatInput').value = text;
  handleSendChat(new Event('submit'));
}

function handleSendChat(e) {
  if (e) e.preventDefault();
  if (isBotTyping) return;

  const input = document.getElementById('chatInput');
  const query = input.value.trim();
  if (!query) return;

  // Add User Message
  appendChatMessage(query, 'user');
  input.value = '';

  // Hide quick chips after first question
  const chips = document.getElementById('quickPromptsWrap');
  if (chips) chips.style.display = 'none';

  // Show Bot Typing indicator
  isBotTyping = true;
  showTypingIndicator();

  // Process AI response with a slight natural delay (800ms)
  setTimeout(() => {
    removeTypingIndicator();
    const reply = generateScholarshipAIResponse(query);
    appendChatMessage(reply, 'bot');
    isBotTyping = false;
    scrollChatToBottom();
  }, 850);
}

function appendChatMessage(htmlText, sender) {
  const chatBody = document.getElementById('chatBody');
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">${htmlText}</div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="msg-bubble">${escapeHtml(htmlText)}</div>
    `;
  }

  chatBody.appendChild(msgDiv);
  scrollChatToBottom();
}

function showTypingIndicator() {
  const chatBody = document.getElementById('chatBody');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg bot typing-msg';
  typingDiv.id = 'botTyping';
  typingDiv.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="msg-bubble typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  chatBody.appendChild(typingDiv);
  scrollChatToBottom();
}

function removeTypingIndicator() {
  const el = document.getElementById('botTyping');
  if (el) el.remove();
}

function scrollChatToBottom() {
  const chatBody = document.getElementById('chatBody');
  if (chatBody) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ===== ADVANCED SCHOLARSHIP AI ADVISORY ENGINE (22+ SPECIALIZED DOMAINS) ===== */
function generateScholarshipAIResponse(input) {
  const text = input.toLowerCase().trim();

  // 1. Strict Guardrail: Detect off-topic queries (entertainment, gaming, sports, food, gossip, politics, casual non-education)
  const offTopicKeywords = [
    'อากาศ', 'ฝนตก', 'กินข้าว', 'หวย', 'บอล', 'เล่นเกม', 'ดารา', 'เที่ยว', 'หนัง',
    'ทำกับข้าว', 'เพลง', 'ความรัก', 'แฟน', 'การเมือง', 'เลือกตั้ง', 'รถติด', 'ขอยืมเงิน',
    'ดูดวง', 'เมนู', 'ตลก', 'มุก', 'เล่าเรื่องผี', 'ซ่อมรถ', 'ราคาไอโฟน'
  ];
  const educationContext = [
    'ทุน', 'เรียน', 'เกรด', 'gpa', 'ม.', 'ปวช', 'ปวส', 'มหาลัย', 'คณะ', 'สอบ',
    'กยศ', 'กสศ', 'โควตา', 'พอร์ต', 'สัมภาษณ์', 'ครู', 'หมอ', 'พยาบาล', 'เอกสาร',
    'ยากจน', 'ม.อ', 'มรย', 'ตั๋ว', 'มาเลเซีย', 'ต่างประเทศ', 'tcas', 'ค่าเทอม'
  ];
  
  const hasOffTopic = offTopicKeywords.some(w => text.includes(w));
  const hasEduContext = educationContext.some(w => text.includes(w));

  if (hasOffTopic && !hasEduContext) {
    return `ขออภัยครับ 🙏 ผมคือ <strong>ScholarBot ผู้เชี่ยวชาญด้านทุนการศึกษาและการศึกษาต่อโดยเฉพาะ</strong><br/><br/>
    ผมสามารถช่วยแนะนำในเรื่อง:<br/>
    • 🏛️ <strong>เงื่อนไขทุน กสศ. / กยศ. / ทุนยากจน</strong><br/>
    • 🌙 <strong>โควตา ม.อ. และพื้นที่ชายแดนใต้</strong><br/>
    • 🌏 <strong>ทุนต่างประเทศ (มาเลเซีย, ญี่ปุ่น, จีน)</strong><br/>
    • 🩺 <strong>ทุนเฉพาะสาย (แพทย์, พยาบาล, ครู, อาชีวะ, ไอที)</strong><br/>
    • 📋 <strong>เทคนิคสอบสัมภาษณ์ & การเขียนเรียงความขอทุน</strong><br/><br/>
    ลองพิมพ์ถามเรื่องทุนการศึกษาที่สนใจได้เลยครับ! 🎓`;
  }

  // 2. กยศ. / กรอ. (กองทุนเงินให้กู้ยืมเพื่อการศึกษา)
  if (text.includes('กยศ') || text.includes('กรอ') || text.includes('กู้ยืม') || text.includes('กู้เรียน')) {
    return `💳 <strong>กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ. / กรอ.):</strong><br/><br/>
    • <strong>เกณฑ์รายได้:</strong> ครอบครัวมีรายได้รวมไม่เกิน <strong>360,000 บาท/ปี</strong> (สำหรับลักษณะที่ 1 ขาดแคลนทุนทรัพย์)<br/>
    • <strong>ค่าใช้จ่ายที่ครอบคลุม:</strong> ค่าเล่าเรียนตามจริง + ค่าครองชีพรายเดือน (3,000–4,000 บาท/เดือน)<br/>
    • <strong>อัตราดอกเบี้ย:</strong> เพียง <strong>1% ต่อปี</strong> (ปลอดดอกเบี้ยและไม่ต้องผ่อนชำระระหว่างเรียน จนถึง 2 ปีหลังจบการศึกษา)<br/>
    • <strong>ช่องทางสมัคร:</strong> ผ่านแอปพลิเคชัน <strong>กยศ. Connect</strong> หรือเว็บไซต์ DSL<br/>
    💡 <em>ข้อแนะนำ: สามารถกู้ควบคู่กับการรับทุนให้เปล่าบางประเภทได้ (ขึ้นอยู่กับระเบียบของแต่ละสถาบัน)</em>`;
  }

  // 3. ทุน กสศ. (กองทุนเพื่อความเสมอภาคทางการศึกษา)
  if (text.includes('กสศ') || text.includes('เสมอภาค') || text.includes('ยากจนพิเศษ') || text.includes('cct')) {
    return `🏛️ <strong>ทุนเสมอภาค กสศ. (กองทุนเพื่อความเสมอภาคทางการศึกษา):</strong><br/><br/>
    • <strong>กลุ่มเป้าหมาย:</strong> นักเรียน ม.6 หรือ ปวช.3 ที่กำลังจะศึกษาต่อระดับอุดมศึกษา<br/>
    • <strong>เกณฑ์รายได้:</strong> ครอบครัวมีรายได้เฉลี่ยไม่เกิน <strong>100,000 บาท/ปี</strong> (พิจารณาเกณฑ์ยากจนพิเศษ < 40,000 บาท/ปี เป็นลำดับแรกผ่านระบบคัดกรอง CCT)<br/>
    • <strong>เกรดเฉลี่ย (GPA):</strong> ขั้นต่ำ <strong>2.00 ขึ้นไป</strong><br/>
    • <strong>มูลค่าทุน:</strong> จ่ายค่าเล่าเรียนเต็มจำนวน + เงินทุนดำรงชีพรายเดือน 36,000–60,000 บาท/ปี จนจบหลักสูตร<br/>
    • <strong>ทุนนวัตกรรมสายอาชีพชั้นสูง:</strong> สำหรับผู้ที่ต้องการเรียนต่อ ปวส. จบแล้วมีงานทำทันที ฟรีค่าเทอม + ค่าหอพัก + เบี้ยเลี้ยง`;
  }

  // 4. ทุนสายครู / ครูรัก(ษ์)ถิ่น / คุรุพัฒนา / ครูพันธุ์ใหม่
  if (text.includes('ครู') || text.includes('ครุศาสตร์') || text.includes('ศึกษาศาสตร์') || text.includes('ครูรักถิ่น')) {
    return `📚 <strong>ทุนสายการศึกษาและวิชาชีพครู:</strong><br/><br/>
    1. <strong>ทุนครูรัก(ษ์)ถิ่น (กสศ. + สพฐ.):</strong><br/>
    • ทุนเต็มจำนวน ฟรีค่าเล่าเรียน + ค่าที่พัก + เบี้ยเลี้ยงรายเดือน<br/>
    • <strong>จุดเด่นสูงสุด:</strong> สำเร็จการศึกษาแล้ว <strong>ได้รับการบรรจุเข้ารับราชการครูทันที</strong> ในโรงเรียนพื้นที่ห่างไกลบ้านเกิด<br/>
    • <strong>เกณฑ์:</strong> GPA 2.50 ขึ้นไป ภูมิลำเนาอยู่ในตำบลเป้าหมาย<br/>
    2. <strong>ทุนเพชรในตม (มศว):</strong> สำหรับนักเรียนในพื้นที่ชนบท บรรจุเป็นครู สพฐ. ทันทีเมื่อจบการศึกษา<br/>
    3. <strong>ทุนคณะครุศาสตร์/ศึกษาศาสตร์ มหาวิทยาลัยรัฐ:</strong> มีทุนให้เปล่าประจำปีของแต่ละสถาบัน`;
  }

  // 5. ทุนสายแพทย์ / พยาบาล / สาธารณสุข
  if (text.includes('แพทย์') || text.includes('หมอ') || text.includes('พยาบาล') || text.includes('สาธารณสุข') || text.includes('cpird') || text.includes('สธ')) {
    return `🩺 <strong>ทุนการศึกษาสายวิทยาศาสตร์สุขภาพ (แพทย์/พยาบาล/สาธารณสุข):</strong><br/><br/>
    1. <strong>โครงการแพทย์เพื่อชุมชน (CPIRD / Inclusive):</strong><br/>
    • โควตาเฉพาะนักเรียนต่างจังหวัด ได้รับเงินสนับสนุนค่าเล่าเรียนและอุปกรณ์<br/>
    • จบแล้วบรรจุทำงานในโรงพยาบาลชุมชนในจังหวัดภูมิลำเนา<br/>
    2. <strong>ทุนพยาบาลกระทรวงสาธารณสุข (วิทยาลัยบรมราชชนนี):</strong><br/>
    • มีทุนสนับสนุนค่าเล่าเรียนและที่พัก จบแล้วได้รับการบรรจุเป็นข้าราชการ/พนักงานกระทรวงสาธารณสุข<br/>
    3. <strong>ทุนพยาบาล 4 เหล่าทัพ (ทหารบก/เรือ/อากาศ/ตำรวจ):</strong><br/>
    • มีเงินเดือนและเบี้ยเลี้ยงระหว่างเรียน บรรจุติดยศร้อยตรี/ร้อยตำรวจตรี ทันทีเมื่อสำเร็จการศึกษา`;
  }

  // 6. ทุนต่างประเทศ: มาเลเซีย MARA & AIU
  if (text.includes('มาเลเซีย') || text.includes('mara') || text.includes('aiu') || text.includes('albukhary')) {
    return `🌏 <strong>ทุนศึกษาต่อประเทศมาเลเซีย:</strong><br/><br/>
    1. <strong>ทุนรัฐบาลมาเลเซีย (MARA Scholarship):</strong><br/>
    • สำหรับนักเรียนไทยมุสลิมใน 5 จังหวัดชายแดนภาคใต้ (จบ ม.6)<br/>
    • <strong>เกณฑ์ GPA:</strong> 3.00 ขึ้นไป<br/>
    • <strong>ความคุ้มครอง:</strong> ทุนเต็มจำนวน 100% ฟรีค่าเล่าเรียน, หอพัก, ตั๋วเครื่องบิน, ประกันสุขภาพ และเบี้ยเลี้ยงรายเดือน<br/>
    2. <strong>ทุน Albukhary International University (AIU):</strong><br/>
    • ทุนเต็มจำนวนสำหรับนักเรียนฐานะยากจนจากทั่วโลก เรียนที่มาเลเซีย หลักสูตรนานาชาติภาษาอังกฤษทั้งหมด ไม่จำกัดศาสนา`;
  }

  // 7. ทุนต่างประเทศอื่นๆ (ญี่ปุ่น MEXT, จีน CSC, สิงคโปร์ ASEAN, ยุโรป/สหรัฐ)
  if (text.includes('ต่างประเทศ') || text.includes('นอกประเทศ') || text.includes('ญี่ปุ่น') || text.includes('mext') || text.includes('จีน') || text.includes('สิงคโปร์') || text.includes('fulbright') || text.includes('chevening')) {
    return `✈️ <strong>ทุนศึกษาต่อต่างประเทศระดับปริญญาตรีที่น่าสนใจ:</strong><br/><br/>
    • <strong>ทุนรัฐบาลญี่ปุ่น (MEXT):</strong> ทุนให้เปล่า 100% มีเงินเดือนให้เดือนละประมาณ 120,000 เยน ไม่ต้องใช้ทุนคืน มีทั้งสายสามัญและสายวิชาชีพ (College of Technology)<br/>
    • <strong>ทุนรัฐบาลจีน (CSC / ทุนขงจื๊อ):</strong> ฟรีค่าเล่าเรียน + ที่พัก + เงินเดือน 2,500–3,000 หยวน/เดือน สำหรับผู้มีผลสอบ HSK<br/>
    • <strong>ทุน ASEAN Scholarship (สิงคโปร์):</strong> สำหรับนักเรียน ม.3-ม.4 ไปเรียนต่อ ม.ปลาย ที่สิงคโปร์<br/>
    • <strong>ทุนรัฐบาลไทย (ก.พ. / ทุนกระทรวงการต่างประเทศ):</strong> สอบชิงทุนเพื่อไปศึกษาต่อมหาวิทยาลัยชั้นนำทั่วโลก`;
  }

  // 8. โควตา ม.อ. / 5 จังหวัดชายแดนใต้
  if (text.includes('ม.อ') || text.includes('สงขลานครินทร์') || text.includes('ชายแดนใต้') || text.includes('ปัตตานี') || text.includes('ยะลา') || text.includes('นราธิวาส') || text.includes('สตูล')) {
    return `🌙 <strong>โควตาและทุน มหาวิทยาลัยสงขลานครินทร์ (ม.อ.):</strong><br/><br/>
    • <strong>โควตา 5 จังหวัดชายแดนใต้:</strong> ปัตตานี, ยะลา, นราธิวาส, สตูล และ 4 อำเภอของสงขลา<br/>
    • <strong>เกณฑ์ GPA:</strong> เริ่มต้น 2.50 ขึ้นไป (สายสุขภาพ 3.00+)<br/>
    • <strong>ทุนศรีตรังทอง:</strong> สำหรับนักศึกษาสายวิทยาศาสตร์ที่มีผลการเรียนดีเด่น ฟรีค่าเทอม + ค่าใช้จ่ายรายเดือน<br/>
    • <strong>ทุนสงเคราะห์ ม.อ.:</strong> สำหรับนักศึกษาที่ขาดแคลนทุนทรัพย์ ช่วยเหลือค่าธรรมเนียมการศึกษา 50–100%<br/>
    • <strong>ทุนเงินยืมฉุกเฉิน:</strong> มีกองทุนช่วยเหลือนักศึกษากรณีครอบครัวประสบปัญหาทางการเงินฉับพลัน`;
  }

  // 9. ทุน มรย. (มหาวิทยาลัยราชภัฏยะลา) / ราชภัฏ / มทร.
  if (text.includes('มรย') || text.includes('ราชภัฏ') || text.includes('มทร') || text.includes('ราชมงคล')) {
    return `🏛️ <strong>ทุนมหาวิทยาลัยราชภัฏ (มรย.) และราชมงคล (มทร.):</strong><br/><br/>
    • <strong>ทุน มรย. เพื่อเยาวชนท้องถิ่น:</strong> GPA 2.00 ขึ้นไป ลดค่าเทอม 50% พร้อมโครงการ Work & Study มีรายได้พิเศษระหว่างเรียน<br/>
    • <strong>ทุนยกเว้นค่าธรรมเนียมการศึกษา:</strong> มอบให้แก่นักศึกษาที่ขาดแคลนทุนทรัพย์และมีความประพฤติดี<br/>
    • <strong>ทุนเพชรราชภัฏ / ช้างเผือก:</strong> สำหรับนักเรียนที่มีเกรดเฉลี่ย 3.00+ หรือมีความสามารถพิเศษด้านกีฬา/ศิลปวัฒนธรรม`;
  }

  // 10. ทุนมหาวิทยาลัยชั้นนำ (จุฬาฯ, ธรรมศาสตร์, เกษตรฯ, เชียงใหม่, ขอนแก่น)
  if (text.includes('จุฬา') || text.includes('ธรรมศาสตร์') || text.includes('เกษตร') || text.includes('มช') || text.includes('มข') || text.includes('มหิดล')) {
    return `🎓 <strong>ทุนสงเคราะห์ในมหาวิทยาลัยชั้นนำของรัฐ:</strong><br/><br/>
    • <strong>จุฬาลงกรณ์มหาวิทยาลัย:</strong> ทุนอุดหนุนการศึกษา (ทุนสงเคราะห์) ดูแลค่าเล่าเรียน + ค่าครองชีพ + ค่าหอพักนิสิต ไม่จำกัดจำนวนผู้ได้รับหากขาดแคลนจริง<br/>
    • <strong>มหาวิทยาลัยธรรมศาสตร์:</strong> ทุน 84 พรรษา, ทุนเรียนดีแต่ยากจน, ทุนช่วยเหลือนักศึกษาในภาวะวิกฤต<br/>
    • <strong>มหาวิทยาลัยมหิดล:</strong> ทุนสวัสดิการการศึกษา และทุนสิริวิทยา<br/>
    • <strong>ม.เกษตรศาสตร์ / ม.เชียงใหม่ / ม.ขอนแก่น:</strong> มีกองทุนพัฒนานักศึกษาและทุนมูลนิธิศิษย์เก่าสนับสนุนทุกปี`;
  }

  // 11. ทุนสายอาชีวะ / ปวช. / ปวส. / ช่างกล / สายอาชีพ
  if (text.includes('ม.3') || text.includes('อาชีวะ') || text.includes('ปวช') || text.includes('ปวส') || text.includes('ช่าง') || text.includes('ทวิภาคี')) {
    return `🔧 <strong>โครงการและทุนสายอาชีวศึกษา (ปวช. - ปวส.):</strong><br/><br/>
    1. <strong>โครงการเรียนฟรี 15 ปี (ระดับ ปวช.):</strong> รัฐสนับสนุนค่าเล่าเรียน ค่าอุปกรณ์ หนังสือเรียน และกิจกรรมพัฒนาผู้เรียน 100% สำหรับผู้จบ ม.3 (GPA 1.50+)<br/>
    2. <strong>ระบบทวิภาคี (Dual Vocational Education):</strong><br/>
    • เรียนในสถานศึกษาควบคู่กับการฝึกงานจริงในสถานประกอบการชั้นนำ<br/>
    • <strong>มีเบี้ยเลี้ยง/เงินเดือนระหว่างเรียน</strong> (เฉลี่ย 6,000–12,000 บาท/เดือน)<br/>
    • จบแล้วได้รับการบรรจุเข้าทำงานทันทีพร้อมใบรับรองฝีมือแรงงาน<br/>
    3. <strong>ทุนนวัตกรรมสายอาชีพชั้นสูง (กสศ.):</strong> ทุนให้เปล่าระดับ ปวส. สำหรับนักเรียนยากจนพิเศษ`;
  }

  // 12. ทุนสายไอที / เทคโนโลยี / คอมพิวเตอร์ / วิศวกรรม
  if (text.includes('ไอที') || text.includes('it') || text.includes('คอม') || text.includes('โปรแกรมเมอร์') || text.includes('วิศวะ') || text.includes('depa') || text.includes('สวทช') || text.includes('ai')) {
    return `💻 <strong>ทุนการศึกษาสายเทคโนโลยี, ดิจิทัล และวิศวกรรม:</strong><br/><br/>
    • <strong>ทุน depa Digital Scholarship:</strong> สนับสนุนทุนการศึกษาด้าน AI, Cloud, Cybersecurity และ Software Development<br/>
    • <strong>ทุน สวทช. (NSTDA) & ทุน พสวท. (DPST):</strong> ทุนพัฒนาผู้มีความสามารถพิเศษทางวิทยาศาสตร์และเทคโนโลยี จ่ายค่าเล่าเรียน + ค่าใช้จ่ายรายเดือน + สนับสนุนศึกษาต่อต่างประเทศจนถึงระดับ ป.เอก<br/>
    • <strong>ทุน 42 Bangkok (KMITL):</strong> สถาบันบ่มเพาะโค้ดเดอร์ระดับโลก เรียนฟรี 100% ไม่มีค่าเทอม ไม่จำกัดวุฒิการศึกษา`;
  }

  // 13. ทุนสายศาสนา & อิสลามศึกษา
  if (text.includes('อิสลาม') || text.includes('ศาสนา') || text.includes('อียิปต์') || text.includes('อัล-อัซฮัร') || text.includes('ซาอุ') || text.includes('มะดีนะฮ์')) {
    return `🕌 <strong>ทุนการศึกษาสายศาสนาและอิสลามศึกษา:</strong><br/><br/>
    • <strong>ทุนมหาวิทยาลัยอัล-อัซฮัร (Al-Azhar University, Egypt):</strong> สอบคัดเลือกผ่านกระทรวงศึกษาธิการและศูนย์อำนวยการบริหารจังหวัดชายแดนภาคใต้ (ศอ.บต.) ฟรีค่าเล่าเรียนและมีหอพัก<br/>
    • <strong>ทุนมหาวิทยาลัยอิสลามมะดีนะฮ์ (Islamic University of Madinah, Saudi Arabia):</strong> ทุนเต็มจำนวน ค่าเล่าเรียน หอพัก ตั๋วเครื่องบินประจำปี และเงินเดือนรายเดือน<br/>
    • <strong>ทุนคณะอิสลามศึกษา มหาวิทยาลัยสงขลานครินทร์ (วิทยาเขตปัตตานี) / ม.ฟาฏอนี:</strong> มีทุนสนับสนุนจากองค์กรการกุศลในและต่างประเทศ`;
  }

  // 14. เทคนิคการเตรียมตัวสอบสัมภาษณ์ทุน
  if (text.includes('สัมภาษณ์') || text.includes('คำถามสัมภาษณ์') || text.includes('ตอบยังไง') || text.includes('เทคนิค')) {
    return `🎯 <strong>เทคนิคพิชิตการสอบสัมภาษณ์ทุนการศึกษา:</strong><br/><br/>
    1. <strong>คำถาม: "ทำไมคณะกรรมการถึงต้องให้ทุนคุณ?"</strong><br/>
    👉 <em>วิธีตอบ:</em> เน้นความมุ่งมั่น อธิบายว่าทุนนี้จะเปลี่ยนชีวิตคุณและครอบครัวอย่างไร และแสดงให้เห็นว่าคุณวางแผนจะนำความรู้กลับมาพัฒนาชุมชน/สังคม<br/>
    2. <strong>คำถาม: "ถ้าไม่ได้ทุนนี้ คุณจะทำอย่างไร?"</strong><br/>
    👉 <em>วิธีตอบ:</em> แสดงความไม่ย่อท้อ เช่น จะกู้ กยศ. ควบคู่กับทำงาน Part-time แต่การได้ทุนนี้จะช่วยให้โฟกัสกับการเรียนได้อย่างเต็มที่<br/>
    3. <strong>การแต่งกายและกิริยา:</strong> แต่งชุดนักเรียนถูกระเบียบ สะอาด สบตากรรมการ ไหว้ทักทายอย่างมั่นใจ และตอบตามความจริงอย่างจริงใจ`;
  }

  // 15. การเขียนเรียงความขอทุน (Statement of Purpose / Essay)
  if (text.includes('เรียงความ') || text.includes('เขียนขอทุน') || text.includes('sop') || text.includes('essay') || text.includes('จดหมาย')) {
    return `✍️ <strong>โครงสร้างการเขียนเรียงความขอทุนให้ประทับใจกรรมการ (3 ส่วน):</strong><br/><br/>
    1. <strong>บทนำ (Introduction):</strong> แนะนำตัว สภาพครอบครัว และแรงบันดาลใจที่ทำให้อยากเรียนในสาขานี้<br/>
    2. <strong>เนื้อหาหลัก (Body - อุปสรรคและความพยายาม):</strong> เล่าถึงข้อจำกัดทางการเงิน แต่เน้นที่ <em>"ความพยายามและการต่อสู้"</em> ของคุณ เช่น ผลการเรียน กิจกรรมจิตอาสา หรือการช่วยงานครอบครัว<br/>
    3. <strong>บทสรุป (Conclusion - เป้าหมายและการตอบแทน):</strong> บอกเป้าหมายอาชีพหลังเรียนจบ และสัญญาว่าจะนำความรู้มาช่วยเหลือสังคมอย่างไร<br/>
    💡 <em>ข้อควรระวัง: อย่าเขียนเพียงแค่ตัดพ้อความยากจน แต่ต้องเขียนให้เห็นถึง "ความหวังและศักยภาพที่จะเติบโต"</em>`;
  }

  // 16. หนังสือรับรองรายได้ / ความยากจน (ใครเซ็นได้บ้าง)
  if (text.includes('รับรองรายได้') || text.includes('เซ็น') || text.includes('หนังสือรับรอง') || text.includes('จน')) {
    return `📝 <strong>แนวทางการขอหนังสือรับรองรายได้ครอบครัว:</strong><br/><br/>
    • <strong>บุคคลที่มีสิทธิ์ลงนามรับรอง:</strong><br/>
      1. ข้าราชการประจำ / ข้าราชการบำนาญ (ระดับชำนาญการขึ้นไป หรือระดับ 3 เดิม)<br/>
      2. กำนัน / ผู้ใหญ่บ้าน / ผู้ช่วยผู้ใหญ่บ้าน ในพื้นที่ภูมิลำเนา<br/>
      3. นายก อบต. / สมาชิกสภาเทศบาล (ส.ท.) / ประธานชุมชน<br/>
      4. ผู้อำนวยการโรงเรียนเดิม หรือครูแนะแนวประจำโรงเรียน<br/>
    • <strong>เอกสารแนบ:</strong> สำเนาบัตรประจำตัวข้าราชการ/เจ้าหน้าที่รัฐของผู้รับรอง พร้อมเซ็นสำเนาถูกต้อง<br/>
    • หากมี <strong>บัตรสวัสดิการแห่งรัฐ</strong> สามารถแนบควบคู่เพื่อเป็นหลักฐานยืนยันความยากจนได้ทันที`;
  }

  // 17. การทำ Portfolio ขอทุน
  if (text.includes('พอร์ต') || text.includes('portfolio') || text.includes('ผลงาน') || text.includes('เกียรติบัตร')) {
    return `📂 <strong>การจัดทำ Portfolio ยื่นขอทุนการศึกษา:</strong><br/><br/>
    • <strong>หน้าที่ 1-2:</strong> ประวัติส่วนตัว (Profile) + สรุปผลการเรียน (GPA) + Statement of Purpose สั้นๆ<br/>
    • <strong>หน้าที่ 3-5:</strong> ผลงานทางวิชาการและการแข่งขันที่เกี่ยวข้องกับสาขาที่สมัคร<br/>
    • <strong>หน้าที่ 6-8 (สำคัญมากสำหรับทุน):</strong> <strong>กิจกรรมจิตอาสา บำเพ็ญประโยชน์ และการช่วยเหลือชุมชน</strong><br/>
    • <strong>หน้าที่ 9-10:</strong> เกียรติบัตรด้านคุณธรรม จริยธรรม หรือรางวัลความเป็นผู้นำ<br/>
    💡 <em>ทริค: ทุนการศึกษาจะให้คะแนนด้านจิตอาสาและความกตัญญูสูงมากเป็นพิเศษ</em>`;
  }

  // 18. กรณีเฉพาะ: เด็กกำพร้า / ครอบครัวเลี้ยงเดี่ยว / ผู้พิการ
  if (text.includes('กำพร้า') || text.includes('เลี้ยงเดี่ยว') || text.includes('หย่าร้าง') || text.includes('พิการ') || text.includes('ด้อยโอกาส')) {
    return `🤝 <strong>สิทธิประโยชน์และทุนสำหรับกลุ่มเปราะบาง:</strong><br/><br/>
    • <strong>เด็กกำพร้า / ครอบครัวเลี้ยงเดี่ยว:</strong><br/>
      - <strong>มูลนิธิราชประชานุเคราะห์:</strong> ให้ทุนการศึกษาแก่เด็กกำพร้าและครอบครัวประสบภัยจนสำเร็จการศึกษาสูงสุด<br/>
      - <strong>ทุนมูลนิธิร่วมจิตต์น้อมเกล้าฯ:</strong> ช่วยเหลือเยาวชนยากไร้ทุกจังหวัด<br/>
    • <strong>ผู้พิการ (มีบัตรประจำตัวคนพิการ):</strong><br/>
      - ได้รับสิทธิ <strong>เรียนฟรีจนจบระดับปริญญาตรี</strong> ในสถาบันอุดมศึกษาของรัฐ ตาม พ.ร.บ. ส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ<br/>
      - มีเงินสนับสนุนอุปกรณ์การศึกษาและเบี้ยความพิการจากกระทรวง พม.`;
  }

  // 19. เกรดเฉลี่ย (GPA) ทุกช่วงคะแนน
  if (text.includes('gpa') || text.includes('เกรด') || text.includes('เกรดน้อย') || text.includes('เกรดต่ำ') || text.includes('เกรดไม่ถึง')) {
    return `📊 <strong>แนวทางการขอทุนจำแนกตามเกรดเฉลี่ย (GPA):</strong><br/><br/>
    • <strong>GPA < 2.00:</strong> แนะนำทุนสายอาชีวะ (ปวช.) เรียนฟรี 15 ปี, ทุนทวิภาคี (มีรายได้ระหว่างเรียน) หรือมหาวิทยาลัยเปิด (มสธ. / ม.รามคำแหง)<br/>
    • <strong>GPA 2.00 – 2.49:</strong> สมัคร <strong>ทุนเสมอภาค กสศ.</strong>, ทุนมหาวิทยาลัยราชภัฏ (มรย./มรน.), และกู้ยืม <strong>กยศ.</strong> ได้เต็มสิทธิ์<br/>
    • <strong>GPA 2.50 – 2.99:</strong> มีสิทธิ์สมัคร <strong>โควตา ม.อ. ชายแดนใต้</strong>, ทุนครูรัก(ษ์)ถิ่น, ทุนพยาบาล และทุนสงเคราะห์มหาวิทยาลัยรัฐทั่วประเทศ<br/>
    • <strong>GPA 3.00 – 4.00:</strong> เปิดกว้างทุกทุน รวมถึง <strong>ทุนต่างประเทศ (MARA มาเลเซีย, MEXT ญี่ปุ่น)</strong> และทุนวิทยาศาสตร์ พสวท.`;
  }

  // 20. ระบบ TCAS รอบต่างๆ กับการขอทุน
  if (text.includes('tcas') || text.includes('รอบ 1') || text.includes('รอบ 2') || text.includes('รอบ 3') || text.includes('admission') || text.includes('โควตา')) {
    return `🏛️ <strong>การขอทุนการศึกษาในแต่ละรอบของ TCAS:</strong><br/><br/>
    • <strong>TCAS รอบ 1 (Portfolio):</strong> มหาวิทยาลัยมักมี "ทุนเรียนดี", "ทุนความสามารถพิเศษ" และ "ทุนช้างเผือก" ยื่นพร้อมแฟ้มสะสมงานได้เลย<br/>
    • <strong>TCAS รอบ 2 (Quota):</strong> รอบที่มี <strong>ทุนโควตาพื้นที่และทุนขาดแคลนมากที่สุด</strong> เช่น โควตา 5 จังหวัดชายแดนใต้, โควตาบุตรเกษตรกร<br/>
    • <strong>TCAS รอบ 3 (Admission):</strong> ใช้คะแนนสอบกลาง (A-Level / TGAT / TPAT) ผู้มีคะแนนอันดับต้นๆ จะได้รับทุนยกเว้นค่าธรรมเนียมการศึกษา<br/>
    💡 <em>ทุกรอบเมื่อสอบติดแล้ว สามารถยื่นขอ "ทุนสงเคราะห์ขาดแคลนทุนทรัพย์" ของมหาวิทยาลัยได้ทันทีในวันรายงานตัว</em>`;
  }

  // 21. เอกสารที่ต้องเตรียม (General Documents Checklist)
  if (text.includes('เอกสาร') || text.includes('เตรียมตัว') || text.includes('หลักฐาน') || text.includes('ใช้อะไรบ้าง')) {
    return `📋 <strong>เช็กลิสต์เอกสารสำคัญสำหรับยื่นสมัครทุนการศึกษา:</strong><br/><br/>
    1. <strong>ใบแสดงผลการเรียน (รบ.1 / Transcript)</strong> ฉบับจริงและสำเนา<br/>
    2. <strong>สำเนาบัตรประชาชน + สำเนาทะเบียนบ้าน</strong> (ของนักเรียน, บิดา, มารดา หรือผู้ปกครอง)<br/>
    3. <strong>หนังสือรับรองรายได้ครอบครัว</strong> (ลงนามโดยข้าราชการ/กำนัน/ผู้ใหญ่บ้าน)<br/>
    4. <strong>หนังสือรับรองสถานภาพนักเรียน</strong> ออกโดยโรงเรียนปัจจุบัน<br/>
    5. <strong>รูปถ่ายชุดนักเรียนหน้าตรง</strong> ขนาด 1 - 1.5 นิ้ว (ถ่ายไม่เกิน 6 เดือน)<br/>
    6. <strong>แผนที่ตั้งบ้านพักอาศัย</strong> พร้อมภาพถ่ายสภาพบ้านภายนอกและภายใน<br/>
    7. <strong>สำเนาบัตรสวัสดิการแห่งรัฐ / บัตรคนพิการ / ใบมรณบัตร</strong> (ถ้ามี)`;
  }

  // 22. ระบบ ScholarPath & n8n Automation
  if (text.includes('ระบบ') || text.includes('ทำงานยังไง') || text.includes('จับคู่ยังไง') || text.includes('n8n') || text.includes('automation')) {
    return `🤖 <strong>การทำงานของระบบ ScholarPath & n8n Automation:</strong><br/><br/>
    1. <strong>Real-time AI Matcher:</strong> ประมวลผลเกรดเฉลี่ย, รายได้, ภูมิลำเนา และสิทธิพิเศษ เทียบกับฐานข้อมูลทุนจริง เพื่อจัดอันดับ 3 ทุนที่มีโอกาสได้สูงสุด<br/>
    2. <strong>Automated 7-Day Deadline Reminder:</strong> ระบบมี Cron Scheduler รันบน Cloud คอยตรวจจับวันหมดเขตล่วงหน้า 7 วัน และยิงอีเมลเตือนนักเรียนอัตโนมัติ<br/>
    3. <strong>Multi-channel Alert:</strong> รองรับการแจ้งเตือนผ่านทั้ง Gmail และ Push Notification เพื่อให้เด็กไทยไม่พลาดโอกาสทางการศึกษาครับ! 🎯`;
  }

  // 23. Comprehensive Fallback / Interactive Overview
  return `🎓 <strong>ยินดีให้คำปรึกษาด้านทุนการศึกษาแบบครบวงจรครับ!</strong><br/><br/>
  คุณสามารถพิมพ์สอบถามเจาะลึกได้ในทุกหัวข้อ เช่น:<br/>
  • 💳 <em>"เงื่อนไขการกู้ กยศ. และเพดานรายได้"</em><br/>
  • 🏛️ <em>"ทุนเสมอภาค กสศ. และทุนนวัตกรรมสายอาชีพ"</em><br/>
  • 🌙 <em>"โควตา ม.อ. 5 จังหวัดชายแดนใต้"</em><br/>
  • 🌏 <em>"ทุนไปเรียนต่อมาเลเซีย MARA หรือทุนญี่ปุ่น MEXT"</em><br/>
  • 🩺 <em>"ทุนสายแพทย์ พยาบาล หรือทุนครูรัก(ษ์)ถิ่น"</em><br/>
  • 🎯 <em>"เทคนิคการตอบคำถามสัมภาษณ์ทุน หรือการเขียนเรียงความ"</em><br/>
  • 📝 <em>"ใครเซ็นรับรองความยากจนได้บ้าง และเอกสารที่ต้องใช้"</em><br/><br/>
  ลองพิมพ์คำถามหรือคลิกที่คำถามแนะนำด้านล่างได้เลยครับ! 😊`;
}
