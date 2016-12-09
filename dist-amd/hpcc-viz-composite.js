define("css!src/composite/Dermatology",[],function(){}),function(t,o){"function"==typeof define&&define.amd?define("src/composite/Dermatology",["../layout/Border","../layout/Toolbar","../layout/Grid","../form/OnOff","../form/Button","../common/Icon","../other/PropertyEditor","css!./Dermatology"],o):t.composite_Dermatology=o(t.layout_Border,t.layout_Toolbar,t.layout_Grid,t.form_OnOff,t.form_Button,t.common_Icon,t.other_PropertyEditor)}(this,function(t,o,e,i,r,n,s){function a(){t.call(this),this._toolbar=(new o).title("Dermatology"),this._propEditor=(new s).show_settings(!0)}return a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.prototype._class+=" composite_Dermatology",a.prototype.publish("showToolbar",!0,"boolean","Show Toolbar"),a.prototype.publish("widget",null,"widget","Widget"),a.prototype.showProperties=function(t){if(!arguments.length)return this._showProperties;this._showProperties=t,this.rightPercentage(0).rightSize(this._showProperties?360:0).setContent("right",this._showProperties?this._propEditor:null);var o=this.widget();return o&&o.designMode&&o.designMode(this._showProperties),this},a.prototype.toggleProperties=function(){return this.showProperties(!this.showProperties())},a.prototype.enter=function(o,e){t.prototype.enter.apply(this,arguments),this.topPercentage(0).topSize(0).setContent("top",this._toolbar),this.getCell("top").surfaceShadow(!0);var r=this;this._propsButton=(new i).id(this.id()+"_props").value("Properties").on("click",function(){r.toggleProperties().render()}),this._toolbar.widgets([this._propsButton])},a.prototype.update=function(o,e){t.prototype.update.apply(this,arguments);var i=this.widget();e.style("background-color",i&&i.surfaceShadow?null:"white"),this.topPercentage(0).topSize(this.showToolbar()?32:0)},a.prototype.render=function(o){var e=this.widget();return e!==this._prevWidget&&(e&&e.surfaceShadow&&e.surfaceBackgroundColor_default("white"),this.setContent("center",e),this._propEditor.widget(e),this._prevWidget=e),t.prototype.render.apply(this,arguments)},a}),function(t,o){"function"==typeof define&&define.amd?define("src/composite/MegaChart",["../layout/Border","../chart/MultiChart","../common/Text","../other/Legend","../layout/Toolbar","../form/Select","../form/Button","../form/Input","../common/Utility"],o):t.composite_MegaChart=o(t.layout_Border,t.chart_MultiChart,t.common_Text,t.other_Legend,t.layout_Toolbar,t.form_Select,t.form_Button,t.form_Input,t.common_Utility)}(this,function(t,o,e,i,r,n,s,a,l){function h(){t.call(this),this._tag="div",this._chart=new o;var n=this;this._chart.click=function(){n.click.apply(n,arguments)},this._chart.dblclick=function(){n.dblclick.apply(n,arguments)},this._toolbar=new r,this._valueTitle=new e,this._domainTitle=new e,this._legend=new i}return h.prototype=Object.create(t.prototype),h.prototype.constructor=h,h.prototype._class+=" composite_MegaChart",h.prototype._1DChartTypes=o.prototype._1DChartTypes,h.prototype._2DChartTypes=o.prototype._2DChartTypes,h.prototype._NDChartTypes=o.prototype._NDChartTypes,h.prototype._anyChartTypes=o.prototype._anyChartTypes,h.prototype._allChartTypes=o.prototype._allChartTypes,h.prototype.publishReset(),h.prototype.publish("showToolbar",!0,"boolean","Enable/Disable Toolbar widget",null,{tags:["Basic"]}),h.prototype.publishProxy("title","_toolbar","title"),h.prototype.publish("titleFontSize",null,"number","Title Font Size (px)",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontColor",null,"html-color","Title Font Color",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontFamily",null,"string","Title Font Family",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontBold",!0,"boolean","Enable Bold Title Font",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleBackgroundColor",null,"html-color","Background Color",null,{tags:["Intermediate"],optional:!0}),h.prototype.publish("showChartSelect",!0,"boolean","Show/Hide the chartType dropdown in the toolbar",null,{tags:["Basic"]}),h.prototype.publish("showCSV",!0,"boolean","Show/Hide CSV button",null,{tags:["Basic"]}),h.prototype.publish("toolbarShowLegend",!1,"boolean","Show/Hide Legend button",null,{tags:["Basic"]}),h.prototype.publish("legendPosition","none","set","Position of the Legend widget",["none","top","right","bottom","left"],{tags:["Basic"]}),h.prototype.publishProxy("legendFormat","_legend","rainbowFormat"),h.prototype.publishProxy("legendBins","_legend","rainbowBins"),h.prototype.publishProxy("domainAxisTitle","_domainTitle","text"),h.prototype.publishProxy("valueAxisTitle","_valueTitle","text"),h.prototype.publishProxy("chartType","_chart","chartType"),h.prototype.publishProxy("chart","_chart","chart"),h.prototype.toolbarWidgets=function(t){return arguments.length?(this._toolbar.widgets(t),this):this._toolbar.widgets()},h.prototype.chartTypeDefaults=function(t){return arguments.length?(this._chart.chartTypeDefaults(t),this):this._chart.chartTypeDefaults()},h.prototype.chartTypeProperties=function(t){return arguments.length?(this._chart.chartTypeProperties(t),this):this._chart.chartTypeProperties()},h.prototype.fields=function(t){return arguments.length?(this._chart.fields(t),this):this._chart.fields()},h.prototype.columns=function(t){return arguments.length?(this._chart.columns(t),this):this._chart.columns()},h.prototype.data=function(t){return arguments.length?(this._chart.data(t),this):this._chart.data()},h.prototype.downloadCSV=function(){return l.downloadBlob("CSV",this._chart["export"]("CSV")),this},h.prototype.enter=function(o,e){t.prototype.enter.apply(this,arguments);var i=this;this.topShrinkWrap(!1).topPercentage(0).topSize(30),this._csvButton=(new s).classed({"composite_MegaChart-CSV":!0}).id(this.id()+"_csv").value("CSV"),this._csvButton.click=function(t){i.downloadCSV()},this._legendButton=(new a).classed({"composite_MegaChart-legend":!0}).id(this.id()+"_legend").type("checkbox").inlineLabel("Legend:  "),this._legendButton.click=function(t){i.render()},this._chartTypeSelect=(new n).classed({"composite_MegaChart-chartType":!0}).id(this.id()+"_chartType").selectOptions(this._allChartTypes.map(function(t){return[t.id,t.display]})).value(this.chartType()),this._chartTypeSelect.change=function(t){i.chartType(t.value()).render()},this.setContent("center",this._chart),this._legend.fixedSize(!0).targetWidget(this._chart).orientation(-1!==["top","bottom"].indexOf(this.legendPosition())?"horizontal":"vertical"),this._prevLegendPosition=this.legendPosition(),this.valueAxisTitle()&&this.setContent("left",this._valueTitle.rotation(-90)).leftShrinkWrap(!0),this.domainAxisTitle()&&this.setContent("bottom",this._domainTitle).bottomShrinkWrap(!0),"none"!==this.legendPosition()&&this.setContent(this.legendPosition(),this._legend)[this.legendPosition()+"ShrinkWrap"](!0)},h.prototype.update=function(o,e){function r(t,o,e){if(e&&-1===t.indexOf(o))t.push(o);else if(!e){var i=t.indexOf(o);i>=0&&t.splice(i,1)}}this._chartTypeSelect.value(this.chartType());var n=this.toolbarWidgets();r(n,this._csvButton,this.showCSV()),r(n,this._legendButton,this.toolbarShowLegend()),r(n,this._chartTypeSelect,this.showChartSelect()),this.toolbarWidgets(n),this._prevShowToolbar!==this.showToolbar()&&(this.setContent("top",this.showToolbar()?this._toolbar:null),this._prevShowToolbar=this.showToolbar()),this._toolbar.fontSize(this.titleFontSize()).fontColor(this.titleFontColor()).fontFamily(this.titleFontFamily()).fontBold(this.titleFontBold()).backgroundColor(this.titleBackgroundColor()),this._chart.data(this.data()),this._chart.chartType()!==this.chartType()&&this._chart.chartType(this.chartType());var s=this.legendPosition();this.toolbarShowLegend()&&!this._legendButton.checked()&&(s="none"),this._prevLegendPosition!==s&&("none"!==this._prevLegendPosition&&this.clearContent(this._prevLegendPosition),this._prevLegendPosition=s,"none"!==s&&(this._legend=(new i).fixedSize(!0).targetWidget(this.getContent("center")),this.setContent(s,this._legend),this._legend.orientation(-1!==["top","bottom"].indexOf(s)?"horizontal":"vertical"))),this._contentClasses=this.getContentClasses(),this.valueAxisTitle()&&"common_Text"!==this._contentClasses.left&&"left"!==s&&this.setContent("left",this._valueTitle.rotation(-90)),this.domainAxisTitle()&&"common_Text"!==this._contentClasses.bottom&&"bottom"!==s&&this.setContent("bottom",this._domainTitle).bottomShrinkWrap(!0),this._legend.dataFamily(this._chart.getChartDataFamily()),t.prototype.update.apply(this,arguments)},h.prototype.exit=function(o,e){t.prototype.exit.apply(this,arguments)},h.prototype.getContentClasses=function(){var t={},o=this.getContent("top"),e=this.getContent("right"),i=this.getContent("bottom"),r=this.getContent("left");return t.top=null!==o?o.classID():void 0,t.right=null!==e?e.classID():void 0,t.bottom=null!==i?i.classID():void 0,t.left=null!==r?r.classID():void 0,t},h.prototype.serializeState=function(){var t={title:this.title(),data:this.data()},o=this.chart();return o&&o.serializeState&&(t.chart=o.serializeState(),delete t.chart.data),t},h.prototype.deserializeState=function(t){if(t){this.title(t.title).data(t.data);var o=this.chart();o&&t.chart&&o.serializeState&&o.deserializeState(t.chart)}return this},h.prototype.click=function(t,o,e){console.log("Click:  "+JSON.stringify(t)+", "+o+", "+e)},h.prototype.dblclick=function(t,o,e){console.log("Double click:  "+JSON.stringify(t)+", "+o+", "+e)},h}),function(t){var o=document,e="appendChild",i="styleSheet",r=o.createElement("style");r.type="text/css",o.getElementsByTagName("head")[0][e](r),r[i]?r[i].cssText=t:r[e](o.createTextNode(t))}(".composite_Dermatology{background-color:#f8f8ff}.composite_Dermatology .common_Icon{background-color:red;opacity:.75}.composite_Dermatology .common_Icon .common_Shape{fill:#fff;stroke:#a9a9a9;cursor:pointer}.composite_Dermatology .common_Icon.show .common_Shape{fill:#d3d3d3}.composite_Dermatology .common_Icon .common_FAChar .common_Text{fill:#a9a9a9;cursor:pointer}.composite_Dermatology .other_PropertyEditor{font-family:sans-serif;font-size:11px}.composite_Dermatology .other_PropertyEditor input{font-family:sans-serif;font-size:11px;border:0}.composite_Dermatology .other_PropertyEditor .property-label{height:unset}"),define("hpcc-viz-composite",function(){});