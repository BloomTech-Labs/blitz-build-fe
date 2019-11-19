import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import  Search from '../styles/Search/Search.png'
import TasksContext from '../contexts/tasks/TaskContext'
import Modal from '../components/global/Modal'
import TaskForm from '../components/tasks/TaskForm'

const HeaderContainer = styled.div`
  background: #fff;
  width: 1144px;
  height: 96px;
  display: flex;
  justify-content: space-between;

`;

const SearchContainer= styled.div`
  margin: 24px 32px;
  width: 464px;

`
const ButtonContainer=styled.div`
display: flex;
margin-top: 24px;
width: 400px;
justify-content: center;
margin-left: 100px;
`

const ButtonDocument = styled.div`
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 174px;
 height: 48px;
 justify-content: center;
 align-items: center;
`
const ButtonDocumentCheck = {
  display: 'flex',
  borderRadius: '3px',
  border: '1px solid #8A827D',
   width: '174px',
   height: '48px',
   justifyContent: 'center',
   alignItems: 'center',
   
  }
const SoloDocument = {
  display: 'flex',
  borderRadius: '3px',
  border: '1px solid #8A827D',
   width: '174px',
   height: '48px',
   justifyContent: 'center',
   alignItems: 'center',
  marginLeft: '160px'
}
const ButtonProject = styled.div `
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 151px;
 height: 48px;
 justify-content: center;
 align-items: center;
 margin-left: 10px;

`
const ButtonTask = styled.div `
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 151px;
 height: 48px;
 justify-content: center;
 align-items: center;
 margin-left: 10px;

`
const ButtonProjectCheck = {
display: 'flex',
borderRadius: '3px',
border: '1px solid #8A827D',
 width: '151px',
 height: '48px',
 justifyContent: 'center',
 alignItems: 'center',
}

const ButtonI =styled.i`
 font-size: 21px;
 color: #8A827D
`
const ButtonText = styled.p`
font-size: 19px
margin-left: 10px;
color: #8A827D
`
const HideButton = { 
display: 'none',

}







function Header({pathname}) {

  const { addTask } = useContext(TasksContext);

  const [modalStatus, setModalStatus] = useState(false);

  const handleModalOpen = () => {
    setModalStatus(true);
  };
  const handleModalClose = () => {
    setModalStatus(false);
  };

  const HideTheProjectButton = (pathname) => {
  
 if(pathname === '/projects' || pathname === '/dashboard' || pathname === '/tasks') {
     return ButtonProjectCheck
 }
 else {
     return HideButton
 }  };
 const HideTheDocumentButton = (pathname) => {
  
  if( pathname === '/dashboard' || pathname === '/projects' ) {
      return ButtonDocumentCheck
  }
  else if(pathname === '/documents') {

    return SoloDocument

  }
  else {
      return HideButton
  }  
}
const HideTheTaskButton = (pathname) => {
  
  if( pathname === '/tasks' ){
      return ButtonProjectCheck
  }
  else {
      return HideButton
  }  
}


    return (
        
        <HeaderContainer >
            <SearchContainer>
                
           <img  src={Search} alt="Blitz-Build-Search"/>
                
           </SearchContainer>
            <ButtonContainer>
          <ButtonDocument style= {HideTheDocumentButton(pathname)}> <ButtonI className = 'ion-ios-add-circle'/> <ButtonText>New Document</ButtonText></ButtonDocument>
          <ButtonProject style = {HideTheProjectButton(pathname)}>  <ButtonI className = 'ion-ios-add-circle'/><ButtonText>New Project</ButtonText></ButtonProject>
          <ButtonTask style = {HideTheTaskButton(pathname)} onClick={ handleModalOpen }>  <ButtonI className = 'ion-ios-add-circle'/><ButtonText>New Task</ButtonText></ButtonTask>
          <Modal
        visible={ modalStatus }
        dismiss={ handleModalClose }
        client={'50%'}
        component={
          <TaskForm 
          closeModal={ handleModalClose } 
          handleFunction={ addTask }
          text={ 'Add Task' }
        />
        }
      />
          </ButtonContainer>
        </HeaderContainer>
         
    )
}

export default Header




