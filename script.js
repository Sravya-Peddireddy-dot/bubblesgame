document.addEventListener('DOMContentLoaded', function() {

    // score

    let score = 0;
    let scoreElement = document.querySelector('.score'); 
    let bubbleImages = document.querySelectorAll('.increment'); 

    bubbleImages.forEach(function(bubbleImage) {
        bubbleImage.addEventListener('mouseenter', function() {
            score++; // Increment the score
            scoreElement.textContent = `Score: ${score}`; 
        });
    });


    // timer


    let startButton = document.querySelector('.start');
    let timerDisplay = document.getElementById('timer');
    let bubblesContainer = document.querySelector('.bubbles');
    let remainingTime = 60; // 1 minute in seconds
    let intervalId;
    startButton.addEventListener('click', () => {
        if (!bubblesContainer.classList.contains('animate')) {
            bubblesContainer.classList.add('animate');
            startButton.disabled = true;
            intervalId = setInterval(updateTimer, 1000); 
        }
    });
    
    function updateTimer() {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        let formattedTime='00:00'
        if(seconds >= 10){
            formattedTime = `00:${seconds}`;
        }
        else{
            formattedTime = `00:0${seconds}`;
        }
        timerDisplay.textContent = formattedTime;

        if (remainingTime === 0) {
        clearInterval(intervalId);
        //timerDisplay.textContent = "Timer Expired";
        bubblesContainer.classList.remove('animate');
        let container = document.getElementById("container");
        container.innerHTML = '';
        let newDiv = document.createElement('div');
        newDiv.textContent = `Game Completed !!!
                                Score: ${score}`;
        newDiv.style.width = '100%';
        newDiv.style.height = '100vh';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.fontSize = '24px';
        newDiv.style.backgroundColor = '#f0f0f0';

        // Replace the existing content with the new div
         // Clear existing content
        container.appendChild(newDiv);

}
    }
})