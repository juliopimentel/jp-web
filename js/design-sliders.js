$(document).ready(function () {

    var slider;
    var modal_imgs_slider = ".slick-active .modal-imgs";



    function slider_elements_in() {

        $(modal_imgs_slider).each(function () {
            $(this).attr("src", $(this).data("src"));
            $(this).on('load', function () {
                $(this).addClass("modal-imgs-in");
            });
        });
        
        
        const refreshsliderHeight = setInterval(function () {

            var slick_height = $(".slick-active").height()
            console.log(slick_height)

            $(".slick-list").css("height", slick_height);
        }, 300);


        $('.slick-active').waitForImages({
            finished: function () {
                setTimeout(function () {
                    console.log("loaded");
                    clearInterval(refreshsliderHeight);
                }, 500);
            },
            waitForAll: true
        });



    };



    // Modal in // 
    function modalIn() {
        $(".jp-modal-wrapper").show();
        $('body').addClass("body-ovf");
        setTimeout(function () {
            $('.blackdrop').addClass("blackdrop-in");
            setTimeout(function () {
                $('.jp-inner-modal').addClass("jp-inner-modal-in");
                setTimeout(function () {
                    $(".jp-slide-wrp").addClass("jp-slide-wrp-in");
                }, 500);
            }, 500);
        }, 10);
    };

    // modal off //
    function modalOff() {
        $(".jp-slide-wrp").removeClass("jp-slide-wrp-in");
        $('.jp-inner-modal').removeClass("jp-inner-modal-in");
        setTimeout(function () {
            $('.blackdrop').removeClass("blackdrop-in");
        }, 500);
        setTimeout(function () {
            $(".jp-modal-wrapper").hide();
            $('body').removeClass("body-ovf");
        }, 1000);
    };

    function fadeSlideIn() {
        $(".next").addClass("disable-button");
        $(".prev").addClass("disable-button");
        $(".projects-main-slider").addClass("projects-main-slider-toggle");
    };

    function fadeSlideOut() {
        $(".next").removeClass("disable-button");
        $(".prev").removeClass("disable-button");
        $(".projects-main-slider").removeClass("projects-main-slider-toggle");
    };


    function slider_prev() {
        fadeSlideIn();
        scroll_top();

        setTimeout(function () {

            $('.projects-main-slider').slick('slickPrev');

        }, 500);
    }

    function slider_next() {
        fadeSlideIn();
        scroll_top();

        setTimeout(function () {


            $('.projects-main-slider').slick('slickNext');

        }, 500);
    }







    // Close Modal
    function scroll_top() {
        /*------mback to top------*/
        $(".jp-modal-wrapper").animate({
            scrollTop: 0,
        }, 1000);
        return false;
    };
    $(".blackdrop").click(function () {
        modalOff();
        setTimeout(function () {
            scroll_top();
            return false;
        }, 700);
    });
    $(".jp-modal-nav p").click(function () {
        modalOff();
        setTimeout(function () {
            scroll_top();
        }, 700);
    });
    $('body').keydown(function (e) {
        if (e.keyCode == 27) {
            modalOff();
            setTimeout(function () {
                scroll_top();
            }, 700);
        };
    });



    // Mount slider
    $(function () {
        slider = $('.projects-main-slider').slick({
            infinite: true,
            speed: 1,
            slidesToShow: 1,
            prevArrow: false,
            nextArrow: false,
            swipe: false,
            accessibility: false,
        });
    });

  


    // Logos Click //
    $(".design-logos").click(function (event) {

        modalIn();

        let logo_id = event.target.dataset.itemClass;
        let active_carousel_click = "#" + logo_id + " " + ".carousel-item.active img";
        let hero_selector = "#" + logo_id + " " + ".modal-hero img";
        let slide_n = ($('.design-logos').index(this));


        setTimeout(function () {
            $('.projects-main-slider').slick('slickGoTo', slide_n, true);
        }, 200);



    }); /*end event*/


    $('.projects-main-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        fadeSlideOut();
        console.log("slider-changed");

        setTimeout(function () {
            slider_elements_in();
        }, 500);
    });


    $(function () {

        $('.jp-inner-modal-color').swipe({
            //Single swipe handler for left swipes
            swipeLeft: function (event, direction, distance, duration, fingerCount) {

                if (!$(event.target.closest(".carousel")).hasClass("carousel")) {
                    slider_next();
                }
            },

            swipeRight: function (event, direction, distance, duration, fingerCount) {
                if (!$(event.target.closest(".carousel")).hasClass("carousel")) {
                    slider_prev();
                }
            },
            threshold: 50,
            cancelThreshold: 25

        });
    });


    $(".jp-modal-buttons.prev").click(function () {
        slider_prev();
    });

    $(".jp-modal-buttons.next").click(function () {
        slider_next();
    });


    $(function () {
        $(".carousel").swipe({
            //Single swipe handler for left swipes
            swipeLeft: function (event, direction, distance, duration, fingerCount) {
                let active_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item.active";
                let next_image = $(active_slide).next("div").find("img");
                let active_carousel = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel";

                $(active_carousel).carousel("next");
                next_image.each(function () {
                    $(this).attr('src', $(this).attr('data-src'));
                });

                setTimeout(function () {

                    $(next_image).each(function () {
                        $(this).attr("src", $(this).data("src"));
                        $(this).on('load', function () {
                            $(this).addClass("carouselimg-in");
                        });
                    });
                }, 300);


            },

            swipeRight: function (event, direction, distance, duration, fingerCount) {
                let active_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item.active";
                let prev_image = $(active_slide).prev("div").find("img");
                let first_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item:first-child";
                let last_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item:last-child img";
                let active_carousel = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel";

                $(active_carousel).carousel("prev");

                $(prev_image).each(function () {
                    $(this).attr("src", $(this).data("src"));
                    $(this).on('load', function () {
                        $(prev_image).show();
                        setTimeout(function () {
                            $(prev_image).addClass("carouselimg-in");
                        }, 50);
                    });
                });


                if ($(first_slide).hasClass("active")) {
                    $(last_slide).each(function () {
                        $(this).attr("src", $(this).data("src"));
                        $(this).on('load', function () {
                            $(last_slide).show();
                            setTimeout(function () {
                                $(last_slide).addClass("carouselimg-in");
                            }, 50);
                        });
                    });
                }
            },
            threshold: 50,
            cancelThreshold: 25

        });
    });



    // Carousel Arrow Click
    $(".carousel-control-next").click(function (event) {
        let next_carousel = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item-next img";

        setTimeout(function () {

            $(next_carousel).each(function () {
                $(this).attr("src", $(this).data("src"));
                $(this).on('load', function () {
                    $(this).addClass("carouselimg-in");
                });
            });
        }, 300);
    });


    // Carousel Arrow Click
    $(".carousel-control-prev").click(function () {
        let active_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item.active";
        let prev_image = $(active_slide).prev("div").find("img");
        let first_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item:first-child";
        let last_slide = "#" + event.target.closest(".jp-slide-wrp").id + " " + ".carousel-item:last-child img";


        $(prev_image).each(function () {
            $(this).attr("src", $(this).data("src"));
            $(this).on('load', function () {
                $(prev_image).show();
                setTimeout(function () {
                    $(prev_image).addClass("carouselimg-in");
                }, 50);
            });
        });


        if ($(first_slide).hasClass("active")) {
            $(last_slide).each(function () {
                $(this).attr("src", $(this).data("src"));
                $(this).on('load', function () {
                    $(last_slide).show();
                    setTimeout(function () {
                        $(last_slide).addClass("carouselimg-in");
                    }, 50);
                });
            });
        }
    });



    //  Carousel indicators click
    $(".carousel-indicators li").click(function () {


        var index = $(".slick-active .carousel-indicators li").index(this) + 1;

        var car_img_in = $(".slick-active .carousel-item img").eq($(this).index());

        $(car_img_in).each(function () {
            $(this).attr("src", $(this).data("src"));
            $(this).on('load', function () {
                $(car_img_in).show();
                setTimeout(function () {
                    $(car_img_in).addClass("carouselimg-in");
                }, 50);
            });
        });
    });


});