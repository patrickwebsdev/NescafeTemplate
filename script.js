const scrollPage = new ScrollPage("#screen__scroll", {
      // easing functions
      animation: "easeInSine",
      // animation speed
      time: 500,
      // show/hide scrollbar
      scrollBar: false,
      // css class name for active page element
      pageSelectedClass:"active",
      // css class name for active menu item
      menuSelectedClass:"active",
      // trigger scrollpage if scrolling content reach bottom or top
      triggerScrollChildren: false,
      // relative to parent height or nor
      relative: false,
});
scrollPage.onFinish(function(e){
    const dots = document.querySelectorAll('.screen__dot');
    Array.from(dots).forEach((dot) => {
        dot.classList.remove('screen__dot--active');
    })
    dots[e.currentPageName-1].classList.add('screen__dot--active');
});