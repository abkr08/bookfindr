(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),r=n.n(l),i=(n(14),n(3)),c=n(4),s=n(6),u=n(5),m=n(7),g=(n(15),n(16),function(e){var t=e.color;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:t},o.a.createElement("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48  8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828  8.332-1.151z"}))}),h=function(e){console.log(e);for(var t=[],n=e.ratings,a=0;a<5;a++)t.push(o.a.createElement(g,{key:a,color:n>0?"gold":"grey"})),n--;return o.a.createElement("div",{className:"Book"},o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:e.bookImage,alt:"book"})),o.a.createElement("span",null,o.a.createElement("a",{href:e.link},o.a.createElement("h4",null,e.bookTitle)),o.a.createElement("p",null,e.author?"By ".concat(e.author):"Unknown author"),o.a.createElement("p",null,t)))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,books:[]},n.inputChangedHandler=function(e){var t=e.target.value;n.setState({books:[]}),""!==t&&(n.setState({loading:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t)).then(function(e){n.setState({loading:!1}),e.json().then(function(e){console.log(e);var t=e.items.map(function(e){var t={};return t.id=e.id,t.link=e.volumeInfo.infoLink,t.images=e.volumeInfo.imageLinks,t.authors=e.volumeInfo.authors,t.title=e.volumeInfo.title,t.ratings=e.volumeInfo.averageRating,t.language=e.volumeInfo.language,t});n.setState({books:t})})}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.state.books);var e=null;this.state.loading&&(e=o.a.createElement("div",{className:"loading"}));var t=null;return this.state.books.length>0&&(t=this.state.books.map(function(e){return o.a.createElement(h,{key:e.id,bookImage:e.images&&e.images.thumbnail,bookTitle:e.title,ratings:e.ratings,link:e.link,author:e.authors})})),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"BOOKFINDR"),o.a.createElement("form",null,o.a.createElement("input",{type:"text",placeholder:"Search book... ",onChange:this.inputChangedHandler})),e,o.a.createElement("div",{className:"Books"},t))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.bf2cfa55.chunk.js.map