Polymer({
	handleTab: function(event, detail, sender){
		this.$.dataList.show = this.$.sideMenu.selected;
		this.$.drawerPanel.selected = "main";
	},
	addNewNote: function(){
		var pages = document.querySelector('#pages');
		pages.selected = 2;
	},
	showNote: function(){
		var pages = document.querySelector('#pages');
		pages.selected = 1;
	}
});


