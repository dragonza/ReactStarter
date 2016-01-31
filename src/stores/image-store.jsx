var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages(topicId) {
    Api.get('topics/' + topicId)
      .then ((json) => {
      this.images = _.reject(json.data, (image) => {
        return image.is_album
      });
      this.triggerChange();
    })
  },
  triggerChange() {
    this.trigger('change' ,this.images)
  }
});
