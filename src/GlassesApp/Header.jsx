import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.header}`}>TRY GLASSES APP ONLINE</div>
    )
}

export default Header;