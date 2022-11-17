import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../Assets/Images/avatar.png'
import { createBrand } from '../../redux/actions/brandAction'
import notify from '../useNotification'


const HookAddBrand = () => {

    const [img, setImage] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)


    const dispatch = useDispatch()
    const onChangeImage = (e) => {

        // set new image when the value change 
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
            setSelectedImage(e.target.files[0])
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const res = useSelector(state => state.allbrand.brand)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === '' || selectedImage == null) {

            notify('الرجاء اكمل البيانات', 'warn')
            return;
        }

        const formDate = new FormData();
        formDate.append('name', name)
        formDate.append('image', selectedImage)

        setLoading(true)
        setIsPress(true)
        await dispatch(createBrand(formDate))
        setLoading(false)

    }

    useEffect(() => {
        if (loading === false) {
            setSelectedImage(null)
            setImage(avatar);
            setName('');
            setLoading(true)
            setTimeout(() => setIsPress(false), 1000)
            
            if (res.status === 201) {
                notify('تمت العملية بنجاح ', 'success')
            } else {
                notify('حدثت مشكلة غير متوقعة', 'error')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])



    return [img, name, isPress, loading, onChangeName, onChangeImage, handleSubmit]
}

export default HookAddBrand
