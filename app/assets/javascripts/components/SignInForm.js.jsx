 var SignInForm = React.createClass({
    handleInputChange: function(ev) {
      // Get a deep clone of the component's state before the input change.
      var nextState = _.cloneDeep(this.state);
      //Update the state of the component
      nextState[ev.target.name] = ev.target.value;
      // Update the component's state with the new state
      this.setState(nextState);
    },
    getInitialState: function() {
      return {
        email: '',
        password: ''
      };
    },
    handleSignInClick: function(e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: "/users/sign_in.json",
        data: {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          authenticity_token: Functions.getMetaContent("csrf-token")
        },
        success: function(data){
          this.setState({user: data});
        }.bind(this),
        error: function (error) {
        $.notify({message: "Incorrect Details"},{ type: 'danger'});
          }.bind(this)
      });
    },

    render:function(){
    if (!this.state.user){
      return (
      <div className="form-group">
        <form ref="form" className="sign-in-form text-center" acceptCharset="UTF-8" method="post" onSubmit={ this.handleSignInClick }>
        <input type='email' name='email' className="form-control email-cell" placeholder='email'value={this.state.email} onChange={this.handleInputChange} />
        <input type='password' className="form-control password-cell" name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} />
        <p><button className="btn btn-primary btn-lg btn-class" type="submit">Sign In</button></p>
        </form>
      </div>
      )
    }
    else {
       return (
         <User user={this.state.user} />
       )
      }
    }
  });
