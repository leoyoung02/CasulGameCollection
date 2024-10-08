var Game = {
    randColor: function(){
        return ["white", "violet", "orange", "green"][parseInt(Math.random() * 1000) % 4];
    },
    randNum: function(max){
        max = typeof(max) == "undefined" ? 12 : max;
        return parseInt(Math.random() * 1000) % max;
    },
    updateTiles: function(indexList, valueList){
        indexList = typeof(indexList) == "object" ? indexList : [];
        valueList = typeof(valueList) == "object" ? valueList : [];
        if(indexList.length != valueList.length){
            console.log("Improper Data: tile and value dont have same number of item");
            return;
        }
        var _self = this;
        var tiles = document.querySelectorAll(".game .tile");
        var value = 0;
        indexList.forEach(function(item,index){
            if(item < 0 && item > 12){
                console.log("range", item)
                return false;
            }
    
            tiles[item].setAttribute("class", "tile");
            value = parseInt(valueList[index]);
            if(value != 0){
               tiles[item].classList.add("tile-" + _self.randColor());
            }
            tiles[item].querySelector("span").innerHTML = value == 0 ? "" : value;
        })

        //Ex: Game.updateTiles([2,4,13,5,6],[1,4,15,5,6]);
    }
}


var indexList = [];
var valueList = [];
for(i = 0; i < 7; i++){
    indexList.push(Game.randNum(12));
    valueList.push(Game.randNum(100));
}
Game.updateTiles(indexList,valueList);



