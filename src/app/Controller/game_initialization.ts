export class InitializeAllBox {
constructor(_chessBoard:Map<string,string>,_gameStatus:Map<string,string>,_gamestatusWithImgSrc:Map<string,string>,_gameStatusArr:string[],_gameStatusArrWhite:string[],_gameStatusArrBlack:string[]){
    this.chessBoard = _chessBoard;
    this.gameStatus = _gameStatus;
    this.gamestatusWithImgSrc = _gamestatusWithImgSrc;
    this.gameStatusArr = _gameStatusArr;
    this.gameStatusArrWhite = _gameStatusArrWhite;
    this.gameStatusArrBlack = _gameStatusArrBlack;
}
chessBoard:Map<string,string>;
gameStatus:Map<string,string>;
gamestatusWithImgSrc:Map<string,string>;
gameStatusArr:string[];
gameStatusArrWhite:string[];
gameStatusArrBlack:string[];
cssTextImg:string = 'width: 90%;height: 90%;margin-top: 4%;';
/* initialized Each Box ************************************************************************************************/
inializeAllBox(){
// color of the boxes Map()
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
// Status Arry
this.gameStatusArr.push('11','21','31','41','51','61','71','81','12','22','32','42','52','62','72','82','17','27','37','47','57','67','77','87','18','28','38','48','58','68','78','88');
// Status map ()
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
// Status Arry White
this.gameStatusArrWhite.push('11');
this.gameStatusArrWhite.push('21');
this.gameStatusArrWhite.push('31');
this.gameStatusArrWhite.push('41');
this.gameStatusArrWhite.push('51');
this.gameStatusArrWhite.push('61');
this.gameStatusArrWhite.push('71');
this.gameStatusArrWhite.push('81');
this.gameStatusArrWhite.push('12');
this.gameStatusArrWhite.push('22');
this.gameStatusArrWhite.push('32');
this.gameStatusArrWhite.push('42');
this.gameStatusArrWhite.push('52');
this.gameStatusArrWhite.push('62');
this.gameStatusArrWhite.push('72');
this.gameStatusArrWhite.push('82');
// Status Arry Black
this.gameStatusArrBlack.push('17');
this.gameStatusArrBlack.push('27');
this.gameStatusArrBlack.push('37');
this.gameStatusArrBlack.push('47');
this.gameStatusArrBlack.push('57');
this.gameStatusArrBlack.push('67');
this.gameStatusArrBlack.push('77');
this.gameStatusArrBlack.push('87');
this.gameStatusArrBlack.push('18');
this.gameStatusArrBlack.push('28');
this.gameStatusArrBlack.push('38');
this.gameStatusArrBlack.push('48');
this.gameStatusArrBlack.push('58');
this.gameStatusArrBlack.push('68');
this.gameStatusArrBlack.push('78');
this.gameStatusArrBlack.push('88');
// gamestatusWithImgSrc
this.gamestatusWithImgSrc.set('11','./assets/chess-rook2.png'  );
this.gamestatusWithImgSrc.set('21','./assets/chess-knight2.png');
this.gamestatusWithImgSrc.set('31','./assets/chess-bishop2.png');
this.gamestatusWithImgSrc.set('41','./assets/chess-queen2.png' );
this.gamestatusWithImgSrc.set('51','./assets/chess-king2.png'  );
this.gamestatusWithImgSrc.set('61','./assets/chess-bishop2.png');
this.gamestatusWithImgSrc.set('71','./assets/chess-knight2.png');
this.gamestatusWithImgSrc.set('81','./assets/chess-rook2.png'  );
this.gamestatusWithImgSrc.set('12','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('22','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('32','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('42','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('52','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('62','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('72','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('82','./assets/chess-pawn2.png'  );
this.gamestatusWithImgSrc.set('17','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('27','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('37','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('47','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('57','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('67','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('77','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('87','./assets/chess-pawn.png'   );
this.gamestatusWithImgSrc.set('18','./assets/chess-rook.png'   );
this.gamestatusWithImgSrc.set('28','./assets/chess-knight.png' );
this.gamestatusWithImgSrc.set('38','./assets/chess-bishop.png' );
this.gamestatusWithImgSrc.set('48','./assets/chess-queen.png'  );
this.gamestatusWithImgSrc.set('58','./assets/chess-king.png'   );
this.gamestatusWithImgSrc.set('68','./assets/chess-bishop.png' );
this.gamestatusWithImgSrc.set('78','./assets/chess-knight.png' );
this.gamestatusWithImgSrc.set('88','./assets/chess-rook.png'   );

for (let [key, value] of this.gamestatusWithImgSrc.entries()) {
    this.boxInitialization(value,key);
    }
}

/* Initialized Each Box ********************************************************************************************/
boxInitialization(src:string,boxCode:string){
    var img = document.createElement("img");
    img.src = src; 
    img.style.cssText = this.cssTextImg;
    var ChessBox = document.getElementById(boxCode);
    ChessBox!.appendChild(img);
}
}