/*
JavaScript自学中……
初学代码，写的十分难看。希望大佬指教，万分感谢。
作者:h455257166;
脚本地址:
更新时间:
赞赏:抖音极速版邀请码"8944686211";
本脚本仅适用于[抖音极速版]签到;
兼容Nodejs,把获取的Cookie填入[DYJSB_COOKIE]，多账号用"@"分开
Cookie取两个值即可：sessionid=xxxxxxxxxxxxxx;install_id=xxxxxxxxxxxxxx; 

//走路赚金币  id:1091 未完成，小菜鸡还没抓到包

*/

const $ = new Env('抖音极速版');
let dycookiesArr = [], cookie = '';//用户cookie值
let host = 'https://api5-normal-c-hl.amemv.com';
var nowhours = $.time('HH')
const notify = $.isNode() ? require('./sendNotify') : '';


// let isGetCookie = typeof $request !== 'undefined'
// if (isGetCookie) {
//    GetCookie();
//    $.done()
// } 

// 定义cookie环境变量：DYJSB_COOKIE
if (!$.isNode() && cookie.indexOf('&') == -1){
    dycookiesArr.push(cookie)
} 

if ($.isNode()) {
    //判断环境变量中cookie的写入方式
    if (process.env.DYJSB_COOKIE && process.env.DYJSB_COOKIE.indexOf('@') > -1) {
        cookie = process.env.DYJSB_COOKIE.split('@')
        console.log(`\n您Cookie书写方式是用"@"隔开\n`)
    }
    else if (process.env.DYJSB_COOKIE && process.env.DYJSB_COOKIE.indexOf('\n') > -1) {
        cookie = process.env.DYJSB_COOKIE.split('\n')
        console.log(`\n您Cookie书写方式是用换行隔开\n`)
    }
    //获取cookie给dycookiesArr数组
    Object.keys(cookie).forEach((item) => {dycookiesArr.push(cookie[item])}); 
}




if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
   
// console.log(`============ 共 ${dycookiesArr.length}个 账号 ============ `)

!(async() => {
    if (!dycookiesArr[0]) {
        $.msg($.name, '【提示】请先抓取抖音极速版的cookie')
        return
    }
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}}  =============\n`)
    console.log(`============ 共 ${dycookiesArr.length}个 账号 ============ `)
    for (let i = 0; i < dycookiesArr.length; i++){
        if (dycookiesArr[i]) {
            cookie = dycookiesArr[i];
            $.index = i + 1;
        console.log(`\n============ 开始【抖音极速版 [账号 ${$.index}] 的任务】 ============ \n`)
        await ck_check();
        }
      }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function PostamemvHost(api,params,body){
    return {
        url:host +'/luckycat/aweme/v1/task/'+ api + '?' + params + 'aid=2329&device_platform=android&update_version_code=12800201',
        headers:{
            'Cookie': cookie,
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api5-normal-c-hl.amemv.com',
            'Connection': 'Keep-Alive',
            'User-Agent': 'com.ss.android.ugc.aweme.lite/120600 (Linux; U; Android 4.4.2; zh_CN; vivo Y28L; Build/KTU84P; Cronet/TTNetVersion:a87ab8c7 2020-11-24 QuicVersion:47946d2a 2020-10-14)',    
        },
        body:body
    }
}

function GetamemvHost(api,params,body){
    return {
        url: host +'/luckycat/aweme/v1/task/'+ api + '?' + params + 'aid=2329&device_platform=android&update_version_code=12800201',
        headers:{
            'Cookie': cookie,
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api5-normal-c-hl.amemv.com',
            'Connection': 'Keep-Alive',
            'User-Agent': 'com.ss.android.ugc.aweme.lite/120600 (Linux; U; Android 4.4.2; zh_CN; vivo Y28L; Build/KTU84P; Cronet/TTNetVersion:a87ab8c7 2020-11-24 QuicVersion:47946d2a 2020-10-14)',    
        }
    }
}


//任务列表
function ck_check(){
    return new Promise((resolve,reject) =>{
        $.get(GetamemvHost('page','','{}'),async(error,resp,data) =>{
            let ck_check_data = JSON.parse(data);
            var ck_check_test =JSON.stringify(data)
            try{
                //cookie有效期检查
                if(ck_check_data["data"]["is_login"] == true){
                    console.log(`-------------------------------- \n该账号 Cookie 有效 去做任务 \n-------------------------------- `)

                    console.log(`========================================\n\n开始 [ 开宝箱 ] 任务 🔔\n`)
                    await treasure_task()

                    tasklist = ck_check_data["data"]["task_list"]
                    for (let i in tasklist) {
                        // console.log(`==============================\n任务id：${tasklist[i]["task_id"]}  任务名称：${tasklist[i]["name"]}`) 
                        //老用户日常签到
                        if (tasklist[i]["task_id"] == '203') {
                            console.log(`========================================\n\n开始 【 ${tasklist[i]["name"]} 】 任务 🔔\n`)
                            await signin()
                        }
                        //新用户七日签到
                        else if (tasklist[i]["task_id"] == '1331') {
                            console.log(`========================================\n\n开始 【 ${tasklist[i]["name"]} 】 任务 🔔\n`)
                            await Newbie_big_reward_7()
                        }
                        //吃饭补贴
                        else if(tasklist[i]["task_id"] == '1095') {
                            console.log(`========================================\n\n开始 【 ${tasklist[i]["name"]} 】 任务 🔔\n`)
                            await meal()
                        }
                        //睡觉赚金币
                        else if(tasklist[i]["task_id"] == '145') {
                            console.log(`========================================\n\n开始 【 ${tasklist[i]["name"]} 】 任务 🔔\n`)
                            await sleep()
                        }
                        // else if(tasklist[i]["task_id"] == '1091') {
                        //     console.log(`========================================\n\n开始 [ ${tasklist[i]["name"]} ] 任务 🔔\n`)
                        //     await step_submit()
                        // }
                    }
                }
                else{
                    console.log(`------------------------\n账号 ${ck_check_test} 账号未登录，cookies已过期 \n`) 
                }
            }
            catch(e) {
                $.log(`[ 任务失败 ] \n` + e + JSON.stringify(error, null, 2))
            }
            finally {
                resolve()
            }
        })
    })

}


//老用户日常签到 id:203
function signin(){
    return new Promise((resolve,reject) =>{
        $.post(PostamemvHost('done/sign_in','','{}'),async(error,resp,data) =>{
            let central = JSON.parse(data);
            var test =JSON.stringify(data)
            // console.log(`${test}`)
            try{
                if(central.err_no == 0){
                    console.log(`\n[抖音用户日常签到]  ${central.err_tips}\n`) 
                }
                else if(central.err_no == 10006){
                    console.log(`\n[抖音用户日常签到]  ${central.err_tips}\n`) 
                }
                else{
                    console.log(`\n[抖音用户日常签到]  ${test}\n`) 
                }
            }
            catch(e) {
                $.log("[签到失败]\n" + e + JSON.stringify(error, null, 2))
            } 
            finally {
                resolve()
            }
        })
    })
}


//新用户七日签到 id:1331
function Newbie_big_reward_7(){
    return new Promise((resolve,reject) =>{
        $.post(PostamemvHost('done/newbie_big_reward','taskkey=newbie_big_reward_7&','{}'),async(error,resp,data) =>{
            let central = JSON.parse(data);
            var test =JSON.stringify(data)
            // console.log(`${test}`)
            try{
                if(central.err_no == 0){
                    console.log(`\n[抖音新人福利签到]  ${central.err_tips}\n`) 
                }
                else if(central.err_no == 10006){
                    console.log(`\n[抖音新人福利签到]  ${central.err_tips}\n`) 
                }
                else{
                    console.log(`\n[抖音新人福利签到]  ${test}\n`) 
                }
            }
            catch(e) {
                $.log("[签到失败]\n" + e + JSON.stringify(error, null, 2))
            } 
            finally {
                resolve()
            }
        })
    })
}


//吃饭补贴 id:1095
// #吃饭补贴  |  "app_id": 2329, "task_id": 1095,  "key": "meal", | 已完成 
// #早餐：05:00-09:00 | data = {"meal_type":0}  
// #午餐：11:00-14:00 | data = {"meal_type":1}  
// #晚餐：17:00-20:00 | data = {"meal_type":2} 
// #夜宵：21:00-24:00 | data = {"meal_type":3} 
function meal(){
    return new Promise((resolve,reject) =>{
        // nowhours = $.time('HH')
        // console.log(`------------------------\n[nowhours]  ${nowhours}\n`) 
        if ( nowhours >= 5 && nowhours <= 9) {
            datacode = {'meal_type':0}
            console.log(`\n执行[5-9]早餐补贴${$.toStr(datacode)}\n`) 
        }
        else if (nowhours >= 11 && nowhours <= 14) {
            datacode = {"meal_type":1}
            console.log(`\n执行[11-14]午餐补贴${$.toStr(datacode)}\n`) 
        }
        else if (nowhours >= 17 && nowhours <= 20) {
            datacode = {'meal_type':2}
            console.log(`\n执行[17-20]晚餐补贴${$.toStr(datacode)}\n`) 
        }
        else if (nowhours >= 21 && nowhours <= 24) {
            datacode = {"meal_type":3}
            console.log(`\n执行[21-24]夜宵补贴${$.toStr(datacode)}\n`) 
        }
        else {
            console.log(`\n[吃饭补贴]，不在时间段内，跳出任务\n`) 
            return
        }
        $.post(PostamemvHost('done/meal','',$.toStr(datacode)),async(error,resp,data) =>{
            let central = JSON.parse(data);
            var test =$.toStr(data)
            // console.log(`${test}`)
            try{
                if(central.err_no == 0){
                    console.log(`\n[吃饭补贴]  ${central.err_tips} 已领取吃饭补贴${central["data"]["amount"]}金币'\n`) 
                }
                else if(central.err_no == 10002){
                    console.log(`\n[吃饭补贴]  参数错误：${test}\n`) 
                }               
                else if(central.err_no == 10006){
                    console.log(`\n[吃饭补贴]  ${central.err_tips}\n`) 
                }
                else if(central.err_no == 10007){
                    console.log(`\n[吃饭补贴]  领取时间未到：${test}\n`) 
                }
                else{
                    console.log(`\n[吃饭补贴]  未知反馈：${test}\n`) 
                }
            }
            catch(e) {
                $.log("[吃饭补贴失败]\n" + e + $.toStr(error, null, 2))
            } 
            finally {
                resolve()
            }
        })
    })
}


//睡觉赚金币 id:145
// # 去睡觉 | POST /luckycat/aweme/v1/task/done/sleep  {"done_type":"start_sleep"}#晚上：20:00-凌晨：02：00
// # 睡醒了 | POST /luckycat/aweme/v1/task/done/sleep  {"done_type":"end_sleep"}          
// # 领取奖励 | POST /luckycat/aweme/v1/task/done/sleep  {"amount":7,"done_type":"receive_awards"}  amount的value来自“睡醒后”的data-income_info-amount
const sleep = async() => {
    // console.log(`------------------------\n[nowhours]  ${nowhours}\n`) 
    if ( nowhours >= 20 ) {
        datacode = {"done_type":"start_sleep"}  
        console.log(`\n执行睡觉赚金币 —> 去睡觉${$.toStr(datacode)}\n`)
        //去睡觉
        await do_sleep(datacode)
    }
    else if (nowhours >= 8 && nowhours <= 9) {
        datacode = {"done_type":"end_sleep"}
        console.log(`\n执行睡觉赚金币 —> 睡醒了${$.toStr(datacode)}\n`) 
        //已睡醒
        await do_sleep(datacode)
        //领取奖励
        await receive_awards()
        
    }
    else {
        console.log(`\n[睡觉赚金币]，不在时间段内，跳出任务\n`) 
        return
    }
}


//睡觉赚金币——去睡觉&完成睡觉
function do_sleep(datacode){
    return new Promise((resolve,reject) =>{
        $.post(PostamemvHost('done/sleep','_request_from=web&',$.toStr(datacode)),async(error,resp,data) =>{
            let central = JSON.parse(data);
            var test =JSON.stringify(data)
            // console.log(`${test}`)
                try{
                    if(central.err_no == 0){
                        console.log(`\n[睡觉赚金币]—>${$.toStr(datacode)}  ${central["data"]}'\n`) 
                    }
                    else if(central.err_no == 10002){
                        console.log(`\n[睡觉赚金币]—>${$.toStr(datacode)}  参数错误：${test}\n`) 
                    }               
                    else if(central.err_no == 10006){
                        console.log(`\n[睡觉赚金币]—>${$.toStr(datacode)}  ${central.err_tips}\n`) 
                    }
                    else if(central.err_no == 10007){
                        console.log(`\n[睡觉赚金币]—>${$.toStr(datacode)}  领取时间未到：${test}\n`) 
                    }
                    else{
                        console.log(`\n[睡觉赚金币]—>${$.toStr(datacode)}  未知反馈：${test}\n`) 
                    }
                }
                catch(e) {
                    $.log("[睡觉赚金币]\n" + e + $.toStr(error, null, 2))
                } 
                finally {
                    resolve()
                }
        })
    })
}


//睡觉赚金币——兑换奖励
function receive_awards(){
    return new Promise((resolve,reject) =>{
        $.post(PostamemvHost('done/sleep','_request_from=web&','{"amount":7,"done_type":"receive_awards"}'),async(error,resp,data) =>{
            let central = JSON.parse(data);
            var test =JSON.stringify(data)
            // console.log(`${test}`)
                try{
                    if(central.err_no == 0){
                        console.log(`\n[睡觉赚金币]—>[receive_awards]  ${central["data"]}'\n`) 
                    }
                    else if(central.err_no == 10002){
                        console.log(`\n[[睡觉赚金币]—>[receive_awards]  参数错误：${test}\n`) 
                    }               
                    else if(central.err_no == 10006){
                        console.log(`\n[睡觉赚金币]—>[receive_awards]  ${central.err_tips}\n`) 
                    }
                    else if(central.err_no == 10007){
                        console.log(`\n[睡觉赚金币]—>[receive_awards]  领取时间未到：${test}\n`) 
                    }
                    else{
                        console.log(`\n[睡觉赚金币]—>[receive_awards]  未知反馈：${test}\n`) 
                    }
                }
                catch(e) {
                    $.log("[睡觉赚金币]—>[receive_awards]\n" + e + $.toStr(error, null, 2))
                } 
                finally {
                    resolve()
                }
        })
    })
}



//开宝箱
const treasure_task = async() => {
    var crontime = ['0','3','6','9','12','15','18','21'];//HH
    //判断当前的HH是否在定时数组内，存在即返回0，不存在则返回-1
    if (crontime.indexOf(nowhours) > -1){
        console.log(`\n现在时间：${nowhours}:00  \n`) 
        return new Promise((resolve,reject) =>{
            $.post(PostamemvHost('done/treasure_task','',''),async(error,resp,data) =>{
                var result = $.toObj(data);
                var test = $.toStr(data);
                try{
                    if(result.err_no == 0){
                         console.log(`\n[📣开宝箱]  [成功提交] 获得：${result["data"]["amount"]} 金币\n`) 
                    }
                    else if(result.err_no == 10001){
                         console.log(`\n该账户 Cookies 过期\n`) 
                    }
                    else{
                        console.log(`\n[📣开宝箱]  [提交失败] 未知反馈：${test} \n`) 
                    }
                }
                catch(e){
                    $.log("[📣开宝箱]\n" + e + $.toStr(error, null, 2))
                }
                finally{
                    resolve()
                }
            })
        })
    }
    else{
        console.log(`\n[📣开宝箱]，不在时间段内，跳出任务\n`) 
        return
    }
}



//走路赚金币  id:1091 未完成，抓不到包
//提交步数
// function step_submit() {
//     const steps = Math.round(Math.random()*(12000 - 10001) + 10001);
//     const time = Math.round(new Date().getTime()/1000).toString();
//     datacode = {"step" : steps,"submit_time" :time, "in_sp_time" : 0}
//     return new Promise((resolve,reject) =>{
//         $.post(PostamemvHost('walk/step_submit','',$.toStr(datacode)),async(error,resp,data) =>{
//             const result = JSON.parse(data);
//             var test =JSON.stringify(data)
//             console.log(`\n[走路赚金币]—>[提交步数]  [未完成] 未知反馈：${test}\n`) 
//             // if(logs) $.log(data)
//             // message += '📣提交步数\n'
//             if(result.err_no == 0) {
//                 console.log(`\n[走路赚金币]—>[📣提交步数]  [成功提交] 未知反馈：${test}\n`) 
//                 // message += result.err_tips+"今日步数:"+result.data.today_step+'\n'
//             }else{
//                 console.log(`\n[走路赚金币]—>[📣提交步数]  [⚠️异常] ${result["err_tips"]}\n`) 
//                 // message += '⚠️异常'+result.err_tips+'\n'
//             }
//         resolve()
//         })
//    })
// } 
//获取走路金币
// function step_reward() {
// return new Promise((resolve, reject) => {
//   let step_rewardurl ={
//       url: `https://aweme-lq.snssdk.com/luckycat/aweme/v1/task/walk/receive_step_reward?${stepheader}`,
//       headers: JSON.parse(stepkey),
//       body:`{"in_sp_time":0}`
// }
//    $.post(step_rewardurl,(error, response, data) =>{
//      const result = JSON.parse(data)
//      if(logs) $.log(data)
//      message += '📣获取奖励\n'
//      if(result.err_no == 0) {
//           message += result.err_tips+"获得:"+result.data.reward_amount+'\n'
//       }else{
//        message += '⚠️异常'+result.err_tips+'\n'
//       }
//          resolve()
//    })
//   })
//  } 




function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
