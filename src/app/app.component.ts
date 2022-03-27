import { Component, OnInit } from '@angular/core';
import { chessObj } from './models/chessObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chess-Engineer';
  cssTextImg:string = 'width: 90%;height: 90%;margin-top: 4%;';
  gameStatus = new Map();
  chessBoard = new Map();
  gameStatusArr:string[] = [];
  _isClicked = false;
  ngOnInit(){
    this.initializeAllBox();
  }
  /* Initialized Each Box ********************************************************************************************/
  boxInitialization(src:string,boxCode:string){
    var img = document.createElement("img");
    img.src = src; 
    img.style.cssText = this.cssTextImg;
    var ChessBox = document.getElementById(boxCode);
    ChessBox!.appendChild(img);
  }
/* Initialized Each Box ********************************************************************************************/
initializeAllBox(){

  this.chessBoard.set("18","black");
  this.chessBoard.set("28","white");
  this.chessBoard.set("38","black");
  this.chessBoard.set("48","white");
  this.chessBoard.set("58","black");
  this.chessBoard.set("68","white");
  this.chessBoard.set("78","black");
  this.chessBoard.set("88","white");
  this.chessBoard.set("17","white");
  this.chessBoard.set("27","black");
  this.chessBoard.set("37","white");
  this.chessBoard.set("47","black");
  this.chessBoard.set("57","white");
  this.chessBoard.set("67","black");
  this.chessBoard.set("77","white");
  this.chessBoard.set("87","black");
  this.chessBoard.set("16","black");
  this.chessBoard.set("26","white");
  this.chessBoard.set("36","black");
  this.chessBoard.set("46","white");
  this.chessBoard.set("56","black");
  this.chessBoard.set("66","white");
  this.chessBoard.set("76","black");
  this.chessBoard.set("86","white");
  this.chessBoard.set("15","white");
  this.chessBoard.set("25","black");
  this.chessBoard.set("35","white");
  this.chessBoard.set("45","black");
  this.chessBoard.set("55","white");
  this.chessBoard.set("65","black");
  this.chessBoard.set("75","white");
  this.chessBoard.set("85","black");
  this.chessBoard.set("14","black");
  this.chessBoard.set("24","white");
  this.chessBoard.set("34","black");
  this.chessBoard.set("44","white");
  this.chessBoard.set("54","black");
  this.chessBoard.set("64","white");
  this.chessBoard.set("74","black");
  this.chessBoard.set("84","white");
  this.chessBoard.set("13","white");
  this.chessBoard.set("23","black");
  this.chessBoard.set("33","white");
  this.chessBoard.set("43","black");
  this.chessBoard.set("53","white");
  this.chessBoard.set("63","black");
  this.chessBoard.set("73","white");
  this.chessBoard.set("83","black");
  this.chessBoard.set("12","black");
  this.chessBoard.set("22","white");
  this.chessBoard.set("32","black");
  this.chessBoard.set("42","white");
  this.chessBoard.set("52","black");
  this.chessBoard.set("62","white");
  this.chessBoard.set("72","black");
  this.chessBoard.set("82","white");
  this.chessBoard.set("11","white");
  this.chessBoard.set("21","black");
  this.chessBoard.set("31","white");
  this.chessBoard.set("41","black");
  this.chessBoard.set("51","white");
  this.chessBoard.set("61","black");
  this.chessBoard.set("71","white");
  this.chessBoard.set("81","black");

  this.gameStatusArr.push('11','21','31','41','51','61','71','81','12','22','32','42','52','62','72','82','17','27','37','47','57','67','77','87','18','28','38','48','58','68','78','88');
  this.gameStatus.set('whit-rook1','11');
  this.gameStatus.set('white-knight1','21');
  this.gameStatus.set('white-bishop1','31');
  this.gameStatus.set('white-queen','41');
  this.gameStatus.set('white-king','51');
  this.gameStatus.set('white-bishop2','61');
  this.gameStatus.set('white-knight2','71');
  this.gameStatus.set('white-rook2','81');
  this.gameStatus.set('white-pawn1','12');
  this.gameStatus.set('white-pawn2','22');
  this.gameStatus.set('white-pawn3','32');
  this.gameStatus.set('white-pawn4','42');
  this.gameStatus.set('white-pawn5','52');
  this.gameStatus.set('white-pawn6','62');
  this.gameStatus.set('white-pawn7','72');
  this.gameStatus.set('white-pawn8','82');
  this.gameStatus.set('black-pawn1','17');
  this.gameStatus.set('black-pawn2','27');
  this.gameStatus.set('black-pawn3','37');
  this.gameStatus.set('black-pawn4','47');
  this.gameStatus.set('black-pawn5','57');
  this.gameStatus.set('black-pawn6','67');
  this.gameStatus.set('black-pawn7','77');
  this.gameStatus.set('black-pawn8','87');
  this.gameStatus.set('black-rook1','18');
  this.gameStatus.set('black-knight1','28');
  this.gameStatus.set('black-bishop1','38');
  this.gameStatus.set('black-queen','48');
  this.gameStatus.set('black-king','58');
  this.gameStatus.set('black-bishop2','68');
  this.gameStatus.set('black-knight2','78');
  this.gameStatus.set('black-rook2','88');

  this.boxInitialization( "./assets/chess-rook2.png","11");
  this.boxInitialization( "./assets/chess-knight2.png","21");
  this.boxInitialization( "./assets/chess-bishop2.png","31");
  this.boxInitialization( "./assets/chess-queen2.png","41");
  this.boxInitialization( "./assets/chess-king2.png","51");
  this.boxInitialization( "./assets/chess-bishop2.png","61");
  this.boxInitialization( "./assets/chess-knight2.png","71");
  this.boxInitialization( "./assets/chess-rook2.png","81");
  this.boxInitialization( "./assets/chess-pawn2.png","12");
  this.boxInitialization( "./assets/chess-pawn2.png","22");
  this.boxInitialization( "./assets/chess-pawn2.png","32");
  this.boxInitialization( "./assets/chess-pawn2.png","42");
  this.boxInitialization( "./assets/chess-pawn2.png","52");
  this.boxInitialization( "./assets/chess-pawn2.png","62");
  this.boxInitialization( "./assets/chess-pawn2.png","72");
  this.boxInitialization( "./assets/chess-pawn2.png","82");
  this.boxInitialization( "./assets/chess-pawn.png","17");
  this.boxInitialization( "./assets/chess-pawn.png","27");
  this.boxInitialization( "./assets/chess-pawn.png","37");
  this.boxInitialization( "./assets/chess-pawn.png","47");
  this.boxInitialization( "./assets/chess-pawn.png","57");
  this.boxInitialization( "./assets/chess-pawn.png","67");
  this.boxInitialization( "./assets/chess-pawn.png","77");
  this.boxInitialization( "./assets/chess-pawn.png","87");
  this.boxInitialization( "./assets/chess-rook.png","18");
  this.boxInitialization( "./assets/chess-knight.png","28");
  this.boxInitialization( "./assets/chess-bishop.png","38");
  this.boxInitialization( "./assets/chess-queen.png","48");
  this.boxInitialization( "./assets/chess-king.png","58");
  this.boxInitialization( "./assets/chess-bishop.png","68");
  this.boxInitialization( "./assets/chess-knight.png","78");
  this.boxInitialization( "./assets/chess-rook.png","88");
}
/* Click Box *************************************************************************************************************/
boxClicked(code:string){
  if(this.gameStatusArr.includes(code)){                                          // check box if it has chessObj
    if(!this._isClicked){
      this._isClicked = true;
      let ChessBox = document.getElementById(code);                               // get the clicked box
      ChessBox!.style.cssText = 'background-color:green;';                        // green the clicked box
      let _name = this.getByValue(this.gameStatus,code)!;                         // search for the name of the clicked chessObj
      console.log(_name);
      console.log(parseInt(code));
      let _chessOj = new chessObj(_name,parseInt(code),this.gameStatusArr);       // create chessObj
      _chessOj.suggestedMoves();      
      _chessOj.getSuggestedMoves().forEach(function(__code){                      // returnd suggested boxes
        console.log(__code);
        let ChessBoxSugg = document.getElementById(__code);
        ChessBoxSugg!.style.cssText = 'background-color:green;';
      });
    }else{
      this._isClicked = false;
      var ChessBox = document.getElementById(code);
      ChessBox!.style.cssText = 'background-color:inherit;';
    }
  }
}

/* Search map function *****************************************************************************************************/
getByValue(map:Map<string,string>, searchValue:string) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
  return '';
}





}

