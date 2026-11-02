const fs = require('fs');

const origReadlink = fs.readlink;
const origReadlinkSync = fs.readlinkSync;
const origPromisesReadlink = fs.promises ? fs.promises.readlink : null;

fs.readlink = function(path, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  origReadlink(path, options, (err, linkString) => {
    if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
      const error = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      error.code = 'EINVAL';
      error.errno = -4071;
      error.syscall = 'readlink';
      error.path = path;
      return callback(error);
    }
    callback(err, linkString);
  });
};

fs.readlinkSync = function(path, options) {
  try {
    return origReadlinkSync(path, options);
  } catch (err) {
    if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
      const error = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      error.code = 'EINVAL';
      error.errno = -4071;
      error.syscall = 'readlink';
      error.path = path;
      throw error;
    }
    throw err;
  }
};

if (origPromisesReadlink) {
  fs.promises.readlink = async function(path, options) {
    try {
      return await origPromisesReadlink(path, options);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
        const error = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        error.code = 'EINVAL';
        error.errno = -4071;
        error.syscall = 'readlink';
        error.path = path;
        throw error;
      }
      throw err;
    }
  };
}
