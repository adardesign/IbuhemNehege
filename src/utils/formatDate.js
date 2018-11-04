 export function formatDate(date) {
  var today = date || new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yy = today.getFullYear().toString().substr(-2);
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "/" + dd + "/" + yy;
};