// @flow
/* eslint-disable spaced-comment */

const sh = require("shelljs");
/*::
import type {
  OptExec,
} from "shelljs";
*/

function ShellString(stdout/*: string | string[]*/)/*: Promise<ShellJS$String>*/ {
  return Promise.resolve(new sh.ShellString(stdout));
}

function exec(cmd/*: string*/, options/*: OptExec*/ = {})/*: Promise<ShellJS$String>*/ {
  return new Promise((resolve) => {
    sh.exec(cmd, options, (code/*: number*/, stdout/*: string*/, stderr/*: string*/) => {
      resolve(new sh.ShellString(stdout, stderr, code));
    });
  });
}

module.exports = {
  ShellString,
  exec,
};
