// https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
// https://www.reddit.com/r/node/comments/12uak6h/npx_not_running_correctly/
// https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
// https://github.com/yargs/yargs/issues/1844#issuecomment-998966393
// https://github.com/yargs/yargs/issues/225#issuecomment-699540088
// https://github.com/lirantal/nodejs-cli-apps-best-practices

// https://stackoverflow.com/a/69503617
/*
chmod +x ./dist/app.cjs
yarn link
servable
*/

import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs';
import registerCommands from './commands/index.js';
import _path from 'path';
import getFileCallerURL from './lib/getFileCallerURL.js';
import loadOptions from './loadOptions/index.js';


export default async ({ path, npmPackage, config } = {}) => {

  // import options from './options.js';
  let __actualPath = path
  if (!__actualPath) {
    const ce = getFileCallerURL()
    __actualPath = _path.dirname(ce)
    __actualPath = __actualPath.replace('file://', '')
  }


  let __actualNpmPackage = npmPackage
  if (!__actualNpmPackage) {
    const __d = _path.resolve(__actualPath, '../package.json')
    if (fs.existsSync(__d)) {
      __actualNpmPackage = JSON.parse(fs.readFileSync(__d).toString())
    }
  }
  if (!__actualNpmPackage) {
    __actualNpmPackage = { version: "0.0.0" }
  }

  let __actualConfig = config
  if (!__actualConfig) {
    const __d = _path.resolve(__actualPath, '../cli.config.json')
    if (fs.existsSync(__d)) {
      __actualConfig = JSON.parse(fs.readFileSync(__d).toString())
    }
  }
  if (!__actualConfig) {
    __actualConfig = {}
  }
  //https://github.com/yargs/yargs/issues/569



  const yargs = _yargs(hideBin(process.argv))


  yargs
    // .options(options)
    .usage('Usage: servable <command>')
    .demandCommand(1)
    .wrap(Math.min(yargs.terminalWidth(), 160))
    .help('help')
    .alias('help', 'h')
    .version(__actualNpmPackage.version)
    .alias('version', 'v')
    .hide('help')
    .hide('version')
    .epilog('Made by Servable.')

  const options = await loadOptions({ path: __actualPath, config: __actualConfig })
  await registerCommands({ path: __actualPath, yargs, config: __actualConfig, options })

}


