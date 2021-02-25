/*global $, console*/

$(function () {
   
    'use strict';
    
    $('.member1').click(function () {
        $('.profile1').toggleClass('pCard_on');
    });
    $('.member2').click(function () {
        $('.profile2').toggleClass('pCard_on');
    });
    $('.member3').click(function () {
        $('.profile3').toggleClass('pCard_on');
    });

});