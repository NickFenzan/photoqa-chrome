function PatientInfo(){
  this.firstName = "",
  this.lastName = "",
  this.dob = ""
  this.patientId = ""
}
function ReviewedData(){
  this.patient = new PatientInfo();
  this.reviewer = "";
  this.dateOfService = "";
}
function PhotoProblems(){
  this.angle = false;
  this.background = false;
  this.framing = false;
  this.lighting = false;
  this.obstructions = false;
}
function BadPhoto(){
  this.id = "";
  this.patient = new PatientInfo();
  this.reviewer = "";
  this.dateOfService = "";
  this.photographer = "";
  this.legArea = "";
  this.problems = new PhotoProblems();
}
