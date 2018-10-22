import React from 'react';
import HttpError from "./HttpError";

class HttpErrorNotFound extends React.PureComponent {
  render() {
    const status = 404;
    const description = `Let's try again`;
    const linkTo="/";

    return (
      <HttpError
        status={status}
        description={description}
        linkTo={linkTo}
      />
    );
  }

}


export default HttpErrorNotFound;
