
var fallbackConfig = {"uu5loaderg01_initUuAppDisabled":true};
var devConfig = require("C:\\Users\\lenka\\OneDrive\\Documents\\Lenka škola\\Frontendové systémy\\uu_shoppingapp_maing01\\uu_shoppingapp_maing01-hi\\env\\development.json").uu5Environment;
var config = require("C:\\Users\\lenka\\OneDrive\\Documents\\Lenka škola\\Frontendové systémy\\uu_shoppingapp_maing01\\uu_shoppingapp_maing01-hi\\env\\production.json").uu5Environment || {};
if (devConfig) for (var k in devConfig) config[k] = devConfig[k];
if (fallbackConfig) for (var k in fallbackConfig) if (!(k in config)) config[k] = fallbackConfig[k];
window.UU5 = { Environment: config };
