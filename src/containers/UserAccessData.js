import React, {Component} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from '../containers/UserAccessData.module.css';

class UserAccessData extends Component{
    
    render(){
        const data = this.props.userAccessDataProps;
        console.log("test data",data);
        return(
            <div className={classes.container}>
                <Button variant="contained" color="grey" className={classes.item} aria-label="Test"></Button>
                <br/>
                <Button variant="contained" color="grey" className={classes.item}>Static Data2</Button>
                <br/>
                <Button variant="contained" color="grey" className={classes.item}>Static Data3</Button>
            </div>
        );
    }

}

export default UserAccessData;