import React from 'react';

import { TIKI_LOGO } from '../../utils/contants';

import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-bg'>
                <div className='tiki-logo'>
                    <a href='/'>
                        <img src={TIKI_LOGO} alt='tiki logo'/>
                    </a>
                </div>

                <div className='navbar-nav mr-auto'>
                    <form className='d-flex flex-row my-2'>
                        <input className='fmr-sm-2' type='search' placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn...' aria-label='Search' />
                        <button className='my-2' type='submit'>Search</button>
                    </form>
                    <div className='nav-item active'>
                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                    </div>
                    <div className='nav-item'>
                        <a className='nav-link' href='/'>Link</a>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar;
