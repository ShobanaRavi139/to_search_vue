import{Z as g,x as y,T as u,i as s,o as b,d as v,b as e,w as r,F as x,a as L,n as P,f as p,h as q}from"./app-aebcdfa6.js";import{F as C,L as k,G as F}from"./GuestLayout-d85a41ac.js";import{_ as B}from"./AuthenticationCardLogo-85a876c4.js";import{_ as I}from"./Checkbox-e5752385.js";import{a as U,_ as R}from"./TextInput-328a3e8b.js";import{_ as h}from"./InputLabel-aaa674b5.js";import{_ as A}from"./PrimaryButton-c2c67aa4.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{I as N,B as E,F as H,a as T}from"./index-dcd739bf.js";import{U as V}from"./index-43236e3f.js";import"./collapseMotion-cb1e5013.js";const O={components:{"user-outlined":V,"a-form":C,"a-input":N,"a-button":E,"a-form-item":H,"a-input-password":T,"lock-outlined":k,GuestLayout:F,Head:g,Link:y,useForm:u,AuthenticationCardLogo:B,Checkbox:I,InputError:U,InputLabel:h,PrimaryButton:A,TextInput:R},props:{canResetPassword:{type:Boolean,required:!0},status:{type:String,default:""}},setup(m){const o=()=>{i.post(route("register"),{onFinish:()=>i.reset("password","password_confirmation")})},i=u({name:"",email:"",password:"",password_confirmation:"",terms:!1});return{form:i,submit:o}},data(){return{}}};function S(m,o,i,a,z,M){const d=s("Head"),f=s("AuthenticationCardLogo"),l=s("a-input"),n=s("a-form-item"),c=s("a-button"),_=s("Link"),w=s("GuestLayout");return b(),v(x,null,[e(d,{title:"Register"}),e(w,null,{logo:r(()=>[e(f)]),default:r(()=>[L("form",{onSubmit:o[4]||(o[4]=q((...t)=>a.submit&&a.submit(...t),["prevent"]))},[e(n,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],"label-col":{span:8},"wrapper-col":{span:16}},{default:r(()=>[e(l,{value:a.form.name,"onUpdate:value":o[0]||(o[0]=t=>a.form.name=t),id:"name",type:"text",required:"",autofocus:"",autocomplete:"name"},null,8,["value"])]),_:1}),e(n,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],"label-col":{span:8},"wrapper-col":{span:16}},{default:r(()=>[e(l,{value:a.form.email,"onUpdate:value":o[1]||(o[1]=t=>a.form.email=t),id:"email",type:"email",required:"",autofocus:"",autocomplete:"email"},null,8,["value"])]),_:1}),e(n,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],"label-col":{span:8},"wrapper-col":{span:16}},{default:r(()=>[e(l,{value:a.form.password,"onUpdate:value":o[2]||(o[2]=t=>a.form.password=t),id:"password",type:"password",required:"",autofocus:"",autocomplete:"new-password"},null,8,["value"])]),_:1}),e(n,{label:"Confirm Password",name:"password_confirmation",rules:[{required:!0,message:"Please input your Confirm Password!"}],"label-col":{span:8},"wrapper-col":{span:16}},{default:r(()=>[e(l,{value:a.form.password_confirmation,"onUpdate:value":o[3]||(o[3]=t=>a.form.password_confirmation=t),id:"password_confirmation",type:"password",required:"",autofocus:"",autocomplete:"new-password"},null,8,["value"])]),_:1}),e(n,null,{default:r(()=>[e(c,{type:"primary","html-type":"submit",disabled:a.form.processing,class:P([{"opacity-25":a.form.processing},"login-form-button"])},{default:r(()=>[p("Register")]),_:1},8,["disabled","class"]),e(_,{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",style:{float:"right"}},{default:r(()=>[p(" Already registered? ")]),_:1},8,["href"])]),_:1})],32)]),_:1})],64)}const oe=G(O,[["render",S]]);export{oe as default};
