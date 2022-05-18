const paper = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === 1) {
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById('result').innerHTML= "you win"
    } if (result === 2) {
        document.getElementById("random").src = "./asset/scissor.png";
        document.getElementById('result').innerHTML= "you lose"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/paper.png";
        document.getElementById('result').innerHTML= "draw" 
    }
}

const scissor = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === -2) {
        document.getElementById("random").src = "./asset/paper.png";
        document.getElementById('result').innerHTML= "you win"
    } if (result === -1) {
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById('result').innerHTML= "you lose"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/scissor.png";
        document.getElementById('result').innerHTML= "draw" 
    }
}

const rock = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === 1) {
        document.getElementById("random").src = "./asset/scissor.png";
        document.getElementById('result').innerHTML= "you win"
    } if (result === -1) {
        document.getElementById("random").src = "./asset/paper.png";
        document.getElementById('result').innerHTML= "you lose"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById('result').innerHTML= "draw"
    }
}