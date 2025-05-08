import http from '@ohos.net.http';
import prompt from '@ohos.prompt';
import Prompt from '@system.prompt';
import router from '@ohos.router';

@Entry
@Component

struct shibie {
  // @State username: string = ''
  // @State password: string = ''

  @State state: AnimationStatus = AnimationStatus.Initial
  @State reverse: boolean = false
  @State iterations: number = 1

  //这就是前后端交互的方法
  //只需要修改标注的就行，其他都为固定的
  //总体逻辑，利用此方法，将输入文本框内的账户和密码发给后端，
  // 后端从数据库看是否正确，如果正确则向前端发送'登录成功'/'用户不存在'/'密码错误'等，
  // 前端接受数据后在判断是否为'测试成功'，如果成功则控制台输出okok
  S_login() {
    let httpRequest = http.createHttp();
    //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
    let url = "https://aip.baidubce.com/rpc/2.0/ai_custom_bml/v1/table_infer/emg_finger?access_token=24.a96f9a18bc0298ca1f07dbd8b5b63945.2592000.1694417034.282335-37576462"
    httpRequest.request(
      url,
      {
        method: http.RequestMethod.POST,
        header: {
          'Content-Type': 'application/json'

        },
        extraData: {
          //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
          "include_req":false,
          "data":[{
            "col0":0.046904,
            "col1":0.03827,
            "col2":0.027714,
            "col3":0.027727,
            "col4":0.012447,
            "col5":0.014541,
            "col6":0.015139,
            "col7":0.014557,
            "col8":0.047688,
            "col9":0.039265,
            "col10":0.029502,
            "col11":0.029266,
            "col12":0.015934,
            "col13":0.017176,
            "col14":0.017364,
            "col15":0.016997,
            "col16":-0.36719,
            "col17":-0.17188,
            "col18":-0.17969,
            "col19":-0.10938,
            "col20":-0.046875,
            "col21":-0.070313,
            "col22":-0.078125,
            "col23":-0.09375,
            "col24":0.20313,
            "col25":0.23438,
            "col26":0.078125,
            "col27":0.125,
            "col28":0.03125,
            "col29":0.039063,
            "col30":0.078125,
            "col31":0.054688,
            "col32":55,
            "col33":40,
            "col34":56,
            "col35":47,
            "col36":24,
            "col37":27,
            "col38":23,
            "col39":27,
            "col40":0.096042,
            "col41":0.077813,
            "col42":0.07776,
            "col43":0.085573,
            "col44":0.035469,
            "col45":0.037344,
            "col46":0.039375,
            "col47":0.038698,
            "col48":0.054688,
            "col49":0.054688,
            "col50":0.039063,
            "col51":0.039063,
            "col52":0.03125,
            "col53":0.023438,
            "col54":0.03125,
            "col55":0.03125,
            "col56":0.022936,
            "col57":0.018607,
            "col58":0.017892,
            "col59":0.018931,
            "col60":0.0096375,
            "col61":0.010029,
            "col62":0.0095208,
            "col63":0.0095069,
            "col64":5.8438,
            "col65":4.6016,
            "col66":4.4219,
            "col67":4.7109,
            "col68":2.1406,
            "col69":2.3047,
            "col70":2.2656,
            "col71":2.3047,
            "col72":3,
            "col73":2,
            "col74":4,
            "col75":1,
            "col76":0,
            "col77":0,
            "col78":1,
            "col79":1

          }

          ]
        },
        connectTimeout: 6000,
        readTimeout: 6000,
      }, (err, data) => {
      if (!err) {
        if (data.responseCode == 200) {
          console.info("传递成功")
          console.info("从服务器返回接口返回数据成功，传递参数" + data.result)
        }
        //console.info('Result:' + data.result['username']);
        console.info('Result:' + data.result);
        console.info('code:' + data.responseCode);
        console.info('header:' + JSON.stringify(data.header));
        console.info('cookies:' + data.cookies);
        //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
        if(data.result == '测试成功') {
          console.info('okok');
          Prompt.showToast({
            message:"测试成功",
            duration:2000,

          });

        }
      } else {
        console.info('error:' + JSON.stringify(err));

        httpRequest.destroy();

        Prompt.showToast({
          message:"无设备连接",
          duration:2000,

        });

      }
    }
    );
  }

  build() {
    Column() {

      Column({space:10}) {
        // TextInput({ placeholder: '输入手机号'})
        //   .width(300)
        //   .height(60)
        //   .fontSize(20)
        //   .onChange((value: string) => {
        //     this.username = value
        //   })
        // TextInput({ placeholder: '输入密码' })
        //   .width(300)
        //   .height(60)
        //   .fontSize(20)
        //   .type(InputType.Password)
        //   .onChange((value: string) => {
        //     this.password = value
        //   })
        Text("手势识别")
          .fontWeight(FontWeight.Bold)
          .fontSize(30)
        Text("请根据下面顺序依次做动作")
          .fontWeight(FontWeight.Bold)
          .fontSize(20)
        Column({ space: 20 }) {
          ImageAnimator()
            .images([
              {
                src: $r('app.media.shoushi7')
              },
              {
                src: $r('app.media.shoushi6')
              },
              {
                src: $r('app.media.shoushi3')
              },
              {
                src: $r('app.media.shoushi4')
              },
              {
                src: $r('app.media.shoushi8')
              },
              {
                src: $r('app.media.shoushi5')
              }

            ])
            .duration(13000)
            .state(this.state).reverse(this.reverse)
            .fillMode(FillMode.None).iterations(this.iterations).width(340).height(240)
            .margin({ top: 15 })
            .onStart(() => {
              console.info('start')
            })
            .onPause(() => {
              console.info('Pause')
            })
            .onRepeat(() => {
              console.info('Repeat')
            })
            .onCancel(() => {
              console.info('Cancel')
            })
            .onFinish(() => {
              console.info('Finish')
              this.state = AnimationStatus.Stopped
            })
          Row() {
            Button('开始').width(100).padding(5).onClick(() => {
              this.state = AnimationStatus.Running
            }).margin(5)
            Button('暂停').width(100).padding(5).onClick(() => {
              this.state = AnimationStatus.Paused     // 显示当前帧图片
            }).margin(5)
            Button('结束').width(100).padding(5).onClick(() => {
              this.state = AnimationStatus.Stopped    // 显示动画的起始帧图片
            }).margin(5)
          }

          Row() {
            Button('撤销').width(100).padding(5).onClick(() => {
              this.reverse = !this.reverse
            }).margin(5)
            Button('一次').width(100).padding(5).onClick(() => {
              this.iterations = 1
            }).margin(5)
            Button('循环').width(100).padding(5).onClick(() => {
              this.iterations = -1 // 无限循环播放
            }).margin(5)
          }
        }

        Button('开始测试')
          .width(300)
          .height(60)
          .margin(20)
          .fontSize(20)
          .backgroundColor('#0F40F5')
          .onClick(() => {
            //调用与后端交互的方法
            this.S_login();
          })
      }.margin({top:50})

      Image($r('app.media.back5'))
        .width(500)
        .height(400)
    }.backgroundColor('#D4DCE1')


  }
}