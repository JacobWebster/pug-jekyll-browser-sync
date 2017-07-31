'use strict';

const gulp    = require('gulp');
const sass    = require('./build/sass');
const scripts = require('./build/scripts');
const images  = require('./build/images');
const pug     = require('./build/pug');
const sync    = require('./build/browsersync');

[ sass, scripts, images,  pug, sync ].forEach( task => {
  task( gulp );
});

gulp.task( 'build', [ 'sass', 'scripts', 'images', 'pug', 'jekyll-build' ]);

gulp.task( 'default', [ 'build', 'watch', 'serve' ]);
