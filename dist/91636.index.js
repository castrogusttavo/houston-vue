"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[91636],{66262:(t,o)=>{o.A=(t,o)=>{const e=t.__vccOpts||t;for(const[t,n]of o)e[t]=n;return e}},45358:(t,o,e)=>{e.d(o,{A:()=>c});var n=e(62508);const r=["innerHTML"],i={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:t=>["stroke","solid","bulk","duotone","twotone"].includes(t),required:!1},cornerStyle:{type:String,default:"rounded",validator:t=>["sharp","rounded","standard"].includes(t),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const t=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(t).then((t=>t.text())).then((t=>{const o=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;o.setAttribute("width",this.iconSize.toString()),o.setAttribute("height",this.iconSize.toString()),o.setAttribute("fill",this.color),o.querySelectorAll("*").forEach((t=>{t.hasAttribute("fill")&&t.setAttribute("fill",this.color),t.hasAttribute("stroke")&&t.setAttribute("stroke",this.color)})),this.svgContent=o.outerHTML})).catch((t=>{console.error("Error loading icon:",t),this.svgContent=""}))}}},c=(0,e(66262).A)(i,[["render",function(t,o,e,i,c,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{innerHTML:c.svgContent},null,8,r)}]])},91636:(t,o,e)=>{e.r(o),e.d(o,{default:()=>c});var n=e(62508),r=e(45358);const i={name:"BookDownloadIcon",components:{Icon:r.A},props:{iconName:{type:String,default:"book-download"},...r.A.props},computed:{props(){return{...this.$props}}}},c=(0,e(66262).A)(i,[["render",function(t,o,e,r,i,c){const s=(0,n.resolveComponent)("Icon");return(0,n.openBlock)(),(0,n.createBlock)(s,(0,n.mergeProps)({iconName:"book-download"},c.props),null,16)}]])}}]);