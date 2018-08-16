(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{536:function(_,t,v){"use strict";v.r(t);var e=v(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"task-error-codes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#task-error-codes","aria-hidden":"true"}},[_._v("#")]),_._v(" Task Error Codes")]),_._v(" "),v("p",[_._v("An error code is returned when attempting to create, delete, suspend, resume, or delay a task fails. The error code gives some insights into the possible cause of the failure.")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("SN")]),_._v(" "),v("th",[_._v("Error Code")]),_._v(" "),v("th",[_._v("Error ID Number")]),_._v(" "),v("th",[_._v("Description")]),_._v(" "),v("th",[_._v("Recommended Solution")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_NO_MEMORY")])]),_._v(" "),v("td",[_._v("0x02000200")]),_._v(" "),v("td",[_._v("Insufficient memory")]),_._v(" "),v("td",[_._v("Allocate a larger memory area")])]),_._v(" "),v("tr",[v("td",[_._v("2")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_PTR_NULL")])]),_._v(" "),v("td",[_._v("0x02000201")]),_._v(" "),v("td",[_._v("Null task parameter")]),_._v(" "),v("td",[_._v("Check task parameters")])]),_._v(" "),v("tr",[v("td",[_._v("3")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_STKSZ_NOT_ALIGN")])]),_._v(" "),v("td",[_._v("0x02000202")]),_._v(" "),v("td",[_._v("Task stack size not aligned")]),_._v(" "),v("td",[_._v("Align the task stack size on the boundary")])]),_._v(" "),v("tr",[v("td",[_._v("4")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_PRIOR_ERROR")])]),_._v(" "),v("td",[_._v("0x02000203")]),_._v(" "),v("td",[_._v("Incorrect task priority")]),_._v(" "),v("td",[_._v("Check the task priority")])]),_._v(" "),v("tr",[v("td",[_._v("5")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_ENTRY_NULL")])]),_._v(" "),v("td",[_._v("0x02000204")]),_._v(" "),v("td",[_._v("Null task entry function")]),_._v(" "),v("td",[_._v("Define a task entry function")])]),_._v(" "),v("tr",[v("td",[_._v("6")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_NAME_EMPTY")])]),_._v(" "),v("td",[_._v("0x02000205")]),_._v(" "),v("td",[_._v("Task name unspecified")]),_._v(" "),v("td",[_._v("Specify the task name")])]),_._v(" "),v("tr",[v("td",[_._v("7")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_STKSZ_TOO_SMALL")])]),_._v(" "),v("td",[_._v("0x02000206")]),_._v(" "),v("td",[_._v("Too small task stack")]),_._v(" "),v("td",[_._v("Expand the task stack")])]),_._v(" "),v("tr",[v("td",[_._v("8")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_ID_INVALID")])]),_._v(" "),v("td",[_._v("0x02000207")]),_._v(" "),v("td",[_._v("Invalid task ID")]),_._v(" "),v("td",[_._v("Check task IDs")])]),_._v(" "),v("tr",[v("td",[_._v("9")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_ALREADY_SUSPENDED")])]),_._v(" "),v("td",[_._v("0x02000208")]),_._v(" "),v("td",[_._v("Task already suspended")]),_._v(" "),v("td",[_._v("Suspend the task after it is resumed")])]),_._v(" "),v("tr",[v("td",[_._v("10")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_NOT_SUSPENDED")])]),_._v(" "),v("td",[_._v("0x02000209")]),_._v(" "),v("td",[_._v("Task not suspended")]),_._v(" "),v("td",[_._v("Suspend the task")])]),_._v(" "),v("tr",[v("td",[_._v("11")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_NOT_CREATED")])]),_._v(" "),v("td",[_._v("0x0200020a")]),_._v(" "),v("td",[_._v("Task not created")]),_._v(" "),v("td",[_._v("Create the task")])]),_._v(" "),v("tr",[v("td",[_._v("12")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_OPERATE_SWTMR")])]),_._v(" "),v("td",[_._v("0x02000222")]),_._v(" "),v("td",[_._v("Cannot operate software timer tasks")]),_._v(" "),v("td",[_._v("Do not operate software timer tasks")])]),_._v(" "),v("tr",[v("td",[_._v("13")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_MSG_NONZERO")])]),_._v(" "),v("td",[_._v("0x0200020c")]),_._v(" "),v("td",[_._v("Task information not zero")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("14")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_DELAY_IN_INT")])]),_._v(" "),v("td",[_._v("0x0300020d")]),_._v(" "),v("td",[_._v("Attempt to delay the task while an interrupt is underway")]),_._v(" "),v("td",[_._v("Delay the task after the interrupt is finished")])]),_._v(" "),v("tr",[v("td",[_._v("15")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_DELAY_IN_LOCK")])]),_._v(" "),v("td",[_._v("0x0200020e")]),_._v(" "),v("td",[_._v("Attempt to delay the task while task scheduling is locked")]),_._v(" "),v("td",[_._v("Delay the task after task scheduling is unlocked")])]),_._v(" "),v("tr",[v("td",[_._v("16")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_YIELD_INVALID_TASK")])]),_._v(" "),v("td",[_._v("0x0200020f")]),_._v(" "),v("td",[_._v("Invalid task to be scheduled")]),_._v(" "),v("td",[_._v("Check the task")])]),_._v(" "),v("tr",[v("td",[_._v("17")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_YIELD_NOT_ENOUGH_TASK")])]),_._v(" "),v("td",[_._v("0x02000210")]),_._v(" "),v("td",[_._v("No task or only one task available for scheduling")]),_._v(" "),v("td",[_._v("Add more tasks")])]),_._v(" "),v("tr",[v("td",[_._v("18")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_TCB_UNAVAILABLE")])]),_._v(" "),v("td",[_._v("0x02000211")]),_._v(" "),v("td",[_._v("No idle TCB")]),_._v(" "),v("td",[_._v("Add more TCBs")])]),_._v(" "),v("tr",[v("td",[_._v("19")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_HOOK_NOT_MATCH")])]),_._v(" "),v("td",[_._v("0x02000212")]),_._v(" "),v("td",[_._v("Task hook function mismatch")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("20")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_HOOK_IS_FULL")])]),_._v(" "),v("td",[_._v("0x02000213")]),_._v(" "),v("td",[_._v("Maximum number of task hook functions is reached")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("21")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_OPERATE_IDLE")])]),_._v(" "),v("td",[_._v("0x02000214")]),_._v(" "),v("td",[_._v("Idle task")]),_._v(" "),v("td",[_._v("Check the task ID and do not attempt to operate the task with the ID")])]),_._v(" "),v("tr",[v("td",[_._v("22")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_SUSPEND_LOCKED")])]),_._v(" "),v("td",[_._v("0x03000215")]),_._v(" "),v("td",[_._v("Attempt to suspend the task while task scheduling is locked")]),_._v(" "),v("td",[_._v("Suspend the task after task scheduling is unlocked")])]),_._v(" "),v("tr",[v("td",[_._v("23")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_FREE_STACK_FAILED")])]),_._v(" "),v("td",[_._v("0x02000217")]),_._v(" "),v("td",[_._v("Failed to free task stack")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("24")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_STKAREA_TOO_SMALL")])]),_._v(" "),v("td",[_._v("0x02000218")]),_._v(" "),v("td",[_._v("Small task stack area")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("25")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_ACTIVE_FAILED")])]),_._v(" "),v("td",[_._v("0x02000219")]),_._v(" "),v("td",[_._v("Failed to trigger the task")]),_._v(" "),v("td",[_._v("Create an idle task and trigger a task switch")])]),_._v(" "),v("tr",[v("td",[_._v("26")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_CONFIG_TOO_MANY")])]),_._v(" "),v("td",[_._v("0x0200021a")]),_._v(" "),v("td",[_._v("Too many task configuration options")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("27")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_CP_SAVE_AREA_NOT_ALIGN")])]),_._v(" "),v("td",[_._v("0x0200021b")]),_._v(" "),v("td",[_._v("None")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("28")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_MSG_Q_TOO_MANY")])]),_._v(" "),v("td",[_._v("0x0200021d")]),_._v(" "),v("td",[_._v("None")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("29")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_CP_SAVE_AREA_NULL")])]),_._v(" "),v("td",[_._v("0x0200021e")]),_._v(" "),v("td",[_._v("None")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("30")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_SELF_DELETE_ERR")])]),_._v(" "),v("td",[_._v("0x0200021f")]),_._v(" "),v("td",[_._v("None")]),_._v(" "),v("td",[_._v("Do not use the error code")])]),_._v(" "),v("tr",[v("td",[_._v("31")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_STKSZ_TOO_LARGE")])]),_._v(" "),v("td",[_._v("0x02000220")]),_._v(" "),v("td",[_._v("Large task stack")]),_._v(" "),v("td",[_._v("Reduce the task stack size")])]),_._v(" "),v("tr",[v("td",[_._v("32")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_TSK_SUSPEND_SWTMR_NOT_ALLOWED")])]),_._v(" "),v("td",[_._v("0x02000221")]),_._v(" "),v("td",[_._v("Suspension of a software timer task not allowed")]),_._v(" "),v("td",[_._v("Check the task ID. Do not attempt to suspend a software timer task.")])])])]),_._v(" "),v("p",[v("strong",[_._v("Error Code Definition")])]),_._v(" "),v("p",[_._v("An error code is 32 bits in length, where:")]),_._v(" "),v("ul",[v("li",[_._v("Bits 31–24: error severity")]),_._v(" "),v("li",[_._v("Bits 23–16: error flag")]),_._v(" "),v("li",[_._v("Bits 15–8: module that encounters the error")]),_._v(" "),v("li",[_._v("Bits 7–0: error ID number")])]),_._v(" "),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[_._v(" "),v("span",{attrs:{class:"token macro property"}},[_._v("#"),v("span",{attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_OS_NORMAL(MID,ERRNO)")]),_._v("\n "),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("LOS_ERRTYPE_NORMAL "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" LOS_ERRNO_OS_ID "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" "),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("UINT32"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("MID"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{attrs:{class:"token operator"}},[_._v("<<")]),_._v(" "),v("span",{attrs:{class:"token number"}},[_._v("8")]),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" "),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("ERRNO"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n\n "),v("span",{attrs:{class:"token comment"}},[_._v("// LOS_ERRTYPE_NORMAL ：Define the error level as critical")]),_._v("\n "),v("span",{attrs:{class:"token comment"}},[_._v("// LOS_ERRNO_OS_ID ：OS error code flag.")]),_._v("\n "),v("span",{attrs:{class:"token comment"}},[_._v("// MID：OS_MOUDLE_ID")]),_._v("\n "),v("span",{attrs:{class:"token comment"}},[_._v("// ERRNO：error ID number")]),_._v("\n")])])]),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[_._v("举例")]),_._v(" "),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[_._v("LOS_ERRNO_TSK_NO_MEMORY  "),v("span",{attrs:{class:"token function"}},[_._v("LOS_ERRNO_OS_FATAL")]),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("LOS_MOD_TSK"),v("span",{attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{attrs:{class:"token number"}},[_._v("0x00")]),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])])])]),_._v(" "),v("div",{staticClass:"warning custom-block"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[_._v("0x16,0x1c and 0x0b error codes are not defined and therefore cannot be used.")])])])}],!1,null,null,null);s.options.__file="errorcode-task.md";t.default=s.exports}}]);