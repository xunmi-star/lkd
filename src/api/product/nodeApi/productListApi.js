let data = {
  code: "000000",
  msg: "操作成功"
}

let names = [ '小赢卡贷', "房司令", '飞贷', "豆豆钱", "钱贷", "满地开花" ]

data.data = ( ( ) => {
  let pageSize = 10
  let list = [ ]
  for ( let i = 0; i < pageSize; i++ ) {
    list.push( {
      logo: "http://www.luckyjz.com/20190505135531891.png",
      productName: names[ i % names.length ],
      productId: i * pageSize,
      period: "180-1080",
      quota: "500-150000",
      rate: 3.00,
      remark: "最高可借15万！利率低！下款快！",
      url: "http://zujin.58fangdai.com/h5/register5/index?linksource=HCWL",
      "channelNo": "ANDROID",
      "channelNoName": "安卓端",
      "classification": "1000",
      "createTime": 1557035731000,
      "createTimeName": "2019-05-05 13:55:31",
      "level": "A",
      "levelName": "A",
      "pageNum": 0,
      "pageSize": 0,
      "perNum": 291,
      "sort": 100,
      "status": "UP",
      "statusName": "上架",
    } )
  }
  return {
    list,
    pageNum: 1,
    pageTotal: 3
  }
} )( )

setTimeout( ( ) => {
  res.send( data ) // eslint-disable-line
}, 300 );



let aaaa = { // eslint-disable-line
  "code": "000000",
  "data": {
    "list": [
      {
        "channelNo": "ANDROID",
        "channelNoName": "安卓端",
        "classification": "1000",
        "createTime": 1557035731000,
        "createTimeName": "2019-05-05 13:55:31",
        "level": "A",
        "levelName": "A",
        "logo": "http://www.luckyjz.com/20190505135531891.png",
        "pageNum": 0,
        "pageSize": 0,
        "perNum": 291,
        "period": "180-1080",
        "productId": 18,
        "productName": "房司令",
        "quota": "500-150000",
        "rate": 3.00,
        "remark": "最高可借15万！利率低！下款快！",
        "sort": 100,
        "status": "UP",
        "statusName": "上架",
        "url": "http://zujin.58fangdai.com/h5/register5/index?linksource=HCWL"
      }, {
        "channelNo": "ANDROID",
        "channelNoName": "安卓端",
        "classification": "10000",
        "createTime": 1557216034000,
        "createTimeName": "2019-05-07 16:00:34",
        "level": "A",
        "levelName": "A",
        "logo": "http://www.luckyjz.com/20190507160034026.png",
        "pageNum": 0,
        "pageSize": 0,
        "perNum": 182,
        "period": "90-360",
        "productId": 22,
        "productName": "小赢卡贷",
        "quota": "2000-80000",
        "rate": 3.00,
        "remark": "小赢卡贷，当日极速放款，六万额度给你花。\r\n",
        "sort": 100,
        "status": "UP",
        "statusName": "上架",
        "url": "https://cardloan.xiaoying.com/kadai/index?source=100022679"
      }, {
        "channelNo": "ANDROID",
        "channelNoName": "安卓端",
        "classification": "1000",
        "createTime": 1557305597000,
        "createTimeName": "2019-05-08 16:53:17",
        "level": "A",
        "levelName": "A",
        "logo": "http://www.luckyjz.com/20190508165317689.jpeg",
        "pageNum": 0,
        "pageSize": 0,
        "perNum": 193,
        "period": "7-14",
        "productId": 25,
        "productName": "test",
        "quota": "1000-3000",
        "rate": 23.00,
        "remark": "\r\nKuàisù xià kuǎn\r\n4/5000\r\nDengan cepat",
        "sort": 100,
        "status": "UP",
        "statusName": "上架",
        "url": "www.baidu.com"
      }, {
        "channelNo": "ANDROID",
        "channelNoName": "安卓端",
        "classification": "1000",
        "createTime": 1557035820000,
        "createTimeName": "2019-05-05 13:57:00",
        "level": "A",
        "levelName": "A",
        "logo": "http://www.luckyjz.com/20190505135700606.jpeg",
        "pageNum": 0,
        "pageSize": 0,
        "perNum": 712,
        "period": "1-720",
        "productId": 19,
        "productName": "飞贷",
        "quota": "5000-30000",
        "rate": 12.00,
        "remark": "急速下款，在线秒批",
        "sort": 99,
        "status": "UP",
        "statusName": "上架",
        "url": "https://wx.feidai.com/view/NewActivityDetail/ReceiveFriend.aspx?type=1&phone=15350184747"
      }, {
        "channelNo": "ANDROID",
        "channelNoName": "安卓端",
        "classification": "10000",
        "createTime": 1557216208000,
        "createTimeName": "2019-05-07 16:03:28",
        "level": "A",
        "levelName": "A",
        "logo": "http://www.luckyjz.com/20190507160539191.jpeg",
        "pageNum": 0,
        "pageSize": 0,
        "perNum": 981,
        "period": "90-720",
        "productId": 23,
        "productName": "豆豆钱",
        "quota": "3000-50000",
        "rate": 13.00,
        "remark": "合规持牌贷款,周转的不二选择",
        "sort": 99,
        "status": "UP",
        "statusName": "上架",
        "url": "http://m.ddcash.cn/register.html?mark=jsd1&channel=lakadaiad01"
      } ],
    "pageNum": 1,
    "pageTotal": 2
  },
  "msg": "操作成功"
}
