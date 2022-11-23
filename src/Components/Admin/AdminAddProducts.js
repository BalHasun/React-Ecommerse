import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../Assets/Images/add.png'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { getAllBrandPage } from '../../redux/actions/brandAction'
import { CompactPicker } from 'react-color'

const AdminAddProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrandPage());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // get last category 
    const category = useSelector(state => state.allcategory.category)

    // get last brand  
    const brand = useSelector(state => state.allbrand.brand)
    // console.log(brand.data)

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    // add multi images 
    const [images, setImages] = useState({});

    // add product text field 
    const [prodName, setProdName] = useState('');
    const [prodDecriptoin, setProdDecriptoin] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');

    // All subCategories that will be shown to the user 
    const [subCatId, setSubCatId] = useState([]);

    // All subCategories that will be selected from the user 
    const [selectedSubCatId, setSelectedSubCatId] = useState([]);

    // add product number field 
    const [priceBefor, setPriceBefor] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qyt, setQyt] = useState('الكمية المتاحة');

    // to show and hide color picker
    const [showColor, setShowColor] = useState(false);

    // to store pick color 
    const [colors, setColors] = useState([]);

    // when choose new color 
    const handelOnChange = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }

    // to remove the specifited color when clicked
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }

    // when category value changging 
    const selectedCategory = (e) => {
        setCategoryId(e.target.value)
    }

    // when brand value changging 
    const selectedBrand = (e) => {
        setBrandId(e.target.value)
    }
    console.log(brandId)


    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];


    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={'light'}
                        allowCrop={false}
                        max={5}
                    />
                    <input
                        value={prodName}
                        onChange={e => setProdName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDecriptoin}
                        onChange={e => setProdDecriptoin(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefor}
                        onChange={e => setPriceBefor(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAfter}
                        onChange={e => setPriceAfter(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                    />
                    <input
                        value={qyt}
                        onChange={e => setQyt(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة "
                    />
                    <select
                        onChange={selectedCategory}
                        name="category"
                        id="category"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">التصنيف الرئيسي</option>
                        {
                            category.data ? (category.data.map((item) => {
                                return (
                                    <option key={item._id} value={item._id}>{item.name} </option>
                                )
                            })) : null
                        }
                    </select>
                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        onChange={selectedBrand}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">اختر ماركة</option>
                        {
                            brand.data ? (brand.data.map((item) => {
                                return (
                                    <option key={item._id} value={item._id}>{item.name} </option>
                                )
                            })) : null
                        }
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">

                        {
                            colors.length > 0 ? colors.map((color, index) => {
                                return (
                                    <div key={index}
                                        onClick={() => removeColor(color)}
                                        className="color ms-2 border  mt-1"
                                        style={{ backgroundColor: color }}>
                                    </div>
                                )
                            }) : null
                        }


                        <img onClick={() => { setShowColor(!showColor) }} src={add} alt="" width="30px" height="35px" className="" style={{ 'cursor': 'pointer' }} />

                        {
                            showColor ? <CompactPicker onChangeComplete={handelOnChange} /> : null
                        }

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts
