import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {AppState} from "../reducers";

const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useTypedSelector;