"use strict";(self.webpackChunkcrux_study=self.webpackChunkcrux_study||[]).push([[766],{615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=t(5893),r=t(1151);const l={slug:"03-advanced-types",title:"3\uc7a5. \uace0\uae09 \ud0c0\uc785",authors:["hotbreakb"],tags:["unknown","enum","literal types"]},i=void 0,c={permalink:"/studyblog/blog/03-advanced-types",editUrl:"https://github.com/vdcruxfrontend/studyblog/tree/main/blog/chapter3.mdx",source:"@site/blog/chapter3.mdx",title:"3\uc7a5. \uace0\uae09 \ud0c0\uc785",description:"unknown",date:"2024-02-23T00:39:03.000Z",formattedDate:"2024\ub144 2\uc6d4 23\uc77c",tags:[{label:"unknown",permalink:"/studyblog/blog/tags/unknown"},{label:"enum",permalink:"/studyblog/blog/tags/enum"},{label:"literal types",permalink:"/studyblog/blog/tags/literal-types"}],readingTime:3.225,hasTruncateMarker:!1,authors:[{name:"\uc131\uc740\uc9c0",title:"Front End Engineer @VDCrux",url:"https://github.com/hotbreakb",imageURL:"https://github.com/hotbreakb.png",key:"hotbreakb"}],frontMatter:{slug:"03-advanced-types",title:"3\uc7a5. \uace0\uae09 \ud0c0\uc785",authors:["hotbreakb"],tags:["unknown","enum","literal types"]},unlisted:!1,nextItem:{title:"4\uc7a5. \ud0c0\uc785 \ud655\uc7a5\ud558\uae30, \uc881\ud788\uae30",permalink:"/studyblog/blog/04-type-extends-guard"}},d={authorsImageUrls:[void 0]},o=[{value:"unknown",id:"unknown",level:3},{value:"enum",id:"enum",level:3},{value:"\ud15c\ud50c\ub9bf \ub9ac\ud130\ub7f4 \ud0c0\uc785(Template Literal Types)",id:"\ud15c\ud50c\ub9bf-\ub9ac\ud130\ub7f4-\ud0c0\uc785template-literal-types",level:3},{value:"\uae30\ud0c0",id:"\uae30\ud0c0",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"unknown",children:"unknown"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83d\udd0d \ub0b4\uc6a9 (85\ucabd)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"any \ud0c0\uc785\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc \ud0c0\uc785 \uac80\uc0ac\ub97c \uac15\uc81c\ud558\uace0 \ud0c0\uc785\uc774 \uc2dd\ubcc4\ub41c \ud6c4\uc5d0 \uc0ac\uc6a9\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 any \ud0c0\uc785\ubcf4\ub2e4 \ub354 \uc548\uc804\ud558\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83c\udf89 \uacb0\uacfc"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"any"}),"\ubcf4\ub2e8 ",(0,s.jsx)(n.code,{children:"unknown"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5d0\ub7ec\ub97c \uc904\uc774\uc790."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"enum",children:"enum"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83d\udd0d \ub0b4\uc6a9 (98\ucabd)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc5f4\uac70\ud615\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ubcc0\ud658\ub420 \ub54c \uc989\uc2dc \uc2e4\ud589 \ud568\uc218(IIFE) \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:["\uc774\ub54c \uc77c\ubd80 \ubc88\ub4e4\ub7ec\uc5d0\uc11c \ud2b8\ub9ac\uc250\uc774\ud0b9 \uacfc\uc815 \uc911 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218\ub85c \ubcc0\ud658\ub41c \uac12\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\ub85c \uc778\uc2dd\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4. \ub530\ub77c\uc11c \ubd88\ud544\uc694\ud55c \ucf54\ub4dc\uc758 \ud06c\uae30\uac00 \uc99d\uac00\ud558\ub294 \uacb0\uacfc\ub97c \ucd08\ub798\ud560 \uc218 \uc788\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc55e\uc11c \uc5b8\uae09\ud588\ub358 ",(0,s.jsx)(n.code,{children:"const enum"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"as const"})," assertion\uc744 \uc0ac\uc6a9\ud574\uc11c \uc720\ub2c8\uc628 \ud0c0\uc785\uc73c\ub85c \uc5f4\uac70\ud615\uacfc \ub3d9\uc77c\ud55c \ud6a8\uacfc\ub97c \uc5bb\ub294 \ubc29\ubc95\uc774 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.li,{children:"(enum \ub0b4\uc5d0\uc11c \uc22b\uc790\ub85c \uac12\uc774 \uc790\ub3d9 \ucd94\ub860\ub41c\ub2e4\ub294 \ub0b4\uc6a9 \ucd94\uac00)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83c\udf89 \uacb0\uacfc"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud2b8\ub9ac\uc250\uc774\ud0b9 \uacfc\uc815 \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294\ub370, \uc774\uac83\uc774 \uc131\ub2a5\uc5d0 \ub9c9\ub300\ud55c \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c4 \uc54a\uc744 \uac83\uc774\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enum"})," \ub0b4\uc5d0\ub294 ",(0,s.jsx)(n.code,{children:"string"}),"\ub9cc \ub123\ub294 \uac83\uc73c\ub85c \ud55c\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enum"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,s.jsx)(n.code,{children:"react-query"})," key\ub97c \uad00\ub9ac\ud574\ubcf4\uc790. ",(0,s.jsx)(n.code,{children:"string"})," \uc624\ud0c8\uc790 \uc785\ub825\uc744 \ubc29\uc9c0\ud558\uace0 \uc911\ubcf5 \ud0a4\ub97c \uc0dd\uc131\ud558\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc744 \uac83\uc774\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\ud15c\ud50c\ub9bf-\ub9ac\ud130\ub7f4-\ud0c0\uc785template-literal-types",children:"\ud15c\ud50c\ub9bf \ub9ac\ud130\ub7f4 \ud0c0\uc785(Template Literal Types)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83d\udd0d \ub0b4\uc6a9 (105\ucabd)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'type Stage =\n\t| "init"\n\t| "select-image"\n\t| "edit-image";\n\ntype StageName = `${Stage}-stage`;\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83c\udf89 \uacb0\uacfc"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"redux"})," action\uc744 \ub9cc\ub4e4\uac70\ub098 ",(0,s.jsx)(n.code,{children:"css"})," class name\uc744 \ub9cc\ub4e4 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub41c\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'type Action = "increment" | "decrement";\ntype ActionType = `${Action}_ACTION`;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'type ButtonType = "primary" | "secondary" | "danger";\ntype ButtonClass = `btn-${ButtonType}`;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\uae30\ud0c0",children:"\uae30\ud0c0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"never"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785\uc774 \ubc18\ud658\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\ub97c \ubd84\uba85\ud788 \ub098\ud0c0\ub0b4\uc790."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc5ec\ub7ec \uba85\uc774 \ud558\ub098\uc758 \ud30c\uc77c\uc744 \ub3d9\uc2dc\uc5d0 \uc218\uc815\ud560 \uac83\uc744 \uace0\ub824\ud558\uc5ec \ud568\uc218\uba85\uc774 \ubc14\ub014 \ub54c\ub294 ",(0,s.jsx)(n.a,{href:"https://jsdoc.app/tags-deprecated",children:(0,s.jsx)(n.code,{children:"@deprecated"})}),"\ub85c \ud45c\uae30\ud558\uace0 \ud30c\uc77c\uc744 \uc9c0\uc6b0\uc9c0 \ub9d0\uc790."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extends"}),"\ub294 \ud655\uc7a5\uc758 \uac1c\ub150\ub3c4 \uc788\uc9c0\ub9cc, \ucd94\ub860\ud55c\ub2e4\ub294 \ub73b\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4. \ub530\ub77c\uc11c ",(0,s.jsx)(n.code,{children:"T extends true"}),"\ub294 ",(0,s.jsx)(n.code,{children:"\ucc38\uc774\ub77c\uba74"}),"\uc774\ub77c\ub294 \ub73b\uc774 \uc788\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc791\uc740 \ud0c0\uc785\uc744 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types",children:"Union Type"}),"\uc774\ub098 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types",children:"Intersection Type"}),"\uc73c\ub85c \ubb36\uc5b4\uc11c \uc0ac\uc6a9\ud558\uc790. ",(0,s.jsx)(n.code,{children:"Pick"}),"\uc774\ub098 ",(0,s.jsx)(n.code,{children:"Omit"}),"\uc744 \uc4f0\uba74 \uc5b4\ub5a4 \uac12\uc774 \ub4e4\uc5b4\uac00\uace0 \ub098\uac00\ub294\uc9c0 \uba38\ub9bf\uc18d\uc73c\ub85c \uacc4\uc0b0\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uac00\ub3c5\uc131\uc774 \ub5a8\uc5b4\uc9c4\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?"})," \uc5f0\uc0b0\uc790\ub85c \ud0c0\uc785\uc744 \ub9cc\ub4dc\ub294 \ub300\uc2e0 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",children:(0,s.jsx)(n.code,{children:"Partial"})}),"\uc744 \uc4f0\uc790."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(7294);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);