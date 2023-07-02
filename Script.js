function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var kelvinInput=document.getElementById('kelvin');

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(2);
        kelvinInput.value=(celsius+273.15).toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        kelvinInput.value=(((fahrenheit+32)*5/9)+273.15).toFixed(2);
    }
    else if(!isNaN(kelvin))
    {
      celsiusInput.value =(kelvin - 273.15).toFixed(2);
      fahrenheitInput.value =(((kelvin - 273.15)*9/5)+32).toFixed(2);
    }

}
function resetTemperature()
{
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  var kelvinInput=document.getElementById('kelvin');
  celsiusInput.value='';
  fahrenheitInput.value='';
  kelvinInput.value='';
}
