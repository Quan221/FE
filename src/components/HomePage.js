import React, { useState } from "react"
import { useEffect } from "react"
import Api, { endpoints } from "../configs/Api"
import { Button, Col, Container, Figure, Form, FormSelect, Image, InputGroup, Row } from "react-bootstrap"
import WebFont from "webfontloader"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"
import { DISPATCH_ACTION } from "@paypal/react-paypal-js"
import logo from './logo.png'


const HomePage = () => {


    const [tenDK, setTenDK] = useState()
    const [hokhaunguoiDK, setHokhaunguoiDK] = useState()
    const [sdt, setSdt] = useState()
    const [choDK, setChoDK] = useState()
    const [IDdk, setIDdk] = useState()
    const [moiquanhe, setMoiquanhe] = useState()
    const [trinhdo, setTrinhdo] = useState()
    const [truong, setTruong] = useState()
    const [tenHS, setTenHS] = useState()
    const [gioitinh, setGioitinh] = useState()
    const [ngaysinh, setNgaysinh] = useState()
    const [dantoc, setDantoc] = useState()
    const [tongiao, setTongiao] = useState()
    const [noisinh, setNoisinh] = useState()
    const [dinhdanh, setDinhdanh] = useState()
    const [diachi, setDiachi] = useState()
    const [quan, setQuan] = useState()
    const [phuong, setPhuong] = useState()
    const [diachithuongtru, setDiachithuongtru] = useState()
    const [quanthuongtru, setQuanthuongtru] = useState()
    const [phuongthuongtru, setPhuongthuongtru] = useState()
    const [dienchinhsach, setDienchinhsach] = useState()
    const [suckhoe, setSuckhoe] = useState()
    const [tiengviet5, setTiengviet5] = useState()
    const [toan5, setToan5] = useState()
    const [diencutru, setDiencutru] = useState()
    const [cambridge, setCambridge] = useState()
    const [toefl, setToefl] = useState()
    const [pearson, setPearson] = useState()
    const [hocba, setHocba] = useState()
    const [boi, setBoi] = useState()
    const [nangkhieu, setNangkhieu] = useState()
    const [tdtt, setTdtt] = useState()
    const [tntp, setTntp] = useState()
    const [tencha, setTencha] = useState()
    const [namsinhcha, setNamsinhcha] = useState()
    const [nghenghiepcha, setNghenghiepcha] = useState()
    const [chucvu, setChucvu] = useState()
    const [noicongtac, setNoicongtac] = useState()
    const [sdtcha, setSdtcha] = useState()
    const [tenme, setTenme] = useState()
    const [namsinhme, setNamsinhme] = useState()
    const [nghenghiepme, setNghenghiepme] = useState()
    const [chucvume, setChucvume] = useState()
    const [noicongtacme, setNoicongtacme] = useState()
    const [sdtme, setSdtme] = useState()
    const [chonlop, setChonlop] = useState([])
    const [getphuong, setGetphuong] = useState([])
    const [getquan, setGetquan] = useState([])
    const [gettruong, setGettruong] = useState([])
    const [gettrinhdo, setGettrinhdo] = useState([])
    const [getphuong2, setGetphuong2] = useState([])
    const [dangkyhoc, setDangkyhoc] = useState()
    const tongdiem = (parseFloat(toan5) + parseFloat(tiengviet5))

    useEffect(() => {


        const loadQuan = async () => {

            const res = await Api.get(endpoints['quan'])

            setGetquan(res.data)
            console.log(res.data)
        }
        const trinhdo1 = async () => {

            const res = await Api.get(endpoints['trinhdo'])

            setGettrinhdo(res.data)
            console.log(res.data)
        }
        const chonLop = async () => {
            const res = await Api.get(endpoints['chonlop'])
            setChonlop(res.data)
            console.log(res.data)
        }

        loadQuan()
        trinhdo1()
        chonLop()





    }, [])



    const getPhuong = async (id) => {
        let res3 = await Api.get((endpoints['phuong'](id)))
        setGetphuong(res3.data)

    }
    const getTruong = async (id) => {
        let res = await Api.get((endpoints['truong'](id)))
        setGettruong(res.data)
    }
    const getPhuong2 = async (id) => {
        let res = await Api.get((endpoints['phuong'](id)))
        setGetphuong2(res.data)
    }
    const AddSV = (event) => {
        event.preventDefault()
        let Add = async () => {
            const formData = new FormData()
            formData.append("phuong", phuong)
            formData.append("quan", quan)
            formData.append("diachi", diachi)
            formData.append("madinhdanh", dinhdanh)
            formData.append("is_parent", moiquanhe)
            formData.append("noisinh", noisinh)
            formData.append("tongiao", tongiao)
            formData.append("dantoc", dantoc)
            formData.append("gioitinh", gioitinh)
            formData.append("tenhs", tenHS)
            formData.append("ngaysinh", ngaysinh)
            formData.append("truongtieuhoc", truong)
            formData.append("trinhdo", trinhdo)
            formData.append("cccd", IDdk)
            formData.append("hokhau", hokhaunguoiDK)
            formData.append("sdt", sdt)
            formData.append("ten", tenDK)
            formData.append("tntp", tntp)
            formData.append("tdtt", tdtt)
            formData.append("nangkhieu", nangkhieu)
            formData.append("boi", boi)
            formData.append("toan5", toan5)
            formData.append("tiengviet5", tiengviet5)
            formData.append("tongdiem", tongdiem)
            formData.append("suckhoe", suckhoe)
            formData.append("dienchinhsach", dienchinhsach)
            formData.append("phuongthuongtru", phuongthuongtru)
            formData.append("quanthuongtru", quanthuongtru)
            formData.append("diachithuongtru", diachithuongtru)
            formData.append("chonlop", dangkyhoc)
            formData.append("sdtme", sdtme)
            formData.append("noicongtacme", noicongtacme)
            formData.append("chucvume", chucvume)
            formData.append("nghenghiepme", nghenghiepme)
            formData.append("namsinhme", namsinhme)
            formData.append("tenme", tenme)
            formData.append("sdtcha", sdtcha)
            formData.append("noicongtac", noicongtac)
            formData.append("chucvu", chucvu)
            formData.append("nghenghiep", nghenghiepcha)
            formData.append("namsinhcha", namsinhcha)
            formData.append("tencha", tencha)
            formData.append("cambridge", cambridge)
            formData.append("pearson", pearson)
            formData.append("toefl", toefl)
            formData.append("hocba", hocba)
            formData.append("choDK", choDK)
            formData.append("diencutru", diencutru)

            console.log(dangkyhoc)





            try {
                console.log(formData)

                await Api.post(endpoints['dontuyensinh'], formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }


                })
                setSdtme('')
                setNoicongtacme('')
                setChucvume('')
                setNghenghiepme('')
                setNamsinhme('')
                setTenme('')
                setBoi('')
                setCambridge('')
                setChoDK('')
                setChonlop('')
                setChucvu()
                setChucvume()
                setDantoc()
                setDiachi()
                setDiachithuongtru()
                setDienchinhsach()
                setDiencutru()
                setDinhdanh()
                setGioitinh()
                setHocba()
                setHokhaunguoiDK()
                setIDdk()
                setMoiquanhe()
                setNangkhieu()
                setNgaysinh()
                setNamsinhcha()
                setNghenghiepcha()
                setNoicongtac()
                setNoisinh()
                setPearson()
                setToefl()
                setToan5()
                setTiengviet5()
                setPhuong()
                setQuan()
                setPhuongthuongtru()
                setQuanthuongtru()
                setSdt()
                setSdtcha()
                setSdtme()
                setSuckhoe()
                setTdtt()
                setTenDK()
                setTenHS()
                setTenme()
                setTntp()
                setTongiao()


            } catch (err) {
                console.error(err)
                console.log(tongdiem)
            }
            // axios({
            //     method : 'POST',
            //     url: 'http://localhost:3000/register',
            //     data :formData

            // })

        }
        Add()


    }

    return (
        <Container style={{ marginTop: '2%', background: '#ccd1d5', border: '1px solid #dedede', fontFamily: 'Chilanka', width: ' 60%' }}>
            <div >
                <div style={{ display: 'flex', position: 'relative', left: '35%' }} >
                    {/* <Figure>
                        <Figure.Image src={logo} width={65}
                            height={50} />
                    </Figure> */}
                    <Image src={logo} roundedCircle width={65}
                        height={60} />
                    <h1 style={{ marginLeft: '2%' }} >   Đăng Ký Tuyển Sinh</h1>
                </div>
                <Form onSubmit={AddSV}>
                    <h3>A. THÔNG TIN NGƯỜI ĐĂNG KÝ</h3>
                    <Form.Group as={Row}  >
                        <Col sm='4' >
                            <Form.Label >Tên Người Đăng Ký</Form.Label>

                            <Form.Control type="text" value={tenDK} required onChange={(event) => setTenDK(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Cha/Mẹ/Người giám hộ</Form.Label>
                            <Form.Control type="text" value={moiquanhe} required onChange={(event) => setMoiquanhe(event.target.value)} />

                        </Col>

                        <Col sm='3' >
                            <Form.Label>CCCD</Form.Label>
                            <Form.Control type="text" value={IDdk} required onChange={(event) => setIDdk(event.target.value)} />
                        </Col>
                        <Col sm='2' >
                            <Form.Label >Số Điện Thoại</Form.Label>

                            <Form.Control type="text" value={sdt} required onChange={(event) => setSdt(event.target.value)} />
                        </Col>



                    </Form.Group>

                    <Form.Group as={Row} style={{ marginTop: '5px' }} >
                        <Col>
                            <Form.Label>Hộ Khẩu Thường Trú</Form.Label>
                            <Form.Control type="text" value={hokhaunguoiDK} required onChange={(event) => setHokhaunguoiDK(event.target.value)} />
                        </Col>

                        <Col>
                            <Form.Label>Chỗ Ở Hiện Nay</Form.Label>
                            <Form.Control type="text" required value={choDK} onChange={(event) => setChoDK(event.target.value)} />
                        </Col>


                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Label> Đã Học Tiểu Học ở Quận </Form.Label>
                            <FormSelect   >
                                <option disabled selected='true' >Chọn Quận</option>
                                {getquan.map(c => {
                                    return <option value={c.id} onClick={() => getTruong(c.id)} >{c.name}</option>
                                })}

                            </FormSelect>
                        </Col>
                        <Col>
                            <Form.Label>
                                Trường :
                            </Form.Label>
                            <FormSelect value={truong} onChange={(event) => setTruong(event.target.value)}  >
                                <option disabled selected='true' >Chọn danh mục</option>
                                {gettruong.map(c => {
                                    return <option value={c.name} >{c.name}</option>
                                })}

                            </FormSelect>
                        </Col>

                        <Col>
                            <Form.Label>Đã học hết lớp 5 : </Form.Label>
                            <FormSelect value={trinhdo} onChange={(event) => setTrinhdo(event.target.value)}  >
                                <option disabled selected='true' >Chọn danh mục</option>
                                {gettrinhdo.map(c => {
                                    return <option value={c.id} >{c.name}</option>
                                })}

                            </FormSelect>
                        </Col>

                    </Form.Group>

                    <h3 style={{ marginTop: '2%' }} >B. THÔNG TIN VỀ HỌC SINH </h3>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Label>Mã định danh</Form.Label>
                            <Form.Control type="text" value={dinhdanh} onChange={(event) => setDinhdanh(event.target.value)} />
                        </Col>
                        <Col  >
                            <Form.Label>Tên Học Sinh</Form.Label>
                            <Form.Control type="text" value={tenHS} onChange={(event) => setTenHS(event.target.value)} />
                        </Col>



                    </Form.Group>
                    <Form.Group as={Row}>

                        <Col>
                            <Form.Label>Nơi Sinh</Form.Label>
                            <Form.Control type="text" value={noisinh} onChange={(event) => setNoisinh(event.target.value)} />
                        </Col>
                        <Col sm='3' >
                            <Form.Label>
                                Ngày, tháng, năm sinh:
                            </Form.Label>
                            <Form.Control type="date" value={ngaysinh} onChange={(event) => setNgaysinh(event.target.value)} />
                        </Col>
                        <Col sm='2' >
                            <FormCheckLabel form-check-label >Giới Tính</FormCheckLabel>
                            <Col style={{ marginTop: '10px', display: ' flex' }} >
                                <Form.Check
                                    inline
                                    label="Nam"
                                    name="group1"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                    value="Nam"
                                    checked={gioitinh == 'Nam'}
                                    onChange={(event) => setGioitinh(event.target.value)}

                                />

                                <Form.Check
                                    inline
                                    label="Nữ"
                                    name="group1"
                                    type="checkbox"
                                    value="Nữ"
                                    checked={gioitinh == 'Nữ'}
                                    onChange={(event) => setGioitinh(event.target.value)}
                                />



                            </Col>
                        </Col>



                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Label>Dân Tộc</Form.Label>
                            <Form.Control type="text" value={dantoc} onChange={(event) => setDantoc(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Tôn Giáo</Form.Label>
                            <Form.Control type="text" value={tongiao} onChange={(event) => setTongiao(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Diện Cư Trú</Form.Label>
                            <FormSelect value={diencutru} onChange={(event) => setDiencutru(event.target.value)}  >
                                <option disabled selected='true' >Chọn danh mục</option>
                                <option value="Thường Trú">Thường Trú</option>
                                <option value="Tạm Trú">Tạm Trú</option>
                                <option value="Diện Khác">Diện Khác</option>

                            </FormSelect>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} >
                        <span style={{ fontSize: '20px', margin: '10px' }} >Hộ khẩu thường trú : </span>
                        <Col>
                            {/* <Form.Label>Số nhà , tên đường : </Form.Label> */}
                            <InputGroup>
                                <InputGroup.Text>Số nhà , tên đường :</InputGroup.Text>
                                <Form.Control type="text" value={diachithuongtru} onChange={(event) => setDiachithuongtru(event.target.value)} />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>Phường : </InputGroup.Text>
                                <FormSelect value={phuongthuongtru} onChange={(event) => setPhuongthuongtru(event.target.value)}  >
                                    <option disabled selected='true' >Chọn danh mục</option>
                                    {getphuong.map(c => {
                                        return <option value={c.name} >{c.name}</option>
                                    })}

                                </FormSelect>
                            </InputGroup>

                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>Quận : </InputGroup.Text>
                                <FormSelect value={quanthuongtru} onChange={(event) => { setQuanthuongtru(event.target.value); const selectedOption = event.target.options[event.target.selectedIndex]; getPhuong(selectedOption.getAttribute('data-id')); }}   >
                                    <option disabled selected='true' >Chọn danh mục</option>
                                    {getquan.map(c => {
                                        return <option value={c.name} data-id={c.id} >{c.name}</option>
                                    })}

                                </FormSelect>
                            </InputGroup>

                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} >
                        <span style={{ fontSize: '20px', margin: '10px' }} >Chỗ ở hiện nay : </span>
                        <Col>
                            {/* <Form.Label>Số nhà , tên đường : </Form.Label> */}
                            <InputGroup>
                                <InputGroup.Text>Số nhà , tên đường :</InputGroup.Text>
                                <Form.Control type="text" value={diachi} onChange={(event) => setDiachi(event.target.value)} />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>Phường : </InputGroup.Text>
                                <FormSelect value={phuong} onChange={(event) => setPhuong(event.target.value)}  >
                                    <option disabled selected='true' >Chọn danh mục</option>
                                    {getphuong2.map(c => {
                                        return <option value={c.name} >{c.name}</option>
                                    })}

                                </FormSelect>
                            </InputGroup>

                        </Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>Quận : </InputGroup.Text>
                                <FormSelect value={quan} onChange={(event) => { setQuan(event.target.value); const selectedOption = event.target.options[event.target.selectedIndex]; getPhuong2(selectedOption.getAttribute('data-id')); }} >
                                    <option disabled selected='true' >Chọn danh mục</option>
                                    {getquan.map(c => {
                                        return <option value={c.id} data-id={c.id}>{c.name}</option>
                                    })}

                                </FormSelect>
                            </InputGroup>

                        </Col>

                    </Form.Group>
                    <br />
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Label>Diện chính sách (nếu có) : </Form.Label>
                            <Form.Control type="text" value={dienchinhsach} onChange={(event) => setDienchinhsach(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Tình hình sức khỏe (ghi cụ thể, nếu có bệnh mãn tính): </Form.Label>
                            <Form.Control type="text" value={suckhoe} onChange={(event) => setSuckhoe(event.target.value)} />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} >
                        <span style={{ fontSize: '20px', margin: '10px' }} >* Kết quả học tập năm học 2022 – 2023: </span>
                        <Form.Label>Điểm học kỳ 2 lớp 5: </Form.Label>
                        <Col>
                            {/* <Form.Label>Số nhà , tên đường : </Form.Label> */}
                            <InputGroup>
                                <InputGroup.Text>Tiếng Việt</InputGroup.Text>
                                <Form.Control type="number" value={tiengviet5} onChange={(event) => setTiengviet5(event.target.value)} />
                            </InputGroup>
                        </Col>
                        <Col>
                            {/* <Form.Label>Số nhà , tên đường : </Form.Label> */}
                            <InputGroup>
                                <InputGroup.Text>Toán</InputGroup.Text>
                                <Form.Control type="number" value={toan5} onChange={(event) => setToan5(event.target.value)} />
                            </InputGroup>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Đã có chứng chỉ tiếng Anh (nếu có):</Form.Label>
                        {/* <Form.Control type="text" value={hocba} onChange={(event) => setHocba(event.target.value)} /> */}
                        <Col>
                            <Form.Label> Chứng chỉ Cambridge </Form.Label>
                            <Form.Control type="number" value={cambridge} onChange={(event) => setCambridge(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label> Chứng chỉ Toefl </Form.Label>
                            <Form.Control type="number" value={toefl} onChange={(event) => setToefl(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label> Chứng chỉ pearson </Form.Label>
                            <Form.Control type="number" value={pearson} onChange={(event) => setPearson(event.target.value)} />

                        </Col>

                    </Form.Group>
                    <Col style={{ marginTop: '10px', marginLeft: '10%' }} >
                        <Form.Check
                            inline
                            label="Học bạ tích hợp EMG"
                            name="group1"
                            type="checkbox"
                            style={{ marginLeft: '10px' }}
                            value="Học bạ tích hợp EMG"

                            checked={hocba == 'Học bạ tích hợp EMG'}
                            onChange={(event) => setHocba(event.target.value)}

                        />

                        <Form.Check
                            inline
                            label="Hoặc học bạ TATC"
                            name="group1"
                            type="checkbox"
                            value="Hoặc học bạ TATC"
                            checked={hocba == 'Hoặc học bạ TATC'}
                            onChange={(event) => setHocba(event.target.value)}
                        />



                    </Col>
                    <FormCheckLabel form-check-label >Kỹ Năng Bơi</FormCheckLabel>
                    <Col style={{ marginTop: '10px' }} >
                        <Form.Check
                            inline
                            label="Đã Biết"
                            name="group1"
                            type="checkbox"
                            style={{ marginLeft: '10px' }}
                            value="Đã biết bơi"

                            checked={boi == 'Đã biết bơi'}
                            onChange={(event) => setBoi(event.target.value)}

                        />

                        <Form.Check
                            inline
                            label="Chưa Biết"
                            name="group1"
                            type="checkbox"
                            value="Chưa biết bơi"
                            checked={boi == 'Chưa biết bơi'}
                            onChange={(event) => setBoi(event.target.value)}
                        />



                    </Col>
                    <Form.Group>
                        <Form.Label>Năng khiếu sở trường thường xuyên:</Form.Label>
                        <Form.Control type="text" value={nangkhieu} onChange={(event) => setNangkhieu(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>+ Có thành tích về TDTT, Văn hóa, Nghệ thuật, các giải phong trào, Đội TNTPHCM (ghi cụ thể nếu có):</Form.Label>
                        <Form.Control type="text" value={tdtt} onChange={(event) => setTdtt(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tham gia công tác Đội TNTP HCM, chức vụ (nếu có):</Form.Label>
                        <Form.Control type="text" value={tntp} onChange={(event) => setTntp(event.target.value)} />
                    </Form.Group>

                    <br />
                    <h3>C. THÔNG TIN VỀ CHA MẸ CỦA HỌC SINH: </h3>
                    <Form.Group as={Row} >
                        <Col>
                            <Form.Label>Họ Tên Cha</Form.Label>
                            <Form.Control type="text" value={tencha} onChange={(event) => setTencha(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Năm Sinh</Form.Label>
                            <Form.Control type="text" value={namsinhcha} onChange={(event) => setNamsinhcha(event.target.value)} />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} >
                        <Col>
                            <Form.Label>Nghề nghiệp</Form.Label>
                            <Form.Control type="text" value={nghenghiepcha} onChange={(event) => setNghenghiepcha(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Nơi Công Tác</Form.Label>
                            <Form.Control type="text" value={noicongtac} onChange={(event) => setNoicongtac(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Chức vụ</Form.Label>
                            <Form.Control type="text" value={chucvu} onChange={(event) => setChucvu(event.target.value)} />
                        </Col>

                    </Form.Group>
                    <Form.Label>Số điện thoại liên lạc</Form.Label>
                    <Form.Control type="text" value={sdtcha} onChange={(event) => setSdtcha(event.target.value)} />
                    <br />
                    <Form.Group as={Row} >
                        <Col>
                            <Form.Label>Họ Tên Mẹ</Form.Label>
                            <Form.Control type="text" value={tenme} onChange={(event) => setTenme(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Năm Sinh</Form.Label>
                            <Form.Control type="text" value={namsinhme} onChange={(event) => setNamsinhme(event.target.value)} />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} >
                        <Col>
                            <Form.Label>Nghề nghiệp</Form.Label>
                            <Form.Control type="text" value={nghenghiepme} onChange={(event) => setNghenghiepme(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Nơi Công Tác</Form.Label>
                            <Form.Control type="text" value={noicongtacme} onChange={(event) => setNoicongtacme(event.target.value)} />

                        </Col>
                        <Col>
                            <Form.Label>Chức vụ</Form.Label>
                            <Form.Control type="text" value={chucvume} onChange={(event) => setChucvume(event.target.value)} />
                        </Col>

                    </Form.Group>
                    <Form.Label>Số điện thoại liên lạc</Form.Label>
                    <Form.Control type="text" value={sdtme} onChange={(event) => setSdtme(event.target.value)} />
                    <br />
                    <h3>C. ĐĂNG KÝ HỌC:</h3>
                    <br />
                    <span style={{ fontSize: '20px', margin: '10px' }} >Chỉ chọn 1 trong các hình thức lớp dưới đây </span>
                    <FormSelect value={dangkyhoc} onChange={(event) => setDangkyhoc(event.target.value)}  >
                        {/* <option disabled selected='true' >Chọn danh mục</option> */}
                        {chonlop.map(c => {
                            return <option value={c.id}  >{c.name}</option>
                        })}

                    </FormSelect>


                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Quan</Form.Label>
                    <FormSelect value={district} onChange={(event) => setDistrict(event.target.value)}  >
                        <option disabled selected='true' >Chọn danh mục</option>
                        {quan.map(c => {
                            return <option value={c.id} onClick={() => getPhuong(c.id)} >{c.name}</option>
                        })}

                    </FormSelect>

                </Form.Group>
                <Form.Label>Phuong</Form.Label>
                <FormSelect value={ward} onChange={(event) => setWard(event.target.value)}  >
                    <option disabled selected='true' >Chọn danh mục</option>
                    {phuong.map(c => {
                        return <option value={c.name}  >{c.name}</option>
                    })}

                </FormSelect>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={city} onChange={(event) => setCity(event.target.value)} /> */}

                    <Button variant="success" type="submit" style={{ position: 'relative', left: '40%', margin: '2%' }} >
                        Đăng ký
                    </Button>
                </Form>
            </div>
        </Container >
    )


}
export default HomePage;