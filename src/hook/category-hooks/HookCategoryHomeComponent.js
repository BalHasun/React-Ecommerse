
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const HookCategoryHomeComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // get last category and loading state 
    const category = useSelector(state => state.allcategory.category)
    const loading = useSelector(state => state.allcategory.loading)

    // set random backGround color to all image 
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

    return [loading, category, colors]
}
export default HookCategoryHomeComponent
