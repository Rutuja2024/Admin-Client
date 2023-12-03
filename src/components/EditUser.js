
import * as React from 'react';
import { Edit, SimpleForm, TextInput} from 'react-admin';



export const EditUser = (props) => {
    return(
        <Edit title= "Create a Post" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email"  />
            <TextInput source="role"  />

        </SimpleForm>
    </Edit>)
    }



export default EditUser;