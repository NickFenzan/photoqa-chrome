var DOSReview = {
  injectButtons: () => {
    Finder.patient.dosLabels().each((i,e) => {
      var reviewData = gatherReviewedData($(e));
      Backend.findExistingReviewedData(reviewData)
      .done(d => {
        console.log("Found " + d)
      })
      .fail(err => {
        console.log(err);
      });

      $(e).append(button());
    });

    function button(){
      var btn = $("<button class='dos-button'>Reviewed</button>");
      btn.click(clickHandler);
      return btn;
    }

    function clickHandler(e){
      var data = gatherReviewedData($(e.target));
      console.log(data);
      Backend.markDateAsReviewed(data)
      .done(d => console.log(d))
      .fail((e)=>{
        console.log(e);
        alert("There was an error while sending the data. Please contact Nick.");
      });
    }

    function gatherReviewedData($elem){
      var data = new ReviewedData();
      data.reviewer = Finder.loginName();
      data.dateOfService = dateOfService();
      data.patient = Finder.patient.info();
      return data;

      function dateOfService(){
        return moment($elem.siblings('span').text(),"MM-DD-YYYY").format("YYYY-MM-DD");
      }
    }
  }
}
