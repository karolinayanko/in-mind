
Polymer({
	favoriteNote: function(event, detail, sender) {
      this.favorite = !this.favorite;
      this.fire('favorite-tap');

      console.log(this, this.favorite);
    }
});
