function existsAndVisible(elem){
  return elem.length && elem.is(":visible");
}

function intervalConditionalAction(parameters){
  var condition = functionParameter(parameters.condition);
  var falseToTrue = functionParameter(parameters.falseToTrue);
  var trueToFalse = functionParameter(parameters.trueToFalse);
  var onTrue = functionParameter(parameters.onTrue);
  var onFalse = functionParameter(parameters.onFalse);
  var state = (parameters.state) ? parameters.state : false;
  var interval = (parameters.interval) ? parameters.interval : 1000;

  return setInterval(() => {
    var condVal = condition();
    if(condVal){
      (state != condVal) ? falseToTrue() : null;
      onTrue();
    } else {
      (state != condVal) ? trueToFalse() : null;
      onFalse();
    }
    state = condVal;
  },interval);

  function functionParameter(param){
    return (param && isFunction(param))? param : ()=>{};
  }

  function isFunction(functionToCheck) {
   var getType = {};
   return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
}
