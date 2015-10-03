# wrap-sync

![Last version](https://img.shields.io/github/tag/Kikobeats/wrap-sync.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/wrap-sync/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/wrap-sync)
[![Dependency status](http://img.shields.io/david/Kikobeats/wrap-sync.svg?style=flat-square)](https://david-dm.org/Kikobeats/wrap-sync)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/wrap-sync.svg?style=flat-square)](https://david-dm.org/Kikobeats/wrap-sync#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/wrap-sync.svg?style=flat-square)](https://www.npmjs.org/package/wrap-sync)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> Take a sync function and make it async, passing its return value to a callback. Based on [async#asyncify](https://github.com/caolan/async#asyncifyfunc) as module.

## Install

```bash
npm install wrap-sync --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install wrap-sync --save
```

and later link in your HTML:

```html
<script src="bower_components/wrap-sync/dist/wrap-sync.js"></script>
```

## Usage

```js
var wrapSync = require('wrap-sync');

var parse = wrapSync(JSON.parse);

parse('{\"foo\":bar}', function(err, result) {
  // data is the result of parsing the text.
  // If there was a parsing error, it would have been caught.
});
```

## API

### wrapSync(fn)

Take a sync function and make it async, passing its return value to a callback. This is useful for plugging sync functions into a waterfall, series, or other async functions. Any arguments passed to the generated function will be passed to the wrapped function (except for the final callback argument). Errors thrown will be passed to the callback

__Arguments__

* `fn` - a sync function.

## License

MIT © [Kiko Beats](http://kikobeats.com)
