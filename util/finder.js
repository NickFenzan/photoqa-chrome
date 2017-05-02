var Finder = {
  modal: {
    window: () => {
      return $('#patient-asset-modal');
    },
    navBar: () => {
      return $('#patient-asset-modal .uk-navbar-nav');
    },
    legArea: () => {
      var div = $('#patient-asset-modal .photo-title');
      if(!div.length){
        return "";
      }
      var text = div.text();
      return (text.length) ? text.substring(0, text.indexOf("-") - 1).trim() : "";
    },
    photoId: () => {
      var div = $('#patient-asset-modal img.origin_image');
      if(!div.length){
        return "";
      }
      var src = div.attr('src');
      return src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
    },
    dateOfService: () => {
      var div = $('#patient-asset-modal .photo-title');
      if(!div.length){
        return "";
      }
      var text = div.text();
      var dateText = (text.length) ? text.substring(text.indexOf("-") + 2) : "";
      return (dateText.length) ? moment(dateText, "MM-DD-YYYY").format("YYYY-MM-DD") : "";
    },
    photographer: () => {
      var div = $('#patient-asset-modal .photo-title');
      if(!div.length){
        return "";
      }
      return div.find('span').text();
    },
  },
  patient: {
    dosLabels: () => {
      return $('div.gallery-item-label');
    },
    firstName: () => {
      var div = $('h2.patient-name span:nth-child(1)');
      if(!div.length){
        return "";
      }
      var text = div.text();
      return (text.length) ? text.substring(text.indexOf(",") + 2) : "";
    },
    lastName: () => {
      var div = $('h2.patient-name span:nth-child(1)');
      if(!div.length){
        return "";
      }
      var text = div.text();
      return (text.length) ? text.substring(0, text.indexOf(",")) : "";
    },
    id: () => {
      var div = $('h2.patient-name span:nth-child(2)');
      if(!div.length){
        return "";
      }
      var text = div.text();
      return (text.length) ? text.substring(text.indexOf(":") + 2) : "";
    },
    dob: () => {
      var div = $('h2.patient-name span:nth-child(3)');
      if(!div.length){
        return "";
      }
      var text = div.text();
      var dateText = (text.length) ? text.substring(text.indexOf(":") + 2) : "";
      return (dateText.length) ? moment(dateText, "MMM DD, YYYY").format("YYYY-MM-DD") : "";
    },
    info: () => {
      var patient = new PatientInfo();
      patient.firstName = Finder.patient.firstName();
      patient.lastName = Finder.patient.lastName();
      patient.dob = Finder.patient.dob();
      patient.patientId = Finder.patient.id();
      return patient;
    }
  },
  problems: {
    angle: () => {
      return $('#angle');
    },
    background: () => {
      return $('#background');
    },
    framing: () => {
      return $('#framing');
    },
    lighting: () => {
      return $('#lighting');
    },
    obstructions: () => {
      return $('#obstructions');
    },
    status: () => {
      var data = new PhotoProblems();
      data.angle = Finder.problems.angle().prop("checked");
      data.background = Finder.problems.background().prop("checked");
      data.framing = Finder.problems.framing().prop("checked");
      data.lighting = Finder.problems.lighting().prop("checked");
      data.obstructions = Finder.problems.obstructions().prop("checked");
      return data;
    }
  },
  loginName: () => {
    var div = $('div.sudo-message');
    if(!div.length){
      return "";
    }
    var text = div.text();
    return (text.length) ? text.substring(text.indexOf(":") + 2) : "";
  },
}

function existsAndVisible(elem){
  return elem.length && elem.is(":visible");
}
