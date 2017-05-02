var DOSReview = {
  injectButtons: () => {
    Finder.patient.dosLabels().each((i,e) => {
      var reviewData = gatherReviewedData($(e));
      Backend.findExistingReviewedData(reviewData)
      .done(data => {
        $(e).append(reviewedLabel(data));
      })
      .fail(err => {
        $(e).append(button());
      });
    });

    function button(){
      var btn = $("<button class='dos-button'>Reviewed</button>");
      btn.click(clickHandler);
      return btn;
    }

    function reviewedLabel(data){
      var label = "Reviewed";
      if(data.reviewer){
        label = label.concat(" by ").concat(data.reviewer);
      }
      if(data.reviewDate){
        var date = moment(data.reviewDate,"YYYY-MM-DD").format("MM-DD-YYYY")
        label = label.concat(" on ").concat(date);
      }
      return $("<span class=\"reviewed-label\">"+label+"</span>");
    }

    function clickHandler(e){
      var $dosLabel = $(e.target).parents('.gallery-item-label');
      var data = gatherReviewedData($dosLabel);
      Backend.markDateAsReviewed(data)
      .done(data => {
        $(e.target).remove();
        $dosLabel.append(reviewedLabel(data));
      })
    }

    function gatherReviewedData($elem){
      var data = new ReviewedData();
      data.reviewer = Finder.loginName();
      data.dateOfService = dateOfService();
      data.patient = Finder.patient.info();
      return data;

      function dateOfService(){
        var $dosSpan = $elem.find('span')
        return moment($dosSpan.text(),"MM-DD-YYYY").format("YYYY-MM-DD");
      }
    }
  }
}
