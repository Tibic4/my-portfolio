import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Alton Vieira is full stack web developer"
      />
      <meta
        name="keywords"
        content="alton, alton vieira, alton, web developer, alton web developer, alton developer, alton portfolio"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Alton Vieira',
};
