"use strict";

caches.open("archivos-estaticos").then(cache => {
    //cache.addAll("cache.html");
    //cache.addAll(["cache.html", "/Js/cache.js"]);
    /*cache.match("cache.html").then(archivo => {
        console.log(archivo)
    })*/
    /*fetch("cache.html").then(res => {
        cache.put("cache.html", res);
    });*/
    //cache.delete("cache.html");
    /*cache.keys().then(res => {
        console.log(res)
    })*/
})
