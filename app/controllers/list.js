import Controller from '@ember/controller';

export default Controller.extend({
	students: [{
		name: 'Eguzki',
		lastName: 'Aguirre'
	},{
		name: 'Yvone',
		lastName: 'Sánchez'
	},{
		name: 'Oscar',
		lastName: 'Osorio López'
	}],
	actions: {
		addStudent () {
			var students = this.get('students');
			students.pushObject({
				name: 'Sheriff',
				lastName: 'Farol'
			});
		},
		removeStudent (student) {
			var students = this.get('students');
			students.removeObject(student)
		}
	}
});
