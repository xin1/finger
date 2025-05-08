// xxx.ets
import {tabbar} from "./tabbar"
import router from '@ohos.router';
@Entry
@Component
export struct jiankangbaogao {

  build() {

    Column({space:20}) {

      Text("健康报告")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({
          top:10
        })
      Column({space:10}){

          Text('健康报告1')
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
            .fontColor(0x758a99)
            .textAlign(TextAlign.Center)
            .height(100)
            .width(450)
            .borderRadius(20)//圆角
            .onClick(() => {
              router.pushUrl({
                url:'pages/baogao'
              })
            })//跳转页面
            .backgroundColor(0xFAFAFA)
            .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 })//加阴影

        Text('健康报告2')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .fontColor(0x758a99)
          .textAlign(TextAlign.Center)
          .height(100)
          .width(450)
          .borderRadius(20)//圆角
          .onClick(() => {
            router.pushUrl({
              url:'pages/baogao'
            })
          })//跳转页面
          .backgroundColor(0xFAFAFA)
          .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 })//加阴影
        Text('健康报告3')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .fontColor(0x758a99)
          .textAlign(TextAlign.Center)
          .height(100)
          .width(450)
          .borderRadius(20)//圆角
          .onClick(() => {
            router.pushUrl({
              url:'pages/baogao'
            })
          })//跳转页面
          .backgroundColor(0xFAFAFA)
          .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 })//加阴影
      }
      Image($r('app.media.back13'))
        .width(500)
        .height(400)

    }.backgroundColor('#F2F4FF')

  }
}