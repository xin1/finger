import http from '@ohos.net.http';
import router from '@ohos.router';
@Entry
@Component
struct zhuce{
  @State fathernum:number = 0
  @State fatherstatu:boolean = true
  @State inputtext:string = ""
  @State username:string = ""
  @State password:string = ""
  @State repassword:string = ""
  S_Register() {
    let httpRequest = http.createHttp();
    //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
    let url = "http://127.0.0.1:8000/user/user/login"
    httpRequest.request(
      url,
      {
        method: http.RequestMethod.POST,
        header: {
          'Content-Type': 'application/json'
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
        }
        console.info('Result:' + data.result);
        console.info('code:' + data.responseCode);
        console.info('header:' + JSON.stringify(data.header));
        console.info('cookies:' + data.cookies);
        //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
        if(data.result == '注册成功') {
          router.pushUrl({
            url:"pages/index"
          })
        }
        else if(data.result == '已有账号'){
          router.pushUrl({
            url:"pages/denglu"
          })
        }

      } else {
        console.info('error:' + JSON.stringify(err));

        httpRequest.destroy();
      }
    }
    );
  }
  build(){
    Column(){
      Row(){}.height('10%')
      Column({space:20}){
        Image($r('app.media.logo'))
          .width(100).height(100)
          .borderRadius(10)
        Text('欢迎注册')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
      }.height('23%')
      Column({space:20}) {
        TextInput({ placeholder: "请输入注册账号", text: this.inputtext })
          .width(360)
          .height(45)
          .onChange((value) => {
            this.username=value
          })
        TextInput({ placeholder: "请输入密码", text: "" })
          .width(360)
          .height(45)
          .type(InputType.Password)
          .onChange((value) => {
            this.password=value
          })
        TextInput({ placeholder: "请再次输入密码", text: "" })
          .width(360)
          .height(45)
          .type(InputType.Password)
          .onChange((value) => {
            this.repassword=value
          })
        Row(){
          Button("已有帐号", { type: ButtonType.Capsule, stateEffect: true })
            .margin({left:45})
            .fontSize(15)
            .fontColor(0x546E7A)
            .backgroundColor($r('app.media.img1'))
            .onClick(()=>{
              router.push({
                url:"pages/denglu"
              })
            })
          Button("游客进入", { type: ButtonType.Capsule, stateEffect: true })
            .fontSize(15)
            .margin({right:48})
            .fontColor(0x546E7A)
            .backgroundColor($r('app.media.3'))

        }
        .onClick(()=>{
          router.push({
            url:"pages/index"
          })
        })
        .justifyContent(FlexAlign.SpaceBetween).width("100%")
        .height('9%')

      }
      .height('33%')
      Button('注册', { type: ButtonType.Capsule, stateEffect: true })
        .fontColor(0x546E7A)
        .fontWeight(FontWeight.Bold)
        .fontSize(25)
        .width(200).height(50).backgroundColor("bule")
        .onClick(()=>{
          if (this.password==this.repassword) {
            this. S_Register()
          }
          else {}

        }).backgroundColor(0xFAFAFA)

    }
    .backgroundImage($r('app.media.back5'))
    .height(758)
    .width(480)

  }
}



