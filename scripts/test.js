    /**
     * Created by Maksym on 26.09.2015.
     */

    var startTime, cellsLeft;

    function prepareGame(){

        var cells = document.getElementsByTagName('td');
        for(var i = 0; i < cells.length; i++){
            cells[i].innerHTML = Math.floor((Math.random() * 100) + 1); // set the random numbers  //
            cells[i].onclick = handleClick;                                // onclick do hiding //
        }
        cellsLeft = 16;
        startTime = Date.now();
    }

    function handleClick(){

        var incorrect = false;
        var current = parseInt(this.innerHTML);
        var cells = document.getElementsByTagName('td');
        for(var j = 0; j < cells.length; j++){
            var cell = cells[j];
            if(cell.hidden == false){       // or (!cell.hidden) - is the same thing  //
                if(parseInt(cell.innerHTML) < current){
                    //return false;
                    incorrect = true;       //  then do nothing and same as return false //
                }
            }
        }

        // if(true){                        // in any case do all body scripts that inside if(true) //
        if(!incorrect) {
            this.hidden = 'hidden';
            cellsLeft--;
            if(cellsLeft == 0){
                finishGame();
            }
        }
    }

    function finishGame(){

        //changeActiveHiddenState('hidden');
        document.getElementById('time').innerHTML = (Date.now() - startTime) / 1000;
        document.getElementById('gameover').hidden = '';

    }