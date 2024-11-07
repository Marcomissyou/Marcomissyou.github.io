(() => {
  // <stdin>
  $(document).ready(function() {
    "use strict";
    const menuMainTarget = $("#header").children(".menu-main");
    const menuMainOpenBtn = $("#header").find(".menu-main-toggle").children(".open");
    const menuMainCloseBtn = $("#header").find(".menu-main-toggle").children(".close");
    const sider = $("#stager").find("aside");
    const siderOpenBtn = $("#stager").find(".toggles").children(".sider-open");
    const siderCloseBtn = $("#stager").find(".toggles").children(".sider-close");
    menuMainOpenBtn.click(function() {
      menuMainTarget.slideDown(500);
      menuMainCloseBtn.show();
      menuMainOpenBtn.hide();
      sider.animate({ left: "-100vw" });
      siderOpenBtn.show();
      siderCloseBtn.hide();
    });
    menuMainCloseBtn.click(function() {
      menuMainTarget.slideUp(500);
      menuMainOpenBtn.show();
      menuMainCloseBtn.hide();
    });
    siderOpenBtn.click(function() {
      sider.animate({ left: 0 });
      siderCloseBtn.show();
      siderOpenBtn.hide();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      menuMainTarget.slideUp(500);
      menuMainOpenBtn.show();
      menuMainCloseBtn.hide();
    });
    siderCloseBtn.click(function() {
      sider.animate({ left: "-100vw" });
      siderOpenBtn.show();
      siderCloseBtn.hide();
    });
    const menuTitleClose = $(".menu-tree").find(".close");
    const menuTitleOpen = $(".menu-tree").find(".open");
    menuTitleOpen.click(function() {
      $(this).hide();
      $(this).siblings(".close").show();
      $(this).parent().next(".menu-tree").show();
      $(this).parent().parent().siblings(".menu-tree-title").children(".menu-tree").hide();
      $(this).parent().parent().siblings(".menu-tree-title").children(".container").children(".close").hide();
      $(this).parent().parent().siblings(".menu-tree-title").children(".container").children(".open").show();
    });
    menuTitleClose.click(function() {
      $(this).hide();
      $(this).siblings(".open").show();
      $(this).parent().next(".menu-tree").hide();
    });
    const itemActive = $("#menutree").find(".active");
    itemActive.parent().parents(".menu-tree").show();
    itemActive.parents().prev(".container").find(".open").hide();
    itemActive.parents().prev(".container").find(".close").show();
  });
  $(window).scroll(function() {
    var distance = $(this).scrollTop();
    if (distance > 100) {
      $(".toggles").find(".totop").show();
    } else {
      $(".toggles").find(".totop").hide();
    }
  });
})();
