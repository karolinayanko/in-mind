function Note(obj){
	this.id = Date.now();
	this.type = "note";
	this.header = obj ? obj.header : "";
	this.contents = obj ? obj.contents : [];
	this.labels = obj ? obj.labels : [];
	this.timestamp = new Date();
	this.favorite = obj ? obj.favorite : false;
}

Note.prototype.getCreatedDate = function () {
	var date = new Date(),
		day = date.getDay(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

	return day + '.' + month + '.' + year;
}

Note.prototype.setNotificateDate = function () {
	// body...
}

function updateData (service){
	chrome.storage.sync.get('notes', function(data){

		if (!data)
			return;

		service.datas = data.notes || [];

		console.log('updating data is working');
	});
}

Polymer({
	created: function() {

		var service = this;

		this.datas = [];

		updateData(service);

		console.log("created context ", this);

	},
	datasLoaded: function() {
		console.log("data is send")
	},
	requestFailed: function(){
		console.error("Datas was not found.");
	},
	setFavorite: function(id, isFavorite) {
		// no service backend, just log the change
		var found = this.datas.filter(function(index, el){
			return el.id == id;
		});

		if (found && found.length > 0){
			found[0].favorite = isFavorite;
		}

		chrome.storage.sync.set({'notes':this.datas});

		console.log('Favorite changed: ' + id + ", now: " + isFavorite);

	},
	addNote: function(note){
		this.datas.push(note);

		chrome.storage.sync.set({'notes': this.datas});

		console.log("addNote context ", this);

		updateData(this);
	}

});
