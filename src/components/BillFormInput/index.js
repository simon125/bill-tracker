import React from 'react'

const BillFormInput = ({ id, placeholder, onChange, value, type, label }) => {

    const valid = false;
    const afterCorrect = true;
    let className;
    let message = 'asdfasdfasdfsad';


    if (valid && !afterCorrect) {
        className =
            window.innerWidth < 590
                ?
                "form-control form-control-sm"
                :
                "form-control form-control-lg"
    } else if (valid && afterCorrect) {
        className =
            window.innerWidth < 590
                ?
                "form-control form-control-sm is-valid"
                :
                "form-control form-control-lg is-valid"
    } else {
        className =
            window.innerWidth < 590
                ?
                "form-control form-control-sm is-invalid"
                :
                "form-control form-control-lg is-invalid"
    }


    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                placeholder={placeholder}
                id={id}
                className={className}
            />
            <div className="invalid-feedback">
                {message}
            </div>
        </div>
    )
}

export default BillFormInput
