import router from '@ohos:router';
export class jiankangbaogao extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            Column.backgroundColor('#F2F4FF');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("健康报告");
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({
                top: 10
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 10 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('健康报告1');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(100);
            Text.width(450);
            Text.borderRadius(20);
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/baogao'
                });
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('健康报告2');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(100);
            Text.width(450);
            Text.borderRadius(20);
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/baogao'
                });
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('健康报告3');
            Text.fontSize(25);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(0x758a99);
            Text.textAlign(TextAlign.Center);
            Text.height(100);
            Text.width(450);
            Text.borderRadius(20);
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/baogao'
                });
            });
            Text.backgroundColor(0xFAFAFA);
            Text.shadow({ radius: 10, color: 0xCFD8DC, offsetX: 10, offsetY: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.myapplication", "moduleName": "entry" });
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
loadDocument(new jiankangbaogao(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=jiankangbaogao.js.map