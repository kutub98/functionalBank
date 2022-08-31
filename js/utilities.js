

function getInputValuebyId(valueField){
    const ValueField = document.getElementById(valueField);
    const ValueString = ValueField.value;
    const Value = parseFloat(ValueString);
    ValueField.value ='';
    return Value
}

function getInputElementById(elementInput){
    const elementField =document.getElementById(elementInput);
    const elementString = elementField.innerText;
    const elementinput = parseFloat(elementString);
    elementField.value ='';
    return elementinput;
}

function setElemntById(element, newValue){
    textElement =document.getElementById(element);
    textElement.innerText = newValue;
}