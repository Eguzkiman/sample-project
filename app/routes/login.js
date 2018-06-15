import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		login (username, password) {
			if (username === 'Eguzki' && password === 'es cool') {
				this.transitionTo('list');
			} else {
				alert('nel pastel')
			}
		}
	}
});
