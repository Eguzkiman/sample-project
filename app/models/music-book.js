import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	imgUrl: DS.attr('string'),
	price: DS.attr('number'),
});
