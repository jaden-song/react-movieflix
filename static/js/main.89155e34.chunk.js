(this["webpackJsonpreact-movie-flix"]=this["webpackJsonpreact-movie-flix"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},43:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),l=n(11),u=n(12),c=n(14),s=n(13),p=n(18),d=n(4),m=n(9),f=n.n(m),g=n(16),v=n(3),h=n(1),b=n.n(h),E=n(2),y=n(15);function x(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return x=function(){return e},e}function _(){var e=Object(v.a)(["\n  font-size: 14px;\n  font-weight: 600;\n\n"]);return _=function(){return e},e}function j(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return j=function(){return e},e}var O=E.default.div(j()),w=E.default.span(_()),k=E.default.div(x()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(O,null,r.a.createElement(w,null,t),r.a.createElement(k,null,n))};function T(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return T=function(){return e},e}var R=E.default.div(T()),M=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function U(){var e=Object(v.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function z(){var e=Object(v.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return z=function(){return e},e}var C=E.default.div(z()),P=E.default.span(U(),(function(e){return e.color})),F=function(e){var t=e.text,n=e.color;return r.a.createElement(C,null,r.a.createElement(P,{color:n},t))};function I(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return I=function(){return e},e}function q(){var e=Object(v.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return q=function(){return e},e}function N(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return N=function(){return e},e}function V(){var e=Object(v.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return V=function(){return e},e}function A(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var D=E.default.div(B()),L=E.default.div(A(),(function(e){return e.bgUrl})),J=E.default.span(V()),G=E.default.div(N(),L,J),H=E.default.span(q()),K=E.default.span(I()),Q=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(p.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(D,null,r.a.createElement(G,null,r.a.createElement(L,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(29)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(H,null,i.length>15?"".concat(i.substring(0,18),"..."):i),r.a.createElement(K,null,l)))};function W(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return W=function(){return e},e}var X=E.default.div(W()),Y=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Movies | Mflix")),i?r.a.createElement(M,null):r.a.createElement(X,null,t&&t.length>0&&r.a.createElement(S,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(S,{title:"Upcoming Movies"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Movies"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),o&&r.a.createElement(F,{color:"#e74c3c",text:o})))};Y.protoTypes={nowPlaying:b.a.array,popular:b.a.array,upcoming:b.a.array,loading:b.a.bool.isRequired,error:b.a.string};var Z=Y,$=n(41),ee=n.n($).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9f218d81ec2a0bd6fed3b23a601c84e9"}}),te=function(){return ee.get("movie/now_playing")},ne=function(){return ee.get("movie/upcoming")},ae=function(){return ee.get("movie/popular")},re=function(e){return ee.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ie=function(e){return ee.get("search/movie",{params:{query:encodeURIComponent(e)}})},oe=function(){return ee.get("tv/top_rated")},le=function(){return ee.get("tv/popular")},ue=function(){return ee.get("tv/airing_today")},ce=function(e){return ee.get("tv/".concat(e),{params:{append_to_response:"videos"}})},se=function(e){return ee.get("search/tv",{params:{query:encodeURIComponent(e)}})},pe=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te();case 3:return t=e.sent,n=t.data.results,e.next=7,ne();case 7:return a=e.sent,r=a.data.results,e.next=11,ae();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(Z,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),n}(r.a.Component);function de(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return de=function(){return e},e}var me=E.default.div(de()),fe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"TV Shows | Mflix")),i?r.a.createElement(M,null):r.a.createElement(me,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),o&&r.a.createElement(F,{color:"#e74c3c",text:o})))};fe.protoTypes={topRated:b.a.array,popular:b.a.array,airingToday:b.a.array,loading:b.a.bool.isRequired,error:b.a.string};var ge=fe,ve=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:return t=e.sent,n=t.data.results,e.next=7,le();case 7:return a=e.sent,r=a.data.results,e.next=11,ue();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(ge,{topRated:t,airingToday:a,popular:n,error:i,loading:o})}}]),n}(r.a.Component);function he(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return be=function(){return e},e}function Ee(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return Ee=function(){return e},e}var ye=E.default.div(Ee()),xe=E.default.form(be()),_e=E.default.input(he()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.searchTerm,o=e.handleSubmit,l=e.error,u=e.updateTerm;return r.a.createElement(ye,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Search | Mflix")),r.a.createElement(xe,{onSubmit:o},r.a.createElement(_e,{placeholder:"Search Movies or TV Shows...",values:i,onChange:u})),a?r.a.createElement(M,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Movie Results"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),l&&r.a.createElement(F,{color:"#e74c3c",text:l}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(F,{text:"Nothing found",color:"#95a5a6"})))};je.protoTypes={movieResults:b.a.array,tvResults:b.a.array,loading:b.a.bool.isRequired,error:b.a.string,searchTerm:b.a.string,handleSubmit:b.a.func.isRequired,updateTerm:b.a.func.isRequired};var Oe=je,we=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(g.a)(f.a.mark((function t(){var n,a,r,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ie(n);case 5:return a=t.sent,r=a.data.results,t.next=9,se(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResults:r,tvResults:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading;return r.a.createElement(Oe,{movieResults:t,tvResults:n,loading:o,error:i,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function ke(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return ke=function(){return e},e}function Se(){var e=Object(v.a)(["\n  margin: 0 10px;\n"]);return Se=function(){return e},e}function Te(){var e=Object(v.a)([""]);return Te=function(){return e},e}function Re(){var e=Object(v.a)(["\n  margin: 20px 0;\n"]);return Re=function(){return e},e}function Me(){var e=Object(v.a)(["\n  font-size: 32px;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(v.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Fe=function(){return e},e}var Ie=E.default.div(Fe()),qe=E.default.div(Pe(),(function(e){return e.bgImage})),Ne=E.default.div(Ce()),Ve=E.default.div(ze(),(function(e){return e.bgImage})),Ae=E.default.div(Ue()),Be=E.default.h3(Me()),De=E.default.div(Re()),Le=E.default.span(Te()),Je=E.default.span(Se()),Ge=E.default.p(ke()),He=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Loading | MFlix")),r.a.createElement(M,null)):r.a.createElement(Ie,null,r.a.createElement(y.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | MFlix")),r.a.createElement(qe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ne,null,r.a.createElement(Ve,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),r.a.createElement(Ae,null,r.a.createElement(Be,null,t.original_title?t.original_title:t.original_name),r.a.createElement(De,null,r.a.createElement(Le,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Je,null,"\u2022"),r.a.createElement(Le,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Je,null,"\u2022"),r.a.createElement(Le,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(Ge,null,t.overview))))};He.protoTypes={result:b.a.object,loading:b.a.bool.isRequired,error:b.a.string};var Ke=He,Qe=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o,l,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,re(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,ce(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Ke,{result:t,error:n,loading:a})}}]),n}(r.a.Component);function We(){var e=Object(v.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return We=function(){return e},e}function Xe(){var e=Object(v.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid\n        ",";\n    transition: border-bottom 0.5s ease-in-out;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(v.a)(["\n    display: flex;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(v.a)(["\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return Ze=function(){return e},e}var $e=E.default.header(Ze()),et=E.default.ul(Ye()),tt=E.default.li(Xe(),(function(e){return e.current?"#3498db":"transparent"})),nt=Object(E.default)(p.b)(We()),at=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement($e,null,r.a.createElement(et,null,r.a.createElement(tt,{current:"/"===t},r.a.createElement(nt,{to:"/"},"Movies")),r.a.createElement(tt,{current:"/tv"===t},r.a.createElement(nt,{to:"/tv"},"TV")),r.a.createElement(tt,{current:"/search"===t},r.a.createElement(nt,{to:"/search"},"Search"))))})),rt=function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(at,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:pe}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:ve}),r.a.createElement(d.b,{path:"/tv/popular",render:function(){return r.a.createElement("h1",null,"Popular")}}),r.a.createElement(d.b,{path:"/search",component:we}),r.a.createElement(d.b,{path:"/movie/:id",component:Qe}),r.a.createElement(d.b,{path:"/show/:id",component:Qe}),r.a.createElement(d.a,{from:"*",to:"/"}))))},it=n(42),ot=n.n(it);function lt(){var e=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top: 50px;\n    }\n"]);return lt=function(){return e},e}var ut=Object(E.createGlobalStyle)(lt(),ot.a),ct=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt,null),r.a.createElement(ut,null))}}]),n}(a.Component);o.a.render(r.a.createElement(ct,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.89155e34.chunk.js.map