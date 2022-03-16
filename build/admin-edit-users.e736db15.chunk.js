"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4263],{65770:(e,t,a)=>{var r=a(98399),n=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(28129)),l=n(a(51265)),i=n(a(68357)),s=n(a(32735)),u=a(60530),d=a(5636),c=n(a(60216)),f=n(a(88423)),p=n(a(33795)),m=n(a(9086)),g=a(10938),v=a(84968),b=a(83281),y=a(9808),h=a(44526),w=a(78330),O=a(11856),E=a(58434),M=a(95602),P=a(16540),k=a(90662),j=n(a(98599)),_=n(a(88677)),x=a(10120),S=a(82195),A=n(a(97461)),U=a(37028),L=n(a(41542)),C=window&&window.strapi&&window.strapi.isEE?a(96040).Z:a(40832).Z,I=["email","firstname","lastname","username","isActive","roles"],T=function(e){var t=e.canUpdate,a=(0,d.useIntl)().formatMessage,n=(0,u.useRouteMatch)("/settings/users/:id").params.id,c=(0,u.useHistory)().push,T=(0,g.useAppInfos)().setUserDisplayName,D=(0,g.useNotification)(),B=(0,g.useOverlayBlocker)(),q=B.lockApp,z=B.unlockApp;(0,g.useFocusWhenNavigate)();var W=(0,v.useQuery)(["user",n],(function(){return(0,S.fetchUser)(n)}),{retry:!1,keepPreviousData:!1,staleTime:2e4,onError:function(e){403===e.response.status&&(D({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),c("/")),r.log(e.response.status)}}),R=W.status,N=W.data,F=function(){var e=(0,i.default)(o.default.mark((function e(t,r){var l,i,s,u,d;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.prev=1,e.next=4,(0,S.putUser)(n,(0,m.default)(t,"confirmPassword"));case 4:l=e.sent,D({type:"success",message:a({id:"notification.success.saved",defaultMessage:"Saved"})}),i=g.auth.getUserInfo(),n.toString()===i.id.toString()&&(g.auth.setUserInfo(l),s=(0,p.default)(t,"username")||(0,x.getFullName)(t.firstname,t.lastname),T(s)),r.setValues((0,f.default)(t,I)),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),u=(0,x.formatAPIErrors)(e.t0.response.data),d=Object.keys(u).reduce((function(e,t){return e[t]=u[t].id,e}),{}),r.setErrors(d),D({type:"warning",message:(0,p.default)(e.t0,"response.data.message","notification.error")});case 17:z();case 18:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}(),Z="success"!==R,V=Z?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},G=Object.keys((0,f.default)(N,I)).reduce((function(e,t){return"roles"===t?(e[t]=((null===N||void 0===N?void 0:N.roles)||[]).map((function(e){return e.id})),e):(e[t]=null===N||void 0===N?void 0:N[t],e)}),{}),H=G.username||(0,x.getFullName)(G.firstname,G.lastname),K=a(V,{name:H});return Z?s.default.createElement(P.Main,{"aria-busy":"true"},s.default.createElement(g.SettingsPageTitle,{name:"Users"}),s.default.createElement(O.HeaderLayout,{primaryAction:s.default.createElement(h.Button,{disabled:!0,startIcon:s.default.createElement(_.default,null),type:"button",size:"L"},a({id:"form.button.save",defaultMessage:"Save"})),title:K,navigationAction:s.default.createElement(E.Link,{startIcon:s.default.createElement(j.default,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},a({id:"app.components.go-back",defaultMessage:"Back"}))}),s.default.createElement(O.ContentLayout,null,s.default.createElement(g.LoadingIndicatorPage,null))):s.default.createElement(P.Main,null,s.default.createElement(g.SettingsPageTitle,{name:"Users"}),s.default.createElement(b.Formik,{onSubmit:F,initialValues:G,validateOnChange:!1,validationSchema:U.editValidation},(function(e){var r=e.errors,n=e.values,o=e.handleChange,i=e.isSubmitting;return s.default.createElement(g.Form,null,s.default.createElement(O.HeaderLayout,{primaryAction:s.default.createElement(h.Button,{disabled:i||!t,startIcon:s.default.createElement(_.default,null),loading:i,type:"submit",size:"L"},a({id:"form.button.save",defaultMessage:"Save"})),title:K,navigationAction:s.default.createElement(E.Link,{startIcon:s.default.createElement(j.default,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},a({id:"app.components.go-back",defaultMessage:"Back"}))}),s.default.createElement(O.ContentLayout,null,(null===N||void 0===N?void 0:N.registrationToken)&&s.default.createElement(y.Box,{paddingBottom:6},s.default.createElement(C,{registrationToken:N.registrationToken})),s.default.createElement(k.Stack,{size:7},s.default.createElement(y.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.default.createElement(k.Stack,{size:4},s.default.createElement(M.Typography,{variant:"delta",as:"h2"},a({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),s.default.createElement(w.Grid,{gap:5},A.default.map((function(e){return e.map((function(e){return s.default.createElement(w.GridItem,(0,l.default)({key:e.name},e.size),s.default.createElement(g.GenericInput,(0,l.default)({},e,{disabled:!t,error:r[e.name],onChange:o,value:n[e.name]||""})))}))}))))),s.default.createElement(y.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.default.createElement(k.Stack,{size:4},s.default.createElement(M.Typography,{variant:"delta",as:"h2"},a({id:"app.components.Users.ModalCreateBody.block-title.login",defaultMessage:"User's role"})),s.default.createElement(w.Grid,{gap:5},s.default.createElement(w.GridItem,{col:6,xs:12},s.default.createElement(L.default,{disabled:!t,error:r.roles,onChange:o,value:n.roles}))))))))})))};T.propTypes={canUpdate:c.default.bool.isRequired};var D=T;t.default=D},82195:(e,t,a)=>{var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.putUser=t.fetchUser=void 0;var n=r(a(28129)),o=r(a(68357)),l=a(17888),i=function(){var e=(0,o.default)(n.default.mark((function e(t){var a,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.axiosInstance.get("/admin/users/".concat(t));case 2:return a=e.sent,r=a.data,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.fetchUser=i;var s=function(){var e=(0,o.default)(n.default.mark((function e(t,a){var r,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.axiosInstance.put("/admin/users/".concat(t),a);case 2:return r=e.sent,o=r.data,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.putUser=s},97461:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"email",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.password.label",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12}},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];t.default=a},61377:(e,t,a)=>{var r=a(99489),n=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(32735)),l=a(10938),i=a(60530),s=a(92891),u=r(a(59700)),d=r(a(65770));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var f=function(){var e=(0,l.useNotification)(),t=(0,o.useMemo)((function(){return{read:u.default.settings.users.read,update:u.default.settings.users.update}}),[]),a=(0,l.useRBAC)(t),r=a.isLoading,n=a.allowedActions,c=n.canRead,f=n.canUpdate,p=(0,i.useLocation)().state,m=(0,s.get)(p,"from","/");return(0,o.useEffect)((function(){r||c||f||e({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})}),[r,c,f,e]),r?o.default.createElement(l.LoadingIndicatorPage,null):c||f?o.default.createElement(d.default,{canUpdate:f}):o.default.createElement(i.Redirect,{to:m})};t.default=f},91640:(e,t,a)=>{var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(32735)),o=r(a(60216)),l=a(20763),i=a(10938),s=r(a(68192)),u=a(59087),d=a(5636),c=function(){return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},n.default.createElement("tspan",{x:"23",y:"36"},"\u2709\ufe0f")))},f=function(e){var t=e.children,a=e.target,r=(0,i.useNotification)(),o=(0,(0,d.useIntl)().formatMessage)({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return n.default.createElement(i.ContentBox,{endAction:n.default.createElement(u.CopyToClipboard,{onCopy:function(){r({type:"info",message:{id:"notification.link-copied"}})},text:a},n.default.createElement(l.IconButton,{label:o,noBorder:!0,icon:n.default.createElement(s.default,null)})),title:a,titleEllipsis:!0,subtitle:t,icon:n.default.createElement(c,null),iconBackground:"neutral100"})};f.propTypes={children:o.default.oneOfType([o.default.element,o.default.string]).isRequired,target:o.default.string.isRequired};var p=f;t.default=p},40832:(e,t,a)=>{var r=a(99489);t.Z=void 0;var n=r(a(32735)),o=a(5636),l=r(a(60216)),i=r(a(7402)),s=r(a(91640)),u=function(e){var t=e.registrationToken,a=(0,o.useIntl)().formatMessage,r="".concat(window.location.origin).concat(i.default,"auth/register?registrationToken=").concat(t);return n.default.createElement(s.default,{target:r},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};u.defaultProps={registrationToken:""},u.propTypes={registrationToken:l.default.string};var d=u;t.Z=d},41542:(e,t,a)=>{var r=a(99489),n=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(28129)),l=r(a(68357)),i=r(a(32735)),s=r(a(60216)),u=a(5636),d=a(25716),c=a(84968),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(19615)),p=r(a(103)),m=a(17888);function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}var v=(0,f.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]),b=f.default.div.withConfig({displayName:"SelectRoles__LoadingWrapper",componentId:"sc-1z5s3s-0"})(["animation:"," 2s infinite linear;"],v),y=function(){return i.default.createElement(b,null,i.default.createElement(p.default,null))},h=function(){var e=(0,l.default)(o.default.mark((function e(){var t,a;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.axiosInstance.get("/admin/roles");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){var t=e.disabled,a=e.error,r=e.onChange,n=e.value,o=(0,c.useQuery)(["roles"],h,{staleTime:5e4}),l=o.status,s=o.data,f=(0,u.useIntl)().formatMessage,p=a?f({id:a,defaultMessage:a}):"",m=f({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),g=f({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),v=f({id:"app.components.Select.placeholder",defaultMessage:"Select"}),b="loading"===l?i.default.createElement(y,null):void 0;return i.default.createElement(d.Select,{id:"roles",disabled:t,error:p,hint:g,label:m,name:"roles",onChange:function(e){r({target:{name:"roles",value:e}})},placeholder:v,multi:!0,startIcon:b,value:n,withTags:!0,required:!0},(s||[]).map((function(e){return i.default.createElement(d.Option,{key:e.id,value:e.id},e.name)})))};w.defaultProps={disabled:!1,error:void 0},w.propTypes={disabled:s.default.bool,error:s.default.string,onChange:s.default.func.isRequired,value:s.default.array.isRequired};var O=w;t.default=O},389:(e,t,a)=>{var r=a(99489),n=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(56156)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(5173)),i=a(84334),s=r(a(90785));function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=l.object().shape(c(c({},i.commonUserSchema),{},{isActive:l.bool()},s.default));t.default=f},37028:(e,t,a)=>{var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"editValidation",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"profileValidation",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"rolesValidation",{enumerable:!0,get:function(){return l.default}});var n=r(a(389)),o=r(a(84334)),l=r(a(90785))},84334:(e,t,a)=>{var r=a(99489),n=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.commonUserSchema=void 0;var o=r(a(56156)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(5173)),i=a(10938);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={firstname:l.mixed().required(i.translatedErrors.required),lastname:l.mixed(),email:l.string().email(i.translatedErrors.email).lowercase().required(i.translatedErrors.required),username:l.string().nullable(),password:l.string().min(8,i.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:l.string().min(8,i.translatedErrors.minLength).oneOf([l.ref("password"),null],"components.Input.error.password.noMatch").when("password",(function(e,t){return e?t.required(i.translatedErrors.required):t}))};t.commonUserSchema=c;var f=d(d({},c),{},{currentPassword:l.string().when(["password","confirmPassword"],(function(e,t,a){return e||t?a.required(i.translatedErrors.required):a})),preferedLanguage:l.string().nullable()});t.default=f},90785:(e,t,a)=>{var r=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=l(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(5173)),o=a(10938);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}var i={roles:n.array().min(1,o.translatedErrors.required).required(o.translatedErrors.required)};t.default=i},96040:(e,t,a)=>{var r=a(99489);t.Z=void 0;var n=r(a(32735)),o=a(5636),l=r(a(60216)),i=r(a(7402)),s=r(a(91640)),u=function(e){var t=e.registrationToken,a=(0,o.useIntl)().formatMessage;return t?n.default.createElement(s.default,{target:"".concat(window.location.origin).concat(i.default,"auth/register?registrationToken=").concat(t)},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):n.default.createElement(s.default,{target:"".concat(window.location.origin).concat(i.default,"auth/login")},a({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};u.defaultProps={registrationToken:""},u.propTypes={registrationToken:l.default.string};var d=u;t.Z=d}}]);