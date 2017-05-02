function BadPhotoDialog(){
  getTemplate().done(template => initializeElement.call(this, template));

  function initializeElement(template){
    this.element = $(template);
    this.element.click(()=>this.element.detach());
    this.element.find('.dialog').click((e) => e.stopPropagation());
    this.element.find('button').click(() => submitBadPhoto.call(this));
  }

  function submitBadPhoto(){
    var data = new BadPhoto();
    data.id = Finder.modal.photoId();
    data.reviewer = Finder.loginName();
    data.photographer = Finder.modal.photographer();
    data.legArea = Finder.modal.legArea();
    data.dateOfService = Finder.modal.dateOfService();
    data.patient = Finder.patient.info();
    data.problems = Finder.problems.status();
    Backend.reportBadPhoto(data)
    .done(()=>this.element.detach());
  }

  function getTemplate(){
    return $.get(chrome.extension.getURL("bad-photo/bad-photo-dialog.html"));
  }

  this.attach = function (){
    $('body').append(this.element);
  }

  this.setFormState = function(problems){
    problems = (problems) ? problems : new PhotoProblems();
    this.element.find('#angle').prop("checked", (problems.angle));
    this.element.find('#background').prop("checked", (problems.background));
    this.element.find('#framing').prop("checked", (problems.framing));
    this.element.find('#lighting').prop("checked", (problems.lighting));
    this.element.find('#obstructions').prop("checked", (problems.obstructions));
  }

}
