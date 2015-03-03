Package.describe({
  name: 'use-npm',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({randy: "1.5.1", sentencer: "0.1.1"});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('use-npm.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('use-npm');
  api.addFiles('use-npm-tests.js');
});
