function services(selector, data) {
    // ar tinkamas selector?
    if (typeof selector !== 'string' || selector === '') {
        return 'ERROR: neteisingas selectorius';
    }

    const DOM = document.getElementById(selector);
    // ar egzistuoja elementas, kur reikes ipiesti HTML?
    if (DOM === null) {
        return 'ERROR: pagal pateikta selektoriu nepavyko rasti norimo elemento';
    }

    // ar duomenys yra tinkami?
    if (!Array.isArray(data) || data.length === 0) {
        return 'ERROR: duomenu kintamasis nera ne tuscias masyvas';
    }

    let HTML = '';

    for (const service of data) {
        // ar "service" (objektas) yra tinkamas?
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service) ||
            typeof service.icon !== 'string' ||
            service.icon.length < 1 ||
            typeof service.title !== 'string' ||
            service.title.length < 1 ||
            typeof service.description !== 'string' ||
            service.description.length < 1
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-sm-6 col-lg-4">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    if (HTML === '') {
        return 'ERROR: duomenyse nera nei vieno teisingo service objekto... :(';
    }

    DOM.innerHTML = HTML;
    return true;
}

export { services };
