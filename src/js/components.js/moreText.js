import shave from 'shave';

const BODY = $('body');
$(function() {

  shave('.js-show', $('.js-show').data('height'), {
    character: '... more',
    classname: 'js-hidden-text'
  });


  BODY.on('click', '.js-shave-char', function() {
    $(this).hide();
    $(this)
      .siblings('.js-hidden-text')
      .removeAttr('style');
  });


});
