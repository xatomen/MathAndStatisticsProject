var funcion;
var error;
var a;
var b;
var i;

function getData(){
    funcion = document.getElementById("funcion").value;
    error = document.getElementById("error").value;     
    a = document.getElementById("li").value;
    b = document.getElementById("ls").value;
    console.log("funcion: ", funcion, "\t error: ", error);
}

function executeBiseccion(){
    getFuncion();
    getError();
    i=0;
    console.log("n\ta\tb\tf(a)\tf(b)\tf(x)\t(b-a)/2^n")
    while((a+b)/2>error){
        console.log(n,"\t",a,"\t",b);
        
        i++;
    }

}