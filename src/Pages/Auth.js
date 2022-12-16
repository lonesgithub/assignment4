//Auth is higher order function, passes inn component that shall only be visible if logged in
const Auth = (Component) => (props) => {
  const isAuthenticated = true; //should be a accesstoken attached to localstorage or cookie etc

  if (isAuthenticated) {
    return <Component {...props}></Component>; //returns what is passed into the Higher Order function (the Component) and that again forwards the props
  } else {
    return (
      <div>
        <p>User is not logged in</p>
      </div>
    );
  }
};

export default Auth;
