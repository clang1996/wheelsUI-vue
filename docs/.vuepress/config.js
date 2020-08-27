module.exports = {
	base:'/wheelsUI-vue/',
	title:'Wheels UI',
	description:'一套基于VUE开发的易用UI框架',
	themeConfig:{
		nav:[
			{text:'主页', link:'/'},
			{text:'指南', link:'/guide/'},
			{text:'链接', link:'https://google.com'},
		],
		sidebar:[
			{
				title:'入门',
				collapsable:false, // 可选的, 默认值是 true,
				children:[
					'/introduce/'
				]
			},
			{
				title:'组件',   // 必要的
				collapsable:false, // 可选的, 默认值是 true,
				children:[
					'/components/button.md',
					'/components/tabs',
					'/components/input',
					'/components/grid',
					'/components/layout',
					'/components/toast',
					'/components/collapse',
				]
			},
		]
	}
}

