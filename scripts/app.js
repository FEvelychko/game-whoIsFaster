/**
 * Created by Maksym on 25.09.2015.
 */

    function hideCell(value){
        value.style.color = "red";
    }
    var cells = document.getElementsByTagName('td');
    for(var i = 0; i < cells.length; i++){
        cells[i].innerHTML = Math.floor((Math.random() * 100) + 1);
        cells[i] = hideCell(cells[i]);GIT
    }