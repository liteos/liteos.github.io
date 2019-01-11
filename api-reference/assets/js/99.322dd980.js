(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{862:function(_,v,t){"use strict";t.r(v);var d=t(0),e=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"互斥锁错误码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#互斥锁错误码","aria-hidden":"true"}},[_._v("#")]),_._v(" 互斥锁错误码")]),_._v(" "),t("p",[_._v("对互斥锁存在失败的可能性操作，包括互斥锁创建，互斥锁删除，互斥锁申请，互斥锁释放。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("序号")]),_._v(" "),t("th",[_._v("定义")]),_._v(" "),t("th",[_._v("实际数值")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("参考解决方案")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("1")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_NO_MEMORY")])]),_._v(" "),t("td",[_._v("0x02001d00")]),_._v(" "),t("td",[_._v("内存请求失败")]),_._v(" "),t("td",[_._v("减少互斥锁限制数量的上限")])]),_._v(" "),t("tr",[t("td",[_._v("2")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_INVALID")])]),_._v(" "),t("td",[_._v("0x02001d01")]),_._v(" "),t("td",[_._v("互斥锁不可用")]),_._v(" "),t("td",[_._v("传入有效的互斥锁的ID")])]),_._v(" "),t("tr",[t("td",[_._v("3")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_PTR_NULL")])]),_._v(" "),t("td",[_._v("0x02001d02")]),_._v(" "),t("td",[_._v("入参为空")]),_._v(" "),t("td",[_._v("确保入参可用")])]),_._v(" "),t("tr",[t("td",[_._v("4")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_ALL_BUSY")])]),_._v(" "),t("td",[_._v("0x02001d03")]),_._v(" "),t("td",[_._v("没有互斥锁可用")]),_._v(" "),t("td",[_._v("增加互斥锁限制数量的上限")])]),_._v(" "),t("tr",[t("td",[_._v("5")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_UNAVAILABLE")])]),_._v(" "),t("td",[_._v("0x02001d04")]),_._v(" "),t("td",[_._v("锁失败，因为锁被其他线程使用")]),_._v(" "),t("td",[_._v("等待其他线程解锁或者设置等待时间")])]),_._v(" "),t("tr",[t("td",[_._v("6")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_PEND_INTERR")])]),_._v(" "),t("td",[_._v("0x02001d05")]),_._v(" "),t("td",[_._v("在中断中使用互斥锁")]),_._v(" "),t("td",[_._v("在中断中禁止调用此接口")])]),_._v(" "),t("tr",[t("td",[_._v("7")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_PEND_IN_LOCK")])]),_._v(" "),t("td",[_._v("0x02001d06")]),_._v(" "),t("td",[_._v("任务调度没有使能，线程等待另一个线程释放锁")]),_._v(" "),t("td",[_._v("设置PEND为非阻塞模式或者使能任务调度")])]),_._v(" "),t("tr",[t("td",[_._v("8")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_TIMEOUT")])]),_._v(" "),t("td",[_._v("0x02001d07")]),_._v(" "),t("td",[_._v("互斥锁PEND超时")]),_._v(" "),t("td",[_._v("增加等待时间或者设置一直等待模式")])]),_._v(" "),t("tr",[t("td",[_._v("9")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_OVERFLOW")])]),_._v(" "),t("td",[_._v("0x02001d08")]),_._v(" "),t("td",[_._v("暂未使用，待扩展")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("10")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_PENDED")])]),_._v(" "),t("td",[_._v("0x02001d09")]),_._v(" "),t("td",[_._v("删除正在使用的锁")]),_._v(" "),t("td",[_._v("等待解锁再删除锁")])]),_._v(" "),t("tr",[t("td",[_._v("11")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_GET_COUNT_ERR")])]),_._v(" "),t("td",[_._v("0x02001d0a")]),_._v(" "),t("td",[_._v("暂未使用，待扩展")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("12")]),_._v(" "),t("td",[t("code",[_._v("LOS_ERRNO_MUX_REG_ERROR")])]),_._v(" "),t("td",[_._v("0x02001d0b")]),_._v(" "),t("td",[_._v("暂未使用，待扩展")]),_._v(" "),t("td",[_._v("无")])])])]),_._v(" "),t("p",[t("strong",[_._v("错误码定义：")]),_._v(" 错误码是一个 32 位的存储单元，31~24 位表示错误等级，23~16 位表示错误码标志，15~8 位代表错误码所属模块，7~0 位表示错误码序号，如下")]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[_._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_OS_ERROR(MID, ERRNO)  \\\n(LOS_ERRTYPE_ERROR | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),_._v("\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("ul",[t("li",[_._v("LOS_ERRTYPE_ERROR：Define critical OS errors")]),_._v(" "),t("li",[_._v("LOS_ERRNO_OS_ID：OS error code flag")]),_._v(" "),t("li",[_._v("LOS_MOD_MUX：Mutex module ID")]),_._v(" "),t("li",[_._v("MID：OS_MOUDLE_ID")]),_._v(" "),t("li",[_._v("ERRNO：error ID number")])]),_._v(" "),t("p",[_._v("例如：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("LOS_ERRNO_MUX_TIMEOUT       LOS_ERRNO_OS_ERROR(LOS_MOD_MUX, 0x07)   \n")])])])])])}],!1,null,null,null);e.options.__file="errorcode-mutex.md";v.default=e.exports}}]);