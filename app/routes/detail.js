import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model (params) {

		let musicBook = this.store.findRecord('musicBook', params.id);
		let authors = this.store.findAll('author');

		return hash({
			musicBook,
			authors
		});
	},

	actions: {
		willTransition (transition) {
			let book = this.get('controller.model');
			book.rollbackAttributes();
		}
	}
});
