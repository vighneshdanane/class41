class Form {
    constructor(){
         this.input = createInput("NAME")
         this.button = createButton ("PLAY")
         this.gretting = createElement('h3')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.gretting.hide()        
    }

display(){
    var title = createElement ('h2')
    title.html("CAR RACING GAME")
    title.position(displayWidth/2-50 , 0 );
   this.input .position (displayWidth/2-40 , displayHeight/2-80 )
    this.button.position (displayWidth/2+30 , displayHeight/2 )
   

    this.button.mousePressed(()=>{
       this.input.hide()
       this. button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
        player.update();
       player.updateCount(playerCount)
       this.gretting.html("hello "+player.name)
        this.gretting.position(displayWidth/2-50 , displayHeight/4  )
    })


}
}

