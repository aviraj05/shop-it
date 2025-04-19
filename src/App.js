import React from 'react';
import Header from './components/Header';
import DynamicBanner from './components/DynamicBanner';
import NearbyShops from './components/NearbyShops';
import PopularCategories from './components/PopularCategories';
import StartYourList from './components/StartYourList';
import MobileAppPromo from './components/MobileAppPromo';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Header />
            <DynamicBanner /> {/* New dynamic banner below the header */}
            <NearbyShops /> {/* New nearby shops section */}
            <PopularCategories /> {/* New popular categories section */}
            <StartYourList /> {/* New start your list section */}
            <MobileAppPromo /> {/* New mobile app promo section */}
            <Footer /> {/* New footer section */}
            <main>
            </main>
        </div>
    );
};

export default App;