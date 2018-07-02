import Component from '@ember/component';

export default Component.extend({
	book: null,
	onBookDelete () {
		// Override me...
	},
	actions: {
		deleteBook (book) {
			this.onBookDelete(book);
		}
	}
});
