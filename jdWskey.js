/*
此文件为Node.js专用。其他用户请忽略
@author LingFeng0918
 */
//此处填写京东账号wskey。
let WskeyJDs = [
'',
'',
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_WSKEY) {
  if (process.env.JD_WSKEY.indexOf('&') > -1) {
    WskeyJDs = process.env.JD_WSKEY.split('&');
  } else if (process.env.JD_WSKEY.indexOf('\n') > -1) {
    WskeyJDs = process.env.JD_WSKEY.split('\n');
  } else {
    WskeyJDs = [process.env.JD_WSKEY];
  }
}

WskeyJDs = [...new Set(WskeyJDs.filter(item => !!item))]
console.log(`\n====================共${WskeyJDs.length}个京东账号wskeye=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let w = 0; w < WskeyJDs.length; w++) {
  if (!WskeyJDs[w].match(/pin=(.+?);/) || !WskeyJDs[w].match(/wskey=(.+?);/)) console.log(`\n提示:京东wskey 【${WskeyJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: wskey=xxx;pin=xxx;（分号;不可少）\n`);
  const index = (w + 1 === 1) ? '' : (w + 1);
  exports['WskeyJDs' + index] = WskeyJDs[w].trim();
}
