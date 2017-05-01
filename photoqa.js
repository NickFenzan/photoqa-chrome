$(()=>{
  intervalConditionalAction({
    condition: () => existsAndVisible(Finder.patient.dosLabels()),
    falseToTrue: DOSReview.injectButtons
  });
  intervalConditionalAction({
    condition: () => existsAndVisible(Finder.modal.window()),
    falseToTrue: ReportBadPhoto.injectButtons
  });
});
