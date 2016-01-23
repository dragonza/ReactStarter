var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;
var Actions = require('../actions/actions');
var TopicStore = require('../stores/topic-store');

var Header = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState() {
    return {
      topics:[]
    }
  },
  componentWillMount(){
    Actions.getTopics();
  },
  render: function() {
    return (
        <nav className="navbar navbar-default header">
          <div className="container-fluid">
            <Link to="/" className='navbar-brand'>Imgur Brand</Link>

            <ul className="nav navbar-nav navbar-right">
              {this.renderTopics()}
            </ul>
          </div>
        </nav>
    )
  },
  renderTopics() {
    return this.state.topics.slice(0,4).map((topic) => {
      return (
          <li key={topic.id} >
            <Link activeClassName='active' to={"topics/" + topic.id} >
                {topic.name}
            </Link>
          </li>
      )
    })
  },
  onChange(events, topics) {
    this.setState({
      topics:topics
    })
  }
});

module.exports = Header;