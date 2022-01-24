export default function CookieStandCreationForm(props) {
    return (
      <form className='mt-8 m-auto w-8/12 bg-emerald-300 text-center' onSubmit={(event) => {
            // get the new cookieStand object created from the form data
            const locationData = handleSubmit(event);

            // update state in Home with newly created cookieStand

            /*
                props are supposed to be read only, with that said it would be
                more efficient to break that rule and append directly to the array
                that gets passed in rather than needing to duplicate it to adhere
                to that rule...
            */
            const currentStands = props.cookieStands.map(stand => stand);
            currentStands.push(locationData);
            props.setCookieStands(currentStands);
        }}>
        <h2 className="text-2xl p-4 m-auto">Create Cookie Stand</h2>
        <div className="p-4 m-auto">
          <div className="mb-6">
            <label className="pr-2" htmlFor='locataion'>Location</label>
            <input name = 'location' type='text' className="w-11/12" />
          </div>
          <div className="flex justify-between">
            <div className="inline-block w-56 text-center bg-emerald-200 rounded">
              <label htmlFor='min-customers' className="block">Minimum Customers per Hour</label>
              <input id='minCustomers' type='number' className="block w-52 m-auto" />
            </div>
            <div className="inline-block w-56 text-center bg-emerald-200 rounded">
              <label htmlFor='max-customers' className="block">Maximum Customers per Hour</label>
              <input id='maxCustomers' type='number' className="block w-52 m-auto"/>
            </div>
            <div className="inline-block w-56 text-center bg-emerald-200">
              <label htmlFor='avg-customers' className="block">Average Customers per Hour</label>
              <input id='avgCookies' type='number' className="block w-52 m-auto"/>
            </div>
            <button type='submit' value='Create' className='bg-emerald-500 p-4 w-56'>Create</button>
          </div>
        </div>
      </form>
    )
}

function handleSubmit(event) {
    event.preventDefault();
    const locationData = {}
    locationData['location'] = event.target.location.value;
    locationData['minCustomers'] = event.target.minCustomers.value;
    locationData['maxCustomers'] = event.target.maxCustomers.value;
    locationData['avgCookies'] = event.target.avgCookies.value;
    locationData['hourlySales'] = [48,42,30,24,42,24,36,42,42,48,36,42,24,36];
    locationData['total'] = locationData['hourlySales'].reduce((prev,current) => {
        return prev + current;
    });
    return locationData;
}