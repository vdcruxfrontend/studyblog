"use strict";(self.webpackChunkcrux_study=self.webpackChunkcrux_study||[]).push([[7269],{6084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=t(5893),l=t(1151);const s={slug:"08-jsx-to-tsx",title:"8\uc7a5. JSX\uc5d0\uc11c TSX\ub85c",authors:["hyunsu"],tags:["tsx"]},c="8.1 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud0c0\uc785",i={permalink:"/studyblog/blog/08-jsx-to-tsx",editUrl:"https://github.com/vdcruxfrontend/studyblog/tree/main/blog/chapter8.mdx",source:"@site/blog/chapter8.mdx",title:"8\uc7a5. JSX\uc5d0\uc11c TSX\ub85c",description:"1. \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785",date:"2024-04-23T23:19:39.000Z",formattedDate:"2024\ub144 4\uc6d4 23\uc77c",tags:[{label:"tsx",permalink:"/studyblog/blog/tags/tsx"}],readingTime:12.15,hasTruncateMarker:!1,authors:[{name:"\uace0\ud604\uc218",title:"Front End Engineer @VDCrux",url:"https://github.com/movie42",imageURL:"https://github.com/movie42.png",key:"hyunsu"}],frontMatter:{slug:"08-jsx-to-tsx",title:"8\uc7a5. JSX\uc5d0\uc11c TSX\ub85c",authors:["hyunsu"],tags:["tsx"]},unlisted:!1,prevItem:{title:"5\uc7a5. \ud0c0\uc785 \ud65c\uc6a9\ud558\uae30",permalink:"/studyblog/blog/05-makeing-good-use-of-types"}},o={authorsImageUrls:[void 0]},a=[{value:"1. \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785",id:"1-\ud074\ub798\uc2a4-\ucef4\ud3ec\ub10c\ud2b8-\ud0c0\uc785",level:2},{value:"2. \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785",id:"2-\ud568\uc218-\ucef4\ud3ec\ub10c\ud2b8-\ud0c0\uc785",level:2},{value:"3. Children props \ud0c0\uc785 \uc9c0\uc815",id:"3-children-props-\ud0c0\uc785-\uc9c0\uc815",level:2},{value:"4. render \uba54\uc11c\ub4dc\uc640 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubc18\ud658 \ud0c0\uc785 - React.ReactElement vs JSX.Element vs React.ReactNode",id:"4-render-\uba54\uc11c\ub4dc\uc640-\ud568\uc218-\ucef4\ud3ec\ub10c\ud2b8\uc758-\ubc18\ud658-\ud0c0\uc785---reactreactelement-vs-jsxelement-vs-reactreactnode",level:2},{value:"ReactElement",id:"reactelement",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:4},{value:"JSX.Element",id:"jsxelement",level:3},{value:"\uc0ac\uc6a9\uc608\uc2dc",id:"\uc0ac\uc6a9\uc608\uc2dc",level:4},{value:"ReactNode",id:"reactnode",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc",id:"\uc0ac\uc6a9-\uc608\uc2dc-1",level:4},{value:"\ud3ec\ud568\uad00\uacc4(\uacb0\ub860)",id:"\ud3ec\ud568\uad00\uacc4\uacb0\ub860",level:3},{value:"5. \ub9ac\uc561\ud2b8\uc5d0\uc11c \uae30\ubcf8 HTML \uc694\uc18c \ud0c0\uc785 \ud65c\uc6a9\ud558\uae30",id:"5-\ub9ac\uc561\ud2b8\uc5d0\uc11c-\uae30\ubcf8-html-\uc694\uc18c-\ud0c0\uc785-\ud65c\uc6a9\ud558\uae30",level:2},{value:"DetailedHTMLProps\uc640 ComponentWithoutRef",id:"detailedhtmlprops\uc640-componentwithoutref",level:3},{value:"DetailedHTMLProps\ub97c \ud65c\uc6a9",id:"detailedhtmlprops\ub97c-\ud65c\uc6a9",level:4},{value:"ComponentWithoutRef",id:"componentwithoutref",level:4},{value:"\ub9ac\uc561\ud2b8 \uc774\ubca4\ud2b8",id:"\ub9ac\uc561\ud2b8-\uc774\ubca4\ud2b8",level:2},{value:"currentTarget\uacfc target\uc758 \ucc28\uc774",id:"currenttarget\uacfc-target\uc758-\ucc28\uc774",level:2},{value:"\uc81c\ub124\ub9ad \ucef4\ud3ec\ub10c\ud2b8 \ub9cc\ub4e4\uae30",id:"\uc81c\ub124\ub9ad-\ucef4\ud3ec\ub10c\ud2b8-\ub9cc\ub4e4\uae30",level:2},{value:"\uacf5\ubcc0\uc131 \ubc18\uacf5\ubcc0\uc131",id:"\uacf5\ubcc0\uc131-\ubc18\uacf5\ubcc0\uc131",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-\ud074\ub798\uc2a4-\ucef4\ud3ec\ub10c\ud2b8-\ud0c0\uc785",children:"1. \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Component<P = {}, S = {}, SS = any>\n  extends ComponentLifecycle<P, S, SS> {}\nclass Component<P, S> {\n  /* \uc0dd\ub7b5 */\n}\nclass PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"P, S\ub294 props\uc640 \uc0c1\ud0dc\ub97c \uc758\ubbf8"}),"\n",(0,r.jsx)(n.li,{children:"props\uc640 state\ub97c \uc81c\ub124\ub9ad\uc73c\ub85c \ubc1b\uace0 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface WorkerProps {\n  authrization: string;\n}\n\nclass Worker extends React.Component<WorkerProps> {}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-\ud568\uc218-\ucef4\ud3ec\ub10c\ud2b8-\ud0c0\uc785",children:"2. \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8 v18\uc5d0\uc11c React.VFC\uac00 \uc0ad\uc81c\ub418\uc5c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"React.FC\uc5d0\uc11c children\uc774 \uc0ac\ub77c\uc84c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Workder {\n  authrization: string;\n}\nconst Worker = ({ authrization }: Worker) => {};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-children-props-\ud0c0\uc785-\uc9c0\uc815",children:"3. Children props \ud0c0\uc785 \uc9c0\uc815"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type PropsWithChildren<P> = P & { children?: ReactNode | undefined };\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["ReactNode\ub294 ReactElement\uc678\uc5d0\ub3c4 boolean, number \ub4f1 \uc5ec\ub7ec \ud0c0\uc785\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294 \ud0c0\uc785\uc774\ub2e4.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub354 \uad6c\uccb4\uc801\uc73c\ub85c \ud0c0\uc774\ud551 \ud558\ub294 \uc6a9\ub3c4\ub85c\ub294 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud2b9\uc815 \ubb38\uc790\uc5f4\ub9cc \ud5c8\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 \uad6c\uccb4\uc801\uc73c\ub85c \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uba74 \ub41c\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'//example 1\ntype FrontendWorkerProps = {\n  children: "\uc5c4\ubb38\uc8fc" | "\uc131\uc740\uc9c0" | "\uace0\ud604\uc218" | "\ubc15\uc724\uad6d";\n};\n//example 2\ntype FrontendWorkerProps = {\n  children: string;\n};\n//example 3\ntype FrontendWorkerProps = {\n  children: ReactElement;\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4-render-\uba54\uc11c\ub4dc\uc640-\ud568\uc218-\ucef4\ud3ec\ub10c\ud2b8\uc758-\ubc18\ud658-\ud0c0\uc785---reactreactelement-vs-jsxelement-vs-reactreactnode",children:"4. render \uba54\uc11c\ub4dc\uc640 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubc18\ud658 \ud0c0\uc785 - React.ReactElement vs JSX.Element vs React.ReactNode"}),"\n",(0,r.jsx)(n.h3,{id:"reactelement",children:"ReactElement"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubc18\ud658 \ud0c0\uc785\uc774\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string|JSXElementConstructor<any>{\n   type: T;\n   props: P;\n   key: Key | null;\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"React.createElement\ub97c \ud638\ucd9c\ud558\ub294 \ud615\ud0dc\uc758 \uad6c\ubb38\uc73c\ub85c \ubcc0\ud658\ud558\uba74 React.createElement\uc758 \ubc18\ud658 \ud0c0\uc785\uc740 ReactElement\uc774\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uac00\uc0c1 DOM\uc758 \uc5d8\ub9ac\uba3c\ud2b8\ub294 ReactElement\uc758 \ud615\ud0dc\ub85c \uc800\uc7a5\ub41c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"ReactElement\ud0c0\uc785\uc740 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac1d\uccb4 \ud615\ud0dc\ub85c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \ud3ec\uba67\uc774\ub2e4."})}),"\n",(0,r.jsx)(n.li,{children:"JSX\ub294 createElement \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uae30 \uc704\ud55c \ubb38\ubc95\uc774\ub2e4. JSX\ub294 \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud55c \ubb38\ubc95\uc774\uba70 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub7ec\ub294 JSX \ubb38\ubc95\uc744 createElement \uba54\uc11c\ub4dc \ud638\ucd9c\ubb38\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc0dd\uc131\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const element = React.createElement(\n  "h1",\n  { className: "greeting" },\n  "Hello, world!"\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\ub294 \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \uac1d\uccb4\ub97c \uc77d\uc5b4\uc11c DOM\uc744 \uad6c\uc131\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 createElement \uc624\ubc84\ub77c\uc774\ub529 \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud558\uace0, \uc774 \ub9e4\uc11c\ub4dc\ub4e4\uc774 \ubc18\ud658\ud558\ub294 \ud0c0\uc785\uc740 ReactElement \ud0c0\uc785\uc744 \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc815\ub9ac : ReactElement \ud0c0\uc785\uc740 JSX\uc758 createElement \uba54\uc11c\ub4dc \ud638\ucd9c\ub85c \uc0dd\uc131\ub41c \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785\uc774\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\uc0ac\uc6a9-\uc608\uc2dc",children:"\uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ucd94\ub860 \uad00\uc810\uc5d0\uc11c \ub354 \uc720\uc6a9\ud558\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 JSX.Element \ub300\uc2e0 ReactElement\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface IconProps {\n  size: number;\n}\ninterface Props {\n  // ReactElement\uc758 props \ud0c0\uc785\uc73c\ub85c IconProps \ud0c0\uc785 \uc9c0\uc815\n  icon: React.ReactElement<IconProps>;\n}\nconst Item = ({ icon }: Props) => {\n  // icon prop\uc73c\ub85c \ubc1b\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 props\uc5d0 \uc811\uadfc\ud558\uba74, props\uc758 \ubaa9\ub85d\uc774 \ucd94\ub860\ub41c\ub2e4.\n  const iconSize = icon.props.size;\n  reutnr(<li>{icon}</li>);\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"jsxelement",children:"JSX.Element"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JSX.Element \ud0c0\uc785\uc740 \ub9ac\uc561\ud2b8\uc758 ReactElement\ub97c \ud655\uc7a5\ud558\uace0 \uc788\ub294 \ud0c0\uc785\uc774\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uae00\ub85c\ubc8c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\uc5b4 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc7ac\uc815\uc758 \ud560 \uc218 \uc788\ub294 \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"[!NOTE]\n\uae00\ub85c\ubc8c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\n\uc2dd\ubcc4\uc790\uac00 \uc815\uc758\ub418\ub294 \uc804\uc5ed\uc801\uc778 \ubc94\uc704\ub97c \ub9d0\ud55c\ub2e4.\n\uc5b4\ub290\uacf3\uc5d0\uc11c\ub4e0\uc9c0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4.\n\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8, \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc804\uc5ed(\uae00\ub85c\ubc8c) \uc2a4\ucf54\ud504\uc5d0\uc11c \uc120\uc5b8\ub41c \ubcc0\uc218\ub098 \ud568\uc218 \ub4f1\uc740 \uae00\ub85c\ubc8c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc18d\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare global {\n  namespace JSX {\n    interface Element extends React.ReactElement<any, any> {}\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"props\uc640 \ud0c0\uc785 \ud544\ub4dc\uc5d0 \ub300\ud574 any \ud0c0\uc785\uc744 \uac00\uc9c0\ub3c4\ub85d \ud655\uc7a5\ud558\uace0 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\uc0ac\uc6a9\uc608\uc2dc",children:"\uc0ac\uc6a9\uc608\uc2dc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"props\uc640 \ud0c0\uc785 \ud544\ub4dc\uac00 any \ud0c0\uc785\uc778 \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ub098\ud0c0\ub0b8\ub2e4. \uadf8\ub798\uc11c \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\ub97c prop\uc73c\ub85c \uc804\ub2ec\ubc1b\uc544 render props \ud328\ud134\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud560 \ub54c \uc720\uc6a9\ud558\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface Props {\n  icon: JSX.Element;\n}\nconst Item = ({ icon }: Props) => {\n  // prop\uc73c\ub85c \ubc1b\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 props\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4.\n  const iconSize = icon.props.size;\n\n  return <li>{icon}</li>;\n};\n\n// icon prop\uc5d0\ub294 JSX.Element \ud0c0\uc785\uc744 \uac00\uc9c4 \uc694\uc18c\ub9cc \ud560\ub2f9\ud560 \uc218 \uc788\ub2e4.\nconst App = () => {\n  return <Item icon={<Icon size={14} />} />;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JSX \ubb38\ubc95\ub9cc \uc0bd\uc785\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"icon.props\uc5d0 \uc811\uadfc\ud558\uc5ec prop\uc73c\ub85c \ub118\uaca8\ubc1b\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\uc138\ud55c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reactnode",children:"ReactNode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ReactText = string | number;\ntype ReactChild = ReactElement | ReactText;\ntype ReactFragment = {} | Iterable<ReactNode>; // ReactNode\uc758 \ubc30\uc5f4 \ud615\ud0dc\n\ntype ReactNode =\n  | ReactChild\n  | ReactFragment\n  | ReactPortal\n  | boolean\n  | null\n  | undefined;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ReactElement \uc678\uc5d0\ub3c4 boolean, string, number \ub4f1\uc758 \uc5ec\ub7ec \ud0c0\uc785\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"ReactChild \ud0c0\uc785\uc740 ReactElement | string | number\ub85c \uc815\uc758\ub418\uc5b4 ReactElement\ubcf4\ub2e4\ub294 \uc880 \ub354 \ub113\uc740 \ubc94\uc704\ub97c \uac16\uace0 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"ReactNode\ub294 \ub9ac\uc561\ud2b8\uc758 render \ud568\uc218\uac00 \ubc18\ud658\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \ud615\ud0dc\ub97c \ub2f4\uace0 \uc788\ub2e4."})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\uc0ac\uc6a9-\uc608\uc2dc-1",children:"\uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc758 Composition(\ud569\uc131) \ubaa8\ub378\uc744 \ud65c\uc6a9\ud558\uae30 \uc704\ud574 prop\uc73c\ub85c children\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface ExampleProps {\n  children: React.ReactNode;\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc5b4\ub5a4 \ud615\ud0dc\ub4e0 children props\ub85c \uc9c0\uc815\ud558\uace0 \uc2f6\ub2e4\uba74 ReactNode\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ud3ec\ud568\uad00\uacc4\uacb0\ub860",children:"\ud3ec\ud568\uad00\uacc4(\uacb0\ub860)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ReactNode > ReactElement > JSX.Element"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"5-\ub9ac\uc561\ud2b8\uc5d0\uc11c-\uae30\ubcf8-html-\uc694\uc18c-\ud0c0\uc785-\ud65c\uc6a9\ud558\uae30",children:"5. \ub9ac\uc561\ud2b8\uc5d0\uc11c \uae30\ubcf8 HTML \uc694\uc18c \ud0c0\uc785 \ud65c\uc6a9\ud558\uae30"}),"\n",(0,r.jsx)(n.h3,{id:"detailedhtmlprops\uc640-componentwithoutref",children:"DetailedHTMLProps\uc640 ComponentWithoutRef"}),"\n",(0,r.jsx)(n.h4,{id:"detailedhtmlprops\ub97c-\ud65c\uc6a9",children:"DetailedHTMLProps\ub97c \ud65c\uc6a9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type NativeButtonProps = React.DetailedHTMLProps<\n  React.ButtonHTMLAttributes<HTMLButtonElement>,\n  HTMLButtonElement\n>;\ntype ButtonProps = {\n  onClick?: NativeButtonProps["onClick"];\n};\n'})}),"\n",(0,r.jsx)(n.h4,{id:"componentwithoutref",children:"ComponentWithoutRef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type NativeButtonType = React.ComponentPropsWithoutRef<"button">;\ntype ButtonProps = {\n  onClick?: NativeButtonType["onClick"];\n};\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc5b8\uc81c \uc0ac\uc6a9\ud560\uae4c?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uacbd\uc6b0 \ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ub2e4\ub974\uac8c \uc804\ub2ec\ubc1b\uc740 ref\uac00 Button \ucef4\ud3ec\ub10c\ud2b8\uc758 button \ud0dc\uadf8\ub97c \ubc14\ub77c\ubcf4\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cosnt WrapperButton = () =>{\n\tconst buttonRef = useRef();\n\treturn (\n\t\t<div>\n\t\t\t<Button ref={buttonRef} />\n\t\t</div>\n\t)\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud074\ub798\uc2a4 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ref \uac1d\uccb4\ub294 \ub9c8\uc6b4\ud2b8\ub41c \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c current \uc18d\uc131\uac12\uc73c\ub85c \uac00\uc9c0\uc9c0\ub9cc, \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ref\uc5d0 \uae30\ub300\ud55c \uac12\uc774 \ud560\ub2f9\ub418\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"forwardRef\ub294 \uc774\ub7f0 \uc81c\uc57d\uc744 \uadf9\ubcf5\ud558\uac8c \ud574\uc900\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const Button = forwardRef((props, ref)=>{\n\treturn <button ref={ref} {...props}>\ubc84\ud2bc</button>\n})\n\ncosnt WrapperButton = () =>{\n\tconst buttonRef = useRef();\n\treturn (\n\t\t<div>\n\t\t\t<Button ref={buttonRef} />\n\t\t</div>\n\t)\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"forwardRef\ub294 2\uac1c\uc758 \uc81c\ub124\ub9ad \uc778\uc790\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4. \uccab \ubc88\uc9f8\ub294 ref\uc5d0 \ub300\ud55c \ud0c0\uc785 \uc815\ubcf4, \ub450\ubc88\uc9f8\ub294 props\uc5d0 \ub300\ud55c \ud0c0\uc785 \uc815\ubcf4\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'type NativeButtonType = React.ComponentPropsWithoutRef<"button">;\n\nconst Button = forwardRef<HTMLButtonElement, NativeButtonType>((props, ref) => {\n  return (\n    <button ref={ref} {...props}>\n      \ubc84\ud2bc\n    </button>\n  );\n});\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'ComponentPropsWIthoutRef<"button">'})," \ud0c0\uc785\uc740 button \ud0dc\uadf8\uc5d0 \ub300\ud55c HTML \uc18d\uc131\uc744 \ubaa8\ub450 \ud3ec\ud568\ud558\uc9c0\ub9cc, ref \uc18d\uc131\uc740 \uc81c\uc678\ub41c\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"82-\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c-\ub9ac\uc561\ud2b8-\ucef4\ud3ec\ub10c\ud2b8-\ub9cc\ub4e4\uae30",children:"8.2 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ub9cc\ub4e4\uae30"}),"\n",(0,r.jsx)(n.h2,{id:"\ub9ac\uc561\ud2b8-\uc774\ubca4\ud2b8",children:"\ub9ac\uc561\ud2b8 \uc774\ubca4\ud2b8"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\ub294 \uac00\uc0c1 DOM\uc744 \ub2e4\ub8e8\uba74\uc11c \uc774\ubca4\ud2b8\ub3c4 \ubcc4\ub3c4\ub85c \uad00\ub9ac\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8 \uc774\ubca4\ud2b8\ub294 \ube0c\ub77c\uc6b0\uc800\uc758 \uace0\uc720\ud55c \uc774\ubca4\ud2b8\uc640 \uc644\uc804\ud788 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub9ac\uc561\ud2b8 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1 \ub2e8\uacc4\uc5d0\uc11c \ud638\ucd9c\ub41c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"Capture \ub2e8\uacc4\uc5d0\uc11c \uc774\ubca4\ud2b8 \ud638\ucd9c\uc744 \ud558\ub824\uba74 onClickCapture\uc640 \uac19\uc774 Capture\ub97c \ubd99\uc5ec\uc57c\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\ub294 \ube0c\ub77c\uc6b0\uc800 \uc774\ubca4\ud2b8\ub97c \ud569\uc131\ud55c \ud569\uc131 \uc774\ubca4\ud2b8\ub97c \uc81c\uacf5\ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type EventHandler<Event extends React.SyntheticEvent> = (\n  e: Event\n) => void | null;\ntype ChangeEventHandler = EventHandler<ChangeEvent<HTMLSelectElement>>;\n\nconst eventHandler1: GlobalEventHandlers["onchange"] = (e) => {\n  e.target; // \uc77c\ubc18 Event\ub294 target\uc774 \uc5c6\uc74c.\n};\nconst eventHandler2: ChangeEventHandler = (e) => {\n  e.target; // \ub9ac\uc561\ud2b8 \uc774\ubca4\ud2b8(\ud569\uc131 \uc774\ubca4\ud2b8)\ub294 target\uc774 \uc788\ub2e4.\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"currenttarget\uacfc-target\uc758-\ucc28\uc774",children:"currentTarget\uacfc target\uc758 \ucc28\uc774"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ChangeEventHandler -> target"}),"\n",(0,r.jsx)(n.li,{children:"ChangeEvent -> currentTarget"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uc81c\ub124\ub9ad-\ucef4\ud3ec\ub10c\ud2b8-\ub9cc\ub4e4\uae30",children:"\uc81c\ub124\ub9ad \ucef4\ud3ec\ub10c\ud2b8 \ub9cc\ub4e4\uae30"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select\ub97c \uc0ac\uc6a9\ud558\ub294 \uc785\uc7a5\uc5d0\uc11c \uc81c\ud55c\ub41c \ud0a4(key)\uc640 \uac12(value)\ub9cc\uc744 \uac00\uc9c0\ub3c4\ub85d \ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c? \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 \uc81c\ub124\ub9ad\uc744 \uc0ac\uc6a9\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub0bc \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'interface SelectProps<OptionType extends Record<string, string>> {\n  options: OptionType;\n  selectedOption?: keyof OptionType;\n  onChange?: (selected?: keyof OptionType) => void;\n}\n\nconst Select = <OptionType extends Record<string, string>>({\n  options,\n  selectedOption,\n  onChange\n}: SelectProps<OptionType>) => {\n  const handleChange = (e) => {\n    const selected = Object.entries(options).find(\n      ([_, value]) => value === e.target.value\n    )?.[0];\n    onChange?.(selected);\n  };\n\n  return (\n    <select\n      onChange={handleChange}\n      value={selectedOption && options[selectedOption]}\n    >\n      {Object.entries(options).map(([key, value]) => (\n        <option key={key} value={value}>\n          {value}\n        </option>\n      ))}\n    </select>\n  );\n};\n\nconst fruits = {\n  apple: "\uc0ac\uacfc",\n  banana: "\ubc14\ub098\ub098",\n  blueberry: "\ube14\ub8e8\ubca0\ub9ac"\n};\n\ntype Fruit = keyof typeof fruits;\n\nconst FruitSelect = () => {\n  const [, changeFruit] = useState<Fruit | undefined>();\n  return (\n    // Type \'"orange"\' is not assignable to type \'"apple" | "banana" | "blueberry" | undefined\'.ts(2322)\n    <Select options={fruits} onChange={changeFruit} selectedOption="orange" />\n  );\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\uacf5\ubcc0\uc131-\ubc18\uacf5\ubcc0\uc131",children:"\uacf5\ubcc0\uc131 \ubc18\uacf5\ubcc0\uc131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'interface Props<T extends string> {\n  onChangeA?: (selected: T) => void;\n  onChangeB?(selected: T): void;\n}\n\nconst Component = () => {\n  const changeToPineApple = (selectedApple: "apple") => {\n    console.log("this is pine" + selectedApple);\n  };\n  return (\n    <Select\n      //Error\n      // onChangeA={changeToPineApple}\n      //OK\n      onChangeB={changeToPineApple}\n    />\n  );\n};\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud0c0\uc785 A\uac00 B\uc758 \uc11c\ube0c\ud0c0\uc785\uc77c \ub54c, ",(0,r.jsx)(n.code,{children:"T<A>"}),"\uac00 ",(0,r.jsx)(n.code,{children:"T<B>"}),"\uc758 \uc11c\ube0c\ud0c0\uc785\uc774 \ub41c\ub2e4\uba74 \uacf5\ubcc0\uc131\uc744 \ub744\uace0 \uc788\ub2e4\uace0 \ub9d0\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc77c\ubc18\uc801\uc73c\ub85c \ud0c0\uc785\ub4e4\uc740 \uacf5\ubcc0\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc11c ",(0,r.jsx)(n.strong,{children:"\uc881\uc740 \ud0c0\uc785\uc5d0\uc11c \ub113\uc740 \ud0c0\uc785\uc73c\ub85c \ud560\ub2f9\uc774 \uac00\ub2a5"}),"\ud558\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// \ubca0\uc774\uc2a4 \ud0c0\uc785\ninterface User {\n  id: string;\n}\n\n// Member\ub294 User\uc758 \uc11c\ube0c \ud0c0\uc785\uc774\ub2e4. User\ub97c \uc0c1\uc18d\ud558\uae30 \ub584\ubb38\uc5d0\ninterface Member extends User {\n  // id\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4.\n  nickName: string;\n}\n\nlet users: Array<User> = [];\nlet members: Array<Member> = [];\n// Member\ub294 User\uc5d0 \ub300\ud574 \uacf5\ubcc0\uc131\uc744 \ub744\uace0 \uc788\ub2e4.\nusers = members;\nmembers = users; // Error nickName\uc774 \uc5c6\ub2e4.\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc81c\ub124\ub9ad \ud0c0\uc785\uc744 \uc9c0\ub2cc \ud568\uc218\ub294 \ubc18\uacf5\ubcc0\uc131\uc744 \uac00\uc9c4\ub2e4. \uc989 ",(0,r.jsx)(n.code,{children:"T<B>"}),"\uac00 ",(0,r.jsx)(n.code,{children:"T<A>"}),"\uc758 \uc11c\ube0c\ud0c0\uc785\uc774 \ub418\uc5b4, ",(0,r.jsxs)(n.strong,{children:["\uc881\uc740 \ud0c0\uc785 ",(0,r.jsx)(n.code,{children:"T<A>"}),"\uc758 \ud568\uc218\ub97c \ub113\uc740 \ud0c0\uc785 ",(0,r.jsx)(n.code,{children:"T<B>"}),"\uc758 \ud568\uc218\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc5c6\ub2e4"]}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type PrintUserInfo<U extends User> = (user: U) => void;\nlet printUser: PrintUserInfo<User> = (user) => console.log(user.id);\nlet printMember: PrintUserInfo<Member> = (user) =>\n  console.log(user.id, user.nickName);\n\nprintMember = printUser;\nprintUser = printMember;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User\uac00 Member\ubcf4\ub2e4 \ub113\uc740 \ud0c0\uc785\uc774\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc881\uc740 \ud0c0\uc785 Member\ub97c \ub113\uc740 \ud0c0\uc785 User\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc5c6\ub2e4."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\ucc38\uace0\uc790\ub8cc"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-82139f7e5cc3",children:"\ubc88\uc5ed \ud0c0\uc785\uc2a4\ud06c\ub9ac\ud2b8\uc758 \uacf5\ubcc0\uc131\uacfc \ubc18\uacf5\ubcc0\uc131"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(7294);const l={},s=r.createContext(l);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);