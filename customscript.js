document.addEventListener("DOMContentLoaded", () => {
  // const zap = document.querySelectorAll("[data-edit='exibirFaleConosco']")[0];
  // const clone = zap.cloneNode(true);
  // clone.classList.add('zaprodape');
  // zap.style.setProperty('display', 'none');
  const dadosrodape = document.querySelectorAll(
    "[data-edit='corFundoRodapeBloco2']"
  )[0].childNodes[1];
  const cpf = dadosrodape.childNodes[5];
  dadosrodape.removeChild(cpf);
  // dadosrodape.appendChild(clone);
});
