import React, { useState, useEffect } from 'react';

// Material UI components
import { 
    Card,
    FormControl, 
    MenuItem, 
    InputLabel, 
    Select, 
    Grid, 
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { POSTS_FROM_AUTHORS } from '../Redux/postsActions';
import HeaderFilter from './Header.Filters';

// This component is responsible to fillter posts, according to changes which will be occured by USER in this section
const Filters = () => {
    const authors = useSelector(state => state.postsInfo.authors);
    const [filtteredAuthorsPosts, setFiltteredAuthorsPosts] = useState("All Posts");
    const dispatch = useDispatch();
// When user change any filters, they will be inserted into REDUX THUNK store.fillteredPosts
    useEffect(()=>{
            dispatch(POSTS_FROM_AUTHORS(filtteredAuthorsPosts));
    }, [filtteredAuthorsPosts])
    

    
    return (
        
        <>
        <HeaderFilter />

        <Card style={{ minHeight: '550px', minWidth: '100%', backgroundColor: 'rgb(24,118,209,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 0' }} >
            <Grid container align="center" spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '10px'}}>
                <Grid item xs={12} > 
                    <FormControl variant="filled" style={{ width: '170px' }}>
                        <InputLabel id="demo-simple-select-filled-label" style={{ color: 'white' }}>Authors</InputLabel>
                        <Select
                            value={filtteredAuthorsPosts}
                            onChange={(e) => setFiltteredAuthorsPosts(e.target.value)}
                            labelId="demo-simple-select-filled-label"
                        >
                            <MenuItem  value='All Posts' >All Authors</MenuItem>
                            {
                                !authors ? <MenuItem value=''>loading ...</MenuItem> :
                                    authors.map((author, index) => {
                                        return <MenuItem key={index} value={author.name} >{author.name}</MenuItem>
                                    })
                                }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default Filters