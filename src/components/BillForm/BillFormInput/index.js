import React from 'react'

const BillFormInput = ({ name, id, placeholder, handleOnChange, inputValue, type, label, validState }) => {

    let className;
    const valid = validState.isValid;
    if (valid === "") {
        className =
            window.innerWidth < 590
                ?
                "form-control form-control-sm"
                :
                "form-control form-control-lg"
    } else if (valid === true) {
        className =
            window.innerWidth < 590
                ?
                "form-control form-control-sm is-valid"
                :
                "form-control form-control-lg is-valid"
    } else if (!valid) {
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
                name={name}
                onChange={handleOnChange}
                value={inputValue}
                type={type}
                placeholder={placeholder}
                id={id}
                className={className}
            />
            <div className="invalid-feedback">
                {validState.message}
            </div>
        </div>
    )
}

export default BillFormInput
