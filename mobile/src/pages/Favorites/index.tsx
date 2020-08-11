import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import TeacherItem from "../../components/TeacherItem";

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys Favoritos" />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
        style={styles.teacherList}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default Favorites;
