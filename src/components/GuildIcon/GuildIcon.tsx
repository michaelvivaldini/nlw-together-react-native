import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './style'

type Props = {
  uri?: string;
  showBorder?: boolean;
}

export default function GuildIcon({
  uri = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64a7d80b-836d-4afb-a395-ed3fbf04ccd0/dba25xu-8bd11dea-91b3-4a16-9a84-cbb64f143e85.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0YTdkODBiLTgzNmQtNGFmYi1hMzk1LWVkM2ZiZjA0Y2NkMFwvZGJhMjV4dS04YmQxMWRlYS05MWIzLTRhMTYtOWE4NC1jYmI2NGYxNDNlODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Duzsw2To8bnYQr651_nefIM6TxbZVHeeZR4MIOpKywc",
  showBorder = true
}: Props) {
  const { secondary30, secondary50 } = theme.colors;

  const ImageComponent = () => (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
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
