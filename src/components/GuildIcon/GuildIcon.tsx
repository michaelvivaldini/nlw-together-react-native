import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './style'

import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env;

type Props = {
  guildId?: string;
  iconId?: string;
  showBorder?: boolean;
}

export default function GuildIcon({
  guildId,
  iconId,
  showBorder = true
}: Props) {
  const { secondary30, secondary50 } = theme.colors;

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  const ImageComponent = () => (
    <View style={styles.container}>
      {
        iconId ?
          <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
          />
          :
          <DiscordSvg />
      }
    </View>
  )

  if (showBorder) return (
    <LinearGradient
      style={styles.guildIconContainer}
      colors={[secondary30, secondary50]}
    >
      <ImageComponent />
    </LinearGradient>
  )

  return <ImageComponent />;
}
