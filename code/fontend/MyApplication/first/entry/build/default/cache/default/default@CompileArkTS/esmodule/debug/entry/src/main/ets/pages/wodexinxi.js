class wodexinxi extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.selectedDate = new Date("2010-1-1");
        this.select1 = 2;
        this.shangcanage = ['第一指节离断', '第二指节离断', '第三指节离断', '第一，二指节离断', '第二，三指节离断', '第一，三指节离断', '第一，二，三指节离断', '全掌离断'];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.selectedDate !== undefined) {
            this.selectedDate = params.selectedDate;
        }
        if (params.select1 !== undefined) {
            this.select1 = params.select1;
        }
        if (params.shangcanage !== undefined) {
            this.shangcanage = params.shangcanage;
        }
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
            Column.create();
            Column.width('100%');
            if (!isInitialRender) {
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
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("个人信息");
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(30);
            Text.margin(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 45 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("伤残类型");
            Button.margin(20);
            Button.onClick(() => {
                TextPickerDialog.show({
                    range: this.shangcanage,
                    //selected: this.select1,
                    onAccept: (value) => {
                        // 设置select为按下确定按钮时候的选中项index，这样当弹窗再次弹出时显示选中的是上一次确定的选项
                        this.select1 = value.index;
                        console.info("TextPickerDialog:onAccept()" + JSON.stringify(value));
                    },
                    onCancel: () => {
                        console.info("TextPickerDialog:onCancel()");
                    },
                    onChange: (value) => {
                        console.info("TextPickerDialog:onChange()" + JSON.stringify(value));
                    }
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
            Text.create("第三指节离断");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 30 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("出生日期");
            Button.margin(20);
            Button.onClick(() => {
                DatePickerDialog.show({
                    start: new Date("2000-1-1"),
                    end: new Date("2100-12-31"),
                    selected: this.selectedDate,
                    onAccept: (value) => {
                        // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                        this.selectedDate.setFullYear(value.year, value.month, value.day);
                        console.info("DatePickerDialog:onAccept()" + JSON.stringify(value));
                    },
                    onCancel: () => {
                        console.info("DatePickerDialog:onCancel()");
                    },
                    onChange: (value) => {
                        console.info("DatePickerDialog:onChange()" + JSON.stringify(value));
                    }
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
            Text.create("2003年1年1日");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 30 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("伤残日期");
            Button.margin(20);
            Button.onClick(() => {
                DatePickerDialog.show({
                    start: new Date("2000-1-1"),
                    end: new Date("2100-12-31"),
                    selected: this.selectedDate,
                    lunar: true,
                    onAccept: (value) => {
                        this.selectedDate.setFullYear(value.year, value.month, value.day);
                        console.info("DatePickerDialog:onAccept()" + JSON.stringify(value));
                    },
                    onCancel: () => {
                        console.info("DatePickerDialog:onCancel()");
                    },
                    onChange: (value) => {
                        console.info("DatePickerDialog:onChange()" + JSON.stringify(value));
                    }
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
            Text.create("2013年1年1日");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new wodexinxi(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
export {};
//# sourceMappingURL=wodexinxi.js.map