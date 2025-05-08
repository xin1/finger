import http from '@ohos:net.http';
import router from '@ohos:router';
class zhuce extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__fathernum = new ObservedPropertySimplePU(0, this, "fathernum");
        this.__fatherstatu = new ObservedPropertySimplePU(true, this, "fatherstatu");
        this.__inputtext = new ObservedPropertySimplePU("", this, "inputtext");
        this.__username = new ObservedPropertySimplePU("", this, "username");
        this.__password = new ObservedPropertySimplePU("", this, "password");
        this.__repassword = new ObservedPropertySimplePU("", this, "repassword");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.fathernum !== undefined) {
            this.fathernum = params.fathernum;
        }
        if (params.fatherstatu !== undefined) {
            this.fatherstatu = params.fatherstatu;
        }
        if (params.inputtext !== undefined) {
            this.inputtext = params.inputtext;
        }
        if (params.username !== undefined) {
            this.username = params.username;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.repassword !== undefined) {
            this.repassword = params.repassword;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__fathernum.purgeDependencyOnElmtId(rmElmtId);
        this.__fatherstatu.purgeDependencyOnElmtId(rmElmtId);
        this.__inputtext.purgeDependencyOnElmtId(rmElmtId);
        this.__username.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__repassword.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__fathernum.aboutToBeDeleted();
        this.__fatherstatu.aboutToBeDeleted();
        this.__inputtext.aboutToBeDeleted();
        this.__username.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__repassword.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get fathernum() {
        return this.__fathernum.get();
    }
    set fathernum(newValue) {
        this.__fathernum.set(newValue);
    }
    get fatherstatu() {
        return this.__fatherstatu.get();
    }
    set fatherstatu(newValue) {
        this.__fatherstatu.set(newValue);
    }
    get inputtext() {
        return this.__inputtext.get();
    }
    set inputtext(newValue) {
        this.__inputtext.set(newValue);
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
    get repassword() {
        return this.__repassword.get();
    }
    set repassword(newValue) {
        this.__repassword.set(newValue);
    }
    S_Register() {
        let httpRequest = http.createHttp();
        //修改1.这个需要后端给前端名称，相当于方法名，调用后端的哪个方法名，可以前端起名字再告诉后端（只能修改8000/后的名字）
        let url = "http://127.0.0.1:8000/zhuce/";
        httpRequest.request(url, {
            method: http.RequestMethod.POST,
            header: {
                'Content-Type': 'application/json'
            },
            extraData: {
                //修改2.冒号前面是传输给后端的id，冒号后面就是传给后端的具体数值
                "username": this.username,
                "password": this.password
            },
            connectTimeout: 6000,
            readTimeout: 6000,
        }, (err, data) => {
            if (!err) {
                if (data.responseCode == 200) {
                    console.info("传递成功");
                    console.info("从服务器返回接口返回数据成功，传递参数" + data.result);
                }
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                console.info('header:' + JSON.stringify(data.header));
                console.info('cookies:' + data.cookies);
                //修改3：对data.result进行处理，此例子是后端传递回来登录成功，在控制台上打印okok，则根据自己需求将下方修改即可
                if (data.result == '注册成功') {
                    router.push({
                        url: "pages/index"
                    });
                }
                else if (data.result == '已有账号') {
                    router.push({
                        url: "pages/denglu"
                    });
                }
            }
            else {
                console.info('error:' + JSON.stringify(err));
                httpRequest.destroy();
            }
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundImage({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            Column.height(758);
            Column.width(480);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('10%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            Column.height('23%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            Image.width(100);
            Image.height(100);
            Image.borderRadius(10);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('欢迎注册');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            Column.height('33%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "请输入注册账号", text: this.inputtext });
            TextInput.width(360);
            TextInput.height(45);
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
            TextInput.create({ placeholder: "请输入密码", text: "" });
            TextInput.width(360);
            TextInput.height(45);
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
            TextInput.create({ placeholder: "请再次输入密码", text: "" });
            TextInput.width(360);
            TextInput.height(45);
            TextInput.type(InputType.Password);
            TextInput.onChange((value) => {
                this.repassword = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.onClick(() => {
                router.push({
                    url: "pages/index"
                });
            });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width("100%");
            Row.height('9%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("已有帐号", { type: ButtonType.Capsule, stateEffect: true });
            Button.margin({ left: 45 });
            Button.fontSize(15);
            Button.fontColor(0x546E7A);
            Button.backgroundColor({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            Button.onClick(() => {
                router.push({
                    url: "pages/denglu"
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
            Button.createWithLabel("游客进入", { type: ButtonType.Capsule, stateEffect: true });
            Button.fontSize(15);
            Button.margin({ right: 48 });
            Button.fontColor(0x546E7A);
            Button.backgroundColor({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
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
            Button.createWithLabel('注册', { type: ButtonType.Capsule, stateEffect: true });
            Button.fontColor(0x546E7A);
            Button.fontWeight(FontWeight.Bold);
            Button.fontSize(25);
            Button.width(200);
            Button.height(50);
            Button.backgroundColor("bule");
            Button.onClick(() => {
                if (this.password == this.repassword) {
                    this.S_Register();
                }
                else { }
            });
            Button.backgroundColor(0xFAFAFA);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new zhuce(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=zhuce.js.map