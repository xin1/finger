import router from '@ohos.router';

@Entry
@Component
struct wodexinxi {
  selectedDate: Date = new Date("2010-1-1")
  private select1: number | number[] = 2
  private shangcanage: string[] = ['第一指节离断', '第二指节离断', '第三指节离断', '第一，二指节离断', '第二，三指节离断','第一，三指节离断','第一，二，三指节离断','全掌离断']

  build() {
    Column() {
      Row() {
        Column() {

          Text("个人信息")
          .fontWeight(FontWeight.Bold)
          .fontSize(30)
          .margin(20)

          Row({space:45}){

            Button("伤残类型")
              .margin(20)
              .onClick(() => {
                TextPickerDialog.show({
                  range: this.shangcanage,
                  //selected: this.select1,
                  onAccept: (value: TextPickerResult) => {
                    // 设置select为按下确定按钮时候的选中项index，这样当弹窗再次弹出时显示选中的是上一次确定的选项
                    this.select1 = value.index
                    console.info("TextPickerDialog:onAccept()" + JSON.stringify(value))
                  },
                  onCancel: () => {
                    console.info("TextPickerDialog:onCancel()")
                  },
                  onChange: (value: TextPickerResult) => {
                    console.info("TextPickerDialog:onChange()" + JSON.stringify(value))
                  }
                })
              })
            Text("第三指节离断")
              .fontSize(20)
              .fontWeight(FontWeight.Bold)


          }

        }
      }
      Row({space:30}){

        Button("出生日期")
          .margin(20)
          .onClick(() => {
            DatePickerDialog.show({
              start: new Date("2000-1-1"),
              end: new Date("2100-12-31"),
              selected: this.selectedDate,
              onAccept: (value: DatePickerResult) => {
                // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                this.selectedDate.setFullYear(value.year, value.month, value.day)
                console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
              },
              onCancel: () => {
                console.info("DatePickerDialog:onCancel()")
              },
              onChange: (value: DatePickerResult) => {
                console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })

        Text("2003年1年1日")
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
      }

      Row({space:30}){
        Button("伤残日期")
          .margin(20)
          .onClick(() => {
            DatePickerDialog.show({
              start: new Date("2000-1-1"),
              end: new Date("2100-12-31"),
              selected: this.selectedDate,
              lunar: true,
              onAccept: (value: DatePickerResult) => {
                this.selectedDate.setFullYear(value.year, value.month, value.day)
                console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
              },
              onCancel: () => {
                console.info("DatePickerDialog:onCancel()")
              },
              onChange: (value: DatePickerResult) => {
                console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })

        Text("2013年1年1日")
          .fontSize(20)
          .fontWeight(FontWeight.Bold)

      }


    }.width('100%')
  }
}