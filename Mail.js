class Mail{
  
    constructor(){
        this.from = createInput('Enter your email Address');
        this.from.style('width','300px');
        this.description = createInput('type your message for the police');
        this.description.style('width','300px');
        this.description.style('height','200px');
        this.to = "yashu53421@gmail.com";
        this.button = createButton("Send Email");
    }
    sendMail(){
       this.from.position(displayWidth/2-100,displayHeight-350);
       this.description.position(displayWidth/2-100,displayHeight-300);
       this.button.position(displayWidth/2+123,displayHeight-90);

       this.button.mousePressed(()=>{
        Email.send({
            SecureToken : "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
            To : this.to,
            From : this.from.value(),
            Subject : "Found Someone",
             Body :this.description.value()
        }).then(
           message => alert('Email is sent successfully')
        ); 
       });
    }
}

