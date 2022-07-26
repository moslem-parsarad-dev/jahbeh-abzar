new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {delay: 5000}
})
new Swiper('.swiper-special-part', {
    slidesPerView: 4,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {delay: 5000}
})
new Swiper('.swiper-body-part', {
    slidesPerView: 6,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {delay: 5000}
})

var typed = new Typed("#typed", {
    strings: [
        "شبیه‌ترین حادثه به معجزات انبیا، این حادثه‌ی پیروزی انقلاب بود.",
        " فرهنگ یک جامعه، اساس هویت آن جامعه است.",
        "کار فرهنگی در ایران اسلامی مسأله ای است که نمی توان لحظه ای از آن غفلت کرد.",
        "این جنگ نرم ، شما جوانهای دانشجو ، افسران جوان این جبهه اید…"
    ],
    loop: true,
    typeSpeed: 100,
})


var typing_loading = new Typed("#typed-loading", {
    strings: [
        "",
        ".",
        "..",
        "..."
    ],
    loop: true,
    typeSpeed: 5,
})


setTimeout(function () {
    $("#loading").fadeOut();
}, 3000)

$("#first-msg .first-msg-caption .first-msg-button button").click(function () {
    $("#first-msg").slideToggle()
    $("#click").attr("src", "asset/sound/mouse-one-click.mp3")
});


$("#chaging-background").click(() => {
    $("#change-image").fadeToggle();
    $(".image-click-change").fadeToggle();
});

$("#change-image .images-be-changed img").click((img) => {
    $("#content").css("background-image", `url(${img.target.src})`)
    $("#change-image").fadeToggle();
    $(".image-click-change").fadeToggle();
});

$("#input-search").keydown(function (event) {
    console.log(event);
    if (event.keyCode === 13) {
        let query = $("#input-search").val()
        if (query === '') {
        } else {
            let result;
            let urlSearchGoogle = `https://www.google.com/search?q=${query}`
            window.open(urlSearchGoogle, "_blank")
        }
        if (query === "") {
            swal({
                title: "لطفا چیزی وارد کنید",
                text: "لطفا کادر جستجو را پر کنید تا نتایج براتون بیاد",
                icon: "error",
                button: "بله حتما",
            });
            query.focus()
        } else {
        }
    }
})
$("#submit-search").click(() => {
    let query = $("#input-search").val()
    if (query === '') {
    } else {
        let result;
        let urlSearchGoogle = `https://www.google.com/search?q=${query}`
        window.open(urlSearchGoogle, "_blank")
    }
    if (query === "") {
        swal({
            title: "لطفا چیزی وارد کنید",
            text: "لطفا کادر جستجو را پر کنید تا نتایج براتون بیاد",
            icon: "error",
            button: "بله حتما",
        });
    } else {
    }
})


$("#submit-search").click(() => {
    if ($("#engine").val() === 'google') {
        let query = $(".input-one").val()


        if (query === '') {
        } else {
            let result;
            let urlSearchGoogle = `https://www.google.com/search?q=${query}`
            window.open(urlSearchGoogle, "_blank")
            let urlTest = 'https://www.google.com/search?q=سلام';
            $.get(urlTest, (data) => {
                console.log(data)
            })
            $("#result").empty()

        }
        if (query === "") {
            swal({
                title: "لطفا چیزی وارد کنید",
                text: "لطفا کادر جستجو را پر کنید تا نتایج براتون بیاد",
                icon: "error",
                button: "بله حتما",
            });
        } else {
        }
    }
})

$("#citys").change(() => {

    let CityName = $('.option_city:selected').val();
    let whetherLinkAPI = `https://api.codebazan.ir/weather/?city=${CityName}`;
    $.get(whetherLinkAPI, (Data) => {
        console.log(Data)
        let CityDama = Data.result.دما;
        let whetherStatus = Data.result['وضعیت هوا'];
        $("#result-offical").html(CityDama);
        $("#status-city").html(whetherStatus)
    });
});

let mono = `https://api.codebazan.ir/time-date/?td=date`;

$.get(mono, function (data) {

    console.log(data);

    $(".monasebat").html(data)
})


let monoToday = 'https://api.codebazan.ir/monasebat/';

$.get(monoToday, (data) => {
    console.log(data);
    $("#mono-result").append(data[0].occasion);
    //$('#mono-result').append(data[1].occasion);
})

let today_zekr = `https://api.codebazan.ir/zekr/`;
$.get(today_zekr, (data) => {
    $("#zekr-result").html(data)
})
let arzPrice = `https://api.codebazan.ir/arz/?type=arz`;

$.get(arzPrice, (price) => {
    //console.log(price)
    $(".arzs").append(` قیمت دلار : ${price[33].price} ریال ` + "<br/>")
    $(".arzs").append(` قیمت یورو : ${price[0].price} ریال ` + "<br/>")
    $(".arzs").append(` قیمت لیر ترکیه : ${price[25].price} ریال ` + "<br/>")
    $(".arzs").append(` قیمت ریال عمان : ${price[33].price} ریال ` + "<br/>")
    $(".arzs").append(` قیمت درهم عمارات     : ${price[22].price} ریال ` + "<br/>")
    console.log(price)
})


let cars_price = `https://api.codebazan.ir/car-price/`;
$.get(cars_price, (data) => {
    $("#cars-result").append(data.Result[53].name + ':' + data.Result[53].bazar + '<br/>');
    $("#cars-result").append(data.Result[69].name + ':' + data.Result[69].bazar + '<br/>');
    $("#cars-result").append(data.Result[1].name + ':' + data.Result[1].bazar + '<br/>');
    $("#cars-result").append(data.Result[10].name + ':' + data.Result[10].bazar + '<br/>');
    $("#cars-result").append(data.Result[63].name + ':' + data.Result[63].bazar + '<br/>');
    //console.log(data)
})


let chistan = `https://api.codebazan.ir/chistan/`;
$.get(chistan, (data) => {
    $("#chistan-result-tag").html((data.Result[Math.floor(Math.random() * 144)].soal));
})

//
//
// $('.button-add-link').click(()=>{
//     var  name = $(".input-add-href");
//     var href = $('.input-add-href');
//     if (name.val()=='' || href.val() == ''){
//         swal("وای نه", "لطفا دو کادر را خالی نگذارید", "error");
//
//     }else{
//         var link = `<div class="link"><a href="https://${href.val()}" class="vazir" target="_blank">${name.val()}</a></div>`;
//         $('.links').append(link)
//     }
// })