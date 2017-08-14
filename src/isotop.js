var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
    // options
    itemSelector: '.card',
    layoutMode: 'fitRows',
    getSortData: {
        title: '.title',
        tempo: '.tempo',
        intensity: '.intensity',
        feel: '.feel',
        instrumental: '.instrumental'
    }
});