import FullWidthLayout from '../../hocs/FullWidthLayout';
import { connect } from 'react-redux';

function Home() {
  return <FullWidthLayout>Home</FullWidthLayout>;
}

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {})(Home);
