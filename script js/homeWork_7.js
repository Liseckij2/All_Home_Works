function calculateNumber() {
    do {
    let repeatOperation;
    let sendNumber;
    do {
      sendNumber = prompt('Введите не менее 3-х чисел через пробел').split(' ');
    } while (sendNumber.length < 3);
    do {   
      let sendOperation;
      sendOperation = +prompt(`Выберите операцию \n1- сортировка по возрастанию \n2- сортировка по убыванию \n3- четные не четные числа, сумма чисел, наибольшее и наеменьшее числа`);
      let simbolForOperations = prompt('Выберите разделитель для этой операции   \' / \' или \' ; \'');
  
    if (sendOperation === 1) {
      simbolForOperations 
         sendNumber = sendNumber.sort((a, b) => a - b).join(simbolForOperations);
         alert(sendNumber);
         console.log(sendNumber);
    }
    if (sendOperation === 2) {
      simbolForOperations;
        sendNumber = sendNumber.sort((a, b) => b - a).join(simbolForOperations);
        alert(sendNumber);
        console.log(sendNumber);
    }
    if (sendOperation === 3) {
      let resultSum = 0;
        sendNumber.forEach(element => {
        resultSum += +element;
        return resultSum;
      });
      let resultLength = 0;  
        sendNumber.forEach(element => {
        resultLength += (+element / sendNumber.length);
        resultLength;
      });
      let finalResult = `\nСумма чисел ${resultSum} \nСреднее арифметическое ${resultLength}
      \nНаибольшее число ${Math.max.apply(Math.max, sendNumber)}\nНаименьшее число ${Math.min.apply(Math.min, sendNumber)}`;
         alert(finalResult);   
         console.log(finalResult);
    }
    let repeat = confirm('Повтор?');   
        if (!repeat) {
          return
        }
    repeatOperation = +prompt('Повторить с страрым массивом нажмите 1 \nС новым массивом нажмите 2');
    if (repeatOperation === 1); {
        sendNumber;
        sendOperation;
    }
  } while (repeatOperation === 1) 
  if (repeatOperation === 2); {
    calculateNumber();
  }
  } while (repeatOperation === 2);
  };
  calculateNumber();
