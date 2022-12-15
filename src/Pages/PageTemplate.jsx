//Auth is higher order function, passes inn component
const PageTemplate = (Component) => (props) => {
  //   const isAuthenticated = true; //should be a accesstoken attached to localstorage or cookie etc

  //   if (isAuthenticated) {
  //     return (
  //       <>
  //         <main className="p-5 container-fluid">
  //           <Component {...props}></Component>;
  //           {/* returns what is passed into the
  //             Higher Order function (the Component) and that again forwards the
  //             props*/}
  //         </main>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>User is not logged in</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    <main className="container-fluid pagetemplate">
      <Component {...props}> </Component>
    </main>
  );
};
export default PageTemplate;
