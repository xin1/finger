import router from '@ohos.router'
@Entry
@Component
struct LoginPage {
  @State message: string = '正在登陆...'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(40)
          .fontWeight(FontWeight.Bold)
        LoadingProgress()
          .width("50%")
          .height("50%")
      }
      .width('100%')
      .margin({top:100})
    }
    .height('100%')
  }
  onPageShow(){
    setTimeout(()=>{
      router.pushUrl({
        url:"pages/wode"
      })
    }, 3000)
  }
}