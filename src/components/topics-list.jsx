var React = require('react');
var TopicStore = require('../stores/topic-store');

var Topics = React.createClass({
  getInitialState() {
    return {
      topics: []
    }
  },
  componentWillMount() {
    TopicStore.getTopics()
        .then(() =>{
          this.setState({
            topics: TopicStore.topics
          });
        });
  },
  render() {

    return (
        <div className="list-group">
          Topic List
          {this.renderTopics()}
        </div>
    )
  },
  renderTopics() {
    var key=0;

    return this.state.topics.map(function(topic) {
      return (
          <li key={key++}> {topic.name} </li>
      )
    })
  }
});

module.exports = Topics;