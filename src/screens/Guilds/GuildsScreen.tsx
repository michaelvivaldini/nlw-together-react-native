import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ListDivider from '../../components/ListDivider/ListDivider'
import Loading from '../../components/Loading/Loading'
import Guild, { GuildProps } from '../../Guild/Guild'
import { api } from '../../services/api'
import { styles } from './style'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function GuildsScreen({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : <FlatList
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
      />}
    </View>
  )
}
