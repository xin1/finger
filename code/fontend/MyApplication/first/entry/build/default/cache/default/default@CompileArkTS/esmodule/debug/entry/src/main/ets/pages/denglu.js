import router from '@ohos:router';
class denglu extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message0 = new ObservedPropertySimplePU('登录界面', this, "message0");
        this.__m1 = new ObservedPropertySimplePU("欢迎使用，请先登录账号", this, "m1");
        this.__m = new ObservedPropertySimplePU("其他方式登录", this, "m");
        this.__m22 = new ObservedPropertySimplePU("          忘记密码点击此处", this, "m22");
        this.__m11 = new ObservedPropertySimplePU("短信验证码登录          ", this, "m11");
        this.__username = new ObservedPropertySimplePU("", this, "username");
        this.__password = new ObservedPropertySimplePU(""
        // Login() {
        //   let httpRequest = http.createHttp();
        //   //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
        //   let url = "http://127.0.0.1:8000/login/"
        //   httpRequest.request(
        //     url,
        //     {
        //       method: http.RequestMethod.POST,
        //       header: {
        //         'Content-Type': 'application/json'
        //       },
        //       extraData: {
        //         //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
        //         "username": this.username,
        //         "password": this.password
        //       },
        //       connectTimeout: 6000,
        //       readTimeout: 6000,
        //     }, (err, data) => {
        //     if (!err) {
        //       if (data.responseCode == 200) {
        //         console.info("传递成功")
        //         console.info("从服务器返回接口返回数据成功，传递参数" + data.result)
        //       }
        //       console.info('Result:' + data.result);
        //       console.info('code:' + data.responseCode);
        //       console.info('header:' + JSON.stringify(data.header));
        //       console.info('cookies:' + data.cookies);
        //       //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
        //       if(data.result == '登录成功') {
        //         router.push({
        //           url:"pages/fuwu"
        //         })
        //       }
        //       else if (data.result == '账户或密码错误'){
        //         prompt.showToast({
        //           message:"账户密码错误",
        //           duration:2000,
        //
        //         });
        //       }
        //     } else {
        //
        //       console.info('error:' + JSON.stringify(err));
        //
        //       httpRequest.destroy();
        //     }
        //   }
        //   );
        // }
        , this, "password");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message0 !== undefined) {
            this.message0 = params.message0;
        }
        if (params.m1 !== undefined) {
            this.m1 = params.m1;
        }
        if (params.m !== undefined) {
            this.m = params.m;
        }
        if (params.m22 !== undefined) {
            this.m22 = params.m22;
        }
        if (params.m11 !== undefined) {
            this.m11 = params.m11;
        }
        if (params.username !== undefined) {
            this.username = params.username;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message0.purgeDependencyOnElmtId(rmElmtId);
        this.__m1.purgeDependencyOnElmtId(rmElmtId);
        this.__m.purgeDependencyOnElmtId(rmElmtId);
        this.__m22.purgeDependencyOnElmtId(rmElmtId);
        this.__m11.purgeDependencyOnElmtId(rmElmtId);
        this.__username.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message0.aboutToBeDeleted();
        this.__m1.aboutToBeDeleted();
        this.__m.aboutToBeDeleted();
        this.__m22.aboutToBeDeleted();
        this.__m11.aboutToBeDeleted();
        this.__username.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message0() {
        return this.__message0.get();
    }
    set message0(newValue) {
        this.__message0.set(newValue);
    }
    get m1() {
        return this.__m1.get();
    }
    set m1(newValue) {
        this.__m1.set(newValue);
    }
    get m() {
        return this.__m.get();
    }
    set m(newValue) {
        this.__m.set(newValue);
    }
    get m22() {
        return this.__m22.get();
    }
    set m22(newValue) {
        this.__m22.set(newValue);
    }
    get m11() {
        return this.__m11.get();
    }
    set m11(newValue) {
        this.__m11.set(newValue);
    }
    get username() {
        return this.__username.get();
    }
    set username(newValue) {
        this.__username.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    // Login() {
    //   let httpRequest = http.createHttp();
    //   //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
    //   let url = "http://127.0.0.1:8000/login/"
    //   httpRequest.request(
    //     url,
    //     {
    //       method: http.RequestMethod.POST,
    //       header: {
    //         'Content-Type': 'application/json'
    //       },
    //       extraData: {
    //         //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
    //         "username": this.username,
    //         "password": this.password
    //       },
    //       connectTimeout: 6000,
    //       readTimeout: 6000,
    //     }, (err, data) => {
    //     if (!err) {
    //       if (data.responseCode == 200) {
    //         console.info("传递成功")
    //         console.info("从服务器返回接口返回数据成功，传递参数" + data.result)
    //       }
    //       console.info('Result:' + data.result);
    //       console.info('code:' + data.responseCode);
    //       console.info('header:' + JSON.stringify(data.header));
    //       console.info('cookies:' + data.cookies);
    //       //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
    //       if(data.result == '登录成功') {
    //         router.push({
    //           url:"pages/fuwu"
    //         })
    //       }
    //       else if (data.result == '账户或密码错误'){
    //         prompt.showToast({
    //           message:"账户密码错误",
    //           duration:2000,
    //
    //         });
    //       }
    //     } else {
    //
    //       console.info('error:' + JSON.stringify(err));
    //
    //       httpRequest.destroy();
    //     }
    //   }
    //   );
    // }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            /*Row() {
              Column() {
                Text(this.message)
                  .fontSize(50)
                  .fontWeight(FontWeight.Bold)
              }*/
            Column.create();
            /*Row() {
              Column() {
                Text(this.message)
                  .fontSize(50)
                  .fontWeight(FontWeight.Bold)
              }*/
            Column.justifyContent(FlexAlign.Center);
            /*Row() {
              Column() {
                Text(this.message)
                  .fontSize(50)
                  .fontWeight(FontWeight.Bold)
              }*/
            Column.backgroundImage({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            /*Row() {
              Column() {
                Text(this.message)
                  .fontSize(50)
                  .fontWeight(FontWeight.Bold)
              }*/
            Column.width(480);
            /*Row() {
              Column() {
                Text(this.message)
                  .fontSize(50)
                  .fontWeight(FontWeight.Bold)
              }*/
            Column.height(758);
            if (!isInitialRender) {
                /*Row() {
                  Column() {
                    Text(this.message)
                      .fontSize(50)
                      .fontWeight(FontWeight.Bold)
                  }*/
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('90%');
            Column.height('90%');
            Column.justifyContent(FlexAlign.SpaceAround);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //Image($r('app.media.denglu1'))
            Text.create("");
            //Image($r('app.media.denglu1'))
            Text.width(100);
            //Image($r('app.media.denglu1'))
            Text.height(100);
            if (!isInitialRender) {
                //Image($r('app.media.denglu1'))
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //Image($r('app.media.denglu1'))
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message0);
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(34);
            Text.fontColor('#815c94');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.m1);
            Text.fontSize(21);
            Text.fontColor('#815c94');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "请输入账号" });
            TextInput.fontSize(22);
            TextInput.height(60);
            TextInput.type(InputType.Number);
            TextInput.onChange((value) => {
                this.username = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "请输入密码" });
            TextInput.height(60);
            TextInput.type(InputType.Password);
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent((FlexAlign.SpaceBetween));
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.m11);
            Text.fontSize(20);
            Text.fontColor(Color.Blue);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.m22);
            Text.fontSize(20);
            Text.fontColor(Color.Blue);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("登录", { type: ButtonType.Capsule, stateEffect: true });
            Button.fontSize(20);
            Button.width(300);
            Button.height(60);
            Button.onClick(() => {
                router.pushUrl({
                    url: 'pages/wode'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("注册账号");
            Text.fontSize(18);
            Text.fontColor('#126e82');
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/zhuce'
                });
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.m);
            Text.fontSize(18);
            Text.fontColor('#126e82');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("1");
            Button.backgroundColor('#12a182');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("2");
            Button.backgroundColor('#12a182');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("3");
            Button.backgroundColor('#12a182');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
        /*Row() {
          Column() {
            Text(this.message)
              .fontSize(50)
              .fontWeight(FontWeight.Bold)
          }*/
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new denglu(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=denglu.js.map