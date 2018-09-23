//BackEndLogic
function convert_kg_lb(number) {
    return number*2.20462;
}

function convert_lb_kg(number) {
  return number/2.20462;
}

function convert_g_lb(number) {
  return number*0.00220462;
}

function convert_lb_g(number) {
  return number/0.00220462;
}

function convert_gallons_to_liters(number) {
  return number*3.78541;
}

//frontEndLogic
$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var iKg_lb = parseInt($("#kg_lb").val());
    var result = convert_kg_lb(iKg_lb);
    $("#output").text(result + " lbs.");
  });
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var iLb_kg = parseInt($("#lb_kg").val());
    var result = convert_lb_kg(iLb_kg);
    $("#output").text(result + " kgs.");
  });
  $("#formThree").submit(function(event) {
    event.preventDefault();
    var iG_lb = parseInt($(g_lb).val());
    var result = convert_g_lb(iG_lb);
    $("#output").text(result + " lbs.");
  });
  $("#formFour").submit(function(event) {
    event.preventDefault();
    var iLb_g = parseInt($("#lb_g").val());
    var result = convert_lb_g(iLb_g);
    $("#output").text(result + " grams.");
  });
  $("#formFive").submit(function(event) {
    event.preventDefault();
    var igallonsToLiters = parseInt($("#gallonsToLiters").val());
    var result = convert_gallons_to_liters(igallonsToLiters);
    $("#output").text(result + " liters.");
  });
});
