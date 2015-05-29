function Note(){
	this.id = Date.now();
	this.header = "";
	this.contents = [];
	this.labels = [];
	this.timestamp = this.getAddedDate();
}

Note.prototype.getAddedDate = function () {
	var date = new Date(),
		day = date.getDay(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

	return day + '.' + month + '.' + year;
}


Polymer({
	created: function() {
      this.datas = [];
    },
    datasLoaded: function() {
      // Make a copy of the loaded data
      this.datas = this.$.userData.response.slice(0);
      var note = new Note();
      console.log(note);
    },
    requestFailed: function(){
    	console.error("Datas was not found.");
    },
    setFavorite: function(id, isFavorite) {
      // no service backend, just log the change

      // console.log("This in service.setFavorite", this);
      console.log('Favorite changed: ' + id + ", now: " + isFavorite);

    }
});
