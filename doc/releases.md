# Releases

Downloads available from [GitHub](https://github.com/build-canaries/nevergreen/releases)

## 0.8.0 - Heat Wave

### New Features

* [\#62](https://github.com/build-canaries/nevergreen/issues/62) Show stage name underneath pipeline name

### Improvements

* [\#87](https://github.com/build-canaries/nevergreen/issues/87) Passwords are exposed in request logs

## 0.7.0 - Grape (2015-07-24)

### New Features

* [\#73](https://github.com/build-canaries/nevergreen/issues/73) An endpoint that redirects to the latest release on GitHub

### Improvements

* Server side refactoring of ring middleware
* Updates libraries to latest versions
* [\#86](https://github.com/build-canaries/nevergreen/issues/86) Requests from Nevergreen to CI servers are not logged
* [\#78](https://github.com/build-canaries/nevergreen/issues/78) Switch to [Jest](https://facebook.github.io/jest/) for JS testing
* [\#94](https://github.com/build-canaries/nevergreen/issues/94) Remove migration code

### Closed Bugs

* [\#84](https://github.com/build-canaries/nevergreen/issues/84) Cross site AJAX requests don't work
* [\#95](https://github.com/build-canaries/nevergreen/issues/95) Custom AES keys are ignored

## 0.6.1 - Fuzzy Wuzzy (2015-06-17)

### Improvements

* [\#83](https://github.com/build-canaries/nevergreen/issues/83) An incorrect AES key is silently ignored

## 0.6.0 - Fuzzy Wuzzy (2015-07-04)

### New Features

* [\#11](https://github.com/build-canaries/nevergreen/issues/11) Highlight projects that no longer exist since the last time you configured
* Help page
* [\#37](https://github.com/build-canaries/nevergreen/issues/37) Multiple cctrays can now be added

### Closed Bugs

* [\#50](https://github.com/build-canaries/nevergreen/issues/50) You can still change tabs while project list is loading
* [\#52](https://github.com/build-canaries/nevergreen/issues/52) Interesting projects still being polled in config screen
* [\#68](https://github.com/build-canaries/nevergreen/issues/68) Server unit tests not running from develop.sh

### Improvements

* [\#56](https://github.com/build-canaries/nevergreen/issues/56) Move the version label to the bottom of the left hand menu
* [\#58](https://github.com/build-canaries/nevergreen/issues/58) Single page [React](https://facebook.github.io/react/) UI
* [\#61](https://github.com/build-canaries/nevergreen/issues/61) Wrong credentials stop the app
* [\#54](https://github.com/build-canaries/nevergreen/issues/54) Propagate error codes
* [\#72](https://github.com/build-canaries/nevergreen/issues/72) Update the contributing doc with prerequisites
* [\#70](https://github.com/build-canaries/nevergreen/issues/70) Lint jsx files
* [\#59](https://github.com/build-canaries/nevergreen/issues/59) Auto hide the menu on the monitor section
* [\#69](https://github.com/build-canaries/nevergreen/issues/69) Separate watch tasks for JS and CSS
* [\#74](https://github.com/build-canaries/nevergreen/issues/74) Use JSCS to check JS style
* [\#55](https://github.com/build-canaries/nevergreen/issues/55) Shows a thumbnail preview for success images

## 0.5.0 - Eggplant (2015-02-20)

### New Features

* [\#38](https://github.com/build-canaries/nevergreen/issues/38) Add support for HTTP basic authentication
* [\#9](https://github.com/build-canaries/nevergreen/issues/9) Allow multiple success messages to be set
* [\#45](https://github.com/build-canaries/nevergreen/issues/45) New UI

### Improvements

* [\#43](https://github.com/build-canaries/nevergreen/issues/43) Auto detect server type better
* [\#48](https://github.com/build-canaries/nevergreen/issues/48) Cache busting for releases

## 0.4.0 - Desert Sand (2015-01-30)

### New Features

* [\#33](https://github.com/build-canaries/nevergreen/issues/33) All new configuration UI
* [\#24](https://github.com/build-canaries/nevergreen/issues/24) Monitor refresh time is now configurable
* [\#34](https://github.com/build-canaries/nevergreen/issues/34) A link now appears on the monitor page (on mouse move) allowing the user to get back to the configuration page
* [\#46](https://github.com/build-canaries/nevergreen/issues/46) An image can now be used on success

### Improvements

* [\#22](https://github.com/build-canaries/nevergreen/issues/22) Functional test has been added
* [\#31](https://github.com/build-canaries/nevergreen/issues/31) Exception messages are now show to the user
* [\#35](https://github.com/build-canaries/nevergreen/issues/35) Remote ajax calls are now allowed
* [\#36](https://github.com/build-canaries/nevergreen/issues/36) A minimal working page has been added allowing developers to quickly create their own monitors
* [\#41](https://github.com/build-canaries/nevergreen/issues/41) The new label no longer appears on the first load of a cctray

## 0.3.0 - Canary (2014-12-08)

### New Features

* [\#10](https://github.com/build-canaries/nevergreen/issues/10) Add error feedback when projects fail to fetch

### Improvements

* [\#1](https://github.com/build-canaries/nevergreen/issues/1) Layout projects consistently on the config screen
* [\#26](https://github.com/build-canaries/nevergreen/issues/26) Add version number to config screen
* [\#25](https://github.com/build-canaries/nevergreen/issues/25) Fetch url on press of return key
* [\#23](https://github.com/build-canaries/nevergreen/issues/23) First load does not auto-save included projects
* [\#18](https://github.com/build-canaries/nevergreen/issues/18) Make Apache cctray url be the default in the config

## 0.2.0 - Burnt Orange (2014-11-30)

### New Features

* [\#2](https://github.com/build-canaries/nevergreen/issues/2) Highlight projects that were not there last time we configured the build view

### Closed Bugs

* [\#15](https://github.com/build-canaries/nevergreen/issues/15) Ignore trailing/preceding spaces from cctray url
* [\#17](https://github.com/build-canaries/nevergreen/issues/17) Autosave on config page does not fire on using the "include/exclude all" buttons

### Improvements

* [\#19](https://github.com/build-canaries/nevergreen/issues/19) Introduce Browserify for organising the JS code
* [\#12](https://github.com/build-canaries/nevergreen/issues/12) Use the clj-cctray library

## 0.1.0 - Atomic Tangerine (2014-11-24)

Initial release!
