import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from '../../store/actions';
import { CategoryItem } from "../../components";
import { colors } from '../../constants/themes/colors';
import { styles } from "./styles";

const Categories = ({navigation, route }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', { title: item.title });
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
           data={categories}
           renderItem={renderItem}
           keyExtractor={(item) => item.id.toString()}
           style={styles.containerList}
        />
       </SafeAreaView> 
    );
};

export default Categories;

