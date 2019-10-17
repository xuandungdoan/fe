$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        url: "https://api.myjson.com/bins/1clhi0",
        method: "GET",
        success: function (res) {
            var html = '';

            for(var i = 0; i < res.length; i++) {

                // html += '<div class="item ' + (i % 3 == 2 ? 'last' : '') +'">' + 
                //     '<a href="./details.html?id=' + res[i].id + '">' +
                //         '<div class="image" style="background-image: url(\'' + res[i].image + '\');">' +
                //         '</div>' +
                //         '<div class="text">' +
                //             '<p class="title">' + res[i].title + '</p>' +
                //             '<p>' + res[i].author +
                //                 '<span>' + res[i].date + '</span>' +
                //             '</p>' +
                //         '</div>' +
                //     '</a>' + 
                // '</div>';

                html +=' <div class="item"> ' + '<a href="./details.html?id=' + res[i].id + '">' +  
                '<div class="photo">'+
                    '<img src="'+ res[i].image +'" alt="">'+
                '</div>' +
                '<a href="">'+ res[i].title +'</a>' +
                '<p style="font-size: 14px;color: #111111 ;">'+ res[i].price +'</p>' +
                '<p style="font-weight: bold;font-size: 9px !important;">'+ res[i].title2 +'</p>' +
                '<p>'+ res[i].color+'</p>'+
            '</div>';
            }

            $('.products').prepend(html);
        },
        error: function (err) {
            alert("Can't get data from server");
            console.log(err)
        }
    })
}