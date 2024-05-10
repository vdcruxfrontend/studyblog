"use strict";(self.webpackChunkcrux_study=self.webpackChunkcrux_study||[]).push([[5106],{7172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var s=n(5893),r=n(1151);const a={slug:"10-state-management",title:"10\uc7a5. \uc0c1\ud0dc \uad00\ub9ac",authors:["yunkuk"],tags:["typescript","react","state"]},c=void 0,o={permalink:"/studyblog/blog/10-state-management",editUrl:"https://github.com/vdcruxfrontend/studyblog/tree/main/blog/chpater10.mdx",source:"@site/blog/chpater10.mdx",title:"10\uc7a5. \uc0c1\ud0dc \uad00\ub9ac",description:"(props, state) => UI(JSX)",date:"2024-05-10T05:55:00.000Z",formattedDate:"2024\ub144 5\uc6d4 10\uc77c",tags:[{label:"typescript",permalink:"/studyblog/blog/tags/typescript"},{label:"react",permalink:"/studyblog/blog/tags/react"},{label:"state",permalink:"/studyblog/blog/tags/state"}],readingTime:5.57,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc724\uad6d",title:"Front End Engineer @VDCrux",url:"https://github.com/yunkukpark",imageURL:"https://github.com/yunkukpark.png",key:"yunkuk"}],frontMatter:{slug:"10-state-management",title:"10\uc7a5. \uc0c1\ud0dc \uad00\ub9ac",authors:["yunkuk"],tags:["typescript","react","state"]},unlisted:!1,prevItem:{title:"8\uc7a5. JSX\uc5d0\uc11c TSX\ub85c",permalink:"/studyblog/blog/08-jsx-to-tsx"}},l={authorsImageUrls:[void 0]},i=[{value:"1. \uc0c1\ud0dc \uad00\ub9ac",id:"1-\uc0c1\ud0dc-\uad00\ub9ac",level:2},{value:"1-1. \uc0c1\ud0dc(state)",id:"1-1-\uc0c1\ud0dcstate",level:3},{value:"1-2. \uc0c1\ud0dc\ub97c \uc798 \uad00\ub9ac\ud558\uae30 \uc704\ud55c \uac00\uc774\ub4dc",id:"1-2-\uc0c1\ud0dc\ub97c-\uc798-\uad00\ub9ac\ud558\uae30-\uc704\ud55c-\uac00\uc774\ub4dc",level:3},{value:"1-3. useState vs useReducer",id:"1-3-usestate-vs-usereducer",level:3},{value:"1-4. Context API",id:"1-4-context-api",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"(props, state) => UI(JSX)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"1-\uc0c1\ud0dc-\uad00\ub9ac",children:"1. \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,s.jsx)(t.h3,{id:"1-1-\uc0c1\ud0dcstate",children:"1-1. \uc0c1\ud0dc(state)"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\ub80c\ub4dc\ub9c1 \uacb0\uacfc\uc5d0 \uc601\ud5a5\uc744 \uc8fc\ub294 \uc815\ubcf4\ub97c \ub2f4\uc740 \uc21c\uc218 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4"}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"1-2-\uc0c1\ud0dc\ub97c-\uc798-\uad00\ub9ac\ud558\uae30-\uc704\ud55c-\uac00\uc774\ub4dc",children:["1-2. ",(0,s.jsx)(t.a,{href:"https://ko.react.dev/learn/thinking-in-react",children:"\uc0c1\ud0dc\ub97c \uc798 \uad00\ub9ac\ud558\uae30 \uc704\ud55c \uac00\uc774\ub4dc"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\uc2dc\uac04\uc774 \uc9c0\ub098\ub3c4 \ubcc0\ud558\uc9c0 \uc54a\ub098\uc694? \uadf8\ub7ec\uba74 \ud655\uc2e4\ud788 state\uac00 \uc544\ub2d9\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ubd80\ubaa8\ub85c\ubd80\ud130 props\ub97c \ud1b5\ud574 \uc804\ub2ec\ub429\ub2c8\uae4c? \uadf8\ub7ec\uba74 \ud655\uc2e4\ud788 state\uac00 \uc544\ub2d9\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uc548\uc758 \ub2e4\ub978 state\ub098 props\ub97c \uac00\uc9c0\uace0 \uacc4\uc0b0 \uac00\ub2a5\ud55c\uac00\uc694? \uadf8\ub807\ub2e4\uba74 \uc808\ub300\ub85c state\uac00 \uc544\ub2d9\ub2c8\ub2e4!"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\uadf8 \uc678 \ub0a8\ub294 \uac74 \uc544\ub9c8 state\uc77c \uac81\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"\ud83d\udcda React \uacf5\uc2dd\ubb38\uc11c - thinking in react"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud558\ub294 \uc0c1\ud0dc\ub97c useEffect\ub85c \ub3d9\uae30\ud654\ud558\uba74 \uac1c\ubc1c\uc790\uac00 \ucd94\uc801\ud558\uae30 \uc5b4\ub824\uc6cc \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.\nuseEffect\ub85c \ub3d9\uae30\ud654 \ud558\ub294 \uac83\uc740 \ud53c\ud574\uc57c \ud55c\ub2e4.",(0,s.jsx)(t.br,{}),"\n","\ud83d\udcda 311p"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"1-3-usestate-vs-usereducer",children:"1-3. useState vs useReducer"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"useState \ub300\uc2e0 useReducer \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud558\ub294 \uacbd\uc6b0\ub294 \ud06c\uac8c 2\uac00\uc9c0\uac00 \uc788\ub530."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub2e4\uc218\uc758 \ud558\uc704 \ud544\ub4dc\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \ub2e4\ub8f0 \ub54c"}),"\n",(0,s.jsx)(t.li,{children:"\ub2e4\uc74c \uc0c1\ud0dc\uac00 \uc774\uc804 \uc0c1\ud0dc\uc5d0 \uc758\uc874\uc801\uc77c \ub54c"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Advanced Search\uc640 \uac19\uc774 \ucffc\ub9ac\ub97c \uc0c1\ud0dc\ub85c \uc800\uc7a5\ud574\uc57c\ud55c\ub2e4\uace0 \ud574\ubcf4\uc790.\n\uc774\ub7f0 \ucffc\ub9ac\ub4e4\uc740 \ub2e8\uc21c\ud558\uc9c0 \uc54a\uace0 \uac80\uc0c9 \ub0a0\uc9dc \ubc94\uc704, \ud0a4\uc6cc\ub4dc, \uce74\ub4dc\uc0ac \ub4f1 \ub2e4\uc591\ud55c \ud544\ub4dc\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\ub2e4. \ud398\uc774\uc9c0\ub124\uc774\uc158\uc744 \uace0\ub824\ud55c\ub2e4\uba74 \ud398\uc774\uc9c0, \uc0ac\uc774\uc988 \ub4f1\uc758 \ud544\ub4dc\ub3c4 \ucd94\uac00\ub420 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"type DateRangePreset = 'today' | 'yesterday' | 'thisWeek' | 'lastWeek' | 'thisMonth' | 'lastMonth';\n\nenum CardSet = {\n  VISA = 'VISA',\n  MASTER = 'MASTER',\n  AMEX = 'AMEX',\n  JCB = 'JCB',\n  UNIONPAY = 'UNIONPAY',\n}\n\ninterface SearchFilter {\n  keyword: string;\n  dateRange: DateRangePreset;\n  cardSet: CardSet[];\n  // \uc774\uc678 \uae30\ud0c0 \ud544\ud130\ub9c1 \uc635\uc158\n}\n\ninterface State {\n  filter: SearchFilter;\n  page: number;\n  size: number;\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\uc774\ub7ec\ud55c \ub370\uc774\ud130 \uad6c\uc870\ub97c ",(0,s.jsx)(t.code,{children:"useState"}),"\ub85c \ub2e4\ub8e8\uba74 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c\ub9c8\ub2e4 \uc7a0\uc7ac\uc801\uc778 \uc624\ub958 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9c4\ub2e4. \uc774\ub7f0 \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \ub2e4\ub8f0 \ub54c\ub294 ",(0,s.jsx)(t.code,{children:"useReducer"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"useReducer"}),"\ub294 '\ubb34\uc5c7\uc744 \ubcc0\uacbd\ud560\uc9c0'\uc640 '\uc5b4\ub5bb\uac8c \ubcc0\uacbd\ud560\uc9c0'\ub97c \ubd84\ub9ac\ud558\uc5ec ",(0,s.jsx)(t.code,{children:"dispatch"}),"\ub97c \ud1b5\ud574 \uc5b4\ub5a4 \uc791\uc5c5\uc744 \ud560\uc9c0\ub97c \uc561\uc158\uc73c\ub85c \ub118\uae30\uace0 ",(0,s.jsx)(t.code,{children:"reducer"})," \ud568\uc218 \ub0b4\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\uc2dd\uc744 \uc815\uc758\ud55c\ub2e4",(0,s.jsx)(t.br,{}),"\n","\ud83d\udcda 314p"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'// Action \uc815\uc758\ntype Action =\n  | { payload: SearchFilter; type: "filter" }\n  | { payload: number; type: "navigate" }\n  | { payload: number; type: "resize" };\n\n// Reducer \uc815\uc758\nconst reducer: React.Reducer<State, Action> = (state, action) => {\n  switch (action.type) {\n    case "filter":\n      return { filter: action.payload, page: 0, size: state.size };\n    case "navigate":\n      return { ...state, page: action.payload };\n    case "resize":\n      return { ...state, size: action.payload };\n    default:\n      return state;\n  }\n};\n\n// useReducer \uc0ac\uc6a9\nconst [state, dispatch] = useReducer(reducer, initialState);\n\n// dispatch \uc0ac\uc6a9\ndispatch({\n  type: "filter",\n  payload: { keyword: "react", dateRange: "today", cardSet: ["VISA"] },\n});\ndispatch({ type: "navigate", payload: 1 });\ndispatch({ type: "resize", payload: 10 });\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc678\uc5d0\ub3c4 boolean \uc0c1\ud0dc\ub97c \ud1a0\uae00\ud558\ub294 \uc561\uc158\ub9cc \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,s.jsx)(t.code,{children:"useState"})," \ub300\uc2e0 ",(0,s.jsx)(t.code,{children:"useReducer"}),"\ub97c \uc0ac\uc6a9\ud558\uace4 \ud55c\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const [fold, setFold] = useReducer((fold) => !fold, false);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"1-4-context-api",children:"1-4. Context API"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Context API\ub97c \uc774\uc6a9\ud558\uc5ec \uc804\uc5ed \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \uac83\uc740 \ub300\uaddc\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub098 \uc131\ub2a5\uc774 \uc911\uc694\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uad8c\uc7a5\ub418\uc9c4 \uc54a\ub294\ub2e4."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ucee8\ud14d\uc2a4\ud2b8 \ud504\ub85c\ubc14\uc774\ub354\uc758 props\ub85c \uc8fc\uc785\ub41c \uac12\uc774\ub098 \ucc38\uc870\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ud574\ub2f9 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\ub3c5\ud558\uace0 \uc788\ub294 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uad00\uc2ec\uc0ac\ub97c \uc798 \ubd84\ub9ac\ud574\uc11c \uad6c\uc131\ud558\uba74 \ub9ac\ub80c\ub354\ub9c1\uc744 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ucee4\uc9c0\uace0 \uc804\uc5ed \uc0c1\ud0dc\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uacfc \uc0c1\ud0dc\uc758 \ubcf5\uc7a1\ub3c4\uac00 \uc99d\uac00\ud55c\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"Bad Case \uc608\uc2dc\n\ud558\ub098\uc758 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc5ec\ub7ec \uad00\uc2ec\uc0ac \ud3ec\ud568:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const AppStateContext = React.createContext();\n\nfunction App() {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState("light");\n  const [products, setProducts] = useState([]);\n\n  return (\n    <AppStateContext.Provider\n      value={{ user, setUser, theme, setTheme, products, setProducts }}\n    >\n      {/* Application Components */}\n    </AppStateContext.Provider>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\uc774 \uacbd\uc6b0, \uc0ac\uc6a9\uc790 \uc815\ubcf4, \ud14c\ub9c8, \uc81c\ud488 \ub370\uc774\ud130 \ub4f1 \uc11c\ub85c \ub2e4\ub978 \uad00\uc2ec\uc0ac\uc758 \uc0c1\ud0dc\ub4e4\uc774 \ud558\ub098\uc758 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud14c\ub9c8\ub97c \ubcc0\uacbd\ud560 \ub54c \uc0ac\uc6a9\uc790 \uc815\ubcf4\uc640 \uc81c\ud488 \uc815\ubcf4\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const UserContext = React.createContext();\nconst ThemeContext = React.createContext();\nconst ProductContext = React.createContext();\n\nfunction App() {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState("light");\n  const [products, setProducts] = useState([]);\n\n  return (\n    <UserContext.Provider value={{ user, setUser }}>\n      <ThemeContext.Provider value={{ theme, setTheme }}>\n        <ProductContext.Provider value={{ products, setProducts }}>\n          {/* Application Components */}\n        </ProductContext.Provider>\n      </ThemeContext.Provider>\n    </UserContext.Provider>\n  );\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(7294);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);