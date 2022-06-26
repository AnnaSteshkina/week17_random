function random(){
    let outputs = [];
    let arr = [];
    let min = -10;
    let max = 10;
    let middle;
    let sum = 0;
    let proizv = 1;

    for (let i=0; i<10;i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        sum += (arr[i]);
        middle = sum / 10;
        proizv *= (arr[i]);
    }

    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr); 

    outputs.push(`Сгенерировали: ${arr}`);
    outputs.push(`Минимальное: ${minValue}`);
    outputs.push(`Максимальное: ${maxValue}`);
    outputs.push(`Среднее арифметическое: ${middle}`);
    outputs.push(`Сумма чисел: ${sum}`);
    outputs.push(`Произведение чисел: ${proizv}`);

    document.getElementById('result').innerHTML = outputs.join ('<br>');
}
