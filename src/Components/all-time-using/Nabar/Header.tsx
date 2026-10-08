import React from 'react';
import Navbar from './MainNavbar';
import NavbarCategories from './NavbarCategories';
import NavbarMarquee from './NavbarMarquee';

const Header = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
                <NavbarCategories />
            </div>
            <NavbarMarquee />
        </div>
    );
};

export default Header;