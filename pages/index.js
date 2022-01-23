import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CookieStandCreationForm from '../components/CookieStandCreationForm';
export default function Home() {
  return (
    <>
    <Head />
    <Main />
    <ReportTable reports={[5]}/>
    <Footer count={0}/>
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



