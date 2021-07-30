/*
京东全民开红包
Last Modified time: 2021-05-19 16:27:18
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#京东全民开红包
1 1,2,23 * * * jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true
===================Loon==============
[Script]
cron "1 1,2,23 * * *" script-path=jd_redPacket.js, tag=京东全民开红包
===============Surge===============
[Script]
京东全民开红包 = type=cron,cronexp="1 1,2,23 * * *",wake-system=1,timeout=3600,script-path=jd_redPacket.js
====================================小火箭=============================
京东全民开红包 = type=cron,script-path=jd_redPacket.js, cronexpr="1 1,2,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
$.redPacketId = [];


/*
 *Progcessed By JSDec in 1.18s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x331d2e => {
        cookiesArr.push(jdCookieNode[_0x331d2e]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console.log = () => {};
    if (JSON.stringify(process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x571e32 => _0x571e32['cookie'])]['filter'](_0x279622 => !!_0x279622);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x2b599c = {
        'XiMRn': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'tEAqv': 'https://bean.m.jd.com/bean/signIndex.action',
        'WDhXz': function(_0x29359d, _0x5b1802) {
            return _0x29359d(_0x5b1802);
        },
        'sqQLO': function(_0x554cb2, _0x134370) {
            return _0x554cb2(_0x134370);
        },
        'epCvw': function(_0xdf550) {
            return _0xdf550();
        },
        'yPPHv': function(_0x9a55e3, _0x3fc3fa) {
            return _0x9a55e3 < _0x3fc3fa;
        },
        'IREKc': function(_0x54b598) {
            return _0x54b598();
        },
        'Wxsdm': function(_0x426515, _0x1f6180) {
            return _0x426515 < _0x1f6180;
        },
        'duSwE': function(_0x4e533d, _0x36f384) {
            return _0x4e533d + _0x36f384;
        },
        'Imrul': function(_0x3662a4, _0x2a6f59) {
            return _0x3662a4(_0x2a6f59);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x2b599c['XiMRn'], _0x2b599c['tEAqv'], {
            'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
        });
        return;
    }
    let _0x254699 = await _0x2b599c['WDhXz'](getAuthorShareCode, 'https://raw.githubusercontent.com/gitupdate/updateTeam/master/shareCodes/jd_red.json'),
        _0x49dd90 = await _0x2b599c['sqQLO'](getAuthorShareCode, 'http://cdn.annnibb.me/red.json');
    if (!_0x254699) _0x254699 = await _0x2b599c['epCvw'](getAuthorShareCode);
    // $.authorMyShareIds = [..._0x254699 || [], ..._0x49dd90 || []];
    $.authorMyShareIds = [];
    for (let _0xd83cb6 = 0x0; _0x2b599c['yPPHv'](_0xd83cb6, cookiesArr['length']); _0xd83cb6++) {
        if (cookiesArr[_0xd83cb6]) {
            cookie = cookiesArr[_0xd83cb6];
            $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0xd83cb6 + 0x1;
            $['isLogin'] = true;
            $['nickName'] = '';
            await TotalBean();
            console.log('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                });
                continue;
            }
            $['discount'] = 0x0;
            await _0x2b599c['epCvw'](redPacket);
            await _0x2b599c['IREKc'](showMsg);
        }
    }
    for (let _0x108dc3 = 0x0; _0x2b599c['Wxsdm'](_0x108dc3, cookiesArr['length']); _0x108dc3++) {
        cookie = cookiesArr[_0x108dc3];
        $['index'] = _0x2b599c['duSwE'](_0x108dc3, 0x1);
        $['UserName'] = _0x2b599c['Imrul'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        $.canHelp = true;
        $.redPacketId = [...new Set($.redPacketId)];
        if (cookiesArr && cookiesArr['length'] > 0x2) {
            console.log('\n\n自己账号内部互助');
            for (let _0x5c5ad1 of $.redPacketId) {
                console.log('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x5c5ad1 + ' 进行助力');
                await jinli_h5assist(_0x5c5ad1);
                if (!$.canHelp) {
                    console.log('次数已用完或活动火爆，跳出助力');
                    break;
                }
            }
        }
        if ($.canHelp) {
            console.log('\n\n有剩余助力机会则给作者lxk0301进行助力');
            for (let _0x3f5aaf of $.authorMyShareIds || []) {
                console.log('\x0a账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者 ' + _0x3f5aaf + ' 进行助力');
                await jinli_h5assist(_0x3f5aaf);
                if (!$.canHelp) {
                    console.log('次数已用完，跳出助力');
                    break;
                }
            }
        }
    }
})()['catch'](_0x598b1d => {
    $.log('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x598b1d + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x3d851d = {
        'IQjWk': function(_0x4e5540, _0x468579) {
            return _0x4e5540 !== _0x468579;
        },
        'mMzXs': 'IFuXW',
        'BlsrB': '0|4|2|3|1|5',
        'BUiTm': function(_0x4e7cbd) {
            return _0x4e7cbd();
        },
        'yEhDu': function(_0x36015b) {
            return _0x36015b();
        },
        'yFsBV': function(_0x5dc7ce) {
            return _0x5dc7ce();
        },
        'IZfzp': function(_0x434552) {
            return _0x434552();
        },
        'iugmP': function(_0x357435, _0x15bf7f) {
            return _0x357435 === _0x15bf7f;
        },
        'EkOxt': 'pDHXQ'
    };
    try {
        if (_0x3d851d['IQjWk']('lBXHO', _0x3d851d['mMzXs'])) {
            var _0x15e94e = _0x3d851d['BlsrB']['split']('|'),
                _0x2d5c8a = 0x0;
            while (true) {
                switch (_0x15e94e[_0x2d5c8a++]) {
                    case '0':
                        await _0x3d851d['BUiTm'](doLuckDrawFun);
                        continue;
                    case '1':
                        await _0x3d851d['yEhDu'](red);
                        continue;
                    case '2':
                        await _0x3d851d['yFsBV'](doTask);
                        continue;
                    case '3':
                        await h5activityIndex();
                        continue;
                    case '4':
                        await taskHomePage();
                        continue;
                    case '5':
                        await _0x3d851d['IZfzp'](h5activityIndex);
                        continue;
                }
                break;
            }
        } else {
            resolve(data);
        }
    } catch (_0x4372c4) {
        if (_0x3d851d['iugmP'](_0x3d851d['EkOxt'], 'pDHXQ')) {
            $['logErr'](_0x4372c4);
        } else {
            console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console.log(JSON.stringify(err));
        }
    }
}

function showMsg() {
    console.log('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doLuckDrawFun() {
    var _0x1678ca = {
        'NYuqu': function(_0x4b1ea9, _0x7f2ae4) {
            return _0x4b1ea9 < _0x7f2ae4;
        },
        'FpxZh': function(_0x269f7c) {
            return _0x269f7c();
        }
    };
    for (let _0x44f666 = 0x0; _0x1678ca['NYuqu'](_0x44f666, 0x3); _0x44f666++) {
        await _0x1678ca['FpxZh'](doLuckDrawEntrance);
    }
}

function doLuckDrawEntrance() {
    var _0x2d8ba8 = {
        'PtFMC': 'dtpOa',
        'JWjKW': function(_0x54a1c9, _0x1e41cf) {
            return _0x54a1c9 !== _0x1e41cf;
        },
        'WlnFb': 'ABwPj',
        'mLXhv': function(_0x4d7ec2, _0x4aab2e) {
            return _0x4d7ec2 === _0x4aab2e;
        },
        'SLnRl': 'XOtec',
        'oyFMf': 'DewiX',
        'BCqMn': 'EskvF',
        'dhJSE': 'esyld',
        'wQeAQ': function(_0x35e64a) {
            return _0x35e64a();
        },
        'PJEil': 'result',
        'JYUuJ': 'packetSum',
        'HXwNK': 'https://api.m.jd.com/client.action?functionId=doLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=XPMSGC2019&client=m&clientVersion=1.0.0&area=19_1601_50258_62858&geo=%5Bobject%20Object%5D&uuid=88732f840b77821b345bf07fd71f609e6ff12f43',
        'DHYQj': 'https://h5.m.jd.com',
        'WjKEm': 'keep-alive',
        'EKCYp': 'application/json, text/plain, */*',
        'IoYgJ': 'zh-cn',
        'XYskb': 'gzip, deflate, br'
    };
    return new Promise(_0x3d43ca => {
        var _0x55ffbc = {
            'JDPbl': _0x2d8ba8['PJEil'],
            'KIKDy': _0x2d8ba8['JYUuJ']
        };
        const _0x441d8b = {
            'url': _0x2d8ba8['HXwNK'],
            'headers': {
                'Host': 'api.m.jd.com',
                'Origin': _0x2d8ba8['DHYQj'],
                'Cookie': cookie,
                'Content-Length': '0',
                'Connection': _0x2d8ba8['WjKEm'],
                'Accept': _0x2d8ba8['EKCYp'],
                'User-Agent': 'jdapp;iPhone;9.5.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;model/iPhone11,8;addressid/2005183373;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                'Accept-Language': _0x2d8ba8['IoYgJ'],
                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/yj8mbcm6roENn7qhNdhiekyeqtd/index.html',
                'Accept-Encoding': _0x2d8ba8['XYskb']
            }
        };
        $['post'](_0x441d8b, async (_0x446f01, _0x352ba9, _0x41b7f) => {
            if (_0x2d8ba8['PtFMC'] === _0x2d8ba8['PtFMC']) {
                try {
                    if (_0x446f01) {
                        if (_0x2d8ba8['JWjKW']('jTAit', _0x2d8ba8['WlnFb'])) {
                            console.log('' + JSON.stringify(_0x446f01));
                            console.log($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            const _0x4ec2ee = $['h5activityIndex']['data'][_0x55ffbc['JDPbl']]['rewards'] || [];
                            for (let _0x9bcdf9 of _0x4ec2ee) {
                                $['discount'] += _0x9bcdf9[_0x55ffbc['KIKDy']];
                            }
                            if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                        }
                    } else {
                        if (_0x41b7f) {
                            if (_0x2d8ba8['mLXhv'](_0x2d8ba8['SLnRl'], _0x2d8ba8['SLnRl'])) {
                                _0x41b7f = JSON['parse'](_0x41b7f);
                                if (_0x2d8ba8['mLXhv'](_0x41b7f['code'], '0') && _0x41b7f['busiCode'] === '0') {
                                    if (_0x2d8ba8['oyFMf'] !== _0x2d8ba8['BCqMn']) {
                                        if (_0x41b7f['result']['luckyDrawData']['actId']) {
                                            if (_0x41b7f['result']['luckyDrawData'].redPacketId) {
                                                if (_0x2d8ba8['dhJSE'] === 'nFreq') {
                                                    url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + escape(JSON.stringify(body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                                                } else {
                                                    console.log('券后9.9抽奖获得【红包】：' + _0x41b7f['result']['luckyDrawData']['quota'] + '元');
                                                }
                                            } else {
                                                console.log('券后9.9抽奖获得【优惠券】：' + _0x41b7f['result']['luckyDrawData']['discount'] + '元：' + _0x41b7f['result']['luckyDrawData']['prizeName'] + '，' + _0x41b7f['result']['luckyDrawData']['quotaDesc']);
                                            }
                                        } else {
                                            console.log('券后9.9抽奖获失败：今日3次抽奖机会已用完\n');
                                        }
                                    } else {
                                        console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                        console.log(JSON.stringify(_0x446f01));
                                    }
                                }
                            } else {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x446f01));
                            }
                        }
                    }
                } catch (_0x46dfee) {
                    $['logErr'](_0x46dfee, _0x352ba9);
                } finally {
                    _0x2d8ba8['wQeAQ'](_0x3d43ca);
                }
            } else {
                console.log('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
            }
        });
    });
}
async function doTask() {
    var _0x3b27d9 = {
        'BYFcq': function(_0x585d0c, _0x2f6147) {
            return _0x585d0c === _0x2f6147;
        },
        'wMOyt': 'biz_code',
        'dHvqM': 'discount',
        'ebjCO': function(_0x340b23, _0x2227ce) {
            return _0x340b23 > _0x2227ce;
        },
        'dcBtf': function(_0x5a6316, _0x134112) {
            return _0x5a6316 !== _0x134112;
        },
        'jiLne': 'dmwye',
        'YkaQH': function(_0xa77453, _0x3eea0a) {
            return _0xa77453(_0x3eea0a);
        },
        'UMaLf': function(_0x1ac51a, _0x175b3c) {
            return _0x1ac51a !== _0x175b3c;
        },
        'ZjWmx': function(_0x569396, _0x3c40aa) {
            return _0x569396 === _0x3c40aa;
        },
        'LUede': 'dVtOu',
        'UwoqG': 'eWiyp',
        'gtfAT': function(_0x2896a0, _0xc4df41) {
            return _0x2896a0(_0xc4df41);
        },
        'EfNZp': function(_0x561911, _0x56651d) {
            return _0x561911(_0x56651d);
        },
        'AxCVO': function(_0x513aff, _0x17f1d7) {
            return _0x513aff === _0x17f1d7;
        },
        'cBjfa': function(_0x7fb95b) {
            return _0x7fb95b();
        },
        'agwdz': function(_0x3d2b5b, _0x223593) {
            return _0x3d2b5b(_0x223593);
        },
        'wrkWS': function(_0xd8d795, _0x2bb90d) {
            return _0xd8d795 !== _0x2bb90d;
        },
        'UIQYz': function(_0x41680a, _0x5516ec) {
            return _0x41680a(_0x5516ec);
        },
        'VwJwy': function(_0x424a48, _0x2fb958) {
            return _0x424a48(_0x2fb958);
        },
        'gytIv': 'wjZcU',
        'VbRMK': 'jslUq'
    };
    if ($['taskHomePageData'] && _0x3b27d9['BYFcq']($['taskHomePageData']['code'], 0x0)) {
        $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
        if ($['taskInfo'] && _0x3b27d9['ebjCO']($['taskInfo']['length'], 0x0)) {
            if (_0x3b27d9['dcBtf'](_0x3b27d9['jiLne'], _0x3b27d9['jiLne'])) {
                resolve(data);
            } else {
                console.log('    任务     状态  红包是否领取');
                for (let _0x2c246a of $['taskInfo']) {
                    console.log(_0x2c246a['title']['slice'](-0x6) + '   ' + (_0x2c246a['alreadyReceivedCount'] ? _0x2c246a['alreadyReceivedCount'] : 0x0) + '/' + _0x2c246a['requireCount'] + '      ' + (_0x2c246a['innerStatus'] === 0x4 ? '是' : '否'));
                }
                for (let _0x9c974d of $['taskInfo']) {
                    if (_0x3b27d9['BYFcq'](_0x9c974d['innerStatus'], 0x4)) {
                        console.log('[' + _0x9c974d['title'] + '] 已经领取奖励');
                    } else if (_0x9c974d['innerStatus'] === 0x3) {
                        await _0x3b27d9['YkaQH'](receiveTaskRedpacket, _0x9c974d['taskType']);
                    } else if (_0x9c974d['innerStatus'] === 0x2) {
                        if (_0x3b27d9['dcBtf'](_0x9c974d['taskType'], 0x0) && _0x3b27d9['UMaLf'](_0x9c974d['taskType'], 0x1)) {
                            if (_0x3b27d9['ZjWmx'](_0x3b27d9['LUede'], _0x3b27d9['UwoqG'])) {
                                data = JSON['parse'](data);
                                if (data && data['data'] && _0x3b27d9['BYFcq'](data['data'][_0x3b27d9['wMOyt']], 0x0)) {
                                    console.log('拆红包获得：' + data['data']['result'][_0x3b27d9['dHvqM']] + '元');
                                } else {
                                    console.log('领红包失败：' + JSON.stringify(data));
                                }
                            } else {
                                console.log('开始做【' + _0x9c974d['title'] + '】任务');
                                await _0x3b27d9['gtfAT'](active, _0x9c974d['taskType']);
                                console.log('开始领取【' + _0x9c974d['title'] + '】任务所得红包奖励');
                                await _0x3b27d9['EfNZp'](receiveTaskRedpacket, _0x9c974d['taskType']);
                            }
                        } else if (_0x3b27d9['AxCVO'](_0x9c974d['taskType'], 0x1)) {
                            console.log('开始做【' + _0x9c974d['title'] + '】任务');
                            await _0x3b27d9['cBjfa'](doAppTask);
                        } else {
                            console.log('[' + _0x9c974d['title'] + '] 功能未开发');
                        }
                    } else if (_0x3b27d9['UMaLf'](_0x9c974d['innerStatus'], 0x4)) {
                        console.log('\n开始领取【' + _0x9c974d['title'] + '】任务');
                        await _0x3b27d9['agwdz'](startTask, _0x9c974d['taskType']);
                        if (_0x3b27d9['wrkWS'](_0x9c974d['taskType'], 0x0) && _0x3b27d9['wrkWS'](_0x9c974d['taskType'], 0x1)) {
                            console.log('开始做【' + _0x9c974d['title'] + '】任务');
                            await _0x3b27d9['UIQYz'](active, _0x9c974d['taskType']);
                            console.log('开始领取【' + _0x9c974d['title'] + '】任务所得红包奖励');
                            await _0x3b27d9['VwJwy'](receiveTaskRedpacket, _0x9c974d['taskType']);
                        } else if (_0x9c974d['taskType'] === 0x1) {
                            console.log('开始做【' + _0x9c974d['title'] + '】任务');
                            await _0x3b27d9['cBjfa'](doAppTask);
                        } else {
                            if (_0x3b27d9['AxCVO'](_0x3b27d9['gytIv'], _0x3b27d9['VbRMK'])) {
                                $['logErr'](e, resp);
                            } else {
                                console.log('[' + _0x9c974d['title'] + '] 功能未开发');
                            }
                        }
                    }
                }
            }
        }
    } else {
        console.log('\n获取任务列表异常：' + JSON.stringify($['taskHomePageData']) + '\x0a');
    }
}
async function red() {
    var _0xf8d4f2 = {
        'ZqOHs': 'statusDesc',
        'sWYWP': 'data',
        'pevEv': 'result',
        'twrQs': 'status',
        'JfIrO': function(_0x5b9dda, _0x8d031) {
            return _0x5b9dda === _0x8d031;
        },
        'xNtaw': 'rewards',
        'pNUUX': 'assistants',
        'qmrMl': function(_0x342aa2, _0xa867b5) {
            return _0x342aa2 !== _0xa867b5;
        },
        'rpHeR': 'JwrMn',
        'vcWmC': function(_0x2fedbc) {
            return _0x2fedbc();
        },
        'ZJnnS': function(_0x2d851e, _0x175f4d) {
            return _0x2d851e === _0x175f4d;
        },
        'CyXBV': 'redpacketInfo',
        'hPldU': 'requireAssistNum',
        'VNiVk': 'waitOpenTimes',
        'xQQDd': function(_0x50d088, _0x1d7f5b) {
            return _0x50d088 > _0x1d7f5b;
        },
        'vVgRF': 'bBLKh',
        'cWZxl': function(_0x52fde0, _0x28f34a) {
            return _0x52fde0 < _0x28f34a;
        },
        'XCnJm': function(_0x4890ce, _0x2ff254) {
            return _0x4890ce(_0x2ff254);
        },
        'eHsRq': 'biz_code',
        'damdx': 'xiafY',
        'tSMtB': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0xf8d4f2['pevEv']]) {
        const _0x519517 = $['h5activityIndex']['data'][_0xf8d4f2['pevEv']][_0xf8d4f2['xNtaw']] || [];
        $['hasSendNumber'] = $['h5activityIndex']['data'][_0xf8d4f2['pevEv']]['hasSendNumber'];
        if ($['h5activityIndex']['data']['result'][_0xf8d4f2['pNUUX']]) {
            $['assistants'] = $['h5activityIndex']['data'][_0xf8d4f2['pevEv']][_0xf8d4f2['pNUUX']]['length'] || 0x0;
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0xf8d4f2['JfIrO']($['h5activityIndex']['data']['biz_code'], 0x2712)) {
        if (_0xf8d4f2['qmrMl']('JwrMn', _0xf8d4f2['rpHeR'])) {
            $['logErr'](e);
        } else {
            await _0xf8d4f2['vcWmC'](h5launch);
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0xf8d4f2['ZJnnS']($['h5activityIndex']['data']['biz_code'], 0x4e21)) {
        const _0xdfe9b5 = $['h5activityIndex'][_0xf8d4f2['sWYWP']][_0xf8d4f2['pevEv']][_0xf8d4f2['CyXBV']]['id'];
        if (_0xdfe9b5) $.redPacketId.push(_0xdfe9b5);
        console.log('\x0a\x0a当前待拆红包ID:' + $['h5activityIndex'][_0xf8d4f2['sWYWP']][_0xf8d4f2['pevEv']][_0xf8d4f2['CyXBV']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0xf8d4f2['sWYWP']][_0xf8d4f2['pevEv']][_0xf8d4f2['hPldU']] + '个好友，开第' + ($['hasSendNumber'] + 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex'][_0xf8d4f2['sWYWP']]['result']['remainRedpacketNumber'] + '个红包待开，已有' + $['assistants'] + '好友助力\x0a\x0a');
        const _0x3aaf94 = $['h5activityIndex']['data'][_0xf8d4f2['pevEv']][_0xf8d4f2['CyXBV']][_0xf8d4f2['VNiVk']] || 0x0;
        console.log('当前可拆红包个数：' + _0x3aaf94);
        if (_0xf8d4f2['xQQDd'](_0x3aaf94, 0x0)) {
            if (_0xf8d4f2['vVgRF'] !== 'bBLKh') {
                console.log('助力结果：' + data['data']['result'][_0xf8d4f2['ZqOHs']]);
                if (data[_0xf8d4f2['sWYWP']][_0xf8d4f2['pevEv']][_0xf8d4f2['twrQs']] === 0x3) $.canHelp = ![];
                if (_0xf8d4f2['JfIrO'](data[_0xf8d4f2['sWYWP']][_0xf8d4f2['pevEv']][_0xf8d4f2['twrQs']], 0x9)) $.canHelp = ![];
            } else {
                for (let _0x1e176e = 0x0; _0xf8d4f2['cWZxl'](_0x1e176e, new Array(_0x3aaf94)['fill']('')['length']); _0x1e176e++) {
                    if (!_0xdfe9b5) break;
                    await _0xf8d4f2['XCnJm'](h5receiveRedpacket, _0xdfe9b5);
                    await $['wait'](0x1f4);
                }
            }
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0xf8d4f2['eHsRq']] === 0x4e22) {
        if ('qVBZh' !== _0xf8d4f2['damdx']) {
            console.log('\x0a' + $['h5activityIndex']['data'][_0xf8d4f2['tSMtB']] + '\x0a');
        } else {
            if (err) {
                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console.log(JSON.stringify(err));
            } else {
                $['taskHomePageData'] = JSON['parse'](data);
            }
        }
    }
}

function taskHomePage() {
    var _0x18f4cb = {
        'BcQCf': function(_0x59df51, _0xb12e4d) {
            return _0x59df51 !== _0xb12e4d;
        },
        'KxnUO': 'PJBgL',
        'VCZWx': function(_0x247d50, _0x302d75) {
            return _0x247d50 !== _0x302d75;
        },
        'tfLwG': 'uxcBC',
        'NwCYs': function(_0x308b76, _0xa26687) {
            return _0x308b76 === _0xa26687;
        },
        'SiEKp': 'jIvjU',
        'hzvXy': 'qIscY',
        'Cmvmt': 'PgwbB',
        'pTtUQ': function(_0x15fc99, _0x4c2bb2) {
            return _0x15fc99(_0x4c2bb2);
        },
        'gFshu': function(_0x57fd53, _0x1b0122) {
            return _0x57fd53(_0x1b0122);
        },
        'jGpTc': 'bBVfi',
        'JmYGW': 'pIuGm',
        'SUvrz': function(_0x4bab97, _0x3de7a8, _0x1beb27) {
            return _0x4bab97(_0x3de7a8, _0x1beb27);
        }
    };
    return new Promise(_0x58f1a5 => {
        var _0x4c7fe3 = {
            'tQgsP': function(_0x133a89) {
                return _0x133a89();
            },
            'dUkhn': function(_0x267817, _0x418364) {
                return _0x18f4cb['gFshu'](_0x267817, _0x418364);
            }
        };
        if (_0x18f4cb['VCZWx'](_0x18f4cb['jGpTc'], _0x18f4cb['JmYGW'])) {
            $['post'](_0x18f4cb['SUvrz'](taskUrl, arguments.callee['name'].toString(), {
                'clientInfo': {}
            }), (_0x1c6bdd, _0x356597, _0x518e89) => {
                if (_0x18f4cb['BcQCf'](_0x18f4cb['KxnUO'], _0x18f4cb['KxnUO'])) {
                    _0x4c7fe3['tQgsP'](_0x58f1a5);
                } else {
                    try {
                        if (_0x18f4cb['VCZWx'](_0x18f4cb['tfLwG'], _0x18f4cb['tfLwG'])) {
                            url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x4c7fe3['dUkhn'](escape, JSON.stringify(body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
                        } else {
                            if (_0x1c6bdd) {
                                if (_0x18f4cb['NwCYs'](_0x18f4cb['SiEKp'], 'jIvjU')) {
                                    console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console.log(JSON.stringify(_0x1c6bdd));
                                } else {
                                    if (_0x518e89['result']['luckyDrawData'].redPacketId) {
                                        console.log('券后9.9抽奖获得【红包】：' + _0x518e89['result']['luckyDrawData']['quota'] + '元');
                                    } else {
                                        console.log('券后9.9抽奖获得【优惠券】：' + _0x518e89['result']['luckyDrawData']['discount'] + '元：' + _0x518e89['result']['luckyDrawData']['prizeName'] + '，' + _0x518e89['result']['luckyDrawData']['quotaDesc']);
                                    }
                                }
                            } else {
                                if (_0x18f4cb['NwCYs'](_0x18f4cb['hzvXy'], _0x18f4cb['Cmvmt'])) {
                                    console.log('券后9.9抽奖获得【红包】：' + _0x518e89['result']['luckyDrawData']['quota'] + '元');
                                } else {
                                    $['taskHomePageData'] = JSON['parse'](_0x518e89);
                                }
                            }
                        }
                    } catch (_0x16847c) {
                        $['logErr'](_0x16847c, _0x356597);
                    } finally {
                        _0x18f4cb['pTtUQ'](_0x58f1a5, _0x518e89);
                    }
                }
            });
        } else {
            console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console.log(JSON.stringify(err));
        }
    });
}

function startTask(_0x4ac69a) {
    var _0x20180a = {
        'KtUKO': function(_0x14d335, _0x250ca3) {
            return _0x14d335 !== _0x250ca3;
        },
        'ohdvi': 'sfeuv',
        'zCWjv': function(_0xb39e7, _0x5c31ea) {
            return _0xb39e7 === _0x5c31ea;
        },
        'YdPFO': 'PDNsW',
        'qbUut': function(_0x338fe6, _0x117ecb) {
            return _0x338fe6(_0x117ecb);
        },
        'VYCPR': 'VktFU',
        'SbFsC': 'token',
        'nSnHt': function(_0xcfa2, _0x78487e) {
            return _0xcfa2 + _0x78487e;
        }
    };
    let _0x3d654a = {
        'taskType': _0x4ac69a
    };
    _0x3d654a[_0x20180a['SbFsC']] = $['md5']($['md5'](_0x20180a['nSnHt']('j', JSON.stringify(_0x3d654a)) + 'D'));
    return new Promise(_0x60cd4e => {
        if (_0x20180a['VYCPR'] === 'zabXd') {
            console.log('---具体任务详情---' + JSON.stringify(getTaskDetailForColorRes));
        } else {
            $['post'](taskUrl(arguments.callee['name'].toString(), _0x3d654a), (_0x1f5a73, _0x1d7290, _0x3d654a) => {
                try {
                    if (_0x20180a['KtUKO']('sfeuv', _0x20180a['ohdvi'])) {
                        $['taskHomePageData'] = JSON['parse'](_0x3d654a);
                    } else {
                        if (_0x1f5a73) {
                            console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console.log(JSON.stringify(_0x1f5a73));
                        } else {
                            console.log('领取任务：' + _0x3d654a);
                            _0x3d654a = JSON['parse'](_0x3d654a);
                        }
                    }
                } catch (_0x5baedf) {
                    $['logErr'](_0x5baedf, _0x1d7290);
                } finally {
                    if (_0x20180a['zCWjv'](_0x20180a['YdPFO'], _0x20180a['YdPFO'])) {
                        _0x20180a['qbUut'](_0x60cd4e, _0x3d654a);
                    } else {
                        console.log('发起助力红包 失败：' + JSON.stringify(_0x3d654a));
                    }
                }
            });
        }
    });
}
async function active(_0x2bea66) {
    var _0x353a1a = {
        'SXOvX': function(_0x4e6a3a) {
            return _0x4e6a3a();
        },
        'oJnKs': function(_0x276141, _0x7435e) {
            return _0x276141(_0x7435e);
        },
        'eNXrL': function(_0xbb1d8c, _0x325883) {
            return _0xbb1d8c === _0x325883;
        },
        'TGAyD': function(_0xb873d2, _0x56b43d) {
            return _0xb873d2 === _0x56b43d;
        },
        'NuVDs': 'qQWHZ',
        'cqjXG': 'jPoDN',
        'UFdUs': 'ZPIlv',
        'puRgv': function(_0x3055c9, _0x245b8b, _0x4c9f00) {
            return _0x3055c9(_0x245b8b, _0x4c9f00);
        },
        'rHPgz': 'cNcZj'
    };
    const _0x39c8d9 = await _0x353a1a['oJnKs'](getTaskDetailForColor, _0x2bea66);
    if (_0x39c8d9 && _0x353a1a['eNXrL'](_0x39c8d9['code'], 0x0)) {
        if (_0x39c8d9['data'] && _0x39c8d9['data']['result']) {
            const {
                advertDetails
            } = _0x39c8d9['data']['result'];
            for (let _0x5611dd of advertDetails) {
                if (_0x353a1a['TGAyD'](_0x353a1a['NuVDs'], 'qQWHZ')) {
                    await $['wait'](0x3e8);
                    if (_0x5611dd['id'] && _0x5611dd['status'] === 0x0) {
                        if (_0x353a1a['cqjXG'] === _0x353a1a['UFdUs']) {
                            console.log('领取任务：' + data);
                            data = JSON['parse'](data);
                        } else {
                            await _0x353a1a['puRgv'](taskReportForColor, _0x2bea66, _0x5611dd['id']);
                        }
                    }
                } else {
                    _0x353a1a['SXOvX'](resolve);
                }
            }
        } else {
            console.log('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
            $['msg']('' + $['name'], '', '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
        }
    } else {
        if (_0x353a1a['TGAyD'](_0x353a1a['rHPgz'], 'cNcZj')) {
            console.log('---具体任务详情---' + JSON.stringify(_0x39c8d9));
        } else {
            console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console.log(JSON.stringify(err));
        }
    }
}

function getTaskDetailForColor(_0x2c4c7b) {
    var _0x2682ae = {
        'giQyg': 'IMxaD',
        'SlFpb': function(_0x578895, _0x5dfb99) {
            return _0x578895 === _0x5dfb99;
        },
        'znQly': 'MCILP',
        'ejnGm': 'PUBhc',
        'vXznd': function(_0x49d202, _0x3077b1) {
            return _0x49d202 === _0x3077b1;
        },
        'dbFxk': 'JTrXg',
        'QEckC': 'qQgJj',
        'VtrCf': function(_0x1ffb7f, _0x298bd0) {
            return _0x1ffb7f(_0x298bd0);
        },
        'nbYTc': function(_0x5beb60, _0x5a89e8) {
            return _0x5beb60 !== _0x5a89e8;
        },
        'GSsrS': 'iXEUl',
        'wrfDD': 'hghwF',
        'nmAsw': function(_0x5930f8, _0x4a8582, _0xfc044c) {
            return _0x5930f8(_0x4a8582, _0xfc044c);
        }
    };
    const _0x574b60 = {
        'clientInfo': {},
        'taskType': _0x2c4c7b
    };
    return new Promise(_0x2f2f57 => {
        if (_0x2682ae['nbYTc'](_0x2682ae['GSsrS'], _0x2682ae['wrfDD'])) {
            $['post'](_0x2682ae['nmAsw'](taskUrl, arguments.callee['name'].toString(), _0x574b60), (_0x167487, _0x312813, _0x574b60) => {
                if (_0x2682ae['giQyg'] === _0x2682ae['giQyg']) {
                    try {
                        if (_0x2682ae['SlFpb'](_0x2682ae['znQly'], _0x2682ae['ejnGm'])) {
                            if (_0x167487) {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x167487));
                            } else {
                                _0x574b60 = JSON['parse'](_0x574b60);
                            }
                        } else {
                            if (_0x167487) {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x167487));
                            } else {
                                if (_0x2682ae['vXznd'](_0x2682ae['dbFxk'], _0x2682ae['dbFxk'])) {
                                    _0x574b60 = JSON['parse'](_0x574b60);
                                } else {
                                    $['done']();
                                }
                            }
                        }
                    } catch (_0x3f13d7) {
                        if (_0x2682ae['vXznd']('OnggA', _0x2682ae['QEckC'])) {
                            console.log('助力异常：' + JSON.stringify(_0x574b60));
                        } else {
                            $['logErr'](_0x3f13d7, _0x312813);
                        }
                    } finally {
                        if ('THatM' !== 'yaoZd') {
                            _0x2682ae['VtrCf'](_0x2f2f57, _0x574b60);
                        } else {
                            console.log('[' + item['title'] + '] 已经领取奖励');
                        }
                    }
                } else {
                    console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console.log(JSON.stringify(_0x167487));
                }
            });
        } else {
            if (_0x574b60) {
                if (type === '1' && functionId === 'reportCcTask') console.log('京东首页点击“领券”逛10s任务:' + _0x574b60);
            }
        }
    });
}

function taskReportForColor(_0x2f201d, _0x19e657) {
    var _0x425c25 = {
        'PQDxe': function(_0x22e30f, _0x402b42) {
            return _0x22e30f !== _0x402b42;
        },
        'nxSUq': 'BTdPn',
        'xjOHG': function(_0x30f742, _0x5987c6) {
            return _0x30f742 === _0x5987c6;
        },
        'IdYkm': 'RVLzD',
        'BHsvy': function(_0x48c0f1, _0x2883bb) {
            return _0x48c0f1 !== _0x2883bb;
        },
        'fNhbD': 'result',
        'TLfnj': 'data',
        'zVZan': 'packetSum',
        'hOFqU': 'nwUeC',
        'byDFX': 'NcYFt',
        'RHfJb': function(_0x1ff966, _0x3bbb99, _0x2f88e2) {
            return _0x1ff966(_0x3bbb99, _0x2f88e2);
        },
        'tlqAz': 'token',
        'TTfnO': function(_0x40d24d, _0x201347) {
            return _0x40d24d + _0x201347;
        },
        'rssvc': function(_0x170cec, _0x3a628c) {
            return _0x170cec + _0x3a628c;
        }
    };
    const _0x1e84f5 = {
        'taskType': _0x2f201d,
        'detailId': _0x19e657
    };
    _0x1e84f5[_0x425c25['tlqAz']] = $['md5']($['md5'](_0x425c25['TTfnO'](_0x425c25['rssvc']('j', JSON.stringify(_0x1e84f5)), 'D')));
    return new Promise(_0x58dd7b => {
        var _0x59e4e9 = {
            'DOxRl': _0x425c25['fNhbD'],
            'JEvZq': _0x425c25['TLfnj'],
            'KMfLp': _0x425c25['zVZan']
        };
        if (_0x425c25['hOFqU'] !== _0x425c25['byDFX']) {
            $['post'](_0x425c25['RHfJb'](taskUrl, arguments.callee['name'].toString(), _0x1e84f5), (_0x99f409, _0x27df77, _0x1e84f5) => {
                var _0x237957 = {
                    'FMYKk': function(_0x3f983b, _0x41de54) {
                        return _0x3f983b(_0x41de54);
                    }
                };
                if (_0x425c25['PQDxe']('BTdPn', _0x425c25['nxSUq'])) {
                    if (_0x99f409) {
                        console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console.log(JSON.stringify(_0x99f409));
                    } else {
                        _0x1e84f5 = JSON['parse'](_0x1e84f5);
                        if (_0x1e84f5['data']['success'] && _0x1e84f5['data']['biz_code'] === 0x0) {
                            console.log('红包领取成功，获得' + _0x1e84f5['data']['result']['discount'] + '元\x0a');
                            $['discount'] += _0x237957['FMYKk'](Number, _0x1e84f5['data']['result']['discount']);
                        }
                    }
                } else {
                    try {
                        if (_0x99f409) {
                            if (_0x425c25['xjOHG'](_0x425c25['IdYkm'], 'RVLzD')) {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x99f409));
                            } else {
                                _0x1e84f5 = JSON['parse'](_0x1e84f5);
                                $['h5activityIndex'] = _0x1e84f5;
                                $['discount'] = 0x0;
                                if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x59e4e9['DOxRl']]) {
                                    const _0x3da410 = $['h5activityIndex'][_0x59e4e9['JEvZq']][_0x59e4e9['DOxRl']]['rewards'] || [];
                                    for (let _0x2632df of _0x3da410) {
                                        $['discount'] += _0x2632df[_0x59e4e9['KMfLp']];
                                    }
                                    if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                                }
                            }
                        } else {
                            if (_0x425c25['BHsvy']('IPNfJ', 'keyQw')) {
                                _0x1e84f5 = JSON['parse'](_0x1e84f5);
                            } else {
                                $['logErr'](e, _0x27df77);
                            }
                        }
                    } catch (_0x35fc23) {
                        $['logErr'](_0x35fc23, _0x27df77);
                    } finally {
                        _0x58dd7b(_0x1e84f5);
                    }
                }
            });
        } else {
            console.log('红包领取成功，获得' + _0x1e84f5['data']['result']['discount'] + '元\x0a');
            $['discount'] += Number(_0x1e84f5['data']['result']['discount']);
        }
    });
}

function receiveTaskRedpacket(_0x271e7d) {
    var _0x278eaf = {
        'vvpvO': 'statusDesc',
        'MksOD': function(_0x5cc27c, _0x4aea3d) {
            return _0x5cc27c !== _0x4aea3d;
        },
        'FWaej': function(_0x3b4ea5, _0x1cb55f) {
            return _0x3b4ea5 === _0x1cb55f;
        },
        'ZqlPN': function(_0x4b5687, _0x588fe7, _0x3987b2) {
            return _0x4b5687(_0x588fe7, _0x3987b2);
        }
    };
    const _0x25a45c = {
        'clientInfo': {},
        'taskType': _0x271e7d
    };
    return new Promise(_0x1aef5d => {
        var _0x294ead = {
            'cVaeT': 'data',
            'blhWi': _0x278eaf['vvpvO'],
            'kDcTQ': function(_0x269890, _0x55eb24) {
                return _0x278eaf['MksOD'](_0x269890, _0x55eb24);
            },
            'tJmAJ': 'CbFkR',
            'kwmCv': 'eaqGy',
            'tlBXJ': function(_0x1a6257, _0x532118) {
                return _0x278eaf['FWaej'](_0x1a6257, _0x532118);
            },
            'oJdli': 'UwlRg',
            'PYYgz': 'MIils',
            'lVEuQ': function(_0x1eaa31, _0x400761) {
                return _0x278eaf['FWaej'](_0x1eaa31, _0x400761);
            },
            'aGNla': 'wHxva',
            'Jvtzi': 'sTlVt',
            'gqYTT': function(_0x103840, _0x2cf19e) {
                return _0x103840(_0x2cf19e);
            }
        };
        $['post'](_0x278eaf['ZqlPN'](taskUrl, arguments.callee.name.toString(), _0x25a45c), (_0x1da607, _0x16fc0c, _0x51b3e3) => {
            var _0x496324 = {
                'vENpk': _0x294ead['cVaeT'],
                'eXkGV': _0x294ead['blhWi']
            };
            if (_0x294ead['kDcTQ'](_0x294ead['tJmAJ'], _0x294ead['kwmCv'])) {
                try {
                    if (_0x1da607) {
                        if (_0x294ead['tlBXJ'](_0x294ead['oJdli'], _0x294ead['PYYgz'])) {
                            console.log('' + JSON.stringify(_0x1da607));
                            console.log($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console.log(JSON.stringify(_0x1da607));
                        }
                    } else {
                        _0x51b3e3 = JSON['parse'](_0x51b3e3);
                        if (_0x51b3e3['data']['success'] && _0x294ead['lVEuQ'](_0x51b3e3['data']['biz_code'], 0x0)) {
                            if (_0x294ead['aGNla'] !== _0x294ead['Jvtzi']) {
                                console.log('红包领取成功，获得' + _0x51b3e3['data']['result']['discount'] + '元\x0a');
                                $['discount'] += Number(_0x51b3e3['data']['result']['discount']);
                            } else {
                                console.log('\x0a\x0a发起助力红包 失败：' + _0x51b3e3[_0x496324['vENpk']]['result'][_0x496324['eXkGV']]);
                            }
                        }
                    }
                } catch (_0x3b76f5) {
                    $['logErr'](_0x3b76f5, _0x16fc0c);
                } finally {
                    _0x294ead['gqYTT'](_0x1aef5d, _0x51b3e3);
                }
            } else {
                console.log('\n获取任务列表异常：' + JSON.stringify($['taskHomePageData']) + '\x0a');
            }
        });
    });
}

function jinli_h5assist(_0x538d51) {
    var _0xb3d0e2 = {
        'GtVBH': function(_0x192f86, _0x2f0bdd) {
            return _0x192f86 === _0x2f0bdd;
        },
        'GBHvr': 'reportCcTask',
        'ApSGa': function(_0x1be415) {
            return _0x1be415();
        },
        'pHqxW': 'XbtJu',
        'RvLMM': function(_0x58fd52, _0x38fbfd) {
            return _0x58fd52 !== _0x38fbfd;
        },
        'MCvnP': 'OrBro',
        'tDRyw': 'biz_code',
        'olCrt': 'statusDesc',
        'bbuLZ': 'status',
        'XqREb': 'Axbfp',
        'lvgns': function(_0x416c93, _0x7a4fb3, _0x223887) {
            return _0x416c93(_0x7a4fb3, _0x223887);
        }
    };
    const _0x2314c6 = {
        'clientInfo': {},
        'redPacketId': _0x538d51,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x324215 = _0xb3d0e2['lvgns'](taskUrl, arguments.callee['name'].toString(), _0x2314c6);
    return new Promise(_0x5e4722 => {
        var _0x3ca517 = {
            'jrEgT': function(_0x417d33) {
                return _0xb3d0e2['ApSGa'](_0x417d33);
            },
            'otQKR': 'CookieJD2',
            'fUOOO': 'CookiesJD',
            'IkoDZ': _0xb3d0e2['pHqxW'],
            'udbxu': function(_0x239451, _0x129eac) {
                return _0xb3d0e2['RvLMM'](_0x239451, _0x129eac);
            },
            'tgIQE': _0xb3d0e2['MCvnP'],
            'KjMSK': function(_0x2c876a, _0x572de4) {
                return _0xb3d0e2['GtVBH'](_0x2c876a, _0x572de4);
            },
            'LAQyg': 'KZRhZ',
            'RmbgS': function(_0x29e566, _0x3bd110) {
                return _0x29e566 === _0x3bd110;
            },
            'UvmqM': _0xb3d0e2['tDRyw'],
            'TlKTI': 'data',
            'McDmb': 'result',
            'dpHFI': _0xb3d0e2['olCrt'],
            'iQTqR': _0xb3d0e2['bbuLZ'],
            'UJShO': 'rVyfB',
            'fxkjF': function(_0x25b09f) {
                return _0x25b09f();
            }
        };
        if (_0xb3d0e2['GtVBH']('Axbfp', _0xb3d0e2['XqREb'])) {
            $['post'](_0x324215, (_0x8fddbf, _0x418387, _0x143ac0) => {
                var _0x3a16d4 = {
                    'OTVIZ': _0x3ca517['otQKR'],
                    'FeoWl': _0x3ca517['fUOOO']
                };
                try {
                    if (_0x3ca517['IkoDZ'] !== _0x3ca517['IkoDZ']) {
                        _0x3ca517['jrEgT'](_0x5e4722);
                    } else {
                        if (_0x8fddbf) {
                            if (_0x3ca517['udbxu']('OrBro', _0x3ca517['tgIQE'])) {
                                $['logErr'](e, _0x418387);
                            } else {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x8fddbf));
                            }
                        } else {
                            if (_0x3ca517['KjMSK']('Klwze', _0x3ca517['LAQyg'])) {
                                cookiesArr = [$['getdata']('CookieJD'), $['getdata'](_0x3a16d4['OTVIZ']), ...jsonParse($['getdata'](_0x3a16d4['FeoWl']) || '[]')['map'](_0x5dd5bf => _0x5dd5bf['cookie'])]['filter'](_0x437f9c => !!_0x437f9c);
                            } else {
                                _0x143ac0 = JSON['parse'](_0x143ac0);
                                if (_0x143ac0 && _0x143ac0['data'] && _0x3ca517['RmbgS'](_0x143ac0['data'][_0x3ca517['UvmqM']], 0x0)) {
                                    console.log('助力结果：' + _0x143ac0[_0x3ca517['TlKTI']][_0x3ca517['McDmb']][_0x3ca517['dpHFI']]);
                                    if (_0x143ac0[_0x3ca517['TlKTI']][_0x3ca517['McDmb']][_0x3ca517['iQTqR']] === 0x3) $.canHelp = ![];
                                    if (_0x3ca517['RmbgS'](_0x143ac0['data'][_0x3ca517['McDmb']]['status'], 0x9)) $.canHelp = ![];
                                } else {
                                    console.log('助力异常：' + JSON.stringify(_0x143ac0));
                                }
                            }
                        }
                    }
                } catch (_0x2694df) {
                    if (_0x3ca517['udbxu']('rVyfB', _0x3ca517['UJShO'])) {
                        console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console.log(JSON.stringify(_0x8fddbf));
                    } else {
                        $['logErr'](_0x2694df, _0x418387);
                    }
                } finally {
                    _0x3ca517['fxkjF'](_0x5e4722);
                }
            });
        } else {
            if (type === '1' && _0xb3d0e2['GtVBH'](functionId, _0xb3d0e2['GBHvr'])) console.log('京东首页点击“领券”逛10s任务:' + data);
        }
    });
}

function h5receiveRedpacket(_0x5f4c06) {
    var _0x57afad = {
        'TfHNy': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'tygiq': 'biz_msg',
        'xDOUv': function(_0x5db70b, _0x24df3c) {
            return _0x5db70b === _0x24df3c;
        },
        'rZQVU': 'WUpTY',
        'lrKHT': 'biz_code',
        'YIoks': 'data',
        'IhVGR': 'discount',
        'gPwJq': function(_0x28c411, _0x49a35b) {
            return _0x28c411 !== _0x49a35b;
        },
        'ykVma': 'OdPrL',
        'SOAlQ': 'zqelH',
        'CUQVp': function(_0x5eceaa, _0x29db57) {
            return _0x5eceaa(_0x29db57);
        },
        'JKsBh': 'tunnel',
        'PgROV': function(_0x33e47e, _0x19f5ac) {
            return _0x33e47e + _0x19f5ac;
        },
        'LvQCZ': function(_0x49c7b7, _0x225ba0, _0x1da602) {
            return _0x49c7b7(_0x225ba0, _0x1da602);
        }
    };
    const _0x3b7254 = {
        'redPacketId': _0x5f4c06
    };
    _0x3b7254['token'] = $['md5']($['md5'](_0x57afad['PgROV']('j', JSON.stringify(_0x3b7254)) + 'D'));
    const _0x2ec437 = _0x57afad['LvQCZ'](taskUrl, arguments.callee['name'].toString(), _0x3b7254);
    return new Promise(_0xa03e44 => {
        var _0x4a1f39 = {
            'WRCdy': function(_0x552a02, _0x18d261) {
                return _0x57afad['CUQVp'](_0x552a02, _0x18d261);
            },
            'RNMPb': _0x57afad['JKsBh'],
            'wMAoM': function(_0x2240b1, _0x3a6c56) {
                return _0x2240b1 * _0x3a6c56;
            }
        };
        $['post'](_0x2ec437, (_0x3ef482, _0x554b2c, _0x3b7254) => {
            var _0x10cd55 = {
                'BHYXw': _0x57afad['TfHNy'],
                'cwTpi': 'https://bean.m.jd.com/bean/signIndex.action',
                'ZeqnL': _0x57afad['tygiq']
            };
            try {
                if (_0x57afad['xDOUv']('ydaoA', 'SlHRU')) {
                    $['msg']($['name'], _0x10cd55['BHYXw'], _0x10cd55['cwTpi'], {
                        'open-url': _0x10cd55['cwTpi']
                    });
                    return;
                } else {
                    if (_0x3ef482) {
                        console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console.log(JSON.stringify(_0x3ef482));
                    } else {
                        if (_0x57afad['rZQVU'] === _0x57afad['rZQVU']) {
                            _0x3b7254 = JSON['parse'](_0x3b7254);
                            if (_0x3b7254 && _0x3b7254['data'] && _0x57afad['xDOUv'](_0x3b7254['data'][_0x57afad['lrKHT']], 0x0)) {
                                console.log('拆红包获得：' + _0x3b7254[_0x57afad['YIoks']]['result'][_0x57afad['IhVGR']] + '元');
                            } else {
                                if (_0x57afad['gPwJq'](_0x57afad['ykVma'], _0x57afad['SOAlQ'])) {
                                    console.log('领红包失败：' + JSON.stringify(_0x3b7254));
                                } else {
                                    const _0x5999b0 = _0x4a1f39['WRCdy'](require, _0x4a1f39['RNMPb']);
                                    const _0x5b0a6e = {
                                        'https': _0x5999b0['httpsOverHttp']({
                                            'proxy': {
                                                'host': process['env']['TG_PROXY_HOST'],
                                                'port': _0x4a1f39['wMAoM'](process['env']['TG_PROXY_PORT'], 0x1)
                                            }
                                        })
                                    };
                                    Object['assign'](_0x2ec437, {
                                        'agent': _0x5b0a6e
                                    });
                                }
                            }
                        } else {
                            console.log('\x0a' + $['h5activityIndex']['data'][_0x10cd55['ZeqnL']] + '\x0a');
                        }
                    }
                }
            } catch (_0x409930) {
                $['logErr'](_0x409930, _0x554b2c);
            } finally {
                _0x57afad['CUQVp'](_0xa03e44, _0x3b7254);
            }
        });
    });
}

function h5launch() {
    var _0x8f78f1 = {
        'AmSrm': function(_0x440a00, _0x25fa3a) {
            return _0x440a00 === _0x25fa3a;
        },
        'kRHNh': 'pwjAu',
        'GlGal': 'biz_code',
        'jbEyY': 'data',
        'xNdNj': 'result',
        'OefvD': 'redPacketId',
        'gcEhY': 'statusDesc',
        'Hdfcb': function(_0x1bf02f, _0x598634) {
            return _0x1bf02f !== _0x598634;
        },
        'QLWlL': 'Lvxdr',
        'lpUUt': 'pLRSX',
        'aZJTi': 'gjTgV',
        'fCwAC': function(_0x31aedd, _0x2f4f4b) {
            return _0x31aedd(_0x2f4f4b);
        },
        'tFmbN': 'api.m.jd.com',
        'aswdy': 'https://happy.m.jd.com',
        'rQGKg': 'gzip, deflate, br',
        'gwKrQ': function(_0x1b9725, _0x56ba65) {
            return _0x1b9725(_0x56ba65);
        },
        'jKwuN': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'ccBNM': 'zh-cn',
        'OlzqI': function(_0x7340ad, _0x2fc039, _0x283caa) {
            return _0x7340ad(_0x2fc039, _0x283caa);
        }
    };
    const _0x19d3bc = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x1367bf = _0x8f78f1['OlzqI'](taskUrl, arguments.callee['name'].toString(), _0x19d3bc);
    return new Promise(_0x1a5a6b => {
        var _0x1dec42 = {
            'xlKGP': _0x8f78f1['tFmbN'],
            'VwwTz': 'application/x-www-form-urlencoded',
            'AiXuw': _0x8f78f1['aswdy'],
            'xAAtt': _0x8f78f1['rQGKg'],
            'FuSvq': 'keep-alive',
            'orAXH': function(_0x513fd8, _0xa61046) {
                return _0x8f78f1['gwKrQ'](_0x513fd8, _0xa61046);
            },
            'yVepL': _0x8f78f1['jKwuN'],
            'Yimsh': _0x8f78f1['ccBNM']
        };
        $['post'](_0x1367bf, (_0x2fefe9, _0x4be56c, _0xad8b82) => {
            try {
                if (_0x2fefe9) {
                    console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console.log(JSON.stringify(_0x2fefe9));
                } else {
                    if (_0x8f78f1['AmSrm'](_0x8f78f1['kRHNh'], _0x8f78f1['kRHNh'])) {
                        _0xad8b82 = JSON['parse'](_0xad8b82);
                        if (_0xad8b82 && _0xad8b82['data'] && _0x8f78f1['AmSrm'](_0xad8b82['data'][_0x8f78f1['GlGal']], 0x0)) {
                            if (_0xad8b82[_0x8f78f1['jbEyY']][_0x8f78f1['xNdNj']][_0x8f78f1['OefvD']]) {
                                console.log('\n\n发起助力红包 成功：红包ID ' + _0xad8b82[_0x8f78f1['jbEyY']]['result'][_0x8f78f1['OefvD']]);
                                $.redPacketId.push(_0xad8b82[_0x8f78f1['jbEyY']][_0x8f78f1['xNdNj']][_0x8f78f1['OefvD']]);
                            } else {
                                console.log('\n\n发起助力红包 失败：' + _0xad8b82[_0x8f78f1['jbEyY']]['result'][_0x8f78f1['gcEhY']]);
                            }
                        } else {
                            if (_0x8f78f1['Hdfcb'](_0x8f78f1['QLWlL'], _0x8f78f1['lpUUt'])) {
                                console.log('发起助力红包 失败：' + JSON.stringify(_0xad8b82));
                            } else {
                                _0x1a5a6b(_0xad8b82);
                            }
                        }
                    } else {
                        $['logErr'](e, _0x4be56c);
                    }
                }
            } catch (_0x152115) {
                $['logErr'](_0x152115, _0x4be56c);
            } finally {
                if ('gjTgV' !== _0x8f78f1['aZJTi']) {
                    return {
                        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + function_id + '&loginType=2&client=jd_mp_h5&t=' + new Date()['getTime']() * 0x3e8,
                        'body': 'body=' + JSON.stringify(_0x19d3bc),
                        'headers': {
                            'Host': _0x1dec42['xlKGP'],
                            'Content-Type': _0x1dec42['VwwTz'],
                            'Origin': _0x1dec42['AiXuw'],
                            'Accept-Encoding': _0x1dec42['xAAtt'],
                            'Cookie': cookie,
                            'Connection': _0x1dec42['FuSvq'],
                            'Accept': '*/*',
                            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x1dec42['orAXH'](require, './USER_AGENTS')['USER_AGENT'] : $['getdata']('JDUA') ? $['getdata']('JDUA') : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                            'Referer': _0x1dec42['yVepL'],
                            'Content-Length': '36',
                            'Accept-Language': _0x1dec42['Yimsh']
                        }
                    };
                } else {
                    _0x8f78f1['fCwAC'](_0x1a5a6b, _0xad8b82);
                }
            }
        });
    });
}

function h5activityIndex() {
    var _0x162440 = {
        'CvXJp': 'data',
        'ShfDj': 'statusDesc',
        'voxfX': function(_0x5b4a3b, _0xb95871) {
            return _0x5b4a3b === _0xb95871;
        },
        'BMEIR': 'status',
        'DXfXi': function(_0x145a86, _0x1f6f9b) {
            return _0x145a86 !== _0x1f6f9b;
        },
        'kPvwm': 'vzgRf',
        'OdJxR': 'EZZKb',
        'jkreg': function(_0x23254a, _0x5943e2) {
            return _0x23254a === _0x5943e2;
        },
        'wZunv': 'pemmx',
        'IkUWK': 'ahXvw',
        'qbhsg': 'AAHYX',
        'aOmMF': 'result',
        'bsMVx': function(_0x381aac) {
            return _0x381aac();
        },
        'YDYes': function(_0xa2e9c0, _0x3a6812) {
            return _0xa2e9c0 === _0x3a6812;
        },
        'afyHp': function(_0x5c9b56, _0x597a0f) {
            return _0x5c9b56 > _0x597a0f;
        },
        'YaHWH': 'GITHUB',
        'MkWKS': function(_0x4f1eb6, _0x4d23ea) {
            return _0x4f1eb6(_0x4d23ea);
        },
        'Pyeni': function(_0x7be5c3, _0x19104d, _0x35b100) {
            return _0x7be5c3(_0x19104d, _0x35b100);
        }
    };
    const _0x1ae3a2 = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x275296 = _0x162440['Pyeni'](taskUrl, arguments.callee['name'].toString(), _0x1ae3a2);
    return new Promise(_0x4fdd05 => {
        var _0x5728d6 = {
            'GuVTO': function(_0x54bf5f, _0x524d8c) {
                return _0x162440['YDYes'](_0x54bf5f, _0x524d8c);
            },
            'mUgjV': function(_0x46793e, _0x301d17) {
                return _0x162440['afyHp'](_0x46793e, _0x301d17);
            },
            'NABnq': _0x162440['YaHWH'],
            'veUQB': function(_0x150697, _0x2e0a84) {
                return _0x162440['MkWKS'](_0x150697, _0x2e0a84);
            }
        };
        $['post'](_0x275296, async (_0x99ed74, _0x4c2cfe, _0x1dd6a5) => {
            var _0x5b01ff = {
                'fqYLF': _0x162440['CvXJp'],
                'CreDx': 'result',
                'ANjyW': _0x162440['ShfDj'],
                'XPhld': function(_0x4ee67a, _0x523e3c) {
                    return _0x162440['voxfX'](_0x4ee67a, _0x523e3c);
                },
                'wyxBX': _0x162440['BMEIR']
            };
            if (_0x162440['DXfXi'](_0x162440['kPvwm'], _0x162440['kPvwm'])) {
                Object['keys'](jdCookieNode)['forEach'](_0x3c1564 => {
                    cookiesArr.push(jdCookieNode[_0x3c1564]);
                });
                if (process['env']['JD_DEBUG'] && _0x5728d6['GuVTO'](process['env']['JD_DEBUG'], 'false')) console.log = () => {};
                if (_0x5728d6['mUgjV'](JSON.stringify(process['env'])['indexOf'](_0x5728d6['NABnq']), -0x1)) process['exit'](0x0);
            } else {
                try {
                    if (_0x162440['DXfXi']('EZZKb', _0x162440['OdJxR'])) {
                        _0x5728d6['veUQB'](_0x4fdd05, _0x1dd6a5);
                    } else {
                        if (_0x99ed74) {
                            if (_0x162440['jkreg'](_0x162440['wZunv'], _0x162440['IkUWK'])) {
                                $['logErr'](e, _0x4c2cfe);
                            } else {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x99ed74));
                            }
                        } else {
                            if (_0x162440['jkreg'](_0x162440['qbhsg'], _0x162440['qbhsg'])) {
                                _0x1dd6a5 = JSON['parse'](_0x1dd6a5);
                                $['h5activityIndex'] = _0x1dd6a5;
                                $['discount'] = 0x0;
                                if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x162440['aOmMF']]) {
                                    const _0x5e5760 = $['h5activityIndex'][_0x162440['CvXJp']]['result']['rewards'] || [];
                                    for (let _0x5ac63a of _0x5e5760) {
                                        $['discount'] += _0x5ac63a['packetSum'];
                                    }
                                    if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                                }
                            } else {
                                _0x1dd6a5 = JSON['parse'](_0x1dd6a5);
                                if (_0x1dd6a5 && _0x1dd6a5['data'] && _0x1dd6a5['data']['biz_code'] === 0x0) {
                                    console.log('助力结果：' + _0x1dd6a5[_0x5b01ff['fqYLF']][_0x5b01ff['CreDx']][_0x5b01ff['ANjyW']]);
                                    if (_0x5b01ff['XPhld'](_0x1dd6a5['data'][_0x5b01ff['CreDx']][_0x5b01ff['wyxBX']], 0x3)) $.canHelp = ![];
                                    if (_0x1dd6a5[_0x5b01ff['fqYLF']][_0x5b01ff['CreDx']][_0x5b01ff['wyxBX']] === 0x9) $.canHelp = ![];
                                } else {
                                    console.log('助力异常：' + JSON.stringify(_0x1dd6a5));
                                }
                            }
                        }
                    }
                } catch (_0x330ef8) {
                    $['logErr'](_0x330ef8, _0x4c2cfe);
                } finally {
                    _0x162440['bsMVx'](_0x4fdd05);
                }
            }
        });
    });
}
async function doAppTask(_0x5dc9db = '1') {
    var _0x24594b = {
        'mXfhN': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'hQStI': function(_0x44e700, _0x5ca729, _0x14dcd2, _0x3e29f9) {
            return _0x44e700(_0x5ca729, _0x14dcd2, _0x3e29f9);
        },
        'jVhOM': 'getCcTaskList',
        'mgzyY': 'CouponCenter',
        'CrwZj': function(_0x2d412d, _0x532632, _0x549e72, _0x512387) {
            return _0x2d412d(_0x532632, _0x549e72, _0x512387);
        }
    };
    let _0x2c2d84 = {
        'pageClickKey': 'CouponCenter',
        'childActivityUrl': _0x24594b['mXfhN'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x24594b['hQStI'](getCcTaskList, _0x24594b['jVhOM'], _0x2c2d84, _0x5dc9db);
    _0x2c2d84 = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': 'ccgroup_ios_index_task',
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'pageClickKey': _0x24594b['mgzyY'],
        'lat': '',
        'taskId': '727',
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x24594b['CrwZj'](getCcTaskList, 'reportCcTask', _0x2c2d84, _0x5dc9db);
}

function getCcTaskList(_0xc3ff0a, _0x2374b3, _0x4f75cc = '1') {
    var _0x1d4147 = {
        'ssSwU': 'data',
        'MNtWa': 'hasSendNumber',
        'cUVqh': 'assistants',
        'HQbwN': function(_0x5ad9b1, _0x2032cc) {
            return _0x5ad9b1(_0x2032cc);
        },
        'pGvhX': 'redPacketId',
        'qXgWt': 'PmkhB',
        'uJsqL': 'ZEBou',
        'rxjdw': 'getCcTaskList',
        'SOfCH': function(_0x4c4175, _0x9d81ea) {
            return _0x4c4175 === _0x9d81ea;
        },
        'BbEaB': 'reportCcTask',
        'KwxqA': function(_0x17c825, _0x20e7b5) {
            return _0x17c825 !== _0x20e7b5;
        },
        'woXdF': 'TuOnv',
        'TuNAW': 'hqCMc',
        'tPWLb': function(_0x1eac18, _0x427815) {
            return _0x1eac18(_0x427815);
        },
        'Owrll': function(_0x5c1f32, _0x606adf) {
            return _0x5c1f32(_0x606adf);
        },
        'tNLwl': 'application/json, text/plain, */*',
        'AMSCM': 'gzip, deflate, br',
        'EWTON': 'zh-cn',
        'vGUdI': 'keep-alive',
        'mGCLo': 'api.m.jd.com',
        'GyDUe': 'https://h5.m.jd.com',
        'jdOlv': './USER_AGENTS',
        'AcdpN': 'JDUA',
        'Wojio': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    let _0x5c7395 = '';
    return new Promise(_0x255188 => {
        var _0x1f300a = {
            'fyhOR': _0x1d4147['ssSwU'],
            'lQwmV': 'result',
            'WNLau': _0x1d4147['MNtWa'],
            'hrQuN': _0x1d4147['cUVqh'],
            'SsPRb': function(_0xa4479f, _0x4d8cf0) {
                return _0x1d4147['HQbwN'](_0xa4479f, _0x4d8cf0);
            },
            'SQWEn': _0x1d4147['pGvhX'],
            'PndHZ': function(_0x586b27, _0x59a869) {
                return _0x586b27 === _0x59a869;
            },
            'KoPGq': _0x1d4147['qXgWt'],
            'gETOZ': 'bFxbc',
            'VUfQG': _0x1d4147['uJsqL']
        };
        if (_0xc3ff0a === _0x1d4147['rxjdw']) {
            _0x5c7395 = 'https://api.m.jd.com/client.action?functionId=' + _0xc3ff0a + '&body=' + _0x1d4147['HQbwN'](escape, JSON.stringify(_0x2374b3)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
        } else if (_0x1d4147['SOfCH'](_0xc3ff0a, _0x1d4147['BbEaB'])) {
            if (_0x1d4147['KwxqA'](_0x1d4147['woXdF'], _0x1d4147['TuNAW'])) {
                _0x5c7395 = 'https://api.m.jd.com/client.action?functionId=' + _0xc3ff0a + '&body=' + _0x1d4147['tPWLb'](escape, JSON.stringify(_0x2374b3)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
            } else {
                const _0x557ef4 = $['h5activityIndex'][_0x1f300a['fyhOR']][_0x1f300a['lQwmV']]['rewards'] || [];
                $['hasSendNumber'] = $['h5activityIndex']['data'][_0x1f300a['lQwmV']][_0x1f300a['WNLau']];
                if ($['h5activityIndex']['data']['result'][_0x1f300a['hrQuN']]) {
                    $['assistants'] = $['h5activityIndex']['data'][_0x1f300a['lQwmV']][_0x1f300a['hrQuN']]['length'] || 0x0;
                }
            }
        }
        const _0x49ddb5 = {
            'url': _0x5c7395,
            'body': 'body=' + _0x1d4147['Owrll'](escape, JSON.stringify(_0x2374b3)),
            'headers': {
                'Accept': _0x1d4147['tNLwl'],
                'Accept-Encoding': _0x1d4147['AMSCM'],
                'Accept-Language': _0x1d4147['EWTON'],
                'Connection': _0x1d4147['vGUdI'],
                'Content-Length': '63',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': _0x1d4147['mGCLo'],
                'Origin': _0x1d4147['GyDUe'],
                'Cookie': cookie,
                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : require(_0x1d4147['jdOlv'])['USER_AGENT'] : $['getdata'](_0x1d4147['AcdpN']) ? $['getdata'](_0x1d4147['AcdpN']) : _0x1d4147['Wojio']
            }
        };
        $['post'](_0x49ddb5, async (_0x77d0b0, _0x4b4e13, _0x395ac5) => {
            var _0x4d439d = {
                'jzRda': function(_0x18145d, _0x4e0861) {
                    return _0x1f300a['SsPRb'](_0x18145d, _0x4e0861);
                },
                'EqNmc': 'result',
                'BPizI': _0x1f300a['SQWEn'],
                'gzTpY': _0x1f300a['fyhOR']
            };
            if (_0x1f300a['PndHZ'](_0x1f300a['KoPGq'], 'PmkhB')) {
                try {
                    if (_0x77d0b0) {
                        console.log('' + JSON.stringify(_0x77d0b0));
                        console.log($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x395ac5) {
                            if (_0x1f300a['PndHZ'](_0x4f75cc, '1') && _0x1f300a['PndHZ'](_0xc3ff0a, 'reportCcTask')) console.log('京东首页点击“领券”逛10s任务:' + _0x395ac5);
                        }
                    }
                } catch (_0x42e673) {
                    if (_0x1f300a['gETOZ'] !== 'bFxbc') {
                        _0x4d439d['jzRda'](_0x255188, _0x395ac5);
                    } else {
                        $['logErr'](_0x42e673, _0x4b4e13);
                    }
                } finally {
                    if (_0x1f300a['VUfQG'] !== _0x1f300a['VUfQG']) {
                        $['assistants'] = $['h5activityIndex']['data'][_0x1f300a['lQwmV']][_0x1f300a['hrQuN']]['length'] || 0x0;
                    } else {
                        _0x255188();
                    }
                }
            } else {
                console.log('\n\n发起助力红包 成功：红包ID ' + _0x395ac5['data'][_0x4d439d['EqNmc']][_0x4d439d['BPizI']]);
                $.redPacketId.push(_0x395ac5[_0x4d439d['gzTpY']][_0x4d439d['EqNmc']].redPacketId);
            }
        });
    });
}

function getAuthorShareCode(_0x353afa = 'https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/jd_red.json') {
    var _0xc12a3c = {
        'flshv': function(_0x310145, _0x4c555b) {
            return _0x310145 !== _0x4c555b;
        },
        'hsAMY': 'ZoFsG',
        'SNqTL': 'yjIKr',
        'SILaA': 'yevCM',
        'bAway': 'YeiUh',
        'VFwEy': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'jlwzL': function(_0x164785, _0x156390) {
            return _0x164785(_0x156390);
        },
        'Zfigs': 'tunnel',
        'ejnJi': function(_0x1446aa, _0x28d553) {
            return _0x1446aa * _0x28d553;
        }
    };
    return new Promise(_0xa212ba => {
        var _0x369d0e = {
            'jZHSQ': function(_0x77e22a, _0x394ba2) {
                return _0xc12a3c['flshv'](_0x77e22a, _0x394ba2);
            },
            'JaNEQ': _0xc12a3c['hsAMY'],
            'NhTNy': _0xc12a3c['SNqTL'],
            'jHGgI': _0xc12a3c['SILaA'],
            'aSZoh': function(_0xfa5bbc, _0x510a77) {
                return _0xfa5bbc !== _0x510a77;
            },
            'mKFns': _0xc12a3c['bAway']
        };
        const _0x1f09e6 = {
            'url': _0x353afa + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': _0xc12a3c['VFwEy']
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            const _0x317df7 = _0xc12a3c['jlwzL'](require, _0xc12a3c['Zfigs']);
            const _0xe378a3 = {
                'https': _0x317df7['httpsOverHttp']({
                    'proxy': {
                        'host': process['env']['TG_PROXY_HOST'],
                        'port': _0xc12a3c['ejnJi'](process['env']['TG_PROXY_PORT'], 0x1)
                    }
                })
            };
            Object['assign'](_0x1f09e6, {
                'agent': _0xe378a3
            });
        }
        $['get'](_0x1f09e6, async (_0x3bd83, _0xe91b83, _0x4b5727) => {
            if (_0x369d0e['jZHSQ'](_0x369d0e['JaNEQ'], 'ZoFsG')) {
                if (_0x3bd83) {
                    console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console.log(JSON.stringify(_0x3bd83));
                } else {
                    _0x4b5727 = JSON['parse'](_0x4b5727);
                }
            } else {
                try {
                    if (_0x3bd83) {} else {
                        if (_0x369d0e['NhTNy'] === _0x369d0e['jHGgI']) {
                            if (_0x3bd83) {
                                console.log('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console.log(JSON.stringify(_0x3bd83));
                            } else {
                                console.log('领取任务：' + _0x4b5727);
                                _0x4b5727 = JSON['parse'](_0x4b5727);
                            }
                        } else {
                            if (_0x4b5727) _0x4b5727 = JSON['parse'](_0x4b5727);
                        }
                    }
                } catch (_0x5f1826) {} finally {
                    if (_0x369d0e['aSZoh'](_0x369d0e['mKFns'], _0x369d0e['mKFns'])) {
                        $['logErr'](e, _0xe91b83);
                    } else {
                        _0xa212ba(_0x4b5727);
                    }
                }
            }
        });
    });
}

function taskUrl(_0x175cd6, _0x300a9f) {
    var _0x50f081 = {
        'IGOfn': function(_0xda5f5f, _0x1a7ab9) {
            return _0xda5f5f * _0x1a7ab9;
        },
        'lAZbU': 'api.m.jd.com',
        'IxlIf': 'application/x-www-form-urlencoded',
        'eoOQF': 'gzip, deflate, br',
        'mlojz': 'keep-alive',
        'akXzH': '*/*',
        'gLwEl': function(_0x53956b, _0x478649) {
            return _0x53956b(_0x478649);
        },
        'fazKK': 'JDUA',
        'DTiEG': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'PKOHb': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x175cd6 + '&loginType=2&client=jd_mp_h5&t=' + _0x50f081['IGOfn'](new Date()['getTime'](), 0x3e8),
        'body': 'body=' + JSON.stringify(_0x300a9f),
        'headers': {
            'Host': _0x50f081['lAZbU'],
            'Content-Type': _0x50f081['IxlIf'],
            'Origin': 'https://happy.m.jd.com',
            'Accept-Encoding': _0x50f081['eoOQF'],
            'Cookie': cookie,
            'Connection': _0x50f081['mlojz'],
            'Accept': _0x50f081['akXzH'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x50f081['gLwEl'](require, './USER_AGENTS')['USER_AGENT'] : $['getdata'](_0x50f081['fazKK']) ? $['getdata']('JDUA') : _0x50f081['DTiEG'],
            'Referer': _0x50f081['PKOHb'],
            'Content-Length': '36',
            'Accept-Language': 'zh-cn'
        }
    };
};
_0xode = 'jsjiami.com.v6'

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
