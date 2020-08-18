import React from 'react'

export default function TeamForm(props){
    const {values, update, submit} = props

    const onChange = evt => {
        const{name, value} = evt.target
        update(name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <h4>Information</h4>
                <label>Name:&nbsp;
                    <input
                    onChange={onChange}
                    value={values.name}
                    name="name"
                    placeholder="please enter your name"
                    maxLength="10"
                    type="text"
                    />
                </label>

                <label>E-mail:&nbsp;
                    <input
                    onChange={onChange}
                    value={values.email}
                    name="email"
                    placeholder="please enter your e-mail "
                    maxLength="15"
                    type="text"
                    />
                </label>

                <label>Role:&nbsp;
                    <select onChange={onChange} value={values.role} name="role"> 
                    <option value="">--Select A role--</option>
                    <option value="backend">BackEnd Developer</option>
                    <option value="frontend">FrontEnd Developer</option>
                    <option value="designer">Graphic Designer</option>
                    </select>
                </label>

                <div className="form-group container">
                    <h2>Add a Team Member</h2>
                <button onClick={onSubmit} disabled={!values.name || !values.email || !values.role ? true : false } type="submit">Submit</button>
                </div>
            </div>

        </form>
    )
}