import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';

export function Tabela(props: any) {
  const {tableHeader, truthTable} = useSelector((state: any) => state.calc)
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {tableHeader.map((header: string, headerIndex: number) => (
          <Text key={headerIndex} style={styles.headerText}>
            {header}
          </Text>
        ))}
      </View>
      {truthTable.map((row: any, index: number) => (
        <View key={index} style={styles.row}>
          {Object.values(row).map((value: any, key: any) => (
            <Text key={key} style={styles.cell}>
              {value ? 'V' : 'F'}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

// Conectando o componente ao Redux
export default Tabela;