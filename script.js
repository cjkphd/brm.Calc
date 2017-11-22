/*convert a number variable to string
    variable.toString();*/

/*convert string to a number
    Number(variable);
    parseInt(variable);*/

/*var ATNBS = 10 + number(
$('#output').val() )
var ATN = 10 + value
var zINAI = number('0');*/
value = '7'

$('#clear').click(
function(e) {
  e.preventDefault();
  $('#op').val(' Canister Emptied');
  
});

var seven = 7
var addStr = seven + seven

$('#num7').click(
  function(e){
    e.preventDefault();
    $('#op').val('7');
    seven = seven.toString();

  
    console.log(value + seven)
  
});

var eight = 8
var addStr = eight + seven

$('#num8').click(
  function(e){
    e.preventDefault();
    $('#op').val('8');
    eight = eight.toString();
    
    
    console.log(typeof eight)

});

$('#num9').click(
  function(e){
    e.preventDefault();
    $('#op').val('9');

});

$('#num4').click(
  function(e){
    e.preventDefault();
    $('#op').val('4');

});

$('#num5').click(
  function(e){
    e.preventDefault();
    $('#op').val('5');

});

$('#num6').click(
  function(e){
    e.preventDefault();
    $('#op').val('6');

});

$('#num1').click(
  function(e){
    e.preventDefault();
    $('#op').val('1');

});

$('#num2').click(
  function(e){
    e.preventDefault();
    $('#op').val('2');

});

$('#num3').click(
  function(e){
    e.preventDefault();
    $('#op').val('3');

});

$('#num0').click(
  function(e){
    e.preventDefault();
    $('#op').val('0');
    
});

$('#add').click(
  function(e){
    e.preventDefault();
    $('#op').val('+');

  });