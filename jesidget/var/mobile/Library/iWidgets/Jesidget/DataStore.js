$( document ).ready(function() {
  //////////////////////////////
  // Inital Animation
  
  //////////////////////////////
  // Check browser support
  if (typeof(Storage) != "undefined") {
    if ("noteID" in window && noteID != "None") {
      $("#myText").val(localStorage.getItem(noteID));
      $("#name").html(noteID);
      if (localStorage.getItem(noteID+"-NOT_A_TITLE-ITICOY") == "yes") { // Is The Item Checked Off Yet?
        $('#check-not_done').fadeOut();
        $('#check-done').fadeIn();
      }
    } else {
      $("#myText").val("Remember, this note is not persistant (Ie. it will be erased after a respring/reboot). To make a persistant note, make sure to specify a note name when adding it to the lockscreen."); 
      $("#name").html("Temporary Note");
    }
  } else {
    $("#myText").val("Sorry, your browser does not support Web Storage...");
  }  
  
  //////////////////////////////
  // Change note color
  if ("noteColor" in window) {
    switch(noteColor) {
      case 1: //Blue
        $('#myText').css({background:"linear-gradient(#afb9f9, #8d9bf7)"});
      break;
      case 2: //Green
        $('#myText').css("background","linear-gradient(#def9af, #d0f78d)");
      break;
      case 3: //Pink
        $('#myText').css("background","linear-gradient(#f9afb9, #f78d9b)");
      break;
      case 4: //Purple
        $('#myText').css("background","linear-gradient(#caaff9, #b48df7)");
      break;
      case 5: //Teal
        $('#myText').css("background","linear-gradient(#aff9ef, #8df7e9)");
      break;
      default:
        $('#myText').css("background","linear-gradient(#F9EFAF, #F7E98D)");
      break;
    }
  }
  
  //////////////////////////////
  //Click Handlers
  $('#check-not_done').click(function() {
    alert("Congratulations! You did it!");
    $('#check-not_done').fadeOut();
    $('#check-done').fadeIn();
    localStorage.setItem(noteID+"-NOT_A_TITLE-ITICOY", "yes"); // Is The Item Checked Off Yet?
  });
  
  $('#check-done').click(function() {
    $('#check-done').fadeOut();
    $('#check-not_done').fadeIn();
    localStorage.setItem(noteID+"-NOT_A_TITLE-ITICOY", "no"); // Is The Item Checked Off Yet?
  });

  //////////////////////////////
  // Save on Blur
  $('#myText').blur(function() {
    if ("noteID" in window && noteID != "None") {
      localStorage.setItem(noteID, $(this).val());
    } else {
      // Do Nothing
    }
  });
  
});




//setInterval(function() {
//  alert("Left: "+$("#myText").position().left()+" Top: "+ $("#myText").position().top());
//}, 1000);