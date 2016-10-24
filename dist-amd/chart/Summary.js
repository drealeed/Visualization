!function(t,l){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../api/I2DChart","css!font-awesome","css!./Summary"],l):t.chart_Summary=l(t.d3,t.common_HTMLWidget,t.api_I2DChart)}(this,function(t,l,i){function o(){l.call(this),this._tag="div",this._drawStartPos="center",this.playInterval(this.playInterval()),this._playIntervalIdx=0}var e="text",n="html";o.prototype=Object.create(l.prototype),o.prototype.constructor=o,o.prototype["implements"](i.prototype),o.prototype._class+=" chart_Summary",o.prototype.publish("iconColumn",null,"set","Select display value",function(){return this.columns()},{optional:!0}),o.prototype.publish("icon","fa-briefcase","string","FA Char icon class",null,{disable:function(t){return t.iconColumn()}}),o.prototype.publish("labelColumn",null,"set","Select display value",function(){return this.columns()},{optional:!0}),o.prototype.publish("labelHTML",!1,"boolean","Allow HTML",null),o.prototype.publish("valueColumn",null,"set","Select display value",function(){return this.columns()},{optional:!0}),o.prototype.publish("valueHTML",!1,"boolean","Allow HTML"),o.prototype.publish("moreTextColumn",null,"set","Select display value",function(){return this.columns()},{optional:!0}),o.prototype.publish("moreText","More Info","string","More text",null,{disable:function(t){return t.moreTextColumn()}}),o.prototype.publish("moreTextHTML",!1,"boolean","Allow HTML"),o.prototype.publish("moreIcon","fa-info-circle","string","FA Char icon class"),o.prototype.publish("colorFillColumn",null,"set","Column for color",function(){return this.columns()},{optional:!0}),o.prototype.publish("colorFill","#3498db","html-color","Fill Color",null,{disable:function(t){return t.colorFillColumn()}}),o.prototype.publish("colorStrokeColumn",null,"set","Column for color",function(){return this.columns()},{optional:!0}),o.prototype.publish("colorStroke","#ffffff","html-color","Fill Color",null,{disable:function(t){return t.colorStrokeColumn()}}),o.prototype.publish("fixedSize",!0,"boolean","Fix Size to Min Width/Height"),o.prototype.publish("minWidth",225,"number","Minimum Width"),o.prototype.publish("minHeight",150,"number","Minimum Height"),o.prototype.publish("playInterval",null,"number","Play Interval",null,{optional:!0});var r=o.prototype.playInterval;return o.prototype.playInterval=function(t){var l=r.apply(this,arguments);if(arguments.length){this._playIntervalHandle&&clearInterval(this._playIntervalHandle);var i=this;t&&(this._playIntervalHandle=setInterval(function(){i._playIntervalIdx++,i._renderCount&&i.data().length&&i.render()},t))}return l},o.prototype.summaryData=function(){var t=0;this.labelColumn_exists()&&(t=this.columns().indexOf(this.labelColumn()));var l;this.iconColumn_exists()&&(l=this.columns().indexOf(this.iconColumn()));var i=1;this.valueColumn_exists()&&(i=this.columns().indexOf(this.valueColumn()));var o;this.moreTextColumn_exists()&&(o=this.columns().indexOf(this.moreTextColumn()));var e;this.colorFillColumn_exists()&&(e=this.columns().indexOf(this.colorFillColumn()));var n;return this.colorStrokeColumn_exists()&&(n=this.columns().indexOf(this.colorStrokeColumn())),this.formattedData().map(function(r){return{icon:void 0===l?this.icon():r[l],label:r[t],value:r[i],more:void 0===o?this.moreText():r[o],fill:void 0===e?this.colorFill():r[e],stroke:void 0===n?this.colorStroke():r[n]}},this)},o.prototype.enter=function(t,i){l.prototype.enter.apply(this,arguments),this._mainDiv=i.append("div");var o=this;this._headerDiv=this._mainDiv.append("h2").on("click",function(t){o.click(o.data()[o._playIntervalIdx],o.columns()[1],!0)}).on("dblclick",function(t){o.dblclick(o.data()[o._playIntervalIdx],o.columns()[1],!0)}),this._textDiv=this._mainDiv.append("div").attr("class","text").on("click",function(t){o.click(o.data()[o._playIntervalIdx],o.columns()[1],!0)}).on("dblclick",function(t){o.dblclick(o.data()[o._playIntervalIdx],o.columns()[1],!0)})},o.prototype.update=function(i,o){l.prototype.update.apply(this,arguments),this.data().length;var r=this.summaryData();this._playIntervalIdx>=r.length&&(this._playIntervalIdx=0);var s=this._playIntervalIdx<r.length?r[this._playIntervalIdx]:["",""];o.style({width:this.fixedSize()?this.minWidth_exists()?this.minWidth()+"px":null:"100%",height:this.fixedSize()?this.minHeight_exists()?this.minHeight()+"px":null:"100%"}),this._mainDiv.attr("class","content bgIcon "+s.icon).transition().style({"background-color":s.fill,color:s.stroke,"min-width":this.minWidth_exists()?this.minWidth()+"px":null,"min-height":this.minHeight_exists()?this.minHeight()+"px":null}),this._headerDiv.transition().style("color",s.stroke)[this.valueHTML()?n:e](s.value),this._textDiv[this.valueHTML()?n:e](s.label);var a=this,u=this._mainDiv.selectAll(".more").data([s.more]);u.enter().append("div").attr("class","more").on("click",function(t){var l={};l[a.columns()]=a.data(),a.click(l,"more")}).each(function(l){var i=t.select(this);i.append("i"),i.append("span")}),u.transition().style("background-color",t.rgb(s.fill).darker(.75)),u.select("i").attr("class","fa "+this.moreIcon()),u.select("span")[this.moreTextHTML()?n:e](function(t){return t}),u.exit().remove()},o.prototype.exit=function(t,i){l.prototype.exit.apply(this,arguments)},o});