import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { GameFunctions } from './Controller/game_functions';
import { InitializeAllBox } from './Controller/game_initialization';
import { chessObj } from './models/chessObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // firebase Database
  constructor(db:AngularFireDatabase){
    db.list('/Game').valueChanges().forEach(element => {
      console.log(element);
    });
  }
  title = 'Chess-Engineer';
  cssTextImg:string = 'width: 90%;height: 90%;margin-top: 4%;';
  gameStatus = new Map();                      // Status map ()
  chessBoard = new Map();                      // color of the boxes Map()
  gamestatusWithImgSrc = new Map();            // gamestatusWithImgSrc
  gameStatusArr:string[] = [];                 // Status Arry
  gameStatusArrWhite:string[] = [];            // Status Arry White
  gameStatusArrBlack:string[] = [];            // Status Arry Black
  playerTurn:number[]=[];                      // Player Turn
  suggestedTestArr:string[] =['']; 
  indexTurn:number = 0;
  currentSelectedAndSuggestedBoxes:string[] = [];
  oldBoxesBackgroundColor:string = '';
  oldSelectedBoxCode:string[] = [''];
  _isClicked = false;
  previousCode:string = '';
  objColor:string = '';
  _initializationBox = new InitializeAllBox(this.chessBoard,this.gameStatus,this.gamestatusWithImgSrc,this.gameStatusArr,this.gameStatusArrWhite,this.gameStatusArrBlack);
  _GameFunctions = new GameFunctions();
  ngOnInit(){
    this._initializationBox.inializeAllBox();
    for(let i =0; i<150;i++){
      this.playerTurn.push(1);
      this.playerTurn.push(0);
    }
  }
  
/* Click Box *************************************************************************************************************/
boxClicked(code:string){
  console.log(code);
  console.log(this.suggestedTestArr);
  if(this._GameFunctions.getByValue(this.gameStatus,code)!='a7a'){this.objColor = this._GameFunctions.getByValue(this.gameStatus,code);}
  this.objColor = this.objColor.slice(0, 5);
  let turn;
  console.log(this.objColor);
  if(this.objColor == 'black') turn=0;else turn =1;
  if((turn == this.playerTurn[this.indexTurn])){
    if(this.gameStatusArr.includes(code)){         
      console.log('fergan1');                                                                                 // check if the selected box is chessObj or empty
      this.getSuggestedMoves(code);
      this.saveBackgroundColor(code);
      this.applyStyleChangesToSuggestedMoves(this.currentSelectedAndSuggestedBoxes); 
      this.suggestedTestArr = this.currentSelectedAndSuggestedBoxes.splice(1);                                                      
      this.currentSelectedAndSuggestedBoxes = [];
      console.log(this.suggestedTestArr);
    }else if(this.suggestedTestArr.includes(code)){
      console.log('fergany2');
      this.clearBackgroundSelected();
      this._GameFunctions.removeChessObj(this.previousCode);
      let _name = this._GameFunctions.getByKey(this.gamestatusWithImgSrc,this.previousCode);   
      console.log(this.previousCode);
      console.log(this.gamestatusWithImgSrc);
      this._initializationBox.boxInitialization(_name,code);
      this.suggestedTestArr = [];
      this.updateMove(this.previousCode,code,_name);
      this.indexTurn+=1;
    }
 }else if(this.suggestedTestArr.includes(code)){
  console.log('fergany2');
  this.clearBackgroundSelected();
  this._GameFunctions.removeChessObj(this.previousCode);
  this._GameFunctions.removeChessObj(code);
  let _name = this._GameFunctions.getByKey(this.gamestatusWithImgSrc,this.previousCode);   
  console.log(this.previousCode);
  console.log(this.gamestatusWithImgSrc);
  this._initializationBox.boxInitialization(_name,code);
  this.suggestedTestArr = [];
  this.updateMove(this.previousCode,code,_name);
  this.indexTurn+=1;
 }
  this.previousCode = code;
  console.log('fergany3');
  console.log(this.indexTurn);
}
/* updateMove function *************************************************************************************************************/
updateMove(previousCode:string,code:string,src:string){
  //update Arrays
  console.log(this.gameStatusArr);
  console.log(this.gameStatusArr.indexOf(previousCode));
  this.gameStatusArr.splice(this.gameStatusArr.indexOf(previousCode),1);
  this.gameStatusArr.push(code);
  console.log(this.gameStatusArr);
  if(this.playerTurn[this.indexTurn]==1){
    this.gameStatusArrWhite.splice(this.gameStatusArrWhite.indexOf(previousCode),1);
    this.gameStatusArrWhite.push(code);
  }else{
    this.gameStatusArrBlack.splice(this.gameStatusArrBlack.indexOf(previousCode),1);
    this.gameStatusArrBlack.push(code);
  }

  //update Maps
  this.gamestatusWithImgSrc.set(code,src);
  this.gamestatusWithImgSrc.delete(previousCode);
  
  this.gameStatus.set(this._GameFunctions.getByValue(this.gameStatus,previousCode),code);
  //this.gameStatus.delete(this.getByValue(this.gameStatus,previousCode));

}
/* getSuggestedMoves function *****************************************************************************************************/
getSuggestedMoves(code:string){
  this.currentSelectedAndSuggestedBoxes.push(code);
  let _name = this._GameFunctions.getByValue(this.gameStatus,code);                                                                         // search for the name of the clicked chessObj in the game status map()
  let _chessOj = new chessObj(_name,parseInt(code),this.gameStatusArr,this.gameStatusArrWhite,this.gameStatusArrBlack);       // create chessObj
  _chessOj.suggestedMoves();      
  _chessOj.getSuggestedMoves().forEach(suggCode => {                                                                          // returnd suggested boxes
    this.currentSelectedAndSuggestedBoxes.push(suggCode);
  });
}
/* saveBackgroundColor function *****************************************************************************************************/
saveBackgroundColor(code:string){
  if(code != this.oldSelectedBoxCode[0]){ this._isClicked=true}else{this._isClicked=false}
  if(this._isClicked){
        let ChessBox = document.getElementById(this.currentSelectedAndSuggestedBoxes[0]);
        this.oldBoxesBackgroundColor = ChessBox!.style.backgroundColor ;                                                     // save backgroundColor
    }
}
/* applyStyleChangesToSuggestedMoves function *****************************************************************************************************/
applyStyleChangesToSuggestedMoves(currentSelecBoxes:string[]){
  
  if(currentSelecBoxes[0] != this.oldSelectedBoxCode[0]){                                                      // check the selected box is not the previous box
    this.clearBackgroundSelected();
    currentSelecBoxes.forEach(code=>{                                                                         // mark the suggested boxes
      if(code == currentSelecBoxes[0]){
        let ChessBox = document.getElementById(code);
        ChessBox!.style.cssText = 'background-color: #BACA2B;';
      }else{
        this._GameFunctions.divInside(code);
      }
    });
  }else{ // if we clicked the same box
    let ChessBox = document.getElementById(currentSelecBoxes[0]);
    if(ChessBox!.style.backgroundColor=='rgb(186, 202, 43)'){               // check the status of the box if it is marked
      this._GameFunctions.removeDiv();
      let ChessBox = document.getElementById(this.oldSelectedBoxCode[0]); 
      ChessBox!.style.cssText = 'background-color:'+this.oldBoxesBackgroundColor+';';
    }else{                                                               // if the box is not marked 
      currentSelecBoxes.forEach(code=>{
        if(code == currentSelecBoxes[0]){
          let ChessBox = document.getElementById(code);
          ChessBox!.style.cssText = 'background-color: #BACA2B;';
        }else{
          this._GameFunctions.divInside(code);
        }
      });
    }
  }
  this.oldBoxesBackgroundColor = '';
  this.oldSelectedBoxCode = currentSelecBoxes;
}
/* clearBackgroundSelected function ***************************************************************************************************************************/
clearBackgroundSelected(){
  if((this.oldSelectedBoxCode[0]!='' )){                                                                     // clear Background Selected when change selection from box to another
    this._GameFunctions.removeDiv();
    let ChessBox = document.getElementById(this.oldSelectedBoxCode[0]); 
    ChessBox!.style.cssText = 'background-color:'+this.oldBoxesBackgroundColor[0]+';';                     
  }
}



}

