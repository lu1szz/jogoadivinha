// Número aleatório entre 1 e 50
const randomNumber = Math.floor(Math.random() * 50) + 1;

// Número de tentativas permitidas
let attemptsLeft = 5;

// Função para verificar o palpite do jogador
function checkGuess() {
    const guess = document.getElementById('guess').value;
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (guess == randomNumber) {
        message.textContent = 'Parabéns! Você acertou!';
        message.style.color = 'green';
        disableInputAndButton();
    } else {
        attemptsLeft--;
        attemptsDisplay.textContent = attemptsLeft;

        if (attemptsLeft === 0) {
            message.textContent = `Game over! O número correto era ${randomNumber}.`;
            message.style.color = 'red';
            disableInputAndButton();
        } else {
            message.textContent = guess > randomNumber ? 'Tente um número menor.' : 'Tente um número maior.';
            message.style.color = 'black';
        }
    }
}

// Desabilita o input e o botão após o término do jogo
function disableInputAndButton() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
