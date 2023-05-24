"use strict";

$(function () {
  var contents = $("#codeup").html();
  alert(contents);
  alert("The DOM has finished loading!");
  // ---created a variable named chicken that is equal to the HTML class named chicken
  var chicken = $(".chicken");
  // console.log(chicken.text());  here i logged in the console using .text to show what had the class of chicken, turned out to be home and contact.
  // --- then I called the variable, used .html to print the word chicken into the document which changed the original words of Home & Contact to chicken.
  chicken.html("chicken");

  // created a variable named pink, and made it equal to the id of pink in my HTML file.
  var pink = $("#pink");
  pink.html("pink,pink,pink,pink,pink!");
  // Called the variable named pink and used .html to change the original text to "pink,pink,pink,pink,pink!"

  //------------------Class Selectors----------------------
  //updated html so 3 elements have the same class of 'codeup'

  $(".codeup").css("border", "2px solid #FFD1DC");
  // $(".codeup").css("background-color", "#D0F0C0");
  //   $(".codeup").css("border", "2px solid #FFD1DC", "background-color", "#D0F0C0"); DOES NOT WORK! must be separate.

  //-----------Element Selectors/Multiple Selectors----------------------------
  $("p").css("font-size", "20px");
  $("h1, p, li").css("background-color", "#C7EA46");

  var guts = $("#codeup").html();
  alert(guts);
});
