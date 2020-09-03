function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(h){a=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3sZV":function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return k}));var n=i("fXoL"),a=i("ofXK"),r=i("HDdC"),s=i("2Vo4"),o=i("XNiG"),h=i("itXk"),g=i("lJxs"),l=i("IzEk"),c=i("UXun"),u=i("1G5W"),_=["*"],p=function(){function e(t){_classCallCheck(this,e),this._ngZone=t,this._pending=[],this._listeners=[]}return _createClass(e,[{key:"_clearListeners",value:function(){var e=!0,t=!1,i=void 0;try{for(var n,a=this._listeners[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){n.value.remove()}}catch(r){t=!0,i=r}finally{try{e||null==a.return||a.return()}finally{if(t)throw i}}this._listeners=[]}},{key:"getLazyEmitter",value:function(e){var t=this,i=new r.a((function(n){if(t._target){var a=t._target.addListener(e,(function(e){t._ngZone.run((function(){return n.next(e)}))}));return t._listeners.push(a),function(){return a.remove()}}t._pending.push({observable:i,observer:n})}));return i}},{key:"setTarget",value:function(e){e!==this._target&&(this._target&&(this._clearListeners(),this._pending=[]),this._target=e,this._pending.forEach((function(e){return e.observable.subscribe(e.observer)})),this._pending=[])}},{key:"destroy",value:function(){this._clearListeners(),this._pending=[],this._target=void 0}}]),e}(),d={center:{lat:37.421995,lng:-122.084092},zoom:17},m=function(){var e=function(){function e(t,i,n){if(_classCallCheck(this,e),this._elementRef=t,this._ngZone=i,this._eventManager=new p(this._ngZone),this._options=new s.a(d),this._center=new s.a(void 0),this._zoom=new s.a(void 0),this._destroy=new o.a,this.height="500px",this.width="500px",this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=n?Object(a.isPlatformBrowser)(n):"object"==typeof window&&!!window,this._isBrowser&&!window.google)throw Error("Namespace google not found, cannot construct embedded google map. Please install the Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/tutorial#Loading_the_Maps_API")}return _createClass(e,[{key:"ngOnChanges",value:function(){this._setSize()}},{key:"ngOnInit",value:function(){var e=this;this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._googleMapChanges=this._initializeMap(this._combineOptions()),this._googleMapChanges.subscribe((function(t){e._googleMap=t,e._eventManager.setTarget(e._googleMap)})),this._watchForOptionsChanges(),this._watchForCenterChanges(),this._watchForZoomChanges())}},{key:"ngOnDestroy",value:function(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete()}},{key:"fitBounds",value:function(e,t){this._assertInitialized(),this._googleMap.fitBounds(e,t)}},{key:"panBy",value:function(e,t){this._assertInitialized(),this._googleMap.panBy(e,t)}},{key:"panTo",value:function(e){this._assertInitialized(),this._googleMap.panTo(e)}},{key:"panToBounds",value:function(e,t){this._assertInitialized(),this._googleMap.panToBounds(e,t)}},{key:"getBounds",value:function(){return this._assertInitialized(),this._googleMap.getBounds()||null}},{key:"getCenter",value:function(){return this._assertInitialized(),this._googleMap.getCenter()}},{key:"getClickableIcons",value:function(){return this._assertInitialized(),this._googleMap.getClickableIcons()}},{key:"getHeading",value:function(){return this._assertInitialized(),this._googleMap.getHeading()}},{key:"getMapTypeId",value:function(){return this._assertInitialized(),this._googleMap.getMapTypeId()}},{key:"getProjection",value:function(){return this._assertInitialized(),this._googleMap.getProjection()}},{key:"getStreetView",value:function(){return this._assertInitialized(),this._googleMap.getStreetView()}},{key:"getTilt",value:function(){return this._assertInitialized(),this._googleMap.getTilt()}},{key:"getZoom",value:function(){return this._assertInitialized(),this._googleMap.getZoom()}},{key:"_setSize",value:function(){if(this._mapEl){var e=this._mapEl.style;e.height=y(this.height)||"500px",e.width=y(this.width)||"500px"}}},{key:"_combineOptions",value:function(){return Object(h.a)([this._options,this._center,this._zoom]).pipe(Object(g.a)((function(e){var t=_slicedToArray(e,3),i=t[0],n=t[1],a=t[2];return Object.assign(Object.assign({},i),{center:n||i.center,zoom:void 0!==a?a:i.zoom})})))}},{key:"_initializeMap",value:function(e){var t=this;return e.pipe(Object(l.a)(1),Object(g.a)((function(e){return t._ngZone.runOutsideAngular((function(){return new google.maps.Map(t._mapEl,e)}))})),Object(c.a)(1))}},{key:"_watchForOptionsChanges",value:function(){Object(h.a)([this._googleMapChanges,this._options]).pipe(Object(u.a)(this._destroy)).subscribe((function(e){var t=_slicedToArray(e,2),i=t[0],n=t[1];i.setOptions(n)}))}},{key:"_watchForCenterChanges",value:function(){Object(h.a)([this._googleMapChanges,this._center]).pipe(Object(u.a)(this._destroy)).subscribe((function(e){var t=_slicedToArray(e,2),i=t[0],n=t[1];n&&i.setCenter(n)}))}},{key:"_watchForZoomChanges",value:function(){Object(h.a)([this._googleMapChanges,this._zoom]).pipe(Object(u.a)(this._destroy)).subscribe((function(e){var t=_slicedToArray(e,2),i=t[0],n=t[1];void 0!==n&&i.setZoom(n)}))}},{key:"_assertInitialized",value:function(){if(!this._googleMap)throw Error("Cannot access Google Map information before the API has been initialized. Please wait for the API to load before trying to interact with it.")}},{key:"center",set:function(e){this._center.next(e)}},{key:"zoom",set:function(e){this._zoom.next(e)}},{key:"options",set:function(e){this._options.next(e||d)}},{key:"controls",get:function(){return this._assertInitialized(),this._googleMap.controls}},{key:"data",get:function(){return this._assertInitialized(),this._googleMap.data}},{key:"mapTypes",get:function(){return this._assertInitialized(),this._googleMap.mapTypes}},{key:"overlayMapTypes",get:function(){return this._assertInitialized(),this._googleMap.overlayMapTypes}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.ElementRef),n["\u0275\u0275directiveInject"](n.NgZone),n["\u0275\u0275directiveInject"](n.PLATFORM_ID,8))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},features:[n["\u0275\u0275NgOnChangesFeature"]()],ngContentSelectors:_,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(n["\u0275\u0275projectionDef"](),n["\u0275\u0275element"](0,"div",0),n["\u0275\u0275projection"](1))},encapsulation:2,changeDetection:0}),e}(),v=/([A-Za-z%]+)$/;function y(e){return null==e?"":v.test(e)?e:"".concat(e,"px")}var f={position:{lat:37.421995,lng:-122.084092}},k=function(){var e=function(){function e(t,i){_classCallCheck(this,e),this._googleMap=t,this._ngZone=i,this._eventManager=new p(this._ngZone),this._options=new s.a(f),this._title=new s.a(void 0),this._position=new s.a(void 0),this._label=new s.a(void 0),this._clickable=new s.a(void 0),this._destroy=new o.a,this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this._googleMap._isBrowser&&(this._combineOptions().pipe(Object(l.a)(1)).subscribe((function(t){e._ngZone.runOutsideAngular((function(){return e._marker=new google.maps.Marker(t)})),e._marker.setMap(e._googleMap._googleMap),e._eventManager.setTarget(e._marker)})),this._watchForOptionsChanges(),this._watchForTitleChanges(),this._watchForPositionChanges(),this._watchForLabelChanges(),this._watchForClickableChanges())}},{key:"ngOnDestroy",value:function(){this._destroy.next(),this._destroy.complete(),this._eventManager.destroy(),this._marker&&this._marker.setMap(null)}},{key:"getAnimation",value:function(){return this._marker&&this._marker.getAnimation()||null}},{key:"getClickable",value:function(){return!!this._marker&&this._marker.getClickable()}},{key:"getCursor",value:function(){return this._marker&&this._marker.getCursor()||null}},{key:"getDraggable",value:function(){return!!this._marker&&!!this._marker.getDraggable()}},{key:"getIcon",value:function(){return this._marker&&this._marker.getIcon()||null}},{key:"getLabel",value:function(){return this._marker&&this._marker.getLabel()||null}},{key:"getOpacity",value:function(){return this._marker&&this._marker.getOpacity()||null}},{key:"getPosition",value:function(){return this._marker&&this._marker.getPosition()||null}},{key:"getShape",value:function(){return this._marker&&this._marker.getShape()||null}},{key:"getTitle",value:function(){return this._marker&&this._marker.getTitle()||null}},{key:"getVisible",value:function(){return!!this._marker&&this._marker.getVisible()}},{key:"getZIndex",value:function(){return this._marker&&this._marker.getZIndex()||null}},{key:"_combineOptions",value:function(){var e=this;return Object(h.a)([this._options,this._title,this._position,this._label,this._clickable]).pipe(Object(g.a)((function(t){var i=_slicedToArray(t,5),n=i[0],a=i[1],r=i[2],s=i[3],o=i[4];return Object.assign(Object.assign({},n),{title:a||n.title,position:r||n.position,label:s||n.label,clickable:void 0!==o?o:n.clickable,map:e._googleMap._googleMap||null})})))}},{key:"_watchForOptionsChanges",value:function(){var e=this;this._options.pipe(Object(u.a)(this._destroy)).subscribe((function(t){e._marker&&e._marker.setOptions(t)}))}},{key:"_watchForTitleChanges",value:function(){var e=this;this._title.pipe(Object(u.a)(this._destroy)).subscribe((function(t){e._marker&&void 0!==t&&e._marker.setTitle(t)}))}},{key:"_watchForPositionChanges",value:function(){var e=this;this._position.pipe(Object(u.a)(this._destroy)).subscribe((function(t){e._marker&&t&&e._marker.setPosition(t)}))}},{key:"_watchForLabelChanges",value:function(){var e=this;this._label.pipe(Object(u.a)(this._destroy)).subscribe((function(t){e._marker&&void 0!==t&&e._marker.setLabel(t)}))}},{key:"_watchForClickableChanges",value:function(){var e=this;this._clickable.pipe(Object(u.a)(this._destroy)).subscribe((function(t){e._marker&&void 0!==t&&e._marker.setClickable(t)}))}},{key:"options",set:function(e){this._options.next(e||f)}},{key:"title",set:function(e){this._title.next(e)}},{key:"position",set:function(e){this._position.next(e)}},{key:"label",set:function(e){this._label.next(e)}},{key:"clickable",set:function(e){this._clickable.next(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](m),n["\u0275\u0275directiveInject"](n.NgZone))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["map-marker"]],inputs:{options:"options",title:"title",position:"position",label:"label",clickable:"clickable"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},ngContentSelectors:_,decls:1,vars:0,template:function(e,t){1&e&&(n["\u0275\u0275projectionDef"](),n["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),e}(),b=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e}()}}]);