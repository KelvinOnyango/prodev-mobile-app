import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
        <Text>Skip</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Us</Text>
        <Text style={styles.subText}>Create an account to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your full name"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: "#4285F4" }]}
        >
          <Image source={GOOGLELOGO} />
          <Text style={[styles.secondaryButtonText, { color: "#4285F4" }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: "#3B5998" }]}
        >
          <Image source={FACEBOOKLOGO} />
          <Text style={[styles.secondaryButtonText, { color: "#3B5998" }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign In</Text>
      </View>
    </View>
  );
}
