function convertToISODate(time) {
  return new Date(time.replace(" ", "T"));
}

export default convertToISODate;
