const scrollRevealoption = {
    distance: "50px",
    origin: "bottom",
    duration:1000,
};
scrollReveal().reveal(".header__image img",{
    ...scrollRevealoption,
    origin: "right",

});
scrollReveal().reveal(".header__image h1",{
    ...scrollRevealoption,
    delay: 500,

});scrollReveal().reveal(".header__image p",{
    ...scrollRevealoption,
    delay:1000,

});scrollReveal().reveal(".header__image form",{
    ...scrollRevealoption,
    delay:1500,

});