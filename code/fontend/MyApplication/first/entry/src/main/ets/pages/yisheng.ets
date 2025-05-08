import router from '@ohos.router';
import {tabbar} from "./tabbar"

@Entry
@Component
export  struct Index {
  @State message: string = '健康'
  @State index:number = 2
  build() {
    Column() {
      Row() {
        Text('健康服务')
          .fontWeight(FontWeight.Bold)
          .fontSize(35)
          .width(200)
          .fontColor('#769fcd')


      }
      .justifyContent(FlexAlign.SpaceBetween).width('90%')
      .height(70)
      Row(){
        Button('医生', { type: ButtonType.Capsule, stateEffect: true })
          .width('50%')
          .height(60)
          .fontColor('black')
          .fontSize(25)
          .backgroundColor($r('app.media.back10'))
          .onClick(()=>{
            router.pushUrl({
              url:"pages/yisheng"
            })
          })
        Button('医院', { type: ButtonType.Capsule, stateEffect: true })
          .width('50%')
          .height(60)
          .fontColor('black')
          .fontSize(25)
          .backgroundColor($r('app.media.3'))
          .onClick(()=>{
          router.pushUrl({
            url:"pages/yiyuan"
          })
        })
      }.justifyContent(FlexAlign.SpaceBetween)

      tabbar({ index: $index })

      List({space:25}){

        ListItem(){
          Column() {

            Column() {

              Row({space:40}) {
                Image($r('app.media.yisheng1'))
                  .height(110)
                  .width(90)
                  .margin({
                    top:5,
                    left:12
                  })

                Column() {

                  Row({space:35}) {
                    Text('崔建礼')
                      .fontSize(22)
                      .fontWeight(FontWeight.Bold)
                    Text('主任医师')
                      .fontSize(17)
                    Text('手足外科')
                      .fontSize(13)
                  }.height(25)

                  Row({space:15}) {
                    Text('三甲')
                      .backgroundColor('#1E90FF')
                      .fontSize(10)
                      .fontColor('white')
                      .width(28)
                      .height(15)
                      .textAlign(TextAlign.Center)
                    Text('吉林大学第一医院')
                      .fontSize(13)
                  }
                  .justifyContent(FlexAlign.SpaceBetween).width('50%')
                  .height(25)

                  Row(){
                    Text('擅长：颈椎病、腰腿疼、骨质增生、腰间盘突出、脊柱退变、肩周炎、微创治疗等')
                      .fontSize(13)
                      .fontColor('#696969')
                  }
                  .width(295)
                }
              }
            }
            .justifyContent(FlexAlign.SpaceBetween).width('95%')
            .height(100)

            Row(){
              Button('详细信息', { type: ButtonType.Capsule, stateEffect: true })
                .fontSize(14)
                .width(90)
                .height(30)
                .backgroundColor('#20B2AA')
                .onClick(()=>{
                  router.pushUrl({
                    url:"pages/doctor1"
                  })
                })
              Button('立即挂号', { type: ButtonType.Capsule, stateEffect: true })
                .width(88)
                .height(28)
                .fontSize(14)
                .backgroundColor('#20B2AA')
            }.justifyContent(FlexAlign.SpaceBetween).width('90%')
          }
          .width('95%')
          .height('100%')
          .backgroundColor('#dbedf3')
          .borderRadius(10)
        }.backgroundImage($r('app.media.3'))
        .height('20%')
        .width('100%')



        ListItem(){
          Column() {

            Column() {

              Row({space:40}) {
                Image($r('app.media.yisheng2'))
                  .height(120)
                  .width(90)
                  .margin({
                    top:5,
                    left:12
                  })

              Column() {
                Row({space:45}) {
                  Text('Jack')
                    .fontSize(22)
                    .fontWeight(FontWeight.Bold)
                  Text('主任医师')
                    .fontSize(17)
                  Text('骨科')
                    .fontSize(13)
                }
                .height(25)

                Row({space:15}) {
                  Text('三甲')
                    .backgroundColor('#1E90FF')
                    .fontSize(10)
                    .fontColor('white')
                    .width(28)
                    .height(15)
                    .textAlign(TextAlign.Center)
                  Text('浙江省人民医院')
                    .fontSize(13)
                }
                .justifyContent(FlexAlign.SpaceBetween).width('50%')
                .height(25)

                Row(){
                  Text('擅长：骨科、手外科常见多发病及部分疑难病、软组织肿块、关节痛、腱鞘炎等')
                    .fontSize(13)
                    .fontColor('#696969')
                }
                .width(295)
                }
              }
            }
            .justifyContent(FlexAlign.SpaceBetween).width('95%')
            .height(115)

            Row(){
              Button('详细信息', { type: ButtonType.Capsule, stateEffect: true })
                .fontSize(14)
                .width(88)
                .height(28)
                .backgroundColor('#20B2AA')
                .onClick(()=>{
                  router.pushUrl({
                    url:"pages/doctor2"
                  })
                })
              Button('立即挂号', { type: ButtonType.Capsule, stateEffect: true })
                .width(88)
                .height(28)
                .fontSize(14)
                .backgroundColor('#20B2AA')
            }
            .justifyContent(FlexAlign.SpaceBetween).width('90%').height(8)
          }
          .width('95%')
          .height('100%')
          .backgroundColor('#E3F2FD')
          .borderRadius(10)
        }
        .backgroundImage($r('app.media.3'))
        .height('20%')
        .width('100%')




        ListItem(){
          Column() {
            Column({space:50}) {
              Row({space:40}) {
                Image($r('app.media.yisheng3'))
                  .height(110)
                  .width(80)
                  .margin({
                    top:2,
                    left:7
                  })

                Column() {
                  Row({space:35}) {
                    Text('韩冬')
                      .fontSize(22)
                      .fontWeight(FontWeight.Bold)
                    Text('主任医师')
                      .fontSize(17)
                    Text('手外科')
                      .fontSize(13)
                  }
                  .height(25)

                  Row({space:15}) {
                    Text('三甲')
                      .backgroundColor('#1E90FF')
                      .fontSize(10)
                      .fontColor('white')
                      .width(28)
                      .height(15)
                      .textAlign(TextAlign.Center)
                    Text('上海交通大学医学院附属第九人民医院')
                      .fontSize(9)
                  }
                  .justifyContent(FlexAlign.SpaceBetween).width('50%')
                  .height(25)

                  Row(){
                    Text('擅长：各种瘢痕的综合治疗：包括手足四肢创伤后瘢痕的功能和美学治疗、躯干瘢痕等')
                      .fontSize(13)
                      .fontColor('#696969')
                  }
                  .width(295)
                }
              }
            }
            .justifyContent(FlexAlign.SpaceBetween).width('90%')
            .height(115)

            Row(){
              Button('详细信息', { type: ButtonType.Capsule, stateEffect: true })
                .fontSize(14)
                .width(88)
                .height(28)
                .backgroundColor('#20B2AA')
                .onClick(()=>{
                  router.pushUrl({
                    url:'pages/doctor3'
                  })
                })
              Button('立即挂号', { type: ButtonType.Capsule, stateEffect: true })
                .width(88)
                .height(28)
                .fontSize(14)
                .backgroundColor('#20B2AA')
            }
            .justifyContent(FlexAlign.SpaceBetween).width('90%').height(8)
          }
          .width('95%')
          .height('100%')
          .borderRadius(10)
          .backgroundColor('#E3F2FD')
        }
        .backgroundImage($r('app.media.3'))
        .height('20%')
        .width('100%')




        ListItem(){
          Column() {
            Column() {
              Row({space:40}) {
                Image($r('app.media.yisheng4'))
                  .height(110)
                  .width(85)
                  .margin({
                    top:1,
                    left:12
                  })

                Column() {
                  Row({space:95}) {
                    Text('Lisa')
                      .fontSize(22)
                      .fontWeight(FontWeight.Bold)
                    Text('主任医师')
                      .fontSize(17)
                  }.height(25)

                  Row({space:25}) {
                    Text('三甲')
                      .backgroundColor('#1E90FF')
                      .fontSize(10)
                      .fontColor('white')
                      .width(28)
                      .height(15)
                      .textAlign(TextAlign.Center)
                    Text('黄石爱康医院')
                      .fontSize(13)
                  }
                  .justifyContent(FlexAlign.SpaceBetween).width('45%')
                  .height(25)

                  Row(){
                    Text('擅长：断指（趾、肢）再植，血管、神经、肌腱断裂修复及四肢皮肤缺损修复与重建等')
                      .fontSize(13)
                      .fontColor('#696969')
                  }
                  .width(300)
                }
              }
            }
            .justifyContent(FlexAlign.SpaceBetween).width('95%')
            .height(115)

            Row(){
              Button('详细信息', { type: ButtonType.Capsule, stateEffect: true })
                .fontSize(14)
                .width(88)
                .height(28)
                .backgroundColor('#20B2AA')
                .onClick(()=>{
                  router.pushUrl({
                    url:'pages/doctor4'
                  })
                })
              Button('立即挂号', { type: ButtonType.Capsule, stateEffect: true })
                .width(88)
                .height(28)
                .fontSize(14)
                .backgroundColor('#20B2AA')
            }.justifyContent(FlexAlign.SpaceBetween).width('90%').height(8)
          }
          .width('95%')
          .height('100%')
          .backgroundColor('#dff4f3')
          .borderRadius(10)
        }
        .backgroundImage($r('app.media.3'))
        .height('20%')
        .width('100%')
      }
      .width('100%')
      .height('71%')
    }
    //.backgroundImage($r('app.media.11111'))
    .width(480).height(758)
    .backgroundColor('#f7fbfc')
  }
}