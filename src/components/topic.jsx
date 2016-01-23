var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
  mixins: [
      Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState(){
    return {
      images:{}
    }

  },
  componentWillMount(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps(nextProps){
    Actions.getImages(nextProps.params.id);
  },
  render() {
    return (
        <div>{this.renderImages()}</div>
    )

  },
  onChange(events, images) {
    this.setState({
      images:images
    })
  }
});