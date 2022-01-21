export default function Home() {
  return (
    <>
    <Head />
    <Main />
    <div className="text-center">
      <h3>Report Table Coming Soon...</h3>
      <p>{'{\"location\":\"Barcelona\",\"minCustomers\":2,\"maxCustomers\":4,\"avgCookies\":2.5}'}</p>
    </div>
    <Footer />
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
    <form className='mt-8 m-auto w-8/12 bg-emerald-300'>
      <h2 className="text-2xl text-center p-4">Create Cookie Stand</h2>
      <div className="text-center w-full justify-between text-center">
        <label className="pr-2">Location</label>
        <input type='text' className="w-11/12" />
      </div>
      <div className="m-6 ">
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='min-customers' className="block">Minimum Customers per Hour</label>
          <input id='min-customers' type='number' className="block w-full" />
        </div>
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='max-customers' className="block">Maximum Customers per Hour</label>
          <input id='max-customers' type='number' className="block w-full"/>
        </div>
        <div className="inline-block w-1/4 mr-3 text-center">
          <label htmlFor='avg-customers' className="block">Average Customers per Hour</label>
          <input id='avg-customers' type='number' className="block w-full"/>
        </div>
        <input type='submit' value='Create' className='bg-emerald-500 p-4 w-48' />
      </div>
    </form>
  )
}

function Footer() {
  return (
    <p className="bg-emerald-500 p-4 mt-4"> &copy 2021</p>
  )
}

