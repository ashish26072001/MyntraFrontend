import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";
import { API_URL } from "../config";

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    console.log(fetchStatus)
    useEffect(() => {
        if (fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());
        fetch(`${API_URL}/items`, { signal })
            .then((res) => res.json())

            .then(({ items }) => {
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsActions.addInitialItems(items[0]))
                console.log("fetch the item", items)
            })

        return () => {

            controller.abort();
        };
    }, [fetchStatus]);

    return <>
    </>
}
export default FetchItems;