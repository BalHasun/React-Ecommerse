import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../hook/useNotification';
import { getAllCategory } from '../../redux/actions/categoryAction'
import { createSubCategory } from '../../redux/actions/subCategoryAction'

const HookSubCategory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());

        if (!navigator.onLine) {
            notify('لايوجد اتصال بالانترنت', 'warn')
            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [name, setName] = useState('')
    const [iD, setId] = useState('0')
    const [loading, setLoading] = useState(true)

    // get last category and loading state 
    const category = useSelector(state => state.allcategory.category)

    // get last category and loading state 
    const subcategory = useSelector(state => state.subcategory.subCategory)

    // on change dropDown select 
    function handelChange(e) {
        setId(e.target.value)

    }

    const setNames = (e) => {
        e.persist();
        setName(e.target.value);
    }

    // on save data 
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === '') {
            notify('الرجاء ادخل التصنيف الفرعي', 'warn')
            return;
        }

        if (iD === '0') {
            notify('الرجاء ادخل التصنيف الرئيسي', 'warn')
            return;
        }

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: iD
        }))

        setLoading(false)
    }

    useEffect(() => {

        if (loading === false) {
            setName('')
            setId('0')

            if (subcategory.status === 201) {

                notify('تم التحميل بنجاح', 'success')

            } else if (subcategory === 'ERRORAxiosError: Request failed with status code 400') {

                notify('الرجاء اختيار اسم تصنيف مختلف ', 'warn')

            }
            else { notify(' حدث خطأ أثناء التحميل..', 'error') }

            setLoading(true)

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    return [name, category, handelChange, handleSubmit, setNames]
}

export default HookSubCategory
