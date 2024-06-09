const read=require('readline')
const rl=read.createInterface(
    {
input:process.stdin,
output:process.stdout
    
    });
    function game(){
        console.log("Select one")
        const array=['snake','water','paper','scissor','rock'];
        rl.question("Enter a choice:",function(choice){
          
          let x=Math.floor(Math.random()*array.length);
          let y=x-1;
          console.log("computer choice:"+array[y]);
          console.log("your choice:"+array[choice-1])
        
       if(x==1){
        switch(choice){
            case "1":
                console.log("both choose snake")
                console.log("draw")
                break;
            case "2":
                console.log("snake drinks water")  
                console.log("you lose")
                break;  
            case "3":
                console.log("snake poisons paper")
                console.log("you lose")
                break;
            case "4":
                console.log("Scissor cut snake")
                console.log("you win")
                break;
            case "5":
                console.log("Rock crushes snake")
                console.log("you win")
                break;
                default:
                    console.log("default")
        }
       }
      else if(x==2){
        switch(choice){
            case "1":
                console.log("snake drinks water ")
                console.log("you win")
                break;
            case "2":
                console.log("both choose water")  
                console.log(" draw")
                break;  
            case "3":
                console.log("water drowns paper")
                console.log("you lose")
                break;
            case "4":
                console.log("water rusts scissor")
                console.log("you lose")
                break;
            case "5":
                console.log("water rusts rock")
                console.log("you win")
                break;
                default:
                    console.log("default")
        }
       }
      else if(x==3){
        switch(choice){
            case "1":
                console.log("snake poisons paper")
                console.log("you win")
                break;
            case "2":
                console.log("water drowns paper")  
                console.log("you win") 
                break; 
            case "3":
                console.log("both choose paper")
                console.log("draw")
                break;
            case "4":
                console.log(" scissor cuts paper")
                console.log("you win")
                break;
            case "5":
                console.log("paper cover rock")
                console.log("you lose")
                break;
                default:
                    console.log("default")
                
        }
       }

      else if(x==4){
        switch(choice){
            case "1":
                console.log("scissor cut snake")
                console.log("you lose")
                break;
            case "2":
                console.log("water rusts scissor")  
                console.log("you win")
                break;  
            case "3":
                console.log("scissor cut paper")
                console.log("you lose")
                break;
            case "4":
                console.log("both choose scissor")
                console.log("draw")
                break;
    
            case "5":
                console.log("rock crushes scissor")
                console.log("you win")
                break;
            default:
                    console.log("default")
        }
       }

       else if(x==5){
        switch(choice){
            case "1":
                console.log("rock crushes snake")
                console.log("you lose")
                break;
            case "2":
                console.log("water rusts rock")  
                console.log("you win")
                break;  
            case "3":
                console.log("paper covers rock")
                console.log("you win")
                break;
            case "4":
                console.log("rock crushes scissor")
                console.log("you lose")
                break;
    
            case "5":
                console.log("both choose rock")
                console.log("draw")
                break;
            default:
                    console.log("default")
        }
       }
       rl.close();

    });
    
}
console.log("GAME")
    game();