// ==UserScript==
// @name         Show all toolbar buttons of PDF.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       azettl
// @match        http*://*/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.toolbarButton').each(function (index, value) {
        $(this).removeClass('hidden');
    });
})();
