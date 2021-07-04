import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from '../../screens/SignIn/styles'

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      >
      </ActivityIndicator>
    </View>

  )
}
