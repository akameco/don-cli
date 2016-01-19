#!/usr/bin/env node
'use strist';
const meow = require('meow');
const opn = require('opn');

const cli = meow(`
  Usage
    $ don open  -- Open browser
  Options
    -n, --new  New article
`, {
  alias: {
    n: 'new'
  }
});

const baseURL = 'http://staging.don.cps.im.dendai.ac.jp';
const opt = {wait: false};

if (cli.input[0] === 'open') {
  if (cli.flags.new) {
    opn(`${baseURL}/articles/new`, opt);
  } else {
    opn(baseURL, opt);
  }
}
