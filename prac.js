function calc(opr){
    let no1 = parseFloat(document.getElementById("no1").value);
    let no2 = parseFloat(document.getElementById("no2").value);
    let get_result;
    if(isNaN(no1)||isNaN(no2)){
        alert("Enter valid numbers");
        return;
    }
    switch(opr){
        case '+':
            get_result = no1 + no2;
            break;
        case '-':
            get_result = no1 - no2;
            break;
        case '*':
            get_result = no1 * no2;
            break;
        case '/':
            get_result = no1 / no2;
            break;
            default:
                alert("invalid operation");
                return
    }
    document.getElementById("get_result").innerHTML = `result: ${get_result}`;
}