"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[12201],{21535:(t,e)=>{e.A=(t,e)=>{const o=t.__vccOpts||t;for(const[t,n]of e)o[t]=n;return o}},45358:(t,e,o)=>{o.d(e,{A:()=>c});var n=o(62508);const r=["innerHTML"],i={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:t=>["stroke","solid","bulk","duotone","twotone"].includes(t),required:!1},cornerStyle:{type:String,default:"rounded",validator:t=>["sharp","rounded","standard"].includes(t),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const t=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(t).then((t=>t.text())).then((t=>{const e=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;e.setAttribute("width",this.iconSize.toString()),e.setAttribute("height",this.iconSize.toString()),e.setAttribute("fill",this.color),e.querySelectorAll("*").forEach((t=>{t.hasAttribute("fill")&&t.setAttribute("fill",this.color),t.hasAttribute("stroke")&&t.setAttribute("stroke",this.color)})),this.svgContent=e.outerHTML})).catch((t=>{console.error("Error loading icon:",t),this.svgContent=""}))}}},c=(0,o(21535).A)(i,[["render",function(t,e,o,i,c,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{innerHTML:c.svgContent},null,8,r)}]])},12201:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var n=o(62508),r=o(45358);const i={name:"RotateClockwiseIcon",components:{Icon:r.A},props:{iconName:{type:String,default:"rotate-clockwise"},...r.A.props},computed:{props(){return{...this.$props}}}},c=(0,o(21535).A)(i,[["render",function(t,e,o,r,i,c){const s=(0,n.resolveComponent)("Icon");return(0,n.openBlock)(),(0,n.createBlock)(s,(0,n.mergeProps)({iconName:"rotate-clockwise"},c.props),null,16)}]])}}]);