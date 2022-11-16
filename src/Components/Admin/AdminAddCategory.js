import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import avatar from '../../Assets/Images/avatar.png'
import { createGategory } from '../../redux/actions/categoryAction'
const AdminAddCategory = () => {

    const [img, setImage] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedImage, setSelectedImage] = useState('')

    const dispatch = useDispatch()
    const onChangeImage = (e) => {

        // set new image when the value change 
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
            setSelectedImage(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDate = new FormData();
        formDate.append('name', name)
        formDate.append('image', selectedImage)

        dispatch(createGategory(formDate))

        setImage(avatar);
        setName('');

    }
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label htmlFor='upload-photo' >
                            <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: 'pointer' }} />
                        </label>
                        <input type='file' name='photo' id='upload-photo' onChange={onChangeImage} />
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory
