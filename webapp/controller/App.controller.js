sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("projectflp.projectflp.controller.App", {
        onLiveChange: function () {
            var sName = this.byId("inpName").getValue().trim();
            var sEmail = this.byId("inpEmail").getValue().trim();
            var sPhone = this.byId("inpPhone").getValue().trim();
            var sCity = this.byId("inpCity").getValue().trim();

            var bEnable = sName !== "" && sEmail !== "" && sPhone !== "" && sCity !== "";
            this.byId("submitBtn").setEnabled(bEnable);
        },

        onSubmit: function () {
            var oApp = this.byId("myApp");

            MessageBox.success("Data is successfully added", {
                title: "Success",
                actions: ["Image", MessageBox.Action.OK],
                emphasizedAction: "Image",
                onClose: function (sAction) {
                    if (sAction === "Image") {
                        oApp.to(this.byId("secondPage"));
                    }
                }.bind(this)
            });
        },

        onCancel: function () {
            this.byId("inpName").setValue("");
            this.byId("inpEmail").setValue("");
            this.byId("inpPhone").setValue("");
            this.byId("inpCity").setValue("");
            this.byId("submitBtn").setEnabled(false);
        },

        onPrevious: function () {
            this.byId("myApp").to(this.byId("firstPage"));
        }
    });
});