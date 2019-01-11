(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{554:function(t,s,a){t.exports=a.p+"assets/img/result11.da0eb489.png"},732:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"范例11（定时器综合应用实验）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范例11（定时器综合应用实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例11（定时器综合应用实验）")]),t._v(" "),n("h2",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("p",[t._v("模拟了一个自动关灯的场景，有个vKeyHitTask负责检测是否开灯，如果开灯会启动一个定时器，5s后自动关闭背景灯（Backlight）")]),t._v(" "),n("h2",{attrs:{id:"代码讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),n("h3",{attrs:{id:"_1-创建一个模拟开关的任务，周期修改开关状态。同时创建一个软定时器用于将灯关闭。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个模拟开关的任务，周期修改开关状态。同时创建一个软定时器用于将灯关闭。","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 创建一个模拟开关的任务，周期修改开关状态。同时创建一个软定时器用于将灯关闭。")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("UINT32 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example11_Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example11_Entry\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KeyHit_Task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_DEFAULT_PRIO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KeyHit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwKeyHitTskID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KeyHit_Task create Failed!\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_SwtmrCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                BACKLIGHT_TIMER_PERIOD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                LOS_SWTMR_MODE_NO_SELFDELETE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                BacklightTimer_Callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s_usBacklightSwTmrID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" (LOSCFG_BASE_CORE_SWTMR_ALIGN == YES)")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OS_SWTMR_ROUSES_ALLOW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                OS_SWTMR_ALIGN_SENSITIVE \n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create Timer1 failed.\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("按键任务负责检测灯开关，但当灯打开后，启动定时器，5s后触发定时器回调函数")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeyHit_Task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Press a key to turn the backlight on.\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果背景灯关闭，模拟打开背景灯")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FALSE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s_SimulatedBacklightOn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            s_SimulatedBacklightOn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TRUE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动软定时器，5s后触发关闭")]),t._v("\n        uwRet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_usBacklightSwTmrID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Start Timer1 failed.\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("定时器触发关闭背景灯")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BacklightTimer_Callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 tick_last "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LOS_TickCountGet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    s_SimulatedBacklightOn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FALSE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Timer expired, turning backlight OFF at time(%d).\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tick_last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(554),alt:""}})])])}],r=a(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);e.options.__file="example11.md";s.default=e.exports}}]);