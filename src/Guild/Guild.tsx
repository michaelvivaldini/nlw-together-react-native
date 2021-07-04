import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import GuildIcon from '../components/GuildIcon/GuildIcon'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'
import { theme } from '../global/styles/theme'

export type GuildProps = {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  guild: GuildProps;
}

export default function Guild({ guild, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon guildId={guild.id} iconId={guild.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{guild.name}</Text>
          <Text style={styles.type}>{guild.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}
