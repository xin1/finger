import router from '@ohos.router';
//import {wode}  from "./wode"
//import {Index} from "./yisheng"
@Component
export struct tabbar{
  @Link index:number
  @State tabbarlist: object[]=[
    {
      name:"我的",
      img: '/common/wode9.png',
      simg: '/common/wode10.png',
      path:"pages/wode"
    },
    {
      name:"设备",
      img: '/common/shebei4.png',
      simg: '/common/shebei5.png',
      path:"pages/fuwu"
    },
    {
      name: '健康',
      img: '/common/yisheng1.png',
      simg: '/common/yisheng3.png',
      path:"pages/yisheng"
    },
    {
      name: '社区',
      img:  '/common/shequ3.png',
      simg: '/common/shequ4.png',
      path:"pages/ceshi2"
    }
  ]

  build(){
    Row(){
      ForEach(this.tabbarlist, (item,index)=>{
        Column({space:1}){
          Image(this.index == index ? item.simg:item.img)
            .width(45).height(45)

          Text(item.name)
            .fontColor(this.index == index? "#1565C0":"#000000")
            .fontSize(15)
            .margin({bottom:6})
        }.width("20%")

        .onClick(()=>{
          router.pushUrl({
            url:item.path
          })
        })
      })
    }
    .width("100%").justifyContent(FlexAlign.SpaceEvenly)
    .position({x:"0%",y:"91%"}).height("11%")
    .backgroundColor("white").border({width:3,color:"#90A4AE"})
  }
}