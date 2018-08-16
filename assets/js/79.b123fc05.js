(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{166:function(t,s,e){t.exports=e.p+"assets/img/stm32cube-nvic-no-systick.f4864c0c.png"},268:function(t,s,e){t.exports=e.p+"assets/img/raw-project-list.a31e599e.png"},269:function(t,s,e){t.exports=e.p+"assets/img/raw-project-first-compile.fd341269.png"},270:function(t,s,e){t.exports=e.p+"assets/img/raw-project-group-arch.39f5658c.png"},271:function(t,s,e){t.exports=e.p+"assets/img/raw-project-S-files.24939493.png"},272:function(t,s,e){t.exports=e.p+"assets/img/raw-project-group-kernel.32aa4518.png"},273:function(t,s,e){t.exports=e.p+"assets/img/raw-project-options-include.44a665a2.png"},274:function(t,s,e){t.exports=e.p+"assets/img/raw-project-include-path.16be6eb6.png"},275:function(t,s,e){t.exports=e.p+"assets/img/raw-project-compile-error.479a481f.png"},276:function(t,s,e){t.exports=e.p+"assets/img/raw-project-osconfig.48bebeab.png"},277:function(t,s,e){t.exports=e.p+"assets/img/raw-project-osconfig-path.785769d5.png"},278:function(t,s,e){t.exports=e.p+"assets/img/raw-project-error-multiply-defined.a78bd7b7.png"},279:function(t,s,e){t.exports=e.p+"assets/img/raw-project-compile-ok.730c4722.png"},597:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"stm32-系列（mdk-arm-v5）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32-系列（mdk-arm-v5）","aria-hidden":"true"}},[t._v("#")]),t._v(" STM32 系列（MDK-ARM V5）")]),t._v(" "),a("h2",{attrs:{id:"编译-stm32cube-生成的裸机工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-stm32cube-生成的裸机工程","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译 STM32Cube 生成的裸机工程")]),t._v(" "),a("p",[t._v("默认的裸机工程如下图所示，会按照代码功能组织好。我们可以执行编译检查工程是否 OK。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(268),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(269),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"创建-liteos-分组并添加-c-源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-liteos-分组并添加-c-源文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 LiteOS 分组并添加 .c 源文件")]),t._v(" "),a("p",[t._v("如下图增加 LiteOS 源代码：")]),t._v(" "),a("p",[t._v("arch 需要添加 "),a("code",[t._v("los_dispatch_keil.S")]),t._v("，"),a("code",[t._v("los_hw.c")]),t._v("，"),a("code",[t._v("los_hw_tick.c")]),t._v(" 和 "),a("code",[t._v("los_hwi.c")]),t._v("，这 4 个文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(270),alt:""}})]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("MDK-ARM 默认添加 .c 源码文件，需要按照如下配置才能看到 .S 汇编文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(271),alt:""}})])]),t._v(" "),a("p",[t._v("kernel 需要添加的文件比较多：")]),t._v(" "),a("ul",[a("li",[t._v("los_init.c")]),t._v(" "),a("li",[t._v("base / core 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / ipc 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / mem / bestfit_little 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / mem / common 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / mem / membox 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / misc 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("base / om 下面全部 .c 文件")]),t._v(" "),a("li",[t._v("extended / tickless 下面全部 .c 文件（如果没有使用 tickless，可以不必添加）")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(272),alt:""}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("需要注意的是，LiteOS 提供了 3 套动态内存分配算法，位于 "),a("code",[t._v("LiteOS\\kernel\\base\\mem")]),t._v(" 目录下，分别是 "),a("code",[t._v("bestfit")]),t._v("、"),a("code",[t._v("bestfit_little")]),t._v("、"),a("code",[t._v("tlsf")]),t._v(" 这三套动态内存算法只需要添加其中一套就行了，对于资源有限的芯片，建议选择 "),a("code",[t._v("bestfit_little")]),t._v("，上面的示例也是添加了这一套动态分配算法；另外 "),a("code",[t._v("LiteOS\\kernel\\base\\mem\\membox")]),t._v(" 目录下是 LiteOS 提供的静态内存算法，与动态内存算法不冲突，需要添加；"),a("code",[t._v("LiteOS\\kernel\\base\\mem\\common")]),t._v(" 目录的内容需要全部添加")])]),t._v(" "),a("h2",{attrs:{id:"配置-c-c-源码-h-头文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-c-c-源码-h-头文件路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 C/C++ 源码 .h 头文件路径")]),t._v(" "),a("p",[a("img",{attrs:{src:e(273),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(274),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"编译代码，处理移植过程中编译错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译代码，处理移植过程中编译错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译代码，处理移植过程中编译错误")]),t._v(" "),a("p",[t._v("编译会发现如下错误，提示缺少 "),a("code",[t._v("los_builddef.h")]),t._v(" 文件，这个文件没有包含在源码中，需要从其他示例工程中过来。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(275),alt:""}})]),t._v(" "),a("p",[t._v("我们在 STM32F103RB_NUCLED 发现 "),a("code",[t._v("OS_CONFIG")]),t._v(" 目录，将该目录拷贝到本地工程中。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(276),alt:""}})]),t._v(" "),a("p",[t._v("也别忘记把 OS_CONFIG 目录配置到头文件路径中")]),t._v(" "),a("p",[a("img",{attrs:{src:e(277),alt:""}})]),t._v(" "),a("p",[t._v("再次编译代码应该就没有告警和错误了。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(278),alt:""}})]),t._v(" "),a("p",[t._v("如果编译后还发现上图中的两个错误，请按照下图显示进行操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(166),alt:""}})]),t._v(" "),a("h3",{attrs:{id:"编译无误，os-移植大功告成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译无误，os-移植大功告成","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译无误，OS 移植大功告成")]),t._v(" "),a("p",[a("img",{attrs:{src:e(279),alt:""}})])])}],i=e(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);r.options.__file="stm32-keil.md";s.default=r.exports}}]);