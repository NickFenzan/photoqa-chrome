var Backend = {
    serverUrl: "https://photoqa",

    reportBadPhoto: (badPhoto) => {
      return Backend.post("badPhotos", badPhoto);
    },

    markDateAsReviewed: (reviewedData) => {
      return Backend.post("reviewedDatas", reviewedData);
    },

    findExistingReviewedData: (reviewedData) => {
      return Backend.get("reviewedDatas/search/findFirstByDateOfServiceAndPatientPatientId", {
        patientId: reviewedData.patient.patientId,
        dateOfService: reviewedData.dateOfService
      });
    },

    findExistingBadPhoto: (id) => {
      return Backend.get("badPhotos/"+id);
    },

    get: (url, data) => {
      return Backend.request("GET", url, data);
    },

    post: (url, data) => {
      return Backend.request("POST", url, JSON.stringify(data));
    },

    request: (method, url, data) => {
      return $.ajax({
        method: method,
        url: Backend.serverUrl + "/" + url,
        data: data,
        contentType: "application/json",
        error: this.errorHandler
      });
    },

    errorHandler: (error) => {
      console.log(error);
      alert("An error occured while sending the data. Please contact Nick.");
    }
}
