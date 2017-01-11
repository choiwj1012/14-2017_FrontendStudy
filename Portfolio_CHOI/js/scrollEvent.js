$(document).ready(function(){

   // 브라우저의 높이를 section의 높이로 지정
   var sectionHeight = $(window).height();
   $("article").height(sectionHeight);

   // 브라우저 사이트가 변경될 때마다 section 높이를 브라우저 높이로 변경
   $(window).on("resize", function(){

    var sectionHeight = $(window).height();
    $("article").height(sectionHeight);

  });

  // 스크롤시 해당 영역 메뉴 활성화
  $(window).on("scroll", function(){

    var sectionHeight = $(window).height();
    var scroll = $(window).scrollTop();

    for(var i=0; i<6; i++){

      if(sectionHeight * i <= scroll && scroll < sectionHeight * (i+1)){
        $("#main_navigation ul li a").removeClass();
        $("#main_navigation ul li a").eq(i).addClass("on");
      }

    }

  });

  // 스크롤시 화면 영역으로 자동 화면 스크롤
  $("article").on("mousewheel", function(event, delta){

    if(delta > 0){

      var prev = $(this).prev().offset().top;

      $("html, body").stop().animate({
        "scrollTop" : prev
      }, 1400, "easeOutBounce");

    } else if(delta < 0){

      var next = $(this).next().offset().top;

      $("html, body").stop().animate({
        "scrollTop" : next
      }, 1400, "easeOutBounce");

    }

  });

  // 네비게이션 클릭시 부드럽게 이동
  $("#main_navigation ul li a").on("click", function(e){

    e.preventDefault();

    var target = $(this).attr("data-href");

    $("html, body").stop().animate({
      "scrollTop" : $(target).offset().top
    }, 1000, "easeOutBounce");

  });

  // 이동 버튼 클릭시 부드럽게 이동
  $("article button a").on("click", function(e){

    e.preventDefault();

    var target = $(this).attr("data-href");

    $("html, body").stop().animate({
      "scrollTop" : $(target).offset().top
    }, 1000, "easeOutBounce");

  });

});
