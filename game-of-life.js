/* game of life v1.0.2 by Santiago Bernal - @santiaguf
v1.0.0 - Functional game
v1.0.1 - countNeighbors and ChangeCell functions
v1.0.2 - printGame function */


function gameOfLife(initialGame) {
  let resultGame =  [[,,],[,,],[,,]];

  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      neighbors = countNeighbors(i,j,initialGame);
      changeCell(neighbors, initialGame, resultGame,i,j);
    }
  }

  printGame(initialGame, "initial game");
  printGame(resultGame, "next game");
}

function countNeighbors(i,j,initialGame){
    let neighbors = 0;
    for(let k=i-1;k<=i+1;k++){
      for(let l=j-1;l<=j+1;l++){
        if(k <0 || k>2 || l <0 || l>2 || (k == i && l == j) ){
          //nothing
        }else{
          neighbors += initialGame[k][l];
        }
      }
    }
    return neighbors;
}

function changeCell(neighbors, initialGame, resultGame,i,j){
    if(initialGame[i][j] == 0 && neighbors == 3){
      //revive cell
      resultGame[i][j] = 1;
    }
    else if(initialGame[i][j] == 1 && (neighbors < 2 || neighbors > 3)){
      //kill cell
      resultGame[i][j] = 0;
    }else{
      //same status
      resultGame[i][j] = initialGame[i][j];
    }
}

function printGame(game,title){
  //show results
  console.log(title);
  let builder;
  for(let m=0;m<3;m++){
    builder = "";
    for(let n=0;n<3;n++){
      builder = builder + "[" +game[m][n]+"]";
    }
    console.log(builder);
  }
  console.log("");
}

//let the game begin
let game = [[1,0,0],[0,1,1],[1,1,0]];
gameOfLife(game);
