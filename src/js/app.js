import objectFitImages from 'object-fit-images';
import svg4everybody from 'svg4everybody';
import './components.js';



$(function() {
  objectFitImages();

  svg4everybody({
    nosvg: true,
    polyfill: true
  });
});
