/* eslint-disable */
const exampleJs = () => {

    const init = () => {

        // Swiper, build/ex/swiper.html
        // eslint-disable-next-line no-console
        console.log('exampleJs');
        const swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    };

    return {
        init,
    };

};

export default exampleJs();
