// IMPORTS
import { servicesData } from '../../data/servicesData.js';
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

services(services, servicesData);
services(777, servicesData);
services(true, servicesData);
services([], servicesData);
services({}, servicesData);
services('', servicesData);
services('services_block2', servicesData);

services(servicesData);
services();

services('services_block', 'labas');
services('services_block', true);
services('services_block', 777);
services('services_block', null);
services('services_block', {});
services('services_block', []);
services('services_block', [777]);
services('services_block', ['labas']);
services('services_block', [true, false]);
services('services_block', [null]);
services('services_block', [[]]);
services('services_block', [{}]);
services('services_block', [{ icon: 'globe' }]);
services('services_block', [{ title: 'globe' }]);
services('services_block', [{ description: 'globe' }]);
services('services_block', [{ icon: 'globe', description: 'globe' }]);
services('services_block', [{ title: 'globe', description: 'globe' }]);
services('services_block', [{ title: 'globe', icon: 'globe' }]);
services('services_block', [
    { icon: 777, title: 'globe', description: 'globe' },
]);
services('services_block', [
    { icon: '', title: 'globe', description: 'globe' },
]);
services('services_block', [
    { icon: 'globe', title: [777], description: 'globe' },
]);
services('services_block', [
    { icon: 'globe', title: 'globe', description: [777] },
]);
services('services_block', [
    { icon: 'globe', title: '', description: 'globe' },
]);
services('services_block', [
    { icon: 'globe', title: 'globe', description: '' },
    { icon: 'globe', title: 'globe', description: '' },
    { icon: 'globe', title: 'globe', description: '' },
    { icon: 'globe', title: 'globe', description: '' },
    { icon: 'globe', title: 'globe', description: '' },
]);

services('services_block', servicesData);

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
