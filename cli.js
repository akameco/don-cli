#!/usr/bin/env node
'use strist';
const meow = require('meow');
const opn = require('opn');

const cli = meow(`
  Usage
    $ don open  -- open browser
`);

if(cli.input[0] === 'open') {
  const donURL = 'http://staging.don.cps.im.dendai.ac.jp';
  opn(donURL, {'wait': false});
}
