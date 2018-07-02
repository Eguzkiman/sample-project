import Route from '@ember/routing/route';

export default Route.extend({
	model (params) {
		return this.store.findRecord('student', params.id);
	},
	actions: {
		willTransition (transition) {
			let student = this.get('controller.model');
			student.rollbackAttributes();
		}
	}
});
