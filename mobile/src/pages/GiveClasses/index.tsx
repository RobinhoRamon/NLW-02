import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveClassesImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToLanding() {
    navigation.navigate("Landing");
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.content}
        source={giveClassesImage}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar você precisa se cadastrar na nossa plataforma Web
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateToLanding} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem :)</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
