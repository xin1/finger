import router from '@ohos.router'
@Entry
@Component
struct denglu1 {
  build() {
    Column() {
      Column({ space: 270 }) {

        Column({ space: 200 }) {

        }

        Column({ space: 30 }) {

          Column({ space: 100 }) {


            Text("欢迎")
              .fontSize(40).opacity(0.5)


          }


          TextInput({ placeholder: "账号" })
            .width(230).height(50).backgroundColor("#6D8B9E")
          TextInput({ placeholder: "密码" })
            .width(230).height(50).backgroundColor("#6D8B9E")

          Row({ space: 30 }) {


            Button("登录")
              .width(100).height(50).backgroundColor("#ff034283")
              .onClick(() => {
                router.push({ url: 'pages/denglu2' })
              })
            Button("注册")
              .width(100).height(50).backgroundColor("#ff034283")
              .onClick(() => {
                router.push({ url: 'pages/zhuce' })
              })


          }

        }
      }
      .backgroundImage($r("app.media.img"))
      .width("100%").height("100%")
    }
  }
}