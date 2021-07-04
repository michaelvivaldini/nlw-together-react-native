import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { Background } from '../../components/Background/Background'
import Header from '../../components/Header/Header'
import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './style'
import ListHeader from '../../components/ListHeader/ListHeader'
import Appointment from '../../components/Appointment/Appointment'
import Member from '../../components/Member/Member'
import ListDivider from '../../components/ListDivider/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'

export default function AppointmentDetailsScreen() {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Michael Vivaldini',
      avatar_url: 'https://github.com/michaelvivaldini.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'Mike',
      avatar_url: 'https://github.com/mikeask.png',
      status: 'offline'
    },
    {
      id: '4',
      username: 'André Ferreira',
      avatar_url: 'https://github.com/adnux.png',
      status: 'online'
    },
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
        </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida na md10
        </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member
            member={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon
          title="Entrar na partida"
        />
      </View>
    </Background>
  )
}
