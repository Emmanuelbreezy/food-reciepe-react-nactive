import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify()}
      exiting={FadeOut}
    >
      <ScrollView
        horizontal
        showVeriticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
      >
        {categories.map((item) => {
          let isActive = item.strCategory === activeCategory;
          let activeBtnClass = isActive ? "bg-amber-400" : "bg-black/10";
          let image = item.strCategoryThumb || null;
          return (
            <TouchableOpacity
              key={item.idCategory}
              onPress={() => setActiveCategory(item.strCategory)}
              className="flex items-center space-y-1"
            >
              <View className={"rounded-full p-[6px] "+activeBtnClass}>
               {image && <Image
                  source={{uri: image}}
                  className="rounded-full"
                  style={{ width: hp(6), height: hp(6) }}
                />}
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                {item.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;
