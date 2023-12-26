#!/usr/bin/env node
// https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
// https://www.reddit.com/r/node/comments/12uak6h/npx_not_running_correctly/
// https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
// https://github.com/yargs/yargs/issues/1844#issuecomment-998966393
// https://github.com/yargs/yargs/issues/225#issuecomment-699540088

// https://stackoverflow.com/a/69503617
/*
chmod +x ./dist/app.cjs
yarn link
servable
*/

import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as Engine from '../engine/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// import options from './options.js';

const yargs = _yargs(hideBin(process.argv))
const npmPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')).toString());
//https://github.com/yargs/yargs/issues/569

yargs
  // .options(options)
  .usage('Usage: servable <command>')
  .demandCommand(1)
  .version(npmPackage.version)
  .wrap(Math.min(yargs.terminalWidth(), 160))
  .help('help')
  .alias('help', 'h')
  .version(npmPackage.version)
  .alias('version', 'v')
  .hide('help')
  .hide('version')
  .epilog('Made by Servable.')

Engine.register({ path: `${__dirname}/commands`, yargs, })
