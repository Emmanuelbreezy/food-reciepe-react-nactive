import { View, Text, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";

const Recipes = () => {
  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        <MasonryList
          data={[]}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
          // refreshing={isLoadingNext}
          //onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          //onEndReached={() => loadNext(ITEM_CNT)}
        />
      </View>
    </View>
  );
};

const RecipeCard = ({ item, index }) => {
    let isEven = index%2==0;
  return (
    <View>
      <Pressable
        style={{ width: "100%", paddingLeft: isEven? 0:8, paddingRight: isEven?8:0 }}
        className="flex justify-center mb-4 space-y-1 bg-gray-300"
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: index%3==0 ? hp(25): hp(35), borderRadius: 35 }}
          className="bg-black/5"
        />
        <Text style={{fontSize: hp(1.5)}} className="font-semibold ml-2 text-neutral-600">
            {/* {
                item.name.length>20 ? item.name.slice(0,20)+'...': item.name
            } */}
            test name
        </Text>
      </Pressable>
    </View>
  );
};

export default Recipes;
