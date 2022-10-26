import React from 'react';

const Header = () => {
    
    return (
        <header>
            <div className='header-content'>
                <div className='nav-content'>
                    <nav>
                        <ul>
                            <li>
                                <button>Friends</button>
                            </li>
                            <li>
                                <button>Server</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='form-content'>
                    <div className='search-bar-content'>
                        <div className='pos-search-bar'>
                            <form>
                                <input className='search-bar' name='search-bar' type='text' placeholder='Type your search...' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;