$(document).ready(function () {

  $('#turnOn').on('click', function () {
    writeToIot(1);
  });

  $('#turnOff').on('click', function () {
    writeToIot(0);
  });


  function writeToIot(state) {
    $.post("/iot/" + state, function (data) {
      if (data === "1") {
        setOn();
      } else {
        setOff();
      }
    });
  }

  function getState() {

  }

  function getInit() {
    $.get("/iot", function (data) {
      if (data === "1") {
        setOn();
      } else {
        setOff();
      }
    });
  }

  function setOn() {
    $('#current-status').removeClass('alert-danger');
    $('#current-status').addClass('alert-success');
  }

  function setOff() {
    $('#current-status').removeClass('alert-success');
    $('#current-status').addClass('alert-danger');
  }

  getInit();

});