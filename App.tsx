import React from 'react';
import {View,Text, FlatList} from 'react-native';
import ProductsCard from './scr/componets/ProductsCard';
import login from './scr/componets/user/singIn/SingIn';

const products = [{
  id: 1,
  photo:'',
  name:'Mesa',
  price: 500.000,
  discount: 120.000
},
{
  id: 2,
  photo:'',
  name:'Silla',
  price: 100.000,
  discount: 50.000
}];
const Products = ()=>{
  return(
    <View>
      <Text>App Market</Text>
      <FlatList
        data ={products}
        renderItem={({item}) => <ProductsCard product={item}/>}
        keyExtractor={(item)=> item.id.toString()}
      />
    </View>
  );
}
const P = login

export default Products;