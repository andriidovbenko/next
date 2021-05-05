import axios from 'axios';
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import GroupInputs from '../../../components/GroupInputs'




export default function AddEditUser({user,projects}) {
    const isEditMood = !!user;
    const router = useRouter();

    const postData = async (values) => {
        if (isEditMood) {
            await axios.put(`http://localhost:3000/api/person/${user.id}`, values)
        } else {
            await axios.post('http://localhost:3000/api/add-person', values)
        }
    };

    const deleteProject = async (id) => {
        if(isEditMood) {
            await axios.delete(`http://localhost:3000/api/project/${id}`)
        }
    }

  return (
    <div>
       <Formik initialValues={{
           name: isEditMood ? user.name : '',
           email: isEditMood ? user.email : '',
           projects: isEditMood ? projects : []
       }}
       validationSchema={Yup.object({
           name: Yup.string().min(3, 'Should be more than 3 characters').required(),
           email: Yup.string().email('Should be avalid email').required()
       })}
       onSubmit={(values, { setSubmitting, resetForm }) => {
            postData(values)
           setSubmitting(false)
           resetForm()
           router.push('/')
       }}
       >
        {
            props => (
                <Form>
                    <h1>{isEditMood ? 'Editing user' : 'Adding new user'}</h1>
                    <TextInput label="Name" name="name" type="text"/>
                    <TextInput label="Email" name="email" type="email"/>
                    <FieldArray
                        name="projects"
                        render={arrayHelpers => 
                            (
                                <div>
                                    {
                                        props.values.projects.map((project, index) => (
                                            <GroupInputs key={index}>
                                                <TextInput
                                                    label="Project title"   
                                                    name={`projects[${index}].title`}
                                                    type="text"
                                                />
                                                <TextInput
                                                    label="Project description"
                                                    name={`projects[${index}].description`}
                                                    type="text"
                                                />
                                                <Button danger onClick={() => {
                                                    arrayHelpers.remove(index)
                                                    deleteProject(project.id)
                                                }}>Remove project</Button>
                                            </GroupInputs>
                                        ))
                                    }
                                    <Button type="button" onClick={() => arrayHelpers.push({ title: '', description: '' })}>Add project</Button>
                                </div>
                            )
                        }
                    />
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

export async function getStaticProps({ params }) {
    if (params.id !== 'new') {
        const [{data: user}, {data: projects}] = await Promise.all([
            axios.get(`http://localhost:3000/api/person/${ params.id }`),
            axios.get(`http://localhost:3000/api/person/${ params.id }/projects`)
        ]);
        return {
            props: {
              user,
              projects
            }
          }
    } else {
        return {
            props: {}
        }
    }
}

export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:3000/api/people`);
    return {
        paths: res.data.map(user => {
            return {
                params: {
                    id:  user.id.toString()
                }
            }
        }),
        fallback: true
    }
}
