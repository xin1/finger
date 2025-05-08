import router from '@ohos:router';
export class tabbar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__index = new SynchedPropertySimpleTwoWayPU(params.index, this, "index");
        this.__tabbarlist = new ObservedPropertyObjectPU([
            {
                name: "我的",
                img: '/common/wode9.png',
                simg: '/common/wode10.png',
                path: "pages/wode"
            },
            {
                name: "设备",
                img: '/common/shebei4.png',
                simg: '/common/shebei5.png',
                path: "pages/fuwu"
            },
            {
                name: '健康',
                img: '/common/yisheng1.png',
                simg: '/common/yisheng3.png',
                path: "pages/yisheng"
            },
            {
                name: '社区',
                img: '/common/shequ3.png',
                simg: '/common/shequ4.png',
                path: "pages/ceshi2"
            }
        ], this, "tabbarlist");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tabbarlist !== undefined) {
            this.tabbarlist = params.tabbarlist;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__tabbarlist.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        this.__tabbarlist.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get index() {
        return this.__index.get();
    }
    set index(newValue) {
        this.__index.set(newValue);
    }
    get tabbarlist() {
        return this.__tabbarlist.get();
    }
    set tabbarlist(newValue) {
        this.__tabbarlist.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width("100%");
            Row.justifyContent(FlexAlign.SpaceEvenly);
            Row.position({ x: "0%", y: "91%" });
            Row.height("11%");
            Row.backgroundColor("white");
            Row.border({ width: 3, color: "#90A4AE" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create({ space: 1 });
                    Column.width("20%");
                    Column.onClick(() => {
                        router.pushUrl({
                            url: item.path
                        });
                    });
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(this.index == index ? item.simg : item.img);
                    Image.width(45);
                    Image.height(45);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.name);
                    Text.fontColor(this.index == index ? "#1565C0" : "#000000");
                    Text.fontSize(15);
                    Text.margin({ bottom: 6 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tabbarlist, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=tabbar.js.map