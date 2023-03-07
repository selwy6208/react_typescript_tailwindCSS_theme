import { useState } from 'react';
//import Button from "react-bootstrap/Button";
 
import { useGetMultipleValue } from '../query/test';

function OutMultipleValue(): JSX.Element {
  const [countValue, setCountValue] = useState<number>(0)

  const {
    data: result,
    isLoading,
    //error,
  } = useGetMultipleValue(countValue)

  const display = () => {
    setCountValue(countValue + 1)
  }
  
  if (isLoading) {
    return  <div className="container">
      <h1>Loading...</h1>
      </div>
  }

  // if (error) {
  //   return  <div className="container">
  //     <h1>{error.message}</h1>
  //     </div>
  // }

  return (
    <div className="container">
      <div style={{ marginBottom: "55px"}}>
        <div style={{fontSize: "18px"}}>Your Count</div>
        <div style={{fontSize: "18px"}}>{countValue}</div>
        <div style={{marginTop: "30px"}}>
          {/* <Button className="btn btn-primary btn-lg" type='button' disabled={isLoading} onClick={display}>Push me!</Button> */}
          <button disabled={isLoading} onClick={display} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
          </button>
        </div >
      </div>
      <div style={{fontSize: "48px"}}>{result?.data.value}</div>
    </div>
  );
}

export default OutMultipleValue;
