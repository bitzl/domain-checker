'use strict';

const commander = require('commander');

function commandline() {
  const packageInfo = require('./package.json');
  commander
    .version(packageInfo.version)
    .option('-f, --file <file>', 'Read from <file>.')
    .parse(process.argv);
  if (process.argv.length < 3) {
    commander.help();
  }
}

function processing(options) {
  let words = fetchWords(options.tld);
  while (words.length > 0) {
    check(words, options.tld, function (error, checked) {
      if (error != null) {
        console.log(error);
        return;
      }
      save(checked);
    });
    words = fetchWords(options.tld, options.min, options.max);
  }
}

function main() {
  const opts = commandline();
  processing(opts);
}

if (require.main === module) {
  main();
}
