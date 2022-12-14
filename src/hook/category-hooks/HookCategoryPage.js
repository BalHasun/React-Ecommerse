import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction'

const HookCategoryPage = () => {


    // Connect to the specified action after importing it from the action folder
    const dispatch = useDispatch();

    useEffect(() => {

        // Determine a temporary number to be displayed on the page and sent to action as parameter to the action folder
        dispatch(getAllCategory(6));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Get data from specific reducer with state after connecting to Api in the action folder
    const category = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)

    // Send the total number of pages for the pagination
    let pageCount = 0;
    if (category.paginationResult) {
        pageCount = category.paginationResult.numberOfPages;

    }

    // Change the displayed data according to the page number when pressed on Pagination
    const getCategoryPage = (page) => {
        dispatch(getAllCategoryPage(page));
    }

    return [category, loading, pageCount, getCategoryPage]
}

export default HookCategoryPage
