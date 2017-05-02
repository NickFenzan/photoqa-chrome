function BadPhotoButton(){
  this.dialog = new BadPhotoDialog();
  this.element = $('<li><a><i class="md-icon material-icons">mood_bad</i></a></li>');
  this.element.click(()=>clickHandler.call(this));

  function clickHandler(){
    this.dialog.attach();
  }

  this.existingData = function (data){
    (data) ? this.markAsBad() : this.markAsGood();
    this.dialog.setFormState(data);
  };

  this.markAsBad = function(){
    this.element.find('i').css("color", "red");
  };
  this.markAsGood = function(){
    this.element.find('i').css("color", "white");
  };
}
