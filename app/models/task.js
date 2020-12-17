import Model from '@ember-data/model';
import DS from 'ember-data';

export default class TaskModel extends Model {
    // title: DS.attr('string'),
    // description: DS.attr('string'),
    // date: DS.attr('date'),
    // created: DS.attr('string', {
    //     defaultValue: function() {
    //         return new Date()
    //     }
    // })

    //Create New Task
    // var newTask = this.store.createRecord('task', {
    //     title: title,
    //     description: description,
    //     date: new Date(date)
    // })

    //Save to Database
    // newTask.save();

    //Clear Form
    // this.setProperties({
    //     title: '',
    //     description: '',
    //     date: ''
    // })
}
