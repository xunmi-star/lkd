let err = {
  "msg": "该账号已注册",
  "code": "000009"
}


let success = {
  "code": "000000",
  "msg": "操作成功",
  "data": {
    "token": "NzEtMTg1NjU3NTkwODctMTU1NzkzNzMxMDg5NQ==",
    "user": {
      "opSource": null,
      "pageNum": 0,
      "pageSize": 0,
      "startTime": null,
      "endTime": null,
      "userId": null,
      "sysId": 71,
      "businessUserId": null,
      "userName": "18565759087",
      "iphone": "18565759087",
      "sex": null,
      "birthday": null,
      "channelNo": "ANDROID",
      "level": "A",
      "registerIp": "192.168.43.222",
      "registerTime": 1557937310893,
      "updateTime": null,
      "cradNo": null,
      "bankNo": null,
      "isAuthentication": "N",
      "status": "PENDING",
      "country": "CN",
      "channelNoName": "安卓端",
      "sexName": null,
      "birthdayName": "2019-05-16",
      "registerTimeName": "2019-05-16 00:16:50",
      "countryName": "中国"
    }
  }
}


res.send(success)
// this.code = "000000"
// this.message = "登入成功"