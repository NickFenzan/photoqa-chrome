var ReportBadPhoto = {
  injectButtons: () => {
    Finder.modal.navBar().append(button());

    function button(){
      var btn = $('<li><a><i class="md-icon material-icons">mood_bad</i></a></li>');
      btn.click(clickHandler);
      return btn;

      function clickHandler(e) {
        injectBadPhotoDialog();
      }
    }

    function injectBadPhotoDialog(){
      $.get(chrome.extension.getURL("bad-photo-dialog.html"))
      .done((template)=>{
        var $elem = $(template);
        addEventListeners($elem);
        $('body').append($elem);
      });

      function addEventListeners($elem){
        $elem.click((e) => $elem.detach());
        $elem.find('.dialog').click((e) => e.stopPropagation());
        $elem.find('button').click(submitBadPhoto)

        function submitBadPhoto(){
          var data = gatherData();
          Backend.reportBadPhoto(data)
          .done(d => console.log(d));
          // alert(JSON.stringify(data));

          function gatherData(){
            var data = new BadPhoto();
            data.id = Finder.modal.photoId();
            data.reviewer = Finder.loginName();
            data.photographer = Finder.modal.photographer();
            data.legArea = Finder.modal.legArea();
            data.dateOfService = Finder.modal.dateOfService();
            data.patient = Finder.patient.info();
            data.problems = Finder.problems.status();
            return data;

            function dateOfService(){
              return moment($elem.siblings('span').text(),"MM-DD-YYYY").format("YYYY-MM-DD");
            }
          }
        }
      }
    }
  }
}
