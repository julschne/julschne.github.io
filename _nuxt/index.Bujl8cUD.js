import{_ as r,i as s,v as n,x as e,y as a,z as c,A as u,t as l,B as d}from"./entry.u3tKllDu.js";const _={computed:{route(){return this.$route}},mounted(){console.log("Component mounted.")},methods:{refresh(){this.$router.go()}}},i={class:"d-flex flex-column"},p=e("h1",null,"Nuxt Routing set up successfully!",-1),h=e("a",{href:"https://nuxt.com/docs/getting-started/routing",target:"_blank"},"Learn more about Nuxt Routing",-1);function f(m,x,g,C,k,t){const o=s("v-btn");return l(),n("div",i,[p,e("p",null,"Current route: "+a(t.route.path),1),h,c(o,{color:"error",rounded:"",onClick:t.refresh},{default:u(()=>[d("Refresh page")]),_:1},8,["onClick"])])}const N=r(_,[["render",f]]);export{N as default};
