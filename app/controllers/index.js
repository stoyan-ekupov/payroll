import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterByName(param) {
            if (param !== '' && param.length >= 2) {
                return this.get('store').query('employee', { name: param });
            } else {
                return this.get('store').findAll('employee');
            }
        }
    }
});
