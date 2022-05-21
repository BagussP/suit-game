const paper = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === 1) {
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById("player").src = "./asset/paper.png"
        document.getElementById("bot").src = "./asset/rock.png"
        document.getElementById("player-status").innerHTML = "win"
        document.getElementById("bot-status").innerHTML = "lose"
    } if (result === 2) {
        document.getElementById("random").src = "./asset/scissor.png";
        document.getElementById("player").src = "./asset/paper.png"
        document.getElementById("bot").src = "./asset/scissor.png"
        document.getElementById("player-status").innerHTML = "lose"
        document.getElementById("bot-status").innerHTML = "win"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/paper.png"; 
        document.getElementById("player").src = "./asset/paper.png"
        document.getElementById("bot").src = "./asset/paper.png"
        document.getElementById("player-status").innerHTML = "draw"
        document.getElementById("bot-status").innerHTML = "draw"
    }
}

const scissor = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === -2) {
        document.getElementById("random").src = "./asset/paper.png";
        document.getElementById("player").src = "./asset/scissor.png"
        document.getElementById("bot").src = "./asset/paper.png"
        document.getElementById("player-status").innerHTML = "Win"
        document.getElementById("bot-status").innerHTML = "Lose"
    } if (result === -1) {
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById("player").src = "./asset/scissor.png"
        document.getElementById("bot").src = "./asset/rock.png"
        document.getElementById("player-status").innerHTML = "Lose"
        document.getElementById("bot-status").innerHTML = "Win"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/scissor.png"; 
        document.getElementById("player").src = "./asset/scissor.png"
        document.getElementById("bot").src = "./asset/scissor.png"
        document.getElementById("player-status").innerHTML = "Draw"
        document.getElementById("bot-status").innerHTML = "Draw"
    }
}

const rock = (a) => {
    const BOT = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const result = a - BOT
    if(result === 1) {
        document.getElementById("random").src = "./asset/scissor.png";
        document.getElementById("player").src = "./asset/rock.png"
        document.getElementById("bot").src = "./asset/scissor.png"
        document.getElementById("player-status").innerHTML = "Win"
        document.getElementById("bot-status").innerHTML = "Lose"

    } if (result === -1) {
        document.getElementById("random").src = "./asset/paper.png";
        document.getElementById("player").src = "./asset/rock.png"
        document.getElementById("bot").src = "./asset/paper.png"
        document.getElementById("player-status").innerHTML = "Lose"
        document.getElementById("bot-status").innerHTML = "Win"
    } if(result === 0) { 
        document.getElementById("random").src = "./asset/rock.png";
        document.getElementById("player").src = "./asset/rock.png"
        document.getElementById("bot").src = "./asset/rock.png"
        document.getElementById("player-status").innerHTML = "Draw"
        document.getElementById("bot-status").innerHTML = "Draw"
    }
}