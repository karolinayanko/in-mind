
		Polymer({
			created: function() {
		      this.datas = [];
		    },
		    datasLoaded: function() {
		      // Make a copy of the loaded data
		      this.datas = this.$.ajax.response.slice(0);
		    }
		});
