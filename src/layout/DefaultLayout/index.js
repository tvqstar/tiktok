import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderLayout from '~/layout/components/Header';
import SideBarLayout from './SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderLayout />
            <div className={cx('container')}>
                <SideBarLayout />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
