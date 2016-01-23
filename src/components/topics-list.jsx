var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Topics = React.createClass({
  mixins: [
      Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState() {
    return {
      topics: []
    }
  },
  componentWillMount() {
    Actions.getTopics()

  },
  render() {
    return (
      <div className="list-group">
        {this.renderTopics()}
      </div>
    )
  },
  renderTopics() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return (
        <Link  to={"topics/" + topic.id }
              key={topic.id} className='list-group-item'>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      )
    })
  },
  onChange(event, topics) {

    this.setState({
      topics:topics
    })
  }
});

module.exports = Topics;