import react from 'react';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CookieStandCreationForm from '../components/CookieStandCreationForm';
import { hours } from '../data/data.js';
export default function Home() {
  const [cookieStands,setCookieStands] = react.useState([]);
  return (
    <>
    <Head />
    <Main cookieStands={cookieStands} setCookieStands={setCookieStands}/>
    <ReportTable hoursOfOperation={hours} cookieStands={cookieStands}/>
    <Footer count={cookieStands.length}/>
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

function Main(props) {
  return(
    <>
      <CookieStandCreationForm cookieStands={props.cookieStands} setCookieStands={props.setCookieStands} />
    </>
  )
}



