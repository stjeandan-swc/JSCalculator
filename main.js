window.onload = checkForNum;

let isReset;

function insertValue(num) {


  if(isReset && num != '+' && isReset && num != '-' &&
      isReset && num != '*' && isReset && num != '/') {
        clearCalc();
        document.form.textview.value = document.form.textview.value + num;
        checkForNum()
  }
  else {
    isReset = false;
    document.form.textview.value = document.form.textview.value + num;
    checkForNum()
  }

}

function clearCalc() {
  document.form.textview.value = "";
  isReset = false;
  checkForNum()
}

function calculate() {
  let exp = document.form.textview.value;

  document.form.textview.value = eval(exp);
  isReset = true;
}

function checkForNum() {
  let testValue = document.form.textview.value;

  if(testValue == "") {
    document.getElementById('addition').disabled = true;
    document.getElementById('subract').disabled = true;
    document.getElementById('multipy').disabled = true;
    document.getElementById('divide').disabled = true;
    document.getElementById('eval').disabled = true;
  }
  else {
    document.getElementById('addition').disabled = false;
    document.getElementById('subract').disabled = false;
    document.getElementById('multipy').disabled = false;
    document.getElementById('divide').disabled = false;
    document.getElementById('eval').disabled = false;
  }
}
