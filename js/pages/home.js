// IMPORTS
import { services } from '../components/services.js';

// FUNCTION EXECUTION

/* header: start */
/* header: end */

/* hero: start */
/* hero: end */

/* about: start */
const aboutTitleSpanDOM = document.getElementById('about');
console.log(aboutTitleSpanDOM.innerText);
console.log(aboutTitleSpanDOM.textContent);

aboutTitleSpanDOM.textContent = 'me';
console.log(aboutTitleSpanDOM.innerText);
console.log(aboutTitleSpanDOM.textContent);

const aboutSectionDOM = document.querySelector('.container.about');
console.log(aboutSectionDOM);

const aboutTitleDOM = aboutSectionDOM.querySelector('.section-title');
console.log(aboutTitleDOM.innerText);

const pDOM = aboutSectionDOM.querySelector('p');
console.log(pDOM.classList);

pDOM.classList.add('btn');
pDOM.classList.add('pomidoras');
pDOM.classList.add('agurkas');
pDOM.classList.remove('pomidoras');
pDOM.classList.remove('btn');
pDOM.classList.remove('agurkas');

pDOM.classList.add('labas', 'rytas', 'sakau', 'tau');
pDOM.classList.remove('rytas', 'tau');

pDOM.classList.toggle('sakau');
pDOM.classList.toggle('sakau');
pDOM.classList.toggle('sakau');
pDOM.classList.toggle('sakau');

if (pDOM.classList.contains('kamuolys')) {
    pDOM.classList.remove('kamuolys');
} else {
    pDOM.classList.add('kamuolys');
}

if (pDOM.classList.contains('kamuolys')) {
    pDOM.classList.remove('kamuolys');
} else {
    pDOM.classList.add('kamuolys');
}

/* about: end */

/* services: start */
services();
/* services: end */

/* resume: start */
/* resume: end */

/* freelance: start */
/* freelance: end */

/* portfolio: start */
/* portfolio: end */

/* testimonials: start */
/* testimonials: end */

/* blog: start */
/* blog: end */

/* contact: start */
/* contact: end */

/* footer: start */
/* footer: end */
