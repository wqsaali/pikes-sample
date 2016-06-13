/* Global React */

var RailsReact = React.createClass({
  render: function() {
    return (<div className="well text-center"><h1>Rails + React</h1></div>);
  }
  });


/* Local React */

var App = React.createClass({
    getInitialState: function() {
      return { user: this.props.user, sign_in: this.props.sign_in };
    },
    render:function(){
    if(this.state.user){
      return <User user = { JSON.parse(this.props.user) } />
    }
    else {
    
      }
    }
});
