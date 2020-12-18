// TABS JS

var tabsLinks = $(".tabslinks");
var tabContent = $(".tabcontent");

$.each( tabsLinks, function( linkIndex) {
  var linksId= $(this).attr("id");

  $(this).click(function() {

    // BUTTON TOP BORDER CODE.
    if(tabsLinks.hasClass("active")) {
      $(".tabslinks").removeClass("active");
      $(this).addClass("active");
    }

    // CONTENT ACTIVE CODE.
    $.each( tabContent, function( conIndex) {
      var contentId= $(this).attr("id");
      if (linksId == contentId) {
        $(".tabcontent").removeClass("toggle");
        $(this).addClass("toggle");
      }
    });

  });
});

