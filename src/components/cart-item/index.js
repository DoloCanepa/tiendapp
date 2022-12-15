import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, COLORS } from '../../constants/themes/colors';


const CartItem = ({ item, onDelete }) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash" size={24} color={colors.primaryDark} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
export default CartItem;