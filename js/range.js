(function() {
  const parent = document.querySelector(".range-slider");
  if (!parent) return;

  const rangeSliders = parent.querySelectorAll("input[type=range]");
  const numberInputs = parent.querySelectorAll("input[type=number]");

  const handleRangeInput = () => {
    let [val1, val2] = [parseFloat(rangeSliders[0].value), parseFloat(rangeSliders[1].value)];
    
    // Swap values if the first slider exceeds the second
    if (val1 > val2) [val1, val2] = [val2, val1];

    numberInputs[0].value = val1;
    numberInputs[1].value = val2;
  };

  const handleNumberInput = () => {
    let [num1, num2] = [parseFloat(numberInputs[0].value), parseFloat(numberInputs[1].value)];

    // Swap numbers if the first input exceeds the second
    if (num1 > num2) [num1, num2] = [num2, num1];

    rangeSliders[0].value = num1;
    rangeSliders[1].value = num2;
  };

  // Add event listeners for range sliders
  rangeSliders.forEach(slider => slider.addEventListener('input', handleRangeInput));

  // Add event listeners for number inputs
  numberInputs.forEach(input => input.addEventListener('input', handleNumberInput));
})();
