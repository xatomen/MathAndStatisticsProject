var funcion;
let error;
let a;
let b;
let n;
let x;
let dec;
let x_var;
let e;
let f_a;
let f_b;
let f_x;
const euler = 2.71828;

function getData(){
    funcion = document.getElementById("funcion").value;
    error = Number(document.getElementById("error").value);     
    a = Number(document.getElementById("li").value);
    b = Number(document.getElementById("ls").value);
    dec = Number(document.getElementById("dec").value);
    console.log("funcion: ", funcion, "\t error: ", error);
    console.log(a);
    console.log(euler);
}

function evaluar(x){
    e=euler;
    // console.log(funcion_eval(x));
    return eval(funcion);
}

function executeRegulaFalsi(){
    getData();
    n=0;

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);

    let row_1 = document.createElement('tr');

    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "n";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "a";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "b";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "x";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "f(a)";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "f(b)";
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "|f(x)|";
    // let heading_8 = document.createElement('th');
    // heading_8.innerHTML = "(b-a)/2**n";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    // row_1.appendChild(heading_8);
    thead.appendChild(row_1);

    console.log("n\ta\tb\tx_var\tf(a)\tf(b)\tf(x)\t(b-a)/2^n")
    while(((b-a)/2>error/2)){
        n++;

        a = Number(a.toFixed(dec));
        b = Number(b.toFixed(dec));

        f_a = Number(evaluar(a).toFixed(dec));
        f_b = Number(evaluar(b).toFixed(dec));

        x_var=a-((b-a)*f_a)/(f_b-f_a);
        x_var=Number(x_var.toFixed(dec));

        f_x = Number(evaluar(x_var).toFixed(dec));
        
        console.log(x_var);
        console.log(n,"|",a,"|",b,"|",x_var,"|",f_a,"|",f_b,"|",f_x,"|",(b-a)/2);
        let row_n = document.createElement('tr');

        let row_n_data_1 = document.createElement('td');
        row_n_data_1.innerHTML = n;

        let row_n_data_2 = document.createElement('td');
        row_n_data_2.innerHTML = a;

        let row_n_data_3 = document.createElement('td');
        row_n_data_3.innerHTML = b;

        let row_n_data_4 = document.createElement('td');
        row_n_data_4.innerHTML = x_var;

        let row_n_data_5 = document.createElement('td');
        row_n_data_5.innerHTML = f_a;

        let row_n_data_6 = document.createElement('td');
        row_n_data_6.innerHTML = f_b;

        let row_n_data_7 = document.createElement('td');
        row_n_data_7.innerHTML = f_x;

        // let row_n_data_8 = document.createElement('td');
        // row_n_data_8.innerHTML = (b-a)/2;

        row_n.appendChild(row_n_data_1);
        row_n.appendChild(row_n_data_2);
        row_n.appendChild(row_n_data_3);
        row_n.appendChild(row_n_data_4);
        row_n.appendChild(row_n_data_5);
        row_n.appendChild(row_n_data_6);
        row_n.appendChild(row_n_data_7);
        // row_n.appendChild(row_n_data_8);
        tbody.appendChild(row_n);
        
        if(f_a*f_x<0){
            a=a;
            b=x_var;
        }
        else{
            a=x_var;
            b=b;
        }
        if(f_x==0 || Math.abs(f_x)<error){break;}
    }
    
    return console.log("Resultado: x=",x_var);
}