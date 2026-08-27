/*
 * Greedy Navigation disabled — site uses a simple always-visible horizontal nav.
 * Keep this file so npm build:js still resolves; only maintain masthead padding.
 */
(function () {
  function updateMastheadPadding() {
    var masthead = document.querySelector(".masthead");
    if (!masthead) return;
    document.body.style.paddingTop = masthead.offsetHeight + "px";
  }

  if (typeof window.jQuery !== "undefined") {
    window.jQuery(window).on("resize", updateMastheadPadding);
    window.jQuery(updateMastheadPadding);
  } else {
    window.addEventListener("resize", updateMastheadPadding);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", updateMastheadPadding);
    } else {
      updateMastheadPadding();
    }
  }
})();
