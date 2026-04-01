sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "projectflp/projectflp/model/models"
], function (UIComponent, JSONModel, models) {
    "use strict";

    return UIComponent.extend("projectflp.projectflp.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createDeviceModel(), "device");

            var oMockModel = new JSONModel();
            oMockModel.loadData("model/sampleData.json");
            this.setModel(oMockModel, "mock");

            this.getRouter().initialize();
        }
    });
});