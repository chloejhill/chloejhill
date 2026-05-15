/** Fixes Payload loadEnv when @next/env default export is undefined under tsx. */
const Module = require('node:module');
const nextEnv = require('@next/env');

const wrapped = { ...nextEnv, default: nextEnv };
const originalLoad = Module._load;

Module._load = function (request, parent, isMain) {
  if (request === '@next/env') {
    return wrapped;
  }
  return originalLoad.apply(this, arguments);
};
