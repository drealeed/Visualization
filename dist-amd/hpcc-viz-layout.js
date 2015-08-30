define("css!src/layout/Surface",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/layout/Surface",["d3","../common/HTMLWidget","../common/TextBox","css!./Surface","css!font-awesome"],t):e.layout_Surface=t(e.d3,e.common_HTMLWidget,e.common_TextBox)}(this,function(e,t,n){function r(){t.call(this),this._tag="div",this._surfaceButtons=[]}return r.prototype=Object.create(t.prototype),r.prototype._class+=" layout_Surface",r.prototype.publish("surfaceTitlePadding",null,"number","Title Padding (px)",null,{tags:["Basic"]}),r.prototype.publish("surfaceTitleFontSize",null,"number","Title Font Size (px)",null,{tags:["Basic"]}),r.prototype.publish("surfaceTitleFontColor",null,"html-color","Title Font Color",null,{tags:["Basic"]}),r.prototype.publish("surfaceTitleFontFamily",null,"string","Title Font Family",null,{tags:["Basic"]}),r.prototype.publish("surfaceTitleFontBold",!0,"boolean","Enable Bold Title Font",null,{tags:["Basic"]}),r.prototype.publish("surfaceTitleBackgroundColor",null,"html-color","Title Background Color",null,{tags:["Basic"]}),r.prototype.publish("surfacePadding",null,"string","Surface Padding (px)",null,{tags:["Intermediate"]}),r.prototype.publish("surfaceBackgroundColor",null,"html-color","Surface Background Color",null,{tags:["Basic"]}),r.prototype.publish("surfaceBorderWidth",null,"number","Surface Border Width (px)",null,{tags:["Basic"]}),r.prototype.publish("surfaceBorderColor",null,"html-color","Surface Border Color",null,{tags:["Basic"]}),r.prototype.publish("surfaceBorderRadius",null,"number","Surface Border Radius (px)",null,{tags:["Basic"]}),r.prototype.publish("title","","string","Title",null,{tags:["Intermediate"]}),r.prototype.publish("surfaceTitleAlignment","center","set","Title Alignment",["left","right","center"],{tags:["Basic"]}),r.prototype.publish("widget",null,"widget","Widget",null,{tags:["Private"]}),r.prototype.publish("buttonAnnotations",[],"array","Button Array",null,{tags:["Private"]}),r.prototype.testData=function(){return this.title("ABC"),this.widget((new r).widget((new n).testData())),this.buttonAnnotations([{id:"button_1",label:"",width:60,padding:"5px","class":"",font:"FontAwesome",callback:function(e){console.log("Click Override on button "+e)}},{id:"button_2",label:"",width:30,padding:"5px","class":"",font:"FontAwesome",callback:function(e){console.log("Click Override on button "+e)}}]),this},r.prototype.widgetSize=function(e,t){var n=this.clientWidth(),r=this.clientHeight();return this.title()&&(r-=this.calcHeight(e)),r-=this.calcFrameHeight(t),n-=this.calcFrameWidth(t),{width:n,height:r}},r.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments)},r.prototype.update=function(n,r){t.prototype.update.apply(this,arguments);var i=this;r.style("border-width",this.surfaceBorderWidth()+"px").style("border-color",this.surfaceBorderColor()).style("border-radius",this.surfaceBorderRadius()+"px").style("background-color",this.surfaceBackgroundColor());var s=r.selectAll(".surfaceTitle").data(this.title()?[this.title()]:[]);s.enter().insert("h3","div").attr("class","surfaceTitle"),s.text(function(e){return e}).style("text-align",this.surfaceTitleAlignment()).style("color",this.surfaceTitleFontColor()).style("font-size",this.surfaceTitleFontSize()+"px").style("font-family",this.surfaceTitleFontFamily()).style("font-weight",this.surfaceTitleFontBold()?"bold":"normal").style("background-color",this.surfaceTitleBackgroundColor()).style("padding",this.surfaceTitlePadding()+"px"),s.exit().remove();var o=r.select(".surfaceTitle"),u=o.append("div").attr("class","html-button-container").selectAll(".surface-button").data(this.buttonAnnotations());u.enter().append("button").classed("surface-button",!0).each(function(t,n){var r=i._surfaceButtons[n]=e.select(this).attr("class","surface-button "+t.class).attr("id",t.id).style("padding",t.padding).style("width",t.width).style("height",t.height).style("cursor","pointer");t.font==="FontAwesome"?r.append("i").attr("class","fa").text(function(e){return t.label}).on("click",function(e){i.click(e)}):r.text(function(e){return t.label}).on("click",function(e){i.click(e)})}),u.exit().each(function(t,n){var r=e.select(this);delete i._surfaceButtons[n],r.remove()});var a=r.selectAll("#"+this._id+" > .surfaceWidget").data(this.widget()?[this.widget()]:[],function(e){return e._id});a.enter().append("div").attr("class","surfaceWidget").each(function(e){e.target(this)}),a.style("padding",this.surfacePadding()?this.surfacePadding()+"px":null).each(function(t){var n=i.widgetSize(r.select("h3"),e.select(this));n.width<0&&(n.width=0),n.height<0&&(n.height=0),t.resize({width:n.width,height:n.height})}),a.exit().each(function(e){e.target(null)}).remove()},r.prototype.exit=function(e,n){this.widget()&&(this.widget(null),this.render()),t.prototype.exit.apply(this,arguments)},r.prototype.render=function(e){var n=this;return t.prototype.render.call(this,function(t){n.widget()?n.widget().render(function(t){e&&e(t)}):e&&e(t)})},r.prototype.click=function(e){console.log("Clicked: "+e.id)},r}),function(e,t){typeof define=="function"&&define.amd?define("src/layout/Cell",["./Surface"],t):e.layout_Cell=t(e.layout_Surface)}(this,function(e){function t(){e.call(this),this._dragHandles=["nw","n","ne","e","se","s","sw","w"]}return t.prototype=Object.create(e.prototype),t.prototype._class+=" layout_Cell",t.prototype.publish("gridRow",0,"number","Grid Row Position",null,{tags:["Private"]}),t.prototype.publish("gridCol",0,"number","Grid Column Position",null,{tags:["Private"]}),t.prototype.publish("gridRowSpan",1,"number","Grid Row Span",null,{tags:["Private"]}),t.prototype.publish("gridColSpan",1,"number","Grid Column Span",null,{tags:["Private"]}),t.prototype.publish("handleSize",6,"number","Grid Row Position",null,{tags:["Private"]}),t.prototype.enter=function(t,n){e.prototype.enter.apply(this,arguments),n.classed("layout_Surface",!0)},t.prototype.update=function(t,n){e.prototype.update.apply(this,arguments);var r=this,i,s=n.selectAll(".dragHandle").data(this._dragHandles,function(e){return e});s.enter().append("div").attr("class",function(e){return"dragHandle dragHandle_"+e}).style("position","absolute"),s.style({padding:"0px",margin:"0px",left:function(e){switch(e){case"ne":case"e":case"se":return r._size.width-r.handleSize()+"px";case"nw":case"w":case"sw":return"0px";case"n":return i=0,r._dragHandles.indexOf("nw")!==-1&&i++,r.handleSize()*i+"px";case"s":return i=0,r._dragHandles.indexOf("sw")!==-1&&i++,r.handleSize()*i+"px"}},top:function(e){switch(e){case"nw":case"n":case"ne":return"0px";case"e":return i=0,r._dragHandles.indexOf("ne")!==-1&&i++,r.handleSize()*i+"px";case"w":return i=0,r._dragHandles.indexOf("nw")!==-1&&i++,r.handleSize()*i+"px";case"sw":case"s":case"se":return r._size.height-r.handleSize()+"px"}},width:function(e){switch(e){case"n":return i=0,r._dragHandles.indexOf("ne")!==-1&&i++,r._dragHandles.indexOf("nw")!==-1&&i++,r._size.width-r.handleSize()*i+"px";case"s":return i=0,r._dragHandles.indexOf("se")!==-1&&i++,r._dragHandles.indexOf("sw")!==-1&&i++,r._size.width-r.handleSize()*i+"px";default:return r.handleSize()+"px"}},height:function(e){switch(e){case"w":return i=0,r._dragHandles.indexOf("nw")!==-1&&i++,r._dragHandles.indexOf("sw")!==-1&&i++,r._size.height-r.handleSize()*i+"px";case"e":return i=0,r._dragHandles.indexOf("ne")!==-1&&i++,r._dragHandles.indexOf("se")!==-1&&i++,r._size.height-r.handleSize()*i+"px";default:return r.handleSize()+"px"}}}),s.exit().remove()},t}),define("css!src/layout/Border",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/layout/Border",["d3","../common/HTMLWidget","./Cell","../common/Text","css!./Border"],t):e.layout_Border=t(e.d3,e.common_HTMLWidget,e.layout_Cell,e.common_Text)}(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._colCount=0,this._rowCount=0,this._colSize=0,this._rowSize=0,this.content([])}return i.prototype=Object.create(t.prototype),i.prototype._class+=" layout_Border",i.prototype.publish("gutter",4,"number","Gap Between Widgets",null,{tags:["Private"]}),i.prototype.publish("designMode",!1,"boolean","Design Mode",null,{tags:["Private"]}),i.prototype.publish("layoutType","Default","set","This determines the placement/size of the Cells relative to the Border._target element",["Default"],{tags:["Private"]}),i.prototype.publish("topCellSize",100,"number","Height of the 'Top' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("leftCellSize",150,"number","Width of the 'Left' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("rightCellSize",250,"number","Width of the 'Right' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("bottomCellSize",80,"number","Height of the 'Bottom' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("topCellPercentage",0,"number","Percentage (of parent) Height of the 'Top' Cell",null,{tags:["Private"]}),i.prototype.publish("leftCellPercentage",0,"number","Percentage (of parent) Width of the 'Left' Cell",null,{tags:["Private"]}),i.prototype.publish("rightCellPercentage",0,"number","Percentage (of parent) Width of the 'Right' Cell",null,{tags:["Private"]}),i.prototype.publish("bottomCellPercentage",0,"number","Percentage (of parent) Height of the 'Bottom' Cell",null,{tags:["Private"]}),i.prototype.publish("cellPadding","0px","string","Cell Padding (px)",null,{tags:["Intermediate"]}),i.prototype.publish("content",[],"widgetArray","widgets",null,{tags:["Private"]}),i.prototype.publish("sectionTypes",[],"array","Section Types sharing an index with 'content' - Used to determine position/size.",null,{tags:["Private"]}),i.prototype.testData=function(){return this.leftCellSize(64).rightCellSize(64).setContent("topSection",(new r).testData()).setContent("rightSection",(new r).testData()).setContent("bottomSection",(new r).testData()).setContent("leftSection",(new r).testData()).setContent("centerSection",(new r).testData()),this},i.prototype.applyLayoutType=function(e){var t=this.borderLayoutObject(e);for(var n in this.content())this.content()[n]._fixedLeft=t[this.sectionTypes()[n]].left,this.content()[n]._fixedTop=t[this.sectionTypes()[n]].top,this.content()[n]._fixedWidth=t[this.sectionTypes()[n]].width,this.content()[n]._fixedHeight=t[this.sectionTypes()[n]].height,this.content()[n]._dragHandles=this.cellSpecificDragHandles(this.sectionTypes()[n])},i.prototype.cellSpecificDragHandles=function(e){switch(this.layoutType()){default:switch(e){case"topSection":return["s"];case"rightSection":return["w"];case"bottomSection":return["n"];case"leftSection":return["e"];case"centerSection":return[]}}},i.prototype.borderLayoutObject=function(e){function g(e){e.width.px=typeof e.width.px!="undefined"?e.width.px:0,e.width["%"]=typeof e.width["%"]!="undefined"?e.width["%"]:0,e.height.px=typeof e.height.px!="undefined"?e.height.px:0,e.height["%"]=typeof e.height["%"]!="undefined"?e.height["%"]:0;var t={width:e.width.px+e.width["%"]/100*m.width,height:e.height.px+e.height["%"]/100*m.height,top:e.top.px+e.top["%"]/100*m.height+u.gutter()/2,left:e.left.px+e.left["%"]/100*m.width+u.gutter()/2};return t}var t,n,r,i,s,o={},u=this,a,f,l,c,h,p,d,v,m=this.target().getBoundingClientRect();switch(e){default:this.sectionTypes().indexOf("topSection")!==-1&&(a=this.topCellSize(),f=this.topCellPercentage()),this.sectionTypes().indexOf("bottomSection")!==-1&&(l=this.bottomCellSize(),c=this.bottomCellPercentage()),this.sectionTypes().indexOf("leftSection")!==-1&&(h=this.leftCellSize(),p=this.leftCellPercentage()),this.sectionTypes().indexOf("rightSection")!==-1&&(d=this.rightCellSize(),v=this.rightCellPercentage()),t=g({width:{px:0,"%":100},height:{px:a,"%":f},top:{px:0,"%":0},left:{px:0,"%":0}}),n=g({width:{px:0,"%":100},height:{px:l,"%":c},top:{px:0,"%":100},left:{px:0,"%":0}}),n.top-=n.height,i=g({width:{px:h,"%":p},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:0,"%":0}}),r=g({width:{px:d,"%":v},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:0,"%":100}}),r.left-=r.width,s=g({width:{px:-r.width-i.width,"%":100},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:i.width,"%":0}}),o.topSection=t,o.bottomSection=n,o.rightSection=r,o.leftSection=i,o.centerSection=s}return o},i.prototype.clearContent=function(){this.content(this.content().filter(function(e){return e.target(null),!1})),this.sectionTypes([])},i.prototype.setContent=function(e,t,r){r=typeof r!="undefined"?r:"";var i=this.sectionTypes();if(t){var s=(new n).widget(t).title(r);this.content().push(s),i.push(e)}return this.sectionTypes(i),this},i.prototype.getContent=function(e){var t=null;return this.content().some(function(n){return n.widget()._id===e?(t=n.widget(),!0):!1}),t},i.prototype.getCellSize=function(e){switch(this.sectionTypes()[e]){case"topSection":return this.topCellSize();case"rightSection":return this.rightCellSize();case"bottomSection":return this.bottomCellSize();case"leftSection":return this.leftCellSize()}},i.prototype.changeCellSize=function(e,t){switch(this.sectionTypes()[e]){case"topSection":this.topCellSize(this.topCellSize()+t);break;case"rightSection":this.rightCellSize(this.rightCellSize()+t);break;case"bottomSection":this.bottomCellSize(this.bottomCellSize()+t);break;case"leftSection":this.leftCellSize(this.leftCellSize()+t);break;case"centerSection":this.centerCellSize(this.centerCellSize()+t)}},i.prototype.overHandle=function(e){var t="",n=this._dragCell.handleSize(),r=this._offsetY+this._dragCell._fixedTop-this.gutter()/2,i=this._offsetX+this._dragCell._fixedLeft-this.gutter()/2,s=this._dragCell._fixedWidth,o=this._dragCell._fixedHeight;return Math.ceil(r+o-this.gutter())>=e.clientY&&Math.floor(r+o-n-this.gutter())<=e.clientY?t="s":Math.floor(r)<=e.clientY&&Math.ceil(r+n)>=e.clientY&&(t="n"),Math.ceil(i+s-this.gutter())>=e.clientX&&Math.floor(i+s-n-this.gutter())<=e.clientX?t+="e":Math.floor(i)<=e.clientX&&Math.ceil(i+n)>=e.clientX&&(t+="w"),t},i.prototype.setLayoutOffsets=function(){this._offsetX=this._element.node().getBoundingClientRect().left+this.gutter()/2,this._offsetY=this._element.node().getBoundingClientRect().top+this.gutter()/2},i.prototype.dragStart=function(t,n){e.event.sourceEvent.stopPropagation();var r=this;this._dragCell=t,this._dragCellStartSize=this.getCellSize(n),r._handle=r.overHandle(e.event.sourceEvent),r._dragCell._dragHandles.indexOf(r._handle)===-1&&(r._handle=undefined),this._dragPrevX=e.event.sourceEvent.clientX,this._dragPrevY=e.event.sourceEvent.clientY},i.prototype.dragTick=function(t,n){if(this._handle){var r=this._dragPrevX-e.event.sourceEvent.clientX,i=this._dragPrevY-e.event.sourceEvent.clientY;switch(this._sectionTypeArr[n]){case"topSection":i!==0&&this.changeCellSize(n,-i);break;case"rightSection":r!==0&&this.changeCellSize(n,r);break;case"bottomSection":i!==0&&this.changeCellSize(n,i);break;case"leftSection":r!==0&&this.changeCellSize(n,-r);break;case"centerSection":}this._dragPrevX=e.event.sourceEvent.clientX,this._dragPrevY=e.event.sourceEvent.clientY}this.render()},i.prototype.dragEnd=function(e){this.render()},i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),n.style("position","relative"),this.dropDiv=n.append("div"),this.contentDiv=n.append("div"),this._scrollBarWidth=this.getScrollbarWidth()},i.prototype.update=function(n,r){t.prototype.update.apply(this,arguments),this._sectionTypeArr=this.sectionTypes();var i=this;this.setLayoutOffsets();var s=this.contentDiv.selectAll(".cell_"+this._id).data(this.content(),function(e){return e._id});s.enter().append("div").attr("class","cell_"+this._id).style("position","absolute").each(function(e){e.target(this)});var o=e.behavior.drag().on("dragstart",function(e,t){i.dragStart.call(i,e,t)}).on("drag",function(e,t){i.dragTick.call(i,e,t)}).on("dragend",function(e,t){i.dragEnd.call(i,e,t)});this.designMode()?this.contentDiv.selectAll(".cell_"+this._id).call(o):this.contentDiv.selectAll(".cell_"+this._id).on(".drag",null),this.applyLayoutType(this.layoutType()),s.style("left",function(e){return e._fixedLeft+"px"}).style("top",function(e){return e._fixedTop+"px"}).style("width",function(e){return e._fixedWidth-i.gutter()+"px"}).style("height",function(e){return e._fixedHeight-i.gutter()+"px"}).each(function(e){e._parentElement.attr("draggable",i.designMode()).selectAll(".dragHandle").attr("draggable",i.designMode()),e.surfacePadding(i.cellPadding()).resize()}),s.exit().each(function(e){e.target(null)}).remove()},i.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},i.prototype.render=function(e){var n=this;return t.prototype.render.call(this,function(t){if(n.content().length){var r=n.content().length;n.content().forEach(function(n,i){setTimeout(function(){n.render(function(){--r===0&&e&&e(t)})},0)})}else e&&e(t)}),this},i}),define("css!src/layout/Grid",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/layout/Grid",["d3","../common/HTMLWidget","./Cell","../common/TextBox","css!./Grid"],t):e.layout_Grid=t(e.d3,e.common_HTMLWidget,e.layout_Cell,e.common_TextBox)}(this,function(e,t,n,r,i,s,o){function u(){t.call(this),this._tag="div",this._colCount=0,this._rowCount=0,this._colSize=0,this._rowSize=0,this.content([])}return u.prototype=Object.create(t.prototype),u.prototype._class+=" layout_Grid",u.prototype.publish("designMode",!1,"boolean","Design Mode",null,{tags:["Private"]}),u.prototype.publish("gutter",4,"number","Gap Between Widgets",null,{tags:["Private"]}),u.prototype.publish("fitTo","all","set","Sizing Strategy",["all","width"],{tags:["Private"]}),u.prototype.publish("cellPadding",null,"string","Cell Padding (px)",null,{tags:["Intermediate"]}),u.prototype.publish("content",[],"widgetArray","widgets",null,{tags:["Private"]}),u.prototype.testData=function(){return this.setContent(0,0,(new r).testData()).setContent(0,1,(new r).testData()).setContent(1,0,(new r).testData()).setContent(1,1,(new r).testData()).setContent(0,2,(new r).testData(),"Title AAA",2,2).setContent(2,0,(new r).testData(),"Title BBB",2,4),this},u.prototype.getDimensions=function(){var e={width:0,height:0};return this.content().forEach(function(t){e.width<t.gridCol()+t.gridColSpan()&&(e.width=t.gridCol()+t.gridColSpan()),e.height<t.gridRow()+t.gridRowSpan()&&(e.height=t.gridRow()+t.gridRowSpan())},this),e},u.prototype.clearContent=function(){this.content(this.content().filter(function(e){return e.target(null),!1}))},u.prototype.setContent=function(e,t,r,i,s,o){s=s||1,o=o||1,i=i||"",this.content(this.content().filter(function(n){return n.gridRow()===e&&n.gridCol()===t?(n.target(null),!1):!0}));if(r){var u=(new n).gridRow(e).gridCol(t).widget(r).title(i).gridRowSpan(s).gridColSpan(o);this.content().push(u)}return this},u.prototype.getCell=function(e,t){var n=null;return this.content().some(function(r){return e>=r.gridRow()&&e<r.gridRow()+r.gridRowSpan()&&t>=r.gridCol()&&t<r.gridCol()+r.gridColSpan()?(n=r,!0):!1}),n},u.prototype.getContent=function(e){var t=null;return this.content().some(function(n){return n.widget()._id===e?(t=n.widget(),!0):!1}),t},u.prototype.childMoved=u.prototype.debounce(function(e,t){this.render()},250),u.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),n.style("position","relative"),this.dropDiv=n.append("div"),this.contentDiv=n.append("div"),this._scrollBarWidth=this.getScrollbarWidth()},u.prototype.findCurrentLocation=function(e){this._currLoc=[Math.floor((e.clientX-this._offsetX)/this._colSize),Math.floor((e.clientY-this._offsetY)/this._rowSize)]},u.prototype.overHandle=function(e){var t="",n=this._dragCell.handleSize(),r=this._dragCell.gridRowSpan()===this._currLoc[1]-this._dragCell.gridRow()+1,i=this._dragCell.gridRow()===this._currLoc[1],s=this._dragCell.gridColSpan()===this._currLoc[0]-this._dragCell.gridCol()+1,o=this._dragCell.gridCol()===this._currLoc[0],u=this._offsetY+this._currLoc[1]*this._rowSize,a=this._offsetX+this._currLoc[0]*this._colSize,f=this._colSize-this.gutter(),l=this._rowSize-this.gutter();return Math.ceil(u+l)>=e.clientY&&Math.floor(u+l-n)<=e.clientY&&r?t="s":Math.floor(u)<=e.clientY&&Math.ceil(u+n)>=e.clientY&&i&&(t="n"),Math.ceil(a+f)>=e.clientX&&Math.floor(a+f-n)<=e.clientX&&s?t+="e":Math.floor(a)<=e.clientX&&Math.ceil(a+n)>=e.clientX&&o&&(t+="w"),t},u.prototype.createDropTarget=function(e){var t=e[0]-this._dragCellOffsetX,n=e[1]-this._dragCellOffsetY,r=this._dragCell.gridColSpan(),i=this._dragCell.gridRowSpan(),s=document.createElement("div");s.id="grid-drop-target"+this.id(),s.className="grid-drop-target",this._element.node().appendChild(s),this.updateDropTarget(t,n,r,i)},u.prototype.setGridOffsets=function(){this._offsetX=this._element.node().getBoundingClientRect().left+this.gutter()/2,this._offsetY=this._element.node().getBoundingClientRect().top+this.gutter()/2},u.prototype.updateDropTarget=function(e,t,n,r){var i,s,o,u;i=this._offsetY+t*this._rowSize,s=this._offsetX+e*this._colSize,o=n*this._colSize-this.gutter(),u=r*this._rowSize-this.gutter();var a=document.getElementById("grid-drop-target"+this.id());a.style.top=i+"px",a.style.left=s+"px",a.style.width=o+"px",a.style.height=u+"px"},u.prototype.moveDropTarget=function(e){if(this._handle){var t=[];switch(this._handle){case"nw":t=[this._dragCell.gridCol()+this._dragCell.gridColSpan()-1,this._dragCell.gridRow()+this._dragCell.gridRowSpan()-1];break;case"n":case"ne":t=[this._dragCell.gridCol(),this._dragCell.gridRow()+this._dragCell.gridRowSpan()-1];break;case"e":case"se":case"s":t=[this._dragCell.gridCol(),this._dragCell.gridRow()];break;case"sw":case"w":t=[this._dragCell.gridCol()+this._dragCell.gridColSpan()-1,this._dragCell.gridRow()]}switch(this._handle){case"e":case"w":this._locY=t[1];break;default:this._locY=e[1]<=t[1]?e[1]:t[1]}switch(this._handle){case"n":case"s":this._locX=t[0];break;default:this._locX=e[0]<=t[0]?e[0]:t[0]}switch(this._handle){case"n":case"s":this._sizeX=this._dragCell.gridColSpan();break;default:this._sizeX=Math.abs(e[0]-t[0])+1}switch(this._handle){case"e":case"w":this._sizeY=this._dragCell.gridRowSpan();break;default:this._sizeY=Math.abs(e[1]-t[1])+1}}else if(document.getElementById("grid-drop-target"+this.id())!==null){var n=this.getCell(e[1],e[0]);n!==null&&this._dragCell._id!==n._id?(document.getElementById("grid-drop-target"+this.id()).className="grid-drop-target drop-target-over",this._locX=n.gridCol(),this._locY=n.gridRow(),this._sizeX=n.gridColSpan(),this._sizeY=n.gridRowSpan()):(document.getElementById("grid-drop-target"+this.id()).className="grid-drop-target",this._locX=e[0]-this._dragCellOffsetX,this._locY=e[1]-this._dragCellOffsetY,this._sizeX=this._dragCell.gridColSpan(),this._sizeY=this._dragCell.gridRowSpan())}this.updateDropTarget(this._locX,this._locY,this._sizeX,this._sizeY)},u.prototype.updateCells=function(t,n){var r=this,i=this.contentDiv.selectAll(".cell_"+this._id).data(this.content(),function(e){return e._id});i.enter().append("div").attr("class","cell_"+this._id).style("position","absolute").each(function(e){e.target(this),e.__grid_watch=e.watch(function(e,t,n){r._renderCount&&e.indexOf("grid")===0&&t!==n&&r.childMoved()})});var s=e.behavior.drag().on("dragstart",function(t){e.event.sourceEvent.stopPropagation(),r._dragCell=t,r.setGridOffsets(),r.findCurrentLocation(e.event.sourceEvent),r._element.selectAll(".dragHandle").style("visibility","hidden"),r._handle=r.overHandle(e.event.sourceEvent),r._dragCell._dragHandles.indexOf(r._handle)===-1&&(r._handle=undefined),r._dragCellOffsetX=r._currLoc[0]-t.gridCol(),r._dragCellOffsetY=r._currLoc[1]-t.gridRow(),r.createDropTarget(r._currLoc),setTimeout(function(){r.contentDiv.selectAll(".cell_"+r._id).classed("dragItem",function(e){return t._id===e._id}).classed("notDragItem",function(e){return t._id!==e._id})},0)}).on("drag",function(t){r._dragCell=t,r.findCurrentLocation(e.event.sourceEvent);if(typeof r._currLocation=="undefined"||r._currLocation[0]!==r._currLoc[0]||r._currLocation[1]!==r._currLoc[1])r._currLocation=r._currLoc,r.moveDropTarget(r._currLoc)}).on("dragend",function(){e.event.sourceEvent.stopPropagation(),r._element.selectAll(".dragHandle").style("visibility",null);if(r._handle)r._dragCell.gridRow(r._locY),r._dragCell.gridRowSpan(r._sizeY),r._dragCell.gridCol(r._locX),r._dragCell.gridColSpan(r._sizeX);else{var t=r._currLoc[1],n=r._currLoc[0],i=r._dragCell.gridRowSpan(),s=r._dragCell.gridColSpan(),o=r.getCell(r._currLoc[1],r._currLoc[0]);o===r._dragCell&&(i=o.gridRowSpan(),s=o.gridColSpan(),o=null);var u,a;o?(t=o.gridRow(),n=o.gridCol(),i=o.gridRowSpan(),s=o.gridColSpan(),o.gridCol(r._dragCell.gridCol()).gridColSpan(r._dragCell.gridColSpan()).gridRow(r._dragCell.gridRow()).gridRowSpan(r._dragCell.gridRowSpan()),u=n,a=t):(u=n-r._dragCellOffsetX,a=t-r._dragCellOffsetY),r._dragCell.gridCol(u).gridRow(a).gridColSpan(s).gridRowSpan(i)}var f=document.getElementById("grid-drop-target"+r.id());f.parentNode.removeChild(f),setTimeout(function(){r.contentDiv.selectAll(".cell_"+r._id).classed("dragItem",!1).classed("notDragItem",!1)},0),r._dragCell=null});this.designMode()?this.contentDiv.selectAll(".cell_"+this._id).call(s):this.contentDiv.selectAll(".cell_"+this._id).on(".drag",null),i.style("left",function(e){return e.gridCol()*t+r.gutter()/2+"px"}).style("top",function(e){return e.gridRow()*n+r.gutter()/2+"px"}).style("width",function(e){return e.gridColSpan()*t-r.gutter()+"px"}).style("height",function(e){return e.gridRowSpan()*n-r.gutter()+"px"}).each(function(e){e._parentElement.attr("draggable",r.designMode()).selectAll(".dragHandle").attr("draggable",r.designMode()),e.surfacePadding(r.cellPadding()).resize()}),i.exit().each(function(e){e.target(null),e.__grid_watch&&e.__grid_watch.remove()}).remove()},u.prototype.updateDropCells=function(e,t,n){var r=[];if(this.designMode())for(var i=0;i<e.height;++i)for(var s=0;s<e.width;++s)r.push({x:s,y:i});var o=this.dropDiv.selectAll(".dropCell_"+this._id).data(r);o.enter().append("div").attr("class","dropCell dropCell_"+this._id);var u=this;o.style("position","absolute").style("left",function(e){return e.x*t+u.gutter()/2+"px"}).style("top",function(e){return e.y*n+u.gutter()/2+"px"}).style("width",function(e){return 1*t-u.gutter()+"px"}).style("height",function(e){return 1*n-u.gutter()+"px"}),o.exit().remove()},u.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),this._parentElement.style("overflow-x",this.fitTo()==="width"?"hidden":null),this._parentElement.style("overflow-y",this.fitTo()==="width"?"scroll":null);var r=this.getDimensions();this.designMode()&&(r.width++,r.height++);var i=(this.width()-(this.fitTo()==="width"?this._scrollBarWidth:0))/r.width,s=this.fitTo()==="all"?this.height()/r.height:i;this._colCount=r.width,this._rowCount=r.height,this._colSize=i,this._rowSize=s,this.updateCells(i,s),this.updateDropCells(r,i,s)},u.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},u.prototype.render=function(e){var n=this;return t.prototype.render.call(this,function(t){if(n.content().length){var r=n.content().length;n.content().forEach(function(n,i){setTimeout(function(){n.render(function(){--r===0&&e&&e(t)})},0)})}else e&&e(t)}),this},u}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}(".layout_Surface{margin:0;border:1px solid #e5e5e5;border-radius:3px;overflow:hidden}.layout_Surface>h3{margin:0;padding:2px;text-align:center;font-weight:700;background-color:#e5e5e5}.layout_Surface .html-button-container{position:absolute;right:0;top:3px}.layout_Surface>div{padding:8px}.layout_Surface .html-button-container .surface-button{position:relative;background:0 0;border:none;opacity:.8}​ .layout_Surface .html-button-container .surface-button:hover{opacity:1}.layout_Surface .html-button-container .surface-button:active{opacity:.5}.layout_Border .cell{border-radius:5px;border:1px solid #e5e5e5;display:inline-block;overflow:hidden}.layout_Border .cell h2{margin:0;padding-top:4px;-webkit-margin:0;text-align:center}.layout_Border .dropCell{box-sizing:border-box;background-color:lightgrey;opacity:.33;border-radius:5px;border:1px solid #333;display:inline-block;overflow:hidden}.layout_Border .dropCell.over,.layout_Border .layout_BorderCell.over{border:2px dashed #000}.layout_Border .dragItem{z-index:-1;opacity:.33}.layout_Border .notDragItem{z-index:-1;opacity:1}.layout_Border div[draggable=true]{opacity:.75;cursor:default}.layout_Border div[draggable=true] .dragHandle{opacity:1}.layout_Border div[draggable=true] .dragHandle_n,.layout_Border div[draggable=true] .dragHandle_e,.layout_Border div[draggable=true] .dragHandle_s,.layout_Border div[draggable=true] .dragHandle_w{background-color:#AAA}.layout_Border div[draggable=true] .dragHandle_nw,.layout_Border div[draggable=true] .dragHandle_ne,.layout_Border div[draggable=true] .dragHandle_se,.layout_Border div[draggable=true] .dragHandle_sw{background-color:#333}.layout_Border div[draggable=true] .dragHandle_nw{cursor:nw-resize}.layout_Border div[draggable=true] .dragHandle_n{cursor:n-resize}.layout_Border div[draggable=true] .dragHandle_ne{cursor:ne-resize}.layout_Border div[draggable=true] .dragHandle_e{cursor:e-resize}.layout_Border div[draggable=true] .dragHandle_se{cursor:se-resize}.layout_Border div[draggable=true] .dragHandle_s{cursor:s-resize}.layout_Border div[draggable=true] .dragHandle_sw{cursor:sw-resize}.layout_Border div[draggable=true] .dragHandle_w{cursor:w-resize}.layout_Border div[draggable=false]>div>.dragHandle{display:none}.layout_Border .grid-drop-target{position:fixed;box-sizing:border-box;border:2px dashed #7f8c8d;border-radius:0;background:repeating-linear-gradient(-45deg,rgba(0,0,0,0),rgba(0,0,0,0)4px,rgba(100,100,100,.1)4px,rgba(100,100,100,.1)8px)}.layout_Border .grid-drop-target.drop-target-over{border:2px dashed #179BD7;background:repeating-linear-gradient(-45deg,rgba(0,0,0,0),rgba(0,0,0,0)6px,rgba(17,155,215,.1)6px,rgba(17,155,215,.1)12px)}.layout_Grid .cell{border-radius:5px;border:1px solid #e5e5e5;display:inline-block;overflow:hidden}.layout_Grid .cell h2{margin:0;padding-top:4px;-webkit-margin:0;text-align:center}.layout_Grid .dropCell{box-sizing:border-box;background-color:lightgrey;opacity:.33;border-radius:5px;border:1px solid #333;display:inline-block;overflow:hidden}.layout_Grid .dropCell.over,.layout_Grid .layout_Cell.over{border:2px dashed #000}.layout_Grid .dragItem{z-index:0;opacity:.33}.layout_Grid .notDragItem{z-index:-1;opacity:1}.layout_Grid div[draggable=true]{opacity:.75;cursor:move}.layout_Grid div[draggable=true] .dragHandle{opacity:1}.layout_Grid div[draggable=true] .dragHandle_n,.layout_Grid div[draggable=true] .dragHandle_e,.layout_Grid div[draggable=true] .dragHandle_s,.layout_Grid div[draggable=true] .dragHandle_w{background-color:#AAA}.layout_Grid div[draggable=true] .dragHandle_nw,.layout_Grid div[draggable=true] .dragHandle_ne,.layout_Grid div[draggable=true] .dragHandle_se,.layout_Grid div[draggable=true] .dragHandle_sw{background-color:#333}.layout_Grid div[draggable=true] .dragHandle_nw{cursor:nw-resize}.layout_Grid div[draggable=true] .dragHandle_n{cursor:n-resize}.layout_Grid div[draggable=true] .dragHandle_ne{cursor:ne-resize}.layout_Grid div[draggable=true] .dragHandle_e{cursor:e-resize}.layout_Grid div[draggable=true] .dragHandle_se{cursor:se-resize}.layout_Grid div[draggable=true] .dragHandle_s{cursor:s-resize}.layout_Grid div[draggable=true] .dragHandle_sw{cursor:sw-resize}.layout_Grid div[draggable=true] .dragHandle_w{cursor:w-resize}.layout_Grid div[draggable=false]>div>.dragHandle{display:none}.layout_Grid .grid-drop-target{position:fixed;box-sizing:border-box;border:2px dashed #7f8c8d;border-radius:0;background:repeating-linear-gradient(-45deg,rgba(0,0,0,0),rgba(0,0,0,0)4px,rgba(100,100,100,.1)4px,rgba(100,100,100,.1)8px)}.layout_Grid .grid-drop-target.drop-target-over{border:2px dashed #179BD7;background:repeating-linear-gradient(-45deg,rgba(0,0,0,0),rgba(0,0,0,0)6px,rgba(17,155,215,.1)6px,rgba(17,155,215,.1)12px)}"),define("hpcc-viz-layout",function(){});