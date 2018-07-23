import objectFitImages from 'object-fit-images';
import svg4everybody from 'svg4everybody';
import './components.js';



$(function() {
  objectFitImages('img');

  svg4everybody({
    nosvg: true, // shiv <svg> and <use> elements and use image fallbacks
    polyfill: true // polyfill <use> elements for External Content
  });
});
