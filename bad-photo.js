var BadPhoto = {
  injectButtons: () => {
    Finder.modalWindowNavBar().append(button());

    function button(){
      var btn = $('<li><a><i class="md-icon material-icons">mood_bad</i></a></li>');
      btn.click(clickHandler);
      return btn;

      function clickHandler(e) {
        // alert('Bad Photo!');
        badPhotoDialog();
      }
    }

    function badPhotoDialog(){
      var t = `<div class="bad-photo-dialog">
        <div class="dialog">
          <h3>Problems</h3>
          <div>
            <input type="checkbox">
            <label>Angle</label>
          </div>
          <div>
            <input type="checkbox">
            <label>Background</label>
          </div>
          <div>
            <input type="checkbox">
            <label>Framing</label>
          </div>
          <div>
            <input type="checkbox">
            <label>Lighting/Shadows</label>
          </div>
          <div>
            <input type="checkbox">
            <label>Obstructions</label>
          </div>
          <div class="buttons">
            <button>Submit</button>
          </div>
        </div>
      </div>`;
      var elem = $(t);
      elem.click((e)=>$(e.target).detach());
      elem.find('.dialog').click((e)=>e.stopPropagation());
      $('body').append(elem);
    }
  }
}
