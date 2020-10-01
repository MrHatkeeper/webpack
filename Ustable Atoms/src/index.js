let fieldRow = [0];
let field = [[]];



function vauleCheck(a,b){

            if(field[a][b] == 4){
                field[a][b] = 0;
                field[a + 1][b] = parseInt(field[a + 1][b] + 1);
                field[a - 1][b] = parseInt(field[a - 1][b] + 1);
                field[a][b + 1] = parseInt(field[a][b + 1] + 1);
                field[a][b - 1] = parseInt(field[a][b - 1] + 1);
    }
}


//zísávání pozice i, j určitých čudlítek
function clickOn(x, y) {
    field[x][y] = field[x][y] + 1;
    console.log(field);
}





//nová hra
function newGame(){
    fieldRow = [0];
    field = [[]];
    let x = document.getElementById("delka").value;

    for(let i = 0; i < x; i++){
        for(let j = 0; j < x - 1; j++){
                fieldRow.push(0);
        }
        field.push(fieldRow);
        fieldRow = [[]];
    }
    field.shift();
    console.log(field);


    renderMap();

    //přizazování Evenet Listenerů k určitým elementům
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x;j++){
            document.getElementsByClassName("buttonCheck")[i * x + j].addEventListener("click", function () {
                clickOn(i,j);
                for (let i = 0; i < x; i++){
                    for(let j = 0; j < x; j++){
                        vauleCheck(i,j);
                    }
                }
            });
        }
    }



}





//vykreslování mapy
function renderMap(){
    document.getElementById("gameField").innerHTML = "";
    let table = "<table id=pole>";
    let row = "";
    for(let i = 0; i <field.length; i++){
        table += "<tr>"
        for(let j = 0; j < field[i].length; j++){
           row += "<td class= 'buttonCheck' id='buttonValueOne'></td>";

        }
        row += "</tr>";
        table += row;
        row = "";
    }
    table += "</table>";



    document.getElementById("gameField").innerHTML = table;
}

























