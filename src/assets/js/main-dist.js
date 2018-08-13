!function(d, e, t, s) {
    "use strict";
    var i = {
        init: function() {
            i.slideRender(), i.richTextInit(), i.navConfig(), i.rateInit(), d(e).scroll(function() {
                i.navConfig();
            }), d(".product-timer").length && setInterval(i.productTimerInit, 1e3);
        },
        slideRender: function() {
            if (d(".banner-carousel").length && d(".banner-carousel").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 6e3,
                arrows: !1,
                dots: !0
            }), d(".product-cols-carousel").length) for (var e = d(".product-cols-carousel"), t = 0; t < e.length; t++) {
                var s = e.eq(t).data("items") || 1;
                e.eq(t).slick({
                    infinite: !0,
                    slidesToShow: s,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 3e3,
                    responsive: [ {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: s - 1 < 1 ? 1 : s - 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: s - 2 < 1 ? 1 : s - 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: s - 3 < 1 ? 1 : s - 3
                        }
                    } ]
                });
            }
            d(".branchs-carousel").length && d(".branchs-carousel").slick({
                infinite: !0,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 6e3,
                arrows: !1,
                dots: !1,
                responsive: [ {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3
                    }
                } ]
            }), d(".dual-carousel").length && (d(".dual-carousel").find(".-for").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1,
                fade: !0,
                asNavFor: ".-nav"
            }), d(".dual-carousel").find(".-nav").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: ".-for",
                arrows: !1,
                dots: !1,
                focusOnSelect: !0,
                responsive: [ {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                } ]
            }));
        },
        navConfig: function() {
            d(e).scrollTop() > d("header").height() + d(".navbar").height() ? (d(".navbar").addClass("fixed-nav"), 
            d("body").addClass("set-fixed-nav")) : (d(".navbar").removeClass("fixed-nav"), d("body").removeClass("set-fixed-nav"));
        },
        richTextInit: function() {
            if (d(".summernote").length) for (var e = 0; e < d(".summernote").length; e++) {
                var t = d(".summernote").eq(e).data("placeholder") || "Vui lòng nhập", s = d(".summernote").eq(e).data("height") || 100;
                d(".summernote").eq(e).summernote({
                    placeholder: t,
                    tabsize: 2,
                    height: s
                });
            }
        },
        productTimerInit: function() {
            for (var e = d(".product-timer"), t = 0; t < e.length; t++) {
                var s = e.eq(t).data("end"), i = 0, a = 0, n = 0;
                if (null != s && 5 == s.split("-").length) {
                    var o = s.split("-"), r = new Date(o[0], parseInt(o[1]) - 1, o[2], o[3], o[4]), l = new Date();
                    l < r && (n = parseInt((r - l) / 1e3), a = parseInt(n / 60), i = parseInt(a / 60), 
                    a %= 60, n %= 60);
                }
                n = n < 10 ? "0" + n : n, a = a < 10 ? "0" + a : a, i = i < 10 ? "0" + i : i, e.eq(t).find("li").eq(0).text(i), 
                e.eq(t).find("li").eq(1).text(a), e.eq(t).find("li").eq(2).text(n);
            }
        },
        rateInit: function() {
            if (d(".rate:not(.view)").length) {
                var e = d(".rate:not(.view)");
                e.find("a").click(function(e) {
                    e.preventDefault(), d(this).parent().addClass("choiced"), d(this).parent().find("a").removeClass("active"), 
                    d(this).prevAll().addClass("active"), d(this).addClass("active"), d(this).parent().parent().find(".rate-value").val(d(this).parent().find(".active").length), 
                    d(this).parent().parent().find(".rate-text").text(d(this).parent().find(".active").length);
                }), e.find("a").mouseenter(function() {
                    d(this).parent().hasClass("choiced") || (d(this).parent().find("a").removeClass("active"), 
                    d(this).prevAll().addClass("active"), d(this).addClass("active"), d(this).parent().parent().find(".rate-text").text(d(this).parent().find(".active").length));
                });
            }
        }
    };
    d(t).ready(function() {
        i.init();
    });
}(jQuery, window, document);