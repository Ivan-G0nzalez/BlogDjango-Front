import { connect } from 'react-redux';
import Footer from '../components/navigation/Footer';
import NavBar from '../components/navigation/NavBar';

const FullWidthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <NavBar />
      {children} <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {})(FullWidthLayout);
