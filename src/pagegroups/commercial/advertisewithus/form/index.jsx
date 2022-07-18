import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { useForm } from 'react-hook-form';

const Forms = ({ data }) => {

    const { register, errors } = useForm({
        mode: "onBlur",
    });
    // console.log(errors)



    const firstNameData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'firstName');
    const lastNameData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'lastName');
    const emailData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'email');
    const companyNameData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'company_name');
    const companyDescriptionData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'company_description');
    const websiteData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'website');
    const phoneNumberData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'phone_number');
    const advertisementDescriptionData = data[0].inputfield && data[0].inputfield.find(data => data.id === 'advertisement_description');
    const requirementData = data[0].optionfield && data[0].optionfield.find(data => data.id === 'requirement');
    const regionData = data[0].optionfield && data[0].optionfield.find(data => data.id === 'region');
    const advertisementAvenueData = data[0].optionfield && data[0].optionfield.find(data => data.id === 'advertisement_avenue');
    const advertisementTypeData = data[0].optionfield && data[0].optionfield.find(data => data.id === 'advertisement_type');

    const [inputFieldData, setInputFieldData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companyDescription: "",
        website: "",
        phoneNumber: "",
        requirement: "",
        region: "",
        advertisementAvenue: "",
        advertisementType: "",
        advertisementDescription: "",
    })

    const inputValue = (e) => {
        const { name, value } = e.target;

        setInputFieldData({
            ...inputFieldData, [name]: value
        })
    }

    return (
        <div className="container forms">
            <div className="heading">{data[0].title}</div>
            <form action="">
                <div className="row form-body">
                    <div className="col-md-6 mb-3">
                        <input
                            value={inputFieldData.firstName}
                            name="firstName"
                            onChange={inputValue}
                            id={firstNameData.id}
                            type={firstNameData.type}
                            placeholder={firstNameData.label}
                            className="input-field"
                        />
                    </div> 
                    <div className="col-md-6 mb-3 ">
                        <input
                            value={inputFieldData.lastName}
                            name="lastName"
                            onChange={inputValue}
                            id={lastNameData.id}
                            type={lastNameData.type}
                            placeholder={lastNameData.label}
                            className="input-field" />
                    </div>
                    <div className="col-md-12 mb-3">
                        <input
                            value={inputFieldData.email}
                            name="email"
                            onChange={inputValue}
                            id={emailData.id}
                            type={emailData.type}
                            placeholder={emailData.label}
                            className="input-field" />
                    </div>
                    <div

                        className="col-md-12 mb-3">

                        <input
                            value={inputFieldData.companyName}
                            name="companyName"
                            onChange={inputValue}
                            id={companyNameData.id}
                            type={companyNameData.type}
                            placeholder={companyNameData.label}
                            className="input-field" />
                    </div>
                    <div

                        className="col-md-12 mb-3"
                    >
                        <textarea id={companyDescriptionData.id} cols="30" rows="10" className="col-md-12 input-field"
                            value={inputFieldData.companyDescription}
                            name="companyDescription"
                            onChange={inputValue}
                            placeholder={companyDescriptionData.label}
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <input
                            value={inputFieldData.website}
                            name="website"
                            onChange={inputValue}
                            id={websiteData.id}
                            type={websiteData.type}
                            placeholder={websiteData.label}
                            className="input-field" />
                    </div>
                    <div className="col-md-12 mb-3">
                        <input
                            value={inputFieldData.phoneNumber}
                            name="phoneNumber"
                            onChange={inputValue}
                            id={phoneNumberData.id}
                            type={phoneNumberData.type}
                            placeholder={phoneNumberData.label}
                            className="input-field" />
                    </div>
                    <div className="col-md-6 row mb-3 pe-0 ">
                        <div className="menu col-md-6 mb-3 pe-0">

                            <select value={inputFieldData.requirement}
                                name="requirement"
                                onChange={inputValue}
                                id={requirementData.id} className='input-field'>

                                {
                                    requirementData.option.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="menu col-md-6 pe-0">
                            <select
                                value={inputFieldData.region}
                                name="region"
                                onChange={inputValue}
                                id={regionData.id} className='input-field'>

                                {
                                    regionData.option.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <select
                            value={inputFieldData.advertisementAvenue}
                            name="advertisementAvenue"
                            onChange={inputValue}
                            id={advertisementAvenueData.id} className='input-field'>
                            {
                                advertisementAvenueData.option.map((data, index) => {
                                    return (<option value={data} key={index}>{data}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-12 mb-3">
                        <select
                            value={inputFieldData.advertisementType}
                            name="advertisementType"
                            onChange={inputValue}
                            id={advertisementTypeData.id} className='input-field'>
                            {
                                advertisementTypeData.option.map((data, index) => {
                                    return (<option value={data} key={index}>{data}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-12 mb-3">
                        <textarea
                            value={inputFieldData.advertisementDescription}
                            name="advertisementDescription"
                            onChange={inputValue}
                            id={advertisementDescriptionData.id} cols="30" rows="10" className="col-md-12 input-field"
                            placeholder={advertisementDescriptionData.label} />
                    </div>
                    <div className="col-md-12 terms-condition mb-3">
                        <input type="checkbox" name="" id="" className='' />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eaque veritatis tempora corrupti laudantium doloribus voluptates dolorum. Tenetur, corrupti quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero repudiandae recusandae </span>
                    </div>
                    <div className="button-part">
                        <Button
                            className='form-body-button'
                            type='submit'
                            color="btn btn-outline-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(inputFieldData)
                            }}
                        >
                            {"send"}
                        </Button>
                    </div>
                </div>
            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('firstName')} />
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form> */}
        </div>
    )
}

export default Forms