import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Background } from '../../components/Background/Background'
import Header from '../../components/Header/Header'
import { styles } from './style'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import { RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import GuildIcon from '../../components/GuildIcon/GuildIcon'
import SmallInput from '../../components/SmallInput/SmallInput'
import TextArea from '../../components/TextArea/TextArea'
import { Button } from '../../components/Button/Button'
import ModalView from '../../components/ModalView/ModalView'
import Guilds from '../Guilds/GuildsScreen'
import { GuildProps } from '../../Guild/Guild'

export default function AppointmentCreateScreen() {
  const [category, setCategory] = useState('');
  const [showGuildModal, setShowGuildModal] = useState(false);
  const [selectedGuild, setSelectedGuild] = useState<GuildProps>({} as GuildProps);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    // keyboardVerticalOffset={100}
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
                  selectedGuild.icon ? <GuildIcon uri={selectedGuild.icon} showBorder={false} /> : <View style={styles.image} />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>{selectedGuild.name ? selectedGuild.name : 'Selecione um servidor'}</Text>
                  {selectedGuild.game &&
                    <Text style={styles.charLimit}>
                      {selectedGuild.game}
                    </Text>
                  }
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
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
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
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button title="Agendar" />
        </View>
      </Background>
      <ModalView visible={showGuildModal} closeModal={handleCloseGuildModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
