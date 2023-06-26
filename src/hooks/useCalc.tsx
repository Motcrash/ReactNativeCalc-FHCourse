import { useRef, useState } from "react"

enum Operators {
    add, substract, multiply, divide
}

export const useCalc = () => {
    const [result, setResult] = useState('0')
    const [subresult, setSubresult] = useState('0')
  
    const lastOperation = useRef<Operators>()
  
    const btnClear = () => {
      setResult('0')
      setSubresult('')
    }
  
    const mountNumber = ( num: string ) => {
      // No more than one decimal point
      if( result.includes( '.' ) && num === '.' ) return;
  
      //No more than one cero before decimal point
      if(result == '0' && num != '.') {
        setResult( num )
  
        //No more than one cero with sign
      }else if( result == '-0' && num=='0'){
        return
      }else setResult( result + num )
    }
  
    //Changing sign
    const btnSign = () => {
      if ( result.includes( '-' ) ){
        setResult( result.replace('-', ''));
      }else setResult( '-' + result )
    }
  
    //Deleting the last character
    const btnDelete = () => {   
      if( result.length > 1){
        setResult( result.slice(0, -1) )
      }else setResult( '0' )
    }
  
    const resultToSubresult = () => {
      if( result.endsWith( '.' ) ) {
        setSubresult( result.slice(0,-1) )
      }else setSubresult( result );
      setResult( '0' )
    }
  
    const btnDivide = () => {
      resultToSubresult();
      lastOperation.current = Operators.divide;
    }
    
    const btnMultiply = () => {
      resultToSubresult();
      lastOperation.current = Operators.multiply;
    }
  
    const btnSubstract = () => {
      resultToSubresult();
      lastOperation.current = Operators.substract;
    }
  
    const btnAdd = () => {
      resultToSubresult();
      lastOperation.current = Operators.add;
    }
  
    const calculate = () => {
      const num1 = Number( result );
      const num2 = Number( subresult );
  
      switch ( lastOperation.current ){
        case Operators.add:
          setResult( `${num1 + num2}`)
          break;
        case Operators.substract:
          setResult( `${num1 - num2}`)
          break;
        case Operators.multiply:
          setResult( `${num1 * num2}`)
          break;
        case Operators.divide:
          setResult( `${num2 / num1}`)
          break;
      }
  
      setSubresult('0')
    }

    return{
        result,
        subresult,
        btnClear,
        btnAdd,
        btnSubstract,
        btnMultiply,
        btnDivide,
        btnDelete,
        btnSign,
        mountNumber,
        calculate
    }
}
