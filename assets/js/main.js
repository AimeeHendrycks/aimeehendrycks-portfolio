var $ = require('jQuery');
import Rellax from 'rellax';

document.addEventListener('DOMContentLoaded', () => {

    $(function () {
        const wordsArray1 = ['UX-focused', 'detail-oriented', 'fullstack', 'Craft CMS', 'mobile app', 'senior/lead'];
        let current1 = wordsArray1[Math.floor(Math.random() * wordsArray1.length)]
        $("#hero-switcher-1 span").text(current1);
        setInterval(function () {
            let new1 = wordsArray1[Math.floor(Math.random() * wordsArray1.length)]
            while (new1 == current1) {
                new1 = wordsArray1[Math.floor(Math.random() * wordsArray1.length)]
            }
            current1 = new1;
            $("#hero-switcher-1 span").fadeOut(300, function () {
                $(this).text(new1).fadeIn(300);
            });
        }, 3000);
    });

    $(function () {
        const wordsArray2 = ['collaborating', 'creating quality', 'asking questions', 'solving problems', 'documentation'];
        let current2 = wordsArray2[Math.floor(Math.random() * wordsArray2.length)]
        $("#hero-switcher-2 span").text(current2)
        setInterval(function () {
            let new2 = wordsArray2[Math.floor(Math.random() * wordsArray2.length)]
            while (new2 == current2) {
                new2 = wordsArray2[Math.floor(Math.random() * wordsArray2.length)]
            }
            current2 = new2;
            $("#hero-switcher-2 span").delay(500).fadeOut(300, function () {
                $(this).text(new2).fadeIn(300);
            });
        }, 3000);
    });

    var rellax = new Rellax('.rellax');
});