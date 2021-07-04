import React, { useCallback, useState } from 'react'
import { View, ImageBackground, Text, Alert, Share, Platform } from 'react-native'
import { Background } from '../../components/Background/Background'
import Header from '../../components/Header/Header'
import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/raft.jpeg'
import { styles } from './style'
import ListHeader from '../../components/ListHeader/ListHeader'
import { AppointmentProps } from '../../components/Appointment/Appointment'
import Member, { MemberProps } from '../../components/Member/Member'
import ListDivider from '../../components/ListDivider/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import { useFocusEffect, useRoute } from '@react-navigation/core'
import { api } from '../../services/api'
import Loading from '../../components/Loading/Loading'
import * as Linking from 'expo-linking';

type Params = {
  appointment: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export default function AppointmentDetailsScreen() {
  const [guildWidget, setGuildWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute()
  const { appointment } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${appointment.guild.id}/widget.json`);
      setGuildWidget(response.data);
    } catch (error) {
      Alert.alert('Verifique as configurações do servidor');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ?
      `Junte-se a ${appointment.guild.name}` :
      guildWidget.instant_invite;

    Share.share({
      message,
      url: guildWidget.instant_invite
    })
  }

  function handleJoinGuild() {
    Linking.openURL(guildWidget.instant_invite);
  }

  useFocusEffect(useCallback(() => {
    fetchGuildWidget();
  }, []))

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildWidget.instant_invite &&
          <BorderlessButton onPress={handleShareInvitation}>
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
            {appointment.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {appointment.description}
          </Text>
        </View>
      </ImageBackground>
      {loading ? <Loading /> :
        <>

          <ListHeader
            title="Jogadores"
            subtitle={guildWidget?.members ? `Total ${guildWidget.members.length}` : ''}
          />

          <FlatList
            data={guildWidget.members}
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
              onPress={handleJoinGuild}
            />
          </View>
        </>
      }
    </Background>
  )
}
