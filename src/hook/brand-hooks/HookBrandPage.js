import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction'

const HookBrandPage = () => {


    // Connect to the specified action after importing it from the action folder
    const dispatch = useDispatch();

    useEffect(() => {

        // Determine a temporary number to be displayed on the page and sent to action as parameter to the action folder
        dispatch(getAllBrand(6));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Get data from specific reducer with state after connecting to Api in the action folder
    const brand = useSelector(state => state.allbrand.brand)
    const loading = useSelector(state => state.allbrand.loading)

    // Send the total number of pages for the pagination
    let pageCount = 0;
    if (brand.paginationResult) {
        pageCount = brand.paginationResult.numberOfPages;

    }

    // Change the displayed data according to the page number when pressed on Pagination
    const getBrandPage = (page) => {
        dispatch(getAllBrandPage(page));
    }

    return [brand, loading, pageCount, getBrandPage]
}

export default HookBrandPage
