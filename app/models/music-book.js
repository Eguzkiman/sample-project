import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	imgUrl: DS.attr('string'),
	price: DS.attr('number'),

	author: DS.belongsTo('author'),
});
