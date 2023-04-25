function services(selector, data) {
    let HTML = '';

    for (const service of data) {
        HTML += `<div class="col-12 col-sm-6 col-lg-4">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    const DOM = document.getElementById(selector); // null
    DOM.innerHTML = HTML;
}

export { services };
