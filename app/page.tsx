import Feed from '@components/Feed';
import React from 'react';

const RootPage = () => {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompots</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to discover, create and
        share creative prompts
      </p>
      <Feed />
      {/* TODO: Add Feed components */}
    </section>
  );
};

export default RootPage;
