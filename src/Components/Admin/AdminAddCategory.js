import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import HookAddCategory from '../../hook/category-hooks/HookAddCategory'

const AdminAddCategory = () => {

    const [img, name, isPress, loading, onChangeName, onChangeImage, handleSubmit] = HookAddCategory();
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
                        onChange={onChangeName}
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
            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
            <ToastContainer autoClose={3000} pauseOnHover={false} />
        </div>

    )
}

export default AdminAddCategory
