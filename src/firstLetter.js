const firstLetter = text => {
  return new Promise((resolve, reject) => {
    if (text && typeof text === "string") {
      resolve(text.charAt(0));
    } else {
      reject({
        error: `Must pass non-empty string but received "${text}" (${typeof text})`
      });
    }
  });
};

export default firstLetter;
