import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalc } from '../hooks/useCalc';

export const CalculatorScreen = () => {

  const {result,
    subresult,
    btnClear,
    btnAdd,
    btnSubstract,
    btnMultiply,
    btnDivide,
    btnDelete,
    btnSign,
    mountNumber,
    calculate} = useCalc();

  return (


    <View style = { styles.calcContainer }>
        {
          ( subresult !== '0') &&
          <Text style = { styles.subResult }>{ subresult }</Text>
        }
        <Text 
          style = { styles.result }
          numberOfLines={ 1 }
          adjustsFontSizeToFit
        >{ result }</Text>

        {/* buttons row */}
        <View style = { styles.row }> 
          <ButtonCalc text = 'C' color = '#9B9B9B' action = { btnClear } /> 
          <ButtonCalc text = '+/-' color = '#9B9B9B'action = { btnSign }/> 
          <ButtonCalc text = 'del' color = '#9B9B9B'action = { btnDelete }/> 
          <ButtonCalc text = '/' color = '#1e81b0' action = { btnDivide }/> 
        </View>
        
        {/* buttons row */}
        <View style = { styles.row }> 
          <ButtonCalc text = '7' action = { mountNumber }/> 
          <ButtonCalc text = '8' action = { mountNumber }/> 
          <ButtonCalc text = '9' action = { mountNumber }/> 
          <ButtonCalc text = 'x' color = '#1e81b0' action = { btnMultiply }/> 
        </View>

        {/* buttons row */}
        <View style = { styles.row }> 
          <ButtonCalc text = '4' action = { mountNumber }/> 
          <ButtonCalc text = '5' action = { mountNumber }/> 
          <ButtonCalc text = '6' action = { mountNumber }/> 
          <ButtonCalc text = '-' color = '#1e81b0' action = { btnSubstract }/> 
        </View>

        {/* buttons row */}
        <View style = { styles.row }> 
          <ButtonCalc text = '1' action = { mountNumber }/> 
          <ButtonCalc text = '2' action = { mountNumber }/> 
          <ButtonCalc text = '3' action = { mountNumber }/> 
          <ButtonCalc text = '+' color = '#1e81b0' action = { btnAdd }/> 
        </View>

        {/* buttons row */}
        <View style = { styles.row }> 
          <ButtonCalc text = '0' long action = { mountNumber }/>  
          <ButtonCalc text = '.' action = { mountNumber } /> 
          <ButtonCalc text = '=' color = '#1e81b0' action = { calculate }/> 
        </View>


    </View>
  )
}
