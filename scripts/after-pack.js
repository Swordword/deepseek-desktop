const fs = require('fs');
const path = require('path');

exports.default = async function(context) {
  const { outDir, packager } = context;
  const platform = packager.platform.name;
  const arch = packager.arch.name;
  
  // 获取应用目录
  const appDir = path.join(outDir, `${packager.appInfo.productName}.app`);
  
  if (platform === 'mac') {
    // 删除不必要的文件
    const filesToRemove = [
      'Contents/Resources/app/node_modules',
      'Contents/Resources/app/.git',
      'Contents/Resources/app/.github',
      'Contents/Resources/app/scripts',
      'Contents/Resources/app/src',
      'Contents/Resources/app/tsconfig.json',
      'Contents/Resources/app/tsconfig.electron.json',
      'Contents/Resources/app/.gitignore',
      'Contents/Resources/app/README.md',
      'Contents/Resources/app/README_CN.md',
      'Contents/Resources/app/LICENSE'
    ];

    filesToRemove.forEach(file => {
      const filePath = path.join(appDir, file);
      if (fs.existsSync(filePath)) {
        fs.rmSync(filePath, { recursive: true, force: true });
      }
    });

    // 优化 Info.plist
    const infoPlistPath = path.join(appDir, 'Contents/Info.plist');
    if (fs.existsSync(infoPlistPath)) {
      let infoPlist = fs.readFileSync(infoPlistPath, 'utf8');
      // 添加性能优化相关的配置
      infoPlist = infoPlist.replace(
        '</dict>',
        `  <key>NSHighResolutionCapable</key>
        <true/>
        <key>LSMinimumSystemVersion</key>
        <string>10.13.0</string>
        <key>NSAppTransportSecurity</key>
        <dict>
          <key>NSAllowsArbitraryLoads</key>
          <false/>
        </dict>
      </dict>`
      );
      fs.writeFileSync(infoPlistPath, infoPlist);
    }
  }
}; 