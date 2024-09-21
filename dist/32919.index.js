"use strict";(this.webpackChunk_houstonicons_vue=this.webpackChunk_houstonicons_vue||[]).push([[32919],{66262:(t,e)=>{e.A=(t,e)=>{const o=t.__vccOpts||t;for(const[t,r]of e)o[t]=r;return o}},45358:(t,e,o)=>{o.d(e,{A:()=>s});var r=o(62508);const n=["innerHTML"],i={props:{iconName:{type:String,default:"default-icon",required:!0},iconSize:{type:Number,default:24,required:!1},fillType:{type:String,default:"stroke",validator:t=>["stroke","solid","bulk","duotone","twotone"].includes(t),required:!1},cornerStyle:{type:String,default:"rounded",validator:t=>["sharp","rounded","standard"].includes(t),required:!1},color:{type:String,default:"#000000",required:!1}},data:()=>({svgContent:""}),watch:{iconName:"loadIcon",iconSize:"loadIcon",fillType:"loadIcon",cornerStyle:"loadIcon",color:"loadIcon"},mounted(){this.loadIcon()},methods:{loadIcon(){const t=`https://cdn.hugeicons.com/icons/${this.iconName}-${this.fillType}-${this.cornerStyle}.svg`;fetch(t).then((t=>t.text())).then((t=>{const e=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;e.setAttribute("width",this.iconSize.toString()),e.setAttribute("height",this.iconSize.toString()),e.setAttribute("fill",this.color),e.querySelectorAll("*").forEach((t=>{t.hasAttribute("fill")&&t.setAttribute("fill",this.color),t.hasAttribute("stroke")&&t.setAttribute("stroke",this.color)})),this.svgContent=e.outerHTML})).catch((t=>{console.error("Error loading icon:",t),this.svgContent=""}))}}},s=(0,o(66262).A)(i,[["render",function(t,e,o,i,s,c){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{innerHTML:s.svgContent},null,8,n)}]])},32919:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var r=o(62508),n=o(45358);const i={name:"PassportExpiredIcon",components:{Icon:n.A},props:{iconName:{type:String,default:"passport-expired"},...n.A.props},computed:{props(){return{...this.$props}}}},s=(0,o(66262).A)(i,[["render",function(t,e,o,n,i,s){const c=(0,r.resolveComponent)("Icon");return(0,r.openBlock)(),(0,r.createBlock)(c,(0,r.mergeProps)({iconName:"passport-expired"},s.props),null,16)}]])}}]);