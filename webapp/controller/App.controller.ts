import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class AppController extends Controller {
    onInit(): void {
        this.getView().addStyleClass((<Component> this.getOwnerComponent()).getContentDensityClass())
    }
}
