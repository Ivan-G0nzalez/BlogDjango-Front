import FullWidthLayout from '../../hocs/FullWidthLayout';
import { connect } from 'react-redux';
import { get_blog_list, get_blog_list_page } from '../../redux/action/blog';

import { useState, useEffect } from 'react';

function Home({ get_blog_list, get_blog_list_page }: any) {
  useEffect(() => {
    get_blog_list();
  }, []);

  return <FullWidthLayout>Home</FullWidthLayout>;
}

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Home);
