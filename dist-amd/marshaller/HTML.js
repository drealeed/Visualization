!function(t,i){"function"==typeof define&&define.amd?define(["d3","../layout/Grid","./HipieDDLMixin"],i):t.marshaller_HTML=i(t.d3,t.layout_Grid,t.marshaller_HipieDDLMixin)}(this,function(t,i,e){function n(){i.call(this),e.call(this),this.surfacePadding(0)}return n.prototype=Object.create(i.prototype),n.prototype.constructor=n,n.prototype.mixin(e),n.prototype._class+=" marshaller_HTML",n.prototype.populateContent=function(){var t=0,i=0,e=this.cellDensity();this._ddlDashboards.forEach(function(n){var o=Math.floor(Math.sqrt(n.visualizations.length));n.visualizations.forEach(function(n){if(n.newWidgetSurface){for(;null!==this.getCell(t*e,i*e);)i++,i%o===0&&(t++,i=0);this.setContent(t,i,n.newWidgetSurface)}},this)},this);var n={};this.content().forEach(function(t){var i=t.widget();i&&"layout_Surface"===i.classID()&&(i=i.widget()),i&&(n[i.id()]=t)}),this._ddlDashboards.forEach(function(t){t.visualizations.forEach(function(t,i){if(!t.properties.flyout&&!t.parentVisualization){var e=t.events.getUpdatesVisualizations(),o=e.filter(function(t){return n[t.id]}).map(function(t){return n[t.id].id()});n[t.id].indicateTheseIds(o)}})},this)},n.prototype.enter=function(t,e){i.prototype.enter.apply(this,arguments)},n.prototype.render=function(t){return this._marshallerRender(i.prototype,t),this},n.prototype.commsError=function(t,i){alert("Comms Error:\n"+t+"\n"+i)},n});