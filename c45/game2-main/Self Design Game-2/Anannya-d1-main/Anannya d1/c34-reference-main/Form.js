class Form{
    constructor(){
   this.input=createInput("answer"),
   this.button=createButton('check');

    }
    hide(){
    this.input.hide(); 
    this.button.hide();
    }

    display(){
    backgroundImage("blue");
    var text=createElement('h2');
    text.html("do you want to play the game?");
    this.input.position(500,500);
    this.button.position(500,600);
    var answer=this.input.value();
    if(answer==="yes"){
        return 1;
    }
    else{
        return 0;
    }

}

}