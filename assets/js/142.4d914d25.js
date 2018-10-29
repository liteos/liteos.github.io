(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{552:function(t,s,a){t.exports=a.p+"assets/img/result13.2946692f.png"},590:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"范例13（信号量互斥功能实验）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范例13（信号量互斥功能实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例13（信号量互斥功能实验）")]),t._v(" "),n("h2",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("p",[t._v("有3个资源，一口气生产10个Task，Task申请到资源后，处理任务，释放 ，另外的任务继续处理。")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 handleID"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    BOOL isUsed"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" ResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ResHandler s_stResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RES_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("100")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FALSE "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("200")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FALSE "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("300")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FALSE "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"代码讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),n("h3",{attrs:{id:"_1-创建一个多值信号量和一批任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个多值信号量和一批任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 创建一个多值信号量和一批任务")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("UINT32 "),n("span",{attrs:{class:"token function"}},[t._v("Example13_Entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    UINT32 i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("puts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example13_Entry\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SemCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RES_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwSemID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"LOS_SemCreate Failed:%x!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" NUM_OF_TASKS"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handle_Task"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_DEFAULT_PRIO"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Tasks"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwHandleTskID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Handle_Task create Failed!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-多任务并发，同时只能处理3个资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-多任务并发，同时只能处理3个资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 多任务并发，同时只能处理3个资源")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Handle_Task")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    UINT32 i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Handle_Task(%d) should be Pending.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SemPend")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_uwSemID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOS_WAIT_FOREVER"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        \n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" RES_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_stResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isUsed "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" FALSE"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                s_stResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isUsed "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TRUE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"I am working on it(%d)\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s_stResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 1s后处理完成，释放信号量")]),t._v("\n        s_stResHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isUsed "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" FALSE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SemPost")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_uwSemID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Handle_Task(%d) should be finish.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(552),alt:""}})])])}],o=a(0),_=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);_.options.__file="example13.md";s.default=_.exports}}]);