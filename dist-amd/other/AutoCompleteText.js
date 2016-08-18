!function(t,e){"function"==typeof define&&define.amd?define(["../common/HTMLWidget","autoComplete","css!./AutoCompleteText","css!autoComplete"],e):t.other_AutoCompleteText=e(t.common_HTMLWidget,t.autoComplete)}(this,function(t,e){function o(){t.call(this),this._tag="div"}return o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype._class+=" other_AutoCompleteText",o.prototype.publish("label","Label: ","string","Label for AutoCompleteText"),o.prototype.publish("placeholder","Search...","string","Placeholder for AutoCompleteText"),o.prototype.publish("valueColumn",null,"set","Select column for autocomplete",function(){return this.columns()},{optional:!0}),o.prototype.publish("minCharsText",1,"number","Size of multiAutoCompleteText box"),o.prototype.autoCompleteTextData=function(t,e){return this.data().map(function(t,e){return{idx:e,origRow:t}})},o.prototype.enter=function(e,o){t.prototype.enter.apply(this,arguments),this._span=o.append("span"),this._label=this._span.append("label").attr("for",this.id()+"_input"),this._input=this._span.append("input").attr("id",this.id()+"_input").attr("name",this.id()+"_input_name").attr("type","text").attr("placeholder",this.placeholder())},o.prototype.update=function(o,i){if(t.prototype.update.apply(this,arguments),this._label.text(this.label()),this._prevMinCharsText!==this.minCharsText()){this._prevMinCharsText=this.minCharsText(),this._autoComplete&&this._autoComplete.destroy();var a=this;this._autoComplete=new e({selector:"#"+this.id()+"_input",minChars:this.minCharsText(),delay:150,offsetLeft:0,offsetTop:1,source:function(t,e){var o=a._db.fieldByLabel(a.valueColumn());if(o){t=t.toLowerCase();var i=a.autoCompleteTextData().filter(function(e){return e.origRow[o.idx].toLowerCase().indexOf(t)>=0}).map(function(t){return{value:t.origRow[o.idx],rowIdx:t.idx}});e(i)}},renderItem:function(t,e){e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var o=new RegExp("("+e.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+t.value+'" data-row-idx="'+t.rowIdx+'">'+t.value.replace(o,"<b>$1</b>")+"</div>"},onSelect:function(t,e,o){var i=+o.getAttribute("data-row-idx"),p=a.data()[i];a.click(a.rowToObj(p),a.valueColumn(),!0)}})}},o.prototype.exit=function(e,o){this._autoComplete&&this._autoComplete.destroy(),this._span.remove(),t.prototype.exit.apply(this,arguments)},o.prototype.click=function(t,e,o){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+o)},o});