!function(t,e){"function"==typeof define&&define.amd?define(["d3","./Class","./PropertyExt","./Utility"],e):t.common_Database=e(t.d3,t.common_Class,t.common_PropertyExt,t.common_Utility)}(this,function(t,e,r,n){function i(t){e.call(this),r.call(this),this._id=t||this._id}function s(t){t=t||!1,e.call(this),r.call(this),this._dataChecksum=t,this._dataVersion=0,this.clear()}function o(e){this._grid=e,t.rebind(this,this._grid,"checksum","fields")}function a(t,e,r){o.call(this,t),e instanceof Array||(e=[e]),this._columnIndicies=e.filter(function(t){return t}).map(function(t){switch(typeof t){case"string":return this._grid.fieldByLabel(t).idx}return t},this),r=r||function(t){return t},this._rollup=r}function u(t,e){return t instanceof Array||(t=[t]),t.filter(function(t){return""!==t}).every(e)}function c(t){return"boolean"==typeof t}function h(t){return"number"==typeof t||!isNaN(t)}function f(t){return"string"==typeof t}function p(e,r){for(var n=0;n<e.length;++n){var i=t.time.format(e[n]).parse(r);if(i)return _=e[n],e[n]}return null}function l(t){return p(b,t)}function d(t){return p(k,t)}function m(t){return p(v,t)}function y(t){return["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","AS","DC","FM","GU","MH","MP","PW","PR","VI"].indexOf(String(t).toUpperCase())>=0}i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.prototype.mixin(r),i.prototype._class+=" common_Database.Field",i.prototype.id=function(){return this._id},i.prototype.checksum=function(){return n.checksum(this.label()+this.type()+this.mask()+this.format())},i.prototype.publish("label","","string","Label",null,{optional:!0}),i.prototype.publish("type","","set","Type",["","string","number","boolean","time","hidden"],{optional:!0}),i.prototype.publish("mask","","string","Time Mask",null,{disable:function(t){return"time"!==t.type()},optional:!0}),i.prototype.publish("format","","string","Format",null,{optional:!0}),i.prototype.typeTransformer=function(t){switch(this.type()){case"number":return Number(t);case"string":return String(t);case"boolean":return"string"==typeof t&&["false","off","0"].indexOf(t.toLowerCase())>=0?!1:Boolean(t);case"time":case"date":return this.maskTransformer(t)}return t},i.prototype.maskTransformer=function(t){return this.formatter(this.mask()).parse(t)},i.prototype.formatTransformer=function(t){return this.formatter(this.format())(t)},i.prototype.parse=function(t){if(!t)return t;try{return this.typeTransformer(t)}catch(e){return console.log("Unable to parse:  "+t),null}},i.prototype.transform=function(t){if(!t)return t;try{return this.formatTransformer(this.typeTransformer(t))}catch(e){return console.log("Unable to transform:  "+t),null}},i.prototype.clone=function(){function t(t,r){t[r+"_default"](e[r+"_default"]()),e[r+"_exists"]()&&t[r](e[r]())}var e=this,r=new i(this._id);return t(r,"label"),t(r,"type"),t(r,"mask"),t(r,"format"),r},i.prototype.formatter=function(e){var r;if(!e)return r=function(t){return t},r.parse=function(t){return t},r;switch(this.type()){case"time":case"date":return t.time.format(e)}return r=t.format(e),r.parse=function(t){return t},r},s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.prototype.mixin(r),s.prototype._class+=" common_Database.Grid",s.prototype.publish("fields",[],"propertyArray","Fields"),s.prototype.clear=function(){return this.fields([]),this._data=[],this._dataChecksums=[],++this._dataVersion,this},s.prototype.resetColumns=function(t){var e=this.fields();this.legacyColumns([]),this.legacyColumns(e.map(function(t){return t.label()}))},s.prototype.legacyColumns=function(t,e){return arguments.length?(this.row(0,t,e),this):this.row(0)},s.prototype.legacyData=function(t,e){return s.prototype.data.apply(this,arguments)},s.prototype.field=function(t){return this.fields()[t]};var g=s.prototype.fields;s.prototype.fields=function(t,e){return arguments.length?g.call(this,e?t.map(function(t){return t.clone()}):t):g.apply(this,arguments)},s.prototype.fieldByLabel=function(t,e){return this.fields().filter(function(r,n){return r.idx=n,e?r.label().toLowerCase()===t.toLowerCase():r.label()===t})[0]},s.prototype.data=function(t,e){return arguments.length?(this._data=e?t.map(function(t){return t.map(function(t){return t})}):t,this._dataCalcChecksum(),this):this._data},s.prototype.parsedData=function(){var t=this;return this._data.map(function(e){return e.map(function(e,r){return t.fields()[r].parse(e)})})},s.prototype.formattedData=function(){var t=this;return this._data.map(function(e){return e.map(function(e,r){return t.fields()[r].transform(e)})})},s.prototype.fieldsChecksum=function(){return n.checksum(this.fields().map(function(t){return t.checksum()}))},s.prototype.dataChecksum=function(){return n.checksum(this._dataChecksum?this._dataChecksums:this._dataVersion)},s.prototype.checksum=function(){return n.checksum([this.dataChecksum(),this.fieldsChecksum()])},s.prototype._dataCalcChecksum=function(t){return++this._dataVersion,this._dataChecksum&&(arguments.length?this._dataChecksums[t]=n.checksum(this._data[t]):this._dataChecksums=this._data.map(function(t){return n.checksum(t)})),this},s.prototype.row=function(t,e,r){if(arguments.length<2)return 0===t?this.fields().map(function(t){return t.label()}):this._data[t-1];if(0===t){var n=this.fields();this.fields(e.map(function(t,e){return r?(n[e]||new i).label_default(t):(n[e]||new i).label(t)},this))}else this._data[t-1]=e,this._dataCalcChecksum(t-1);return this},s.prototype.rows=function(t){return arguments.length?(this.row(0,t[0]),this._data=t.filter(function(t,e){return e>0}),this._dataCalcChecksum(),this):[this.row(0)].concat(this._data)},s.prototype.column=function(t,e){return arguments.length<2?[this.fields()[t].label()].concat(this._data.map(function(e,r){return e[t]})):(e.forEach(function(r,n){0===n?this.fields()[t]=(new i).label(e[0]):(this._data[n-1][t]=r,this._dataCalcChecksum(n-1))},this),this)},s.prototype.columnData=function(t,e){return arguments.length<2?this._data.map(function(e,r){return e[t]}):(e.forEach(function(e,r){this._data[r][t]=e,this._dataCalcChecksum(r)},this),this)},s.prototype.columns=function(t){return arguments.length?(t.forEach(function(e,r){this.column(r,t[r])},this),this):this.fields().map(function(t,e){return this.column(e)},this)},s.prototype.cell=function(t,e,r){return arguments.length<3?this.row(t)[e]:(0===t?this.fields()[e]=(new i).label(r):(this._data[t][e]=r,this._dataCalcChecksum(t)),this)},s.prototype.grid=function(t){return s.prototype.rows.apply(this,arguments)},s.prototype.hipieMapSortArray=function(t){return t.map(function(t){var e=!1;0===t.indexOf("-")&&(t=t.substring(1),e=!0);var r=this.fieldByLabel(t,!0);return r||console.log("Grid.prototype.hipieMapSortArray:  Invalid sort array - "+t),{idx:r?r.idx:-1,reverse:e}},this).filter(function(t){return t.idx>=0})},s.prototype.hipieMappings=function(e,r){function n(t,e,r,i){var s=r.map(function(t){return t});s[e]=t.key,t.values instanceof Array?t.values.forEach(function(t){n(t,e+1,s,i)}):(s[e+1]=t.values,i.push(s))}if(r=r||"",!this.fields().length||!this._data.length)return[];var i=-1,s=[],o=[],a=-1,u=[];if(e.forEach(function(t,e){if(t instanceof Object)switch(t["function"]){case"SUM":case"AVE":case"MIN":case"MAX":i>=0&&console.log("Rollup field already exists - there should only be one?"),i=e,t.params.forEach(function(t){var e=this.fieldByLabel(t.param1,!0);e?s.push(e.idx):console.log("Grid.prototype.hipieMappings:  Invalid rollup field - "+t.param1)},this);break;case"SCALE":a>=0&&console.log("Scale field already exists - there should only be one?"),a=e,t.params.forEach(function(t){var e=this.fieldByLabel(t.param1,!0);if(e){var r=e.idx,n=t.param2;u.push(function(t){return t[r]/n})}else console.log("Grid.prototype.hipieMappings:  Invalid scale field - "+t.param1)},this);break;default:console.log("Unknown field function - "+t["function"])}else if(t.indexOf("_AVE")===t.length-4&&this.fieldByLabel(t.substring(0,t.length-4)+"_SUM",!0)&&this.fieldByLabel("base_count",!0)){console.log("Deprecated - Symposium AVE Hack");var n=this.fieldByLabel(t.substring(0,t.length-4)+"_SUM",!0),c=this.fieldByLabel("base_count",!0);o.push(n.idx),u.push(function(t){return t[n.idx]/t[c.idx]})}else{var h=this.fieldByLabel(t,!0);h?(o.push(h.idx),u.push(function(t){return void 0!==t[h.idx]&&null!==t[h.idx]?t[h.idx]:r})):(console.log("Unable to locate '"+t+"' in server response."),u.push(function(t){return r}))}},this),i>=0){var c=e[i],h=[];for(var f in c.params)h.push(c.params[f]);var p=this.rollup(o,function(e){switch(c["function"]){case"SUM":return t.sum(e,function(t){return t[s[0]]});case"AVE":return t.mean(e,function(t){return t[s[0]]});case"MIN":return t.min(e,function(t){return t[s[0]]});case"MAX":return t.max(e,function(t){return t[s[0]]})}return console.log("Unsupported Mapping Function:  "+c["function"]),0}),l=[];return p instanceof Array?p.forEach(function(t){n(t,0,[],l)}):l.push([p]),l}return this._data.map(function(t){var e=[];return u.forEach(function(r){e.push(r(t))}),e})},o.prototype.constructor=o,o.prototype.grid=function(){return this._grid},o.prototype.columns=function(t){return arguments.length?(this._grid.legacyColumns(t),this):this._grid.legacyColumns()},o.prototype.rawData=function(t){return arguments.length?(this._grid.legacyData(t),this):this._grid.legacyData()},o.prototype.formattedData=function(){return this._formattedDataChecksum!==this._grid.checksum()&&(this._formattedDataChecksum=this._grid.checksum(),this._formattedData=this._grid.formattedData()),this._formattedData},o.prototype.parsedData=function(){return this._parsedDataChecksum!==this._grid.checksum()&&(this._parsedDataChecksum=this._grid.checksum(),this._parsedData=this._grid.parsedData()),this._parsedData},o.prototype._whichData=function(t){if(t){if(t.parsed)return this.formattedData();if(t.formatted)return this.formattedData()}return this.rawData()},o.prototype.data=function(t){return o.prototype.rawData.apply(this,arguments)},a.prototype=Object.create(o.prototype),a.prototype.constructor=a,a.prototype.nest=function(){if(this._nestChecksum!==this._grid.checksum()){this._nestChecksum=this._grid.checksum();var e=t.nest();this._columnIndicies.forEach(function(t){e.key(function(e){return e[t]})}),this._nest=e.rollup(this._rollup)}return this._nest},a.prototype.entries=function(t){return this.nest().entries(this._whichData(t))},a.prototype.map=function(t){return this.nest().map(this._whichData(t))},a.prototype.d3Map=function(e){return this.nest().map(this._whichData(e),t.map)},a.prototype._walkData=function(t,e){e=e||[];var r=[];return t.forEach(function(t){t instanceof Array?r.push(e.concat([t])):r=r.concat(this._walkData(t.values,e.concat([t.key])))},this),r},a.prototype.data=function(t){return this._walkData(this.entries(t))},s.prototype.legacyView=function(){return new o(this)},s.prototype.nestView=function(t){return new a(this,t)},s.prototype.rollupView=function(t,e){return new a(this,t,e)},s.prototype.aggregateView=function(e,r,n,i){var s=this;return new a(this,e,function(e){switch(r){case null:case void 0:case"":return e.aggregate=e.length,e;default:var o=s.legacyColumns(),a=o.indexOf(n),u=o.indexOf(i);return e.aggregate=t[r](e,function(t){return(+t[a]-(u>=0?+t[u]:0))/(u>=0?+t[u]:1)}),e}})},s.prototype._nest=function(e,r){e instanceof Array||(e=[e]);var n=t.nest();return e.forEach(function(t){n.key(function(e){return e[t]})}),n},s.prototype.nest=function(t){return this._nest(t).entries(this._data)},s.prototype.rollup=function(t,e){return this._nest(t).rollup(e).entries(this._data)},s.prototype.length=function(){return this._data.length+1},s.prototype.width=function(){return this.fields().length},s.prototype.pivot=function(){return this.resetColumns(),this.rows(this.columns()),this},s.prototype.clone=function(t){return(new s).fields(this.fields(),t).data(this.data(),t)},s.prototype.filter=function(t){var e={};return this.row(0).forEach(function(t,r){e[t]=r}),(new s).fields(this.fields(),!0).data(this.data().filter(function(r){for(var n in t)if(t[n]!==r[e[n]])return!1;return!0}))};var _=null;s.prototype.analyse=function(t){t instanceof Array||(t=[t]);var e=[];return t.forEach(function(t){var r=this.rollup(t,function(t){return t.length});e.push(r);var n=r.map(function(t){return t.key});this.fields()[t].isBoolean=u(n,c),this.fields()[t].isNumber=u(n,h),this.fields()[t].isString=!this.fields()[t].isNumber&&u(n,f),this.fields()[t].isUSState=this.fields()[t].isString&&u(n,y),this.fields()[t].isDateTime=this.fields()[t].isString&&u(n,l),this.fields()[t].isDateTimeFormat=_,this.fields()[t].isDate=!this.fields()[t].isDateTime&&u(n,d),this.fields()[t].isDateFormat=_,this.fields()[t].isTime=this.fields()[t].isString&&!this.fields()[t].isDateTime&&!this.fields()[t].isDate&&u(n,m),this.fields()[t].isTimeFormat=_},this),e},s.prototype.jsonObj=function(t){return arguments.length?(this.clear(),this.data(t.map(function(t,e){var r=[];for(var n in t){var s=this.row(0).indexOf(n);0>s&&(s=this.fields().length,this.fields().push((new i).label(n))),r[s]=t[n]}return r},this)),this):this._data.map(function(t){var e={};return this.row(0).forEach(function(r,n){e[r]=t[n]}),e},this)},s.prototype.json=function(t){return arguments.length?(this.jsonObj(JSON.parse(t)),this):JSON.stringify(this.jsonObj(),null,"  ")},s.prototype.csv=function(e){return arguments.length?(this.jsonObj(t.csv.parse(e)),this):t.csv.formatRows(this.grid())},s.prototype.tsv=function(e){return arguments.length?(this.jsonObj(t.tsv.parse(e)),this):t.tsv.formatRows(this.grid())};var b=[],k=["%Y-%m-%d","%Y%m%d"],v=["%H:%M:%S.%LZ","%H:%M:%SZ","%H:%M:%S"];return k.forEach(function(t){v.forEach(function(e){b.push(t+"T"+e)})}),{Field:i,Grid:s}});