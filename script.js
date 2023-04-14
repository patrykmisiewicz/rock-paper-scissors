console.log("Hello");


function getComputerChoice() {

    let number = Math.random()

    console.log(number);

        if (number > 0.66) {
            console.log("Rock");
        } else if (number < 0.33) {
            console.log("Paper");
        } else {
            console.log("Scissors")
        }
    }

getComputerChoice()