class Player{
    constructor(){
        this.name=null
        this.distance = 0;
        this.index= null;

    }
    getCount(){
        var countreff = database.ref('playerCount')
        countreff.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

static getPlayerInfo(){
    var playerInfo = database.ref("players")
    playerInfo.on("value",(data)=>{
        allPlayers=data.val()
    })
}

}