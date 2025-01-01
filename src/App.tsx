
import { Ban, BellRing,CheckCheck,CircleAlert, MailWarning } from 'lucide-react'
import './App.css'
import Alert from './component/alert'

function App() {


  return (
    <>
      <Alert type= {'alert-warning'} title={'Warning'} icon={<BellRing />} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt doloribus architecto quae nam sit reiciendis. Nemo minima quidem exercitationem?</Alert>
      <Alert type={'alert-error'} title={'Error'} icon={<Ban />} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt doloribus architecto quae nam sit reiciendis. Nemo minima quidem exercitationem?</Alert>
      <Alert type={'alert-default'} title={'Take Care'} icon={<MailWarning />}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt doloribus architecto quae nam sit reiciendis. Nemo minima quidem exercitationem?</Alert>
      <Alert type={'alert-Info'} title={'Something went wrong'} icon={<CircleAlert />}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt doloribus architecto quae nam sit reiciendis. Nemo minima quidem exercitationem?</Alert>
      <Alert type={'alert-success'} title={'success'} icon={<CheckCheck />} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt doloribus architecto quae nam sit reiciendis. Nemo minima quidem exercitationem?</Alert>
    </>
  )
}

export default App
