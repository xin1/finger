import router from '@ohos.router'
@Entry
@Component
struct second {
  build() {
    Column() {
      Column({ space: 180 }) {
        Column({ space: 0 }) {
          Button({ type: ButtonType.Normal }) {
            Text("跳过").fontSize(20).fontColor("white")
          }
          .onClick(() => {
            router.pushUrl({
              url: 'pages/ceshi1'
            })
          })
          .position({ x: "65%", y: 20 })
          .borderRadius(80)
          .width("20%")
          .height(30)
          .backgroundColor("#6D8B9E")

        }

        Column({ space: 10 }) {
          Text("初次见面，遇见健康~")
            .fontSize(30)
        }

      }

      Column({ space: 30 }) {

        Column({ space: 20 }) {


          Text("请回答如下问题")
            .fontSize(20).opacity(0.5)


        }


        TextInput({ placeholder: "年龄" })
          .width(230).height(50).backgroundColor("#6D8B9E")
        TextInput({ placeholder: "残障时间" })
          .width(230).height(50).backgroundColor("#6D8B9E")
        TextInput({ placeholder: "几节断离" })
          .width(230).height(50).backgroundColor("#6D8B9E")


        Button("启动")
          .width(300).height(50).backgroundColor("#ff034283")
          .onClick(() => {
            router.push({ url: 'pages/ceshi1' })
          })

      }
    }
    .backgroundImage($r("app.media.img"))
    .width("100%").height("100%")

  }
}