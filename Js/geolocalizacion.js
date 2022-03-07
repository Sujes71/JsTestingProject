"use strict";

const geo = navigator.geolocation;

const position = (pos) => console.log(pos);
const err = (e) => console.log(e.message);
const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHighAccuracy: true
};

geo.getCurrentPosition(position, err, options);
//!WatchPosition()
