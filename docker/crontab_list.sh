# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############其他APP活动##############

#2345王牌联盟签到打卡
15 9 * * * node /scripts/js_2345.js >> /scripts/logs/js_2345.log 2>&1
# 咪咕爱看签到
15 */8 * * * node /scripts/js_migu.js >> /scripts/logs/js_migu.log 2>&1
#抖音极速版日常任务
15 */1 * * * node /scripts/js_douyin.js >> /scripts/logs/js_douyin.log 2>&1
# 吾爱破解签到
15 */8 * * * node /scripts/js_wapj.js >> /scripts/logs/js_wapj.log 2>&1
# 包图网签到
20 */12 * * * node /scripts/js_baotu.js >> /scripts/logs/js_baotu.log 2>&1

##############短期活动##############

# 京东店铺关注有礼(活动时间：2021-3-8至2021-5-5)
15 15 * * * node /scripts/jd_shop_follow_sku.js >> /scripts/logs/jd_shop_follow_sku.log 2>&1

# 京东店铺大转盘(活动时间：2021-3-8至2021-5-5)
3 0,10,23 * * * node /scripts/jd_shop_lottery.js >> /scripts/logs/jd_shop_lottery.log 2>&1

# 京东interCenter渠道店铺签到(活动时间：2021-3-8至2021-5-5)
0 0 * * * node /scripts/jd__inter_shop_sign.js >> /scripts/logs/jd__inter_shop_sign.log 2>&1

#5G超级盲盒 活动时间：2021-03-19到2021-04-30
10 0,1-23/4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1

#京东极速版红包(活动时间：2021-3-8至2021-5-5)
15 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1

#女装盲盒 活动时间：2021-4-1至2021-04-31
5 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1

#超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
1,31 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1

#京东国际盲盒活动时间】2021年02月23日 起至 2021年03月31日 18:00:00
5 7,12,23 * * * node /scripts/jd_global_mh.js >> /scripts/logs/jd_global_mh.log 2>&1

#环球挑战赛 第二季(活动时间：2021-03-08 至 2021-03-31)
35 6,22 * * * node /scripts/jd_global.js >> /scripts/logs/jd_global.log 2>&1

#手机尚学季 活动时间：2021年3月15日 00:00:00-2021年3月19日 23:59:59
0 0 * * * node /scripts/jd_xtg.js >> /scripts/logs/jd_xtg.log 2>&1

#TCL 活动时间：4.21-5.3日
10 0,23 * * * node /scripts/jd_tcl.js >> /scripts/logs/jd_tcl.log 2>&1

#每日抽奖(活动时间：2021-05-01至2021-05-31)
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1

#城城领现金
33 * * * * node /scripts/jd_city.js >> /scripts/logs/jd_city.log 2>&1

#手机狂欢城
0 0,12,18,21 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1

# 动物联萌 618活动
5 * * * * node /scripts/jd_zoo.js >> /scripts/logs/jd_zoo.log 2>&1

# 动物联萌 618活动
5 * * * * node /scripts/jd_zoo1.js >> /scripts/logs/jd_zoo1.log 2>&1

#618动物联萌专门收集金币(每小时的第30分运行一次)
0-59/30 * * * * node /scripts/jd_zooCollect.js >> /scripts/logs/jd_zooCollect.log 2>&1

#家电星推官 活动时间：2021年5月27日 00:00:00-2021年6月18日 23:59:59
0 0 * * * node /scripts/jd_xtg.js >> /scripts/logs/jd_xtg.log 2>&1

0 0 * * * node /scripts/jd_xtg_help.js >> /scripts/logs/jd_xtg_help.log 2>&1

#金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1

#京东沸腾之夜(5.31日有效)
0 15-19/1 * * * node /scripts/jd_party_night.js >> /scripts/logs/jd_party_night.log 2>&1

#京东星店长
5 9 * * * node /scripts/jd_starStore.js >> /scripts/logs/jd_starStore.log 2>&1

#明星小店(星店长，2021-06-10)
0 1,21 * * * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
##############长期活动##############

# 签到
3 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 宠汪汪
55 */2,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
15 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与狗粮
13 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0 7-22/1 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东天天加速(活动下线)
# 8 */3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 东东超市
11 1-23/5 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
11 1 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
11 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
20 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
#京喜工厂自动收取道具
50 * * * * node /scripts/jx_factory_component.js >> /scripts/logs/jx_factory_component.log 2>&1
# 东东小窝
16 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
36 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 十元街
36 8,18 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
33 4 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
10 11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
10 7,23 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
7 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京喜农场
0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 签到领现金
27 */4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 签到领现金红包兑换
0,1,2 0 * * 0,1 node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
# 京喜app签到
39 7 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 美丽研究院
1 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 京东保价
1 0,23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东极速版签到+赚现金任务
1 1,6 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 监控crazyJoy分红
10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# 京喜财富岛
15 */2 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京喜财富岛提现
0 0 * * * node /scripts/jd_cfdtx.js >> /scripts/logs/jd_cfdtx.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 家庭号
20 */6 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
#京东直播（又回来了）
30-50/5 12,23 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1    
#京小兑
13 8,16,20 * * * node /scripts/jd_jxd.js >> /scripts/logs/jd_jxd.log 2>&1
# 京东试用
1 3,20 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 京东领积分
1 3,20 * * * node /scripts/jd_ljf.js >> /scripts/logs/jd_ljf.log 2>&1
# 京东砍价
10 10,20 * * * node /scripts/jd_mfn.js >> /scripts/logs/jd_mfn.log 2>&1
#京东会员-摇一摇(每月17号运行一次即可)
59 12 17 * * node /scripts/jd_shakeBean.js >> /scripts/logs/jd_shakeBean.log 2>&1
#京东摇一摇
3 20 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
#京东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 领金贴
5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 跳跳乐瓜分京豆
15 0,12,22 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 天天优惠大乐透
0 0 * * * node /scripts/jd_daydlt.js >> /scripts/logs/jd_daydlt.log 2>&1
# 金榜创造营，最高瓜分7亿京豆！
0 8 * * * node /scripts/jd_jbczy.js >> /scripts/logs/jd_jbczy.log 2>&1
# 金贴小程序（每天大概可得0.07金贴）
10 0 * * * node /scripts/jd_jintie_wx.js >> /scripts/logs/jd_jintie_wx.log 2>&1




# Cron解释
# 
# * * * * * *
# ┬ ┬ ┬ ┬ ┬ ┬
# │ │ │ │ │ |
# │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
# │ │ │ │ └───── month (1 - 12)
# │ │ │ └────────── day of month (1 - 31)
# │ │ └─────────────── hour (0 - 23)
# │ └──────────────────── minute (0 - 59)
# └───────────────────────── second (0 - 59, OPTIONAL)