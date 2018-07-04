import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	currentUser: service(),
	actions: {
		login (username, password) {
			if (username === 'Eguzki' && password === 'es cool') {
				this.get('currentUser').set('username', username);
				this.transitionTo('list');
			} else {
				alert('nel pastel')
			}
		}
	}
});
