export const isOfType = type => obj =>
  Object.prototype.toString
    .call(obj)
    .split(" ")[1]
    .replace(/\]$/, "") === type;

export const isObject = isOfType("Object");
export const isError = isOfType("Error");

export const get = (obj, props, defaultValue = undefined) => {
  if (!isObject(obj) && !isError(obj)) {
    return defaultValue;
  }
  return props.split(".").reduce((acc, prop) => {
    return !isObject(acc) && !isError(obj)
      ? defaultValue
      : acc[prop] === undefined
      ? defaultValue
      : acc[prop];
  }, obj);
};
