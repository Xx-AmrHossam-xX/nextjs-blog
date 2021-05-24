import Error from 'next/error'


// Try adding different error codes here and the 
// component will display the relative error message
// well it works for those only , other than that it
// will display "An unexpected error has occurred."

// 400 , 404 , 500

export default function ErrorPage(){
  return <Error statusCode='404' />
}