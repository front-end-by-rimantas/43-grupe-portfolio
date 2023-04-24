function services() {
    const data = [
        {
            icon: 'globe',
            title: 'Search Optimization',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
        {
            icon: 'plane',
            title: 'Logo & Identity',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
        {
            icon: 'bars',
            title: 'Graphics Design',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
        {
            icon: 'twitter',
            title: 'Fully Responsive',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
        {
            icon: 'bath',
            title: 'Advanced Options',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
        {
            icon: 'car',
            title: 'Reasonable Pricing',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos pariatur accusamus?',
        },
    ];

    let HTML = '';

    for (const service of data) {
        HTML += `<div class="col-12 col-sm-6 col-lg-4">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    const DOM = document.getElementById('services_block');
    DOM.innerHTML = HTML;
}

export { services };
