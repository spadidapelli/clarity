(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{eeSN:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("zl1X"),s=u("pMnS"),i=u("xLE1"),a=u("QkwE"),c=u("vAyd"),r=u("+Xo0"),b=u("0G9f"),d=u("mrSG"),m=u("N+3j"),h='\n"styles": [\n      ...\n      "./node_modules/@clr/icons/clr-icons.min.css",\n      ...\n  ]\n',p='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',y='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme\n\n// Your Application Theme File\n@import "./theme.scss";\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',g='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',q='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n// Your Application Theme File\n@import "./theme.scss";\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',w='\n"styles": [\n      ...\n      "../node_modules/@clr/icons/clr-icons.min.css",\n      "../node_modules/@clr/ui/clr-ui-dark.min.css",\n      ...\n  ]\n',I='\n  "entry": {\n    "main": [\n      "./src/main.ts"\n    ],\n    "styles": [\n      "./node_modules/@clr/icons/clr-icons.min.css",\n      "./node_modules/@clr/ui/clr-ui-dark.min.css",\n      "./src/styles.css"\n    ]\n  },\n',f=function(l){function n(){var n=l.call(this,"themes")||this;return n.uiNodeImports=w,n.uiWebpackImports=I,n.uiCustomClarityLightThemeScssFile=q,n.uiCustomClarityDarkThemeScssFile=y,n.uiCustomClarityLightScssFile=g,n.uiCustomClarityDarkScssFile=p,n.uiNoNodeImports=h,n}return Object(d.c)(n,l),n}(m.a),v=e.ob({encapsulation:2,styles:[],data:{}});function C(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,40,"clr-tab-content",[],null,null,null,o.Xb,o.U)),e.pb(1,49152,[[4,4],[2,4]],0,i.bc,[i.ye,i.we,i.ee],null,null),e.pb(2,2244608,null,0,i.ke,[e.h,[2,i.je],i.we,i.ye],null,null),(l()(),e.qb(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["In order to customize the Clarity light theme you will need to build with the Clarity SCSS and overwrite the SCSS variables that set the look-n-feel for each component you need to customize. You will need to build your applications CSS output with Clarity's SCSS. "])),(l()(),e.qb(5,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Remove Clarity CSS from your build configuration"])),(l()(),e.qb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["First, since we are going to be creating custom component styles the first step is to remove all of the Clarity css from your build process."])),(l()(),e.qb(9,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(10,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(11,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add (or modify) your applications main.scss file"])),(l()(),e.qb(13,0,null,0,13,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Next, we need to include the Clarity dependencies and component styles. This example shows one way of adding the Clarity dependencies and component styles based on standard "])),(l()(),e.qb(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["npm"])),(l()(),e.Ib(-1,null,[" installation into a "])),(l()(),e.qb(18,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["node_modules"])),(l()(),e.Ib(-1,null,[" directory of the project. In this example the "])),(l()(),e.qb(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["styles.scss"])),(l()(),e.Ib(-1,null,[" file lives at the top of a standard angular-cli application "])),(l()(),e.qb(24,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["src"])),(l()(),e.Ib(-1,null,[" folder."])),(l()(),e.qb(27,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(28,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(29,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add a custom theme file"])),(l()(),e.qb(31,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Finally, sandwich your custom theme file between the Clarity dependency SCSS and the Clarity component SCSS. It will hold the values you choose to overwrite as you customize your theme. In this example the "])),(l()(),e.qb(33,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["styles.scss"])),(l()(),e.Ib(-1,null,[" file lives at the top of a standard angular-cli application "])),(l()(),e.qb(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["src"])),(l()(),e.Ib(-1,null,[" folder."])),(l()(),e.qb(39,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(40,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null)],function(l,n){var u=n.component;l(n,10,0,u.uiNoNodeImports,!0),l(n,28,0,u.uiCustomClarityLightScssFile,!0),l(n,40,0,u.uiCustomClarityLightThemeScssFile,!0)},null)}function x(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,34,"clr-tab-content",[],null,null,null,o.Xb,o.U)),e.pb(1,49152,[[6,4],[2,4]],0,i.bc,[i.ye,i.we,i.ee],null,null),e.pb(2,2244608,null,0,i.ke,[e.h,[2,i.je],i.we,i.ye],null,null),(l()(),e.qb(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["In order to customize the Clarity dark theme, you will need to build with the Clarity SCSS and overwrite the SCSS variables that set the look-and-feel for each component you need to customize. You will need to build your application's CSS output with Clarity's SCSS. "])),(l()(),e.qb(5,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Remove Clarity CSS from your build configuration"])),(l()(),e.qb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["First, since we are going to be creating custom component styles the first step is to remove all of the Clarity CSS from your build process."])),(l()(),e.qb(9,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(10,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(11,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add or modify your application's main.scss file"])),(l()(),e.qb(13,0,null,0,10,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Next, we need to include the Clarity dependencies and component styles. This example shows one way of adding the Clarity dependencies and component styles based on standard "])),(l()(),e.qb(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["npm"])),(l()(),e.Ib(-1,null,[" installation into a "])),(l()(),e.qb(18,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["node_modules"])),(l()(),e.Ib(-1,null,[" directory of the project. In this example, the "])),(l()(),e.qb(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["styles.scss"])),(l()(),e.Ib(-1,null,[" file lives at the top of a standard angular-cli application src folder."])),(l()(),e.qb(24,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(25,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(26,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add a custom theme file"])),(l()(),e.qb(28,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Finally, sandwich your custom theme file between the Clarity dependency SCSS and the Clarity component SCSS. It will hold the values you choose to overwrite as you customize your theme. In this example the "])),(l()(),e.qb(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["styles.scss"])),(l()(),e.Ib(-1,null,[" file lives at the top of a standard angular-cli application src folder."])),(l()(),e.qb(33,0,null,0,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(34,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null)],function(l,n){var u=n.component;l(n,10,0,u.uiNoNodeImports,!0),l(n,25,0,u.uiCustomClarityDarkScssFile,!0),l(n,34,0,u.uiCustomClarityDarkThemeScssFile,!0)},null)}function k(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,253,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,r.b,r.a)),e.pb(1,49152,null,0,b.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.qb(2,0,null,0,251,"article",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[["class","component-summary"],["id","a-signpost-description"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Themes help you customize the look and feel of your application."])),(l()(),e.qb(5,0,null,null,174,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Establish your brand with Clarity"])),(l()(),e.qb(8,0,null,null,32,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,10,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,9,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,0,"img",[["alt","Color Theming"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-branding.svg"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Match a company or client\u2019s unique brand identity with "])),(l()(),e.qb(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["color theming"])),(l()(),e.Ib(-1,null,[" at "])),(l()(),e.qb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["many different levels of granularity"])),(l()(),e.Ib(-1,null,[" allowing for customization at an application or component level. "])),(l()(),e.qb(20,0,null,null,9,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.qb(21,0,null,null,8,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,0,"img",[["alt","Clarity Icons API"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-icons.svg"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,6,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Font customization"])),(l()(),e.Ib(-1,null,[" and the "])),(l()(),e.qb(27,0,null,null,1,"a",[["href","/icons/api"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Clarity Icons API"])),(l()(),e.Ib(-1,null,[" offer the power to reinforce identity at the most fundamental levels of user experience. "])),(l()(),e.qb(30,0,null,null,10,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,9,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,0,"img",[["alt","Theme information density"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-info.svg"]],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Depending on users\u2019 expectations, different applications may require different degrees of "])),(l()(),e.qb(35,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["information density"])),(l()(),e.Ib(-1,null,[". Clarity themes can be adjusted to make an application as "])),(l()(),e.qb(38,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["sparse or compact"])),(l()(),e.Ib(-1,null,[" as it needs to be. "])),(l()(),e.qb(41,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default Themes"])),(l()(),e.qb(43,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Clarity offers two default themes \u2014 light and dark. These themes can be used without modification to optimize user experience or they can be used as a guideline for creating custom themes in Clarity. "])),(l()(),e.qb(45,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(46,0,null,null,15,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,14,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(48,0,null,null,0,"img",[["alt","Light Theme"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-light.svg"]],null,null,null,null,null)),(l()(),e.qb(49,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Light Theme"])),(l()(),e.qb(51,0,null,null,10,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Light theme is Clarity\u2019s default. It is best suited to "])),(l()(),e.qb(53,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["content-rich applications"])),(l()(),e.Ib(-1,null,[" where users will be working with the application in "])),(l()(),e.qb(56,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["well-lit conditions"])),(l()(),e.Ib(-1,null,[" for brief periods of time throughout the day. Light theme can help prevent eye strain in applications where a user is expected to "])),(l()(),e.qb(59,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["read a large amount of content"])),(l()(),e.Ib(-1,null,[" \u2014 like documentation or a blog. "])),(l()(),e.qb(62,0,null,null,12,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,11,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(64,0,null,null,0,"img",[["alt","Dark Theme"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-dark.svg"]],null,null,null,null,null)),(l()(),e.qb(65,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Dark Theme"])),(l()(),e.qb(67,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Dark theme is best suited for applications that are "])),(l()(),e.qb(69,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["content-sparse, yet highly interactive"])),(l()(),e.Ib(-1,null,[". A dark theme can help with eye strain if a user works with an application over a long span of time but in a way that requires "])),(l()(),e.qb(72,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["focus but not a great amount of reading"])),(l()(),e.Ib(-1,null,[". "])),(l()(),e.qb(75,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Theme Guidelines"])),(l()(),e.qb(77,0,null,null,7,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Themes offer a great deal of flexibility \u2014 which can be both a good and bad thing. The Clarity team has put continued effort towards "])),(l()(),e.qb(79,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["accessibility"])),(l()(),e.Ib(-1,null,[" and the intentional "])),(l()(),e.qb(82,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["use of color"])),(l()(),e.Ib(-1,null,[" so that our end users can add great value to their products with minimal investment. "])),(l()(),e.qb(85,0,null,null,3,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.qb(86,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["But theming can put some of those benefits at risk"])),(l()(),e.Ib(-1,null,[". Please review the following guidelines before building a custom theme. "])),(l()(),e.qb(89,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Use color responsibly"])),(l()(),e.qb(91,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(92,0,null,null,7,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(93,0,null,null,6,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(94,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Use colors that reinforce your brand but in a way that is pleasing. "])),(l()(),e.qb(96,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Save saturated or bright colors in your palette for highlights. And use them sparingly to highlight actions or content. "])),(l()(),e.qb(98,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Harsh colors can cause eye strain for users over time. Avoid using too many bright, neon colors and avoid using highly saturated/bold colors as backgrounds over large areas of content. "])),(l()(),e.qb(100,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(101,0,null,null,8,"div",[["class","clrweb-DoxMedia is-do-block"]],null,null,null,null,null)),(l()(),e.qb(102,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.qb(103,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.qb(104,0,null,null,0,"img",[["alt","Do use brand colors in a pleasing manner"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-responsability.svg"]],null,null,null,null,null)),(l()(),e.qb(105,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(106,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Do"])),(l()(),e.qb(108,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Use brand colors in a pleasing manner, saving bold or saturated colors for highlights or calls to action. "])),(l()(),e.qb(110,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Communicate with color"])),(l()(),e.qb(112,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(113,0,null,null,3,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(114,0,null,null,2,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(115,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Consider using color to communicate meaning to users. Using colors like red for warning or danger and green for success or preferred actions reinforces your user experience. "])),(l()(),e.qb(117,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(118,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.qb(119,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.qb(120,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.qb(121,0,null,null,0,"img",[["alt","Don't use brand colors irrespective of what the color communicates to users."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-comms.svg"]],null,null,null,null,null)),(l()(),e.qb(122,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(123,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Don't"])),(l()(),e.qb(125,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Use brand colors irrespective of what the color communicates to users. "])),(l()(),e.qb(127,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Create visual hierarchy"])),(l()(),e.qb(129,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Darker colors recede while lighter and brighter colors push forward. Be mindful of this when working with brand colors to create a custom theme. "])),(l()(),e.qb(131,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(132,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(133,0,null,null,8,"div",[["class","clrweb-DoxMedia is-do-block"]],null,null,null,null,null)),(l()(),e.qb(134,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.qb(135,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.qb(136,0,null,null,0,"img",[["alt","Use light and dark colors to reinforce visual hierarchy and draw users\u2019 \n                                focus."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-visual-do.svg"]],null,null,null,null,null)),(l()(),e.qb(137,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(138,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Do"])),(l()(),e.qb(140,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Use light and dark colors to reinforce visual hierarchy and draw users\u2019 focus. "])),(l()(),e.qb(142,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(143,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.qb(144,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.qb(145,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.qb(146,0,null,null,0,"img",[["alt","Don't draw attention to the wrong items with the use of color."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-visual-dont.svg"]],null,null,null,null,null)),(l()(),e.qb(147,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(148,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Don't"])),(l()(),e.qb(150,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Draw attention to the wrong items with the use of color. In this example, the content of the cards and datagrid recede into the background while the sidenav and header unnecessarily draw the user\u2019s attention. "])),(l()(),e.qb(152,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Avoid extreme color combinations"])),(l()(),e.qb(154,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(155,0,null,null,3,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(156,0,null,null,2,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.qb(157,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Avoid extreme light-on-dark and dark-on-light color combinations that could contribute to eye strain. "])),(l()(),e.qb(159,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.qb(160,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.qb(161,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.qb(162,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.qb(163,0,null,null,0,"img",[["alt","Don't Use color combinations that may cause eye-strain."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-color-combos.svg"]],null,null,null,null,null)),(l()(),e.qb(164,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.qb(165,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Don't"])),(l()(),e.qb(167,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Use color combinations that may cause eye-strain. "])),(l()(),e.qb(169,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Be Accessible"])),(l()(),e.qb(171,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Clarity\u2019s color palette is WCAG AA compliant, meaning all color combinations of text-on-background meet the standard for color accessiblity for our users. Use the WebAIM Color Contrast Checker tool to test text and background colors when deciding how a brand\u2019s color palette will be used in an application. "])),(l()(),e.qb(173,0,null,null,6,"div",[["style","margin: 48px 0;"]],null,null,null,null,null)),(l()(),e.qb(174,0,null,null,5,"div",[["class","clrweb-DoxBookmark hidden-sm-down"]],null,null,null,null,null)),(l()(),e.qb(175,0,null,null,2,"div",[["class","clrweb-DoxBookmark-bookmark"],["style","color: #205F00"]],null,null,null,null,null)),(l()(),e.qb(176,0,null,null,1,"clr-icon",[["shape","bookmark"]],null,null,null,null,null)),e.pb(177,16384,null,0,i.fb,[],null,null),(l()(),e.qb(178,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" All of the text/background combinations on the Clarity Color Palette page are tested for WCAG AA compliance. "])),(l()(),e.qb(180,0,null,null,73,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.qb(181,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Code & Examples"])),(l()(),e.qb(183,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Clarity UI ships with two css files, "])),(l()(),e.qb(185,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clr-ui.min.css"])),(l()(),e.Ib(-1,null,[" for the light theme and "])),(l()(),e.qb(188,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clr-ui-dark.min.css"])),(l()(),e.Ib(-1,null,[" for the dark theme. You can consume either one of these files and have a fully light or dark-themed Clarity application as part of typical build process. If you already use clr-ui in your project there is nothing to do. If you want to switch over to the dark theme use one of the examples below to modify your build process and consume the "])),(l()(),e.qb(191,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clr-ui-dark.min.css"])),(l()(),e.Ib(-1,null,[" code."])),(l()(),e.qb(194,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Angular CLI Builds"])),(l()(),e.qb(196,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Consume the dark theme code in "])),(l()(),e.qb(198,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" clr-ui-dark.min.css"])),(l()(),e.Ib(-1,null,[" by adding it to your styles array in the "])),(l()(),e.qb(201,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".angular-cli.json"])),(l()(),e.Ib(-1,null,[" file. "])),(l()(),e.qb(204,0,null,null,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(205,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(206,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Webpack Builds"])),(l()(),e.qb(208,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Modify your "])),(l()(),e.qb(210,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["webpack.config.js"])),(l()(),e.Ib(-1,null,[" entry styles to consume the new "])),(l()(),e.qb(213,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clr-ui-dark.min.css"])),(l()(),e.qb(215,0,null,null,1,"clr-code-snippet",[],null,null,null,a.b,a.a)),e.pb(216,4243456,null,0,c.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.qb(217,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Custom Themes"])),(l()(),e.qb(219,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["If you need to customize components for you application we suggest starting with either the light theme or the dark theme and override variables from there to suite your customizations."])),(l()(),e.qb(221,0,null,null,32,"clr-tabs",[],null,null,null,o.Zb,o.V)),e.Fb(512,null,i.ye,i.ye,[]),e.Fb(512,null,i.Md,i.Md,[]),e.Fb(512,null,i.ie,i.ie,[]),e.Fb(1024,null,i.fe,i.ge,[]),e.pb(226,1097728,null,2,i.ec,[i.ye,i.Md,i.ie,i.fe,i.s],null,null),e.Gb(603979776,1,{tabLinkDirectives:1}),e.Gb(603979776,2,{tabContents:1}),e.pb(229,8404992,null,0,i.je,[],null,null),(l()(),e.qb(230,0,null,null,11,"clr-tab",[],null,null,null,o.Yb,o.T)),e.Fb(1024,null,i.we,i.xe,[]),e.pb(232,180224,null,2,i.ac,[i.ye,i.we,i.ie],null,null),e.Gb(335544320,3,{tabLink:0}),e.Gb(603979776,4,{tabContent:0}),e.Fb(512,null,i.ee,i.ee,[]),(l()(),e.qb(236,16777216,null,0,3,"button",[["clrTabLink",""],["role","tab"],["type","button"]],[[8,"id",0],[1,"aria-selected",0],[1,"aria-hidden",0],[1,"aria-controls",0],[2,"btn",null],[2,"btn-link",null],[2,"nav-link",null],[2,"nav-item",null],[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,237).activate()&&t),t},null,null)),e.pb(237,16384,[[3,4],[1,4]],0,i.cc,[i.ye,i.we,i.ee,e.k,e.j,e.Q,i.fe],null,null),e.pb(238,2244608,null,0,i.ke,[e.h,[2,i.je],i.we,i.ye],null,null),(l()(),e.Ib(-1,null,["Light Theme Base"])),(l()(),e.ib(16777216,null,0,1,null,C)),e.pb(241,147456,null,0,i.hb,[i.ye,i.we,e.N,e.Q],{active:[0,"active"]},null),(l()(),e.qb(242,0,null,null,11,"clr-tab",[],null,null,null,o.Yb,o.T)),e.Fb(1024,null,i.we,i.xe,[]),e.pb(244,180224,null,2,i.ac,[i.ye,i.we,i.ie],null,null),e.Gb(335544320,5,{tabLink:0}),e.Gb(603979776,6,{tabContent:0}),e.Fb(512,null,i.ee,i.ee,[]),(l()(),e.qb(248,16777216,null,0,3,"button",[["clrTabLink",""],["role","tab"],["type","button"]],[[8,"id",0],[1,"aria-selected",0],[1,"aria-hidden",0],[1,"aria-controls",0],[2,"btn",null],[2,"btn-link",null],[2,"nav-link",null],[2,"nav-item",null],[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,249).activate()&&t),t},null,null)),e.pb(249,16384,[[5,4],[1,4]],0,i.cc,[i.ye,i.we,i.ee,e.k,e.j,e.Q,i.fe],null,null),e.pb(250,2244608,null,0,i.ke,[e.h,[2,i.je],i.we,i.ye],null,null),(l()(),e.Ib(-1,null,["Dark Theme Base"])),(l()(),e.ib(16777216,null,0,1,null,x)),e.pb(253,147456,null,0,i.hb,[i.ye,i.we,e.N,e.Q],{active:[0,"active"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,205,0,u.uiNodeImports,!0),l(n,216,0,u.uiWebpackImports,!0),l(n,241,0,null),l(n,253,0,null)},function(l,n){l(n,0,0,!0),l(n,236,0,e.Ab(n,237).tabLinkId,e.Ab(n,237).active,!1,e.Ab(n,237).ariaControls,!0,!e.Ab(n,237).inOverflow,!e.Ab(n,237).inOverflow,!e.Ab(n,237).inOverflow,e.Ab(n,237).active),l(n,248,0,e.Ab(n,249).tabLinkId,e.Ab(n,249).active,!1,e.Ab(n,249).ariaControls,!0,!e.Ab(n,249).inOverflow,!e.Ab(n,249).inOverflow,!e.Ab(n,249).inOverflow,e.Ab(n,249).active)})}function S(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"clr-themes-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,k,v)),e.pb(1,49152,null,0,f,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var D=e.mb("clr-themes-demo",f,S,{},{},[]),M=u("Ip0R"),A=u("gIcY"),T=u("ZYCi"),F=u("XPsC"),P=u("JsA7");u.d(n,"ThemesDemoModuleNgFactory",function(){return L});var L=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[o.uc,o.a,o.b,o.d,o.e,o.f,o.g,o.h,o.c,o.qc,o.rc,o.sc,o.tc,s.a,D]],[3,e.j],e.x]),e.yb(4608,M.q,M.p,[e.u,[2,M.I]]),e.yb(4608,A.C,A.C,[]),e.yb(1073742336,M.c,M.c,[]),e.yb(1073742336,A.z,A.z,[]),e.yb(1073742336,A.k,A.k,[]),e.yb(1073742336,i.gb,i.gb,[]),e.yb(1073742336,i.Pc,i.Pc,[]),e.yb(1073742336,i.ve,i.ve,[]),e.yb(1073742336,i.Y,i.Y,[]),e.yb(1073742336,i.d,i.d,[]),e.yb(1073742336,i.ab,i.ab,[]),e.yb(1073742336,i.r,i.r,[]),e.yb(1073742336,i.He,i.He,[]),e.yb(1073742336,i.p,i.p,[]),e.yb(1073742336,i.Rc,i.Rc,[]),e.yb(1073742336,i.O,i.O,[]),e.yb(1073742336,i.nb,i.nb,[]),e.yb(1073742336,i.Eb,i.Eb,[]),e.yb(1073742336,i.Ib,i.Ib,[]),e.yb(1073742336,i.Nb,i.Nb,[]),e.yb(1073742336,i.ic,i.ic,[]),e.yb(1073742336,i.db,i.db,[]),e.yb(1073742336,i.tb,i.tb,[]),e.yb(1073742336,i.bd,i.bd,[]),e.yb(1073742336,i.S,i.S,[]),e.yb(1073742336,i.Vd,i.Vd,[]),e.yb(1073742336,i.G,i.G,[]),e.yb(1073742336,i.Zb,i.Zb,[]),e.yb(1073742336,i.pc,i.pc,[]),e.yb(1073742336,i.v,i.v,[]),e.yb(1073742336,i.yb,i.yb,[]),e.yb(1073742336,i.sb,i.sb,[]),e.yb(1073742336,i.i,i.i,[]),e.yb(1073742336,i.j,i.j,[]),e.yb(1073742336,i.wb,i.wb,[]),e.yb(1073742336,i.Bb,i.Bb,[]),e.yb(1073742336,i.ce,i.ce,[]),e.yb(1073742336,i.fc,i.fc,[]),e.yb(1073742336,i.vc,i.vc,[]),e.yb(1073742336,i.pb,i.pb,[]),e.yb(1073742336,i.Rb,i.Rb,[]),e.yb(1073742336,i.lc,i.lc,[]),e.yb(1073742336,i.Fb,i.Fb,[]),e.yb(1073742336,i.Ac,i.Ac,[]),e.yb(1073742336,i.a,i.a,[]),e.yb(1073742336,T.p,T.p,[[2,T.v],[2,T.m]]),e.yb(1073742336,F.a,F.a,[]),e.yb(1073742336,P.a,P.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,T.k,function(){return[[{path:"",component:f}]]},[])])})}}]);