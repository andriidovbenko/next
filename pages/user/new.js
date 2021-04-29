import axios from 'axios';
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'


const postData = async (values) => {
    const resp = await axios.post('http://localhost:3000/api/add-person', values)
}

export default function NewUser({user, projects}) {
    const router = useRouter();
  return (
    <div>
       <Formik initialValues={{
           name: '',
           email: ''
       }}
       validationSchema={Yup.object({
           name: Yup.string().min(3, 'Should be more than 3 characters').required(),
           email: Yup.string().email('Should be avalid email').required()
       })}
       onSubmit={(values, { setSubmitting, resetForm }) => {
            postData(values)
           setSubmitting(false)
           resetForm()
       }}
       >
        {
            props => (
                <Form>
                    <h1>Adding new user</h1>
                    <TextInput label="Name" name="name" type="text"/>
                    <br />
                    <TextInput label="Email" name="email" type="email"/>
                    <br />
                    <Button danger type="submit" disabled={!props.isValid}>{props.isSubmitting ? 'Loading' : 'Submit'}</Button>
                </Form>
            )
        }
       </Formik>
       <hr />
       <Button onClick={() => router.push('/')}>Back</Button>
    </div>
  )
}
