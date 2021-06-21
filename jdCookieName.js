/*
此文件为Node.js专用。其他用户请忽略
 */
let CookieNameJDs = [
  '',//账号一的备注名;
  '',//账号二的备注名;如有更多,依次类推
]
// 判断环境变量里面是否有京东JD_COOKIENAME
if (process.env.JD_COOKIENAME) {
  if (process.env.JD_COOKIENAME.indexOf('&') > -1) {
    CookieNameJDs = process.env.JD_COOKIENAME.split('&');
  } else if (process.env.JD_COOKIENAME.indexOf('\n') > -1) {
    CookieNameJDs = process.env.JD_COOKIENAME.split('\n');
  } else {
    CookieNameJDs = [process.env.JD_COOKIENAME];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieNameJDs = [...new Set(CookieNameJDs.filter(item => !!item))]
console.log(`\n====================共${CookieNameJDs.length}个京东账号Cookie填写了备注=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)

for (let j = 0; j < CookieNameJDs.length; j++) {
  // if (!CookieNameJDs[i].match(/pt_pin=(.+?);/) || !CookieNameJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieNameJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  const index = (j + 1 === 1) ? '' : (j + 1);
  exports['CookieNameJD' + index] = CookieNameJDs[j].trim();
  // exports['CookieNameJD' + index] = CookieNameJDs[j];
}
