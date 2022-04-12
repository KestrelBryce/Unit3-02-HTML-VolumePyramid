  /* This function calculates the volume of a pyramid. 
*/

function Calculate_volume() {
  // input
  let Side_a = parseInt( (document.getElementById('Side-a-here').value));
  
  let Height = parseInt( (document.getElementById('Height-here').value));
  
  // naming constants and stuff
  const Third_rate = 0.3
  
  let Pyramid_volume = Side_a * Side_b * Third_rate * Height;
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Pyramid-results').innerHTML = "Your volume rounded to the nearest hundreth is " + Pyramid_volume.toFixed(2) + "cm."


  // unused code
  // let Side_b = parseInt( (document.getElementById('Side-b-here').value));

}