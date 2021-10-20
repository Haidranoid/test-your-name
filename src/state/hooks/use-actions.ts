import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as emailsAC from '../actions-creators/emailsAC';

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...emailsAC,
    }, dispatch);
};

export default useActions;