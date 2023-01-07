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
let quantity;
var matrix;
const euler = 2.71828;

function evaluar(x){
    e=euler;
    // console.log(funcion_eval(x));
    return eval(funcion);
}

function displayMatrix(){
    quantity = Number(document.getElementById("quantity").value);
    
    //Creamos la matriz
    // for(let i=0; i<quantity; i++){
    //     for(let j=0; j<quantity+1; j++){
    //         matrix[i] = new matrix[j]
    //     }
    // }
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    /*CREAR MATRIZ!!!!!!!!!!!!!!!!!---------------------------------------------------------------*/
    
    matrix = new Array(quantity+1);
    for(let j=0; j<quantity; j++){
        matrix[j] = new Array(quantity);
    }

    let div = document.createElement('div');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.className="card-header";
    let tbody = document.createElement('tbody');
    tbody.className="card-body";

    div.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    
    document.getElementById('llenar_datos').appendChild(table);

    let row_1 = document.createElement('tr');
    let header;
    for(let i=0; i<quantity+1; i++){
        if(i==quantity){
            header = document.createElement('th');
            header.innerHTML = "= num";
        }
        else{
            header = document.createElement('th');
            header.innerHTML = "x"+i;
        }
        row_1.appendChild(header);
    }
    thead.appendChild(row_1);

    let row_n;
    let row_n_box;
    let textbox;
    for(let i=0; i<quantity; i++){
        row_n = document.createElement('tr');
        for(let j=0; j<quantity+1; j++){
            //generamos columna
            textbox = document.createElement("input");
            textbox.setAttribute("type", "text");
            textbox.setAttribute("id","["+i+"]["+j+"]");
            row_n_box = document.createElement('th');
            row_n_box.appendChild(textbox);
            row_n.appendChild(row_n_box);
        }
        tbody.appendChild(row_n);
        //generamos fila
    }
    
    let row_btn = document.createElement('input');
    row_btn.setAttribute("type","button");
    row_btn.setAttribute("id","row_btn");
    row_btn.setAttribute("onclick","executeJacobi()");
    row_btn.setAttribute("class","btn btn-primary");
    row_btn.setAttribute("value","Calcular");
    tbody.appendChild(row_btn);
    
}

function executeJacobi(){
    //Leemos los datos de la matriz
    let dato;
    let id;
    for(let i=0; i<quantity; i++){
        for(let j=0; j<quantity+1; j++){
            id = "["+i.toString()+"]["+j.toString()+"]";
            // console.log(id);
            dato = document.getElementById(id).value;
            // console.log(dato);
            col[j] = dato;
        }

    }
}

function readI(str){
    i = str[1];
    return i;
}
function readJ(str){
    j = str[4];
    return j;
}