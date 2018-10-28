Page({
  data: {
    education: 0,
    sex: 0,
    age: 0,
    base: 0,
    major: 0,
    logic: 0,
    cargo:"",
    web:[10,30,20,100,-100,-100],
    op:[-20,20,30,-100,100,-100],
    ui:[-40,90,-90,90,20,-20,], 
    ios:[80,90,120,30,-30,-30],
    pm:[-30,70,70,-80,80,30],
    android:[90,70,320,80,-80,80],
    java:[-100,-20,20,20,20,20],
    array1: ['博士', '硕士', '本科', '大专'],
    array2: ['男', '女'],
    array3: ['18岁-22岁', '23岁-27岁','28岁-32岁'],
    array4: ['零基础', '掌握css', '掌握js'],
    array5: ['物流专业', '土木工程专业', '计算机专业'],
    array6: ['普通', '中等', '高级'],
    result:[
      {
        "博士":{
            web:10,
            op:-20,
            ui:-40,
            ios:80,
            pm:-30,
            android:90,
            java:-100
        },
        "硕士":{
          web: 90,
          op: -20,
          ui: 50,
          ios: -100,
          pm: -200,
          android: 130,
          java: 220
        },
        "本科": {
          web: 120,
          op: 140,
          ui:-90,
          ios: -200,
          pm: 200,
          android: 10,
          java:30
        },
        "大专": {
          web: -40,
          op: 200,
          ui: -50,
          ios: 100,
          pm: 110,
          android: 130,
          java: 40
        }  
      },
      {
        "男": {
          web: 30,
          op: 20,
          ui: 90,
          ios: -100,
          pm: 70,
          android: 70,
          java: -20
        },
        "女": {
          web: 40,
          op: 200,
          ui: 50,
          ios: -10,
          pm: -70,
          android: 40,
          java: -130
        }
      },
      {
        "18岁-22岁": {
          web: 20,
          op: 30,
          ui: -90,
          ios: 120,
          pm: -70,
          android: 320,
          java: 20
        },
        "23岁-27岁": {
          web: -40,
          op: 160,
          ui: 120,
          ios: -100,
          pm: 70,
          android: 40,
          java: 110
        },
        "28岁-32岁": {
          web: 40,
          op: 200,
          ui: -50,
          ios: -100,
          pm: -70,
          android: 20,
          java: 130
        }
      },
       {
        "零基础": {
          web: 100,
          op: -100,
          ui: 90,
          ios: 30,
          pm: -80,
          android: 80,
          java: 20
        },
        "掌握css": {
          web: 20,
          op: 60,
          ui: 20,
          ios: -100,
          pm: -70,
          android: 40,
          java: 110
        },
        "掌握js": {
          web: 40,
          op: 130,
          ui: 50,
          ios: 100,
          pm: 70,
          android: 20,
          java: 130
        }
      },
      {
        "物流专业": {
          web: -100,
          op: 100,
          ui: 20,
          ios: -30,
          pm: 80,
          android: -80,
          java: 20
        },
        "土木工程专业": {
          web: -20,
          op: 20,
          ui: -20,
          ios: 100,
          pm: 70,
          android: 40,
          java: 20
        },
        "计算机专业": {
          web: 40,
          op: -20,
          ui: 50,
          ios: 100,
          pm: -70,
          android: 20,
          java: 170
        }
      },
      {
        "普通": {
          web: -100,
          op: -100,
          ui: -20,
          ios: -30,
          pm: 30,
          android: 80,
          java: 20
        },
        "中等": {
          web: -20,
          op: 20,
          ui: 20,
          ios: 100,
          pm: 70,
          android: 40,
          java: 20
        },
        "高级": {
          web: -220,
          op: -20,
          ui: -50,
          ios: 100,
          pm: -70,
          android: 20,
          java: 170
        }
      }
    ]
  },

  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
   // console.log(e.detail.value)
    
    this.setData({
      education: e.detail.value,
    })
    var educations = this.data.array1[e.detail.value];
    this.data.web[0] = this.data.result[0][educations].web;
    this.data.op[0] = this.data.result[0][educations].op;
    this.data.ui[0] = this.data.result[0][educations].ui;
    this.data.ios[0] = this.data.result[0][educations].ios;
    this.data.pm[0] = this.data.result[0][educations].pm;
    this.data.android[0]  = this.data.result[0][educations].android;
    this.data.java[0] = this.data.result[0][educations].java;
  },
  sexChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sex: e.detail.value
    })
    var sexss = this.data.array2[e.detail.value];
    this.data.web[1]= this.data.result[1][sexss].web;
    this.data.op[1] = this.data.result[1][sexss].op;
    this.data.ui[1] = this.data.result[1][sexss].ui;
    this.data.ios[1] = this.data.result[1][sexss].ios;
    this.data.pm[1] = this.data.result[1][sexss].pm;
    this.data.android[1] = this.data.result[1][sexss].android;
    this.data.java[1] = this.data.result[1][sexss].java;
  },
  ageChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      age: e.detail.value
    })
    var ages = this.data.array3[e.detail.value];
    this.data.web[2]= this.data.result[2][ages].web;
    this.data.op[2] = this.data.result[2][ages].op;
    this.data.ui[2] = this.data.result[2][ages].ui;
    this.data.ios[2] = this.data.result[2][ages].ios;
    this.data.pm[2] = this.data.result[2][ages].pm;
    this.data.android[2] = this.data.result[2][ages].android;
    this.data.java[2] = this.data.result[2][ages].java;
  },
  basicsChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      base: e.detail.value
    })
    var bases = this.data.array4[e.detail.value];
    this.data.web[3]= this.data.result[3][bases].web;
    this.data.op[3]= this.data.result[3][bases].op;
    this.data.ui[3] = this.data.result[3][bases].ui;
    this.data.ios[3] = this.data.result[3][bases].ios;
    this.data.pm[3] = this.data.result[3][bases].pm;
    this.data.android[3] = this.data.result[3][bases].android;
    this.data.java[3] = this.data.result[3][bases].java;
  },
  majorChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      major: e.detail.value
    })
    var majors = this.data.array5[e.detail.value];
    this.data.web[4]= this.data.result[4][majors].web;
    this.data.op[4] = this.data.result[4][majors].op;
    this.data.ui[4] = this.data.result[4][majors].ui;
    this.data.ios[4] = this.data.result[4][majors].ios;
    this.data.pm[4] = this.data.result[4][majors].pm;
    this.data.android[4] = this.data.result[4][majors].android;
    this.data.java[4] = this.data.result[4][majors].java;
  },
  logicChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      logic: e.detail.value
    })
    var logics = this.data.array6[e.detail.value];
    this.data.web[5]= this.data.result[5][logics].web;
    this.data.op[5] = this.data.result[5][logics].op;
    this.data.ui[5] = this.data.result[5][logics].ui;
    this.data.ios[5] = this.data.result[5][logics].ios;
    this.data.pm[5] = this.data.result[5][logics].pm;
    this.data.android[5] = this.data.result[5][logics].android;
    this.data.java[5] = this.data.result[5][logics].java;
  },

 
  btnclick:function(){
    var web = 0, op = 0, ui = 0, ios = 0, pm = 0, android = 0, java = 0;
     for(var i=0;i<6;i++){
       web+=this.data.web[i];
       ios+=this.data.ios[i];
       ui+=this.data.ui[i]
       ios+=this.data.ios[i]
       pm+=this.data.pm[i]
       android+this.data.android[i]
       java+=this.data.java[i]
     }
    
    var total = {
      result: [
        { id: web, name: 'web' },
        { id: op, name: 'op' },
        { id: ui, name: 'ui' },
        { id: ios, name: 'ios' },
        { id: pm, name: 'pm' },
        { id: android, name: 'android' },
        { id: java, name: 'java' }
      ]
    }
    function sortId(a, b) {
      return b.id-a.id 
    }
    total.result.sort(sortId);
    var ranking=[];
    for (var i = 0; i < 3; ++i) {
      ranking[i]=total.result[i].name;
    }
    
    wx.navigateTo({
      url: '/pages/occupation/occupation'
    });
    wx.setStorage({
      key: "cargo",
      data: ranking
    })
  }
})