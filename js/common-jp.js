$(document).ready(function () {
    /*------menu hover------*/

    $("#menu a:not(.active-menu)").hover(function () {
        $(this).addClass("menu-a-hov");
        $(this).siblings().addClass("menu-a-op");
    }, function () {
        $(this).removeClass("menu-a-hov");
        $(this).siblings().removeClass("menu-a-op");
    });

    $("#menu a:not(.active-menu)").hover(function (event) {


        if ($(event.target).is("#about")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider1");
        }
        if ($(event.target).is("#threedwork")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider2");
        }
        if ($(event.target).is("#design")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider3");
        }
        if ($(event.target).is("#web")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider4");
        }
        if ($(event.target).is("#audiovisual")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider5");
        }
        if ($(event.target).is("#contact")) {

            $("#menu-slider").removeClass("menu-slider-active");
            $("#menu-slider").addClass("menu-slider5");
        }


    }, function () {

        $("#menu-slider").removeClass("menu-slider1");
        $("#menu-slider").removeClass("menu-slider2");
        $("#menu-slider").removeClass("menu-slider3");
        $("#menu-slider").removeClass("menu-slider4");
        $("#menu-slider").removeClass("menu-slider5");
        $("#menu-slider").removeClass("menu-slider6");
        $("#menu-slider").addClass("menu-slider-active");
    });


    $("#menu a").mousedown(function (event) {
        if (event.which == 2) {
            if ($(event.target).is("#about")) {
                $(this).prop("href", "index.html");
            }
            if ($(event.target).is("#threedwork")) {
                $(this).prop("href", "3Dwork.html");
            }

            if ($(event.target).is("#design")) {
                $(this).prop("href", "design.html");
            }

            if ($(event.target).is("#web")) {
                $(this).prop("href", "web.html");
            }

            if ($(event.target).is("#audiovisual")) {
                $(this).prop("href", "audiovisual.html");
            }
        }
        setTimeout(function () {
            $("a").removeAttr("href");
        }, 300);


    });


    /*------menu click------*/
    $("#menu a").click(function (event) {
        if (event.ctrlKey) {
            if ($(event.target).is("#about")) {
                $(this).prop("href", "index.html");
            }

            if ($(event.target).is("#threedwork")) {
                $(this).prop("href", "3Dwork.html");
            }

            if ($(event.target).is("#design")) {
                $(this).prop("href", "design.html");
            }

            if ($(event.target).is("#web")) {
                $(this).prop("href", "web.html");
            }

            if ($(event.target).is("#audiovisual")) {
                $(this).prop("href", "audiovisual.html");
            }
        }
        setTimeout(function () {
            $("a").removeAttr("href");
        }, 300);


    });


    $("#menu a:not(.active-menu, #contact)").click(function (event) {

        if (!event.ctrlKey) {

            $(".active-menu").removeClass("active-menu");
            setTimeout(function () {
                if ($(event.target).is("#about")) {
                    $("#about").addClass("active-menu");
                    $("#menu-slider").removeClass("menu-slider-active", "menu-slider2", "menu-slider3", "menu-slider4", "menu-slider5", "menu-slider6");
                    $("#menu-slider").addClass("menu-slider1");

                }
                if ($(event.target).is("#threedwork")) {
                    $("#threedwork").addClass("active-menu");
                    $("#menu-slider").removeClass("menu-slider-active", "menu-slider1", "menu-slider3", "menu-slider4", "menu-slider5", "menu-slider6");
                    $("#menu-slider").addClass("menu-slider2");

                }
                if ($(event.target).is("#design")) {
                    $("#design").addClass("active-menu");
                    $("#menu-slider").removeClass("menu-slider-active", "menu-slider1", "menu-slider2", "menu-slider4", "menu-slider5", "menu-slider6");
                    $("#menu-slider").addClass("menu-slider3");
                }

                if ($(event.target).is("#web")) {
                    $("#web").addClass("active-menu");
                    $("#menu-slider").removeClass("menu-slider-active", "menu-slider2", "menu-slider3", "menu-slider1", "menu-slider5", "menu-slider6");
                    $("#menu-slider").addClass("menu-slider4");
                }
                if ($(event.target).is("#audiovisual")) {

                    $("#audiovisual").addClass("active-menu");
                    $("#menu-slider").removeClass("menu-slider-active", "menu-slider2", "menu-slider3", "menu-slider4", "menu-slider1", "menu-slider6");
                    $("#menu-slider").addClass("menu-slider5");
                }

            }, 10);

            

            $('.white-bg').show();

            setTimeout(function () {

                $('.white-bg').addClass("white-bg-in");

            }, 200);

            setTimeout(function () {

                if ($(event.target).is("#about")) {
                    window.location.href = "index.html";
                }

                if ($(event.target).is("#threedwork")) {
                    window.location.href = "3Dwork.html";
                }

                if ($(event.target).is("#design")) {
                    window.location.href = "design.html";
                }

                if ($(event.target).is("#web")) {
                    window.location.href = "web.html";
                }

                if ($(event.target).is("#audiovisual")) {
                    window.location.href = "audiovisual.html";
                }


            }, 800);
        }




    });

    /*------menu toggle------*/



    $('.ham-menu').click(function () {

        if ($(".ham-menu").hasClass("clossed-ham")) {
            $(".ham-menu").removeClass("clossed-ham");

            setTimeout(function () {
                $(".ham-menu").addClass("opened-ham");
            }, 200);

            $('#menu').show();
            setTimeout(function () {
                $(".ham-menu").addClass("ham-menu-toggle");
                $(".ham-line").addClass("ham-line-toggle");

                /*home logo*/
                $("#anim-canvas").addClass("animation-container-toggle");

                /*3d work*/
                $(".black-cube").addClass("black-cube-toggle");
                $(".black-cube-title").addClass("black-cube-toggle");

                /*Design*/
                $(".square-wrapper").addClass("square-wrapper-toggle");
                
                /*Web*/
                $(".web-title").addClass("web-title-toggle");

                setTimeout(function () {
                    $(".navmenu").addClass("navmenu-toggle");
                    $("#menu a").addClass("menu-a-toggle");
                }, 200);
            }, 50);

        }


        if ($(".ham-menu").hasClass("opened-ham")) {
            $(".ham-menu").removeClass("opened-ham");

            setTimeout(function () {
                $(".ham-menu").addClass("clossed-ham");
            }, 200);

            $(".navmenu").removeClass("navmenu-toggle");
            $("#menu a").removeClass("menu-a-toggle");

            setTimeout(function () {
                $(".ham-menu").removeClass("ham-menu-toggle");
                $(".ham-line").removeClass("ham-line-toggle");

                /*home logo*/
                $("#anim-canvas").removeClass("animation-container-toggle");

                /*3d work*/
                $(".black-cube").removeClass("black-cube-toggle");
                $(".black-cube-title").removeClass("black-cube-toggle");

                /*Design*/
                $(".square-wrapper").removeClass("square-wrapper-toggle");
                
                /*Web*/
                $(".web-title").removeClass("web-title-toggle");


                setTimeout(function () {
                    $('#menu').hide();

                }, 400);
            }, 200);

        }





    });


    $(document).click(function (e) {


        if ($(".ham-menu").hasClass("opened-ham")) {
            // Check if click was triggered on or within #menu_content
            if ($(e.target).closest("#menu a, .ham-menu").length > 0) {
                return false;
            }

            $(".ham-menu").removeClass("opened-ham");
            setTimeout(function () {
                $(".ham-menu").addClass("clossed-ham");
            }, 200);

            $(".navmenu").removeClass("navmenu-toggle");
            $("#menu a").removeClass("menu-a-toggle");

            setTimeout(function () {
                $(".ham-menu").removeClass("ham-menu-toggle");
                $(".ham-line").removeClass("ham-line-toggle");

                /*home logo*/
                $("#anim-canvas").removeClass("animation-container-toggle");

                /*3d work*/
                $(".black-cube").removeClass("black-cube-toggle");
                $(".black-cube-title").removeClass("black-cube-toggle");

                /*Design*/
                $(".square-wrapper").removeClass("square-wrapper-toggle");
                
                /*Web*/
                $(".web-title").removeClass("web-title-toggle");


                setTimeout(function () {
                    $('#menu').hide();

                }, 400);
            }, 200);
        }
    });



    /*------contact------*/
    $('#contact').click(function () {
        $('html,body').animate({
            scrollTop: $("#contact_section h2").offset().top
        }, 1500);
        return false;
    });





    /*------mback to top------*/
    $('.back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    /*------rrss hover------*/
    $(".rrss-item").hover(function () {
        $(this).siblings().addClass("rrss-item-op");
    }, function () {
        $(this).siblings().removeClass("rrss-item-op");
    });




        $.validator.addMethod(
            "regex",
            function (value, element, regexp) {
                return this.optional(element) || regexp.test(value);
            },
            "Please check your input."
        );

        $(function () {
            $('#contact-form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    email: {
                        required: true,
                        regex: /.*@\w{2,}\.\w{2,}/,
                    },
                    subject: {
                        required: true,
                        minlength: 3
                    },
                    message: {
                        required: true,
                        minlength: 3
                    }
                },
            });


            $(".contact-input").each(function (index, element) {
                var error_block = "#" + $(this).parent().attr('id') + " " + ".error-block";

                $(element).focusin(function () {

                    if ($('.error-block').is(":visible")) {
                        $(element).focus(function () {
                            const checker = setInterval(function () {

                                if ($(element).valid() == true) {
                                    $(error_block).fadeOut(300);
                                } else {
                                    $(error_block).fadeIn(300);
                                }
                                $(element).focusout(function () {
                                    clearInterval(checker);
                                });
                            }, 200);
                        });
                    }

                });

                $(element).focusout(function () {

                    if ($(element).valid() == false) {
                        $(error_block).fadeIn(300);
                    } else {
                        $(error_block).fadeOut(300);
                    }
                });
            });
        });




        $(function () {
            $("#contact-form").submit(function (e) {
                e.preventDefault();
                var href = $(this).attr("action");
                

                $(".contact-input").each(function (index, element) {
                    var error_block = "#" + $(this).parent().attr('id') + " " + ".error-block";


                    if ($(element).valid() == false) {
                        $(error_block).fadeIn(300);
                    } else if ($(".contact-input").valid() == true) 
                    
                    {
                        $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: href,
                    data: $("#contact-form").serialize(),
                    success: function (response) {
                        if (response.status == "success") {                            
                            $('.contact-submitted').addClass('contact-submitted-show');
                            $('.form-wrapper').removeClass('form-wrapper-in');
                            
                            setTimeout(function () {
                                $('.form-wrapper').hide()
                            $('.contact-success').addClass('contact-submitted-in');
                            }, 800);
                        } else {                            
                            $('.contact-submitted').addClass('contact-submitted-show');
                            $('.form-wrapper').removeClass('form-wrapper-in');
                            
                            setTimeout(function () {
                                $('.form-wrapper').hide()
                            $('.contact-error').addClass('contact-submitted-in');
                            }, 800);
                        }
                    }
                });
                    }

                })


                


                
            });
        });





    var contact_form = document.querySelector('#contact_section');
    let contact_form_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {

                $('.contact-line').addClass("contact-line-in");
                setTimeout(function () {
                    $('.input-wrapper').addClass("input-wrapper-in");
                    $('.form-wrapper').addClass("form-wrapper-in form-wrapper-pos-in");
                }, 500);
            } else {}
        });
    }, {

    });
    contact_form_observer.observe(contact_form);




    /* luxy */
    var win_rez = window.matchMedia("(max-width: 991px)")
    hero_resize(win_rez) // Call listener function at run time
    win_rez.addListener(hero_resize) // Attach listener function on state changes

    function hero_resize(win_rez) {
        if (win_rez.matches) {


        } else {
            luxy.init({
                wrapper: '.luxy-container',
                wrapperSpeed: 0.1
            });

        }
    }




});