(function (global) {
  var ajaxutil = {};

  //Make HTTP request
  function getHttpRequest() {
    if (window.XMLHttpRequest) return new XMLHttpRequest();
    else {
      global.alert("Your browser doesn't support AJAX");
      return null;
    }
  }

  //Make a GET Request
  ajaxutil.sendGetRequest = function (requestUrl, responseHandler) {
    var request = getHttpRequest();
    request.onreadystatechange = function () {
      handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); //Message --- send something only during POST request
  };

  //Handling Response
  function handleResponse(request, responseHandler) {
    if (request.readyState === 4 && request.status === 200) {
      responseHandler(request);
    }
  }

  global.ajaxsetup = ajaxutil;
})(window);
