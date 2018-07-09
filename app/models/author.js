import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	nickname: DS.attr('string'),
	age: DS.attr('number'),

	musicBooks: DS.hasMany('musicBook'),

	fullName: computed('firstName', 'lastName', 'nickname', function () {
		return `${this.get('firstName')} ${this.get('lastName')} (${this.get('nickname')})`;
	})
});
