var Ae=Object.defineProperty;var Ce=(a,e,r)=>e in a?Ae(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var u=(a,e,r)=>Ce(a,typeof e!="symbol"?e+"":e,r);import{i as A,a as C,_ as R,A as M,b as le,c as Re,j as t,C as Me,L as B,M as De,P as we,d as J,S as Ie,F as f,B as g,I as S,e as Ee,f as de,T as pe,g as qe,D as Fe,h as Te}from"./vendor_antd-DmvWo8uX.js";import{c as ke,r as l,g as D,u as Le,h as Ne,i as ze,j as He}from"./vendor_react-DO4mFRKc.js";import{m as I,a as Be,o as E}from"./vendor-lAo3GQ2-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var me,ie=ke;me=ie.createRoot,ie.hydrateRoot;var Y={exports:{}},q={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};Q.default=Ye;var Ue=A.default,G=C.default;Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var We=G(R),fe=Ue(l),Ke=G(Q),Ve=G(M),Je=function(e,r){return fe.createElement(Ve.default,(0,We.default)({},e,{ref:r,icon:Ke.default}))},Qe=fe.forwardRef(Je);q.default=Qe;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const r=n(q);function n(o){return o&&o.__esModule?o:{default:o}}const s=r;e.default=s,a.exports=s})(Y,Y.exports);var Ge=Y.exports;const Xe=D(Ge);var Ze={items_per_page:"/ página",jump_to:"Vá até",jump_to_confirm:"confirme",page:"Página",prev_page:"Página anterior",next_page:"Próxima página",prev_5:"5 páginas anteriores",next_5:"5 próximas páginas",prev_3:"3 páginas anteriores",next_3:"3 próximas páginas",page_size:"tamanho da página"},et=le(le({},Re),{},{locale:"pt_BR",today:"Hoje",now:"Agora",backToToday:"Voltar para hoje",ok:"OK",clear:"Limpar",month:"Mês",year:"Ano",timeSelect:"Selecionar hora",dateSelect:"Selecionar data",monthSelect:"Escolher mês",yearSelect:"Escolher ano",decadeSelect:"Escolher década",dateFormat:"D/M/YYYY",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!1,previousMonth:"Mês anterior (PageUp)",nextMonth:"Próximo mês (PageDown)",previousYear:"Ano anterior (Control + esquerda)",nextYear:"Próximo ano (Control + direita)",previousDecade:"Década anterior",nextDecade:"Próxima década",previousCentury:"Século anterior",nextCentury:"Próximo século",shortWeekDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]});const he={placeholder:"Hora"},ce={lang:Object.assign({placeholder:"Selecionar data",rangePlaceholder:["Data inicial","Data final"]},et),timePickerLocale:Object.assign({},he)},p="${label} não é um ${type} válido",tt={locale:"pt-br",Pagination:Ze,DatePicker:ce,TimePicker:he,Calendar:ce,global:{placeholder:"Por favor escolha"},Table:{filterTitle:"Menu de Filtro",filterConfirm:"OK",filterReset:"Resetar",filterEmptyText:"Sem filtros",filterCheckall:"Selecionar todos os itens",filterSearchPlaceholder:"Pesquisar nos filtros",emptyText:"Sem conteúdo",selectAll:"Selecionar página atual",selectInvert:"Inverter seleção",selectNone:"Apagar todo o conteúdo",selectionAll:"Selecionar todo o conteúdo",sortTitle:"Ordenar título",expand:"Expandir linha",collapse:"Colapsar linha",triggerDesc:"Clique organiza por descendente",triggerAsc:"Clique organiza por ascendente",cancelSort:"Clique para cancelar organização"},Tour:{Next:"Próximo",Previous:"Anterior",Finish:"Finalizar"},Modal:{okText:"OK",cancelText:"Cancelar",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancelar"},Transfer:{titles:["",""],searchPlaceholder:"Procurar",itemUnit:"item",itemsUnit:"items",remove:"Remover",selectCurrent:"Selecionar página atual",removeCurrent:"Remover página atual",selectAll:"Selecionar todos",removeAll:"Remover todos",selectInvert:"Inverter seleção atual"},Upload:{uploading:"Enviando...",removeFile:"Remover arquivo",uploadError:"Erro no envio",previewFile:"Visualizar arquivo",downloadFile:"Baixar arquivo"},Empty:{description:"Não há dados"},Icon:{icon:"ícone"},Text:{edit:"editar",copy:"copiar",copied:"copiado",expand:"expandir"},Form:{optional:"(opcional)",defaultValidateMessages:{default:"Erro ${label} na validação de campo",required:"Por favor, insira ${label}",enum:"${label} deve ser um dos seguinte: [${enum}]",whitespace:"${label} não pode ser um carácter vazio",date:{format:" O formato de data ${label} é inválido",parse:"${label} não pode ser convertido para uma data",invalid:"${label} é uma data inválida"},types:{string:p,method:p,array:p,object:p,number:p,date:p,boolean:p,integer:p,float:p,regexp:p,email:p,url:p,hex:p},string:{len:"${label} deve possuir ${len} caracteres",min:"${label} deve possuir ao menos ${min} caracteres",max:"${label} deve possuir no máximo ${max} caracteres",range:"${label} deve possuir entre ${min} e ${max} caracteres"},number:{len:"${label} deve ser igual à ${len}",min:"O valor mínimo de ${label} é ${min}",max:"O valor máximo de ${label} é ${max}",range:"${label} deve estar entre ${min} e ${max}"},array:{len:"Deve ser ${len} ${label}",min:"No mínimo ${min} ${label}",max:"No máximo ${max} ${label}",range:"A quantidade de ${label} deve estar entre ${min} e ${max}"},pattern:{mismatch:"${label} não se encaixa no padrão ${pattern}"}}},Image:{preview:"Pré-visualização"}};var U={exports:{}},F={},X={};Object.defineProperty(X,"__esModule",{value:!0});var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};X.default=at;var rt=A.default,Z=C.default;Object.defineProperty(F,"__esModule",{value:!0});F.default=void 0;var st=Z(R),ve=rt(l),ot=Z(X),nt=Z(M),lt=function(e,r){return ve.createElement(nt.default,(0,st.default)({},e,{ref:r,icon:ot.default}))},it=ve.forwardRef(lt);F.default=it;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const r=n(F);function n(o){return o&&o.__esModule?o:{default:o}}const s=r;e.default=s,a.exports=s})(U,U.exports);var ct=U.exports;const ut=D(ct);var W={exports:{}},T={},ee={};Object.defineProperty(ee,"__esModule",{value:!0});var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};ee.default=dt;var pt=A.default,te=C.default;Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;var mt=te(R),xe=pt(l),ft=te(ee),ht=te(M),vt=function(e,r){return xe.createElement(ht.default,(0,mt.default)({},e,{ref:r,icon:ft.default}))},xt=xe.forwardRef(vt);T.default=xt;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const r=n(T);function n(o){return o&&o.__esModule?o:{default:o}}const s=r;e.default=s,a.exports=s})(W,W.exports);var gt=W.exports;const yt=D(gt);var w=(a=>(a.HOME="/",a.POSTS="/posts",a.AUTHORS="/authors",a))(w||{});const ge={posts:{id:"posts",name:"Postagens",path:"/posts",icon:ut},authors:{id:"authors",name:"Autores",path:"/authors",icon:yt}};class _t{constructor(){u(this,"collapsed",!0);u(this,"setCollapsed",e=>{this.collapsed=e});I(this)}}const $=Be.create({baseURL:"https://modular-server.onrender.com",proxy:!1});class O{}u(O,"getAll",async e=>{const{data:r}=await $.get(`/posts${e?`?authorName=${e}`:""}`,{headers:{"Content-Type":"application/json"}});return r}),u(O,"create",async(e,r)=>{const{data:n}=await $.post(`/authors/${e}/posts`,r,{headers:{"Content-Type":"application/json"}});return n}),u(O,"delete",async e=>{await $.delete(`/posts/${e}`)});class $t{constructor(e){u(this,"mainStore");u(this,"getAll",async e=>{try{return await O.getAll(e)}catch(r){return this.mainStore.setErrorFromAxios(r),[]}});u(this,"create",async(e,r)=>{try{return await O.create(e,r)}catch(n){return this.mainStore.setErrorFromAxios(n),null}});u(this,"delete",async e=>{try{await O.delete(e)}catch(r){this.mainStore.setErrorFromAxios(r)}});I(this,{mainStore:!1}),this.mainStore=e}}class b{}u(b,"getAll",async()=>{const{data:e}=await $.get("/authors",{headers:{"Content-Type":"application/json"}});return e}),u(b,"create",async e=>{const{data:r}=await $.post("/authors",e,{headers:{"Content-Type":"application/json"}});return r}),u(b,"delete",async e=>{await $.delete(`/authors/${e}`)});class Ot{constructor(e){u(this,"mainStore");u(this,"getAll",async()=>{try{return await b.getAll()}catch(e){return this.mainStore.setErrorFromAxios(e),[]}});u(this,"create",async e=>{try{return await b.create(e)}catch(r){return this.mainStore.setErrorFromAxios(r),null}});u(this,"delete",async e=>{try{await b.delete(e)}catch(r){this.mainStore.setErrorFromAxios(r)}});I(this,{mainStore:!1}),this.mainStore=e}}class bt{constructor(){u(this,"error",null);u(this,"layout");u(this,"authors");u(this,"posts");u(this,"setError",e=>{this.error=e});u(this,"setErrorFromAxios",e=>{console.warn("request error",e),this.error=Pt(e)});u(this,"clearError",()=>{this.error=null});this.layout=new _t,this.authors=new Ot(this),this.posts=new $t(this),I(this,{authors:!1,posts:!1})}}const jt=a=>{var r,n;const e=((n=(r=a==null?void 0:a.response)==null?void 0:r.data)==null?void 0:n.message)||(a==null?void 0:a.message);return Array.isArray(e)?e.join(" "):""+e},Pt=a=>jt(a)||"Não foi possível realizar a solicitação",St=l.createContext(new bt),k=()=>l.useContext(St),At="_Page_vp7hv_1",Ct="_Logo_vp7hv_4",Rt="_Content_vp7hv_13",z={Page:At,Logo:Ct,Content:Rt},{Content:Mt,Sider:Dt}=B,wt=Object.values(ge).map(({icon:a,path:e,name:r})=>({label:r,key:e,icon:t.jsx(a,{})})),It=({children:a,title:e,subtitle:r,className:n,...s})=>{const o=Le(),i=Ne(),{error:c,clearError:h,layout:{collapsed:x,setCollapsed:m}}=k(),v=(o.pathname||"").slice(1),y=ge[v]||{};return t.jsx(Me,{locale:tt,children:t.jsxs(B,{className:`${z.Page} ${n}`,...s,children:[t.jsxs(Dt,{collapsible:!0,collapsed:x,onCollapse:m,children:[t.jsx("div",{className:z.Logo}),t.jsx(De,{theme:"dark",selectedKeys:[y.id],mode:"inline",items:wt,onClick:({key:d})=>i(d)})]}),t.jsx(B,{children:t.jsxs(we,{title:e,subTitle:r,children:[t.jsx(J,{title:"Erro!",open:c!==null,onOk:h,onCancel:h,children:c}),t.jsx(Mt,{className:z.Content,children:a})]})})]})})},ae=E(It);var K={exports:{}},L={},re={};Object.defineProperty(re,"__esModule",{value:!0});var Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};re.default=Et;var qt=A.default,se=C.default;Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var Ft=se(R),ye=qt(l),Tt=se(re),kt=se(M),Lt=function(e,r){return ye.createElement(kt.default,(0,Ft.default)({},e,{ref:r,icon:Tt.default}))},Nt=ye.forwardRef(Lt);L.default=Nt;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const r=n(L);function n(o){return o&&o.__esModule?o:{default:o}}const s=r;e.default=s,a.exports=s})(K,K.exports);var zt=K.exports;const _e=D(zt),Ht=({onChange:a,...e})=>{const[r,n]=l.useState(!1),[s,o]=l.useState([]),{authors:{getAll:i}}=k();return l.useEffect(()=>{let c=!1;return n(!0),(async()=>{const x=await i();c||(o(x.map(m=>({label:`${m.name} (${m.nickname})`,value:m.id}))),n(!1))})(),()=>{c=!0}},[i]),t.jsx(Ie,{loading:r,...e,options:s,onChange:a})},Bt=E(Ht),Yt={rowKey:"key",pagination:{showQuickJumper:!0},dateFormatter:"string",search:!1},$e={labelCol:{span:8},wrapperCol:{span:16}},Oe={wrapperCol:{offset:8,span:16}},j=[{required:!0}],{TextArea:Ut}=S,Wt=({onSubmit:a,className:e,...r})=>{const[n,s]=l.useState(!1),[o,i]=l.useState(!1),[c]=f.useForm(),h=async v=>{i(!0);const y={title:v.title,body:v.body};await a(v.author,y),i(!1),s(!1)},x=()=>{c.resetFields()},m=()=>{c.resetFields(),i(!1),s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",onClick:m,icon:t.jsx(_e,{}),className:e,...r,children:"Novo"}),t.jsx(J,{title:"Nova Postagem",open:n,footer:null,onCancel:()=>s(!1),children:t.jsxs(f,{...$e,form:c,name:"control-hooks",onFinish:h,children:[t.jsx(f.Item,{name:"title",label:"Título",rules:j,children:t.jsx(S,{})}),t.jsx(f.Item,{name:"body",label:"Texto",rules:j,children:t.jsx(Ut,{})}),t.jsx(f.Item,{name:"author",label:"Autor",rules:j,children:t.jsx(Bt,{})}),t.jsxs(f.Item,{...Oe,children:[t.jsx(g,{type:"primary",htmlType:"submit",loading:o,children:"Criar"}),t.jsx(g,{htmlType:"button",onClick:x,children:"Limpar"})]})]})})]})};var V={exports:{}},N={},oe={};Object.defineProperty(oe,"__esModule",{value:!0});var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};oe.default=Kt;var Vt=A.default,ne=C.default;Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var Jt=ne(R),be=Vt(l),Qt=ne(oe),Gt=ne(M),Xt=function(e,r){return be.createElement(Gt.default,(0,Jt.default)({},e,{ref:r,icon:Qt.default}))},Zt=be.forwardRef(Xt);N.default=Zt;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const r=n(N);function n(o){return o&&o.__esModule?o:{default:o}}const s=r;e.default=s,a.exports=s})(V,V.exports);var ea=V.exports;const je=D(ea),ta="_PostCard_h9jkk_1",aa={PostCard:ta},ra=({id:a,title:e,body:r,creationDate:n,authorName:s,authorNickname:o,deletePost:i,className:c,...h})=>t.jsx(Ee,{...h,className:`${aa.PostCard} ${c}`,title:e,extra:t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:["Autor: ",s," (",o,")"]}),t.jsxs("div",{children:["Data: ",new Date(n).toLocaleDateString()]})]}),actions:[t.jsx(de,{title:"Title",onConfirm:()=>i(a),children:t.jsx(pe,{title:"Apagar",placement:"bottom",children:t.jsx(g,{type:"primary",icon:t.jsx(je,{}),size:"small",danger:!0,children:"Apagar"})})})],children:r}),sa="_PostsPage_y90nr_1",oa="_HeaderInputWrapper_y90nr_5",na="_HeaderButtonsWrapper_y90nr_8",H={PostsPage:sa,HeaderInputWrapper:oa,HeaderButtonsWrapper:na},{Search:la}=S,ia=()=>{const{posts:a}=k(),[e,r]=l.useState(!1),[n,s]=l.useState(!0),[o,i]=l.useState(""),[c,h]=l.useState([]),x=d=>{i(d),s(!0)},m=l.useCallback(async()=>await a.getAll(o),[a,o]);l.useEffect(()=>{let d=!1;return n&&(r(!0),m().then(P=>{d||(h(P),s(!1),r(!1))})),()=>{d=!0}},[n,m]);const v=l.useCallback(async(d,P)=>{await a.create(d,P),s(!0)},[a]),y=l.useCallback(async d=>{await a.delete(d),s(!0)},[a]);return t.jsx(ae,{title:"Postagens",className:H.PostsPage,children:t.jsx(qe,{loading:e,size:"small",dataSource:c,header:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:H.HeaderInputWrapper,children:t.jsx(la,{placeholder:"Busque por autor",onSearch:x,enterButton:!0,allowClear:!0,disabled:!o&&c.length===0})}),t.jsxs("div",{className:H.HeaderButtonsWrapper,children:[t.jsx(Wt,{onSubmit:v}),t.jsx(g,{type:"text",shape:"circle",size:"middle",icon:t.jsx(Xe,{}),loading:e,onClick:()=>s(!0)})]})]}),renderItem:({id:d,title:P,body:Pe,creationDate:Se,author:_})=>t.jsx(ra,{id:d,title:P,body:Pe,creationDate:Se,authorName:_==null?void 0:_.name,authorNickname:_==null?void 0:_.nickname,deletePost:y},d)})})},ue=E(ia),ca=a=>t.jsx(Fe,{format:"DD/MM/YYYY",...a}),ua=({onSubmit:a,className:e,...r})=>{const[n,s]=l.useState(!1),[o,i]=l.useState(!1),[c]=f.useForm(),h=async v=>{i(!0);const y={...v,birthDate:v.birthDate.format("YYYY-MM-DD")};await a(y),i(!1),s(!1)},x=()=>{c.resetFields()},m=()=>{c.resetFields(),i(!1),s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",onClick:m,icon:t.jsx(_e,{}),className:e,...r,children:"Novo"}),t.jsx(J,{title:"Novo Author",open:n,footer:null,onCancel:()=>s(!1),children:t.jsxs(f,{...$e,form:c,name:"control-hooks",onFinish:h,children:[t.jsx(f.Item,{name:"name",label:"Nome",rules:j,children:t.jsx(S,{})}),t.jsx(f.Item,{name:"nickname",label:"Apelido",rules:j,children:t.jsx(S,{})}),t.jsx(f.Item,{name:"birthDate",label:"Data de Nascimento",rules:j,children:t.jsx(ca,{})}),t.jsxs(f.Item,{...Oe,children:[t.jsx(g,{type:"primary",htmlType:"submit",loading:o,children:"Criar"}),t.jsx(g,{htmlType:"button",onClick:x,children:"Limpar"})]})]})})]})},da=[{title:"Nome",dataIndex:"name",key:"name",search:!1},{title:"Apelido",dataIndex:"nickname",key:"nickname",search:!1},{title:"Data de Nascimento",dataIndex:"birthDate",key:"birthDate",search:!1,renderText:a=>new Date(a).toLocaleDateString()}],pa=a=>da.concat({title:"Ações",key:"actions",render:(e,r)=>[t.jsx("div",{className:"cell-button-group",children:t.jsx(de,{title:"Title",onConfirm:()=>a(r.id),children:t.jsx(pe,{title:"Apagar",placement:"bottom",children:t.jsx(g,{type:"primary",shape:"circle",icon:t.jsx(je,{}),size:"small",danger:!0})})})},"bg")]}),ma=()=>{const{authors:a}=k(),e=l.useRef(),r=l.useCallback(async()=>({data:await a.getAll(),success:!0}),[a]),n=l.useCallback(async i=>{var c;await a.create(i),(c=e==null?void 0:e.current)==null||c.reload()},[a]),s=l.useCallback(async i=>{var c;await a.delete(i),(c=e==null?void 0:e.current)==null||c.reload()},[a]),o=l.useMemo(()=>pa(s),[s]);return t.jsx(ae,{title:"Autores",children:t.jsx(Te,{...Yt,actionRef:e,headerTitle:"Autores",rowKey:"id",request:r,columns:o,toolBarRender:()=>[t.jsx(ua,{onSubmit:n},"ea")]})})},fa=E(ma),ha=()=>t.jsx(ae,{title:"Página não encontrada"}),va=ze([{path:w.HOME,element:t.jsx(ue,{})},{path:w.POSTS,element:t.jsx(ue,{})},{path:w.AUTHORS,element:t.jsx(fa,{})},{path:"*",element:t.jsx(ha,{})}],{basename:"/blog-posts/"}),xa=()=>t.jsx(He,{router:va});me(document.getElementById("root")).render(t.jsx(l.StrictMode,{children:t.jsx(xa,{})}));
