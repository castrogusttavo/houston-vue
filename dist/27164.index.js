"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[27164],{66262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},45358:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(62508);const n=["innerHTML"],c={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:e=>["stroke","solid","bulk","duotone","twotone"].includes(e),required:!1},cornerStyle:{type:String,default:"rounded",validator:e=>["sharp","rounded","standard"].includes(e),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const e=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(e).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;t.setAttribute("width",this.iconSize.toString()),t.setAttribute("height",this.iconSize.toString()),t.setAttribute("fill",this.color),t.querySelectorAll("*").forEach((e=>{e.hasAttribute("fill")&&e.setAttribute("fill",this.color),e.hasAttribute("stroke")&&e.setAttribute("stroke",this.color)})),this.svgContent=t.outerHTML})).catch((e=>{console.error("Error loading icon:",e),this.svgContent=""}))}}},i=(0,o(66262).A)(c,[["render",function(e,t,o,c,i,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{innerHTML:i.svgContent},null,8,n)}]])},27164:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var r=o(62508),n=o(45358);const c={name:"SourceCodeCircleIcon",components:{Icon:n.A},props:{iconName:{type:String,default:"source-code-circle"},...n.A.props},computed:{props(){return{...this.$props}}}},i=(0,o(66262).A)(c,[["render",function(e,t,o,n,c,i){const s=(0,r.resolveComponent)("Icon");return(0,r.openBlock)(),(0,r.createBlock)(s,(0,r.mergeProps)({iconName:"source-code-circle"},i.props),null,16)}]])}}]);