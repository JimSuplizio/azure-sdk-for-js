// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { delay } = require("./delay");

const b = "Hello world!";

module.exports = {
  b,
  default: async function (value, waitForMilliseconds) {
    await delay(waitForMilliseconds);
    console.log(value);
  },
};
