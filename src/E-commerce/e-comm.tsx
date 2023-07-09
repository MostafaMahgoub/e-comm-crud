import BackgroundPaths from './Homepage/Stackedbackground';
import Header from './Homepage/Header';
import HomepageBody from './Homepage/HomepageBody';
import Services from './Services/Services';

function ecomm() {
  return (
    <div className="ecomm">
      <header className="ecomm-header">
        <BackgroundPaths />
        <Header />
        <HomepageBody />
        <Services />
      </header>
    </div>
  );
}

export default ecomm;