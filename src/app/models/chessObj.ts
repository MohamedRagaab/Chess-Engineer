/*
  Chess Object Model 
*/
export class chessObj {
  constructor(name:string,location:number,gameStatus:string[]){
    this._name = name;
    this._location = location;
    this._gameStatus = gameStatus;
  }
  _name:string;
  _location:number;
  _gameStatus:string[];
  _suggestedMoves:string[] = [];
  /* Getters ********************************************************************************/
  getSuggestedMoves(){
    console.log(this._suggestedMoves);
    return this._suggestedMoves;
  }
  /* Suggested Moves ************************************************************************/
  suggestedMoves(){
    console.log(this._name);
    this._name = this._name.slice(0, this._name.length - 1);
    console.log(this._name);
    if(this._name == 'black-pawn'){
      console.log(this._name);
      this.blackPawnMoves();
    }
    if(this._name == 'white-pawn'){
      console.log(this._name);
      this.WhitePawnMoves();
    }
  }
  /* Pawn Moves ****************************************************************************/
  WhitePawnMoves(){
    // chessBoard Constrains
    let first:string = this._location.toString()[0];
    let second:string = this._location.toString()[1];
    
      if(!(this._gameStatus.includes((this._location+1).toString()))){
        if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
        this._suggestedMoves.push((this._location+1).toString());
      }
      if((this._gameStatus.includes((this._location-9).toString()))){
        if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
        this._suggestedMoves.push((this._location-9).toString());
      }
      if((this._gameStatus.includes((this._location+11).toString()))){
        if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
        this._suggestedMoves.push((this._location+11).toString());
      }
    
  }
  blackPawnMoves(){
    // chessBoard Constrains
    let first:string = this._location.toString()[0];
    let second:string = this._location.toString()[1];

    if(!(this._gameStatus.includes((this._location-1).toString()))){
      if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
      this._suggestedMoves.push((this._location-1).toString());
    }
    if((this._gameStatus.includes((this._location+9).toString()))){
      if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
      this._suggestedMoves.push((this._location+9).toString());
    }
    if((this._gameStatus.includes((this._location-11).toString()))){
      if((parseInt(second)<=8)&&(parseInt(second)>=1)&&(parseInt(first)<=8)&&(parseInt(first)>=1)) // check Constrain
      this._suggestedMoves.push((this._location-11).toString());
    }
  }

}
