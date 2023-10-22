var getFinalAmount = function(tip, percentage){
    return Math.round(tip + tip*percentage/100);
}

const inputAmount = document.getElementById('inputAmount');
const inputPercentage = document.getElementById('inputPercentage');
const calculateButton = document.getElementById('calculateButton');
const resultText = document.getElementById('result');

console.log(getFinalAmount(10,100));

calculateButton.addEventListener('click', () => {
    if (!inputAmount.value || !inputPercentage.value) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    if(Number(inputAmount.value)<=0){
        alert('Введённая сумма должна быть больше 0');
        return;
    }
    if(Number(inputPercentage.value)<0 || Number(inputPercentage.value)>100){
        alert('Процент чавыех должен быть от 0 до 100');
        return;
    }
    resultText.innerText = "Итоговая сумма: " + getFinalAmount(Number(inputAmount.value), Number(inputPercentage.value));
})