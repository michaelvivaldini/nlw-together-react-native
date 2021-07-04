import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ListDivider from '../../components/ListDivider/ListDivider'
import Guild, { GuildProps } from '../../Guild/Guild'
import { styles } from './style'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export const guilds: GuildProps[] = [
  {
    id: '1',
    name: 'Lendários',
    game: 'COD: Warzone',
    icon: 'https://imag.malavida.com/mvimgbig/download-fs/call-of-duty-warzone-26418-0.jpg',
    owner: false
  },
  {
    id: '2',
    name: 'Outlaws',
    game: 'CS:GO',
    icon: 'https://i.redd.it/1s0j5e4fhws01.png',
    owner: false
  },
  {
    id: '3',
    name: 'Amizaderz',
    game: 'Valorant',
    icon: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png',
    owner: true
  },
  {
    id: '4',
    name: 'Gados',
    game: 'League Of Legends',
    icon: 'https://pbs.twimg.com/media/EEtSbyFXYAA6yMg.jpg',
    owner: true
  },
  {
    id: '5',
    name: 'Apice',
    game: 'Apex Legends',
    icon: 'https://sm.ign.com/ign_pt/cover/a/apex-legen/apex-legends_5jsd.jpg',
    owner: false
  }
]

export default function GuildsModal({ handleGuildSelect }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            guild={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  )
}
