// Export a function to format a timestamp as MM/DD/YYYY
module.exports = {
  format_date: (date) => {
    const formatedDate = new Date(date);
    return formatedDate.toLocaleDateString();
  },
};
