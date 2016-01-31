var React = require('react');
var Header = require('./header');
var TopicList = require('./topics-list');



var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.content()}
      </div>
    )
  },
  content() {
    if (this.props.children) {
      return this.props.children
    } else {
      return <TopicList />
    }
  }
});

module.exports = Main;