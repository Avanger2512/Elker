
const accordionBtn = $('.js-accordion-btn');

$(function() {

  accordionBtn.on('click touch', (e) => {
    let target = e.target;
    let parent = $(target).closest('.js-accordion');
    let content = parent.find('js-accordion-content');

    e.preventDefault();
    content.slideToggle('slow');
    parent.toggleClass('is-open');
  });
});
