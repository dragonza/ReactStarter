var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('../components/image-preview')

module.exports = React.createClass({
  mixins: [
      Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState(){
    return {
      images:[]
    }

  },
  componentWillMount(){
    Actions.getImages(this.props.params.id);

  },

  componentWillReceiveProps(nextProps){
    if (this.props.params.id != nextProps.params.id){
      Actions.getImages(nextProps.params.id);
    }
  },
  renderImages() {

    return this.state.images.slice(0,20).map(function(image) {
      return <ImagePreview key={image.id} {...image}/>
    })
  },
  render() {

    return (
        <div className='topic'>
          {this.renderImages()}</div>
    )

  },
  onChange(events,images) {
    this.setState({
      images:images
    })
  }
});