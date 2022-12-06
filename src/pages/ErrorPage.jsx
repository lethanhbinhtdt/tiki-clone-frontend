import React from 'react';
import { Link } from 'react-router-dom';

import { TIKI_LOGO } from '../utils/contants';

import './ErrorPage.css';

export default function ErrorPage(props) {
    const err = props.errMsg || 'Lỗi không xác định!';
    return (
        <div className='error-page'>
            <div className='text-center mt-3 text-primary'>
                <img src={TIKI_LOGO} className='logo' alt='logo'></img>
                <h1>TIKI - NIỀM VUI MUA SẮM</h1>
            </div>
            <div className='text-center mt-5'>
                <h1 className='text-warning'>Oops!</h1>
                <h2 className='text-danger pb-3 text-uppercase'>{err}</h2>
                <Link to='/' className='btn btn-success fw-bold rounded-pill py-2'>Đến trang chủ</Link>
            </div>
        </div>
    );
}

