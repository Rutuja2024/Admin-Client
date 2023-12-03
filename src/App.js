import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';


import { PostList } from './components/user';
import{EditUser} from './components/EditUser';
import{CreateUser} from './components/CreateUser';



const App = () => (

    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name="user" list={PostList} 
        create={CreateUser} edit={EditUser}  />
    </Admin>
);

export default App;
