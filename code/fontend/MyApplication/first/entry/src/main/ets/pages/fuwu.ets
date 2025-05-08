import router from '@ohos.router';
import {tabbar} from "./tabbar"
//import  {wode}  from "./wode"
//import{yisheng}from "./denglu1"

@Entry
@Component
export  struct Index {
  @State message: string = 'shebei'
  @State index:number = 1
  build() {
    Column() {
      Row() {
        Text('设备')
          .fontWeight(FontWeight.Bold)
          .fontSize(35)
          .fontColor('#78909C')
          .width(200)
      }.justifyContent(FlexAlign.SpaceBetween).width('90%')
      .height(100)
      Row(){
        Text('我的设备')
          .fontSize(30)
          .margin({
            left:20
          })
          .fontColor('#90A4AE')
          .fontWeight(FontWeight.Bold)
        Button('添加我的设备', { type: ButtonType.Capsule, stateEffect: true })
          .fontSize(25)
          .width(200)
          .height(45)
          .margin({right:30})
          .backgroundColor('#3CB371')
          .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 })
      }.backgroundColor("white")
      .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 20, offsetY: 20 })
      .justifyContent(FlexAlign.SpaceBetween)
      .width('90%')
      .height(100)
      .width('90%')
      .border({ width: 0, radius: 30, style: BorderStyle.Solid })
      Row() {
        Text('手势识别模块')
          .fontSize(35)
          .width(400)
          .fontColor('#607D8B')
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)

      }.justifyContent(FlexAlign.SpaceBetween).width('90%')
      .height(100)
      Row(){
        Image($r('app.media.back16'))
          .height('100%')
          .width('100%')
          .borderRadius(30)
          .shadow({ radius: 10, color: 0xCFD8DC, offsetX: 20, offsetY: 20 })
          .onClick(() => {
            router.pushUrl({
              url:'pages/shibie'
            })
          })//跳转页面
          //.backgroundColor('white')
      }.width('90%')
      .height('45%')
      .border({ width: 0, radius: 30, style: BorderStyle.Solid })

      tabbar({ index: $index })
    }
    .width(480).height(758)
    .backgroundImage($r('app.media.back10'))
  }
}
