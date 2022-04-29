console.log('Project Meme Generator!!!');

const text = document.createElement('p');
function addText(textoDigitado) {
  const container = document.getElementById('meme-image-container');
  text.id = 'meme-text';

  text.innerText = textoDigitado;

  container.appendChild(text);
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', (event) => {
  addText(event.target.value);
});
