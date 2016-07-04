// @flow
/* eslint-disable consistent-return, max-len, spaced-comment */

import sh from "shelljs";
/*::
import type { // eslint-disable-line no-duplicate-imports
  OptExec,
} from "shelljs";
*/

export function ShellString(stdout/*: string | string[]*/)/*: Promise<ShellJS$String>*/ {
  return Promise.resolve(new sh.ShellString(stdout));
}

export function execp(cmd/*: string*/, options/*: OptExec*/ = {})/*: Promise<ShellJS$String>*/ {
  return new Promise((resolve) => {
    sh.exec(cmd, options, (code/*: number*/, stdout/*: string*/, stderr/*: string*/) => {
      resolve(new sh.ShellString(stdout, stderr, code));
    });
  });
}
