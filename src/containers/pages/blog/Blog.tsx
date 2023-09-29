import BlogList from '../../../components/blog/BlogList';
import Header from '../../../components/blog/Header';
import FullWidthLayout from '../../../hocs/FullWidthLayout';
import { connect } from 'react-redux';
import { get_blog_list, get_blog_list_page } from '../../../redux/action/blog';
import { IBlogStage } from '../../../interface/blogInterfaces';

function Blog(): JSX.Element {
  return (
    <FullWidthLayout>
      <Header />
      <BlogList />
    </FullWidthLayout>
  );
}

interface IProps {
  blog: {
    blog_list: IBlogStage[];
    post: string;
    count: number;
    next: string | null;
    previous: string | null;
  };
}

const mapStateToProps = (state: IProps) => ({
  blog_list: state.blog.blog_list,
});

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Blog);
