(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{852:function(_,v,t){"use strict";t.r(v);var d=t(0),R=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"软件定时器错误码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件定时器错误码","aria-hidden":"true"}},[_._v("#")]),_._v(" 软件定时器错误码")]),_._v(" "),t("p",[_._v("对软件定时器存在失败可能性的操作，包括创建、删除、暂停、重启定时器等等，均需要返回对应的错误码，以便快速定位错误原因。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("序号")]),_._v(" "),t("th",[_._v("定义")]),_._v(" "),t("th",[_._v("实际数值")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("参考解决方案")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("1")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_PTR_NULL")])]),_._v(" "),t("td",[_._v("0x02000300")]),_._v(" "),t("td",[_._v("软件定时器回调函数为空")]),_._v(" "),t("td",[_._v("定义软件定时器回调函数")])]),_._v(" "),t("tr",[t("td",[_._v("2")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_INTERVAL_NOT_SUITED")])]),_._v(" "),t("td",[_._v("0x02000301")]),_._v(" "),t("td",[_._v("软件定时器间隔时间为0")]),_._v(" "),t("td",[_._v("重新定义间隔时间")])]),_._v(" "),t("tr",[t("td",[_._v("3")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_MODE_INVALID")])]),_._v(" "),t("td",[_._v("0x02000302")]),_._v(" "),t("td",[_._v("不正确的软件定时器模式")]),_._v(" "),t("td",[_._v("确认软件定时器模式，范围为[0,2]")])]),_._v(" "),t("tr",[t("td",[_._v("4")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_RET_PTR_NULL")])]),_._v(" "),t("td",[_._v("0x02000303")]),_._v(" "),t("td",[_._v("软件定时器ID指针入参为NULL")]),_._v(" "),t("td",[_._v("定义ID变量，传入指针")])]),_._v(" "),t("tr",[t("td",[_._v("5")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_MAXSIZE")])]),_._v(" "),t("td",[_._v("0x02000304")]),_._v(" "),t("td",[_._v("软件定时器个数超过最大值")]),_._v(" "),t("td",[_._v("重新定义软件定时器最大个数，或者等待一个软件定时器释放资源")])]),_._v(" "),t("tr",[t("td",[_._v("6")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_ID_INVALID")])]),_._v(" "),t("td",[_._v("0x02000305")]),_._v(" "),t("td",[_._v("不正确的软件定时器ID入参")]),_._v(" "),t("td",[_._v("确保入参合法")])]),_._v(" "),t("tr",[t("td",[_._v("7")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_NOT_CREATED")])]),_._v(" "),t("td",[_._v("0x02000306")]),_._v(" "),t("td",[_._v("软件定时器未创建")]),_._v(" "),t("td",[_._v("创建软件定时器")])]),_._v(" "),t("tr",[t("td",[_._v("8")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_NO_MEMORY")])]),_._v(" "),t("td",[_._v("0x02000307")]),_._v(" "),t("td",[_._v("软件定时器链表创建内存不足")]),_._v(" "),t("td",[_._v("申请一块足够大的内存供软件定时器使用")])]),_._v(" "),t("tr",[t("td",[_._v("9")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_MAXSIZE_INVALID")])]),_._v(" "),t("td",[_._v("0x02000308")]),_._v(" "),t("td",[_._v("不正确的软件定时器个数最大值")]),_._v(" "),t("td",[_._v("重新定义该值")])]),_._v(" "),t("tr",[t("td",[_._v("10")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_HWI_ACTIVE")])]),_._v(" "),t("td",[_._v("0x02000309")]),_._v(" "),t("td",[_._v("在中断中使用定时器")]),_._v(" "),t("td",[_._v("修改源代码确保不在中断中使用")])]),_._v(" "),t("tr",[t("td",[_._v("11")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_HANDLER_POOL_NO_MEM")])]),_._v(" "),t("td",[_._v("0x0200030a")]),_._v(" "),t("td",[_._v("membox内存不足")]),_._v(" "),t("td",[_._v("扩大内存")])]),_._v(" "),t("tr",[t("td",[_._v("12")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_QUEUE_CREATE_FAILED")])]),_._v(" "),t("td",[_._v("0x0200030b")]),_._v(" "),t("td",[_._v("软件定时器队列创建失败")]),_._v(" "),t("td",[_._v("检查用以创建队列的内存是否足够")])]),_._v(" "),t("tr",[t("td",[_._v("13")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_TASK_CREATE_FAILED")])]),_._v(" "),t("td",[_._v("0x0200030c")]),_._v(" "),t("td",[_._v("软件定时器任务创建失败")]),_._v(" "),t("td",[_._v("检查用以创建软件定时器任务的内存是否足够并重新创建")])]),_._v(" "),t("tr",[t("td",[_._v("14")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_NOT_STARTED")])]),_._v(" "),t("td",[_._v("0x0200030d")]),_._v(" "),t("td",[_._v("未启动软件定时器")]),_._v(" "),t("td",[_._v("启动软件定时器")])]),_._v(" "),t("tr",[t("td",[_._v("15")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_STATUS_INVALID")])]),_._v(" "),t("td",[_._v("0x0200030e")]),_._v(" "),t("td",[_._v("不正确的软件定时器状态")]),_._v(" "),t("td",[_._v("检查确认软件定时器状态")])]),_._v(" "),t("tr",[t("td",[_._v("16")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_SORTLIST_NULL")])]),_._v(" "),t("td",[_._v("null")]),_._v(" "),t("td",[_._v("暂无")]),_._v(" "),t("td",[_._v("该错误码暂不使用")])]),_._v(" "),t("tr",[t("td",[_._v("17")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_SWTMR_TICK_PTR_NULL")])]),_._v(" "),t("td",[_._v("0x02000310")]),_._v(" "),t("td",[_._v("用以获取软件定时器超时tick数的入参指针为NULL")]),_._v(" "),t("td",[_._v("创建一个有效的变量")])])])]),_._v(" "),t("p",[t("strong",[_._v("错误码定义：")])]),_._v(" "),t("p",[_._v("错误码是一个 32 位的存储单元，31~24 位表示错误等级，23~16 位表示错误码标志，15~8 位代表错误码所属模块，7~0 位表示错误码序号，如下")]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{attrs:{class:"token macro property"}},[_._v("#"),t("span",{attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_OS_NORMAL(MID,ERRNO)  \\\n(LOS_ERRTYPE_NORMAL | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),_._v("\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("说明")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("LOS_ERRTYPE_NORMAL")]),_._v(" ：Define the error level as critical")]),_._v(" "),t("li",[t("code",[_._v("LOS_ERRNO_OS_ID")]),_._v(" ：OS error code flag.")]),_._v(" "),t("li",[t("code",[_._v("MID")]),_._v(" ：OS_MOUDLE_ID")]),_._v(" "),t("li",[t("code",[_._v("ERRNO")]),_._v(" ：error ID number")])]),_._v(" "),t("p",[_._v("例如：")]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{attrs:{class:"token macro property"}},[_._v("#"),t("span",{attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_SWTMR_PTR_NULL  \\\nLOS_ERRNO_OS_ERROR(LOS_MOD_SWTMR, 0x00)  ")]),_._v("\n")])])])])])}],!1,null,null,null);R.options.__file="errorcode-swtmr.md";v.default=R.exports}}]);