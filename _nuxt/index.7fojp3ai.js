import{_ as r,v as s,x as e,y as n,z as a,A as c,i as u,t as l,B as d}from"./entry.IZ2aGtgC.js";const _={computed:{route(){return this.$route}},mounted(){console.log("Component mounted.")},methods:{refresh(){this.$router.go()}}},i={class:"d-flex flex-column"},p=e("h1",null,"Nuxt Routing set up successfully!",-1),h=e("a",{href:"https://nuxt.com/docs/getting-started/routing",target:"_blank"},"Learn more about Nuxt Routing",-1);function f(m,x,g,C,k,t){const o=u("v-btn");return l(),s("div",i,[p,e("p",null,"Current route: "+n(t.route.path),1),h,a(o,{color:"error",rounded:"",onClick:t.refresh},{default:c(()=>[d("Refresh page")]),_:1},8,["onClick"])])}const N=r(_,[["render",f]]);export{N as default};
