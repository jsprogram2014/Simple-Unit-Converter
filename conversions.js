function tempChange(){
    var celsius=document.getElementById("Celsius");
    var fahr=(celsius.value)*(9/5) + 32 ;
    var fahrenheit=document.getElementById("Fahrenheit");
    fahrenheit.value=fahr;

    return false;
}

function weightChange(){
    var kgs=document.getElementById("Kilogram");
    var pds=kgs.value * 2.2;
    document.getElementById("Pounds").value=pds;
}

function distChange(){
    var kms=document.getElementById("kilometer");
    var miless=kms.value * 0.62137;
    document.getElementById("miles").value=miless;
}