(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{194:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAbCAIAAADDHevrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVGhD7ZlREsIwCER7/2Pqn5fQsXU6kQQCiIiZ7ZdTk0L2LSTTbpfr7Y6rsAIbCBWm80wNhIoDAqHqgEAIhMorUD3BwT607deRePs7YSlHOBK0vXkm1qanT1I/Ul5s1HM0ktYiNPQE5xiHk6KUjXpOPCHOzoL3rbXYLz6KEEm+Lcdh/qddSFkLz9Eobh1jqCHOOFMF+8YlZPk9QlzTnubfZ1u0hnyEyM4xdRBHiNufTDU6XMI6hEjVn1pzVe8zmlBD5K+ofcjd/aZuCxlg6HJtPI064YRIm9LkQDSa1hCnqWCOEAxS2+/fy2lWbh2jX8Zv96H/IKTsZn1JfW604ZlKcAN3BpueRIapCjf73dQRWm/TN20XeLfta6c+vfJnLfJue2FIixDKt3ZaRBBKk9oZCIScwqVNA6E0qZ2BQMgpXNo0EEqT2hkIhJzCpU17fUtNi4dAVgVAyKpY9ngQylbcGu8BzipJkg3YgwQAAAAASUVORK5CYII="},833:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"interrupt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Interrupt")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[t._v("Overview")]),r("ul",[r("li",[r("a",{attrs:{href:"#basic-concept"}},[t._v("Basic Concept")])]),r("li",[r("a",{attrs:{href:"#introduce-of-interrupt"}},[t._v("Introduce of Interrupt")])]),r("li",[r("a",{attrs:{href:"#terminology-associated-with-interrupt"}},[t._v("Terminology Associated With Interrupt")])])])]),r("li",[r("a",{attrs:{href:"#development-guidelines"}},[t._v("Development Guidelines")]),r("ul",[r("li",[r("a",{attrs:{href:"#usage-scenarios"}},[t._v("Usage Scenarios")])]),r("li",[r("a",{attrs:{href:"#functions"}},[t._v("Functions")])]),r("li",[r("a",{attrs:{href:"#development-process"}},[t._v("Development Process")])])])]),r("li",[r("a",{attrs:{href:"#precautions"}},[t._v("Precautions")])]),r("li",[r("a",{attrs:{href:"#programming-example"}},[t._v("Programming Example")]),r("ul",[r("li",[r("a",{attrs:{href:"#example-description"}},[t._v("Example Description")])]),r("li",[r("a",{attrs:{href:"#example-code"}},[t._v("Example Code")])]),r("li",[r("a",{attrs:{href:"#verification"}},[t._v("Verification")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("h3",{attrs:{id:"basic-concept"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-concept","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Concept")]),t._v(" "),r("p",[t._v("When a condition that needs immediate attention occurs, the CPU suspends current activities and switches to deal with the condition.")]),t._v(" "),r("p",[t._v("The CPU runs faster than external peripherals. When external peripherals are able to fulfill an activity alone, the CPU takes care of other activities.")]),t._v(" "),r("p",[t._v("When the CPU must be involved in fulfilling an activity, the interrupt mechanism enables an external peripheral to emit an interrupt signal to alert the CPU of the high-priority condition requiring the interruption of current activities. The CPU does not need to keep waiting for peripheral states, thereby improving CPU efficiency and accelerating system response.")]),t._v(" "),r("p",[t._v("The interrupt mechanism supports:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Initialize")])]),t._v(" "),r("li",[r("p",[t._v("Create")])]),t._v(" "),r("li",[r("p",[t._v("Lock or unlock")])]),t._v(" "),r("li",[r("p",[t._v("Restore")])]),t._v(" "),r("li",[r("p",[t._v("Enable")])]),t._v(" "),r("li",[r("p",[t._v("Disable")])])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The interrupt mechanism of Huawei LiteOS is based on interrupt.")])]),t._v(" "),r("h3",{attrs:{id:"introduce-of-interrupt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduce-of-interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduce of Interrupt")]),t._v(" "),r("p",[t._v("The following three types of hardware are involved in the interrupt mechanism:")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Device")]),t._v(":  the interrupt source. When a device requests the help of the CPU, it emits an interrupt signal to the interrupt controller.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt controller")]),t._v(":  a type of peripheral that sends an interrupt request to the CPU after receiving an interrupt signal from the interrupt pins of other peripherals. On the interrupt controller, you can prioritize, enable, or disable interrupt sources, as well as specify an interrupt trigger mode on each interrupt source. Common interrupt controllers include the Vector Interrupt Controller (VIC) and General Interrupt Controller (GIC, typically used in ARM Cortex-A7).")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("CPU")]),t._v(":  executes an interrupt handler at the request of an interrupt source.")])])]),t._v(" "),r("h3",{attrs:{id:"terminology-associated-with-interrupt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terminology-associated-with-interrupt","aria-hidden":"true"}},[t._v("#")]),t._v(" Terminology Associated With Interrupt")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Interrupt ID")]),t._v(": a unique identifier contained in all interrupt requests from a particular interrupt source.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt request (IRQ)")]),t._v(": an electrical pulse signal sent to alert the CPU of an urgent condition. The CPU suspends current activities and deals with the condition that needs immediate attention.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt priority")]),t._v(": the priority of an interrupt source. Interrupt priority is determined based on importance and urgency. Huawei LiteOS supports the interrupt priority and interrupt nesting of the interrupt controller. Interrupt management does not limit the priority and nesting.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt handler")]),t._v(": When an external peripheral generates an interrupt request, the CPU executes an interrupt handler to switch from current activities to the event that needs immediate attention.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt trigger")]),t._v(": set to 1 when an interrupt source emits an interrupt signal.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt trigger type")]),t._v(": the way in which an interrupt signal is sent to the interrupt controller. Typically, an interrupt signal is either level-triggered or edge-triggered.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt vector")]),t._v(": starting address of interrupt service routine.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Interrupt vector table")]),t._v(": a table where interrupt vectors are stored based on interrupt ID.")])])]),t._v(" "),r("h2",{attrs:{id:"development-guidelines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#development-guidelines","aria-hidden":"true"}},[t._v("#")]),t._v(" Development Guidelines")]),t._v(" "),r("h3",{attrs:{id:"usage-scenarios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage-scenarios","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage Scenarios")]),t._v(" "),r("p",[t._v("When an interrupt request is generated, the CPU responds by suspending current activities and calling the user-defined interrupt handler to deal with the condition that needs immediate attention.")]),t._v(" "),r("h3",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("p",[t._v("The interrupt module provides the following functions:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("API")])]),t._v(" "),r("th",[r("strong",[t._v("Description")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("LOS_HwiCreate")])]),t._v(" "),r("td",[t._v("Creates a hardware interrupt to register the corresponding interrupt handler")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("LOS_IntUnLock")])]),t._v(" "),r("td",[t._v("Unlocks an interrupt")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("LOS_IntRestore")])]),t._v(" "),r("td",[t._v("Restores an interrupt")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("LOS_IntLock")])]),t._v(" "),r("td",[t._v("Locks an interrupt")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("LOS_HwiDelete")])]),t._v(" "),r("td",[t._v("Deletes a hard interrupt")])])])]),t._v(" "),r("h3",{attrs:{id:"development-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#development-process","aria-hidden":"true"}},[t._v("#")]),t._v(" Development Process")]),t._v(" "),r("ol",[r("li",[t._v("Configure the following parameters:")])]),t._v(" "),r("ul",[r("li",[r("p",[r("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(": a switch to enable or disable the hardware interrupt module. Set to YES.")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("LOSCFG_PLATFORM_HWI_LIMIT")]),t._v(": the maximum allowed number of hardware interrupts.")])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[t._v("Call the "),r("code",[t._v("LOS_HwiInit")]),t._v(" API to initialize the interrupt mechanism.")])]),t._v(" "),r("li",[r("p",[t._v("Call the "),r("code",[t._v("LOS_HwiCreate")]),t._v(" API to create an interrupt. Enabel the specified interrupt as required.")])]),t._v(" "),r("li",[r("p",[t._v("Call the "),r("code",[t._v("LOS_HwiDelete")]),t._v(" API to delete an interrupt.")])])]),t._v(" "),r("h2",{attrs:{id:"precautions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#precautions","aria-hidden":"true"}},[t._v("#")]),t._v(" Precautions")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("The register address of the "),r("code",[t._v("LosHwiInit")]),t._v(" operation and the maximum allowed number of interrupts vary depending on hardware specifications.")])]),t._v(" "),r("li",[r("p",[t._v("Avoid long-running interrupt handlers because they have negative impact on CPU's response to interrupts.")])]),t._v(" "),r("li",[r("p",[t._v("The function leading to schedule cannot be performed after breading off.")])]),t._v(" "),r("li",[r("p",[t._v("The input parameter of the "),r("code",[t._v("LOS_IntRestore()")]),t._v(" API must be the PRIMASK that is saved by the "),r("code",[t._v("LOS_IntLock()")]),t._v(" API before locking the interrupt.")])]),t._v(" "),r("li",[r("p",[t._v("In Cortex-A7, interrupts 0–31 are for internal use and it is not advisable to request or create them.")])])]),t._v(" "),r("h2",{attrs:{id:"programming-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#programming-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Programming Example")]),t._v(" "),r("h3",{attrs:{id:"example-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Description")]),t._v(" "),r("p",[t._v("The programming example will cover the following functions:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Initialize an hardware interrupt")])]),t._v(" "),r("li",[r("p",[t._v("Register an interrupt")])]),t._v(" "),r("li",[r("p",[t._v("Trigger an interrupt")])]),t._v(" "),r("li",[r("p",[t._v("View the output")])])]),t._v(" "),r("p",[r("strong",[t._v("Prerequisite:")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("The "),r("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(" parameter in the los_config.h file is set to "),r("strong",[t._v("YES")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("The "),r("code",[t._v("OS_HWI_MAX_USED_NUM")]),t._v(" parameter in the los_config.h file is set to the maximum number of hardware interrupts the operating system allows.")])])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The current interrupt test code provides a basic framework. The interrupt hardware initialization code can be implemented by calling the "),r("code",[t._v("Example_Exti0_Init()")]),t._v(" function based on the hardware of the development board.")])]),t._v(" "),r("h3",{attrs:{id:"example-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Code")]),t._v(" "),r("p",[t._v("The code is as follows:")]),t._v(" "),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),r("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),r("span",{attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{attrs:{class:"token comment"}},[t._v("/*add your IRQ init code here*/")]),t._v("\n\n    "),r("span",{attrs:{class:"token keyword"}},[t._v("return")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),r("span",{attrs:{class:"token function"}},[t._v("User_IRQHandler")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token keyword"}},[t._v("void")]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{attrs:{class:"token function"}},[t._v("printf")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token string"}},[t._v('"\\r\\n User IRQ test\\r\\n"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{attrs:{class:"token keyword"}},[t._v("return")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nUINT32 "),r("span",{attrs:{class:"token function"}},[t._v("Example_Interrupt")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINTPTR uvIntSave"),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uvIntSave "),r("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{attrs:{class:"token function"}},[t._v("LOS_IntLock")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),r("span",{attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),r("span",{attrs:{class:"token function"}},[t._v("LOS_HwiCreate")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{attrs:{class:"token number"}},[t._v("6")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{attrs:{class:"token number"}},[t._v("0")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{attrs:{class:"token number"}},[t._v("0")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User_IRQHandler"),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{attrs:{class:"token number"}},[t._v("0")]),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{attrs:{class:"token comment"}},[t._v("//create interrupt")]),t._v("\n    \n    "),r("span",{attrs:{class:"token function"}},[t._v("LOS_IntRestore")]),r("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uvIntSave"),r("span",{attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),r("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),r("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),r("h3",{attrs:{id:"verification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),r("p",[r("img",{attrs:{src:n(194),alt:""}})])])}],a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);s.options.__file="interrupt.md";e.default=s.exports}}]);