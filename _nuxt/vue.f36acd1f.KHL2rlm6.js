import{E as o,r as u,F as f,G as d,H as v,e as l,I as i,J as h,K as m}from"./entry.u3tKllDu.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),m()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};