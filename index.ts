let inputValues = document.querySelector("#inputValues");
let finalOutput:any = document.querySelector("#finalOutput");
let unOrderedList = document.querySelector(".history");
// const selectedElement = document.querySelector(".selectOption");
// selectedElement.addEventListener("click", () => {
//     inputValues.innerHTML = selectedElement.innerHTML;
// })
let arrayToCalculate:string[] = [];
let stringOfSelectedOption: string = "" ;
let buttons = document.querySelectorAll(".selectOption");
for (const button of buttons) {
  button.addEventListener('click', () => {
    if (button.innerHTML === "AC") {
      inputValues.innerHTML = "";  
      finalOutput.innerHTML = "";
      arrayToCalculate = [];
      stringOfSelectedOption = "";
    }
    else if (button.innerHTML === "CLR") {
      inputValues.innerHTML = inputValues.innerHTML.substring(0, inputValues.innerHTML.length - 1); 
      finalOutput.innerHTML = finalOutput.innerHTML.substring(0, finalOutput.innerHTML.length - 1);
    }
    else {
      if (button.innerHTML === "+" || button.innerHTML === "-" || button.innerHTML === "*" || button.innerHTML === "/") {
        inputValues.innerHTML += button.innerHTML;
        arrayToCalculate.push(stringOfSelectedOption);
        arrayToCalculate.push(button.innerHTML);
        stringOfSelectedOption = "";
      }
      else if (button.innerHTML === "=") {
        arrayToCalculate.push(stringOfSelectedOption);
        stringOfSelectedOption = "";
        if (arrayToCalculate[1] === "+") {
          finalOutput.innerHTML = parseInt(arrayToCalculate[0]) + parseInt(arrayToCalculate[2]);
        }
        else if (arrayToCalculate[1] === "-") {
          finalOutput.innerHTML = parseInt(arrayToCalculate[0]) - parseInt(arrayToCalculate[2]);
        }
        else if (arrayToCalculate[1] === "*") {
          finalOutput.innerHTML = parseInt(arrayToCalculate[0]) * parseInt(arrayToCalculate[2]);
        }
        else if (arrayToCalculate[1] === "/") {
          finalOutput.innerHTML = (parseInt(arrayToCalculate[0]) / parseInt(arrayToCalculate[2])).toFixed(3);
        }
        if (finalOutput.innerText.length <= 10) {
          inputValues.innerHTML = finalOutput.innerHTML;
          stringOfSelectedOption += finalOutput.innerHTML;
        }
        else {
          inputValues.innerHTML = "E";
          finalOutput.innerHTML = "E";
        }
        ToStoreHistory(arrayToCalculate, finalOutput.innerText);
        arrayToCalculate = []; 
      }
      else{
        stringOfSelectedOption += button.innerHTML;
        inputValues.innerHTML += button.innerHTML;
      }
    }
  })
}

let ToStoreHistory = (array:string[], result:number) => {
        let listElement = document.createElement("li");
        unOrderedList.append(listElement);
        listElement.innerText = array[0] + " " + array[1] + " " + array[2] + " = " + result + "\n" + "------------------------";
} 

