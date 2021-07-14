/**
 * Author:Panda
 * Date:2021-06-16
 * Version:1.0
 * 
 * 东东电竞经理
 * 活动地址：https://xinruidddj-isv.isvjcloud.com
 * 活动时间：长期
 * 
 * 账号内循环助力
 * 
 * 推荐cron: 15 10 * * * 
 * 环境变量:
 *     - export ZOO_OPENCARD="true" //默认不开通会员
 */
const $ = new Env("东东电竞经理");
const ZOO_OPENCARD = $.isNode() ? process.env.ZOO_OPENCARD || 'false' : 'false'
/*
 *Progcessed By JSDec in 0.65s
 *JSDec - JSDec.js.org
 */
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
const notify = $['isNode']() ? require('./sendNotify') : '';
let cookiesArr = [],
    cookie = '',
    message = '';
let shareCodeList = [];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x43898e => {
        cookiesArr['push'](jdCookieNode[_0x43898e]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x55a493 => _0x55a493['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x3f3fa6 => !!_0x3f3fa6);
}!(async () => {
    var _0x4255ad = {
        'PFJMH': '有点儿收获',
        'yWFjl': function(_0x40ee25, _0x226bf2) {
            return _0x40ee25 | _0x226bf2;
        },
        'mNlqv': function(_0x1a6bb9, _0x79c350) {
            return _0x1a6bb9 == _0x79c350;
        },
        'BNZeX': function(_0x39c93d, _0x1ecf0a) {
            return _0x39c93d & _0x1ecf0a;
        },
        'ZlxAk': '京东没有返回数据',
        'LOjvu': '京东返回了空数据',
        'pqlhR': function(_0x297d75) {
            return _0x297d75();
        },
        'ntUFA': function(_0x2cfd07, _0x18f4ef) {
            return _0x2cfd07 === _0x18f4ef;
        },
        'YiFvH': 'mqqmu',
        'QjfXV': 'ioNPX',
        'duCKj': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'dRnjI': 'https://bean.m.jd.com/bean/signIndex.action',
        'paHzm': function(_0x49fe1b, _0x5a013c) {
            return _0x49fe1b < _0x5a013c;
        },
        'BLSac': function(_0x49aa9d, _0x5e60c6) {
            return _0x49aa9d(_0x5e60c6);
        },
        'xRMyO': function(_0x6033ef) {
            return _0x6033ef();
        },
        'wRXFi': function(_0x420ace, _0x3f24ff) {
            return _0x420ace !== _0x3f24ff;
        },
        'aPDTB': 'jISRD',
        'jBaFw': 'wVAJO',
        'Hfclw': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'ErhJP': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'GcOjf': function(_0x2fe23d, _0x3f1e48) {
            return _0x2fe23d > _0x3f1e48;
        },
        'BGPbJ': function(_0x183f25, _0x196a9) {
            return _0x183f25 === _0x196a9;
        },
        'hTqma': 'AnMCL',
        'lnUuM': function(_0x481abe, _0x58bcb9) {
            return _0x481abe < _0x58bcb9;
        },
        'vhefE': function(_0x33501e, _0x551dc0) {
            return _0x33501e + _0x551dc0;
        },
        'qNNtl': function(_0x30f279) {
            return _0x30f279();
        },
        'bcNMD': 'bdFRM',
        'Qakvy': function(_0x222b47, _0xaaef21, _0xdf359e) {
            return _0x222b47(_0xaaef21, _0xdf359e);
        },
        'SzObS': function(_0x1a55e3) {
            return _0x1a55e3();
        },
        'lsJsc': function(_0x32b459, _0x333d8e) {
            return _0x32b459 !== _0x333d8e;
        },
        'XnhtR': '\n脚本免费使用，请勿在大陆地区的各类平台传播。\n动物园：https://t.me/zoo_channel\n京东京享红包：https://u.jd.com/8zKsEse (每日三次领取红包的机会)',
        'BjryF': function(_0x766e9f, _0x4815dc) {
            return _0x766e9f === _0x4815dc;
        },
        'KffiB': 'LTBDa'
    };
    if (!cookiesArr[0x0]) {
        if (_0x4255ad['ntUFA'](_0x4255ad['YiFvH'], _0x4255ad['QjfXV'])) {
            $['msg']($['name'], _0x4255ad['PFJMH'], message);
        } else {
            $['msg']($['name'], _0x4255ad['duCKj'], _0x4255ad['dRnjI'], {
                'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
            });
            return;
        }
    }
    for (let _0x3fff89 = 0x0; _0x4255ad['paHzm'](_0x3fff89, cookiesArr['length']); _0x3fff89++) {
        if (cookiesArr[_0x3fff89]) {
            cookie = cookiesArr[_0x3fff89];
            originCookie = cookiesArr[_0x3fff89];
            newCookie = '';
            $['UserName'] = _0x4255ad['BLSac'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x3fff89 + 0x1;
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x4255ad['xRMyO'](checkCookie);
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x4255ad['dRnjI']
                });
                // if ($['isNode']()) {
                //     if (_0x4255ad['wRXFi'](_0x4255ad['aPDTB'], _0x4255ad['jBaFw'])) {
                //         await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                //     } else {
                //         resolve();
                //     }
                // }
                continue;
            }
            $['bean'] = 0x0;
            $['ADID'] = getUUID(_0x4255ad['Hfclw'], 0x1);
            $['UUID'] = getUUID(_0x4255ad['ErhJP']);
            await _0x4255ad['xRMyO'](elecSport);
            if (_0x4255ad['GcOjf']($['bean'], 0x0)) {
                if (_0x4255ad['BGPbJ'](_0x4255ad['hTqma'], 'tupZR')) {
                    return format['replace'](/[xy]/g, function(_0x2409ae) {
                        var _0x2d84ae = _0x4255ad['yWFjl'](Math['random']() * 0x10, 0x0),
                            _0x971d9e = _0x4255ad['mNlqv'](_0x2409ae, 'x') ? _0x2d84ae : _0x4255ad['BNZeX'](_0x2d84ae, 0x3) | 0x8;
                        if (UpperCase) {
                            uuid = _0x971d9e['toString'](0x24)['toUpperCase']();
                        } else {
                            uuid = _0x971d9e['toString'](0x24);
                        }
                        return uuid;
                    });
                } else {
                    message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                }
            }
        }
    }
    for (let _0x49a9e5 = 0x0; _0x4255ad['lnUuM'](_0x49a9e5, cookiesArr['length']); _0x49a9e5++) {
        if ('NdqZW' === 'NdqZW') {
            if (cookiesArr[_0x49a9e5]) {
                cookie = cookiesArr[_0x49a9e5];
                originCookie = cookiesArr[_0x49a9e5];
                newCookie = '';
                $['UserName'] = _0x4255ad['BLSac'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x4255ad['vhefE'](_0x49a9e5, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x4255ad['qNNtl'](checkCookie);
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x4255ad['dRnjI']
                    });
                    if ($['isNode']()) {
                        if (_0x4255ad['wRXFi'](_0x4255ad['bcNMD'], _0x4255ad['bcNMD'])) {
                            $['log'](_0x4255ad['ZlxAk']);
                        } else {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                    }
                    continue;
                }
                $['bean'] = 0x0;
                $['ADID'] = _0x4255ad['Qakvy'](getUUID, _0x4255ad['Hfclw'], 0x1);
                $['UUID'] = getUUID(_0x4255ad['ErhJP']);
                await _0x4255ad['SzObS'](doAssist);
                if ($['bean'] > 0x0) {
                    message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                }
            }
        } else {
            $['log']('无法成功获取到用户鉴权信息');
        }
    }
    if (message !== '') {
        if (_0x4255ad['lsJsc']('iAaHj', 'klOsb')) {
            if ($['isNode']()) {
                if (_0x4255ad['BGPbJ']('cAhkk', 'wzlWG')) {
                    if (data) {
                        data = JSON['parse'](data);
                        if (data['code'] === '0') {
                            $['token'] = data['token'];
                            cookie += 'IsvToken=' + data['token'] + ';';
                        }
                    } else {
                        $['log'](_0x4255ad['LOjvu']);
                    }
                } else {
                    await notify['sendNotify']($['name'], message, '', _0x4255ad['XnhtR']);
                }
            } else {
                if (_0x4255ad['BjryF']('PZDvN', _0x4255ad['KffiB'])) {
                    $['log']('没有成功获取到用户鉴权信息');
                } else {
                    $['msg']($['name'], _0x4255ad['PFJMH'], message);
                }
            }
        } else {
            _0x4255ad['pqlhR'](resolve);
        }
    }
})()['catch'](_0x51c81a => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x51c81a + '!', '');
})['finally'](() => {
    $['done']();
});
async function doAssist() {
    var _0x595120 = {
        'vZsQR': function(_0x48d13a, _0x324818) {
            return _0x48d13a === _0x324818;
        },
        'tfhMI': '完成助力',
        'AqmpI': function(_0xb70c04, _0x50ec5b) {
            return _0xb70c04 - _0x50ec5b;
        },
        'xfbYu': function(_0x157af4, _0x5d76a8) {
            return _0x157af4(_0x5d76a8);
        },
        'gRWoa': function(_0x3b080b, _0x5d5a79) {
            return _0x3b080b === _0x5d5a79;
        },
        'KUJaw': 'jowOL',
        'DErph': function(_0x201633, _0x187529, _0x40f363) {
            return _0x201633(_0x187529, _0x40f363);
        },
        'eNVLl': function(_0x3b88df, _0x418159) {
            return _0x3b88df === _0x418159;
        },
        'gDZln': 'qArVN',
        'EfMeY': 'fjWPj',
        'lNuwZ': 'dJHWE',
        'NImwf': 'AEkTm',
        'hikUN': 'task/do_assist_task',
        'ubIic': '已经没有助力次数了',
        'IRyjD': '未能成功获取到本地助力池',
        'RkgiR': 'ACUjD',
        'FfMth': '无法成功获取到用户鉴权信息',
        'FNRdw': function(_0x55576d, _0x35d9ec) {
            return _0x55576d !== _0x35d9ec;
        },
        'JJPVw': 'cXqHj',
        'jpytn': 'AAJUL'
    };
    console['log'](shareCodeList);
    $['token'] = null;
    $['auth'] = null;
    $['userId'] = null;
    $['userInfo'] = null;
    $['assistTimes'] = 0x5;
    await getToken();
    if ($['token']) {
        if (_0x595120['gRWoa'](_0x595120['KUJaw'], _0x595120['KUJaw'])) {
            await _0x595120['DErph'](task, 'user/jd/auth', 'token=' + $['token'] + '&&source=01');
            if ($['auth']) {
                if (shareCodeList['length']) {
                    if (_0x595120['eNVLl'](_0x595120['gDZln'], _0x595120['EfMeY'])) {
                        cookiesArr['push'](jdCookieNode[item]);
                    } else {
                        for (const _0x2cbf21 of shareCodeList) {
                            if ($['assistTimes']) {
                                if (_0x595120['eNVLl'](_0x595120['lNuwZ'], _0x595120['NImwf'])) {
                                    Object['keys'](jdCookieNode)['forEach'](_0x130a04 => {
                                        cookiesArr['push'](jdCookieNode[_0x130a04]);
                                    });
                                    if (process['env']['JD_DEBUG'] && _0x595120['vZsQR'](process['env']['JD_DEBUG'], 'false')) console['log'] = () => {};
                                } else {
                                    await _0x595120['DErph'](task, _0x595120['hikUN'], 'token=' + _0x2cbf21['token'] + '&inviter=' + _0x2cbf21['inviter']);
                                    await $['wait'](0x7d0);
                                }
                            } else {
                                $['log'](_0x595120['ubIic']);
                            }
                        }
                    }
                } else {
                    $['log'](_0x595120['IRyjD']);
                    return;
                }
            } else {
                if (_0x595120['eNVLl'](_0x595120['RkgiR'], 'ACUjD')) {
                    $['log'](_0x595120['FfMth']);
                } else {
                    if (data['body']['result']) {
                        $['log'](_0x595120['tfhMI']);
                        $['assistTimes'] = _0x595120['AqmpI'](parseInt(data['body']['result']['max_assist_times']), _0x595120['xfbYu'](parseInt, data['body']['result']['already_assist_times']));
                    }
                }
            }
        } else {
            message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a       └ 获得 ' + $['bean'] + ' 京豆。';
        }
    } else {
        if (_0x595120['FNRdw'](_0x595120['JJPVw'], _0x595120['jpytn'])) {
            $['log'](_0x595120['FfMth']);
        } else {
            message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a       └ 获得 ' + $['bean'] + ' 京豆。';
        }
    }
}
async function elecSport() {
    var _0x317c86 = {
        'XeUpM': function(_0x36ee00, _0x1fcf5b) {
            return _0x36ee00 === _0x1fcf5b;
        },
        'iOMeN': 'userInfo',
        'qFMkJ': function(_0x10a422, _0x563d1b) {
            return _0x10a422 !== _0x563d1b;
        },
        'wGNJT': 'DWKis',
        'RgedW': function(_0x596c93, _0x12ae0f, _0xd484f0) {
            return _0x596c93(_0x12ae0f, _0xd484f0);
        },
        'zEDOv': function(_0x331428, _0x1969fd, _0x40eb50, _0x3de83f) {
            return _0x331428(_0x1969fd, _0x40eb50, _0x3de83f);
        },
        'bPmNq': 'uc/user',
        'cOivi': 'get',
        'zXSLp': function(_0xee9923, _0x1509f4) {
            return _0xee9923 !== _0x1509f4;
        },
        'aABXc': 'iDmiL',
        'zDbxG': 'club/guide',
        'uTJfY': 'club/get_produce_coins',
        'znVoF': 'task/detail',
        'xIjqk': function(_0x3baec4, _0x335d76) {
            return _0x3baec4 !== _0x335d76;
        },
        'CGXeR': 'xCtEv',
        'vCypb': '没有成功获取到用户信息',
        'GEPDA': '没有成功获取到用户鉴权信息'
    };
    $['token'] = null;
    $['auth'] = null;
    $['userId'] = null;
    $['userInfo'] = null;
    await getToken();
    if ($['token']) {
        if (_0x317c86['qFMkJ']('TTYyx', _0x317c86['wGNJT'])) {
            await _0x317c86['RgedW'](task, 'user/jd/auth', 'token=' + $['token'] + '&&source=01');
            if ($['auth']) {
                await _0x317c86['zEDOv'](task, _0x317c86['bPmNq'], '', _0x317c86['cOivi']);
                if ($['userInfo']) {
                    if (_0x317c86['zXSLp'](_0x317c86['aABXc'], 'iDmiL')) {
                        if (data['body']['result']['user_score']) {
                            $['log']('     完成任务，当前共' + data['body']['result']['user_score'] + '金币');
                        }
                    } else {
                        if ($['userInfo']['new_comer'] === '1') {
                            await task(_0x317c86['zDbxG'], '', _0x317c86['cOivi']);
                            await $['wait'](0x7d0);
                            await task('club/guide', '');
                        }
                        $['userId'] = $['userInfo']['id'];
                        $['log']('你好‘' + $['userInfo']['nickname'] + '’\x0a当前金币:' + $['userInfo']['coins'] + '\n当前俱乐部等级:' + $['userInfo']['club_level'] + '\x0a当前竞赛关卡:' + $['userInfo']['gate_num'] + '\x0a');
                        await _0x317c86['RgedW'](task, _0x317c86['uTJfY'], '');
                        await _0x317c86['zEDOv'](task, _0x317c86['znVoF'], '', _0x317c86['cOivi']);
                    }
                } else {
                    if (_0x317c86['xIjqk'](_0x317c86['CGXeR'], 'CjoVw')) {
                        $['log'](_0x317c86['vCypb']);
                    } else {
                        data = JSON['parse'](data);
                        if (_0x317c86['XeUpM'](data['retcode'], '1001')) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (data['retcode'] === '0' && data['data']['hasOwnProperty'](_0x317c86['iOMeN'])) {
                            $['nickName'] = data['data']['userInfo']['baseInfo']['nickname'];
                        }
                    }
                }
            } else {
                $['log']('没有成功获取到用户鉴权信息');
            }
        } else {
            $['token'] = data['token'];
            cookie += 'IsvToken=' + data['token'] + ';';
        }
    } else {
        $['log'](_0x317c86['GEPDA']);
    }
}

function task(_0xfbfb6b, _0x18a674, _0x247a54 = 'post') {
    var _0x5e2fe9 = {
        'DEDRF': 'xinruidddj-isv.isvjcloud.com',
        'ymkUs': 'zh-cn',
        'BAcya': 'gzip, deflate, br',
        'dcnHE': 'application/x-www-form-urlencoded',
        'CLUMw': 'keep-alive',
        'lJHGA': '没有成功获取到用户信息',
        'rOPqP': 'CookieJD',
        'GRUZR': 'xdmpy',
        'tQQlX': function(_0xcd86ae, _0x4035d7) {
            return _0xcd86ae !== _0x4035d7;
        },
        'bxrSl': 'task/do_task',
        'zhywy': 'task/detail',
        'QZrRn': function(_0x225103, _0x48b0cb) {
            return _0x225103 === _0x48b0cb;
        },
        'nHpyQ': function(_0xd9a843, _0x23746c) {
            return _0xd9a843 !== _0x23746c;
        },
        'mQKaI': 'NDIKz',
        'ViTzR': function(_0x1cb738, _0x1c221b, _0x3180cf) {
            return _0x1cb738(_0x1c221b, _0x3180cf);
        },
        'oCCjQ': 'uc/interact/write',
        'NIPAQ': function(_0x1dad2e, _0x44ba98) {
            return _0x1dad2e === _0x44ba98;
        },
        'wMTHe': 'true',
        'HykOQ': 'XAQZW',
        'sHhNb': 'FJVXt',
        'cjomu': 'itysV',
        'JsZIy': 'rjprB',
        'SbxMm': function(_0x4bae27, _0x42bfff, _0x49aab3) {
            return _0x4bae27(_0x42bfff, _0x49aab3);
        },
        'AREDu': function(_0x31f253, _0x24aa29, _0x2561a7) {
            return _0x31f253(_0x24aa29, _0x2561a7);
        },
        'gsNZH': 'wMOUS',
        'feCdw': 'nLTEA',
        'ysQpC': '已经完成任务',
        'dOghZ': 'okkSC',
        'SkleY': 'DUaEs',
        'zeDNz': function(_0x85d55c, _0x3ce18c) {
            return _0x85d55c(_0x3ce18c);
        },
        'OVyLu': function(_0x23ef49, _0x22af04) {
            return _0x23ef49 !== _0x22af04;
        },
        'lXCcY': 'vWOaE',
        'aEJpC': '京东没有返回数据',
        'anUcd': 'GhOJL'
    };
    return new Promise(_0xd24716 => {
        var _0x261720 = {
            'QFXso': _0x5e2fe9['DEDRF'],
            'XheLk': _0x5e2fe9['ymkUs'],
            'xSAEr': _0x5e2fe9['BAcya'],
            'hMVzx': _0x5e2fe9['dcnHE'],
            'Eqlkk': _0x5e2fe9['CLUMw'],
            'rNLYO': 'https://xinruidddj-isv.isvjcloud.com',
            'gjlrR': _0x5e2fe9['lJHGA'],
            'lqsRk': 'CookiesJD',
            'pnOVv': 'CookieJD2',
            'fuKNH': _0x5e2fe9['rOPqP'],
            'fsvxn': function(_0x10612a, _0xb9700) {
                return _0x10612a === _0xb9700;
            },
            'UUsKx': 'HBhJO',
            'lZnCt': _0x5e2fe9['GRUZR'],
            'viXyi': function(_0x4b1161, _0x3e423a) {
                return _0x5e2fe9['tQQlX'](_0x4b1161, _0x3e423a);
            },
            'QJStV': 'club/get_produce_coins',
            'gINzt': 'club/guide',
            'DELyh': _0x5e2fe9['bxrSl'],
            'Muqfn': _0x5e2fe9['zhywy'],
            'KrCls': function(_0x5c9360, _0x5f3d4f) {
                return _0x5e2fe9['QZrRn'](_0x5c9360, _0x5f3d4f);
            },
            'NLvvC': function(_0x1d5a9c, _0x54f36a) {
                return _0x5e2fe9['nHpyQ'](_0x1d5a9c, _0x54f36a);
            },
            'dKDDQ': _0x5e2fe9['mQKaI'],
            'ikhuI': 'uKIzu',
            'MdeDl': function(_0xb0e670, _0x1c571f, _0x2fb0e3) {
                return _0x5e2fe9['ViTzR'](_0xb0e670, _0x1c571f, _0x2fb0e3);
            },
            'BcOwL': _0x5e2fe9['oCCjQ'],
            'lJwUX': function(_0x52fa84, _0x20ad52) {
                return _0x5e2fe9['NIPAQ'](_0x52fa84, _0x20ad52);
            },
            'HbDpi': _0x5e2fe9['wMTHe'],
            'JofaK': _0x5e2fe9['HykOQ'],
            'GDEJH': function(_0x2d5520, _0x29d174) {
                return _0x5e2fe9['nHpyQ'](_0x2d5520, _0x29d174);
            },
            'lccVx': _0x5e2fe9['sHhNb'],
            'OQPTX': function(_0x5437e8, _0x1d0022) {
                return _0x5437e8 === _0x1d0022;
            },
            'fIppf': _0x5e2fe9['cjomu'],
            'SOjXx': _0x5e2fe9['JsZIy'],
            'FJQpq': function(_0x3beb60, _0x577ec1, _0x185fc4) {
                return _0x5e2fe9['SbxMm'](_0x3beb60, _0x577ec1, _0x185fc4);
            },
            'TLdSO': function(_0x101a80, _0x54cded, _0x26fe38) {
                return _0x5e2fe9['AREDu'](_0x101a80, _0x54cded, _0x26fe38);
            },
            'WUnHJ': _0x5e2fe9['gsNZH'],
            'swABi': _0x5e2fe9['feCdw'],
            'YSoiQ': function(_0x233055, _0x27011f) {
                return _0x5e2fe9['NIPAQ'](_0x233055, _0x27011f);
            },
            'zTzdr': _0x5e2fe9['ysQpC'],
            'laoJR': 'task/do_assist_task',
            'qzPmL': _0x5e2fe9['dOghZ'],
            'lxvxt': _0x5e2fe9['SkleY'],
            'LnoyT': function(_0x2faa8e, _0xab9499) {
                return _0x5e2fe9['zeDNz'](_0x2faa8e, _0xab9499);
            },
            'rylTn': function(_0x48cfe1, _0x134a94) {
                return _0x5e2fe9['OVyLu'](_0x48cfe1, _0x134a94);
            },
            'RotNp': _0x5e2fe9['lXCcY'],
            'ALxor': _0x5e2fe9['aEJpC'],
            'ivbGj': _0x5e2fe9['anUcd'],
            'Imrke': function(_0x4b1f2d) {
                return _0x4b1f2d();
            }
        };
        $[_0x247a54](taskUrl(_0xfbfb6b, _0x18a674, _0x247a54), async (_0x50090b, _0x41eb52, _0x1c8c50) => {
            var _0x37b13d = {
                'gobuR': _0x261720['lqsRk'],
                'RPyLi': _0x261720['pnOVv'],
                'vFQii': _0x261720['fuKNH']
            };
            try {
                if (_0x50090b) {
                    $['log'](_0x50090b);
                } else {
                    if (_0x261720['fsvxn'](_0x261720['UUsKx'], _0x261720['lZnCt'])) {
                        $['log'](error);
                    } else {
                        if (_0x1c8c50) {
                            _0x1c8c50 = JSON['parse'](_0x1c8c50);
                            if (_0x1c8c50['status'] === '0') {
                                if (_0x261720['viXyi']('zIipW', 'zIipW')) {
                                    $['done']();
                                } else {
                                    switch (_0xfbfb6b) {
                                        case 'user/jd/auth':
                                            if (_0x1c8c50['body'] && _0x1c8c50['body']['access_token']) {
                                                $['auth'] = _0x1c8c50['body']['access_token'];
                                                cookie += 'jd-elec-sport=' + _0x1c8c50['body']['access_token'] + ';';
                                            }
                                            break;
                                        case _0x261720['QJStV']:
                                            $['log']('成功收取' + _0x1c8c50['body']['coins'] + '金币');
                                            break;
                                        case 'uc/user':
                                            $['userInfo'] = _0x1c8c50['body'];
                                            break;
                                        case _0x261720['gINzt']:
                                            if (_0x1c8c50['body']['id']) {
                                                $['log']('你好：' + _0x1c8c50['body']['nickname'] + '，欢迎来到东东电竞经理俱乐部。');
                                            }
                                            break;
                                        case _0x261720['DELyh']:
                                            if (_0x1c8c50['body']['result']) {
                                                if (_0x1c8c50['body']['result']['user_score']) {
                                                    $['log']('     完成任务，当前共' + _0x1c8c50['body']['result']['user_score'] + '金币');
                                                }
                                            }
                                            break;
                                        case _0x261720['Muqfn']:
                                            for (const _0x431f22 of _0x1c8c50['body']['task_vos']) {
                                                $['log']('\n任务:' + _0x431f22['task_name']);
                                                if (_0x261720['KrCls'](_0x431f22['status'], '1')) {
                                                    if (_0x261720['NLvvC'](_0x261720['dKDDQ'], _0x261720['dKDDQ'])) {
                                                        $['logErr'](_0x50090b);
                                                    } else {
                                                        switch (_0x431f22['task_id']) {
                                                            case '1':
                                                                await task('task/do_task', 'token=' + _0x431f22['simple_record_info_vo']['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                break;
                                                            case '2':
                                                                $['log']('     任务进度：' + _0x431f22['times'] + '/' + _0x431f22['max_times']);
                                                                shareCodeList['push']({
                                                                    'token': _0x431f22['assist_task_detail_vo']['task_token'],
                                                                    'inviter': $['userInfo']['openid']
                                                                });
                                                                break;
                                                            case '4':
                                                                for (const _0x46a20b of _0x431f22['browse_shop_vo']) {
                                                                    if (_0x261720['ikhuI'] !== _0x261720['ikhuI']) {
                                                                        $['log']('你好：' + _0x1c8c50['body']['nickname'] + '，欢迎来到东东电竞经理俱乐部。');
                                                                    } else {
                                                                        if (_0x261720['KrCls'](_0x46a20b['status'], '1')) {
                                                                            $['log']('     去浏览' + _0x46a20b['shop_name']);
                                                                            await task('task/do_task', 'token=' + _0x46a20b['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                            await _0x261720['MdeDl'](task, _0x261720['BcOwL'], 'action_type=4&channel=2&source_app=2&vender=' + _0x46a20b['vender_id']);
                                                                            await $['wait'](0x7d0);
                                                                        }
                                                                    }
                                                                }
                                                                break;
                                                            case '6':
                                                                if (_0x261720['lJwUX'](ZOO_OPENCARD, _0x261720['HbDpi'])) {
                                                                    if (_0x261720['NLvvC'](_0x261720['JofaK'], _0x261720['JofaK'])) {
                                                                        $['log'](_0x50090b);
                                                                    } else {
                                                                        for (const _0x35f7d9 of _0x431f22['brand_member_vos']) {
                                                                            if (_0x35f7d9['status'] === '1') {
                                                                                $['log']('     去成为' + _0x35f7d9['title']);
                                                                                await _0x261720['MdeDl'](task, _0x261720['DELyh'], 'token=' + _0x35f7d9['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                                await _0x261720['MdeDl'](task, 'uc/interact/write', 'action_type=8&channel=2&source_app=2&vender=');
                                                                                await $['wait'](0x7d0);
                                                                            }
                                                                        }
                                                                    }
                                                                } else {
                                                                    $['log']('根据用户设置不执行入会任务');
                                                                }
                                                                break;
                                                            case '5':
                                                            case '8':
                                                                for (const _0xe9fbb5 of _0x431f22['shopping_activity_vos']) {
                                                                    if (_0xe9fbb5['status'] === '1') {
                                                                        $['log']('     去浏览' + _0xe9fbb5['title']);
                                                                        await task(_0x261720['DELyh'], 'token=' + _0xe9fbb5['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                        await $['wait'](0x7d0);
                                                                    }
                                                                }
                                                                break;
                                                            case '7':
                                                                for (const _0x165ea5 of _0x431f22['product_info_vos']) {
                                                                    if (_0x261720['GDEJH'](_0x261720['lccVx'], 'FJVXt')) {
                                                                        $['logErr'](e);
                                                                    } else {
                                                                        if (_0x261720['OQPTX'](_0x165ea5['status'], '1')) {
                                                                            if (_0x261720['fIppf'] !== _0x261720['SOjXx']) {
                                                                                $['log']('     去浏览' + _0x165ea5['sku_name']);
                                                                                await _0x261720['FJQpq'](task, _0x261720['DELyh'], 'token=' + _0x165ea5['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                                await _0x261720['TLdSO'](task, 'uc/interact/write', 'action_type=5&channel=2&source_app=2&vender=');
                                                                                await $['wait'](0x7d0);
                                                                            } else {
                                                                                let _0x327b5a = $['getdata'](_0x37b13d['gobuR']) || '[]';
                                                                                _0x327b5a = JSON['parse'](_0x327b5a);
                                                                                cookiesArr = _0x327b5a['map'](_0x2e5f28 => _0x2e5f28['cookie']);
                                                                                cookiesArr['reverse']();
                                                                                cookiesArr['push'](...[$['getdata'](_0x37b13d['RPyLi']), $['getdata'](_0x37b13d['vFQii'])]);
                                                                                cookiesArr['reverse']();
                                                                                cookiesArr = cookiesArr['filter'](_0x4836c8 => !!_0x4836c8);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                break;
                                                            case '10':
                                                                for (const _0x3761b3 of _0x431f22['follow_shop_vo']) {
                                                                    if (_0x261720['WUnHJ'] !== _0x261720['swABi']) {
                                                                        if (_0x261720['YSoiQ'](_0x3761b3['status'], '1')) {
                                                                            $['log']('     去关注' + _0x3761b3['shop_name']);
                                                                            await _0x261720['TLdSO'](task, _0x261720['DELyh'], 'token=' + _0x3761b3['task_token'] + '&task_id=' + _0x431f22['task_id'] + '&task_type=' + _0x431f22['task_type']);
                                                                            await task(_0x261720['BcOwL'], 'action_type=6&channel=2&source_app=2&vender=' + _0x3761b3['vender_id']);
                                                                            await $['wait'](0x7d0);
                                                                        }
                                                                    } else {
                                                                        $['log'](_0x50090b);
                                                                    }
                                                                }
                                                                break;
                                                            default:
                                                                console['log'](_0x431f22);
                                                                break;
                                                        }
                                                    }
                                                } else {
                                                    $['log'](_0x261720['zTzdr']);
                                                }
                                                await $['wait'](0x7d0);
                                            }
                                            break;
                                        case _0x261720['laoJR']:
                                            if (_0x1c8c50['body']) {
                                                if (_0x261720['GDEJH'](_0x261720['qzPmL'], 'okkSC')) {
                                                    $['log'](error);
                                                } else {
                                                    if (_0x1c8c50['body']['result']) {
                                                        if (_0x261720['GDEJH'](_0x261720['lxvxt'], _0x261720['lxvxt'])) {
                                                            uuid = v['toString'](0x24)['toUpperCase']();
                                                        } else {
                                                            $['log']('完成助力');
                                                            $['assistTimes'] = _0x261720['LnoyT'](parseInt, _0x1c8c50['body']['result']['max_assist_times']) - parseInt(_0x1c8c50['body']['result']['already_assist_times']);
                                                        }
                                                    }
                                                }
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }
                        } else {
                            if (_0x261720['rylTn'](_0x261720['RotNp'], _0x261720['RotNp'])) {
                                return {
                                    'url': 'https://xinruidddj-isv.isvjcloud.com/api/' + _0xfbfb6b,
                                    'headers': {
                                        'Host': _0x261720['QFXso'],
                                        'Accept': 'application/json, text/plain, */*',
                                        'Authorization': auth,
                                        'Accept-Language': _0x261720['XheLk'],
                                        'Accept-Encoding': _0x261720['xSAEr'],
                                        'Content-Type': _0x261720['hMVzx'],
                                        'Origin': 'https://xinruidddj-isv.isvjcloud.com',
                                        'User-Agent': 'jdapp;iPhone;10.0.2;14.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';JDEbook/openapp.jdreader;model/iPhone13,3;addressid/138474561;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                                        'Connection': _0x261720['Eqlkk'],
                                        'Referer': _0x261720['rNLYO'],
                                        'Cookie': cookie
                                    },
                                    'body': _0x18a674
                                };
                            } else {
                                $['log'](_0x261720['ALxor']);
                            }
                        }
                    }
                }
            } catch (_0x4f11b0) {
                $['log'](_0x4f11b0);
            } finally {
                if (_0x261720['rylTn']('GhOJL', _0x261720['ivbGj'])) {
                    $['log'](_0x261720['gjlrR']);
                } else {
                    _0x261720['Imrke'](_0xd24716);
                }
            }
        });
    });
}

function taskUrl(_0x148c6f, _0x23771a, _0x23e700) {
    var _0xcc2bc1 = {
        'ATWVG': '未能成功获取到本地助力池',
        'znZaa': function(_0x556520, _0x8ef45) {
            return _0x556520 === _0x8ef45;
        },
        'bWbuT': 'get',
        'linPr': 'application/json, text/plain, */*',
        'ijQwE': 'zh-cn',
        'uPNoQ': 'gzip, deflate, br',
        'fZTbN': 'application/x-www-form-urlencoded',
        'iXADh': 'keep-alive',
        'jCIIz': 'https://xinruidddj-isv.isvjcloud.com',
        'oBEfd': 'UTyQK'
    };
    auth = $['auth'] ? $['auth'] : 'undefined';
    if (_0xcc2bc1['znZaa'](_0x23e700, _0xcc2bc1['bWbuT'])) {
        return {
            'url': 'https://xinruidddj-isv.isvjcloud.com/api/' + _0x148c6f,
            'headers': {
                'Host': 'xinruidddj-isv.isvjcloud.com',
                'Accept': _0xcc2bc1['linPr'],
                'Authorization': auth,
                'Accept-Language': _0xcc2bc1['ijQwE'],
                'Accept-Encoding': _0xcc2bc1['uPNoQ'],
                'Content-Type': _0xcc2bc1['fZTbN'],
                'Origin': 'https://xinruidddj-isv.isvjcloud.com',
                'User-Agent': 'jdapp;iPhone;10.0.2;14.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';JDEbook/openapp.jdreader;model/iPhone13,3;addressid/138474561;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                'Connection': _0xcc2bc1['iXADh'],
                'Referer': _0xcc2bc1['jCIIz'],
                'Cookie': cookie
            }
        };
    } else {
        if (_0xcc2bc1['oBEfd'] === _0xcc2bc1['oBEfd']) {
            return {
                'url': 'https://xinruidddj-isv.isvjcloud.com/api/' + _0x148c6f,
                'headers': {
                    'Host': 'xinruidddj-isv.isvjcloud.com',
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': auth,
                    'Accept-Language': _0xcc2bc1['ijQwE'],
                    'Accept-Encoding': _0xcc2bc1['uPNoQ'],
                    'Content-Type': _0xcc2bc1['fZTbN'],
                    'Origin': _0xcc2bc1['jCIIz'],
                    'User-Agent': 'jdapp;iPhone;10.0.2;14.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';JDEbook/openapp.jdreader;model/iPhone13,3;addressid/138474561;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                    'Connection': 'keep-alive',
                    'Referer': _0xcc2bc1['jCIIz'],
                    'Cookie': cookie
                },
                'body': _0x23771a
            };
        } else {
            $['log'](_0xcc2bc1['ATWVG']);
            return;
        }
    }
}

function getToken() {
    var _0x2df3ec = {
        'gkIkT': function(_0x170ea2, _0x2c6043) {
            return _0x170ea2 !== _0x2c6043;
        },
        'YUtye': 'yOIfw',
        'AqUBs': function(_0x5cc9a2, _0x45b9a4) {
            return _0x5cc9a2 === _0x45b9a4;
        },
        'ijWDS': function(_0x520287, _0x2b7301) {
            return _0x520287 === _0x2b7301;
        },
        'eBhye': function(_0x4f2994, _0x4dad50) {
            return _0x4f2994 !== _0x4dad50;
        },
        'PuaXy': 'pQzBd',
        'DYuLG': 'sArHf',
        'rVkJd': '京东返回了空数据',
        'Pncjh': 'GcnpB',
        'lLrIP': function(_0x5e2acd) {
            return _0x5e2acd();
        },
        'bPNTI': function(_0x4ec767, _0xa17775) {
            return _0x4ec767 - _0xa17775;
        },
        'pPUeJ': function(_0x3c46b2, _0xd912e1) {
            return _0x3c46b2(_0xd912e1);
        },
        'DnUNL': 'api.m.jd.com',
        'jtCAf': 'application/x-www-form-urlencoded',
        'RmJmw': '*/*',
        'UnSPQ': 'keep-alive',
        'aGbAj': 'zh-Hans-CN;q=1',
        'Jrram': 'gzip, deflate, br'
    };
    let _0x17b624 = {
        'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'headers': {
            'Host': _0x2df3ec['DnUNL'],
            'Content-Type': _0x2df3ec['jtCAf'],
            'Accept': _0x2df3ec['RmJmw'],
            'Connection': _0x2df3ec['UnSPQ'],
            'Cookie': cookie,
            'User-Agent': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)',
            'Accept-Language': _0x2df3ec['aGbAj'],
            'Accept-Encoding': _0x2df3ec['Jrram']
        },
        'body': 'body=%7B%22url%22%3A%20%22https%3A//xinruidddj-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=1d94feefe44e4ebcba2192421189a52a&client=apple&clientVersion=9.4.0&st=1623830118000&sv=102&sign=9bd23a7b74b59d88d751e21f19455db7'
    };
    return new Promise(_0x2c0db2 => {
        var _0x50c7f5 = {
            'qjWNU': function(_0x326f64, _0x415178) {
                return _0x2df3ec['bPNTI'](_0x326f64, _0x415178);
            },
            'FgQUd': function(_0x58294c, _0x2323d9) {
                return _0x2df3ec['pPUeJ'](_0x58294c, _0x2323d9);
            }
        };
        $['post'](_0x17b624, (_0x4d59de, _0x4d2bd0, _0xde06d8) => {
            var _0x1e06b5 = {
                'gkyfw': function(_0xc72b1d) {
                    return _0xc72b1d();
                }
            };
            try {
                if (_0x4d59de) {
                    $['log'](_0x4d59de);
                } else {
                    if (_0x2df3ec['gkIkT'](_0x2df3ec['YUtye'], _0x2df3ec['YUtye'])) {
                        _0x1e06b5['gkyfw'](_0x2c0db2);
                    } else {
                        if (_0xde06d8) {
                            _0xde06d8 = JSON['parse'](_0xde06d8);
                            if (_0x2df3ec['AqUBs'](_0xde06d8['code'], '0')) {
                                if (_0x2df3ec['ijWDS']('JOdsG', 'lsxQT')) {
                                    $['log']('完成助力');
                                    $['assistTimes'] = _0x50c7f5['qjWNU'](parseInt(_0xde06d8['body']['result']['max_assist_times']), _0x50c7f5['FgQUd'](parseInt, _0xde06d8['body']['result']['already_assist_times']));
                                } else {
                                    $['token'] = _0xde06d8['token'];
                                    cookie += 'IsvToken=' + _0xde06d8['token'] + ';';
                                }
                            }
                        } else {
                            if (_0x2df3ec['eBhye'](_0x2df3ec['PuaXy'], _0x2df3ec['DYuLG'])) {
                                $['log'](_0x2df3ec['rVkJd']);
                            } else {
                                uuid = v['toString'](0x24);
                            }
                        }
                    }
                }
            } catch (_0x4fe949) {
                if (_0x2df3ec['Pncjh'] === 'GcnpB') {
                    $['log'](_0x4fe949);
                } else {
                    $['log']('     完成任务，当前共' + _0xde06d8['body']['result']['user_score'] + '金币');
                }
            } finally {
                _0x2df3ec['lLrIP'](_0x2c0db2);
            }
        });
    });
}

function random(_0x47f9f3, _0x5c1d32) {
    var _0x3bcbdc = {
        'QIjXh': function(_0x438b65, _0x272a6d) {
            return _0x438b65 - _0x272a6d;
        }
    };
    return Math['floor'](Math['random']() * _0x3bcbdc['QIjXh'](_0x5c1d32, _0x47f9f3)) + _0x47f9f3;
}

function getUUID(_0x3bfb9f = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', _0x46bb28 = 0x0) {
    var _0x573d2f = {
        'LLLFe': 'xinruidddj-isv.isvjcloud.com',
        'gmVee': 'application/json, text/plain, */*',
        'nkZRv': 'application/x-www-form-urlencoded',
        'plpyK': 'https://xinruidddj-isv.isvjcloud.com',
        'GkNuC': function(_0x2791e0, _0x1f768e) {
            return _0x2791e0 === _0x1f768e;
        },
        'OLctZ': 'xFBTJ',
        'VBAIQ': function(_0xa715a8, _0x30f868) {
            return _0xa715a8 | _0x30f868;
        },
        'jzOYm': function(_0x4880e1, _0x5c9b7b) {
            return _0x4880e1 * _0x5c9b7b;
        },
        'CcvDA': function(_0xed5976, _0x13fdc7) {
            return _0xed5976 == _0x13fdc7;
        },
        'PCtma': function(_0x1d7c19, _0x5a600a) {
            return _0x1d7c19 | _0x5a600a;
        },
        'Setpf': function(_0x30e6cc, _0x5a30dc) {
            return _0x30e6cc & _0x5a30dc;
        },
        'XGJZU': 'AMEtE',
        'TOqdf': 'acMAN'
    };
    return _0x3bfb9f['replace'](/[xy]/g, function(_0x675fd2) {
        var _0x421a0a = {
            'qAszo': _0x573d2f['LLLFe'],
            'uCGJQ': _0x573d2f['gmVee'],
            'ijXeC': _0x573d2f['nkZRv'],
            'pistL': 'keep-alive',
            'edTyk': _0x573d2f['plpyK'],
            'DcOdI': function(_0x49c72e, _0x5567e1) {
                return _0x573d2f['GkNuC'](_0x49c72e, _0x5567e1);
            }
        };
        if (_0x573d2f['GkNuC'](_0x573d2f['OLctZ'], 'YAmyr')) {
            return {
                'url': 'https://xinruidddj-isv.isvjcloud.com/api/' + function_id,
                'headers': {
                    'Host': _0x421a0a['qAszo'],
                    'Accept': _0x421a0a['uCGJQ'],
                    'Authorization': auth,
                    'Accept-Language': 'zh-cn',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Content-Type': _0x421a0a['ijXeC'],
                    'Origin': 'https://xinruidddj-isv.isvjcloud.com',
                    'User-Agent': 'jdapp;iPhone;10.0.2;14.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';JDEbook/openapp.jdreader;model/iPhone13,3;addressid/138474561;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                    'Connection': _0x421a0a['pistL'],
                    'Referer': _0x421a0a['edTyk'],
                    'Cookie': cookie
                }
            };
        } else {
            var _0x264945 = _0x573d2f['VBAIQ'](_0x573d2f['jzOYm'](Math['random'](), 0x10), 0x0),
                _0x2fd31c = _0x573d2f['CcvDA'](_0x675fd2, 'x') ? _0x264945 : _0x573d2f['PCtma'](_0x573d2f['Setpf'](_0x264945, 0x3), 0x8);
            if (_0x46bb28) {
                uuid = _0x2fd31c['toString'](0x24)['toUpperCase']();
            } else {
                if (_0x573d2f['XGJZU'] !== _0x573d2f['TOqdf']) {
                    uuid = _0x2fd31c['toString'](0x24);
                } else {
                    data = JSON['parse'](data);
                    if (_0x421a0a['DcOdI'](data['code'], '0')) {
                        $['token'] = data['token'];
                        cookie += 'IsvToken=' + data['token'] + ';';
                    }
                }
            }
            return uuid;
        }
    });
}

function checkCookie() {
    var _0x31ce52 = {
        'lxkpt': function(_0x28a5fb, _0x18f16d) {
            return _0x28a5fb + _0x18f16d;
        },
        'foXwr': function(_0x13199a, _0x162e4b) {
            return _0x13199a - _0x162e4b;
        },
        'dZPpV': '已经没有助力次数了',
        'JZrGD': function(_0x1c3474, _0x4a3694) {
            return _0x1c3474 !== _0x4a3694;
        },
        'KWpOK': 'YZavw',
        'mMCty': 'McuDL',
        'MwhtQ': '1001',
        'kEdwD': function(_0x298fa5, _0x145beb) {
            return _0x298fa5 === _0x145beb;
        },
        'wsYWY': 'PujFH',
        'lKpcB': 'nKjza',
        'HwacU': '京东返回了空数据',
        'yRzYe': 'RVXPg',
        'cPvOM': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'ubpZN': 'me-api.jd.com',
        'oqQnc': '*/*',
        'yBXVG': 'keep-alive',
        'jXLLz': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
        'crqNp': 'zh-cn',
        'QFcuN': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
        'hkdzs': 'gzip, deflate, br'
    };
    const _0x4ac31b = {
        'url': _0x31ce52['cPvOM'],
        'headers': {
            'Host': _0x31ce52['ubpZN'],
            'Accept': _0x31ce52['oqQnc'],
            'Connection': _0x31ce52['yBXVG'],
            'Cookie': cookie,
            'User-Agent': _0x31ce52['jXLLz'],
            'Accept-Language': _0x31ce52['crqNp'],
            'Referer': _0x31ce52['QFcuN'],
            'Accept-Encoding': _0x31ce52['hkdzs']
        }
    };
    return new Promise(_0x5f0f64 => {
        if (_0x31ce52['yRzYe'] === _0x31ce52['yRzYe']) {
            $['get'](_0x4ac31b, (_0x52ae03, _0xc54603, _0x1c95d4) => {
                var _0x55bb20 = {
                    'TCrsK': function(_0x206dc0, _0x5c9943) {
                        return _0x31ce52['lxkpt'](_0x206dc0, _0x5c9943);
                    },
                    'ihEkA': function(_0x45e37e, _0x5d97ba) {
                        return _0x31ce52['foXwr'](_0x45e37e, _0x5d97ba);
                    },
                    'LyPpr': _0x31ce52['dZPpV'],
                    'DtbzM': '京东返回了空数据'
                };
                if (_0x31ce52['JZrGD'](_0x31ce52['KWpOK'], 'QzLCF')) {
                    try {
                        if (_0x31ce52['JZrGD']('McuDL', _0x31ce52['mMCty'])) {
                            return _0x55bb20['TCrsK'](Math['floor'](Math['random']() * _0x55bb20['ihEkA'](max, min)), min);
                        } else {
                            if (_0x52ae03) {
                                $['logErr'](_0x52ae03);
                            } else {
                                if (_0x1c95d4) {
                                    _0x1c95d4 = JSON['parse'](_0x1c95d4);
                                    if (_0x1c95d4['retcode'] === _0x31ce52['MwhtQ']) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x31ce52['kEdwD'](_0x1c95d4['retcode'], '0') && _0x1c95d4['data']['hasOwnProperty']('userInfo')) {
                                        if (_0x31ce52['JZrGD'](_0x31ce52['wsYWY'], _0x31ce52['lKpcB'])) {
                                            $['nickName'] = _0x1c95d4['data']['userInfo']['baseInfo']['nickname'];
                                        } else {
                                            $['log'](_0x55bb20['LyPpr']);
                                        }
                                    }
                                } else {
                                    $['log'](_0x31ce52['HwacU']);
                                }
                            }
                        }
                    } catch (_0x351d35) {
                        $['logErr'](_0x351d35);
                    } finally {
                        _0x5f0f64();
                    }
                } else {
                    $['log'](_0x55bb20['DtbzM']);
                }
            });
        } else {
            $['auth'] = data['body']['access_token'];
            cookie += 'jd-elec-sport=' + data['body']['access_token'] + ';';
        }
    });
}// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }