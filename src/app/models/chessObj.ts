/*
  Chess Object Model 
*/
export class chessObj {
  constructor(name:string,location:number,gameStatus:string[],gameStatusWhite:string[],gameStatusBlack:string[]){
    this._name = name;
    this._location = location;
    this._gameStatus = gameStatus;
    this._gameStatusWhite = gameStatusWhite;
    this._gameStatusBlack = gameStatusBlack;
  }
  _name:string;
  _location:number;
  _gameStatus:string[];
  _gameStatusWhite:string[];
  _gameStatusBlack:string[];
  _suggestedMoves:string[] = [];
  /* Getters ********************************************************************************/
  getSuggestedMoves(){
    return this._suggestedMoves;
  }
  /* Suggested Moves ************************************************************************/
  suggestedMoves(){
    this._name = this._name.slice(0, this._name.length - 1);
    // pawn
    if(this._name == 'black-pawn'){
      this.blackPawnMoves();
    }
    if(this._name == 'white-pawn'){
      this.WhitePawnMoves();
    }
    // kight
    if(this._name == 'white-knight'){
      console.log('fergany');
      this.whiteKnightMoves();
    }
    if(this._name == 'black-knight'){
      this.blackKnightMoves();
    }
    
  }
  /* Pawn Moves ****************************************************************************/
  WhitePawnMoves(){
      if(!(this._gameStatus.includes((this._location+1).toString()))){
        if(this.checkConstrains(this._location+1))  // check Constrain 
        this._suggestedMoves.push((this._location+1).toString());
      }
      if(!(this._gameStatus.includes((this._location+2).toString()))){
        if(this.checkConstrains(this._location+2))  // check Constrain 
        this._suggestedMoves.push((this._location+2).toString());
      }
      if((this._gameStatus.includes((this._location-9).toString()))){
        if(this.checkConstrains(this._location-9))  // check Constrain 
        this._suggestedMoves.push((this._location-9).toString());
      }
      if((this._gameStatus.includes((this._location+11).toString()))){
        if(this.checkConstrains(this._location+11))  // check Constrain 
        this._suggestedMoves.push((this._location+11).toString());
      }
  }

  blackPawnMoves(){
      if(!(this._gameStatus.includes((this._location-1).toString()))){
        if(this.checkConstrains(this._location-1))  // check Constrain 
        this._suggestedMoves.push((this._location-1).toString());
      }
      if(!(this._gameStatus.includes((this._location-2).toString()))){
        if(this.checkConstrains(this._location-2))  // check Constrain 
        this._suggestedMoves.push((this._location-2).toString());
      }
      if((this._gameStatus.includes((this._location+9).toString()))){
        if(this.checkConstrains(this._location+9))  // check Constrain
        this._suggestedMoves.push((this._location+9).toString());
      }
      if((this._gameStatus.includes((this._location-11).toString()))){
        if(this.checkConstrains(this._location-11))  // check Constrain
        this._suggestedMoves.push((this._location-11).toString());
      }
  }
  

  /* Knight Moves *******************************************************************************************************************/
  whiteKnightMoves(){
    // Right Direction 
    if(!(this._gameStatusWhite.includes((this._location+21).toString()))){
      if(this.checkConstrains(this._location+21))  // check Constrain 
      this._suggestedMoves.push((this._location+21).toString());
    }
    if(!(this._gameStatusWhite.includes((this._location+19).toString()))){
      if(this.checkConstrains(this._location+19))  // check Constrain 
      this._suggestedMoves.push((this._location+19).toString());
    }
    // Left Direction
    if(!(this._gameStatusWhite.includes((this._location-21).toString()))){
      if(this.checkConstrains(this._location-21))  // check Constrain 
      this._suggestedMoves.push((this._location-21).toString());
    }
    if(!(this._gameStatusWhite.includes((this._location-19).toString()))){
      if(this.checkConstrains(this._location-19))  // check Constrain  
      this._suggestedMoves.push((this._location-19).toString());
    }
    // Top Direction
    if(!(this._gameStatusWhite.includes((this._location+12).toString()))){ 
      if(this.checkConstrains(this._location+12))  // check Constrain 
      this._suggestedMoves.push((this._location+12).toString());
    }
    if(!(this._gameStatusWhite.includes((this._location-8).toString()))){ 
      if(this.checkConstrains(this._location-8))  // check Constrain 
      this._suggestedMoves.push((this._location-8).toString());
    }
    // Bottom Direction
    if(!(this._gameStatusWhite.includes((this._location-12).toString()))){ 
      if(this.checkConstrains(this._location-12))  // check Constrain 
      this._suggestedMoves.push((this._location-12).toString());
    }
    if(!(this._gameStatusWhite.includes((this._location+8).toString()))){ 
      if(this.checkConstrains(this._location+8))  // check Constrain 
      this._suggestedMoves.push((this._location+8).toString());
    } 
  }
  
  blackKnightMoves(){
    // Right Direction 
    if(!(this._gameStatusBlack.includes((this._location+21).toString()))){
      if(this.checkConstrains(this._location+21))  // check Constrain 
      this._suggestedMoves.push((this._location+21).toString());
    }
    if(!(this._gameStatusBlack.includes((this._location+19).toString()))){
      if(this.checkConstrains(this._location+19))  // check Constrain 
      this._suggestedMoves.push((this._location+19).toString());
    }
    // Left Direction
    if(!(this._gameStatusBlack.includes((this._location-21).toString()))){
      if(this.checkConstrains(this._location-21))  // check Constrain 
      this._suggestedMoves.push((this._location-21).toString());
    }
    if(!(this._gameStatusBlack.includes((this._location-19).toString()))){
      if(this.checkConstrains(this._location-19))  // check Constrain  
      this._suggestedMoves.push((this._location-19).toString());
    }
    // Top Direction
    if(!(this._gameStatusBlack.includes((this._location+12).toString()))){ 
      if(this.checkConstrains(this._location+12))  // check Constrain 
      this._suggestedMoves.push((this._location+12).toString());
    }
    if(!(this._gameStatusBlack.includes((this._location-8).toString()))){ 
      if(this.checkConstrains(this._location-8))  // check Constrain 
      this._suggestedMoves.push((this._location-8).toString());
    }
    // Bottom Direction
    if(!(this._gameStatusBlack.includes((this._location-12).toString()))){ 
      if(this.checkConstrains(this._location-12))  // check Constrain 
      this._suggestedMoves.push((this._location-12).toString());
    }
    if(!(this._gameStatusBlack.includes((this._location+8).toString()))){ 
      if(this.checkConstrains(this._location+8))  // check Constrain 
      this._suggestedMoves.push((this._location+8).toString());
    } 
  }







/* Check Constrains Function ***********************************************************************************************************/
  checkConstrains(check:number){
    if((parseInt((check).toString()[1])<=8)&&(parseInt((check).toString()[1])>=1)&&(parseInt((check).toString()[0])<=8)&&(parseInt((check).toString()[0])>=1))  // check Constrain
      return true
    else
      return false 
  }

}






