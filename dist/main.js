!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist/",n(n.s=3)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(m)):a.push({identifier:u,updater:g(m,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=c(t)),r=m.bind(null,n,i,!1),o=m.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(4);n(5);const i=n(7);o.render(r.createElement(i.App,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(1),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"html {\n  position: relative;\n  min-height: 100%;\n  width: 100%;\n  padding: 0;\n}\n\nhtml, body {\n  color: #454540;\n  font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\n}\n\nbody {\n  max-width: 75rem;\n  margin: auto;\n  padding: 6.0rem 1.0rem 4.0rem;\n}\n\nh1 {\n  color: #252f3e;\n  border-bottom-style: solid;\n  border-bottom-color: #cf4900;\n  border-bottom-width: 0.15rem;\n}\n\nh2 {\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\np {\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\na:link {\n  color: #0050d8;\n}\n\na:visited{\n  color: #864381;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(8),i=n(11),a=n(14),s=n(25),l=n(32);class c extends r.Component{render(){return r.createElement("div",null,r.createElement(i.Header,null),r.createElement(a.Hero,null),r.createElement(o.AboutMe,null),r.createElement(s.Projects,null),r.createElement(l.Footer,null))}}t.App=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);function o(){return r.createElement("div",null,r.createElement("p",null,"Hello! I'm Tim Miller. I'm a full stack web developer, bioengineer, and former air traffic controller (ATC) for The U.S Air Force. TangoYankee comes from the NATO phonetic letters of my ATC operating intials. Every controller has a set unique to their facility. Whenever they coordinate with another controller, each controller signs off with their initials. It's git blame for aviators!"),r.createElement("p",null,"Before serving in the Air Force, I graduated from ",r.createElement("a",{title:"Binghamton U",href:"https://binghamton.edu/",target:"_blank",rel:"noopener noreferrer"},"SUNY Binghamton")," with a degree in bioengineering. In the bioengineering program, I used mathematics to model the world as a series of complex systems. These systems grow and adapt to both instigate and react to change. For example, economies consist of people interacting through the exchange of goods and services. Over time, our economy has changed from agrarian, through industrial, and now to informational. Along the way, it experienced countless booms and busts. A bioengineer's goal is to model, predict, and influence that change to acheive a desirable outcome. You can learn more about complexity at the ",r.createElement("a",{title:"NECSI",href:"https://necsi.edu/",target:"_blank",rel:"noopener noreferrer"},"New England Complex Systems Institute"),"."),r.createElement("p",null,"My complex systems perspective led me to become a web developer. The internet is the complex system used to influence other complex systems. Computers, users, and developers interact to build a network of information. This information is then used in decisions for businesses, governments, scientific studies, and countless other applications. It's a bioengineer's dream."),r.createElement("p",null,"Of course, bioengineering and air traffic control have only gone so far to prep me to be a web developer. Over the years, I've honed those skills through various team and individual projects. You can see these skills through the resume, projects, and GitHub portfolio included below. Thank you for visiting!"))}n(9),t.AboutMe=function(){return r.createElement("div",{id:"about-me"},r.createElement("h1",null,"About Me"),r.createElement(o,null),r.createElement(i,null))};class i extends r.Component{constructor(e){super(e),this.openResume=this.openResume.bind(this)}openResume(){window.open("src/img/Tim Miller - Resume 10-Apr-2020.pdf","_blank","renoopener noreferer")}render(){return r.createElement("button",{id:"resume",onClick:this.openResume},"View Resume")}}},function(e,t,n){var r=n(1),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"#resume{\n  border-color: #252f3e;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-radius: 0.3rem;\n  height: 2.5rem;\n  width: 8.5rem;\n  margin-left: 1.0rem;\n  background-color: white;\n}\n\n#resume:hover {\n  border-color: #cf4900;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(12),t.Header=function(){return r.createElement("header",null,r.createElement("div",{className:"title-container"},r.createElement("span",{className:"title"},"__tangoyankee__")))}},function(e,t,n){var r=n(1),o=n(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"header {\n  top: 0;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin: auto;\n  height: 2.5rem;\n  background-color: #252f3e;  \n}\n\nheader div.title-container {\n  max-width: 70rem;\n  margin: auto;\n}\n\nheader span.title{\n  color: white;\n  font-size: 1.5rem;\n  float: right;\n  margin-top: 0.2rem;\n}",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(15);const o=n(17),i=n(24);function a(){return r.createElement("img",{id:"portrait",src:i,title:"Timothy Miller",alt:"Portrait of Timothy Miller"})}t.Hero=function(){return r.createElement("div",{className:"hero"},r.createElement(a,null),r.createElement(s,null))};class s extends r.Component{constructor(e){super(e),this.state={showLinks:!1},this.toggleLinks=this.toggleLinks.bind(this)}toggleLinks(){this.setState(e=>({showLinks:!e.showLinks}))}render(){const e=o.heroLinks.map(e=>r.createElement(o.HeroLink,{key:e.title,icon:e.icon,title:e.title,href:e.href,display:e.display}));return r.createElement("div",{className:"hero-link-container ' "+(this.state.showLinks?"active":null),onClick:this.toggleLinks},e)}}},function(e,t,n){var r=n(1),o=n(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"img#portrait {\n  display: flex;\n  margin: auto;\n  border-radius: 0.5rem;\n  border-style: solid;\n  border-width: 0.18rem;\n  border-color: #cf4900;\n}\n\nimg.contact-icon {\n  height: 1.75rem;\n  width: 1.75rem;\n  margin: 0.5rem;\n}\n\ndiv.contact-container {\n  display: inline-flex;\n  justify-content: left;\n}\n\ndiv.hero-link-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: auto;\n  width: 15rem;\n}\n\ndiv.hero-link-container a {\n  display: none;\n  margin: auto 0;\n}\n\ndiv.hero-link-container.active {\n  flex-direction: column;\n}\n\ndiv.hero-link-container.active a {\n  display: flex;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(18);const o=n(21),i=n(22),a=n(23);t.heroLinks=[{icon:o,title:"linkedin.com/in/timothy-m-miller/",href:"https://www.linkedin.com/in/timothy-m-miller/",display:"/timothy-m-miller"},{icon:i,title:"github.com/tangoyankee",href:"https://github.com/tangoyankee",display:"@tangoyankee"},{icon:a,title:"mailto:miller.tim108@gmail.com",href:"mailto:miller.tim108@gmail.com",display:"miller.tim108@gmail.com"}];class s extends r.Component{render(){return r.createElement("div",{className:"contact-container"},r.createElement("img",{className:"contact-icon",src:this.props.icon,alt:"icon"}),r.createElement("a",{href:this.props.href,title:this.props.title,target:"_blank",rel:"noopener noreferrer"},this.props.display))}}t.HeroLink=s},function(e,t,n){var r=n(1),o=n(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},,function(e,t,n){e.exports=n.p+"2f8caa45f4013d4cbd96da230c311959.png"},function(e,t,n){e.exports=n.p+"b039b2d83982c8256af34260e546303b.png"},function(e,t,n){e.exports=n.p+"d2de5b08fe8ad47e60c8b80e5dd0807d.png"},function(e,t,n){e.exports=n.p+"49ee30fd6a0b731c38c0135e9b43a480.jpg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(26);const o=n(28);t.Projects=function(){const e=o.projectList.map(e=>r.createElement(o.Project,{key:e.header,linkTitle:e.linkTitle,href:e.href,imgSrc:e.imgSrc,imgTitle:e.imgTitle,imgAlt:e.imgAlt,header:e.header,text:e.text}));return r.createElement("div",{id:"projects"},r.createElement("h1",null,"Projects"),r.createElement("p",null,"This site is written in React with Typescript and bundled together with Webpack. Its minimalist presentation means it can be mobile friendly, accessible, and cross-browser compatible with little effort. Accessibility is checked in part using the ",r.createElement("a",{title:"accessibility evaluation",href:"https://wave.webaim.org/",target:"_blank",rel:"noopener noreferrer"},"WAVE"),"web accessibility evaluation tool."),e)}},function(e,t,n){var r=n(1),o=n(27);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".project-link {\n  display: inline-flex;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-radius: 0.3rem;\n  border-color: white;\n}\n\n.project-link:hover {\n  border-color: #252f3e;\n}\n\n.project img {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  float: left;\n  margin: 0.25rem;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(29),i=n(30),a=n(31);t.projectList=[{linkTitle:"safe browse for slack",href:"safebrowse",imgSrc:o,imgTitle:"SSSlines",imgAlt:"S with multiple lines",header:"safebrowse for slack",text:"This Slack application allows users to check urls for threats reported through Google's Safe Browse API. Slack users activate the check through the /safebrowse slash command. Each user can copy in suspicious urls and safe-browse-slack will return a report of suspected threats. It is written in Node.js with Express and tested with Jest."},{linkTitle:"spark website",href:"spark",imgSrc:i,imgTitle:"phoenix spark",imgAlt:"orange phoenix silhouette",header:"spark",text:"The Spark website was the original website for the Travis AFB Innovation Cell. It is a Jekyll site forked from code.mil and styled using The U.S Web Design System. The site was intended as a collaborative tool where Active Duty Airmen could learn about web development and open source software by working on a live site."},{linkTitle:"fundamentals",href:"fundamentals",imgSrc:a,imgTitle:"tangled favicon",imgAlt:"tangled black line",header:"cs fundamentals",text:"Fundamentals is a blog of data structures and algorithms. It's a flask application that renders markdown pages as html."}];class s extends r.Component{render(){return r.createElement("div",{className:"project"},r.createElement("a",{title:this.props.linkTitle,href:"https://tangoyankee.io/"+this.props.href,target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:"project-link"},r.createElement("img",{src:this.props.imgSrc,title:this.props.imgTitle,alt:this.props.imgAlt}),r.createElement("h2",null,this.props.header))),r.createElement("p",null,this.props.text))}}t.Project=s},function(e,t,n){e.exports=n.p+"d4ad07861894c79dfd8724e15141f867.ico"},function(e,t,n){e.exports=n.p+"f4f04973d71eb25419437f6605a9f4ac.png"},function(e,t,n){e.exports=n.p+"9c50cacc93d61df90e2b4a16550dc3d7.ico"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(33),t.Footer=function(){return r.createElement("footer",null)}},function(e,t,n){var r=n(1),o=n(34);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"footer {\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin: auto;\n  height: 2.5rem;\n  background-color: #252f3e;  \n}\n",""]),e.exports=t}]);
//# sourceMappingURL=main.js.map