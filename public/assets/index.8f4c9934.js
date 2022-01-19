import{a as D,r,j as e,b as c,M as R,c as B,d as E,B as u,I as C,e as F,H as y,T as f,f as O,g as $,h as A,i as j,u as I,G as N,k as W,S as G,F as P,l as H,C as U,R as q,m as K}from"./vendor.d099851f.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}};V();const Y="690accf353ce8fb9eea892fc384f66ef",J="https://api.themoviedb.org/3",M="https://image.tmdb.org/t/p/original/",Q=D.create({baseURL:J}),X=o=>`/trending/${o.media}/${o.terms}?api_key=${Y}&language=${o.language}`,m={language:{default:"ja",choices:[{value:"ja",label:"\u65E5\u672C\u8A9E"},{value:"en-us",label:"English"},{value:"de",label:"Deutsch"},{value:"ko",label:"\uD55C\uAD6D\uC5B4"}]},media:{default:"all",choices:[{value:"all",label:"All"},{value:"movie",label:"Movie"},{value:"tv",label:"TV"}]},terms:{default:"day",choices:[{value:"day",label:"Today"},{value:"week",label:"This week"}]}},L=r.exports.createContext({}),Z=o=>{const{children:n}=o,[a,s]=r.exports.useState({language:m.language.default,media:m.media.default,terms:m.terms.default});return e(L.Provider,{value:{searchFilter:a,setSearchFilter:s},children:n})},T=()=>r.exports.useContext(L),ee=o=>{const{isOpen:n,movie:a,onClose:s}=o;return c(R,{isOpen:n,onClose:s,size:"3xl",isCentered:!0,children:[e(B,{bgColor:"rgba(0,0,0,.6)"}),c(E,{borderRadius:{base:0,lg:30},backdropFilter:"blur(9px)",bgColor:"rgba(255,255,255,0.3)",children:[e(u,{children:e(C,{src:`${M}${a.backdrop_path}`,borderTopLeftRadius:{base:0,lg:30},borderTopRightRadius:{base:0,lg:30}})}),c(F,{children:[e(y,{as:"h2",fontSize:{base:"sm",sm:"lg"},children:a.title||a.name}),e(f,{fontSize:"sm",children:a.original_title||a.original_name}),e(O,{colorScheme:"teal",children:a.media_type}),c(f,{fontSize:"sm",mb:2,children:["Release : ",a.release_date||"Not Data ..."]})]}),e($,{children:a.overview||"Not Description ..."}),e(A,{children:e(j,{colorScheme:"blackAlpha",mr:3,onClick:s,bgColor:"rgba(0,0,0,0)",_hover:{bgColor:"rgba(255,255,255)",color:"black"},children:"Close"})})]})]})},k=()=>{const o=()=>{const{innerWidth:s,innerHeight:t}=window;return{width:s,height:t}},[n,a]=r.exports.useState(o());return r.exports.useEffect(()=>{const s=()=>{a(o())};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),n},te=o=>{const{title:n,isLargeRow:a}=o,s={transform:"scale(1.1)",filter:"grayscale(100%)"},[t,l]=r.exports.useState([]),[d,b]=r.exports.useState({}),{width:g}=k(),{isOpen:x,onOpen:v,onClose:h}=I(),{searchFilter:z}=T(),S=X(z);r.exports.useEffect(()=>{async function i(){console.log(S);const p=await Q.get(S);return l(p.data.results),p}i()},[S]);const _=r.exports.useCallback(i=>{v(),b(i)},[d]);return c(u,{mb:6,children:[e(y,{as:"h2",fontSize:{base:"xl",md:"2xl",lg:"3xl"},mb:4,pl:".5em",children:n}),e(N,{gap:5,justify:"center",templateColumns:{base:"100%",sm:"repeat(auto-fill, minmax(360px, 1fr))"},children:t.map((i,p)=>c(W,{cursor:"pointer",onClick:()=>_(i),children:[e(u,{overflow:"hidden",children:e(C,{transition:"all .2s",_hover:g>500?s:{},_active:g<=500?s:{},src:`${M}${a?i.poster_path:i.backdrop_path}`,w:"100%",alt:i.title||i.name})}),c(f,{fontSize:{base:"sm",lg:"md"},overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:[p+1," : ",i.title||i.name]})]},i.id))}),e(ee,{isOpen:x,onClose:h,movie:d})]})},oe=r.exports.memo(o=>{const{options:n,size:a="md",onChange:s}=o;return e(G,{size:a,variant:"flushed",onChange:s,w:"100%",children:n.map(t=>e("option",{value:t.value,children:t.label},t.value))})}),w=r.exports.memo(o=>{const{options:n,size:a="md",labelText:s,onChange:t}=o;return c(u,{children:[e(f,{fontSize:"sm",children:s}),e(oe,{options:n,size:a,onChange:t})]})}),ae=r.exports.memo(()=>{const{searchFilter:o,setSearchFilter:n}=T(),[a,s]=r.exports.useState(o.language),[t,l]=r.exports.useState(o.media),[d,b]=r.exports.useState(o.terms);r.exports.useEffect(()=>{n({language:a,media:t,terms:d})},[a,t,d]);const g=h=>s(h.target.value),x=h=>l(h.target.value),v=h=>b(h.target.value);return c(P,{gap:{base:4,md:8,lg:12},justify:{base:"space-between",sm:"center"},align:"center",flexDirection:"row",flexWrap:"wrap",mb:10,p:"0 20px",children:[e(u,{children:e(w,{labelText:"Media",options:m.media.choices,size:"sm",onChange:x})}),e(u,{children:e(w,{labelText:"Terms",options:m.terms.choices,size:"sm",onChange:v})}),e(u,{children:e(w,{labelText:"Language",options:m.language.choices,size:"sm",onChange:g})})]})}),se=H({fonts:{heading:"Cormorant Garamond",body:"Noto Sans Georgian"},styles:{global:{body:{backgroundColor:"Black",color:"White"}}},components:{Button:{baseStyle:{_focus:{boxShadow:"unset"}}},ModalCloseButton:{baseStyle:{control:{_focus:{boxShadow:"none"}}}}}});function ne(){const{width:o}=k();return e(U,{theme:se,children:c(u,{p:"30px 0",children:[e(ae,{}),e(te,{title:"Global Trending Now.",isLargeRow:!(o>740)})]})})}q.render(e(K.StrictMode,{children:e(Z,{children:e(ne,{})})}),document.getElementById("root"));