import React from 'react'
import { Formik, useFormik, Field, Form } from 'formik';
import validationSchema from './Validations';
function Signup() {

    const { handleSubmit, handleChange, values ,errors,touched,handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,

    });
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik>


                <Form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email </label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    {
                        errors.email&& touched.email&& <div className='errors'>{errors.email}</div>
                    }
                    <br />
                    <br />
                    <label htmlFor="password">Password </label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="password"
                        name="password"
                        placeholder="password"
                        type="Password"
                    />
                    {
                        errors.password&& touched.password&& <div className='errors'>{errors.password}</div>
                    }
                    <br />
                    <br />
                    <label htmlFor="passwordConfirm">passwordConfirm </label>
                    <input
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="passwordConfirm"
                        type={'password'}
                    />
                    {
                        errors.passwordConfirm&& touched.passwordConfirm&& <div className='errors'>{errors.passwordConfirm}</div>
                    }
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                    <br /> 
                    <br />


                    {
                        <code>{JSON.stringify(values)}</code>
                    }
                </Form>

            </Formik>
        </div>
    )
}

export default Signup