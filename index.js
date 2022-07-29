/**
 * @file fis-optimizer-js-obfuscator
 * @author jun_zhang2011@qq.com
 */

var JavaScriptObfuscator = require('javascript-obfuscator');

module.exports = function (content, file, conf) {
  if (conf.obfuscatorLeval) {
    if (conf.obfuscatorLeval === 'high') {
      // High obfuscation, low performance
      conf = Object.assign(
        {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 1,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 1,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: 'rc4',
          stringArrayThreshold: 1,
          transformObjectKeys: true,
          unicodeEscapeSequence: false
        },
        conf
      );
    } else if (conf.obfuscatorLeval === 'medium') {
      // Medium obfuscation, optimal performance
      conf = Object.assign(
        {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          debugProtection: false,
          debugProtectionInterval: false,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: 'base64',
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: false
        },
        conf
      );
    } else if (conf.obfuscatorLeval === 'low') {
      // Low obfuscation, High performance
      conf = Object.assign(
        {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          debugProtectionInterval: false,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: false,
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false
        },
        conf
      );
    }
  }
  try {
    var obfuscationResult = JavaScriptObfuscator.obfuscate(content, conf);
    content = obfuscationResult.getObfuscatedCode();
  } catch (e) {
    fis.log.error(
      'Got Error ' + e.message + ' while obfuscator ' + file.subpath
    );
    fis.log.debug(e.stack);
  }
  return content;
};
