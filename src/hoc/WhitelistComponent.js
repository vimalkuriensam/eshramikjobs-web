import React, { Fragment, useEffect, useState } from "react";
import history from "../utils/history";

const WhitelistComponent = (WrappedComponent) => (_listings) => (props) => {
  const { location } = history;
  useEffect(() => {
    if (
      _listings.some((listing) =>
        listing.includes(location.pathname.split("/").pop())
      )
    )
      setIsWhiteListed(true);
    else setIsWhiteListed(false);
  }, [location.pathname.split("/").pop()]);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  return (
    <Fragment>
      {isWhiteListed ? <WrappedComponent {...props} /> : null}
    </Fragment>
  );
};

export default WhitelistComponent;
