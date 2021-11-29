"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var imgLightBox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(imgLightBox, {
    inDuration: 500,
    outDuration: 500
  });
});