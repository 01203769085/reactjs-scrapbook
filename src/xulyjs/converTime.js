function converTime(time) {  
  let param = time.split("-");
  let day = param[0];
  let month = param[1];
  let year = param[2];

  switch (month) {
    case "1":
      month = "Jan";
      break;
    case "2":
      month = "Feb";
      break;
    case "3":
      month = "Mar";
      break;
    case "4":
      month = "Apr";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "Jun";
      break;
    case "7":
      month = "Jul";
      break;
    case "8":
      month = "Aug";
      break;
    case "9":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
    default:
      month = "null";
  }
  param = "" + month + " " + day + ", " + year;
  return param;
};

module.exports = {
  converTime
};