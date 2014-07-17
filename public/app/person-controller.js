var PersonController = Backbone.View.extend({

	template: _.template("<li><%= name %> <%= gender %> <%= skype %> </li>"),

    render: function () {
	    this.model.fetch();
	    return this.template(this.model.toJSON());
	}
});
