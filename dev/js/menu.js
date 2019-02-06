// $(document).ready(function () {
//     $('.burger').click(function () {
//         $('.menu').toggleClass('active')
//     })
// });
// $(document).ready(function () {
//     $('.login__icon').click(function(){
//         $('.dropdown__login').toggleClass('active')
//     })
// });

$(function() {
    // toggle
    var flag = true;
    $('.login__icon').on('click', function (e) {
        e.preventDefault();
        if (flag) {
            flag = false;
            $('.dropdown__login').show('slow');
            $('.burger').hide();
        } else {
            flag = true;
            $('.burger').show('slow');
            $('.dropdown__login').hide();
        }
    })
});