import FullWidthLayout from '../../../hocs/FullWidthLayout';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_blog } from '../../../redux/action/blog';

import { useState, useEffect } from 'react';

function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    get_blog(slug);
  }, []);

  return <FullWidthLayout>Home</FullWidthLayout>;
}

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {})(BlogPost);
