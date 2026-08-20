/**
 * ScholarPath — ระบบจับคู่ทุนการศึกษาและโควตาเรียนฟรี (Google Apps Script)
 * Backend Controller (Code.gs)
 */

// 1. ฟังก์ชันแสดงหน้าเว็บ Web App เมื่อเปิด URL
function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('ScholarPath — ระบบจับคู่ทุนการศึกษา')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// 2. ฟังก์ชัน Helper สำหรับ Include ไฟล์ HTML ย่อย (ถ้าแยกไฟล์)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// 3. ฟังก์ชันบันทึกข้อมูลนักเรียนลง Google Sheets อัตโนมัติ (เมื่อกดค้นหาทุน)
function saveStudentProfile(profile) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Students');
    
    // ถ้ายังไม่มี Sheet "Students" ให้สร้างใหม่พร้อม Header
    if (!sheet) {
      sheet = ss.insertSheet('Students');
      sheet.appendRow([
        'Timestamp', 'ชื่อ', 'ระดับชั้น', 'GPA', 'จังหวัด', 
        'ศาสนา', 'รายได้ครัวเรือน', 'สิทธิพิเศษ', 'สาขาที่สนใจ', 
        'ปลายทางที่ต้องการ', 'อีเมล'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#4F46E5').setFontColor('#FFFFFF');
    }

    const specialConditions = [];
    if (profile.orphan) specialConditions.push('เด็กกำพร้า');
    if (profile.disabled) specialConditions.push('มีผู้พิการ');
    if (profile.single) specialConditions.push('ครอบครัวเดี่ยว');
    if (profile.ews) specialConditions.push('บัตรสวัสดิการ');
    if (profile.border) specialConditions.push('พื้นที่ชายแดน');

    sheet.appendRow([
      new Date(),
      profile.name || 'ไม่ระบุชื่อ',
      profile.grade,
      profile.gpa,
      profile.province,
      profile.religion || 'ไม่ระบุ',
      profile.income,
      specialConditions.join(', ') || 'ไม่มี',
      (profile.interests || []).join(', '),
      profile.destination,
      profile.email || 'ไม่ระบุ'
    ]);

    return { success: true, message: 'บันทึกข้อมูลเรียบร้อย' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

// 4. ฟังก์ชันดึงฐานข้อมูลทุนจาก Google Sheets (ถ้ามี Sheet ชื่อ "Scholarships")
function getScholarshipsFromSheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Scholarships');
    if (!sheet) return null;

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);

    return rows.map(row => {
      let obj = {};
      headers.forEach((h, i) => {
        obj[h] = row[i];
      });
      return obj;
    });
  } catch (err) {
    return null;
  }
}

// 5. ฟังก์ชันส่งคำขอแจ้งเตือนไปที่ n8n Webhook โดยตรง (ไม่ต้องบันทึกก่อน)
function sendReminderToN8n(email, scholarshipName, deadlineDate) {
  try {
    if (!email) return { success: false, message: 'ไม่มีอีเมล' };

    const n8nWebhookUrl = 'https://jxqq.app.n8n.cloud/webhook/1bf516fb-df66-4f36-b520-6986e6354708';
    
    const payload = {
      event: 'scholarship_deadline_reminder',
      email: email,
      scholarship_name: scholarshipName || 'ทุนการศึกษาที่ผ่านการคัดเลือก',
      deadline: deadlineDate || 'ตามประกาศ',
      timestamp: new Date().toISOString()
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(n8nWebhookUrl, options);
    return { success: true, code: response.getResponseCode() };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}
