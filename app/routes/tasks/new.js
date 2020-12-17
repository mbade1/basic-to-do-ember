import Route from '@ember/routing/route';

export default class TasksNewRoute extends Route {
    actions = {
        addTask: function() {
            var title = this.get('title');
            var description = this.get('description');
            var date = this.get('date');

            debugger;
            alert(title)
            alert(description)
            alert(date)
        }
    }
}
