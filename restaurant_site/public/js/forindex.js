(function (global) {
  var total = {};
  var urlhome = "folder_dynamic/dynamic_index.html";

  var insertHtml = function (selector, html) {
    var target = document.getElementById(selector);
    target.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html =
      "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("maincontentdynamic");
    ajaxsetup.sendGetRequest(urlhome, function (response) {
      document.getElementById("maincontentdynamic").innerHTML =
        response.response;
    });
  });

  global.$total = total;
})(window);
