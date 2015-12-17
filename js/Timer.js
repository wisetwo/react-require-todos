define(['react'], function (React) {
  /**
   * <TimeMessage elapsed={100} />
   */
  var TimeMessage = React.createClass({
    displayName: 'TimeMessage',

    render: function () {
      var elapsed = Math.round(this.props.elapsed / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');

      // JSX code
      return React.createElement(
        'p',
        null,
        'React has been successfully running for ',
        seconds,
        ' seconds.'
      );
    }
  });

  /**
   * <Timer start={aDate} />
   */
  var Timer = React.createClass({
    displayName: 'Timer',

    getInitialState: function () {
      return { now: new Date() };
    },

    componentDidMount: function () {
      var that = this;
      setInterval(function () {
        that.setState({ now: new Date() });
      }, 50);
    },

    render: function () {
      // JSX code
      var elapsed = this.state.now.getTime() - this.props.start.getTime();
      return React.createElement(
        'div',
        null,
        ' hello there!',
        React.createElement('br', null),
        ' ',
        React.createElement(TimeMessage, { elapsed: elapsed }),
        ' '
      );
    }
  });

  return Timer;
});