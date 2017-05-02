function ICA(parameters){
  this.condition = functionParameter(parameters.condition);
  this.onFalseToTrue = functionParameter(parameters.onFalseToTrue);
  this.onTrueToFalse = functionParameter(parameters.onTrueToFalse);
  this.onTrue = functionParameter(parameters.onTrue);
  this.onFalse = functionParameter(parameters.onFalse);
  this.state = (parameters.state) ? parameters.state : false;
  this.interval = (parameters.interval) ? parameters.interval : 1000;
  this.context = (parameters.context)? parameters.context : {};
  this.timer = setInterval(() => {
    var condVal = this.condition();
      if(condVal){
        (this.state != condVal) ? this.onFalseToTrue() : null;
        this.onTrue();
      } else {
        (this.state != condVal) ? this.onTrueToFalse() : null;
        this.onFalse();
      }
      this.state = condVal;
  }, this.interval);

  function functionParameter(param){
    return (param && isFunction(param))? param : ()=>{};
  }

  function isFunction(functionToCheck) {
   var getType = {};
   return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
}
