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
    $("#output").text(result);
  });
});
