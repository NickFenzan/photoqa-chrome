function PhotoWatcher(parameters){
  parameters = parameters ? parameters : {};
  parameters.context = parameters.context ? parameters.context : {};
  parameters.context.photoId = "";
  parameters.onFalse = photoChange
  parameters.condition = () => this.context.photoId == Finder.modal.photoId();
  ICA.call(this, parameters);

  function photoChange() {
    this.context.photoId = Finder.modal.photoId();
    Backend.findExistingBadPhoto(this.context.photoId)
    .done(d => this.context.badPhotoButton.existingData(d.problems))
    .fail(() => this.context.badPhotoButton.existingData());
  }
}

function ModalWatcher(parameters) {
  parameters = parameters ? parameters : {};
  parameters.context = {photoId: ""};
  parameters.condition = () => existsAndVisible(Finder.modal.window());
  parameters.onTrueToFalse = onModalClose;
  parameters.onFalseToTrue = onModalOpen;
  ICA.call(this, parameters)

  function onModalOpen(){
    this.badPhotoButton = new BadPhotoButton();
    this.photoWatcher = new PhotoWatcher({context:{badPhotoButton:this.badPhotoButton}});
    Finder.modal.navBar().append(this.badPhotoButton.element);
  }

  function onModalClose(){
    clearInterval(this.photoWatcher.timer);
  }

}
