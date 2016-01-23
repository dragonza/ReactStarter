var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions/actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function(){
    return Api.get('topics/defaults')
        .then(function(json){
          this.topics = json.data;
          this.triggerChange();
        }.bind(this));
  },
  triggerChange() {
    this.trigger('change', this.topics)
  }
});

