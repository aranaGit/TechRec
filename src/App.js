import React,{Component} from 'react';
import UserAccessData from './containers/UserAccessData';
import AppToolbar from './components/toolbar/Toolbar';
import MainContent from './containers/MainContent';
import classes from '../src/App.module.css';
import {withStyles} from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = {
      root:{
        display:'flex',
      },
      drawer:{
        width: drawerWidth,
        flexShrink:0
      },
      appBar:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      menuButton:{
        marginRight:5
      },
      drawerPaper:{
        width:drawerWidth,
      },
      content:{
        flexGrow:1,
        marginTop: 30,
        paddingTop: 30,
        paddingLeft:0
      },
      padding:{
        padding:5,
      },

}


class App extends Component{
  state ={
    userAccessDataList: {
      "SS": "Static Service",
      "Author": "Role"
    }
  }
  
    render(){
     // const {classes} = this.props;
      return (
        <div className={classes.root}>
          <AppToolbar />
          <UserAccessData userAccessDataProps = {this.state.userAccessDataList}/>
          <MainContent className={classes.content}/>
        </div>
      );
    }
  
}

export default withStyles(useStyles)(App);
