// in posts.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton,  DeleteButton} from 'react-admin';


export const PostList = () => (
    <List>
        <Datagrid
         sx={{
            "& .RaDatagrid-headerCell": {
                fontWeight: "Bold"
            }
        }}>
            
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="role" />
            <EditButton  basepath = '/user' />
            <DeleteButton  basepath = '/user' />
        </Datagrid>
    </List>
);


export default PostList;




