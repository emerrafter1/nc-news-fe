function convertToISODate(time) {
  return new Date(time.replace(" ", "T"));
}

function getSortByLabel(sortBy, order) {
  if (!sortBy && !order) return "Most recent";
  if (!sortBy && order === "ASC") return "Oldest";
  if (sortBy === "comment_count" && !order) return "Highest comment count";
  if (sortBy === "comment_count" && order === "ASC")
    return "Lowest comment count";
  if (sortBy === "votes" && !order) return "Most votes";
  if (sortBy === "votes" && order === "ASC") return "Least votes";
  return "Sort by";
}

export { convertToISODate, getSortByLabel };
