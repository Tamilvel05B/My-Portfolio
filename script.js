
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
  const texts = [
    "Power Apps | Power Automate | Power BI | MS Excel Specialist | MS Access Specialist",
    "Excel Automation | Dashboard Design | Data Reporting Expert",
    "Process Optimization | Power Platform Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");

  function type() {
    if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 30);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (texts.length) setTimeout(type, 1000);
  });
const urls = [
  "https://app.powerbi.com/view?r=eyJrIjoiOGYwNWMwYTMtMWNjZS00YWFlLWJiY2QtMTE3YzQ5OTkxYzhhIiwidCI6IjkxNjM1MTAzLTM4YmMtNGU2MC04NDg2LWIyYzFlNjAxNjNiNiJ9&pageName=Exec Dashboard",
  "https://app.powerbi.com/view?r=eyJrIjoiOGYwNWMwYTMtMWNjZS00YWFlLWJiY2QtMTE3YzQ5OTkxYzhhIiwidCI6IjkxNjM1MTAzLTM4YmMtNGU2MC04NDg2LWIyYzFlNjAxNjNiNiJ9&pageName=Map",
  "https://app.powerbi.com/view?r=eyJrIjoiOGYwNWMwYTMtMWNjZS00YWFlLWJiY2QtMTE3YzQ5OTkxYzhhIiwidCI6IjkxNjM1MTAzLTM4YmMtNGU2MC04NDg2LWIyYzFlNjAxNjNiNiJ9&pageName=Product Detail",
  "https://app.powerbi.com/view?r=eyJrIjoiOGYwNWMwYTMtMWNjZS00YWFlLWJiY2QtMTE3YzQ5OTkxYzhhIiwidCI6IjkxNjM1MTAzLTM4YmMtNGU2MC04NDg2LWIyYzFlNjAxNjNiNiJ9&pageName=Customer Detail"
];

let index = 0;
const frame = document.getElementById('reportFrame');

function rotateReports() {
  frame.src = urls[index];
  index = (index + 1) % urls.length;
}

// Change every 30 seconds
rotateReports(); // Initial load
setInterval(rotateReports, 3000);
