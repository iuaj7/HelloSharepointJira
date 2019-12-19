"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var HalloJiraWebPart_module_scss_1 = require("./HalloJiraWebPart.module.scss");
var strings = require("HalloJiraWebPartStrings");
var jira_connector_1 = require("jira-connector");
var HalloJiraWebPart = (function (_super) {
    __extends(HalloJiraWebPart, _super);
    function HalloJiraWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HalloJiraWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HalloJiraWebPart_module_scss_1.default.halloJira + "\">\n        <div class=\"" + HalloJiraWebPart_module_scss_1.default.container + "\">\n          <div class=\"" + HalloJiraWebPart_module_scss_1.default.row + "\">\n            <div class=\"" + HalloJiraWebPart_module_scss_1.default.column + "\">\n              <span class=\"" + HalloJiraWebPart_module_scss_1.default.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + HalloJiraWebPart_module_scss_1.default.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + HalloJiraWebPart_module_scss_1.default.description + "\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n              <p class=\"" + HalloJiraWebPart_module_scss_1.default.description + "\">" + sp_lodash_subset_1.escape(this.strJiraIssue()) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + HalloJiraWebPart_module_scss_1.default.button + "\">\n                <span class=\"" + HalloJiraWebPart_module_scss_1.default.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    HalloJiraWebPart.prototype.strJiraIssue = function () {
        var jiraIssueString = '';
        this.gibJiraIssue().then(function (data) {
            console.log(data);
            jiraIssueString = data;
        });
        return 'Jira Issue: ' + jiraIssueString;
    };
    HalloJiraWebPart.prototype.gibJiraIssue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJiraIssue()];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value];
                }
            });
        });
    };
    HalloJiraWebPart.prototype.getJiraIssue = function () {
        var jira = new jira_connector_1.default({
            host: 'https://jira.rt.sv.loc',
            basic_auth: {
                base64: 'aXVseGE6TWF2aWMxMyE='
            }
        });
        var issue = jira.issue.getIssue({ issueKey: 'JWR-19' });
        console.log('Jira issue: ', issue);
        // return issue;
        return new Promise(function (resolve, reject) {
            resolve(issue);
        });
    };
    Object.defineProperty(HalloJiraWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HalloJiraWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HalloJiraWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HalloJiraWebPart;

//# sourceMappingURL=HalloJiraWebPart.js.map
