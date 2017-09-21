/**
 * Created by family2hu on 2017/9/11.
 * Step1： 安装 brew install graphicsmagick
 * Step2： npm install gm
 *
 * 运行命令： node-babel index
 */
import gm from 'gm';
import fs from 'fs'


let inputDir = '/Users/jiatinghu/Documents/test';
let outputDir = '/Users/jiatinghu/Documents/test/output';
let files = fs.readdirSync(inputDir);
files.map(file => {
    if (/\$*.jpg$|\$*.jepg$|\$*.png$/.test(file)){   //匹配图片，支持jpg，jpeg和png格式
        gm(`${inputDir}/${file}`)
        .resize(1024,1024)    //指定图片大小
        .noProfile()          //移除EXIF信息
        .write(`${outputDir}/${file}`, function (err) {
          if (!err) {
              console.log('done');
            } else {
                console.log(err);
            }
        });
    }
})