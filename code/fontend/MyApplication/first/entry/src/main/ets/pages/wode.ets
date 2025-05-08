import router from '@ohos.router';//转换页面
import radio from '@ohos.telephony.radio';
import {tabbar} from "./tabbar"//下方导航栏
//1. 预先部分
//1.1 弹窗更换
@CustomDialog
struct CustomDialogExample {
  //1.1.1 定义
  @Link textValue: string
  @Link inputValue: string
  controller: CustomDialogController
  cancel: () => void
  confirm: () => void
  //1.1.2 弹窗布局
  build() {
    Column() {
      Text('更换昵称').fontSize(20).margin({ top: 10, bottom: 10 })
      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')
        .onChange((value: string) => {
          this.textValue = value
        })
      Text('是否更换?').fontSize(16).margin({ top:10, bottom: 10 })
      Flex({ justifyContent: FlexAlign.SpaceAround }) {
        Button('取消')
          .onClick(() => {
            this.controller.close()
            this.cancel()
          }).backgroundColor(0xffffff).fontColor(Color.Black)
        Button('更换')
          .onClick(() => {
            this.inputValue = this.textValue//替换
            this.controller.close()
            this.confirm()
          }).backgroundColor(0xffffff).fontColor(Color.Red)
      }.margin({ bottom: 10 })
    }
  }
}
//2. 整体部分
@Entry
@Component
export struct Index {  //想要实现跳转需要类的名字为Index，才能串在一块
  //2.1 修改和加红点需要加下面部分
  @State message: string = '我的'
  @State index:number = 0 //设置下方导航栏的顺序
  @State textValue: string = ''
  @State inputValue: string = '昵称'//设置需要修改的初始值
  dialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogExample({
      cancel: this.onCancel,
      confirm: this.onAccept,
      textValue: $textValue,
      inputValue: $inputValue
    }),
    cancel: this.existApp,
    autoCancel: true,
    alignment: DialogAlignment.Default,
    offset: { dx: 0, dy: -20 },
    gridCount: 4,
    customStyle: false
  })

  aboutToDisappear() {
    delete this.dialogController,
    this.dialogController = undefined
  }

  onCancel() {
    console.info('Callback when the first button is clicked')
  }

  onAccept() {
    console.info('Callback when the second button is clicked')
  }

  existApp() {
    console.info('Click the callback in the blank area')
  }
  // @Builder TabBuilder(index: number) {
  //   Column() {
  //     if (index === 2) {
  //       Badge({
  //         value: '',
  //         style: { badgeSize: 10, badgeColor: '#FA2A2D' }
  //       }) {
  //         Text("1")
  //           .width(24)
  //           .height(24)
  //       }
  //       .width(100)
  //       .height(20)
  //       .margin({ bottom: 4 })
  //     } else {
  //       Text("2")
  //         .width(24)
  //         .height(24)
  //         .margin({ bottom: 4 })
  //     }
  //     Text('100')
  //       .fontColor('#182431')
  //       .fontSize(10)
  //       .fontWeight(60)
  //       .lineHeight(25)
  //   }.width('100%').height('100%').justifyContent(FlexAlign.Center)
  // }//{}加红点需要加的

  //2.2 以下为正式的整个界面建设
  build() {
    //2.2.1 整体分两块，上面界面和下方导航
    Column(){
      //2.2.1.1 上面界面再分两块，1信息，2浏览和四个大按钮
      Column() {
        //2.2.1.1.1 信息横着分两块，头像和姓名等信息
        Row({space:50}){
          //头像
          Image($r('app.media.touxiang4'))
            .width(130).height(130)
            .margin({left:20})
            .borderRadius(10)
            .shadow({ radius: 20, color: 0xCFD8DC, offsetX: 20, offsetY: 0 })
          //由于昵称要更改，昵称和地址分开了
          Column({ space:15 }){
            Row(){
              //昵称
              Text(this.inputValue)//修改前的昵称
                .fontSize(23)
                .margin({
                  right:30
                })//距离右边30
                .onClick(() => {
                  if (this.dialogController != undefined) {
                    this.dialogController.open()
                  }
                })//点击打开弹窗
              //地址
              Text('河南省郑州市')
                .fontSize(16)
                .textAlign(TextAlign.Start)//首对其
            }
            //签名
            Text('这个人很无聊，什么也没有留下  ')
              .fontSize(16)
              .textAlign(TextAlign.Start)
            //邮箱
            Text('Email:    xxxxxxxxxx@qq.com    ')
              .fontSize(16)
              .textAlign(TextAlign.Start)
          }
        }
        .width(470)
        .height(150)
        .margin({
            left:10,
            right:10
          })

        .backgroundImage($r('app.media.touxiangback5'))

        //2.2.1.1.2 浏览和四个大按钮分两块
        Column({space:20}) {
          //浏览部分
          Column() {
            Row({space:62}){
              Text("浏览量")
                .margin({left:20})
                .fontSize(20)
              Text("粉丝数")
                .fontSize(20)
              Text("消息")
                .fontSize(20)
              Text("发帖数")
                .fontSize(20)
            }

            // Tabs() {
            //   TabContent()
            //     .tabBar(this.TabBuilder(1))
            //   TabContent()
            //     .tabBar(this.TabBuilder(1))
            //   TabContent()
            //     .tabBar(this.TabBuilder(2))
            //   TabContent()
            //     .tabBar(this.TabBuilder(3))
            // }
            .width(470)
            .height(90)
            .backgroundColor('#FAFAFA')
          }.shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 })
          //四个大按钮
          Column({ space: 40 }) {
            //先竖着分两块，然后横着分两块
            Row({ space: 40 }) {
              Text('我的信息')
                .fontSize(25)
                .fontWeight(FontWeight.Bold)
                .fontColor(0x758a99)
                .textAlign(TextAlign.Center)
                .height(180)
                .width(180)
                .borderRadius(20)//圆角
                .onClick(() => {
                  router.pushUrl({
                    url:'pages/wodexinxi'
                  })
                })//跳转页面
                .backgroundColor(0xFAFAFA)
                .shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 })//加阴影

              Text('健康报告')
                .fontSize(25)
                .fontWeight(FontWeight.Bold)
                .fontColor(0x758a99)
                .textAlign(TextAlign.Center)
                .height(180)
                .width(180)
                .borderRadius(30)
                .onClick(() => {
                  router.pushUrl({
                    url:'pages/jiankangbaogao'
                  })
                })
                .backgroundColor(0xFAFAFA)
                .shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 })
            }

            Row({ space: 40 }) {
              Text('我的收藏')
                .fontSize(25)
                .fontWeight(FontWeight.Bold)
                .fontColor(0x758a99)
                .textAlign(TextAlign.Center)
                .height(180)
                .width(180)
                .borderRadius(30)
                .onClick(() => {
                  router.pushUrl({
                    url:'pages/wodeshoucang'
                  })
                })
                .backgroundColor(0xFAFAFA)
                .shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 })

              Text('设置')
                .fontSize(25)
                .fontWeight(FontWeight.Bold)
                .fontColor(0x758a99)
                .textAlign(TextAlign.Center)
                .height(180)
                .width(180)
                .borderRadius(30)
                .onClick(() => {
                  router.pushUrl({
                    url:'pages/shezhi'
                  })
                })
                .backgroundColor(0xFAFAFA)
                .shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 })
            }
          }
          .width(400)
          .height(500)
        }
    }
      tabbar({ index: $index })//下方导航

      //   Text('This is gradient color.').textAlign(TextAlign.Center).height(150).width(150).borderRadius(30)
      //     .borderImage({
      //        source: {
      //          angle: 90,
      //          direction: GradientDirection.Left,
      //          colors: [[0xAEE1E1, 0.0], [0xD3E0DC, 0.3], [0xFCD1D1, 1.0]]
      //        },
      //        slice: { top: 10, bottom: 10, left: 10, right: 10 },
      //        width: { top: "10px", bottom: "10px", left: "10px", right: "10px" },
      //        repeat: RepeatMode.Stretch,
      //        fill: false
      //      })
      //   Button(this.inputValue).width(300).borderRadius(1)
      //     .onClick(() => {
      //       if (this.dialogController != undefined) {
      //         this.dialogController.open()
      //       }
      //     }).backgroundColor(0xEEEEEE)
      //   Text('This is gradient color.').textAlign(TextAlign.Center).height(150).width(150).borderRadius(30)
      //     .onClick(() => {
      //       if (this.dialogController != undefined) {
      //         this.dialogController.open()
      //       }
      //     }).backgroundColor(0xEEEEEE)
      // }.width(200).height(30).margin({ top:150 })
    }
    .width(480).height(758)
    .backgroundImage($r('app.media.back10'))

  }
}