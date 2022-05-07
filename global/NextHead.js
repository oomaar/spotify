import Head from "next/head";

export const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
