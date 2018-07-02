import Controller from '@ember/controller';

export default Controller.extend({
	isSaving: false,
	actions: {
		saveStudent (student) {
			this.set('isSaving', true);
			student.save();
		},
	}
});
