(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{28:function(e,r,a){"use strict";a.r(r);a(1);var c=a(15),s=a.n(c),t=a(7),i=a(2),n=a(0),l=function(e){var r=e.history;return Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){r.push("/")},children:"Login"})]})},o=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(n.jsx)(t.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(n.jsx)("div",{className:"navbar-collapse",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)(t.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(n.jsx)(t.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"})]})}),Object(n.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(n.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(n.jsx)(t.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},h=a(17),d=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],p=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),s=e.first_appearance,i=e.characters;return Object(n.jsxs)("div",{className:"card ms-3",style:{maxWidth:540},children:[Object(n.jsx)("div",{className:"row no-gutters",children:Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a})})}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:a}),Object(n.jsx)("p",{className:"card-text",children:c}),c!==i&&Object(n.jsx)("p",{className:"card-text",children:i}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsx)("small",{className:"text-muted",children:s})}),Object(n.jsx)(t.b,{to:"./heroe/".concat(r),children:"M\xe1s..."})]})})]})},m=function(e){var r=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return d.filter((function(r){return r.publisher===e}))}(e.publisher);return Object(n.jsx)("div",{className:"card-columns",children:r.map((function(e){return Object(n.jsx)(p,Object(h.a)({},e),e.id)}))})},u=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"MarvelScreen"}),Object(n.jsx)("hr",{}),Object(n.jsx)(m,{publisher:"Marvel Comics"})]})},b=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"HeroScreen"})})},j=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"DcScreen"}),Object(n.jsx)("hr",{}),Object(n.jsx)(m,{publisher:"DC Comics"})]})},v=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"container mt-2",children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/marvel",component:u}),Object(n.jsx)(i.b,{exact:!0,path:"/heroe/:heroeId",component:b}),Object(n.jsx)(i.b,{exact:!0,path:"/dc/",component:j}),Object(n.jsx)(i.a,{to:"/marvel"})]})})]})},x=function(){return Object(n.jsx)(t.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/login",component:l}),Object(n.jsx)(i.b,{path:"/",component:v})]})})})},C=function(){return Object(n.jsx)(x,{})};s.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3e383672.chunk.js.map