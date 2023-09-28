import BlogList from '../../../components/blog/BlogList';
import Header from '../../../components/blog/Header';
import FullWidthLayout from '../../../hocs/FullWidthLayout';
import { connect } from 'react-redux';
import { get_blog_list, get_blog_list_page } from '../../../redux/action/blog';

function Blog() {
  return (
    <FullWidthLayout>
      <Header />
      <BlogList />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state: any) => ({
  blog_list: state.blog.blog_list,
});

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Blog);
