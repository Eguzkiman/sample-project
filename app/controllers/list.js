import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onBookDelete (book) {
			book.destroyRecord();
		}
	}
});
