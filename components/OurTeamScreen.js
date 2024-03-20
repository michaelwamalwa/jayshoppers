import React, { useState, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Animated } from 'react-native';
import alice from "../assets/alice.jpg";
import johnson from "../assets/johnson.jpg";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    imageUrl: alice,
    responsibilities: ["Lead project planning sessions", "Manage project progress"],
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    imageUrl: johnson, 
    responsibilities: ["Code review", "Develop critical features"],
  },

];

const OurTeamScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Team</Text>
      {teamMembers.map((member, index) => (
        <Animated.View key={index} style={[styles.memberContainer, { opacity: fadeAnim}]}>
          <Image source={member.imageUrl} style={styles.image} />
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberRole}>{member.role}</Text>
          <View style={styles.responsibilitiesContainer}>
            {member.responsibilities.map((responsibility, idx) => (
              <Text key={idx} style={styles.responsibilityText}>
                    • {responsibility}
              </Text>
            ))}
        </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 16,
    marginBottom: 5,
  },
  responsibilitiesContainer: {
    alignItems: 'center',
  }, 
  responsibilityText: {
    fontSize: 14,
  }
});

export default OurTeamScreen;
