import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { styles } from './style'
import GuildIcon from '../GuildIcon/GuildIcon'
import { categories } from '../../utils/categories'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/styles/theme'
import { Game } from '../../utils/games'
import { GuildProps } from '../../Guild/Guild'
import { Background } from '../Background/Background'
import { LinearGradient } from 'expo-linear-gradient'

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export default function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(category => category.id === data.category)

  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.players, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>


        </View>

      </View>

    </RectButton>
  )
}
