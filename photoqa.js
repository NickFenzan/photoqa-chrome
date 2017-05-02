$(()=>{
  intervalConditionalAction({
    condition: () => existsAndVisible(Finder.patient.dosLabels()),
    falseToTrue: DOSReview.injectButtons
  });
  // intervalConditionalAction({
  //   condition: () => existsAndVisible(Finder.modal.window()),
  //   falseToTrue: ReportBadPhoto.injectButtons
  // });

  var ica = new ModalWatcher({
    onFalseToTrue: logThis,
    context: {counter:0}
  })

});
function logThis(){
  console.log(this);
}
