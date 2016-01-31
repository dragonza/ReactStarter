var React = require('react');
var Reflux = require('reflux');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var ImageStore =require('../stores/image-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  render(){
    return (
        <div>test</div>
    )
  },
  onChange() {

  }

});