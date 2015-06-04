Polymer({
	// медот обробки події натискання на кнопку favorite
	// запускає подію favorite-tap у data-list
	favoriteNote: function(event, detail, sender) {
		this.favorite = !this.favorite;
		this.fire('favorite-tap');

	},
	// метод обробки події натискання на кнопку remove
	// запускає подію remove-tap у data-list
	removeNote: function(event, detail, sender){
		console.log("remove btn", this);
		this.fire('remove-tap');
		// this.style.display = "none";
	}
});
