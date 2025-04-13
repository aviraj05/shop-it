import React from 'react';
import Header from './components/Header';
import DynamicBanner from './components/DynamicBanner';
import NearbyShops from './components/NearbyShops';
import PopularCategories from './components/PopularCategories';

const App = () => {
    return (
        <div>
            <Header />
            <DynamicBanner /> {/* New dynamic banner below the header */}
            <NearbyShops /> {/* New nearby shops section */}
            <PopularCategories /> {/* New popular categories section */}
            <main>
            </main>
        </div>
    );
};

export default App;