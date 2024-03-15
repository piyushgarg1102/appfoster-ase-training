function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function splitNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const inputTimes = document.getElementById('inputTimes').value;
    const numberBox = document.getElementById('numberBox');
    numberBox.innerHTML = '';
    let remaining = inputNumber;
    const splitValue = Math.ceil(inputNumber / inputTimes);
    for (let i = 0; i < inputTimes; i++) {
      const splitAmount = Math.min(splitValue, remaining);
      const div = document.createElement('div');
      div.textContent = splitAmount;
      div.style.backgroundColor = getRandomColor();
      div.style.width = (splitAmount * 20) + 'px'; 
      remaining -= splitAmount;
      numberBox.appendChild(div);
    }
  }