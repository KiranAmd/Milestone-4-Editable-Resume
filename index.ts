// index.ts
function generateResume() {
    // Get values from form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeContent = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Professional Summary:</strong><br>${summary}</p>
        <p><strong>Work Experience:</strong><br>${experience}</p>
        <p><strong>Education:</strong><br>${education}</p>
        <p><strong>Skills:</strong><br>${skills}</p>
    `;

    // Display resume and hide form
    document.getElementById('resumeDisplay')!.style.display = 'block';
    document.getElementById('resumeContent')!.innerHTML = resumeContent;
    document.querySelector('form')!.style.display = 'none';
}

function editResume() {
    // Show form and hide resume
    document.getElementById('resumeDisplay')!.style.display = 'none';
    document.querySelector('form')!.style.display = 'block';
}

// Make sure to export functions if needed in a module system
export { generateResume, editResume };
