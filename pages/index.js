import react from 'react';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CookieStandCreationForm from '../components/CookieStandCreationForm';
export default function Home() {
  const [numStands,setNumStands] = react.useState(6);
  const [cookieStands,setCookieStands] = react.useState([]);
  return (
    <>
    <Head />
    <Main />
    <ReportTable reports={[5]}/>
    <Footer count={numStands}/>
    </>
  )
}

function Head() {
  return (
    <header>
      <h1 className="text-4xl items-center bg-emerald-500 p-4">Cookie Stand Admin</h1>
    </header>
  )
}

function Main() {
  return(
    <>
      <CookieStandCreationForm/>
    </>
  )
}



