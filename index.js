'use strict';

const commander = require('commander');

function main() {
  const packageInfo = require('./package.json');
  commander
    .version(packageInfo.version)
    .option('-f, --file <file>', 'Read from <file>.')
    .parse(process.argv);
  if (process.argv.length < 3) {
    commander.help();
  }

  // start processing...
}

if (require.main === module) {
  main();
}
