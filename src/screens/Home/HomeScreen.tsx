import React, { useState, useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './style'
import { Profile } from '../../components/Profile/Profile'
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import ListHeader from '../../components/ListHeader/ListHeader'
import Appointment, { AppointmentProps } from '../../components/Appointment/Appointment'
import ListDivider from '../../components/ListDivider/ListDivider'
import { Background } from '../../components/Background/Background'
import { useNavigation, useFocusEffect } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import Loading from '../../components/Loading/Loading'
import SignOutModal from '../../components/SignOutModal/SignOutModal'

export function HomeScreen() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSignOutModal, setShowSignOutModal] = useState(false);


  const navigation = useNavigation();

  function handleAppointmentDetails(appointment: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { appointment });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsLoaded: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(appointmentsLoaded.filter(item => item.category === category))
    } else {
      setAppointments(appointmentsLoaded);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile handleSignOut={() => setShowSignOutModal(true)} />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <View>
        <CategorySelect
          selectedCategory={category}
          setCategory={handleCategorySelect}
        />
        {loading ? <Loading /> :
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
            />
          </>
        }
      </View>
      <SignOutModal
        visible={showSignOutModal}
        closeModal={() => setShowSignOutModal(false)}
      />
    </Background>
  );
}
