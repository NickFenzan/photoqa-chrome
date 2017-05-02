function existsAndVisible(elem){
  return elem.length && elem.is(":visible");
}

function functionParameter(param){
  return (param && isFunction(param))? param : ()=>{};
}

function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function intervalConditionalAction(parameters){
  var condition = functionParameter(parameters.condition);
  var falseToTrue = functionParameter(parameters.falseToTrue);
  var trueToFalse = functionParameter(parameters.trueToFalse);
  var onTrue = functionParameter(parameters.onTrue);
  var onFalse = functionParameter(parameters.onFalse);
  var state = (parameters.state) ? parameters.state : false;
  var interval = (parameters.interval) ? parameters.interval : 1000;
  var context = (parameters.context)? parameters.context : {};

  context.timer = setInterval(() => {
    var condVal = condition();
    if(condVal){
      (state != condVal) ? falseToTrue.call(context) : null;
      onTrue.call(context);
    } else {
      (state != condVal) ? trueToFalse.call(context) : null;
      onFalse.call(context);
    }
    state = condVal;
  },interval);
  return context.timer;

  // function functionParameter(param){
  //   return (param && isFunction(param))? param : ()=>{};
  // }
  //
  // function isFunction(functionToCheck) {
  //  var getType = {};
  //  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  // }
}
