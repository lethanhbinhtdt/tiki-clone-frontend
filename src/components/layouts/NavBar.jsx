import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { TIKI_LOGO } from '../../utils/contants';

import './NavBar.css'

function NavBar() {
    return (
        <div className='tiki-navbar'>
            <nav className='navbar navbar-expand-lg navbar-bg'>
                <div className='tiki-logo'>
                    <a href='/'>
                        <img src={TIKI_LOGO} alt='tiki logo'/>
                    </a>
                </div>

                <div className='navbar-nav mr-auto w-100'>
                    <form className='d-flex flex-row my-2'>
                        <input type='search' placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn...' aria-label='Search' />
                        <button className='btn-search d-flex justify-content-center align-items-center' type='submit'>
                            <div className='me-2'><FontAwesomeIcon className='fs-20' icon={faSearch}/></div>
                            <div>Tìm kiếm</div>
                        </button>
                    </form>
                    <div className='nav-item active'>
                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                    </div>
                    <div className='nav-item'>
                        <a className='nav-link' href='/'>Link</a>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;
