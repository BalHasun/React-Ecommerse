
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction'

const HookBrandHomeComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBrand());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // get last brand and loading state 
    const brand = useSelector(state => state.allbrand.brand)
    const loading = useSelector(state => state.allbrand.loading)


    return [loading, brand]
}
export default HookBrandHomeComponent
