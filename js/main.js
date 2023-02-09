$(document).ready(function() {
    $('.slider').slick({
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });
});

/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    keyboardScrolling: true,
    interlockedSlides: true,
    fixedElements: '#header, .footer',
    credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
    afterLoad: function(origin, destination, direction) {
        var loadedSection = this;
        if (destination.isFirst) {
            $("#moveUp").hide();
        } else {
            $("#moveUp").fadeIn();
        }
    },
    onLeave: function(origin, destination, direction) {
        if (destination.isLast) {
            $("#moveDown").fadeOut();
        } else {
            $("#moveDown").fadeIn();
        }
    }
});


$(document).on("click", "#moveDown", function() {
    fullpage_api.moveSectionDown();
});