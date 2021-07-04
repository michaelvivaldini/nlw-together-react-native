import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './style'
import { Profile } from '../../components/Profile/Profile'
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import ListHeader from '../../components/ListHeader/ListHeader'
import Appointment, { AppointmentProps } from '../../components/Appointment/Appointment'
import ListDivider from '../../components/ListDivider/ListDivider'
import { Background } from '../../components/Background/Background'
import { useNavigation } from '@react-navigation/core'

export function HomeScreen() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  const appointments: AppointmentProps[] = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '1',
      date: '22/06 às 20:40',
      description: 'É hoje que vamos chegar ao challenger'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '2',
      date: '27/06 às 10:30',
      description: 'Bora dar tiro em newba'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    },
    {
      id: '7',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    },
    {
      id: '8',
      guild: {
        id: '1',
        name: 'teste',
        owner: false,
        icon: 'image.png'
      },
      category: '3',
      date: '02/07 às 14:10',
      description: 'Bora jogar cambada'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <View>
        <CategorySelect
          selectedCategory={category}
          setCategory={handleCategorySelect}
        />
        <View>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (<Appointment data={item} onPress={handleAppointmentDetails} />)}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
          >
          </FlatList>
        </View>
      </View>
    </Background>
  );
}
