$(function () {

    $(document).ready(function () {
        $('.slider').slick({
            centerMode: true,
            centerPadding: '30px',
            autoplay: true,     // 自動再生
            dots: true,         // ドット
            slidesToShow: 3,    // 表示画像数
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

});
