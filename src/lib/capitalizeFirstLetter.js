function capitalizeFirstLetter(str) {
  if (!str) return str; // Check if the string is empty or undefined
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default capitalizeFirstLetter;
