import ListItemWrapper from '../components/ListItemWrapper';
import ListGrid from '../components/ListGrid';;
import Button from '../components/Button'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Users({users}) {
  const router = useRouter();

  const onButtonClick = (id) => {
    router.push(`./user/${id}`)
  }
  return (
    <>
      <ListGrid>
        {
          users.map((user) => (
            <ListItemWrapper key={user.id}>
              <h3>{ user.name }</h3>
              <p>Email: { user.email }</p>
              <Button onClick={()=> onButtonClick(user.id)}>Get more info</Button>
            </ListItemWrapper>
          ))
        }
      </ListGrid>
      <hr />
      <Button onClick={() => router.push('user/new')}>Add new user</Button>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:3000/api/people`);

  return {
    props: {
      users: res.data
    }
  }
}