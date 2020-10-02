import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** Styles */
import './App.css';

/** Redux */
import allActions from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

/** Services */
import API from './services/api';

/** Components */
import Navbar from './components/nav/Navbar';

/** View */
import Login from './view/auth/Login';
import Blank from './view/blank/Blank';
// import User from './view/user/User';
// import CreateUser from './view/user/CreateUser';
// import EditUser from './view/user/EditUser';
// import Role from './view/role/Role';
// import CreateRole from './view/role/CreateRole';
// import EditRole from './view/role/EditRole';

import Contact from './view/contact/Contact';
import CreateContact from './view/contact/CreateContact';
import EditContact from './view/contact/EditContact';
import Localization from './view/localization/Localization';
import CreateLocalization from './view/localization/CreateLocalization';
import EditLocalization from './view/localization/EditLocalization';
import Dictionary from './view/dictionary/Dictionary';
import CreateDictionary from './view/dictionary/CreateDictionary';
import EditDictionary from './view/dictionary/EditDictionary';
import Blog from './view/blog/Blog';
import CreateBlog from './view/blog/CreateBlog';
import EditBlog from './view/blog/EditBlog';
import Vacancy from './view/vacancy/Vacancy';
import CreateVacancy from './view/vacancy/CreateVacancy';
import EditVacancy from './view/vacancy/EditVacancy';
import About from './view/about/About';
import EditAbout from './view/about/EditAbout';
import CreateAbout from './view/about/CreateAbout';
import CreateFeedback from './view/feedback/CreateFeedback';
import EditFeedback from './view/feedback/EditFeedback';
import Feedback from './view/feedback/Feedback';
import EditNumber from './view/number/EditNumber';
import CreateNumber from './view/number/CreateNumber';
import Number from './view/number/Number';
import EditSlide from './view/slide/EditSlide';
import CreateSlide from './view/slide/CreateSlide';
import Slide from './view/slide/Slide';
import EditWorkingStyle from './view/workingstyle/EditWorkingStyle';
import CreateWorkingStyle from './view/workingstyle/CreateWorkingStyle';
import WorkingStyle from './view/workingstyle/WorkingStyle';
import EditFrontBox from './view/frontbox/EditFrontBox';
import CreateFrontBox from './view/frontbox/CreateFrontBox';
import FrontBox from './view/frontbox/FrontBox';
 
const App = () => {

  const user = useSelector(state => state.currentUser);
  const dictionary = useSelector(state => state.dictionary);
  const dispatch = useDispatch();


  /** Checks if the access_token is valid */
  const authHandler = useCallback((accessToken) => {
      
      API.post('auth/me').then(res => {

        if (res.data) {

          dispatch(allActions.userActions.setAccessToken(accessToken));

        } else {

          localStorage.removeItem('access_token');
          window.location.href = '/login';
        }

      }).catch(err => {

        localStorage.removeItem('access_token');
        window.location.href = '/login';
        
      })
  }, [ dispatch ])
  
  
  
  /** Gets all available languages */
  const localizationHandler = useCallback(() => {

    API.get(`localizations`).then(res => {
        
        const { data } = res.data

        let languages = [];
        let local = null;

        /** The response object turns into an array ([en: English, ge: ქართული]) */
        if (data) {

          data.data.forEach(item => {

            if (item.default) {

              local = item.abbreviation;  
            }

            languages[item.abbreviation] = item.native;
          })


         /** Set array of supported languages ​​and default language to Redux store */

          if (local) {

            if (localStorage.getItem('lang')) {
               dispatch(allActions.dictionaryActions.setLocal(localStorage.getItem('lang')));
            } else {
              dispatch(allActions.dictionaryActions.setLocal(local));
              localStorage.setItem('lang',local)
            }

          }

          dispatch(allActions.dictionaryActions.setLanguages(languages));
        }

      }).catch(err => {

        console.log('something went wrong ...')

      })
  }, [ dispatch ])
  


  /** Sets all translations (key: value) from the database to Redux Store  */
  const dictionaryHandler = useCallback( lang => {

    let apiUrl = `${dictionary.lang}/dictionaries`;

      API.get(apiUrl).then(res => {

        const { data } = res.data;

        let newArray = [];                                                             
        let obj = data.data;

        obj.forEach(item => {
          newArray[item.key] = item.value;
        })
        
        dispatch(allActions.dictionaryActions.setDictionary(newArray));

      }).catch(err => {
        console.log('something went wrong ...')
      })
  }, [ dispatch , dictionary.lang ])
  

  /** If there is no access_token in the localStorage ,
   *  the application is redirected to the login page,
   *  otherwise, the authHandler function will check the validity of this token. */
  useEffect(() => {

    const accessToken = localStorage.getItem('access_token');

    if(!accessToken){
      
      if(window.location.pathname !== '/login'){
        window.location.href = '/login';
      }

    } else {

      authHandler(accessToken)
    }
  }, [ authHandler ])

  useEffect(() => { 

      localizationHandler();
  }, [localizationHandler])
  
   useEffect(() => { 

      dictionaryHandler();
  },[dictionaryHandler])
  
  return ( 
    <Router>
      { user.loggedIn ? <Navbar /> : null}
      
      <Route path = '/login'    component = { Login } exact />
      <Route path = '/blank'    component = { Blank } exact />
    {/* 
      <Route path = '/:lang?/roles'           component = { Role } exact />
      <Route path = '/:lang?/roles/create'    component = { CreateRole } exact />
      <Route path = '/:lang?/roles/:id/edit'  component = { EditRole } exact />

      <Route path = '/:lang?//users'             component = { User } exact />
      <Route path = '/:lang?//users/create'      component = { CreateUser } exact />
      <Route path = '/:lang?//users/:id/edit'    component = { EditUser } exact />

      <Route path = '/:lang?//users'             component = { User } exact />
      <Route path = '/:lang?//users/create'      component = { CreateUser } exact />
      <Route path = '/:lang?//users/:id/edit'    component = { EditUser } exact /> 
      */}

      {/* <Route path = ':lang/contacts'       component = { Contact } exact /> */}
   
      

      <Route path = '/:lang?/frontboxes/create'    component = { CreateFrontBox } exact />
      <Route path = '/:lang?/frontboxes/:id/edit'  component = { EditFrontBox } exact />
      <Route path = '/:lang?/frontboxes'           component = { FrontBox } exact />

      <Route path = '/:lang?/workingstyles/create'    component = { CreateWorkingStyle } exact />
      <Route path = '/:lang?/workingstyles/:id/edit'  component = { EditWorkingStyle } exact />
      <Route path = '/:lang?/workingstyles'           component = { WorkingStyle } exact />
      

      <Route path = '/:lang?/slides/create'    component = { CreateSlide } exact />
      <Route path = '/:lang?/slides/:id/edit'  component = { EditSlide } exact />
      <Route path='/:lang?/slides'             component = { Slide } exact />
      

      <Route path = '/:lang?/numbers/create'    component = { CreateNumber } exact />
      <Route path = '/:lang?/numbers/:id/edit'  component = { EditNumber } exact />
      <Route path = '/:lang?/numbers'           component = { Number } exact />

      <Route path = '/:lang?/feedbacks/create'    component = { CreateFeedback } exact />
      <Route path = '/:lang?/feedbacks/:id/edit'  component = { EditFeedback } exact />
      <Route path = '/:lang?/feedbacks'           component = { Feedback } exact />

      <Route path = '/:lang?/abouts/create'    component = { CreateAbout } exact />
      <Route path = '/:lang?/abouts/:id/edit'  component = { EditAbout } exact />
      <Route path = '/:lang?/abouts'           component = { About } exact />
      
      <Route path='/:lang?/vacancies/create' component={CreateVacancy} exact />
      <Route path = '/:lang?/vacancies/:id/edit'  component = { EditVacancy } exact />
      <Route path = '/:lang?/vacancies'           component = { Vacancy } exact />

      <Route path = '/:lang?/blogs/create'    component = { CreateBlog } exact />
      <Route path = '/:lang?/blogs/:id/edit'  component = { EditBlog } exact />
      <Route path = '/:lang?/blogs'           component = { Blog } exact />

      
      <Route path = '/:lang?/dictionaries/create'    component = { CreateDictionary } exact />
      <Route path = '/:lang?/dictionaries/:id/edit'  component = { EditDictionary } exact />
      <Route path = '/:lang?/dictionaries'           component = { Dictionary } exact />
      

      <Route path = '/:lang?/localizations/create'    component = { CreateLocalization } exact />
      <Route path = '/:lang?/localizations/:id/edit'  component = { EditLocalization } exact />
      <Route path = '/:lang?/localizations'           component = { Localization } exact />
      

      <Route path = '/:lang?/contacts/create'    component = { CreateContact } exact />
      <Route path = '/:lang?/contacts/:id/edit'  component = { EditContact } exact />
      <Route path = '/:lang?/contacts' component = { Contact } exact />
      
    </Router>
  );
}

export default App;
