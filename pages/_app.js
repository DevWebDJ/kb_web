import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <Fragment >
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <Loading />
      )}
    </>
  );
}
