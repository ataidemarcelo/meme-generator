console.log('Project Meme Generator!!!');

const text = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');

function addText(textoDigitado) {
  text.id = 'meme-text';

  text.innerText = textoDigitado;

  memeImageContainer.appendChild(text);
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', (event) => {
  addText(event.target.value);
});

function addImage() {
  const memeInsert = document.getElementById('meme-insert');
  const memeImage = document.getElementById('meme-image');

  const reader = new FileReader();

  reader.onload = () => {
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(memeInsert.files[0]);

  memeImageContainer.appendChild(memeImage);
}

const btnAddImage = document.getElementById('add-image');
btnAddImage.addEventListener('click', (event) => {
  event.preventDefault();

  addImage();
});

function addBorderColor(color) {
  switch (color) {
  case 'rgb(255, 0, 0)':
    memeImageContainer.style.border = `3px dashed ${color}`;
    break;
  case 'rgb(0, 0, 255)':
    memeImageContainer.style.border = `5px double ${color}`;
    break;
  case 'rgb(0, 128, 0)':
    memeImageContainer.style.border = `6px groove ${color}`;
    break;
  default:
    console.log('Não deu!');
  }
}

function getBorderColor() {
  const btnsAddBorder = document.getElementsByClassName('btn-add-border');
  for (let index = 0; index < btnsAddBorder.length; index += 1) {
    btnsAddBorder[index].addEventListener('click', (event) => {
      const element = event.target;
      const cssObj = window.getComputedStyle(element, null);
      const colorSelected = cssObj.getPropertyValue('background-color');

      addBorderColor(colorSelected);
      console.log(colorSelected);
    });
  }
}

getBorderColor();
