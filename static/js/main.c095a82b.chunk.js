(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(50)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(20),c=t.n(r),l=t(24),o=t(14),s=t.n(o),u=t(21),d=t(25),m=t(6),h=t(8),g=t(9),p=t(11),f=t(10),v=t(12),k=t(5),E=(t(33),function(e){var a=e.handleBackClick;return i.a.createElement("div",{className:"navBar"},e.showBackBtn?i.a.createElement("button",{style:{border:"none",cursor:"pointer",backgroundColor:"transparent",color:"white"},onClick:a},i.a.createElement("i",{className:"fas fa-arrow-left fa-lg"}),i.a.createElement("span",{style:{marginLeft:"20px"}},"Data Peace")):i.a.createElement("span",{className:"burgerMenu"},i.a.createElement("i",{className:"fas fa-bars"}),i.a.createElement("span",{style:{marginLeft:"20px"}},"Data Peace")))}),C=(t(34),function(e){var a=e.handleNextClick,t=e.handlePreviousClick;return i.a.createElement("div",{className:"navigatorContainer"},i.a.createElement("div",{className:"leftBtn"},i.a.createElement("button",{className:"navigatorBtn",onClick:t},"Previous")),i.a.createElement("div",{className:"rightBtn"},i.a.createElement("button",{className:"navigatorBtn",onClick:a},"Next")))}),S=(t(35),function(e){var a=e.activePaginationIndex,t=e.duplicateData,n=e.pageSize,r=a*n-n+1,c=r+n-1,l=t.length,o="".concat(r,"-").concat(c," of ").concat(l);return i.a.createElement("div",{className:"searchContainer row"},i.a.createElement("div",null,i.a.createElement("input",{className:"searchInput",placeholder:"Search by first name",onChange:e.searchNameHandler,value:e.value})),i.a.createElement("div",{className:"paginationCount"},o))}),b=(t(36),t(37),function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).handleSortingState=function(e){var a=Object(m.a)({},t.state),n={key:null,sortingOrder:null};n.key=e,n.sortingOrder=a.sortingState[e],a.sortingState[e]="asc"===a.sortingState[e]?"desc":"asc",t.resetSortingIcon(e,a),t.setState(a,function(){return t.props.handleSorting(n)})},t.resetSortingIcon=function(e,a){for(var t in a.sortingState)t!==e&&(a.sortingState[t]="asc")},t.state={sortingState:{"First Name":"asc","Last Name":"asc","Company Name":"asc",City:"asc",State:"asc",Zip:"asc",Email:"asc",Web:"asc",Age:"asc"}},t.HEADINGS=["First Name","Last Name","Company Name","City","State","Zip","Email","Web","Age"],t}return Object(v.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.HEADINGS.map(function(a,t){var n="asc"===e.state.sortingState[a]?i.a.createElement("i",{className:"fas fa-caret-down"}):i.a.createElement("i",{className:"fas fa-caret-up"});return i.a.createElement("th",{className:"tableHeader",onClick:function(){return e.handleSortingState(a)},key:t}," ",n," ",a)});return i.a.createElement("tr",null,a)}}]),a}(i.a.Component)),N=(t(38),function(e){var a=e.rowData;return i.a.createElement("tr",{className:"tableRow",onClick:function(){return e.handleRowClick(e.rowData.id)}},i.a.createElement("td",null," ",a.first_name," "),i.a.createElement("td",null," ",a.last_name," "),i.a.createElement("td",null," ",a.company_name," "),i.a.createElement("td",null," ",a.city," "),i.a.createElement("td",null," ",a.state," "),i.a.createElement("td",null," ",a.zip," "),i.a.createElement("td",null," ",a.email," "),i.a.createElement("td",{style:{color:"#50a4f3"}}," ",a.web," "),i.a.createElement("td",null," ",a.age," "))}),w=function(e){var a=e.responseData.map(function(a,t){return i.a.createElement(N,{key:t,rowData:a,handleRowClick:e.handleRowClick})});return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement(b,{handleSorting:e.handleSorting})),i.a.createElement("tbody",null,a))},P=(t(39),t(40),function(e){var a,t,n=e.pageSize,r=e.data,c=e.activePaginationIndex,l=e.paginationStartIndex,o=e.handlePaginationClickChange,s=[],u=14*l+1,d=u+14-1;d=d>Math.ceil(r.length/n)?Math.ceil(r.length/n):d;for(var m=function(n){t=n===c?"activePaginationBtn":"paginationBtn",a=i.a.createElement("button",{key:n,className:t,onClick:function(){return e.handlePagination(n)}},n),s.push(a)},h=u;h<=d;h++)m(h);return i.a.createElement("h1",{style:{clear:"both",textAlign:"center"}},i.a.createElement("button",{className:"paginationBtn",onClick:function(){return o("-")}}," \xab "),s,i.a.createElement("button",{className:"paginationBtn",onClick:function(){return o("+")}}," \xbb "))}),x=function(e){var a=e.responseData,t=e.activePaginationIndex,n=e.duplicateData,r=e.searchNameHandler,c=e.handleNextClick,l=e.handlePreviousClick,o=e.handleRowClick,s=e.handleSorting,u=e.handlePagination,d=e.pageSize,m=e.paginationStartIndex,h=e.handlePaginationClickChange,g=e.searchValue;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,null),i.a.createElement("div",{className:"appContainer"},i.a.createElement(S,{searchNameHandler:r,pageSize:d,value:g,activePaginationIndex:t,duplicateData:n}),i.a.createElement(w,{responseData:a,handleRowClick:o,handleSorting:s}),i.a.createElement(C,{handleNextClick:c,handlePreviousClick:l}),i.a.createElement(P,{data:n,pageSize:d,activePaginationIndex:t,paginationStartIndex:m,handlePagination:u,handlePaginationClickChange:h})))},y=(t(41),function(e){return e.map(function(e,a){return i.a.createElement("div",{key:a},i.a.createElement("div",{className:"personalDetail"},i.a.createElement("div",null," ",e[0]," "),i.a.createElement("div",{className:"valueField"},e[1])),i.a.createElement("div",{className:"seperator"}))})}),O=function(e){var a=e.detailedObj,t=a.age,n=a.city,r=a.company_name,c=a.email,l=a.first_name,o=a.last_name,s=a.state,u=a.web,d=[["Company",r],["City",n],["State",s],["Zip",a.zip],["Email",c],["Web",u],["Age",t]];return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{showBackBtn:!0,handleBackClick:e.handleBackClick}),i.a.createElement("div",{className:"detailedViewContainer"},i.a.createElement("h2",{className:"nameField"},"".concat(l," ").concat(o)),y(d)))},I=function(e,a){var t=D(a.key);return"asc"===a.sortingOrder?j(e,t):R(e,t),e},R=function(e,a){for(var t=0;t<e.length-1;t++)for(var n=t+1;n<e.length;n++)e[n][a]>e[t][a]&&B(e,t,n)},j=function(e,a){for(var t=0;t<e.length-1;t++)for(var n=t+1;n<e.length;n++)e[n][a]<e[t][a]&&B(e,t,n)},B=function(e,a,t){var n=e[a];e[a]=e[t],e[t]=n},D=function(e){return{"First Name":"first_name","Last Name":"last_name","Company Name":"company_name",City:"city",State:"state",Zip:"zip",Email:"email",Web:"web",Age:"age"}[e]},z=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).searchNameHandler=function(e){var a=Object(m.a)({},t.state),n=a.duplicateResTwo.filter(function(a){return""===e.target.value?a:a.first_name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1?a:null}),i=e.target.value?{response:n.slice(0,5),duplicateRes:n}:{response:a.cloneResTwo,duplicateRes:a.duplicateResTwo};t.setState(Object(m.a)({},i,{searchValue:e.target.value}))},t.handleRowClick=function(e){var a=Object(d.a)(t.state.response).find(function(a){return a.id===e});t.setState({detailedObj:a},function(){return t.props.history.push("/user/".concat(e))})},t.handleBackClick=function(){t.props.history.goBack()},t.handleSorting=function(e){var a=Object(m.a)({},t.state),n=I(a.response,e);a.response=n,a.cloneRes=n,t.setState(a)},t.handlePagination=function(e){var a=t.sizeOfPages,n=Object(m.a)({},t.state),i=e*a-a,r=i+a;t.activePaginationIndex=e,n.response=n.duplicateRes.slice(i,r),n.cloneRes=n.duplicateRes.slice(i,r),t.setState(n)},t.handleNextClick=function(){var e=Math.ceil(t.state.duplicateRes.length/t.sizeOfPages);t.activePaginationIndex<e&&t.handlePagination(t.activePaginationIndex+1)},t.handlePreviousClick=function(){t.activePaginationIndex>1&&t.handlePagination(t.activePaginationIndex-1)},t.handlePaginationClickChange=function(e){var a=Object(m.a)({},t.state);"+"===e?(a.paginationStartIndex=a.paginationStartIndex+1,a.duplicateRes.length/5>14*a.paginationStartIndex+1&&t.setState(a)):(a.paginationStartIndex=a.paginationStartIndex-1,a.paginationStartIndex>-1&&t.setState(a))},t.renderSwitch=function(){var e=t.props.location.pathname,a=e.split("/")[2];switch(e){case"/user/".concat(a):return i.a.createElement(O,{detailedObj:t.state.detailedObj,handleBackClick:t.handleBackClick});default:return i.a.createElement(x,{activePaginationIndex:t.activePaginationIndex,pageSize:t.sizeOfPages,responseData:t.state.response,duplicateData:t.state.duplicateRes,paginationStartIndex:t.state.paginationStartIndex,handleRowClick:t.handleRowClick,handleSorting:t.handleSorting,searchNameHandler:t.searchNameHandler,handlePagination:t.handlePagination,handleNextClick:t.handleNextClick,handlePreviousClick:t.handlePreviousClick,handlePaginationClickChange:t.handlePaginationClickChange,searchValue:t.state.searchValue})}},t.state={response:[],duplicateRes:[],detailedObj:{},cloneRes:[],paginationStartIndex:0,searchValue:""},t.sizeOfPages=5,t.activePaginationIndex=1,t}return Object(v.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){var a,t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo9197058.mockable.io/users");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=this.sizeOfPages,this.setState({response:t.slice(0,n),cloneRes:t.slice(0,n),cloneResTwo:t.slice(0,n),duplicateRes:t,duplicateResTwo:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){this.props.location.pathname.length>1&&this.props.history.push("/")}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.renderSwitch())}}]),a}(n.Component),_=Object(k.d)(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(l.a,null,i.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.c095a82b.chunk.js.map