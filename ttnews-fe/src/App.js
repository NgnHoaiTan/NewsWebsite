import Home from './components/Homepage/Home';
// import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import { News } from './components/Newspage/News';
import Profile from './components/Users/Profile';
import CreateNews from './components/Users/CreateNews';
import CreateTopics from './components/Users/CreateTopics';
import { HomeAdmin } from './components/Admin/Home';
import { Login } from './components/Login/Login';
import { DetailNews } from './components/Admin/ViewDetailNews';
import { DetailDeclineNews } from './components/Admin/ViewDetailDeclineNews';
import { Topicpage } from './components/Topicpage';
import {Subtopicpage} from './components/Subtopicpage';
import { Signup } from './components/Signup';
import { ApprovedNews } from './components/Users/ApprovedNews';
import { DeclinedNews } from './components/Users/DeclinedNews';
const App =() => {
 
  return(
  <>
    
    <Router>
      <Switch>
        <Route exact path='/' component={()=><Home/>} />  
        <Route path='/login' component={()=><Login/>} />
        <Route path='/signup' component={()=><Signup/>} />
        <Route path='/News/:NewsId' component={News} />
        <Route path='/profile' exact component={Profile} />
        <Route path="/profile/Thembaiviet" component={CreateNews}/>
        <Route path="/profile/Themchude" component={CreateTopics} />
        <Route path="/profile/approved" component={ApprovedNews} />
        <Route path="/profile/declined" component={DeclinedNews} />
        <Route exact path='/admin' component={HomeAdmin} />
        <Route path='/admin/news/viewdetail/:Newsid' component={DetailNews} />
        <Route path='/admin/news/viewdetaildecline/:Newsid' component={DetailDeclineNews} />

        <Route path='/topic/:Topicid/page/:page/pageSize/:pageSize' component={Topicpage} key={window.location.pathname} />
        <Route path='/subtopic/:Subtopicid/page/:page/pageSize/:pageSize' component={Subtopicpage} key={window.location.pathname}/>
      </Switch> 
      <GlobalStyles />
    </Router>
  </>
  )
};


export default App;
