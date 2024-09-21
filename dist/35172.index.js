"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[35172],{21535:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},45358:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(62508);const r=["innerHTML"],i={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:e=>["stroke","solid","bulk","duotone","twotone"].includes(e),required:!1},cornerStyle:{type:String,default:"rounded",validator:e=>["sharp","rounded","standard"].includes(e),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const e=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(e).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;t.setAttribute("width",this.iconSize.toString()),t.setAttribute("height",this.iconSize.toString()),t.setAttribute("fill",this.color),t.querySelectorAll("*").forEach((e=>{e.hasAttribute("fill")&&e.setAttribute("fill",this.color),e.hasAttribute("stroke")&&e.setAttribute("stroke",this.color)})),this.svgContent=t.outerHTML})).catch((e=>{console.error("Error loading icon:",e),this.svgContent=""}))}}},c=(0,o(21535).A)(i,[["render",function(e,t,o,i,c,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{innerHTML:c.svgContent},null,8,r)}]])},35172:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(62508),r=o(45358);const i={name:"FileRemoveIcon",components:{Icon:r.A},props:{iconName:{type:String,default:"file-remove"},...r.A.props},computed:{props(){return{...this.$props}}}},c=(0,o(21535).A)(i,[["render",function(e,t,o,r,i,c){const s=(0,n.resolveComponent)("Icon");return(0,n.openBlock)(),(0,n.createBlock)(s,(0,n.mergeProps)({iconName:"file-remove"},c.props),null,16)}]])}}]);