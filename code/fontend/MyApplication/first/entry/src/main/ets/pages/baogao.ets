// xxx.ets
//import {tabbar} from "./tabbar"
//import router from '@ohos.router';
@Entry
@Component
struct baogao {

  build() {

    Column({space:10}) {

      Text("测试次数：13次")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({
          top: 30,
        })

      Text("识别正确：10次")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)

      Text("识别正确率：76%")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)

      Row(){
        Text("测试建议")
          .fontSize(30)
          .fontWeight(FontWeight.Bold)


        Image($r('app.media.baogao1'))
          .width(80)
      }

      Text(
      "1.佩戴时注意束带的紧度,不要过松过紧,要保证义肢与残肢的稳定连接。                               " +
      "2.开始使用时,可以先进行一些简单的手指运动,逐步适应义肢。                                           " +
      "3.日常使用时,可以乐观积极地看待义肢,把它视为身体的一部分,不要因外表不同而产生负面情绪。                                                         " +
      "4.可以适当地选择一些较轻便的日用活动进行练习,逐步恢复手指的灵活性。                        "+
      "5.用义肢进行重物提拿时要注意安全,最好不要过度依赖义肢的力量。                                  " +
      "6.使用后要及时给电池充电,保证电量充足。                                                                   " +
      "7.如果在使用中遇到问题,要及时找专业人员解决,不要自己拆卸义肢。                              " +
      "8.可以适当地与家人朋友讨论义肢的使用情况,接受他们的帮助和支持。                            " +
      "9.保持乐观积极的心态,相信通过耐心练习,定能适应并善用义肢。                                                " +
      "希望这些建议可以帮助您更好地使用和适应手指义肢,实现生活自理,早日恢复正常生活。")

        .fontSize(21)
        .margin({
          left:30,
          right:30
        })
    }

    }


}