const nome = document.getElementById("nome");
let save = document.getElementById("salva");
const nomeSalvatoElement = document.getElementById("nome-salvato");

save.addEventListener("click", function () {
  const nomeInserito = nome.value;
  localStorage.setItem("nome", nomeInserito);
  nomeSalvatoElement.textContent = "Nome Salvato: " + nomeInserito;
});

document.getElementById("elimina").addEventListener("click", function () {
  localStorage.removeItem("nome");
  nome.value = "";
  nomeSalvatoElement.textContent = "";
});

const nomeSalvato = localStorage.getItem("nome");
if (nomeSalvato) {
  nome.value = nomeSalvato;
  nomeSalvatoElement.textContent = "Nome Salvato: " + nomeSalvato;
}

function startTimer() {
  let startTime = 0;
  const savedTime = localStorage.getItem("timer");
  if (savedTime) {
    startTime = parseInt(savedTime, 10);
  }

  const timerElement = document.getElementById("timer");
  const timerInterval = setInterval(function () {
    startTime++;
    timerElement.textContent = startTime + " secondi";
    localStorage.setItem("timer", startTime.toString());
  }, 1000);

  timerElement.textContent = startTime + " secondi";
}
window.addEventListener("load", startTimer);
