import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'
import Avatar from '../Avatar/Avatar'
import { styles } from './style'

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  member: MemberProps;
}

export default function Member({ member }: Props) {
  const isOnline = member.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={member.avatar_url} />

      <View>
        <Text style={styles.title}>{member.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary }
            ]}
          />
          <Text style={styles.nameStatus}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  )
}
