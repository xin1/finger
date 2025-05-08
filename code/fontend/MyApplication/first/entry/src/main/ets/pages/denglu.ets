import http from '@ohos.net.http';
import router from '@ohos.router';
import prompt from '@ohos.prompt';
@Entry
@Component


struct denglu {
  @State message0: string = '登录界面'
  @State m1:string="欢迎使用，请先登录账号"
  @State m:string="其他方式登录"
  @State m22:string="          忘记密码点击此处"
  @State m11:string="短信验证码登录          "
  @State username:string=""
  @State password:string=""

  Login() {
    let httpRequest = http.createHttp();
    //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
    let url = "http://101.200.160.90:8080/user/user/login/"
    httpRequest.request(
      url,
      {
        method: http.RequestMethod.POST,
        header: {
          'Content-Type': 'application/json',
          'id':1,
          "token":"eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTMxOTc0NTgsInVzZXJJZCI6MX0.8JY4VATD0IUdMjc9KzQn4hEL6fKFLZIrAIqzYWn6jPo"
        },
        extraData: {
          //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
          "username": this.username,
          "password": this.password
        },
        connectTimeout: 6000,
        readTimeout: 6000,
      }, (err, data) => {
      if (!err) {
        if (data.responseCode == 200) {
          console.info("传递成功")
          console.info("从服务器返回接口返回数据成功，传递参数" + data.result)
          router.pushUrl({
            url:"pages/fuwu"
          })
        }
        console.info('Result:' + data.result);
        console.info('code:' + data.responseCode);
        console.info('header:' + JSON.stringify(data.header));
        console.info('cookies:' + data.cookies);
        //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可


      } else {

        console.info('error:' + JSON.stringify(err));

        httpRequest.destroy();
      }
    }
    );
  }

  build() {
    /*Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }*/
    Column(){
      Column(){
        //Image($r('app.media.denglu1'))
        Text("")
          .width(100).height(100)
        Text(this.message0)
          .fontWeight(FontWeight.Bold)
          .fontSize(34)
          .fontColor('#815c94')
        Text(this.m1)
          .fontSize(21)
          .fontColor('#815c94')

        TextInput({placeholder:"请输入账号"})
          .fontSize(22)
          .height(60)
          .type(InputType.Number)
          .onChange((value)=>{
            this.username=value
          })

        TextInput({placeholder:"请输入密码"})
          .height(60)
          .type(InputType.Password)
          .onChange((value)=>{
          this.password=value
        })

        Row(){
          Text(this.m11)
            .fontSize(20)
            .fontColor(Color.Blue)
          Text(this.m22)
            .fontSize(20)
            .fontColor(Color.Blue)
        }
        .justifyContent((FlexAlign.SpaceBetween))

        Button("登录", {type:ButtonType.Capsule,stateEffect:true})
          .fontSize(20)
          .width(300)
          .height(60)
          .onClick(() => {
            this.Login()
          })
          // .onClick(() => {
          //   router.pushUrl({
          //     url: 'pages/wode'
          //   })
          // })
        Text("注册账号")
          .fontSize(18)
          .fontColor('#126e82')
          .onClick(() => {
            router.pushUrl({
              url: 'pages/zhuce'
            })
          })
        Text(this.m)
          .fontSize(18)
          .fontColor('#126e82')

        Row(){
          Button("1")
            .backgroundColor('#12a182')
          Button("2")
            .backgroundColor('#12a182')
          Button("3")
            .backgroundColor('#12a182')
        }
        .justifyContent(FlexAlign.SpaceAround).width('100%')
      }
      .width('90%').height('90%').justifyContent(FlexAlign.SpaceAround)
    }
    .justifyContent(FlexAlign.Center)
    //.backgroundImage($r("app.media.back5"))
    .width(480).height(758)
  }
}