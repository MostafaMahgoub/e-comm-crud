import BackgroundPaths from './Homepage/Stackedbackground';
import Header from './Homepage/Header';
import HomepageBody from './Homepage/HomepageBody';
import Services from './Services/Services';
import Specials from './Services/Specials';

function ecomm() {
  return (
    <div className="ecomm">
      <header className="ecomm-header">
        <BackgroundPaths />
        <Header />
        <HomepageBody />
        <Services />
        <Specials />
      </header>
    </div>
  );
}

export default ecomm;