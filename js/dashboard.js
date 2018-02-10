"use strict";
//global

//variables
  var day = true;

$(document).ready(function(){
//local

//variables
  var portHeight = $("#port").height();
    var portWidth;

//on load
  updatePort();
  updateDebug();
  dawn();

//event listeners
  //resize event
  $(window).resize(function() {
    portHeight = $("#port").height();
    updatePort();
    updateDebug();
    if ($(window).width() < 768) {
        //switch to mobile
    } else {
       //back to web dashboard
    }
  });

  //click and hover events
  $("#oak").click(oakSelect);
    $("#oak").hover(function(){
      this.src = "images/oak_selected.png";
    });
    $("#oak").mouseleave(function(){
      this.src = "images/oak.png";
    });
  $("#house").click(houseSelect);
    $("#house").hover(function(){
      this.src = "images/house_selected.png";
    });
    $("#house").mouseleave(function(){
      this.src = "images/house.png";
    });
  $("#comEd").click(comEdSelect);
    $("#comEd").hover(function(){
      this.src = "images/comEd_selected.png";
    });
    $("#comEd").mouseleave(function(){
      this.src = "images/comEd.png";
    });
  $("#night_button").click(function(){
    if(day){
      nightClick();
    }
    });
    $("#night_button").hover(function(){
      if(day){
        this.src = "images/night_button_selected.png";
      }
    });
    $("#night_button").mouseleave(function(){
      if(day){
        this.src = "images/night_button.png";
      }
    });
  $("#day_button").click(function(){
    if(!day){
      dayClick();
    }
    });
    $("#day_button").hover(function(){
      if(!day){
        this.src = "images/day_button_selected.png";
      }
    });
    $("#day_button").mouseleave(function(){
      if(!day){
        this.src = "images/day_button.png";
      }
    });

//functions
  function updatePort(){
    portWidth = 1.333*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function updateDebug(){
    $("#debug").html("portal height: " + portHeight + "px </br> portal width: " + portWidth + "px");
  }

  function dawn(){
    $("#port").prepend("<img id='oak' src='images/oak.png' />");
    $("#port").prepend("<img id='house' src='images/house.png' />");
    $("#port").prepend("<img id='comEd' src='images/comEd.png' />");
    $("#port").prepend("<img id='content_box' src='images/content_box_day.png' />");
    $("#port").prepend("<img id='day_button' src='images/day_button_selected.png' />");
    $("#port").prepend("<img id='night_button' src='images/night_button.png' />");
  }

  function oakSelect(){
    $("#debug").html("oakSelect");
    $("#content_box").attr("src", "images/content_box_oak.png");
  }

  function houseSelect(){
    $("#debug").html("houseSelect");
    $("#content_box").attr("src", "images/content_box_house.png");
  }

  function comEdSelect(){
    $("#debug").html("comEdSelect");
    $("#content_box").attr("src", "images/content_box_comEd.png");
  }

  function nightClick(){
    day = false;
    $("#night_button").attr("src", "images/night_button_selected.png");
    $("#day_button").attr("src", "images/day_button.png");
    $("#debug").html("day = false");
  }

  function dayClick(){
    day = true;
    $("#day_button").attr("src", "images/day_button_selected.png");
    $("#night_button").attr("src", "images/night_button.png");
    $("#debug").html("day = true");
  }


});
