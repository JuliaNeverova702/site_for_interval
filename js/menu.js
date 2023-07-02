$('.menu_btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu_btn_active');
});

// $(document).ready(function(){
//     $('.header_burger').click(function(event) {
//         $('.header_burger, .header_menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });