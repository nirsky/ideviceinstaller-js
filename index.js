var run = require('./src/shell-executor').run;

const installApp = (appPath, udid) => {
    udid = udid || '';
    const command = `ideviceinstaller ${udid === '' ? '' : '-u ' + udid } -i ${appPath}`;
    return run(command);
};

const uninstallApp = (bundleId, udid) => {
    udid = udid || '';
    const command = `ideviceinstaller ${udid === '' ? '' : '-u ' + udid } -U ${bundleId}`;
    return run(command);
};

const reinstallApp = (appPath, bundleId, udid) => {
    uninstallApp(bundleId,udid);
    installApp(appPath,udid);
};

module.exports = {
  installApp, uninstallApp, reinstallApp
};