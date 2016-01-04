
$(document).ready(function() {
    appendDom();
    scroll();

})

function appendDom() {
    $.ajax('data.json').then(function (response) {
        var data = response;
        var $content = '';

        for (var i = 0; i < data.length; i++) {
            var id = data[i].id;
            var gender = data[i].gender;
            var firstName = data[i].first_name;
            var lastName = data[i].last_name;
            var email = data[i].email;

            $content = ('ID Number: ' + id + '<br/>' + ' Gender: ' + gender + '<br/>' + ' First Name: ' + firstName + '<br/>' + ' Last Name: ' + lastName + '<br/>' + ' Email: ' + email + '<br/><br/>');
            $('.dom').append('<div class="person">' + $content + '</div>');
        };
    })
}

function scroll() {
    $('.scroll').on('click', function() {
        console.log('heard!');
        $('.dom').animate({'margin-top': -2000}, 10000);
    })
}