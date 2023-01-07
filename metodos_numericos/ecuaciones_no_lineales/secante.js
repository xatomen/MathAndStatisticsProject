var funcion;
let error;
let n;
let x;
let x_n;
let x_n1
let x_n0;
let dec;
let e;
let f_x_n;
let f_x_n1;
let f_x_n0;
const euler = 2.71828;

function getData(){
    funcion = document.getElementById("funcion").value;
    error = Number(document.getElementById("error").value);   
    x_n0 = Number(document.getElementById("x0").value);
    x_n = Number(document.getElementById("x1").value);
    dec = Number(document.getElementById("dec").value);
    console.log("funcion: ", funcion, "\t error: ", error);
    console.log(euler);
}

function evaluar(x){
    e=euler;
    // console.log(funcion_eval(x));
    return eval(funcion);
}

function executeSecante(){
    getData();
    n=0;
    let div = document.createElement('div');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.className="card-header";
    let tbody = document.createElement('tbody');
    tbody.className="card-body";
    
    div.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    
    document.getElementById('tabla').appendChild(table);

    let row_1 = document.createElement('tr');

    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "n";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "x_n";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "x_n+1";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "f(x_n)";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "f(x_n+1)";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "|x_n+1 - x_n|";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    thead.appendChild(row_1);

    console.log("n\ta\tb\tx_var\tf(a)\tf(b)\tf(x)\t(b-a)/2^n")
    while(n>=0){
        if(n==0){
            x_n1 = Number(x_n.toFixed(dec));
            x_n = Number(x_n0.toFixed(dec));
            
            f_x_n = Number(evaluar(x_n).toFixed(dec));
            f_x_n1 = Number(evaluar(x_n1).toFixed(dec));
            
        }
        else{
            
            x_n0 = Number(x_n.toFixed(dec));

            x_n = Number(x_n1.toFixed(dec));
            
            f_x_n0 = Number(evaluar(x_n0).toFixed(dec));
            f_x_n = Number(evaluar(x_n).toFixed(dec));
        
            x_n1= x_n-f_x_n*(x_n-x_n0)/(f_x_n-f_x_n0);
            x_n1=Number(x_n1.toFixed(dec));
        
            f_x_n1 = Number(evaluar(x_n1).toFixed(dec));
        }
        
        
        let row_n = document.createElement('tr');

        let row_n_data_1 = document.createElement('td');
        row_n_data_1.innerHTML = n;

        let row_n_data_2 = document.createElement('td');
        row_n_data_2.innerHTML = x_n;

        let row_n_data_3 = document.createElement('td');
        row_n_data_3.innerHTML = x_n1;

        let row_n_data_4 = document.createElement('td');
        row_n_data_4.innerHTML = f_x_n;

        let row_n_data_5 =  document.createElement('td');
        row_n_data_5.innerHTML = f_x_n1;

        let row_n_data_6 = document.createElement('td');
        row_n_data_6.innerHTML = Number(Math.abs(x_n1-x_n).toFixed(dec));

        row_n.appendChild(row_n_data_1);
        row_n.appendChild(row_n_data_2);
        row_n.appendChild(row_n_data_3);
        row_n.appendChild(row_n_data_4);
        row_n.appendChild(row_n_data_5);
        row_n.appendChild(row_n_data_6);
        tbody.appendChild(row_n);
        n++;
        if(Math.abs(x_n1-x_n)<error){
            break;
        }
    }
    
    return console.log("Resultado: x=",x_var);
}