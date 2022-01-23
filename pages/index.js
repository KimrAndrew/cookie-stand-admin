import react from 'react';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
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

function CookieStandCreationForm() {
  return (
    <form className='mt-8 m-auto w-8/12 bg-emerald-300' onSubmit={(event) => {
      event.preventDefault();
      const locationData = {}
      locationData['location'] = event.target.location.value;
      locationData['minCustomers'] = event.target.minCustomers.value;
      locationData['maxCustomers'] = event.target.maxCustomers.value;
      locationData['avgCookies'] = event.target.avgCookies.value;
      locationData['hourlySales'] = [48,42,30,24,42,24,36,42,24,36];
      return locationData;
    }}>
      <h2 className="text-2xl text-center p-4">Create Cookie Stand</h2>
      <div className="text-center w-full justify-between text-center">
        <label className="pr-2" htmlFor='locataion'>Location</label>
        <input name = 'location' type='text' className="w-11/12" />
      </div>
      <div className="m-6 ">
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='min-customers' className="block">Minimum Customers per Hour</label>
          <input id='minCustomers' type='number' className="block w-full" />
        </div>
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='max-customers' className="block">Maximum Customers per Hour</label>
          <input id='maxCustomers' type='number' className="block w-full"/>
        </div>
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='avg-customers' className="block">Average Customers per Hour</label>
          <input id='avgCookies' type='number' className="block w-full"/>
        </div>
        <button type='submit' value='Create' className='bg-emerald-500 p-4 w-48 mb-4'>Create</button>
      </div>
    </form>
  )
}



