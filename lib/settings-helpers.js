'use strict';

/**
 * Checks if the given object contains the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @returns {boolean}
 */
module.exports.hasKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];

    if (obj.hasOwnProperty(key)) {
      obj = obj[key];
    } else {
      return false;
    }
  }

  return true;
};

/**
 * Gets the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @returns {any}
 */
module.exports.getValueAtKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];

    if (obj.hasOwnProperty(key)) {
      obj = obj[key];
    } else {
      return undefined;
    }
  }

  return obj;
};

/**
 * Sets the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @param {any} value
 */
module.exports.setValueAtKeyPath = (obj, keyPath, value) => {
  const keys = keyPath.split(/\./);

  while (keys.length > 1) {
    const key = keys.shift();

    if (!obj.hasOwnProperty(key)) {
      obj[key] = {};
    }

    obj = obj[key];
  }

  obj[keys.shift()] = value;
};

/**
 * Deletes the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 */
module.exports.deleteValueAtKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  while (keys.length > 1) {
    const key = keys.shift();

    if (!obj.hasOwnProperty(key)) {
      return;
    }

    obj = obj[key];
  }

  delete obj[keys.shift()];
};