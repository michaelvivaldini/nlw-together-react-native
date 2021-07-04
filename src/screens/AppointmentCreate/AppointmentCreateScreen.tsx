import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Background } from '../../components/Background/Background'
import Header from '../../components/Header/Header'
import { styles } from './style'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import { RectButton } from 'react-native-gesture-handler'
import uuid from 'react-native-uuid'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import GuildIcon from '../../components/GuildIcon/GuildIcon'
import SmallInput from '../../components/SmallInput/SmallInput'
import TextArea from '../../components/TextArea/TextArea'
import { Button } from '../../components/Button/Button'
import ModalView from '../../components/ModalView/ModalView'
import { GuildsScreen } from '../Guilds/GuildsScreen'
import { GuildProps } from '../../Guild/Guild'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { useNavigation } from '@react-navigation/core'

export default function AppointmentCreateScreen() {
  const [showGuildModal, setShowGuildModal] = useState(false);

  const [category, setCategory] = useState('');
  const [selectedGuild, setSelectedGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleOpenGuildModal() {
    setShowGuildModal(true);
  }

  function handleCloseGuildModal() {
    setShowGuildModal(false);
  }

  function handleGuildSelect(guild: GuildProps) {
    setSelectedGuild(guild);
    handleCloseGuildModal();
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      category,
      guild: selectedGuild,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    )

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    ><Background>
        <ScrollView>
          <Header
            title="Agendar partida"
          />

          <Text style={[styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            selectedCategory={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuildModal}>
              <View style={styles.select}>
                {
                  selectedGuild.icon ?
                    <GuildIcon guildId={selectedGuild.id} iconId={selectedGuild.icon} showBorder={false} />
                    :
                    <View style={styles.image} />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>{selectedGuild.name ? selectedGuild.name : 'Selecione um servidor'}</Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.charLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            title="Agendar"
            onPress={handleSave}
          />
        </View>
      </Background>
      <ModalView visible={showGuildModal} closeModal={handleCloseGuildModal}>
        <GuildsScreen handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
