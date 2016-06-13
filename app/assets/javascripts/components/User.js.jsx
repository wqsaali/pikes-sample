var User = React.createClass({
getInitialState: function() {
  return {user: this.props.user};
},
  handleSignOutClick: function(e) {
  e.preventDefault();
    $.ajax({
      method: "DELETE",
      url: "/users/sign_out.json",
      data: {
        user: {
          email: this.props.email,
        },
        authenticity_token: Functions.getMetaContent("csrf-token")
      },
      success: function(data){
        this.setState({user: null});
      }.bind(this)
    });
  },
  render:function(){
    if (this.state.user){
      return (
        <div className="text-center">
          <h4>{ this.props.user.email } is already signed in.</h4>
          <span className="form-group">
            <form ref="form" className="sign-out-form " acceptCharset="UTF-8" method="delete" onSubmit={ this.handleSignOutClick }>
            <p><button className="btn btn-danger btn-lg btn-class" type="submit">Sign Out</button></p>
            </form>
          </span>
        </div>
      )}
  else {
     return (
     <SignInForm />
     )
    }
  }
});
