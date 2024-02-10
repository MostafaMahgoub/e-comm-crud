import BackgroundPaths from './Homepage/Stackedbackground';
import Header from './Homepage/Header';
import HomepageBody from './Homepage/HomepageBody';
import Services from './Services/Services';
import Specials from './Services/Specials';
import Products from './Shop/products';
import { QueryClient, QueryClientProvider } from "react-query";
import discountBanner from './Shop/discountBanner';


const queryClient = new QueryClient();

function ecomm() {
  return (
    <div className="ecomm">
      <header className="ecomm-header">
        <BackgroundPaths />
        <Header />
        <HomepageBody />
        <Services />
        <Specials />
        <QueryClientProvider client={queryClient}>
          <Products />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default ecomm;