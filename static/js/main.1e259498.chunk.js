(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),i=(n(13),n(2)),o=n(3),h=n(5),l=n(4),b=n(0),u=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email})}))})},d=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=(n(15),function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"4px solid black",height:"500px"},children:e.children})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"OOOPSS!"}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"RobotFriends"}),Object(b.jsx)(d,{searchChange:this.onSearchChange}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:r})})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(r.Component);s.a.render(Object(b.jsx)("div",{children:Object(b.jsx)(p,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.1e259498.chunk.js.map