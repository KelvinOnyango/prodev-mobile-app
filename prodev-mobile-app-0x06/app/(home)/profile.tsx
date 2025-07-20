import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-4 bg-gray-50">
        <Text className="text-black text-4xl font-normal mb-6">Profile</Text>

        {/* Profile Header */}
        <View className="bg-primary h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
          <View className="flex-row items-center gap-4">
            <Image
              source={require("@/assets/images/user-image.png")}
              className="w-12 h-12 rounded-full"
            />
            <View>
              <Text className="font-semibold text-xl text-white">
                Cole Baidoo
              </Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        {/* Account Settings */}
        <View className="h-[350px] gap-3 bg-white rounded-md p-4 mb-4">
          {renderSettingItem(
            <FontAwesome6 name="user" size={24} color="#0601B4" />,
            "My Account",
            "Make Changes to your account"
          )}

          {renderSettingItem(
            <FontAwesome6 name="user" size={24} color="#0601B4" />,
            "Saved Beneficiary",
            "Manage your saved accounts"
          )}

          {renderSettingItem(
            <Ionicons name="lock-closed-outline" size={24} color="#0601B4" />,
            "Face ID / Touch ID",
            "Manage your biometric settings"
          )}

          {renderSettingItem(
            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#0601B4"
            />,
            "Two-Factor Authentication",
            "Further secure your account for safety"
          )}

          {renderSettingItem(
            <MaterialIcons name="logout" size={24} color="#0601B4" />,
            "Log out",
            "Sign out of your account"
          )}
        </View>

        <Text className="text-black text-xl font-normal mb-6">More</Text>

        {/* Additional Settings */}
        <View className="h-[139px] gap-3 bg-white rounded-md p-4 mb-4">
          {renderSettingItem(
            <FontAwesome6 name="user" size={24} color="#0601B4" />,
            "App Settings",
            "Customize your app experience"
          )}

          {renderSettingItem(
            <FontAwesome6 name="question-circle" size={24} color="#0601B4" />,
            "Help & Support",
            "Get help with the app"
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const renderSettingItem = (
  icon: React.ReactNode,
  title: string,
  description: string
) => (
  <Pressable className="flex-row items-center justify-between mb-2">
    <View className="flex-row items-center gap-4">
      <View className="w-12 h-12 bg-secondary/10 items-center justify-center rounded-full">
        {icon}
      </View>
      <View>
        <Text className="text-lg font-semibold mb-1">{title}</Text>
        <Text className="font-thin text-gray-700">{description}</Text>
      </View>
    </View>
    <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
  </Pressable>
);

export default Profile;
