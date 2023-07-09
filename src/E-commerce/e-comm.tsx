import BackgroundPaths from './Homepage/Stackedbackground';
import Header from './Homepage/Header';
import HomepageBody from './Homepage/HomepageBody';

function ecomm() {
  return (
    <div className="ecomm">
      <header className="ecomm-header">
        <BackgroundPaths />
        <Header />
        <HomepageBody />
      </header>
    </div>
  );
}

export default ecomm;