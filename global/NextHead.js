import Head from "next/head";

export const NextHead = ({ title }) => {
  return (
    <Head>
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

      {/* Dynamic Title */}
      <title>{title}</title>
    </Head>
  );
};
