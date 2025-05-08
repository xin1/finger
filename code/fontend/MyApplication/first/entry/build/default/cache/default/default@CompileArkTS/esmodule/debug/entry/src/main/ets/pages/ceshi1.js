import { tabbar } from '@bundle:com.example.myapplication/entry/ets/pages/tabbar';
class CustomDialogExample extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__textValue = new SynchedPropertySimpleTwoWayPU(params.textValue, this, "textValue");
        this.__inputValue = new SynchedPropertySimpleTwoWayPU(params.inputValue, this, "inputValue");
        this.controller = undefined;
        this.cancel = undefined;
        this.confirm = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__textValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('更换昵称');
            Text.fontSize(20);
            Text.margin({ top: 10, bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '', text: this.textValue });
            TextInput.height(60);
            TextInput.width('90%');
            TextInput.onChange((value) => {
                this.textValue = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('是否更换?');
            Text.fontSize(16);
            Text.margin({ top: 10, bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceAround });
            Flex.margin({ bottom: 10 });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('取消');
            Button.onClick(() => {
                this.controller.close();
                this.cancel();
            });
            Button.backgroundColor(0xffffff);
            Button.fontColor(Color.Black);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('更换');
            Button.onClick(() => {
                this.inputValue = this.textValue;
                this.controller.close();
                this.confirm();
            });
            Button.backgroundColor(0xffffff);
            Button.fontColor(Color.Red);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('健康服务', this, "message");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.__textValue = new ObservedPropertySimplePU('', this, "textValue");
        this.__inputValue = new ObservedPropertySimplePU('This is gradient color', this, "inputValue");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogExample(this, {
                    cancel: this.onCancel,
                    confirm: this.onAccept,
                    textValue: this.__textValue,
                    inputValue: this.__inputValue
                });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
            },
            cancel: this.existApp,
            autoCancel: true,
            alignment: DialogAlignment.Default,
            offset: { dx: 0, dy: -20 },
            gridCount: 4,
            customStyle: false
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.textValue !== undefined) {
            this.textValue = params.textValue;
        }
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__textValue.purgeDependencyOnElmtId(rmElmtId);
        this.__inputValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        this.__textValue.aboutToBeDeleted();
        this.__inputValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get index() {
        return this.__index.get();
    }
    set index(newValue) {
        this.__index.set(newValue);
    }
    get textValue() {
        return this.__textValue.get();
    }
    set textValue(newValue) {
        this.__textValue.set(newValue);
    }
    get inputValue() {
        return this.__inputValue.get();
    }
    set inputValue(newValue) {
        this.__inputValue.set(newValue);
    }
    aboutToDisappear() {
        delete this.dialogController,
            this.dialogController = undefined;
    }
    onCancel() {
        console.info('Callback when the first button is clicked');
    }
    onAccept() {
        console.info('Callback when the second button is clicked');
    }
    existApp() {
        console.info('Click the callback in the blank area');
    }
    TabBuilder(index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (index === 2) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Badge.create({
                            value: '',
                            style: { badgeSize: 10, badgeColor: '#FA2A2D' }
                        });
                        Badge.width(100);
                        Badge.height(20);
                        Badge.margin({ bottom: 4 });
                        if (!isInitialRender) {
                            Badge.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create('/common/public_icon_off.svg');
                        Image.width(24);
                        Image.height(24);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Badge.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create('/common/public_icon_off.svg');
                        Image.width(24);
                        Image.height(24);
                        Image.margin({ bottom: 4 });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('Ta');
            Text.fontColor('#182431');
            Text.fontSize(25);
            Text.fontWeight(60);
            Text.lineHeight(25);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(480);
            Column.height(758);
            Column.backgroundImage({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //上面姓名等信息
            Row.create({ space: 40 });
            //上面姓名等信息
            Row.width(470);
            //上面姓名等信息
            Row.height(150);
            //上面姓名等信息
            Row.margin({
                left: 10
            });
            //上面姓名等信息
            Row.backgroundImage({ "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            if (!isInitialRender) {
                //上面姓名等信息
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //头像
            Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
            //头像
            Image.width(130);
            //头像
            Image.height(130);
            //头像
            Image.margin({ top: 0 });
            if (!isInitialRender) {
                //头像
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //姓名信息
            Column.create({ space: 15 });
            if (!isInitialRender) {
                //姓名信息
                Column.pop();
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
            //姓名
            Text.create('昵称      ');
            //姓名
            Text.fontSize(23);
            //姓名
            Text.textAlign(TextAlign.Start);
            //姓名
            Text.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
            if (!isInitialRender) {
                //姓名
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //姓名
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //地址
            Text.create('河南省郑州市');
            //地址
            Text.fontSize(16);
            //地址
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                //地址
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //地址
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //签名
            Text.create('这个人很无聊，什么也没有留下  ');
            //签名
            Text.fontSize(16);
            //签名
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                //签名
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //签名
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //邮箱
            Text.create('Email:    xxxxxxxxxx@qq.com    ');
            //邮箱
            Text.fontSize(16);
            //邮箱
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                //邮箱
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //邮箱
        Text.pop();
        //姓名信息
        Column.pop();
        //上面姓名等信息
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //欢迎粉丝数
            Column.create({ space: 20 });
            if (!isInitialRender) {
                //欢迎粉丝数
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create();
            Tabs.width(470);
            Tabs.height(90);
            Tabs.backgroundColor('#FAFAFA');
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 0);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 1);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 2);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 3);
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //四个大按钮
            Column.create({ space: 40 });
            //四个大按钮
            Column.width(400);
            //四个大按钮
            Column.height(500);
            if (!isInitialRender) {
                //四个大按钮
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 40 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我的信息');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(180);
            Text.width(180);
            Text.borderRadius(20);
            Text.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
            Text.backgroundColor(0xFAFAFA);
            Text.linearGradient({
                angle: 90,
                colors: [[0xff0000, 0.0], [0x0000ff, 0.3], [0xffff00, 1.0]]
            });
            Text.shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('健康报告');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(180);
            Text.width(180);
            Text.borderRadius(30);
            Text.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 40 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我的收藏');
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(180);
            Text.width(180);
            Text.borderRadius(30);
            Text.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('设置');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(180);
            Text.width(180);
            Text.borderRadius(30);
            Text.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 20, color: 0xCFD8DC, offsetX: 30, offsetY: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        //四个大按钮
        Column.pop();
        //欢迎粉丝数
        Column.pop();
        Column.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new tabbar(this, { index: this.__index }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ceshi1.js.map