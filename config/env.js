(function() {
  var isEmpty = function(the) {
    return the === '' || the === null || the === undefined ? true : false;
  };

  var getQuery = function() {
    return window.location;
  };

  var getParam = function(variable) {
    var vars = getQuery();
    return vars[variable];
  };

  var getHost = function() {
    let _hostname   = getParam('hostname');
    let _port = getParam('port');

    let hostname    = isEmpty(_hostname) ? 'localhost' : _hostname;
    let port  = isEmpty(_port) ? 6888 : _port;

    if(hostname == "localhost") {
      return "";
    }

    return ('//' + hostname + ':' + port);
  };

  window.devApiHost = getHost();
}());
