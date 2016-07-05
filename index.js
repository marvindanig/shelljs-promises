// @flow
/* eslint-disable spaced-comment */

const sh = require("shelljs");
/*::
import type {
  OptExec,
  ShellString,
} from "shelljs";
*/

function shellString(stdout/*: string | string[]*/ = "")/*: Promise<ShellString>*/ {
  return Promise.resolve(new sh.ShellString(stdout));
}

function exec(cmd/*: string*/, options/*: OptExec*/ = {})/*: Promise<ShellString>*/ {
  return new Promise((resolve) => {
    sh.exec(cmd, options, (code/*: number*/, stdout/*: string*/, stderr/*: string*/) => {
      resolve(new sh.ShellString(stdout, stderr, code));
    });
  });
}

module.exports = {
  shellString,
  exec,
};
