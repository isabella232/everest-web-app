(window["webpackJsonpeverest-web-app"]=window["webpackJsonpeverest-web-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/EverestPerson.b83557ef.svg"},40:function(e,t,a){e.exports=a(54)},45:function(e,t,a){},46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(45),a(17)),m=a(14);a(46);function u(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"),l.a.createElement("p",null,l.a.createElement("b",null,"Description:")," universally shared \u2018yellowpages\u2019 registry for eth community. we use fancy tech like TCRs and bonding curves. we\u2019re hiring. dm @dhole_club. we probably won\u2019t respond. if we collaborate, we can line up all our ducks in a row."),l.a.createElement("p",null,l.a.createElement("b",null,"Website:")," You're on it dummy"),l.a.createElement("p",null,l.a.createElement("b",null,"Twitter:")," ",l.a.createElement("a",{className:"App-link",href:"https://twitter.com/dhole_club",target:"_blank",rel:"noopener noreferrer"},"@dhole_club")))}var i=a(32),s=a.n(i);function p(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Everest"),l.a.createElement("img",{src:s.a,className:"App-logo",alt:"Person on Everest"}),l.a.createElement("h3",null,"Applications"),l.a.createElement("p",null,"DeFi"),l.a.createElement("h3",null,"Infrastructure"),l.a.createElement("h3",null,"Services"),l.a.createElement("h3",null,"Content"))}function E(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Create a listing"))}function h(){var e=Object(m.f)().slug;return l.a.createElement("div",null,"Now showing proposal ",e)}function b(e){return l.a.createElement("b",null,l.a.createElement(o.b,{className:"App-link",to:e.to},e.label))}function d(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Proposals"),l.a.createElement("p",null,l.a.createElement(b,{to:"".concat(t.url,"/1"),label:"Project 1"})),l.a.createElement("p",null,l.a.createElement(b,{to:"".concat(t.url,"/2"),label:"Project 2"})))}var v=a(35),f=a(23),w=a(21);function g(){var e=Object(v.a)(["\n  {\n    domains(first: 10) {\n      name\n    }\n  }\n"]);return g=function(){return e},e}var k=Object(w.b)(g());function y(){var e=Object(f.a)(k),t=e.loading,a=e.error,n=e.data;return t?l.a.createElement("p",null,"Loading..."):a?l.a.createElement("p",null,"Error :("):n.domains.map((function(e){var t=e.name;return l.a.createElement("div",{key:t},l.a.createElement("p",null,t))}))}function A(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ENS names from The Graph"),l.a.createElement(y,null))}var N=a(8),j=new w.a({uri:"https://api.thegraph.com/subgraphs/name/ensdomains/ens"});var P=function(){return l.a.createElement(N.a,{client:j},l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement("p",null,l.a.createElement(b,{to:"/",label:"Home"})),l.a.createElement("p",null,l.a.createElement(b,{to:"/create-listing/",label:"Create a listing"})),l.a.createElement("p",null,l.a.createElement(b,{to:"/proposals",label:"View proposals"})),l.a.createElement("p",null,l.a.createElement(b,{to:"/about/",label:"About"})),l.a.createElement("p",null,l.a.createElement(b,{to:"/ens/",label:"ENS data from The Graph"}))),l.a.createElement("header",{className:"App-header"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:p}),l.a.createElement(m.a,{path:"/create-listing/",component:E}),l.a.createElement(m.a,{path:"/proposals/:slug",component:h}),l.a.createElement(m.a,{path:"/proposals/",component:d}),l.a.createElement(m.a,{path:"/about/",component:u}),l.a.createElement(m.a,{path:"/ens/",component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f133d764.chunk.js.map