export class GameFunctions {

/* remove chessObj from old box *******************************************************************************************************************/
removeChessObj(code:string){
    const _chessBoards = document.getElementById(code);
    _chessBoards!.removeChild(_chessBoards!.firstChild!);  
}
/* remove div inside boxes *******************************************************************************************************************/
removeDiv(){
    const _chessBoards = document.getElementsByClassName('suggest');
    while(_chessBoards.length > 0){
    _chessBoards[0]!.parentNode!.removeChild(_chessBoards[0]!);
    }
    
}

/* Create div inside boxes *************************************************************************************************************************/
divInside(boxCode:string){
    var div = document.createElement("div");
    div.className= 'suggest';
    div.style.cssText = 'height: 25px; width: 25px; background-color: #BACA2B; border-radius: 50%; margin-top:35%; position:absolute;';
    var ChessBox = document.getElementById(boxCode);
    ChessBox!.appendChild(div);
}
/* Search map function ***************************************************************************************************************************/
getByKey(map:Map<string,string>, _key:string) {
    for (let [key, value] of map.entries()) {
    if (key === _key)
        return value;
    }
    return 'a7a';
}

/* Search map function ***************************************************************************************************************************/
getByValue(map:Map<string,string>, searchValue:string) {
    for (let [key, value] of map.entries()) {
    if (value === searchValue)
        return key;
    }
    return 'a7a';
}


}