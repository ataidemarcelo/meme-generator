console.log('Project Meme Generator!!!');

const text = document.createElement('p');

function addText(textoDigitado) {
  const memeImageContainer = document.getElementById('meme-image-container');
  text.id = 'meme-text';
  text.className = 'text';

  text.innerText = textoDigitado;

  memeImageContainer.appendChild(text);
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', (event) => {
  addText(event.target.value);
});

function addImage() {
  const memeInsert = document.getElementById('meme-insert');
  const memeImageContainer = document.getElementById('meme-image-container');
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
