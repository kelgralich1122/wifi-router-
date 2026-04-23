function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function selectWifi(name) {
  goToScreen('wifi');
  document.getElementById('wifi-name').innerText = name + " WiFi";
  if (name === 'Brothers') {
    document.getElementById('wifi-info').innerHTML = "Password: <span class='highlight'>kevoo1122</span>";
  } else {
    document.getElementById('wifi-info').innerText = "Auto connect enabled.";
  }
}

function selectPlan(planName, price, duration) {
  goToScreen('instructions');
  document.getElementById('selected-plan').innerText =
    `Selected Plan: ${planName} — ${price} TZS (${duration})`;
}

function openWhatsApp() {
  // Open WhatsApp chat in new tab/window
  window.open(
    "https://wa.me/255786281500?text=I%20have%20paid%20for%20WiFi%20package.%20Here%20is%20my%20proof.",
    "_blank"
  );

  // Simulate payment verification flow
  goToScreen('loader');
  setTimeout(() => {
    goToScreen('success');
  }, 3000);
}

/* Help Modal Toggle */
function toggleHelp() {
  const modal = document.getElementById('help-modal');
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}
