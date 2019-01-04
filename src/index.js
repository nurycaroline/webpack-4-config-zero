// function generateComponent() {
//   const element__ = document.createElement('DIV');
//   element__.className = 'container';
  
//   const paragraph = document.createElement('P');
//   const txt = document.createTextNode('Boo! ƪ(ړײ)ƪ');
  
//   paragraph.appendChild(txt);
//   element__.appendChild(paragraph);
  
//   console.log('My JavaScript log.');

//   return element__;
// }
// document.body.appendChild(generateComponent());
import './base.scss';
import MyImg from './assets/images/js.png';

class Generator {
  createParagraph(__string) {
    const textNode = document.createTextNode(__string);
    const paragraphElement = document.createElement('P');
    paragraphElement.appendChild(textNode);
    return paragraphElement;
  }

  createImg(__source, __width, __height) {
    const imgElement = new Image(__width, __height);
    imgElement.src = __source;
    return imgElement;
  }

  createDiv(__innerNode) {
    const divElement = document.createElement('DIV');
    if (__innerNode) {
      divElement.appendChild(__innerNode);
    }
    return divElement;
  }
}

const gen = new Generator;
const par = gen.createParagraph('Boo! ƪ(ړײ)ƪ');
const myImg = gen.createImg(MyImg, 250, 250);
const div = gen.createDiv(par);

div.appendChild(myImg);
console.log('This is my image address', MyImg);

document.body.appendChild(div);