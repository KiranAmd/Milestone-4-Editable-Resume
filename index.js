"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editResume = exports.generateResume = void 0;
// index.ts
function generateResume() {
    // Get values from form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeContent = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>Professional Summary:</strong><br>").concat(summary, "</p>\n        <p><strong>Work Experience:</strong><br>").concat(experience, "</p>\n        <p><strong>Education:</strong><br>").concat(education, "</p>\n        <p><strong>Skills:</strong><br>").concat(skills, "</p>\n    ");
    // Display resume and hide form
    document.getElementById('resumeDisplay').style.display = 'block';
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.querySelector('form').style.display = 'none';
}
exports.generateResume = generateResume;
function editResume() {
    // Show form and hide resume
    document.getElementById('resumeDisplay').style.display = 'none';
    document.querySelector('form').style.display = 'block';
}
exports.editResume = editResume;
