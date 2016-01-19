#!/usr/bin/env node
'use strist';
const meow = require('meow');
const opn = require('opn');
const fs = require('fs-extra');

const cli = meow(`
  Usage
    $ don open  -- Open browser
  Options
    -n, --new  New article
  Usage
    $ don create  -- Create #週報
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
} else if (cli.input[0] === 'create') {
  fs.copy(`${__dirname}/templates/week.md`, `${process.cwd()}/week.md`, err => {
    if (err) {
      console.error(err);
    }
    console.log('Create week.md.')
  });
}

