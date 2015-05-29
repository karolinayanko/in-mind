Polymer({
  publish: {
    notes: null
  },
  willPrepare: function() {
    this.super();

    // Reset the scroller so every time the user comes to the add page
    // they see the top of the form
    this.$.headerPanel.scroller.scrollTop = 0;
  },
  goBack: function(){
  	var pages = document.querySelector('#pages');

  	pages.selected = 0;
  }
});