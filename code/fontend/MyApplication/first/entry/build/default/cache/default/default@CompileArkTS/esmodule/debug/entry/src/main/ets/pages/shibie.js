import http from '@ohos:net.http';
import Prompt from '@ohos:prompt';
class shibie extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__state = new ObservedPropertySimplePU(AnimationStatus.Initial, this, "state");
        this.__reverse = new ObservedPropertySimplePU(false, this, "reverse");
        this.__iterations = new ObservedPropertySimplePU(1
        //这就是前后端交互的方法
        //只需要修改标注的就行，其他都为固定的
        //总体逻辑，利用此方法，将输入文本框内的账户和密码发给后端，
        // 后端从数据库看是否正确，如果正确则向前端发送'登录成功'/'用户不存在'/'密码错误'等，
        // 前端接受数据后在判断是否为'测试成功'，如果成功则控制台输出okok
        , this, "iterations");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.state !== undefined) {
            this.state = params.state;
        }
        if (params.reverse !== undefined) {
            this.reverse = params.reverse;
        }
        if (params.iterations !== undefined) {
            this.iterations = params.iterations;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__state.purgeDependencyOnElmtId(rmElmtId);
        this.__reverse.purgeDependencyOnElmtId(rmElmtId);
        this.__iterations.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__state.aboutToBeDeleted();
        this.__reverse.aboutToBeDeleted();
        this.__iterations.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get state() {
        return this.__state.get();
    }
    set state(newValue) {
        this.__state.set(newValue);
    }
    get reverse() {
        return this.__reverse.get();
    }
    set reverse(newValue) {
        this.__reverse.set(newValue);
    }
    get iterations() {
        return this.__iterations.get();
    }
    set iterations(newValue) {
        this.__iterations.set(newValue);
    }
    //这就是前后端交互的方法
    //只需要修改标注的就行，其他都为固定的
    //总体逻辑，利用此方法，将输入文本框内的账户和密码发给后端，
    // 后端从数据库看是否正确，如果正确则向前端发送'登录成功'/'用户不存在'/'密码错误'等，
    // 前端接受数据后在判断是否为'测试成功'，如果成功则控制台输出okok
    S_login() {
        let httpRequest = http.createHttp();
        //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
        let url = "https://aip.baidubce.com/rpc/2.0/ai_custom_bml/v1/table_infer/emg_finger?access_token=24.a96f9a18bc0298ca1f07dbd8b5b63945.2592000.1694417034.282335-37576462";
        httpRequest.request(url, {
            method: http.RequestMethod.POST,
            header: {
                'Content-Type': 'application/json'
            },
            extraData: {
                //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
                "include_req": false,
                "data": [{
                        "col0": 0.046904,
                        "col1": 0.03827,
                        "col2": 0.027714,
                        "col3": 0.027727,
                        "col4": 0.012447,
                        "col5": 0.014541,
                        "col6": 0.015139,
                        "col7": 0.014557,
                        "col8": 0.047688,
                        "col9": 0.039265,
                        "col10": 0.029502,
                        "col11": 0.029266,
                        "col12": 0.015934,
                        "col13": 0.017176,
                        "col14": 0.017364,
                        "col15": 0.016997,
                        "col16": -0.36719,
                        "col17": -0.17188,
                        "col18": -0.17969,
                        "col19": -0.10938,
                        "col20": -0.046875,
                        "col21": -0.070313,
                        "col22": -0.078125,
                        "col23": -0.09375,
                        "col24": 0.20313,
                        "col25": 0.23438,
                        "col26": 0.078125,
                        "col27": 0.125,
                        "col28": 0.03125,
                        "col29": 0.039063,
                        "col30": 0.078125,
                        "col31": 0.054688,
                        "col32": 55,
                        "col33": 40,
                        "col34": 56,
                        "col35": 47,
                        "col36": 24,
                        "col37": 27,
                        "col38": 23,
                        "col39": 27,
                        "col40": 0.096042,
                        "col41": 0.077813,
                        "col42": 0.07776,
                        "col43": 0.085573,
                        "col44": 0.035469,
                        "col45": 0.037344,
                        "col46": 0.039375,
                        "col47": 0.038698,
                        "col48": 0.054688,
                        "col49": 0.054688,
                        "col50": 0.039063,
                        "col51": 0.039063,
                        "col52": 0.03125,
                        "col53": 0.023438,
                        "col54": 0.03125,
                        "col55": 0.03125,
                        "col56": 0.022936,
                        "col57": 0.018607,
                        "col58": 0.017892,
                        "col59": 0.018931,
                        "col60": 0.0096375,
                        "col61": 0.010029,
                        "col62": 0.0095208,
                        "col63": 0.0095069,
                        "col64": 5.8438,
                        "col65": 4.6016,
                        "col66": 4.4219,
                        "col67": 4.7109,
                        "col68": 2.1406,
                        "col69": 2.3047,
                        "col70": 2.2656,
                        "col71": 2.3047,
                        "col72": 3,
                        "col73": 2,
                        "col74": 4,
                        "col75": 1,
                        "col76": 0,
                        "col77": 0,
                        "col78": 1,
                        "col79": 1
                    }
                ]
            },
            connectTimeout: 6000,
            readTimeout: 6000,
        }, (err, data) => {
            if (!err) {
                if (data.responseCode == 200) {
                    console.info("传递成功");
                    console.info("从服务器返回接口返回数据成功，传递参数" + data.result);
                }
                //console.info('Result:' + data.result['username']);
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                console.info('header:' + JSON.stringify(data.header));
                console.info('cookies:' + data.cookies);
                //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
                if (data.result == '测试成功') {
                    console.info('okok');
                    Prompt.showToast({
                        message: "测试成功",
                        duration: 2000,
                    });
                }
            }
            else {
                console.info('error:' + JSON.stringify(err));
                httpRequest.destroy();
                Prompt.showToast({
                    message: "无设备连接",
                    duration: 2000,
                });
            }
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor('#D4DCE1');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 10 });
            Column.margin({ top: 50 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // TextInput({ placeholder: '输入手机号'})
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .onChange((value: string) => {
            //     this.username = value
            //   })
            // TextInput({ placeholder: '输入密码' })
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .type(InputType.Password)
            //   .onChange((value: string) => {
            //     this.password = value
            //   })
            Text.create("手势识别");
            // TextInput({ placeholder: '输入手机号'})
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .onChange((value: string) => {
            //     this.username = value
            //   })
            // TextInput({ placeholder: '输入密码' })
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .type(InputType.Password)
            //   .onChange((value: string) => {
            //     this.password = value
            //   })
            Text.fontWeight(FontWeight.Bold);
            // TextInput({ placeholder: '输入手机号'})
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .onChange((value: string) => {
            //     this.username = value
            //   })
            // TextInput({ placeholder: '输入密码' })
            //   .width(300)
            //   .height(60)
            //   .fontSize(20)
            //   .type(InputType.Password)
            //   .onChange((value: string) => {
            //     this.password = value
            //   })
            Text.fontSize(30);
            if (!isInitialRender) {
                // TextInput({ placeholder: '输入手机号'})
                //   .width(300)
                //   .height(60)
                //   .fontSize(20)
                //   .onChange((value: string) => {
                //     this.username = value
                //   })
                // TextInput({ placeholder: '输入密码' })
                //   .width(300)
                //   .height(60)
                //   .fontSize(20)
                //   .type(InputType.Password)
                //   .onChange((value: string) => {
                //     this.password = value
                //   })
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // TextInput({ placeholder: '输入手机号'})
        //   .width(300)
        //   .height(60)
        //   .fontSize(20)
        //   .onChange((value: string) => {
        //     this.username = value
        //   })
        // TextInput({ placeholder: '输入密码' })
        //   .width(300)
        //   .height(60)
        //   .fontSize(20)
        //   .type(InputType.Password)
        //   .onChange((value: string) => {
        //     this.password = value
        //   })
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("请根据下面顺序依次做动作");
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ImageAnimator.create();
            ImageAnimator.images([
                {
                    src: { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                },
                {
                    src: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                },
                {
                    src: { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                },
                {
                    src: { "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                },
                {
                    src: { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                },
                {
                    src: { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" }
                }
            ]);
            ImageAnimator.duration(13000);
            ImageAnimator.state(this.state);
            ImageAnimator.reverse(this.reverse);
            ImageAnimator.fillMode(FillMode.None);
            ImageAnimator.iterations(this.iterations);
            ImageAnimator.width(340);
            ImageAnimator.height(240);
            ImageAnimator.margin({ top: 15 });
            ImageAnimator.onStart(() => {
                console.info('start');
            });
            ImageAnimator.onPause(() => {
                console.info('Pause');
            });
            ImageAnimator.onRepeat(() => {
                console.info('Repeat');
            });
            ImageAnimator.onCancel(() => {
                console.info('Cancel');
            });
            ImageAnimator.onFinish(() => {
                console.info('Finish');
                this.state = AnimationStatus.Stopped;
            });
            if (!isInitialRender) {
                ImageAnimator.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('开始');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.state = AnimationStatus.Running;
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('暂停');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.state = AnimationStatus.Paused; // 显示当前帧图片
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('结束');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.state = AnimationStatus.Stopped; // 显示动画的起始帧图片
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('撤销');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.reverse = !this.reverse;
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('一次');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.iterations = 1;
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('循环');
            Button.width(100);
            Button.padding(5);
            Button.onClick(() => {
                this.iterations = -1; // 无限循环播放
            });
            Button.margin(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('开始测试');
            Button.width(300);
            Button.height(60);
            Button.margin(20);
            Button.fontSize(20);
            Button.backgroundColor('#0F40F5');
            Button.onClick(() => {
                //调用与后端交互的方法
                this.S_login();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            Image.width(500);
            Image.height(400);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new shibie(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=shibie.js.map