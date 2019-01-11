(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{782:function(a,_,t){"use strict";t.r(_);var v=t(0),i=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"编码规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编码规范","aria-hidden":"true"}},[a._v("#")]),a._v(" 编码规范")]),a._v(" "),t("p",[a._v("此编程规范在业界通用的编程规范基础上进行了整理，供开发者参考使用。")]),a._v(" "),t("h2",{attrs:{id:"总体原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总体原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 总体原则")]),a._v(" "),t("ul",[t("li",[a._v("清晰，易于维护、易于重构；")]),a._v(" "),t("li",[a._v("简洁，易于理解，并且易于实现；")]),a._v(" "),t("li",[a._v("风格统一，代码整体风格保持统一；")]),a._v(" "),t("li",[a._v("通用性，遵循业界通用的编程规范；")])]),a._v(" "),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),t("p",[a._v("建议将工程按照功能模块划分子目录（可参考LiteOS的功能模块划分），子目录再定义头文件和源文件目录。")]),a._v(" "),t("h2",{attrs:{id:"头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 头文件")]),a._v(" "),t("h3",{attrs:{id:"设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计原则")]),a._v(" "),t("ul",[t("li",[a._v("头文件应当职责单一；")]),a._v(" "),t("li",[a._v("头文件中适合放置接口的声明，不适合放置实现；")]),a._v(" "),t("li",[a._v("不要在头文件中定义变量；")]),a._v(" "),t("li",[a._v("建议每一个.c文件应有一个同名.h文件，用于声明需要对外公开的接口；")]),a._v(" "),t("li",[a._v("一个模块通常包含多个.c文件，建议放在同一个目录下，目录名即为模块名；如果一个模块包含多个子模块，则建议每一个子模块提供一个对外的.h，文件名为子模块名；")])]),a._v(" "),t("h3",{attrs:{id:"版权声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版权声明","aria-hidden":"true"}},[a._v("#")]),a._v(" 版权声明")]),a._v(" "),t("ul",[t("li",[a._v("头文件版权声明一致，放在头文件置顶位置；")]),a._v(" "),t("li",[a._v("如果提交的代码是在开源软件基础上修改所编写或衍生的代码，请遵循开源许可协议要求，并且已完成履行被修改软件的许可证义务；")])]),a._v(" "),t("h2",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),t("ul",[t("li",[a._v("重复代码应该尽可能提炼成函数；")]),a._v(" "),t("li",[a._v("避免函数过长，新增函数不超过40-50行；")]),a._v(" "),t("li",[a._v("避免函数的代码块嵌套过深；")]),a._v(" "),t("li",[a._v("函数应避免使用全局变量、静态局部变量和I/O操作，不可避免的地方应集中使用；")])]),a._v(" "),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量")]),a._v(" "),t("ul",[t("li",[a._v("一个变量只有一个功能，不要把一个变量用作多种用途；")]),a._v(" "),t("li",[a._v("防止局部变量与全局变量同名；")]),a._v(" "),t("li",[a._v("不用或者少用全局变量；")]),a._v(" "),t("li",[a._v("在首次使用前初始化变量；")])]),a._v(" "),t("h2",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[a._v("#")]),a._v(" 注释")]),a._v(" "),t("ul",[t("li",[a._v("注释风格要统一，注释的内容要清楚、明了，含义准确，防止注释二义性；")]),a._v(" "),t("li",[a._v("在代码的功能、意图层次上进行注释，即注释解释代码难以直接表达的意图，而不是仅仅重复描述代码；")]),a._v(" "),t("li",[a._v("函数声明处注释描述函数功能、性能及用法，包括输入和输出参数、函数返回值、可重入的要求等；定义处详细描述函数功能和实现要点，如实现的简要步骤、实现的理由、设计约束等；")]),a._v(" "),t("li",[a._v("全局变量要有较详细的注释，包括对其功能、取值范围以及存取时注意事项等的说明；")]),a._v(" "),t("li",[a._v("注释应放在其代码上方相邻位置或右方；")]),a._v(" "),t("li",[a._v("避免在注释中使用缩写，除非是业界通用或子系统内标准化的缩写；")]),a._v(" "),t("li",[a._v("文件头部要进行注释，建议注释列出：版权说明、版本号、生成日期、作者姓名、功能说明、与其它文件的关系、修改日志等，头文件的注释中还应有函数功能简要说明；")])]),a._v(" "),t("h2",{attrs:{id:"排版与格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排版与格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 排版与格式")]),a._v(" "),t("ul",[t("li",[a._v("程序块采用缩进风格编写，每级缩进为4个空格；")]),a._v(" "),t("li",[a._v("相对独立的程序块之间、变量说明之后必须加空行；")]),a._v(" "),t("li",[a._v("一条语句不能过长，如不能拆分需要分行写；")]),a._v(" "),t("li",[a._v("一行只写一条语句；")]),a._v(" "),t("li",[a._v("if、for、do、while、case、switch、default等语句独占一行；")]),a._v(" "),t("li",[a._v("源程序中关系较为紧密的代码应尽可能相邻；")])]),a._v(" "),t("h2",{attrs:{id:"可移植性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可移植性","aria-hidden":"true"}},[a._v("#")]),a._v(" 可移植性")]),a._v(" "),t("ul",[t("li",[a._v("不使用与硬件或操作系统关系很大的语句，而使用建议的标准语句，以提高软件的可移植性和可重用性；")])]),a._v(" "),t("h2",{attrs:{id:"业界编程规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业界编程规范","aria-hidden":"true"}},[a._v("#")]),a._v(" 业界编程规范")]),a._v(" "),t("ul",[t("li",[a._v("C语言编程规范参考资料较多，大家可以自行了解，本文不再过多赘述；")])])])}],!1,null,null,null);i.options.__file="code-standard.md";_.default=i.exports}}]);