import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import PropertyListing from "@/components/PropertyListing";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      {/* Search Section */}
      <View className="p-5 bg-primary">
        <View className="flex-row items-center gap-3">
          <View className="flex-1 bg-white rounded-lg p-4">
            <Text className="text-gray-500 text-sm">Where to?</Text>
            <TextInput
              className="p-0 text-base"
              placeholder="Location · Date · Add guest"
            />
          </View>
          <TouchableHighlight
            className="bg-[#1E6B54] p-4 rounded-lg"
            underlayColor="#1a5c48"
          >
            <Feather name="search" size={24} color="white" />
          </TouchableHighlight>
        </View>
      </View>

      {/* Filters Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="h-20 bg-white py-3"
      >
        <View className="flex-row px-5">
          {FILTERS.map((filter, index) => (
            <View key={index} className="items-center mx-2 w-20">
              <Image
                source={require("@/assets/images/mansion.png")}
                className="w-10 h-10"
              />
              <Text className="text-xs mt-1 text-center">{filter}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Property Listings */}
      <ScrollView className="flex-1 px-5 pt-3">
        <PropertyListing listings={SAMPLE_DATA} />
        <View className="py-5 items-center">
          <TouchableHighlight
            className="bg-primary px-6 py-4 rounded-lg"
            underlayColor="#2d856e"
          >
            <Text className="text-white text-base">Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}
