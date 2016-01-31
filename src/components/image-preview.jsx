var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
module.exports = React.createClass({
  getInitialState(){
    return {
      hovering:false
    }
  },
  render(){

    return <Link to={'/images/'+ this.props.id}
        className='image-preview'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
      {this.props.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : null}
      {this.state.hovering ? this.inset() : null}
    </Link>
  },
  image() {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

    return <img src={link} alt=""/>
  },

  handleMouseEnter(){
    this.setState({
      hovering:true
    })
  },
  handleMouseLeave(){
    this.setState({
      hovering:false
    })
  },
  video() {
    return (
        <div>
          <video preload='auto'
                 autoPlay='autoplay'
                 loop='loop'
                  webkit-playinline>
            <source src={this.props.mp4} type='video/mp4'></source>

          </video>
        </div>
    )
  },
  icon(){
    return <span className="glyphicon glyphicon-play"></span>
  },
  inset(){
    return <div className="inset">
      Views: {this.props.views}
      <br/>
      Upvotes: {this.props.ups}
    </div>

  }

});