const accordion = document.querySelectorAll(".accordion");
const setas = document.querySelectorAll(".seta");
const texto = document.querySelectorAll(".texto");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    
    esconderTexto();

    const textoClicado = texto[i];
    const setaCinza = setas[i];

    textoClicado.classList.add("show");
    setaCinza.classList.add("laranja");
  });
}

function esconderTexto() {
  const textoAberto = document.querySelector(".show");
  const setaLaranja = document.querySelector(".laranja");

  textoAberto.classList.remove("show");
  setaLaranja.classList.remove("laranja");
}
