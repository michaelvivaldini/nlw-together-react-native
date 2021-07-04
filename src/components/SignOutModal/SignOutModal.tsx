import React from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback, Text, TouchableNativeFeedbackComponent } from 'react-native'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'
import { RectButton } from 'react-native-gesture-handler'

type Props = {
  closeModal: () => void;
  visible: boolean;
}

export default function SignOutModal({ closeModal, visible }: Props) {
  const { signOut } = useAuth();

  if (!visible) return <></>

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Deseja sair do Game<Text style={{ color: theme.colors.primary }}>Play</Text>?
            </Text>
        <View style={styles.buttons}>
          <RectButton
            style={styles.cancelButton}
            onPress={closeModal}
          >
            <View style={styles.outlineButton}>
              <Text style={styles.text}>Não</Text>
            </View>
          </RectButton>
          <RectButton
            style={styles.okButton}
            onPress={signOut}
          >
            <Text style={styles.text}>Sim</Text>
          </RectButton>

        </View>

      </View>
    </View>
  )
}
