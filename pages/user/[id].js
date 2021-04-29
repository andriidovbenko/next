import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Button from '../../components/Button'

export default function User({user, projects}) {
const router = useRouter();
  return (
    <div>
        <div>
            <h2>User info:</h2>
            <p><b>User name:</b> { user.name}</p>
            <p><b>Email:</b> { user.email}</p>
        </div>
        <hr />
        <div>
            <h3>Projects: </h3>
            <ol>
                {
                    projects.map(project => (<li key={project.id}>{project.title}</li>))
                }
            </ol>
        </div>
        <br/>
        <Button onClick={() => router.push('/')}>Back</Button>
    </div>
  )
}

export async function getStaticProps({ params }) {  
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
        fallback: false
    }
}