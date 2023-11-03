import React from 'react'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      );
    }

export default PrivateRoute