(this["webpackJsonpjp-draws"]=this["webpackJsonpjp-draws"]||[]).push([[0],{28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},34:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(23),o=a.n(s),c=(a(33),a(27)),i=a(1),l=a(2),p=a(4),m=a(3),u=a(5),h=(a(34),a(7)),d=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App-header"},n.a.createElement("div",{className:"topNav"},this.props.user?n.a.createElement("span",null,"Welcome back, ",this.props.user.first_name,"!"):n.a.createElement("span",null,"Welcome Guest!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),this.props.user?n.a.createElement(n.a.Fragment,null,n.a.createElement(h.b,{to:"/",onClick:this.props.logOut,className:"nav-item"},"Sign Out"),n.a.createElement(h.b,{to:"/orderhistory",className:"nav-item"},"Order History"),n.a.createElement(h.b,{to:"/chat",className:"nav-item"},"Chat")):n.a.createElement(h.b,{to:"/login",className:"nav-item"},"Log In"),n.a.createElement(h.b,{to:"/cart",className:"nav-item"},"Cart")),n.a.createElement("span",{className:"headerText"},n.a.createElement(h.b,{to:"/",onClick:this.props.resetSpecs},"Online Store")),n.a.createElement("br",null),n.a.createElement("div",{className:"titleSub"},"Online Store"))}}]),t}(n.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){a.props.specsMethod(a.props.drawing)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("figure",{onClick:this.handleClick},n.a.createElement("img",{src:this.props.drawing.img,width:"200",alt:""}),n.a.createElement("figcaption",null,this.props.drawing.name)))}}]),t}(n.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(r.Fragment,null,this.props.drawings.map((function(t,a){return n.a.createElement(g,{key:a,drawing:t,specsMethod:e.props.specsMethod})})))}}]),t}(n.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{resetSpecs:this.props.resetSpecs,specs:this.props.specs,specsMethod:this.props.specsMethod,logOut:this.props.logOut,user:this.props.user}),n.a.createElement(f,{drawings:this.props.drawings,specsMethod:this.props.specsMethod}))}}]),t}(n.a.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleRemove=function(){a.props.removeFromCart(a.props.item)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("figure",{className:"cart-item"},n.a.createElement("img",{src:this.props.item.img,alt:""}),n.a.createElement("figcaption",null,this.props.item.name,n.a.createElement("br",null),"$",this.props.item.price,n.a.createElement("br",null),n.a.createElement("button",{onClick:this.handleRemove},"Remove"))))}}]),t}(n.a.Component),O=a(16),v=a.n(O),y=a(26),j=a(14),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){var t,r,n;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.preventDefault(),s.prev=1,s.next=4,v.a.awrap(a.props.stripe.createToken({name:a.state.name}));case 4:return t=s.sent,r=t.token,n=a.state.amount,s.next=9,v.a.awrap(fetch("/server/charge",{method:"POST",headers:{"Content-Type":"text/plain"},body:r.id+"&"+n}));case 9:s.sent.ok&&(a.setState({complete:!0}),a.props.cart.forEach((function(e){var t=a.props.user.id,r=e.id;fetch("/api/v1/transactions",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user_id:t,drawing_id:r})}).then((function(e){return e.json()})).then((function(e){a.props.getUser()}))}))),s.next=17;break;case 14:throw s.prev=14,s.t0=s.catch(1),s.t0;case 17:case"end":return s.stop()}}),null,null,[[1,14]])},a.state={complete:!1,name:"",amount:a.props.totalAmount(a.props.cart)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.complete?n.a.createElement("h1",null,"Purchase Complete"):n.a.createElement("main",null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",value:this.state.name,name:"name",placeholder:"Full Name",onChange:this.handleChange}),n.a.createElement(j.CardElement,{className:"cardElement"}),n.a.createElement("input",{type:"submit",value:"Purchase",className:"btn-item"})))}}]),t}(r.Component),S=Object(j.injectStripe)(w),C=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("inside login",this.props),n.a.createElement("div",{className:"div-form"},n.a.createElement("form",{onSubmit:this.props.fetchUser},n.a.createElement("h1",null,"LOG IN"),this.props.error?n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"error"},"Error! Try again.")):null,n.a.createElement("label",null,"Username:",n.a.createElement("input",{onChange:this.props.loginAttempt,type:"text",name:"username"})),n.a.createElement("label",null,"Password:",n.a.createElement("input",{onChange:this.props.loginAttempt,type:"password",name:"password"})),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Log In",className:"btn-item"}),n.a.createElement("br",null),n.a.createElement(h.b,{to:"/signup",className:"btn-item"},"Sign Up"),n.a.createElement("br",null),n.a.createElement(h.b,{to:"/"},"Return to HomePage")))}}]),t}(n.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log("inside cart",JSON.parse(localStorage.cart)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column"},0!==this.props.cart.length?n.a.createElement(n.a.Fragment,null,this.props.cart.map((function(t,a){return n.a.createElement(E,{key:a,item:t,removeFromCart:e.props.removeFromCart})})),n.a.createElement("h5",null,"Grand Total: $",this.props.totalAmount(this.props.cart))):n.a.createElement("h1",null,"Your cart is empty!")),n.a.createElement("div",{className:"column"},this.props.user?0!==this.props.cart.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"CHECKOUT"),n.a.createElement(j.StripeProvider,{apiKey:"pk_test_DL12VnUcqypUKkIt7N1Qn5U400Nn4SZl50"},n.a.createElement(j.Elements,null,n.a.createElement(S,{getUser:this.props.getUser,cart:this.props.cart,user:this.props.user,totalAmount:this.props.totalAmount})))):null:n.a.createElement(C,{loginAttempt:this.props.loginAttempt,fetchUser:this.props.fetchUser,error:this.props.error})))}}]),t}(n.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{resetSpecs:this.props.resetSpecs,specs:this.props.specs,specsMethod:this.props.specsMethod,logOut:this.props.logOut,user:this.props.user}),n.a.createElement(k,{getUser:this.props.getUser,cart:this.props.cart,user:this.props.user,loginAttempt:this.props.loginAttempt,fetchUser:this.props.fetchUser,totalAmount:this.props.totalAmount,removeFromCart:this.props.removeFromCart,error:this.props.error}))}}]),t}(n.a.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={material:null},a.materialChange=function(e){a.setState({material:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("img",{src:this.props.drawing.img,width:"400",alt:""})),n.a.createElement("div",{className:"column specs"},n.a.createElement("h2",null,this.props.drawing.name),n.a.createElement("h4",null,"$",this.props.drawing.price),n.a.createElement("span",null,this.props.drawing.description),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("select",{name:"material",onChange:this.materialChange},n.a.createElement("option",{value:"print"},"Back Cover Design"),n.a.createElement("option",{value:"tote bag"},"Tote Bag"),n.a.createElement("option",{value:"coffee mug"},"Coffee Mug"),n.a.createElement("option",{value:"framed"},"Framed")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(h.b,{to:"/",onClick:function(){return e.props.addToCart(e.props.drawing,e.state.material)},className:"btn-item"},"Add To Cart"))))}}]),t}(n.a.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{resetSpecs:this.props.resetSpecs,specs:this.props.specs,specsMethod:this.props.specsMethod,logOut:this.props.logOut,user:this.props.user}),n.a.createElement(T,{drawing:this.props.specs,addToCart:this.props.addToCart}))}}]),t}(n.a.Component),I=[{id:1,name:"Oneplus buds",img:"/imgs/emotional-intelligence.jpg",price:100,description:"Got these about a month ago for my Sony XZ2 Compact. Sound is good and better bass than the headphones that came with the phone. say that to my face! \ud83d\ude20 C'mon! I DARE YOU!!!"},{id:2,name:"Iphone 11",img:"/imgs/Iphone 11.jpg",price:100,description:"Buy Apple iPhone 11 (Black, 64 GB, 4 GB RAM) online at best price in India. Read more about Apple iPhone 11 Don't blame me for everything that goes wrong in your life! If I did it, I will admit. If I didn't... Don't even try and frame me!!! \ud83d\ude24"},{id:3,name:"Nokia 8 Sirocco",img:"/imgs/get-ghosted.jpg",price:100,description:"Buy Nokia 8 Sirocco online at best price with offers in India. Nokia 8 Sirocco (Black, 128 GB) Sorry. The person you are looking for is not here at the moment. Plz leave a message "},{id:4,name:"Ipad",img:"/imgs/Ipad.jpg",price:100,description:"Clearly some dumbass doesn't know how to spell... T-H-R-E-A-D! Not, T-R-E-A-D! Learn English! \ud83e\udd37\u200d\u2642\ufe0f"},{id:5,name:"Samsung note 11",img:"/imgs/chav.jpg",price:100,description:"Stop doing your homework and help me with this game! I've almost got this level beat! Just need a little support... Drop that pencil and pick up a console already! I haven't got all day!"},{id:6,name:"Pixel 3XL",img:"/imgs/model-pains.jpg",price:100,description:"I don't get paid enough for this shit..."},{id:7,name:"Realme 5s",img:"/imgs/quit-instagram.jpg",price:100,description:"Social Media is my life! I ain't giving it up for anybody! Much less you! Who da hell do you think you are?! You ain't my mother! \ud83d\ude24"},{id:8,name:"Nokia n85",img:"/imgs/get-shrexd.jpg",price:100,description:"The super nseries with n-gage gaming....But what about Puss-in-Boots? \ud83d\udc08\ud83d\udc62"},{id:9,name:"Redmi k20 Pro",img:"/imgs/say-what.jpg",price:100,description:"Shit I must've heard her wrong... What'd she say?! Hmm... Sorry, where's the nearest airport? Perfect! See ya! \u2708\ufe0f"},{id:10,name:"Oneplus 7t pro",img:"/imgs/jfma-jason.jpg",price:100,description:'Isn\'t he that newspaper guy from Spider-Man? You know... the old man who points at the screen and cries out, "Spider-Man is a Menace!" Right! J. Jonah. Jameson is his name! ... No? How could I be wrong? \ud83d\ude31'},{id:11,name:"Blackberry KeyOne",img:"/imgs/baby-dont-hurt-me.jpg",price:100,description:"Yes... Guys can get pregnant too...It's a medical condition! Look it up! It's definitely NOT because of the Big Belly Burger and fifteen pound McDonald's I had last night or the 30 pound steak dinner I had the night before... Quit judging me! This will be you one day too! JUST WAIT FOR IT! \ud83d\ude24"},{id:12,name:"Samsung galaxy s10",img:"/imgs/witch-spell.jpg",price:100,description:"Pour some water and melt this b*tch already... I mean... You're the nicest b*tch--- er... I mean, witch in town! Please help me... \ud83d\ude4f"}],A=a(12),M=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"div-form"},n.a.createElement("form",{onSubmit:this.props.createUser},n.a.createElement("h1",null,"SIGN UP"),n.a.createElement("label",null,"First Name:",n.a.createElement("input",{type:"text",name:"first_name"})),n.a.createElement("label",null,"Last Name:",n.a.createElement("input",{type:"text",name:"last_name"})),n.a.createElement("label",null,"Username:",n.a.createElement("input",{type:"text",name:"username"})),n.a.createElement("label",null,"Password:",n.a.createElement("input",{type:"password",name:"password"})),n.a.createElement("input",{type:"submit",value:"Sign Up",className:"btn-item"}),n.a.createElement(h.b,{to:"/login",className:"btn-item"}," Log In ")),n.a.createElement("br",null),n.a.createElement(h.b,{to:"/"},"Return to HomePage"))}}]),t}(n.a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{resetSpecs:this.props.resetSpecs,specs:this.props.specs,specsMethod:this.props.specsMethod,logOut:this.props.logOut,user:this.props.user}),n.a.createElement("div",null,n.a.createElement("h1",null,"Order History"),this.props.user.transactions.map((function(e,t){return n.a.createElement(r.Fragment,null,n.a.createElement("figure",{className:"cart-item"},n.a.createElement("img",{src:e.drawing.img,alt:""}),n.a.createElement("figcaption",null,e.drawing.name,n.a.createElement("br",null),"$",e.drawing.price)))}))))}}]),t}(n.a.Component),P={token:null,user_id:"",user:null,drawings:I,specs:null,cart:[],error:!1},_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state=P,a.specsMethod=function(e){a.setState({specs:e})},a.addToCart=function(e,t){a.setState({cart:[].concat(Object(c.a)(a.state.cart),[e]),specs:null})},a.resetSpecs=function(){a.setState({specs:null})},a.getToken=function(e){var t=e.target.username.value,r=e.target.password.value;return console.log("EVENT",t,r),fetch("/api/v1/login",{method:"POST",headers:{"Content-type":"application/json",Accept:"application/json"},body:JSON.stringify({username:t,password:r})}).then((function(e){return e.json()})).then((function(e){console.log("data",e),e.errors?a.setState({error:!0}):(localStorage.token=e.token,localStorage.user_id=e.user_id,a.setState({token:e.token,user_id:e.user_id}))}))},a.totalAmount=function(e){return 0===e.length?0:e.map((function(e){return e.price})).reduce((function(e,t){return e+t}))},a.getUser=function(){return fetch("/api/v1/users/".concat(a.state.user_id),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a.state.token}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(e)),a.setState({user:e,drawings:I})}))},a.fetchUser=function(e){e.preventDefault(),a.getToken(e).then((function(){a.getUser()}))},a.newUser=function(e){var t=e.target.username.value,r=e.target.password.value;return fetch("/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({first_name:e.target.first_name.value,last_name:e.target.last_name.value,username:t,password:r})}).then((function(e){return e.json()})).then((function(n){a.setState({username:t,password:r}),a.fetchUser(e)}))},a.createUser=function(e){e.preventDefault(),a.newUser(e).then(a.getToken()).then((function(){a.getUser()}))},a.logOut=function(){localStorage.token=null,localStorage.user_id=null,localStorage.user=null,a.setState(P)},a.removeFromCart=function(e){var t=a.state.cart.filter((function(t){return t!==e}));a.setState({cart:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));localStorage.token&&this.setState({token:localStorage.token,user_id:localStorage.user_id,user:e})}},{key:"render",value:function(){var e=this;return localStorage.setItem("cart",JSON.stringify(this.state.cart)),n.a.createElement("div",{className:"App"},n.a.createElement(A.d,null,n.a.createElement(A.b,{exact:!0,path:"/",render:function(t){return n.a.createElement(b,{resetSpecs:e.resetSpecs,specs:e.state.specs,specsMethod:e.specsMethod,logOut:e.logOut,user:e.state.user,drawings:e.state.drawings,cart:e.state.cart,addToCart:e.addToCart})}}),n.a.createElement(A.b,{path:"/cart",render:function(t){return n.a.createElement(N,{resetSpecs:e.resetSpecs,specs:e.state.specs,specsMethod:e.specsMethod,logOut:e.logOut,user:e.state.user,drawings:e.state.drawings,cart:e.state.cart,addToCart:e.addToCart,loginAttempt:e.loginAttempt,fetchUser:e.fetchUser,totalAmount:e.totalAmount,getUser:e.getUser,removeFromCart:e.removeFromCart,error:e.state.error})}}),n.a.createElement(A.b,{path:"/drawing",render:function(t){return n.a.createElement(U,{resetSpecs:e.resetSpecs,specs:e.state.specs,specsMethod:e.specsMethod,logOut:e.logOut,user:e.state.user,drawings:e.state.drawings,cart:e.state.cart,addToCart:e.addToCart})}}),n.a.createElement(A.b,{path:"/signup",render:function(t){return n.a.createElement(M,{createUser:e.createUser})}}),n.a.createElement(A.b,{path:"/login",render:function(t){return n.a.createElement(C,{loginAttempt:e.loginAttempt,fetchUser:e.fetchUser,error:e.state.error})}}),n.a.createElement(A.b,{path:"/orderhistory",render:function(t){return n.a.createElement(F,{resetSpecs:e.resetSpecs,specs:e.state.specs,specsMethod:e.specsMethod,logOut:e.logOut,user:e.state.user,drawings:e.state.drawings,cart:e.state.cart,addToCart:e.addToCart})}}),"} />",n.a.createElement(A.a,{to:""})),this.state.user?n.a.createElement(A.a,{to:""}):null,this.state.specs?n.a.createElement(A.a,{to:"drawing"}):n.a.createElement(A.a,{to:""}))}}]),t}(n.a.Component),J=Object(A.g)(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(h.a,null,n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.17ce0d14.chunk.js.map