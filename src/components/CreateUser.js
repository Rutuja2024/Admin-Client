import * as React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';


export const CreateUser = (props) => {
    return(
    <Create title= "Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <TextInput source="email"  label="Email" />
            <TextInput source="role" label="Role" />
        </SimpleForm>
    </Create>)
    }
export default CreateUser;