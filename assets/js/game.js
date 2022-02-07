var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Asking the player to fight or run?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'")
  
    //IF PLAYER CHOSES TO FIGHT
    if(promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight"){
    
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's HP
    if (enemyHealth<=0){
        window.alert(enemyName + " has died! RIP");
    }
    else{
        window.alert(enemyName + "still has " + enemyHealth + " health left.")
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack
    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check OUR robot's HP
    if(playerHealth<=0){
        window.alert(playerName + "has died!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    
    }
    }
    //IF A PLAYER CHOSES TO SKIP
    else if (promptFight === "SKIP" || promptFight ==="skip" || promptFight === "Skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave fight
        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Later!");
            //subtract Monies
            playerMoney = playerMoney -2;
        }
        //if NO ask question again to fight
        else{
            fight();
        }
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
        fight();
    }
  };

  fight();

