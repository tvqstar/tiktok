import PropTypes from 'prop-types';

import HeaderLayout from '~/layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <HeaderLayout />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
