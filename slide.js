$(document).ready(function () {
    $('.slide').slick({
        autoplay: true,  // 自動再生を有効にする
        autoplaySpeed: 4000,  // 自動再生の間隔（ミリ秒）
        dots: true,  // ドットナビゲーションを表示
        infinite: true,  // 無限ループ
        slidesToShow: 3,  // 一度に表示するスライド数
        slidesToScroll: 1,  // スクロールするスライド数
        arrows: true,
        fade: false,

    });
});

