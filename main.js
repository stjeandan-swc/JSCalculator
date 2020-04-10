let isReset = false;

function insertValue(num) {

  if((isReset && num != "+") && (isReset && num != "-") && (isReset && num != "*") && (isReset && num != "/")) {
    clearCalc();
    document.form.textview.value = document.form.textview.value + num;
  }
  else {
    isReset = false;
    document.form.textview.value = document.form.textview.value + num;
  }
}

function clearCalc() {
  document.form.textview.value = "";
  isReset = false;
}

function calculate() {
  let exp = document.form.textview.value;

  if(exp.length < 1) { return; }

  try {
    document.form.textview.value = eval(exp);
    isReset = true;
  }
  catch(err) {
    document.form.textview.value = "ERROR";
    setTimeout(function() {
      clearCalc();
    }, 1000);
  }
}
