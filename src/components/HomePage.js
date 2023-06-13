import React, { useState } from "react"
import { useEffect } from "react"
import Api, { endpoints } from "../configs/Api"
import { Button, Container, Form, FormSelect } from "react-bootstrap"
import WebFont from "webfontloader"


const HomePage = ()=>{


    const [quan, setQuan] = useState([])
    const [phuong, setPhuong] =useState([])
    const [address, setAddress] = useState()
    const [name, setName] = useState()
    const [sdt, setSdt] = useState()
    const [district, setDistrict] = useState()
    const [ward , setWard] = useState()
    const [ relation, setRelation] = useState()
    const [cccd, setCccd] = useState()
    const [city, setCity] = useState()

    useEffect(()=>{
        WebFont.load({
            google: {
              families: ['Droid Sans', 'Chilanka']
            }
          });

        const loadQuan = async ()=> {

            const res = await Api.get(endpoints['quan'])
           
            setQuan(res.data)
            console.log(res.data)
        }

        loadQuan()

       
    


    },[] )
   

    
    const getPhuong = async (id) => {
        let res3 = await Api.get((endpoints['phuong'](id)))
        setPhuong(res3.data)
    
    }
    const AddSV = (event) =>{
        event.preventDefault()
        let Add = async () => {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("cccd", cccd)
            formData.append("phuong", ward)
            formData.append("quan", district)
            formData.append("is_parent", relation)
            formData.append("diachi", address)
            formData.append("sdt", sdt)
            formData.append("city", city)




            try {
                console.log(formData)

                await Api.post(endpoints['product'], formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }

                })


            } catch (err) {
                console.error(err)
            }
            // axios({
            //     method : 'POST',
            //     url: 'http://localhost:3000/register',
            //     data :formData

            // })

        }
        Add()

    }

    return(
        <Container style={{maxWidth: '500px', marginTop: '2%', background: 'white', border : '1px solid #dedede', fontFamily: 'Chilanka'}}>
        <h1 style={{textAlign: 'center'}}>Dang Ky Tuyen Sinh</h1>
        <Form  onSubmit={AddSV}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control type="text" value={sdt} onChange={(event)=> setSdt(event.target.value)}/>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" value={cccd} onChange={(event)=> setCccd(event.target.value)}/>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(event)=> setAddress(event.target.value)}/>
            
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quan</Form.Label>
            <FormSelect value={district} onChange={(event)=> setDistrict(event.target.value)}  >
                <option disabled selected='true' >Chọn danh mục</option>
                {quan.map(c => {
                    return <option value={c.id}  onClick={() => getPhuong(c.id)} >{c.name}</option>
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
            <Form.Control type="text" value={city} onChange={(event)=> setCity(event.target.value)}/>
            <Form.Label>Relationship</Form.Label>
            <Form.Control type="text" value={relation} onChange={(event)=> setRelation(event.target.value)}/>
            <Button variant="success" type="submit" style={{ position :'relative' , left: '35%', margin: '2%' }} >
                    Đăng ký
                </Button>
        </Form>
        </Container>
    )


}
export default HomePage;