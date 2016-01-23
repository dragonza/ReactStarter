var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions/actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages(topicId) {
    Api.get('topics/' + topicId)
      .then ((json) => {
      this.images = json.data;
      this.triggerChange();
    })
  },
  triggerChange() {
    this.trigger('change', this.images)
  }

});
