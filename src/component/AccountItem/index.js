import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '~/component/Images';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/28c41afb73cfa841b4f70ae5cf7636bd~c5_100x100.jpeg?x-expires=1665237600&x-signature=8lrvYuLA6jYtvPhuflpMKxOA30w%3D"
                alt="TVQ"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Ta Van Quyet</span>
                    <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>tavanquyet</span>
            </div>
        </div>
    );
}

export default AccountItem;
