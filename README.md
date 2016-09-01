# ideviceinstaller-js
NodeJs wrapper for ideviceinstaller.
For use on OSX.

##Getting Started
First, make sure you have ideviceinstaller installed, if you don't you can get it with brew, simply run in you Terminal:
```
brew install ideviceinstaller
```
Install package with npm:
```
npm install ideviceinstaller-js --save
```

##Usage
import the module:
```
var ideviceinstaller = require('ideviceinstaller-js')
```

Note: Providing the device udid is optional.

* ideviceinstaller.installApp
```javascript
ideviceinstaller.installApp('path/to/appFile.app/ipa','my-device-udid')
```

* ideviceinstaller.uninstallApp
```javascript
ideviceinstaller.uninstallApp('myapp.bundle.id','my-device-udid')
```

* ideviceinstaller.reinstallApp
Will try to uninstall first then install
```javascript
ideviceinstaller.installApp('path/to/appFile.app/ipa','myapp.bundle.id','my-device-udid')
```