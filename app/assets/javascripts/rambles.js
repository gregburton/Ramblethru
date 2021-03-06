$(document).ready(function(){
  $(function(){
    var stickyHeaderTop = $('.ramble-notes').offset().top;  // JS for note form/area keeping with page
    $(window).scroll(function(){
      if( $(window).scrollTop() > stickyHeaderTop ) {
        $('.ramble-notes').css({position: 'fixed', top: '0px'});
        $('.end').css('display', 'block');
      } else {
        $('.ramble-notes').css({position: 'static', top: '0px'});
        $('.end').css('display', 'none');
      }
    });
  });
});

$(document).bind("ajax:complete", function(event,xhr,status){
  if($("#submit_note").length > 0) {
    $('#note_title').val('');  // resets all note form fields to blank upon note submit
    $('#note_address').val('');
    $('#note_body').val('');
    $('#note_url').val('');
    $('#note_tag_list').val(destination);
  }
});