
document.getElementById('themeToggle').addEventListener('change', function() {
  document.body.classList.toggle('dark', this.checked);
});

function getSelectedTopics() {
  const checkboxes = document.querySelectorAll('#contactForm input[type="checkbox"]:checked');
  return Array.from(checkboxes).map(cb => cb.value).join(', ');
}

function getUserMessage() {
  return document.getElementById('desc').value.trim();
}

function fireConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function sendWhatsApp() {
  const topics = getSelectedTopics();
  const message = getUserMessage();
  const finalMessage = encodeURIComponent("Hi Tamilvel! I'm interested in: " + topics + ".\n\n" + message);
  window.open("https://wa.me/919952489998?text=" + finalMessage, "_blank");
  document.getElementById('desc').value = '';
  document.querySelectorAll('#contactForm input[type="checkbox"]').forEach(cb => cb.checked = false);
  fireConfetti();
}

function sendEmail() {
  const topics = getSelectedTopics();
  const message = getUserMessage();
  const subject = encodeURIComponent("Service Inquiry from Portfolio");
  const body = encodeURIComponent("Hi Tamilvel,%0D%0AI'm interested in: " + topics + "%0D%0A%0D%0A" + message);
  window.location.href = "mailto:tamilvel98425@gmail.com?subject=" + subject + "&body=" + body;
  document.getElementById('desc').value = '';
  document.querySelectorAll('#contactForm input[type="checkbox"]').forEach(cb => cb.checked = false);
  fireConfetti();
}
const roles = [
  "MIS Executive",
  "Power Apps Developer",
  "Power BI Developer",
  "Power Automate Developer",
  "Power Platform Specialist"
];

let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeRole() {
  const typingElement = document.getElementById("typing");
  const currentRole = roles[roleIndex];

  if (typingForward) {
    typingElement.textContent = currentRole.substring(0, ++charIndex);
    if (charIndex === currentRole.length) {
      typingForward = false;
      setTimeout(typeRole, 100); // Pause before deleting
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, --charIndex);
    if (charIndex === 0) {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, typingForward ? 100 : 50);
}
window.onload = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.3 }
  });
};
const urls = [
  "https://app.powerbi.com/view?r=eyJr=EXAMPLE_KEY&pageName=ReportSection1",
  "https://app.powerbi.com/view?r=eyJr=EXAMPLE_KEY&pageName=ReportSection2",
  "https://app.powerbi.com/view?r=eyJr=EXAMPLE_KEY&pageName=ReportSection3",
  "https://app.powerbi.com/view?r=eyJr=EXAMPLE_KEY&pageName=ReportSection4"
];

let index = 0;
const frame = document.getElementById('reportFrame');

function rotateReports() {
  frame.src = urls[index];
  index = (index + 1) % urls.length;
}

// Change every 30 seconds
rotateReports(); // Initial load
setInterval(rotateReports, 30000);