import{af as z,d as u,av as E,j as e,ax as U,aj as j,ak as F,al as ve,ai as L,aG as ge,aB as be,f as m,aC as ye,ad as H,aH as Ce,ay as we,U as je,aI as Ne,D as Y}from"./index-Cnfp7bYh.js";var O="Collapsible",[Ae,K]=z(O),[Ie,S]=Ae(O),Q=u.forwardRef((o,s)=>{const{__scopeCollapsible:t,open:a,defaultOpen:i,disabled:r,onOpenChange:n,...c}=o,[d=!1,p]=E({prop:a,defaultProp:i,onChange:n});return e.jsx(Ie,{scope:t,disabled:r,contentId:U(),open:d,onOpenToggle:u.useCallback(()=>p(f=>!f),[p]),children:e.jsx(j.div,{"data-state":q(d),"data-disabled":r?"":void 0,...c,ref:s})})});Q.displayName=O;var J="CollapsibleTrigger",X=u.forwardRef((o,s)=>{const{__scopeCollapsible:t,...a}=o,i=S(J,t);return e.jsx(j.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":q(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...a,ref:s,onClick:F(o.onClick,i.onOpenToggle)})});X.displayName=J;var T="CollapsibleContent",Z=u.forwardRef((o,s)=>{const{forceMount:t,...a}=o,i=S(T,o.__scopeCollapsible);return e.jsx(ve,{present:t||i.open,children:({present:r})=>e.jsx(Re,{...a,ref:s,present:r})})});Z.displayName=T;var Re=u.forwardRef((o,s)=>{const{__scopeCollapsible:t,present:a,children:i,...r}=o,n=S(T,t),[c,d]=u.useState(a),p=u.useRef(null),f=L(s,p),x=u.useRef(0),C=x.current,v=u.useRef(0),N=v.current,g=n.open||c,b=u.useRef(g),y=u.useRef();return u.useEffect(()=>{const l=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(l)},[]),ge(()=>{const l=p.current;if(l){y.current=y.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const w=l.getBoundingClientRect();x.current=w.height,v.current=w.width,b.current||(l.style.transitionDuration=y.current.transitionDuration,l.style.animationName=y.current.animationName),d(a)}},[n.open,a]),e.jsx(j.div,{"data-state":q(n.open),"data-disabled":n.disabled?"":void 0,id:n.contentId,hidden:!g,...r,ref:f,style:{"--radix-collapsible-content-height":C?`${C}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...o.style},children:g&&i})});function q(o){return o?"open":"closed"}var De=Q,Pe=X,ke=Z,h="Accordion",_e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[B,Me,Ee]=be(h),[I,ze]=z(h,[Ee,K]),G=K(),ee=m.forwardRef((o,s)=>{const{type:t,...a}=o,i=a,r=a;return e.jsx(B.Provider,{scope:o.__scopeAccordion,children:t==="multiple"?e.jsx(Te,{...r,ref:s}):e.jsx(Se,{...i,ref:s})})});ee.displayName=h;var[oe,He]=I(h),[te,Oe]=I(h,{collapsible:!1}),Se=m.forwardRef((o,s)=>{const{value:t,defaultValue:a,onValueChange:i=()=>{},collapsible:r=!1,...n}=o,[c,d]=E({prop:t,defaultProp:a,onChange:i});return e.jsx(oe,{scope:o.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:m.useCallback(()=>r&&d(""),[r,d]),children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:r,children:e.jsx(ae,{...n,ref:s})})})}),Te=m.forwardRef((o,s)=>{const{value:t,defaultValue:a,onValueChange:i=()=>{},...r}=o,[n=[],c]=E({prop:t,defaultProp:a,onChange:i}),d=m.useCallback(f=>c((x=[])=>[...x,f]),[c]),p=m.useCallback(f=>c((x=[])=>x.filter(C=>C!==f)),[c]);return e.jsx(oe,{scope:o.__scopeAccordion,value:n,onItemOpen:d,onItemClose:p,children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(ae,{...r,ref:s})})})}),[qe,R]=I(h),ae=m.forwardRef((o,s)=>{const{__scopeAccordion:t,disabled:a,dir:i,orientation:r="vertical",...n}=o,c=m.useRef(null),d=L(c,s),p=Me(t),x=ye(i)==="ltr",C=F(o.onKeyDown,v=>{var V;if(!_e.includes(v.key))return;const N=v.target,g=p().filter(_=>{var W;return!((W=_.ref.current)!=null&&W.disabled)}),b=g.findIndex(_=>_.ref.current===N),y=g.length;if(b===-1)return;v.preventDefault();let l=b;const w=0,D=y-1,P=()=>{l=b+1,l>D&&(l=w)},k=()=>{l=b-1,l<w&&(l=D)};switch(v.key){case"Home":l=w;break;case"End":l=D;break;case"ArrowRight":r==="horizontal"&&(x?P():k());break;case"ArrowDown":r==="vertical"&&P();break;case"ArrowLeft":r==="horizontal"&&(x?k():P());break;case"ArrowUp":r==="vertical"&&k();break}const he=l%y;(V=g[he].ref.current)==null||V.focus()});return e.jsx(qe,{scope:t,disabled:a,direction:i,orientation:r,children:e.jsx(B.Slot,{scope:t,children:e.jsx(j.div,{...n,"data-orientation":r,ref:d,onKeyDown:a?void 0:C})})})}),A="AccordionItem",[Be,$]=I(A),ne=m.forwardRef((o,s)=>{const{__scopeAccordion:t,value:a,...i}=o,r=R(A,t),n=He(A,t),c=G(t),d=U(),p=a&&n.value.includes(a)||!1,f=r.disabled||o.disabled;return e.jsx(Be,{scope:t,open:p,disabled:f,triggerId:d,children:e.jsx(De,{"data-orientation":r.orientation,"data-state":de(p),...c,...i,ref:s,disabled:f,open:p,onOpenChange:x=>{x?n.onItemOpen(a):n.onItemClose(a)}})})});ne.displayName=A;var re="AccordionHeader",se=m.forwardRef((o,s)=>{const{__scopeAccordion:t,...a}=o,i=R(h,t),r=$(re,t);return e.jsx(j.h3,{"data-orientation":i.orientation,"data-state":de(r.open),"data-disabled":r.disabled?"":void 0,...a,ref:s})});se.displayName=re;var M="AccordionTrigger",ie=m.forwardRef((o,s)=>{const{__scopeAccordion:t,...a}=o,i=R(h,t),r=$(M,t),n=Oe(M,t),c=G(t);return e.jsx(B.ItemSlot,{scope:t,children:e.jsx(Pe,{"aria-disabled":r.open&&!n.collapsible||void 0,"data-orientation":i.orientation,id:r.triggerId,...c,...a,ref:s})})});ie.displayName=M;var ce="AccordionContent",le=m.forwardRef((o,s)=>{const{__scopeAccordion:t,...a}=o,i=R(h,t),r=$(ce,t),n=G(t);return e.jsx(ke,{role:"region","aria-labelledby":r.triggerId,"data-orientation":i.orientation,...n,...a,ref:s,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});le.displayName=ce;function de(o){return o?"open":"closed"}var Ge=ee,$e=ne,Ve=se,ue=ie,pe=le;const We=Ge,me=u.forwardRef(({className:o,...s},t)=>e.jsx($e,{ref:t,className:H("border-b",o),...s}));me.displayName="AccordionItem";const fe=u.forwardRef(({className:o,children:s,...t},a)=>e.jsx(Ve,{className:"flex",children:e.jsxs(ue,{ref:a,className:H("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",o),...t,children:[s,e.jsx(Ce,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));fe.displayName=ue.displayName;const xe=u.forwardRef(({className:o,children:s,...t},a)=>e.jsx(pe,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:e.jsx("div",{className:H("pb-4 pt-0",o),children:s})}));xe.displayName=pe.displayName;const Ue=()=>{const{toast:o}=we(),[s,t]=u.useState(!1),a=[{id:1,title:"Royal Ballroom",capacity:"Up to 300 guests",price:"$5,000/day",image:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",features:["Audiovisual equipment","Stage","Dance floor","Customizable lighting","Private bar"]},{id:2,title:"Executive Boardroom",capacity:"Up to 20 guests",price:"$1,200/day",image:"https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80",features:["4K Projector","Video conferencing","Executive chairs","Catering service","Private restrooms"]},{id:3,title:"Garden Pavilion",capacity:"Up to 150 guests",price:"$3,500/day",image:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",features:["Outdoor setting","Tent option","Natural lighting","Garden access","Private entrance"]},{id:4,title:"Conference Rooms",capacity:"Up to 50 guests",price:"$2,000/day",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",features:["Modular furniture","Whiteboard walls","High-speed WiFi","Coffee service","Technical support"]}],i=[{question:"What is the booking process for an event?",answer:"To book an event space, you can either contact us directly via our contact form, email, or phone. We will then check availability, discuss your specific requirements, and provide a detailed quote. A deposit is required to confirm your booking."},{question:"Do you provide catering services for events?",answer:"Yes, our in-house catering team can provide a range of dining options for your event, from buffet-style meals to multi-course plated dinners. We can also accommodate specific dietary requirements with advance notice."},{question:"Can I bring my own decorations?",answer:"Yes, you are welcome to bring your own decorations. However, we ask that you discuss your plans with our event coordinator to ensure they comply with our venue guidelines. We can also provide decoration services if required."},{question:"Is parking available for event guests?",answer:"Yes, we offer complimentary parking for event guests based on availability. For larger events, valet parking services can be arranged at an additional cost."},{question:"What is your cancellation policy?",answer:"Our standard cancellation policy requires notice 30 days prior to your event for a full refund of your deposit. Cancellations made 15-29 days in advance will receive a 50% refund. Cancellations with less than 14 days' notice may not be eligible for a refund, depending on circumstances."}],r=n=>{var c;o({title:"Booking Request",description:`We've received your interest in booking ${(c=a.find(d=>d.id===n))==null?void 0:c.title}. Our team will contact you shortly.`})};return e.jsxs("main",{className:"pt-20",children:[e.jsxs("section",{className:"relative h-[50vh] flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center z-0",style:{backgroundImage:"url('https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"},children:e.jsx("div",{className:"absolute inset-0 bg-black/30 z-10"})}),e.jsxs("div",{className:"container mx-auto px-4 relative z-20 text-center text-white",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-playfair font-bold mb-4",children:"Meetings & Events"}),e.jsx("p",{className:"text-xl md:text-2xl mb-8 max-w-2xl mx-auto",children:"Elegant spaces for your special occasions"})]})]}),e.jsx("section",{className:"py-16 paper-bg",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("h2",{className:"text-3xl font-playfair text-center mb-12 text-royal-dark",children:["Our Event ",e.jsx("span",{className:"text-royal-gold",children:"Spaces"})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:a.map(n=>e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"md:flex h-full",children:[e.jsx("div",{className:"md:w-2/5",children:e.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"md:w-3/5 p-6",children:[e.jsx("h3",{className:"text-2xl font-semibold text-royal-dark mb-2",children:n.title}),e.jsxs("div",{className:"flex items-center mb-2 text-royal-gold",children:[e.jsx(je,{size:18,className:"mr-2"}),e.jsx("span",{children:n.capacity})]}),e.jsx("div",{className:"text-lg font-medium mb-4",children:n.price}),e.jsx("h4",{className:"font-medium mb-2",children:"Features:"}),e.jsx("ul",{className:"mb-6",children:n.features.map((c,d)=>e.jsxs("li",{className:"flex items-start mb-2",children:[e.jsx(Ne,{size:16,className:"text-royal-gold mr-2 mt-1"}),e.jsx("span",{children:c})]},d))}),e.jsx(Y,{onClick:()=>r(n.id),className:"bg-royal-gold hover:bg-royal-gold/90 w-full",children:"Book This Space"})]})]})},n.id))})]})}),e.jsx("section",{className:"py-16 marble-bg",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("h2",{className:"text-3xl font-playfair text-center mb-12 text-royal-dark",children:["Frequently Asked ",e.jsx("span",{className:"text-royal-gold",children:"Questions"})]}),e.jsx("div",{className:"max-w-3xl mx-auto",children:e.jsx(We,{type:"single",collapsible:!0,className:"w-full",children:i.map((n,c)=>e.jsxs(me,{value:`item-${c}`,children:[e.jsx(fe,{className:"text-lg font-medium text-royal-dark",children:n.question}),e.jsx(xe,{className:"text-gray-600",children:n.answer})]},c))})}),e.jsxs("div",{className:"mt-12 text-center",children:[e.jsx("p",{className:"text-gray-600 mb-6",children:"Have more questions or ready to plan your event?"}),e.jsx(Y,{onClick:()=>t(!0),className:"bg-royal-gold hover:bg-royal-gold/90",children:"Contact Our Events Team"})]})]})})]})};export{Ue as default};
