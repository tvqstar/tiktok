import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBarLayout() {
    return (
        <aside className={cx('wrapper')}>
            <h1>SideBar</h1>
        </aside>
    );
}

export default SideBarLayout;
