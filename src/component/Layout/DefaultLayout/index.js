import HeaderLayout from '~/component/Layout/components/Header';
import SideBarLayout from './SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderLayout />
            <div className= {cx('container')}>
                <SideBarLayout />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
