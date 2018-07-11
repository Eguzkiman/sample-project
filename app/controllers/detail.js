import Controller from '@ember/controller';
import getAverageGrade from 'eguzki-project/utils/get-average-grade';
import { computed } from '@ember/object';

export default Controller.extend({
	isSaving: false,

	grades: [100, 80, 90, 18, 100],

	average: computed("grades", function () {
		return getAverageGrade(this.get('grades'))
	}),

	actions: {
		save (book) {
			this.set('isSaving', true);
			book.save();
		},
		showAuthors () {
			this.toggleProperty('isChangingAuthor');
		},
		selectAuthor (author) {
			let book = this.get('model.musicBook');
			book.set('author', author);
		}
	}
});
