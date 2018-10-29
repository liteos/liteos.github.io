(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{545:function(t,s,a){t.exports=a.p+"assets/img/result06.4a8d7995.png"},597:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"范例06（优先级动态调整实验）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范例06（优先级动态调整实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例06（优先级动态调整实验）")]),t._v(" "),n("p",[n("code",[t._v("LOS_TaskPriSet/LOS_TaskPriGet")]),t._v(" 可以在运行中调整任务优先级")]),t._v(" "),n("h2",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("p",[t._v("高优先级任务先执行，然后将低优先级任务级别提升，低优先级任务开始工作，完成后主动将其优先级调低。")]),t._v(" "),n("h2",{attrs:{id:"代码讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),n("h3",{attrs:{id:"_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 使用 "),n("code",[t._v("LOS_TaskCreate")]),t._v(" 创建两个任务，任务优先级分别为 4 和 5；")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("UINT32 "),n("span",{attrs:{class:"token function"}},[t._v("Example06_Entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example06_Entry\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task1"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_HI"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Task1"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTask1"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskHiID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example_Task1 create Failed!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_LO"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Task2"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTask2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskLoID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example_Task2 create Failed!\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-task1-和-task2-周期性打印字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-task1-和-task2-周期性打印字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),n("code",[t._v("Task1")]),t._v(" 和 "),n("code",[t._v("Task2")]),t._v(" 周期性打印字符串")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Example_Task1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" UINT32 i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 将低优先级任务2级别提升")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Raise Example_Task2 ---\x3e\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskPriSet")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_uwTskLoID"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TASK_PRIO_LO "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Example_Task2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" UINT32 i"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        UINT16 usTaskPriLo "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_TaskPriGet")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_uwTskLoID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 任务2完成后，将其优先级降低")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"---\x3e Lower Example_Task2\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("LOS_CurTaskPriSet")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("usTaskPriLo "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(545),alt:""}})])])}],o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="example06.md";s.default=r.exports}}]);