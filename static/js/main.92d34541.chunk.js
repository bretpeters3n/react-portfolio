(this["webpackJsonphomework16-react-portfolio"]=this["webpackJsonphomework16-react-portfolio"]||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r(5),n=r.n(s),a=r(2),c=r(0);var o=function(e){var t=e.currentPage,r=e.handlePageChange;return Object(c.jsxs)("div",{className:"d-flex justify-content-between header",children:[Object(c.jsx)("h1",{children:"Bret Petersen"}),Object(c.jsxs)("ul",{className:"nav nav-pills",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#about",onClick:function(){return r("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#portfolio",onClick:function(){return r("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#contact",onClick:function(){return r("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#resume",onClick:function(){return r("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})]})};function l(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About Me"}),Object(c.jsxs)("p",{children:["I enjoy being at the forefront of technology and am focused on connecting everyday users with emerging technologies. I became interested in coding at an early age, and after practcing design in silicon valley for years, I\u2019m excited to be doing it myself!",Object(c.jsx)("br",{}),"I really love street biking, live comedy, live music, and problem solving. I enjoy meeting new people and learning new things :)"]})]})}var u=r.p+"static/media/github-brands.e2f07326.svg",b=r.p+"static/media/external-link-alt-solid.13e5d45b.svg";function d(e){var t=e.portfolioContent;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Portfolio"}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"row",children:t.map((function(e){return Object(c.jsx)("div",{className:"card",style:{backgroundImage:"url(".concat(e.imagePATH,")"),backgroundSize:"cover",backgroundPosition:"center"},children:Object(c.jsxs)("div",{class:"cover",children:[Object(c.jsx)("h4",{children:e.title}),Object(c.jsx)("p",{children:e.subTitle}),Object(c.jsxs)("div",{className:"icon-group",children:[Object(c.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{style:{height:"32px"},src:u,alt:"GitHub Logo"})}),Object(c.jsx)("a",{href:e.deployURL,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{style:{height:"26px",margin:"3px"},src:b,alt:"External link icon"})})]})]})},e.title)}))})})]})}function m(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Resume"}),Object(c.jsx)("p",{children:"Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien."})]})}var j=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),r=t[0],s=t[1],n=Object(i.useState)(""),o=Object(a.a)(n,2),l=o[0],u=o[1],b=Object(i.useState)(""),d=Object(a.a)(b,2),m=d[0],j=d[1],h=Object(i.useState)(""),p=Object(a.a)(h,2),g=p[0],f=p[1],x=function(e){var t=e.target,r=t.name,i=t.value;"fullName"===r?s(i):"emailAddress"===r?u(i):"message"===r?j(i):f("One of your fields is incomplete")};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Contact"}),Object(c.jsxs)("form",{className:"form",id:"usrform",children:[Object(c.jsx)("label",{for:"fullName",class:"form-label",children:"Full Name"}),Object(c.jsx)("input",{value:r,name:"fullName",class:"form-control",onChange:x,type:"text",placeholder:"John Doe"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"emailAddress",class:"form-label",children:"Email Address"}),Object(c.jsx)("input",{value:l,name:"emailAddress",class:"form-control",onChange:x,type:"text",placeholder:"johndoe@gmail.com"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"emailAddress",class:"form-label",children:"Message"}),Object(c.jsx)("textarea",{value:m,name:"message",class:"form-control",onChange:x,type:"text",placeholder:"Type your message here",form:"usrform"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),s(""),u(""),j(""),f("One of your fields is incomplete")},children:"Submit"}),Object(c.jsx)("p",{children:g})]})]})},h=(r(4),r.p+"static/media/linkedin-brands.f4041044.svg"),p=r.p+"static/media/stack-overflow-brands.e25e45af.svg";function g(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("a",{href:"https://github.com/bretpeters3n",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{style:{height:"32px",margin:"12px"},src:u,alt:"GitHub Logo"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/bret-petersen-8002023/ ",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{style:{height:"32px",margin:"12px"},src:h,alt:"GitHub Logo"})}),Object(c.jsx)("a",{href:"https://stackoverflow.com/users/16771098/bretpetersen82",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{style:{height:"32px",margin:"12px"},src:p,alt:"GitHub Logo"})})]})}function f(e){var t=e.portfolioContent,r=Object(i.useState)("About"),s=Object(a.a)(r,2),n=s[0],u=s[1];return Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(o,{currentPage:n,handlePageChange:function(e){return u(e)}}),Object(c.jsx)("div",{className:"container",children:"About"===n?Object(c.jsx)(l,{}):"Portfolio"===n?Object(c.jsx)(d,{portfolioContent:t}):"Resume"===n?Object(c.jsx)(m,{}):Object(c.jsx)(j,{})}),Object(c.jsx)(g,{})]})})}var x=[{title:"Northern Health Tracker",subTitle:"U of M Coding Bootcamp",deployURL:"https://northern-health-tracker2.herokuapp.com/",github:"https://github.com/bretpeters3n/northern-health-tracker",imagePATH:"./assets/img/code-screen.jpg"},{title:"Cat Memory",subTitle:"U of M Coding Bootcamp",deployURL:"https://bretpeters3n.github.io/group-project-1-quick-getaway/",github:"https://github.com/bretpeters3n/group-project-1-quick-getaway",imagePATH:"./assets/img/project-catMemory.jpg"},{title:"Workday Scheduler",subTitle:"U of M Coding Bootcamp",deployURL:"https://bretpeters3n.github.io/work-day-scheduler/",github:"https://github.com/bretpeters3n/work-day-scheduler",imagePATH:"./assets/img/clouds-moon.jpg"},{title:"Weather Dashboard",subTitle:"U of M Coding Bootcamp",deployURL:"https://bretpeters3n.github.io/weather-dashboard/",github:"https://github.com/bretpeters3n/weather-dashboard",imagePATH:"./assets/img/project-workScheduler.png"},{title:"Advanced CSS Portfolio",subTitle:"U of M Coding Bootcamp",deployURL:"https://bretpeters3n.github.io/Advanced-CSS-Portfolio/",github:"https://github.com/bretpeters3n/Advanced-CSS-Portfolio",imagePATH:"./assets/img/yosimite.jpg"},{title:"Online/Offline Budget Tracker",subTitle:"U of M Coding Bootcamp",deployURL:"https://online-offline-budget-pwa.herokuapp.com/",github:"https://github.com/bretpeters3n/online-offline-budget-trackers",imagePATH:"./assets/img/orb.jpg"}],O=function(){return Object(c.jsx)(f,{portfolioContent:x})};r(11);n.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))},4:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.92d34541.chunk.js.map