var Z=(g,n)=>()=>(n||g((n={exports:{}}).exports,n),n.exports);var K=Z((Y,G)=>{/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */(function(g,n){typeof define=="function"&&define.amd?define(["jquery"],function(N){return n(N)}):typeof G=="object"&&G.exports?G.exports=n(require("jquery")):n(g.jQuery)})(globalThis,function(g){(function(n){function N(e){var i=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return n.each(i,function(){e=e?e.replace(this.re,this.ch):""}),e}function j(e){var i=arguments,t=e;[].shift.apply(i);var o,s=this.each(function(){var a=n(this);if(a.is("select")){var c=a.data("selectpicker"),r=typeof t=="object"&&t;if(c){if(r)for(var u in r)r.hasOwnProperty(u)&&(c.options[u]=r[u])}else{var l=n.extend({},w.DEFAULTS,n.fn.selectpicker.defaults||{},a.data(),r);l.template=n.extend({},w.DEFAULTS.template,n.fn.selectpicker.defaults?n.fn.selectpicker.defaults.template:{},a.data().template,r.template),a.data("selectpicker",c=new w(this,l))}typeof t=="string"&&(o=c[t]instanceof Function?c[t].apply(c,i):c.options[t])}});return typeof o<"u"?o:s}String.prototype.includes||function(){var e={}.toString,i=function(){try{var s={},a=Object.defineProperty,c=a(s,s,s)&&a}catch{}return c}(),t="".indexOf,o=function(s){if(this==null)throw new TypeError;var a=String(this);if(s&&e.call(s)=="[object RegExp]")throw new TypeError;var c=a.length,r=String(s),u=r.length,l=arguments.length>1?arguments[1]:void 0,d=l?Number(l):0;d!=d&&(d=0);var h=Math.min(Math.max(d,0),c);return!(u+h>c)&&t.call(a,r,d)!=-1};i?i(String.prototype,"includes",{value:o,configurable:!0,writable:!0}):String.prototype.includes=o}(),String.prototype.startsWith||function(){var e=function(){try{var o={},s=Object.defineProperty,a=s(o,o,o)&&s}catch{}return a}(),i={}.toString,t=function(o){if(this==null)throw new TypeError;var s=String(this);if(o&&i.call(o)=="[object RegExp]")throw new TypeError;var a=s.length,c=String(o),r=c.length,u=arguments.length>1?arguments[1]:void 0,l=u?Number(u):0;l!=l&&(l=0);var d=Math.min(Math.max(l,0),a);if(r+d>a)return!1;for(var h=-1;++h<r;)if(s.charCodeAt(d+h)!=c.charCodeAt(h))return!1;return!0};e?e(String.prototype,"startsWith",{value:t,configurable:!0,writable:!0}):String.prototype.startsWith=t}(),Object.keys||(Object.keys=function(e,i,t){t=[];for(i in e)t.hasOwnProperty.call(e,i)&&t.push(i);return t});var B={useDefault:!1,_set:n.valHooks.select.set};n.valHooks.select.set=function(e,i){return i&&!B.useDefault&&n(e).data("selected",!0),B._set.apply(this,arguments)};var L=null,D=function(){try{return new Event("change"),!0}catch{return!1}}();n.fn.triggerNative=function(e){var i,t=this[0];t.dispatchEvent?(D?i=new Event(e,{bubbles:!0}):(i=document.createEvent("Event"),i.initEvent(e,!0,!1)),t.dispatchEvent(i)):t.fireEvent?(i=document.createEventObject(),i.eventType=e,t.fireEvent("on"+e,i)):this.trigger(e)},n.expr.pseudos.icontains=function(e,i,t){var o=n(e).find("a"),s=(o.data("tokens")||o.text()).toString().toUpperCase();return s.includes(t[3].toUpperCase())},n.expr.pseudos.ibegins=function(e,i,t){var o=n(e).find("a"),s=(o.data("tokens")||o.text()).toString().toUpperCase();return s.startsWith(t[3].toUpperCase())},n.expr.pseudos.aicontains=function(e,i,t){var o=n(e).find("a"),s=(o.data("tokens")||o.data("normalizedText")||o.text()).toString().toUpperCase();return s.includes(t[3].toUpperCase())},n.expr.pseudos.aibegins=function(e,i,t){var o=n(e).find("a"),s=(o.data("tokens")||o.data("normalizedText")||o.text()).toString().toUpperCase();return s.startsWith(t[3].toUpperCase())};var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},m={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},$=function(e){var i=function(a){return e[a]},t="(?:"+Object.keys(e).join("|")+")",o=RegExp(t),s=RegExp(t,"g");return function(a){return a=a==null?"":""+a,o.test(a)?a.replace(s,i):a}},b=$(Q),O=$(m),w=function(e,i){B.useDefault||(n.valHooks.select.set=B._set,B.useDefault=!0),this.$element=n(e),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=i,this.options.title===null&&(this.options.title=this.$element.attr("title"));var t=this.options.windowPadding;typeof t=="number"&&(this.options.windowPadding=[t,t,t,t]),this.val=w.prototype.val,this.render=w.prototype.render,this.refresh=w.prototype.refresh,this.setStyle=w.prototype.setStyle,this.selectAll=w.prototype.selectAll,this.deselectAll=w.prototype.deselectAll,this.destroy=w.prototype.destroy,this.remove=w.prototype.remove,this.show=w.prototype.show,this.hide=w.prototype.hide,this.init()};w.VERSION="1.12.4",w.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,i){return e==1?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,i){return[e==1?"Limit reached ({n} item max)":"Limit reached ({n} items max)",i==1?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},w.prototype={constructor:w,init:function(){var e=this,i=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight===!0&&this.$menu.addClass("dropdown-menu-right"),typeof i<"u"&&(this.$button.attr("data-id",i),n('label[for="'+i+'"]').click(function(t){t.preventDefault(),e.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(t){e.$menuInner.attr("aria-expanded",!1),e.$element.trigger("hide.bs.select",t)},"hidden.bs.dropdown":function(t){e.$element.trigger("hidden.bs.select",t)},"show.bs.dropdown":function(t){e.$menuInner.attr("aria-expanded",!0),e.$element.trigger("show.bs.select",t)},"shown.bs.dropdown":function(t){e.$element.trigger("shown.bs.select",t)}}),e.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){e.$button.addClass("bs-invalid"),e.$element.on({"focus.bs.select":function(){e.$button.focus(),e.$element.off("focus.bs.select")},"shown.bs.select":function(){e.$element.val(e.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&e.$button.removeClass("bs-invalid"),e.$element.off("rendered.bs.select")}}),e.$button.on("blur.bs.select",function(){e.$element.focus().blur(),e.$button.off("blur.bs.select")})}),setTimeout(function(){e.$element.trigger("loaded.bs.select")})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",t=this.autofocus?" autofocus":"",o=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(this.options.liveSearchPlaceholder===null?"":' placeholder="'+b(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",a=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",c=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",r='<div class="btn-group bootstrap-select'+e+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+t+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+o+s+a+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+c+"</div></div>";return n(r)},createView:function(){var e=this.createDropdown(),i=this.createLi();return e.find("ul")[0].innerHTML=i,e},reloadLi:function(){var e=this.createLi();this.$menuInner[0].innerHTML=e},createLi:function(){var e=this,i=[],t=0,o=document.createElement("option"),s=-1,a=function(d,h,f,v){return"<li"+(typeof f<"u"&&f!==""?' class="'+f+'"':"")+(typeof h<"u"&&h!==null?' data-original-index="'+h+'"':"")+(typeof v<"u"&&v!==null?'data-optgroup="'+v+'"':"")+">"+d+"</li>"},c=function(d,h,f,v){return'<a tabindex="0"'+(typeof h<"u"?' class="'+h+'"':"")+(f?' style="'+f+'"':"")+(e.options.liveSearchNormalize?' data-normalized-text="'+N(b(n(d).html()))+'"':"")+(typeof v<"u"||v!==null?' data-tokens="'+v+'"':"")+' role="option">'+d+'<span class="'+e.options.iconBase+" "+e.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(s--,!this.$element.find(".bs-title-option").length)){var r=this.$element[0];o.className="bs-title-option",o.innerHTML=this.options.title,o.value="",r.insertBefore(o,r.firstChild);var u=n(r.options[r.selectedIndex]);u.attr("selected")===void 0&&this.$element.data("selected")===void 0&&(o.selected=!0)}var l=this.$element.find("option");return l.each(function(d){var h=n(this);if(s++,!h.hasClass("bs-title-option")){var f,v=this.className||"",T=b(this.style.cssText),S=h.data("content")?h.data("content"):h.html(),I=h.data("tokens")?h.data("tokens"):null,k=typeof h.data("subtext")<"u"?'<small class="text-muted">'+h.data("subtext")+"</small>":"",C=typeof h.data("icon")<"u"?'<span class="'+e.options.iconBase+" "+h.data("icon")+'"></span> ':"",p=h.parent(),x=p[0].tagName==="OPTGROUP",y=x&&p[0].disabled,P=this.disabled||y;if(C!==""&&P&&(C="<span>"+C+"</span>"),e.options.hideDisabled&&(P&&!x||y))return f=h.data("prevHiddenIndex"),h.next().data("prevHiddenIndex",f!==void 0?f:d),void s--;if(h.data("content")||(S=C+'<span class="text">'+S+k+"</span>"),x&&h.data("divider")!==!0){if(e.options.hideDisabled&&P){if(p.data("allOptionsDisabled")===void 0){var U=p.children();p.data("allOptionsDisabled",U.filter(":disabled").length===U.length)}if(p.data("allOptionsDisabled"))return void s--}var R=" "+p[0].className||"";if(h.index()===0){t+=1;var F=p[0].label,_=typeof p.data("subtext")<"u"?'<small class="text-muted">'+p.data("subtext")+"</small>":"",E=p.data("icon")?'<span class="'+e.options.iconBase+" "+p.data("icon")+'"></span> ':"";F=E+'<span class="text">'+b(F)+_+"</span>",d!==0&&i.length>0&&(s++,i.push(a("",null,"divider",t+"div"))),s++,i.push(a(F,null,"dropdown-header"+R,t))}if(e.options.hideDisabled&&P)return void s--;i.push(a(c(S,"opt "+v+R,T,I),d,"",t))}else if(h.data("divider")===!0)i.push(a("",d,"divider"));else if(h.data("hidden")===!0)f=h.data("prevHiddenIndex"),h.next().data("prevHiddenIndex",f!==void 0?f:d),i.push(a(c(S,v,T,I),d,"hidden is-hidden"));else{var A=this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP";if(!A&&e.options.hideDisabled&&(f=h.data("prevHiddenIndex"),f!==void 0)){var z=l.eq(f)[0].previousElementSibling;z&&z.tagName==="OPTGROUP"&&!z.disabled&&(A=!0)}A&&(s++,i.push(a("",null,"divider",t+"div"))),i.push(a(c(S,v,T,I),d))}e.liObj[d]=s}}),this.multiple||this.$element.find("option:selected").length!==0||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),i.join("")},findLis:function(){return this.$lis==null&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(e){var i,t=this,o=this.$element.find("option");e!==!1&&o.each(function(l){var d=t.findLis().eq(t.liObj[l]);t.setDisabled(l,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,d),t.setSelected(l,this.selected,d)}),this.togglePlaceholder(),this.tabIndex();var s=o.map(function(){if(this.selected){if(t.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled))return;var l,d=n(this),h=d.data("icon")&&t.options.showIcon?'<i class="'+t.options.iconBase+" "+d.data("icon")+'"></i> ':"";return l=t.options.showSubtext&&d.data("subtext")&&!t.multiple?' <small class="text-muted">'+d.data("subtext")+"</small>":"",typeof d.attr("title")<"u"?d.attr("title"):d.data("content")&&t.options.showContent?d.data("content").toString():h+d.html()+l}}).toArray(),a=this.multiple?s.join(this.options.multipleSeparator):s[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var c=this.options.selectedTextFormat.split(">");if(c.length>1&&s.length>c[1]||c.length==1&&s.length>=2){i=this.options.hideDisabled?", [disabled]":"";var r=o.not('[data-divider="true"], [data-hidden="true"]'+i).length,u=typeof this.options.countSelectedText=="function"?this.options.countSelectedText(s.length,r):this.options.countSelectedText;a=u.replace("{0}",s.length.toString()).replace("{1}",r.toString())}}this.options.title==null&&(this.options.title=this.$element.attr("title")),this.options.selectedTextFormat=="static"&&(a=this.options.title),a||(a=typeof this.options.title<"u"?this.options.title:this.options.noneSelectedText),this.$button.attr("title",O(n.trim(a.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(a),this.$element.trigger("rendered.bs.select")},setStyle:function(e,i){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var t=e||this.options.style;i=="add"?this.$button.addClass(t):i=="remove"?this.$button.removeClass(t):(this.$button.removeClass(this.options.style),this.$button.addClass(t))},liHeight:function(e){if(e||this.options.size!==!1&&!this.sizeInfo){var i=document.createElement("div"),t=document.createElement("div"),o=document.createElement("ul"),s=document.createElement("li"),a=document.createElement("li"),c=document.createElement("a"),r=document.createElement("span"),u=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,l=this.options.liveSearch?document.createElement("div"):null,d=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,h=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(r.className="text",i.className=this.$menu[0].parentNode.className+" open",t.className="dropdown-menu open",o.className="dropdown-menu inner",s.className="divider",r.appendChild(document.createTextNode("Inner text")),c.appendChild(r),a.appendChild(c),o.appendChild(a),o.appendChild(s),u&&t.appendChild(u),l){var f=document.createElement("input");l.className="bs-searchbox",f.className="form-control",l.appendChild(f),t.appendChild(l)}d&&t.appendChild(d),t.appendChild(o),h&&t.appendChild(h),i.appendChild(t),document.body.appendChild(i);var v=c.offsetHeight,T=u?u.offsetHeight:0,S=l?l.offsetHeight:0,I=d?d.offsetHeight:0,k=h?h.offsetHeight:0,C=n(s).outerHeight(!0),p=typeof getComputedStyle=="function"&&getComputedStyle(t),x=p?null:n(t),y={vert:parseInt(p?p.paddingTop:x.css("paddingTop"))+parseInt(p?p.paddingBottom:x.css("paddingBottom"))+parseInt(p?p.borderTopWidth:x.css("borderTopWidth"))+parseInt(p?p.borderBottomWidth:x.css("borderBottomWidth")),horiz:parseInt(p?p.paddingLeft:x.css("paddingLeft"))+parseInt(p?p.paddingRight:x.css("paddingRight"))+parseInt(p?p.borderLeftWidth:x.css("borderLeftWidth"))+parseInt(p?p.borderRightWidth:x.css("borderRightWidth"))},P={vert:y.vert+parseInt(p?p.marginTop:x.css("marginTop"))+parseInt(p?p.marginBottom:x.css("marginBottom"))+2,horiz:y.horiz+parseInt(p?p.marginLeft:x.css("marginLeft"))+parseInt(p?p.marginRight:x.css("marginRight"))+2};document.body.removeChild(i),this.sizeInfo={liHeight:v,headerHeight:T,searchHeight:S,actionsHeight:I,doneButtonHeight:k,dividerHeight:C,menuPadding:y,menuExtras:P}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var e,i,t,o,s,a,c,r,u=this,l=this.$menu,d=this.$menuInner,h=n(window),f=this.$newElement[0].offsetHeight,v=this.$newElement[0].offsetWidth,T=this.sizeInfo.liHeight,S=this.sizeInfo.headerHeight,I=this.sizeInfo.searchHeight,k=this.sizeInfo.actionsHeight,C=this.sizeInfo.doneButtonHeight,p=this.sizeInfo.dividerHeight,x=this.sizeInfo.menuPadding,y=this.sizeInfo.menuExtras,P=this.options.hideDisabled?".disabled":"",U=function(){var E,A=u.$newElement.offset(),z=n(u.options.container);u.options.container&&!z.is("body")?(E=z.offset(),E.top+=parseInt(z.css("borderTopWidth")),E.left+=parseInt(z.css("borderLeftWidth"))):E={top:0,left:0};var H=u.options.windowPadding;s=A.top-E.top-h.scrollTop(),a=h.height()-s-f-E.top-H[2],c=A.left-E.left-h.scrollLeft(),r=h.width()-c-v-E.left-H[1],s-=H[0],c-=H[3]};if(U(),this.options.size==="auto"){var R=function(){var E,A=function(M,J){return function(q){return J?q.classList?q.classList.contains(M):n(q).hasClass(M):!(q.classList?q.classList.contains(M):n(q).hasClass(M))}},z=u.$menuInner[0].getElementsByTagName("li"),H=Array.prototype.filter?Array.prototype.filter.call(z,A("hidden",!1)):u.$lis.not(".hidden"),V=Array.prototype.filter?Array.prototype.filter.call(H,A("dropdown-header",!0)):H.filter(".dropdown-header");U(),e=a-y.vert,i=r-y.horiz,u.options.container?(l.data("height")||l.data("height",l.height()),t=l.data("height"),l.data("width")||l.data("width",l.width()),o=l.data("width")):(t=l.height(),o=l.width()),u.options.dropupAuto&&u.$newElement.toggleClass("dropup",s>a&&e-y.vert<t),u.$newElement.hasClass("dropup")&&(e=s-y.vert),u.options.dropdownAlignRight==="auto"&&l.toggleClass("dropdown-menu-right",c>r&&i-y.horiz<o-v),E=H.length+V.length>3?3*T+y.vert-2:0,l.css({"max-height":e+"px",overflow:"hidden","min-height":E+S+I+k+C+"px"}),d.css({"max-height":e-S-I-k-C-x.vert+"px","overflow-y":"auto","min-height":Math.max(E-x.vert,0)+"px"})};R(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",R),h.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",R)}else if(this.options.size&&this.options.size!="auto"&&this.$lis.not(P).length>this.options.size){var F=this.$lis.not(".divider").not(P).children().slice(0,this.options.size).last().parent().index(),_=this.$lis.slice(0,F+1).filter(".divider").length;e=T*this.options.size+_*p+x.vert,u.options.container?(l.data("height")||l.data("height",l.height()),t=l.data("height")):t=l.height(),u.options.dropupAuto&&this.$newElement.toggleClass("dropup",s>a&&e-y.vert<t),l.css({"max-height":e+S+I+k+C+"px",overflow:"hidden","min-height":""}),d.css({"max-height":e-x.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),i=this.options.container?this.$newElement.clone().appendTo("body"):e,t=e.children(".dropdown-menu").outerWidth(),o=i.css("width","auto").children("button").outerWidth();e.remove(),i.remove(),this.$newElement.css("width",Math.max(t,o)+"px")}else this.options.width==="fit"?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=n('<div class="bs-container" />');var e,i,t,o=this,s=n(this.options.container),a=function(c){o.$bsContainer.addClass(c.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",c.hasClass("dropup")),e=c.offset(),s.is("body")?i={top:0,left:0}:(i=s.offset(),i.top+=parseInt(s.css("borderTopWidth"))-s.scrollTop(),i.left+=parseInt(s.css("borderLeftWidth"))-s.scrollLeft()),t=c.hasClass("dropup")?0:c[0].offsetHeight,o.$bsContainer.css({top:e.top-i.top+t,left:e.left-i.left,width:c[0].offsetWidth})};this.$button.on("click",function(){var c=n(this);o.isDisabled()||(a(o.$newElement),o.$bsContainer.appendTo(o.options.container).toggleClass("open",!c.hasClass("open")).append(o.$menu))}),n(window).on("resize scroll",function(){a(o.$newElement)}),this.$element.on("hide.bs.select",function(){o.$menu.data("height",o.$menu.height()),o.$bsContainer.detach()})},setSelected:function(e,i,t){t||(this.togglePlaceholder(),t=this.findLis().eq(this.liObj[e])),t.toggleClass("selected",i).find("a").attr("aria-selected",i)},setDisabled:function(e,i,t){t||(t=this.findLis().eq(this.liObj[e])),i?t.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):t.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),this.$button.attr("tabindex")!=-1||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},togglePlaceholder:function(){var e=this.$element.val();this.$button.toggleClass("bs-placeholder",e===null||e===""||e.constructor===Array&&e.length===0)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98"&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var e=this,i=n(document);i.data("spaceSelect",!1),this.$button.on("keyup",function(t){/(32)/.test(t.keyCode.toString(10))&&i.data("spaceSelect")&&(t.preventDefault(),i.data("spaceSelect",!1))}),this.$button.on("click",function(){e.setSize()}),this.$element.on("shown.bs.select",function(){if(e.options.liveSearch||e.multiple){if(!e.multiple){var t=e.liObj[e.$element[0].selectedIndex];if(typeof t!="number"||e.options.size===!1)return;var o=e.$lis.eq(t)[0].offsetTop-e.$menuInner[0].offsetTop;o=o-e.$menuInner[0].offsetHeight/2+e.sizeInfo.liHeight/2,e.$menuInner[0].scrollTop=o}}else e.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(t){var o=n(this),s=o.parent().data("originalIndex"),a=e.$element.val(),c=e.$element.prop("selectedIndex"),r=!0;if(e.multiple&&e.options.maxOptions!==1&&t.stopPropagation(),t.preventDefault(),!e.isDisabled()&&!o.parent().hasClass("disabled")){var u=e.$element.find("option"),l=u.eq(s),d=l.prop("selected"),h=l.parent("optgroup"),f=e.options.maxOptions,v=h.data("maxOptions")||!1;if(e.multiple){if(l.prop("selected",!d),e.setSelected(s,!d),o.blur(),f!==!1||v!==!1){var T=f<u.filter(":selected").length,S=v<h.find("option:selected").length;if(f&&T||v&&S)if(f&&f==1)u.prop("selected",!1),l.prop("selected",!0),e.$menuInner.find(".selected").removeClass("selected"),e.setSelected(s,!0);else if(v&&v==1){h.find("option:selected").prop("selected",!1),l.prop("selected",!0);var I=o.parent().data("optgroup");e.$menuInner.find('[data-optgroup="'+I+'"]').removeClass("selected"),e.setSelected(s,!0)}else{var k=typeof e.options.maxOptionsText=="string"?[e.options.maxOptionsText,e.options.maxOptionsText]:e.options.maxOptionsText,C=typeof k=="function"?k(f,v):k,p=C[0].replace("{n}",f),x=C[1].replace("{n}",v),y=n('<div class="notify"></div>');C[2]&&(p=p.replace("{var}",C[2][f>1?0:1]),x=x.replace("{var}",C[2][v>1?0:1])),l.prop("selected",!1),e.$menu.append(y),f&&T&&(y.append(n("<div>"+p+"</div>")),r=!1,e.$element.trigger("maxReached.bs.select")),v&&S&&(y.append(n("<div>"+x+"</div>")),r=!1,e.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){e.setSelected(s,!1)},10),y.delay(750).fadeOut(300,function(){n(this).remove()})}}}else u.prop("selected",!1),l.prop("selected",!0),e.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),e.setSelected(s,!0);!e.multiple||e.multiple&&e.options.maxOptions===1?e.$button.focus():e.options.liveSearch&&e.$searchbox.focus(),r&&(a!=e.$element.val()&&e.multiple||c!=e.$element.prop("selectedIndex")&&!e.multiple)&&(L=[s,l.prop("selected"),d],e.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(t){t.currentTarget==this&&(t.preventDefault(),t.stopPropagation(),e.options.liveSearch&&!n(t.target).hasClass("close")?e.$searchbox.focus():e.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(t){t.preventDefault(),t.stopPropagation(),e.options.liveSearch?e.$searchbox.focus():e.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){e.$button.click()}),this.$searchbox.on("click",function(t){t.stopPropagation()}),this.$menu.on("click",".actions-btn",function(t){e.options.liveSearch?e.$searchbox.focus():e.$button.focus(),t.preventDefault(),t.stopPropagation(),n(this).hasClass("bs-select-all")?e.selectAll():e.deselectAll()}),this.$element.change(function(){e.render(!1),e.$element.trigger("changed.bs.select",L),L=null})},liveSearchListener:function(){var e=this,i=n('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){e.$menuInner.find(".active").removeClass("active"),e.$searchbox.val()&&(e.$searchbox.val(""),e.$lis.not(".is-hidden").removeClass("hidden"),i.parent().length&&i.remove()),e.multiple||e.$menuInner.find(".selected").addClass("active"),setTimeout(function(){e.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(t){t.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(e.$lis.not(".is-hidden").removeClass("hidden"),e.$lis.filter(".active").removeClass("active"),i.remove(),e.$searchbox.val()){var t,o=e.$lis.not(".is-hidden, .divider, .dropdown-header");if(t=e.options.liveSearchNormalize?o.not(":a"+e._searchStyle()+'("'+N(e.$searchbox.val())+'")'):o.not(":"+e._searchStyle()+'("'+e.$searchbox.val()+'")'),t.length===o.length)i.html(e.options.noneResultsText.replace("{0}",'"'+b(e.$searchbox.val())+'"')),e.$menuInner.append(i),e.$lis.addClass("hidden");else{t.addClass("hidden");var s,a=e.$lis.not(".hidden");a.each(function(c){var r=n(this);r.hasClass("divider")?s===void 0?r.addClass("hidden"):(s&&s.addClass("hidden"),s=r):r.hasClass("dropdown-header")&&a.eq(c+1).data("optgroup")!==r.data("optgroup")?r.addClass("hidden"):s=null}),s&&s.addClass("hidden"),o.not(".hidden").first().addClass("active"),e.$menuInner.scrollTop(0)}}})},_searchStyle:function(){var e={begins:"ibegins",startsWith:"ibegins"};return e[this.options.liveSearchStyle]||"icontains"},val:function(e){return typeof e<"u"?(this.$element.val(e),this.render(),this.$element):this.$element.val()},changeAll:function(e){if(this.multiple){typeof e>"u"&&(e=!0),this.findLis();var i=this.$element.find("option"),t=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),o=t.length,s=[];if(e){if(t.filter(".selected").length===t.length)return}else if(t.filter(".selected").length===0)return;t.toggleClass("selected",e);for(var a=0;a<o;a++){var c=t[a].getAttribute("data-original-index");s[s.length]=i.eq(c)[0]}n(s).prop("selected",e),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){e=e||window.event,e&&e.stopPropagation(),this.$button.trigger("click")},keydown:function(e){var i,t,o,s,a=n(this),c=a.is("input")?a.parent().parent():a.parent(),r=c.data("this"),u=":not(.disabled, .hidden, .dropdown-header, .divider)",l={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(s=r.$newElement.hasClass("open"),!s&&(e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105||e.keyCode>=65&&e.keyCode<=90))return r.options.container?r.$button.trigger("click"):(r.setSize(),r.$menu.parent().addClass("open"),s=!0),void r.$searchbox.focus();if(r.options.liveSearch&&/(^9$|27)/.test(e.keyCode.toString(10))&&s&&(e.preventDefault(),e.stopPropagation(),r.$menuInner.click(),r.$button.focus()),/(38|40)/.test(e.keyCode.toString(10))){if(i=r.$lis.filter(u),!i.length)return;t=r.options.liveSearch?i.index(i.filter(".active")):i.index(i.find("a").filter(":focus").parent()),o=r.$menuInner.data("prevIndex"),e.keyCode==38?(!r.options.liveSearch&&t!=o||t==-1||t--,t<0&&(t+=i.length)):e.keyCode==40&&((r.options.liveSearch||t==o)&&t++,t%=i.length),r.$menuInner.data("prevIndex",t),r.options.liveSearch?(e.preventDefault(),a.hasClass("dropdown-toggle")||(i.removeClass("active").eq(t).addClass("active").children("a").focus(),a.focus())):i.eq(t).children("a").focus()}else if(!a.is("input")){var d,h,f=[];i=r.$lis.filter(u),i.each(function(T){n.trim(n(this).children("a").text().toLowerCase()).substring(0,1)==l[e.keyCode]&&f.push(T)}),d=n(document).data("keycount"),d++,n(document).data("keycount",d),h=n.trim(n(":focus").text().toLowerCase()).substring(0,1),h!=l[e.keyCode]?(d=1,n(document).data("keycount",d)):d>=f.length&&(n(document).data("keycount",0),d>f.length&&(d=1)),i.eq(f[d-1]).children("a").focus()}if((/(13|32)/.test(e.keyCode.toString(10))||/(^9$)/.test(e.keyCode.toString(10))&&r.options.selectOnTab)&&s){if(/(32)/.test(e.keyCode.toString(10))||e.preventDefault(),r.options.liveSearch)/(32)/.test(e.keyCode.toString(10))||(r.$menuInner.find(".active a").click(),a.focus());else{var v=n(":focus");v.click(),v.focus(),e.preventDefault(),n(document).data("spaceSelect",!0)}n(document).data("keycount",0)}(/(^9$|27)/.test(e.keyCode.toString(10))&&s&&(r.multiple||r.options.liveSearch)||/(27)/.test(e.keyCode.toString(10))&&!s)&&(r.$menu.parent().removeClass("open"),r.options.container&&r.$newElement.removeClass("open"),r.$button.focus())},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var W=n.fn.selectpicker;n.fn.selectpicker=j,n.fn.selectpicker.Constructor=w,n.fn.selectpicker.noConflict=function(){return n.fn.selectpicker=W,this},n(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',w.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(e){e.stopPropagation()}),n(window).on("load.bs.select.data-api",function(){n(".selectpicker").each(function(){var e=n(this);j.call(e,e.data())})})})(g)});if(typeof jQuery>"u")throw new Error("Bootstrap's JavaScript requires jQuery");+function(g){var n=g.fn.jquery.split(" ")[0].split(".");if(n[0]<2&&n[1]<9||n[0]==1&&n[1]==9&&n[2]<1||n[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(g){function n(m){var $=m.attr("data-target");$||($=m.attr("href"),$=$&&/#[A-Za-z]/.test($)&&$.replace(/.*(?=#[^\s]*$)/,""));var b=$&&g($);return b&&b.length?b:m.parent()}function N(m){m&&m.which===3||(g(B).remove(),g(L).each(function(){var $=g(this),b=n($),O={relatedTarget:this};b.hasClass("open")&&(m&&m.type=="click"&&/input|textarea/i.test(m.target.tagName)&&g.contains(b[0],m.target)||(b.trigger(m=g.Event("hide.bs.dropdown",O)),m.isDefaultPrevented()||($.attr("aria-expanded","false"),b.removeClass("open").trigger(g.Event("hidden.bs.dropdown",O)))))}))}function j(m){return this.each(function(){var $=g(this),b=$.data("bs.dropdown");b||$.data("bs.dropdown",b=new D(this)),typeof m=="string"&&b[m].call($)})}var B=".dropdown-backdrop",L='[data-toggle="dropdown"]',D=function(m){g(m).on("click.bs.dropdown",this.toggle)};D.VERSION="3.3.7",D.prototype.toggle=function(m){var $=g(this);if(!$.is(".disabled, :disabled")){var b=n($),O=b.hasClass("open");if(N(),!O){"ontouchstart"in document.documentElement&&!b.closest(".navbar-nav").length&&g(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(g(this)).on("click",N);var w={relatedTarget:this};if(b.trigger(m=g.Event("show.bs.dropdown",w)),m.isDefaultPrevented())return;$.trigger("focus").attr("aria-expanded","true"),b.toggleClass("open").trigger(g.Event("shown.bs.dropdown",w))}return!1}},D.prototype.keydown=function(m){if(/(38|40|27|32)/.test(m.which)&&!/input|textarea/i.test(m.target.tagName)){var $=g(this);if(m.preventDefault(),m.stopPropagation(),!$.is(".disabled, :disabled")){var b=n($),O=b.hasClass("open");if(!O&&m.which!=27||O&&m.which==27)return m.which==27&&b.find(L).trigger("focus"),$.trigger("click");var w=" li:not(.disabled):visible a",W=b.find(".dropdown-menu"+w);if(W.length){var e=W.index(m.target);m.which==38&&e>0&&e--,m.which==40&&e<W.length-1&&e++,~e||(e=0),W.eq(e).trigger("focus")}}}};var Q=g.fn.dropdown;g.fn.dropdown=j,g.fn.dropdown.Constructor=D,g.fn.dropdown.noConflict=function(){return g.fn.dropdown=Q,this},g(document).on("click.bs.dropdown.data-api",N).on("click.bs.dropdown.data-api",".dropdown form",function(m){m.stopPropagation()}).on("click.bs.dropdown.data-api",L,D.prototype.toggle).on("keydown.bs.dropdown.data-api",L,D.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",D.prototype.keydown)}(jQuery)});export default K();
