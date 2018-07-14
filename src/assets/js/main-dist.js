!function(d, e, s, o) {
    "use strict";
    var t = {
        init: function() {
            t.slideRender(), t.richTextInit(), t.navConfig(), d(e).scroll(function() {
                t.navConfig();
            }), d(".product-timer").length && setInterval(t.productTimerInit, 1e3);
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
            }), d(".product-cols-carousel").length) for (var e = d(".product-cols-carousel"), s = 0; s < e.length; s++) {
                var o = e.eq(s).data("items") || 1;
                e.eq(s).slick({
                    infinite: !0,
                    slidesToShow: o,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 3e3,
                    responsive: [ {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: o - 1 < 1 ? 1 : o - 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: o - 2 < 1 ? 1 : o - 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: o - 3 < 1 ? 1 : o - 3
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
                var s = d(".summernote").eq(e).data("placeholder") || "Vui lòng nhập", o = d(".summernote").eq(e).data("height") || 100;
                d(".summernote").eq(e).summernote({
                    placeholder: s,
                    tabsize: 2,
                    height: o
                });
            }
        },
        productTimerInit: function() {
            for (var e = d(".product-timer"), s = 0; s < e.length; s++) {
                var o = e.eq(s).data("end"), t = 0, n = 0, i = 0;
                if (null != o && 5 == o.split("-").length) {
                    var a = o.split("-"), r = new Date(a[0], parseInt(a[1]) - 1, a[2], a[3], a[4]), l = new Date();
                    l < r && (i = parseInt((r - l) / 1e3), n = parseInt(i / 60), t = parseInt(n / 60), 
                    n %= 60, i %= 60);
                }
                i = i < 10 ? "0" + i : i, n = n < 10 ? "0" + n : n, t = t < 10 ? "0" + t : t, e.eq(s).find("li").eq(0).text(t), 
                e.eq(s).find("li").eq(1).text(n), e.eq(s).find("li").eq(2).text(i);
            }
        }
    };
    d(s).ready(function() {
        t.init();
    });
}(jQuery, window, document);