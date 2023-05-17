import {useFormik} from "formik";
import {object} from "yup";

// material ui: mui
import Button from '@mui/material/Button'

export function GetInTouch() {
    const handleSubmit = (values: {}) => alert(JSON.stringify(values));

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            subject: '',
            message: '',
        },
        // validationSchema: object({
        //     first_name.string().
        // }),
        validate: (values) => {
            const errors = {
                first_name: '',
                last_name: '',
                email: '',
                subject: '',
                message: '',
            };
            if (!values.first_name) errors.first_name = "first name field couldn't be empty";

            // email validation checking
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        onSubmit: handleSubmit,
    });

    return (
        <div className="text-bg-light mt-5 p-5">
            <h1 className='mb-2 text-center text-danger fw-bolder'>Get in touch</h1>
            <h5 className='mb-5 text-center text-black-50'>I'm glad to hear your opinion, please let me know.</h5>

            <div className='mx-5 my-5 shadow p-4 bg-body-tertiary rounded-4'>
                <form onSubmit={formik.handleSubmit}>
                    {/* name group */}
                    <div className="input-group mb-3">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" aria-label="First name" id='first_name' name='first_name'
                               value={formik.values.first_name} onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               maxLength={15}
                               className="form-control form-control-sm"/>
                        <input type="text" aria-label="Last name" id='last_name' name='last_name'
                               value={formik.values.last_name} onChange={formik.handleChange}
                               className="form-control form-control-sm"/>
                        {formik.errors.first_name &&
                            <span style={{color: 'darkred', marginLeft: '1%'}}>{`${formik.errors.first_name}*`}</span>}
                    </div>

                    {/* email */}
                    <div className="input-group mb-3">
                        <span className="input-group-text">Email:</span>
                        <input type="email" aria-label="email" id='email' name='email'
                               value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                               required={true}
                               className={`form-control form-control-sm ${formik.touched.email && formik.errors.email && 'text-bg-danger'}`}/>
                    </div>

                    {/* subject */}
                    <div className="input-group mb-5">
                        <span className="input-group-text">Subject:</span>
                        <input type="text" aria-label="subject" id='subject' name='subject'
                               value={formik.values.subject} onChange={formik.handleChange}
                               className="form-control"/>
                    </div>

                    {/* message */}
                    <div className="input-group mb-3">
                        <textarea aria-label="message" id='message' name='message'
                                  value={formik.values.message} onChange={formik.handleChange}
                                  className="form-control form-control-lg"/>
                        <span className="input-group-text">Message</span>
                    </div>

                    {/* submit */}
                    <div>
                        <button type='submit' className='btn btn-primary btn-lg'>SEND</button>
                    </div>
                </form>
            </div>

            <h6><i>Powered by</i> <a href='https://formik.org'>Formik</a> & Yup</h6>
        </div>
    );
}