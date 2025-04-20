window.onload = function() {
    var rgbValueDisplay = document.getElementById("rgb-value");
    var colorOptionsContainer = document.getElementById("color-options");
    var messageDisplay = document.getElementById("message");
    var scoreDisplay = document.getElementById("score");
    var restartButton = document.getElementById("restart-btn");

    var score = 0;
    var lives = 3;

    // Generate a random RGB color
    function generateRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    // Generate a question
    function generateQuestion() {
        var rgbValue = generateRandomColor();
        var correctOptionIndex = Math.floor(Math.random() * 3);

        rgbValueDisplay.textContent = rgbValue;
        colorOptionsContainer.innerHTML = "";

        for (var i = 0; i < 3; i++) {
            var colorOption = document.createElement("div");
            colorOption.className = "color-option";
            colorOption.style.backgroundColor = (i === correctOptionIndex) ? rgbValue : generateRandomColor();
            colorOption.onclick = function() {
                handleOptionClick(this.style.backgroundColor === rgbValue);
            };
            colorOptionsContainer.appendChild(colorOption);
        }
    }

    // Handle click on color option
    function handleOptionClick(correct) {
        if (correct) {
            messageDisplay.textContent = "Correct!";
            score++;
        } else {
            messageDisplay.textContent = "Incorrect!";
            lives--;
        }

        updateScore();

        if (lives > 0) {
            generateQuestion();
        } else {
            endGame();
        }
    }

    // Update score display
    function updateScore() {
        scoreDisplay.textContent = "Score: " + score + " | Lives: " + lives;
    }

    // End the game
    function endGame() {
        messageDisplay.textContent = "Game Over! Final Score: " + score;
        restartButton.style.display = "block";
    }

    // Restart the game
    restartButton.onclick = function() {
        score = 0;
        lives = 3;
        updateScore();
        generateQuestion();
        messageDisplay.textContent = "";
        restartButton.style.display = "none";
    };

    // Start the game
    generateQuestion();
};
