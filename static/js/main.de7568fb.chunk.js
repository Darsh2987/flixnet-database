(this["webpackJsonpreact-flixnet-database"]=this["webpackJsonpreact-flixnet-database"]||[]).push([[0],{45:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),c=a(20),o=a.n(c),s=a(9),r=a.n(s),l=a(21),d=a(4),v=a(22),b=a.n(v),u=(a(45),"f5a07de26f8d5c4478107c654093e6e1"),g="https://api.themoviedb.org/3",j={flixnetOriginals:"".concat(g,"/discover/tv?api_key=").concat(u,"&with_networks=213"),trending:"".concat(g,"/trending/all/week?api_key=").concat(u,"&language=en-US"),popularMovies:"".concat(g,"/movie/popular?api_key=").concat(u,"&language=en-US&page=1"),upcomingMovies:"".concat(g,"/movie/upcoming?api_key=").concat(u,"&language=en-US&page=1"),popularTV:"".concat(g,"/tv/popular?api_key=").concat(u,"&language=en-US&page=1"),actionMovies:"".concat(g,"/discover/movie?api_key=").concat(u,"&with_genres=28"),comedyMovies:"".concat(g,"/discover/movie?api_key=").concat(u,"&with_genres=35"),horrorMovies:"".concat(g,"/discover/movie?api_key=").concat(u,"&with_genres=27"),romanceMovies:"".concat(g,"/discover/movie?api_key=").concat(u,"&with_genres=10749"),documentaries:"".concat(g,"/discover/movie?api_key=").concat(u,"&with_genres=99")},m=a(10),_=a(6),h=a(0),p=function(e){function t(t){var a=t.target.dataset.category;e.setUsersChoice(a)}return Object(h.jsxs)("ul",{className:"categories ".concat(e.hideHamburgerIcon?"nav-overlay--visible":""),children:[" ",Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"flixnetOriginals",tabIndex:"1",children:"Flixnet Originals"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"trending",tabIndex:"1",children:"Trending"}),Object(h.jsxs)("li",{className:"categories__button categories__button-movies",children:["Movies",Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"popularMovies",tabIndex:"1",children:"Popular Movies"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"upcomingMovies",tabIndex:"1",children:"Upcoming Movies"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"actionMovies",tabIndex:"1",children:"Action Movies"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"comedyMovies",tabIndex:"1",children:"Comedy Movies"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"horrorMovies",tabIndex:"1",children:"Horror Movies"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"romanceMovies",tabIndex:"1",children:"Romance Movies"})]})]}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"popularTV",tabIndex:"1",children:"Popular TV"}),Object(h.jsx)("li",{className:"categories__button btn",onClick:t,"data-category":"documentaries",tabIndex:"1",children:"Documentaries"})]})},x=function(e){var t=Object(i.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(i.useState)(""),s=Object(d.a)(o,2),r=s[0],l=s[1];return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("div",{className:"header__inner",children:[Object(h.jsx)("h1",{className:"header__logo",children:Object(h.jsx)("a",{href:"./",children:"Flixnet DB"})}),Object(h.jsx)(p,{setUsersChoice:e.setUsersChoice,hideHamburgerIcon:n}),Object(h.jsx)(m.a,{icon:_.a,onClick:function(){c(!0),l(!0)},className:n?"fa-bars--invisible":""}),Object(h.jsx)(m.a,{icon:_.b,onClick:function(){c(!1),l(!1)},className:r?"fa-times--visible":""})]})})},O=function(e){var t=e.movie,a=t[Math.floor(Math.random()*t.length-1)],i="https://image.tmdb.org/t/p/original"+(null===a||void 0===a?void 0:a.backdrop_path);function n(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e}return Object(h.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(i,")")},children:[Object(h.jsx)(x,{setUsersChoice:e.setUsersChoice}),Object(h.jsx)("div",{className:"banner__contents",children:Object(h.jsxs)("div",{className:"banner__contents-description",children:[Object(h.jsx)("h1",{className:"banner__contents-title",children:n(null===a||void 0===a?void 0:a.title,20)||n(null===a||void 0===a?void 0:a.name,20)}),Object(h.jsx)("p",{className:"banner__contents-overview",children:n(null===a||void 0===a?void 0:a.overview,150)}),Object(h.jsx)("p",{className:"banner__contents-vote ".concat(e.setVoteClass(null===a||void 0===a?void 0:a.vote_average)),children:null===a||void 0===a?void 0:a.vote_average})]})}),Object(h.jsx)("div",{className:"banner--bottomfade"})]})},f=(a.p,function(e){var t="https://image.tmdb.org/t/p/original";return Object(h.jsx)("div",{className:"grid",children:e.movie.map((function(e){return Object(h.jsx)("div",{className:"grid__item",style:{backgroundImage:"url(".concat((null===e||void 0===e||e.poster_path,t+(null===e||void 0===e?void 0:e.poster_path)),")")},children:Object(h.jsx)("div",{className:"grid__item-inner",children:Object(h.jsxs)("div",{className:"grid__item-description",children:[Object(h.jsx)("h1",{className:"grid__item-title",children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)}),Object(h.jsx)("p",{className:"grid__item-overview",children:null===e||void 0===e?void 0:e.overview}),Object(h.jsx)("p",{className:"grid__item-vote ".concat((a=e.vote_average,a>=8?"grid__item-vote--green":a>=5?"grid__item-vote--orange":"grid__item-vote--red")),children:null===e||void 0===e?void 0:e.vote_average})]})})},e.id);var a}))})});var N=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)("popularMovies"),o=Object(d.a)(c,2),s=o[0],v=o[1];return Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(j[s]);case 2:t=e.sent,n(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{movie:a,setUsersChoice:v,setVoteClass:function(e){return e>=8?"grid__item-vote--green":e>=5?"grid__item-vote--orange":"grid__item-vote--red"}}),Object(h.jsx)(f,{movie:a})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.de7568fb.chunk.js.map