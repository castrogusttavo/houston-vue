"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[90745],{21535:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},45358:(e,t,o)=>{o.d(t,{A:()=>s});var n=o(62508);const r=["innerHTML"],i={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:e=>["stroke","solid","bulk","duotone","twotone"].includes(e),required:!1},cornerStyle:{type:String,default:"rounded",validator:e=>["sharp","rounded","standard"].includes(e),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const e=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(e).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;t.setAttribute("width",this.iconSize.toString()),t.setAttribute("height",this.iconSize.toString()),t.setAttribute("fill",this.color),t.querySelectorAll("*").forEach((e=>{e.hasAttribute("fill")&&e.setAttribute("fill",this.color),e.hasAttribute("stroke")&&e.setAttribute("stroke",this.color)})),this.svgContent=t.outerHTML})).catch((e=>{console.error("Error loading icon:",e),this.svgContent=""}))}}},s=(0,o(21535).A)(i,[["render",function(e,t,o,i,s,c){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{innerHTML:s.svgContent},null,8,r)}]])},90745:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(62508),r=o(45358);const i={name:"MessageUpload02Icon",components:{Icon:r.A},props:{iconName:{type:String,default:"message-upload-02"},...r.A.props},computed:{props(){return{...this.$props}}}},s=(0,o(21535).A)(i,[["render",function(e,t,o,r,i,s){const c=(0,n.resolveComponent)("Icon");return(0,n.openBlock)(),(0,n.createBlock)(c,(0,n.mergeProps)({iconName:"message-upload-02"},s.props),null,16)}]])}}]);