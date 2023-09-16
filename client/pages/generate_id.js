'use client'
import { useState } from 'react';

export default function Generate_id() {
  const [name, setName] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || imageurl.trim() === '') {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Handle form submission logic here
    // If both fields are filled, proceed with submission
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Generate Member ID
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                Member's Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md px-2 border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset
                            ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder='Name'
                />
              </div>
            </div>

            <div>
              <label htmlFor="imageurl" className="block text-sm font-medium leading-6 text-white">
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="imageurl"
                  name="imageurl"
                  type="text"
                  autoComplete="imageurl"
                  value={imageurl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                  className="px-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset
                            ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder='Image URL'
                />
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm 
                            font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
