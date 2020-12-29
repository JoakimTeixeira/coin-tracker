(this["webpackJsonpcoin-tracker"]=this["webpackJsonpcoin-tracker"]||[]).push([[0],{50:function(e,t,c){},79:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),r=c(20),i=c.n(r),l=c(14),j=c(5),d=c(44),o=c(9),u=Object(n.createContext)(),b=function(e){var t=e.children,c=["bitcoin","ethereum","ripple"],s=Object(n.useState)((function(){return localStorage.getItem("watchList")?localStorage.getItem("watchList").split(","):c})),r=Object(o.a)(s,2),i=r[0],l=r[1];Object(n.useEffect)((function(){localStorage.setItem("watchList",i)}),[i]);return Object(a.jsx)(u.Provider,{value:{watchList:i,handleWatchList:function(e){l(e)},addCoin:function(e){l([].concat(Object(d.a)(i),[e]))},deleteCoin:function(e){l(i.filter((function(t){return t!==e})))}},children:t})},x=(c(50),function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{className:"title text-center text-warning mb-5",children:[Object(a.jsx)("i",{className:"fas fa-coins"}),Object(a.jsxs)("span",{className:"text-white",children:[Object(a.jsx)("span",{style:{fontWeight:"lighter"},children:" Coin "}),"Tracker"]})]})})}),h=c(13),m=c.n(h),O=c(15),p=c(37),f=c.n(p).a.create({baseURL:"https://api.coingecko.com/api/v3"}),v=function(){return Object(a.jsx)("div",{className:"pt-5 text-center",children:Object(a.jsx)("i",{className:" fas fa-circle-notch fa-4x fa-spin text-white"})})},y=c(38),N=c.n(y),g=c(40),w={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:2e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear"}]}},_=function(e){return null!==e?e.toLocaleString("en-US",{style:"currency",currency:"USD"}):"Unknown"},k=function(e,t){return e.sort((function(e,c){var a=e[t].toLowerCase(),n=c[t].toLowerCase(),s=0;return a>n?s=1:a<n&&(s=-1),s}))},C=function(e){var t=e.chartData,c=Object(n.useRef)(),s=t.day,r=t.week,i=t.year,j=t.coin,d=Object(n.useState)("24h"),u=Object(o.a)(d,2),b=u[0],x=u[1],h=function(){switch(b){case"24h":return s;case"7 days":return r;case"1 year":return i;default:return s}};Object(n.useEffect)((function(){c.current&&j&&(void 0!==window.chart&&window.chart.destroy(),window.chart=new N.a(c.current,{type:"line",data:{datasets:[{label:"".concat(j.name," price (").concat(b,")"),data:h(),backgroundColor:"rgba(100, 132, 187, 0.5)",borderWidth:1,pointRadius:0}]},options:w}))}),[b]);return Object(a.jsxs)("div",{className:"card",children:[j?Object(a.jsxs)("div",{className:"card d-flex flex-row justify-content-around mb-3 mt-1",style:{boxShadow:"none",width:"100%"},children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"card-label text-muted",children:"Current price"}),Object(a.jsx)("span",{className:"lead",children:_(j.current_price)})]}),Object(a.jsxs)("span",{className:j.price_change_percentage_24h<0?"text-danger":"text-success",children:[Object(a.jsx)("div",{className:"card-label text-muted",children:"Price change"}),Object(a.jsxs)("span",{className:"lead",children:[j.price_change_percentage_24h<0?Object(a.jsx)("i",{className:"fas fa-sort-down align-middle mr-2"}):Object(a.jsx)("i",{className:"fas fa-sort-up align-middle mr-2"}),j.price_change_percentage_24h.toFixed(2),"%"]})]})]}):Object(a.jsx)("div",{}),Object(a.jsx)("div",{children:Object(a.jsx)("canvas",{id:"coinChart",ref:c,width:"210",height:"210"})}),Object(a.jsxs)("div",{className:"mt-3 d-flex justify-content-between",width:"100%",children:[Object(a.jsx)("span",{children:Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)(g.a,{variant:"link text-muted",className:"m-1",type:"submit",children:Object(a.jsx)("i",{className:"fas fa-arrow-left"})})})}),Object(a.jsxs)("span",{children:[Object(a.jsx)(g.a,{variant:"24h"===b?"secondary":"outline-secondary",className:"m-1",type:"submit",onClick:function(){return x("24h")},children:"Day"}),Object(a.jsx)(g.a,{variant:"7 days"===b?"secondary":"outline-secondary",className:"m-1",type:"submit",onClick:function(){return x("7 days")},children:"Week"}),Object(a.jsx)(g.a,{variant:"1 year"===b?"secondary":"outline-secondary",className:"m-1",type:"submit",onClick:function(){return x("1 year")},children:"Year"})]})]})]})},S=c(90),L=c(91),D=function(e){var t=e.chartData;return t.coin?Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(S.a,{className:"d-flex flex-md-row flex-column align-items-center justify-content-center text-center",children:[Object(a.jsxs)(L.a,{children:[Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"Total Supply"}),Object(a.jsx)("span",{children:_(t.coin.total_supply)})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"Circulating Supply"}),Object(a.jsx)("span",{children:_(t.coin.circulating_supply)})]})]}),Object(a.jsx)(L.a,{className:"d-none",children:Object(a.jsx)("hr",{})}),Object(a.jsxs)(L.a,{children:[Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"Market Cap"}),Object(a.jsx)("span",{children:_(t.coin.market_cap)})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"Volume (24h)"}),Object(a.jsx)("span",{children:_(t.coin.total_volume)})]})]}),Object(a.jsx)(L.a,{className:"d-none",children:Object(a.jsx)("hr",{})}),Object(a.jsxs)(L.a,{children:[Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"High (24h)"}),Object(a.jsx)("span",{children:_(t.coin.high_24h)})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{className:"card-label text-muted",children:"Low (24h)"}),Object(a.jsx)("span",{children:_(t.coin.low_24h)})]})]})]})}):Object(a.jsx)("div",{})},A=function(){var e=Object(j.g)().id,t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],u=l[1],b=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};return Object(n.useEffect)((function(){var t=function(){var t=Object(O.a)(m.a.mark((function t(c){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/coins/".concat(e,"/market_chart"),{params:{vs_currency:"usd",days:c}});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();(function(){var c=Object(O.a)(m.a.mark((function c(){var a,n,s,i,l,j;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u(!0),c.next=3,Promise.all([t("1"),t("7"),t("365"),f.get("/coins/markets/",{params:{vs_currency:"usd",ids:e}})]);case 3:a=c.sent,n=Object(o.a)(a,4),s=n[0],i=n[1],l=n[2],j=n[3],r({day:b(s.data.prices),week:b(i.data.prices),year:b(l.data.prices),coin:j.data[0]}),u(!1);case 11:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[]),d?Object(a.jsx)(v,{}):Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(C,{chartData:s}),Object(a.jsx)(D,{chartData:s})]})},E=c(93),W=c(92),F=(c(79),function(){var e=Object(n.useContext)(u),t=e.watchList,c=e.addCoin,r=Object(n.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1];Object(n.useEffect)((function(){(function(){var e=Object(O.a)(m.a.mark((function e(){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/coins/markets",{params:{ids:"",vs_currency:"usd"}});case 2:c=e.sent,a=c.data.filter((function(e){return!t.includes(e.id)})),j(k(a,"id"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var d=Object(n.forwardRef)((function(e,t){var c=e.children,r=e.style,i=e.className,l=e["aria-labelledby"],j=Object(n.useState)(""),d=Object(o.a)(j,2),u=d[0],b=d[1];return Object(a.jsxs)("div",{ref:t,style:r,className:i,"aria-labelledby":l,children:[Object(a.jsx)(E.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type coin name...",onChange:function(e){return b(e.target.value)},value:u}),Object(a.jsx)("ul",{className:"list-unstyled",children:s.a.Children.toArray(c).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))})]})}));return Object(a.jsxs)(W.a,{children:[Object(a.jsxs)(W.a.Toggle,{variant:"success",id:"dropdown-basic",children:[Object(a.jsx)("i",{className:"fas fa-plus"})," ADD "]}),Object(a.jsx)(W.a.Menu,{as:d,children:l.map((function(e){return Object(a.jsx)(W.a.Item,{onClick:function(){return c(e.id)},children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))},e.id);var t}))})]})}),I=(c(83),function(e){var t=e.coin,c=e.deleteCoin;return Object(a.jsx)("li",{className:"card",children:Object(a.jsx)(l.b,{to:"/coins/".concat(t.id),className:"link text-dark",children:Object(a.jsxs)(S.a,{className:"d-flex flex-md-row flex-column align-items-center justify-content-center text-center",children:[Object(a.jsx)(L.a,{className:"p-2",children:Object(a.jsx)("img",{src:t.image,alt:t.id,width:"50px"})}),Object(a.jsx)(L.a,{className:"p-2",children:Object(a.jsx)("span",{children:t.name})}),Object(a.jsx)(L.a,{className:"p-2",children:Object(a.jsx)("span",{children:_(t.current_price)})}),Object(a.jsx)(L.a,{className:t.price_change_percentage_24h<0?"text-danger p-2":"text-success p-2",children:Object(a.jsxs)("span",{children:[t.price_change_percentage_24h<0?Object(a.jsx)("i",{className:"fas fa-sort-down align-middle mr-2"}):Object(a.jsx)("i",{className:"fas fa-sort-up align-middle mr-2"}),"".concat(Number(t.price_change_percentage_24h).toFixed(2),"%")]})}),Object(a.jsx)(L.a,{className:"delete",xs:12,md:1,children:Object(a.jsx)("i",{className:"fas fa-trash-alt text-danger p-2",onClick:function(e){e.preventDefault(),c(t.id)},"aria-hidden":"true"})})]})})})}),R=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(n.useContext)(u),b=d.watchList,x=d.deleteCoin;return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,f.get("/coins/markets",{params:{ids:b.join(","),vs_currency:"usd",order:"market_cap_desc"}});case 3:t=e.sent,s(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b.length>0?e():s([])}),[b]),l?Object(a.jsx)(v,{}):Object(a.jsx)("ul",{className:"list-unstyled p-0 m-0",children:c.map((function(e){return Object(a.jsx)(I,{coin:e,deleteCoin:x},e.id)}))})},U=function(){return Object(a.jsxs)("section",{className:"wrapper",children:[Object(a.jsx)(F,{}),Object(a.jsx)(R,{})]})},T=(c(84),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b,{children:[Object(a.jsx)("span",{id:"bg"}),Object(a.jsx)(l.a,{basename:"/coin-tracker",children:Object(a.jsxs)("div",{className:"p-5",children:[Object(a.jsx)(x,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:U}),Object(a.jsx)(j.b,{path:"/coins/:id",component:A}),Object(a.jsx)(j.a,{from:"/coins",to:"/"})]})]})})]})})});c(85);i.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.02fb3b52.chunk.js.map