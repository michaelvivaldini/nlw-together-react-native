import React from 'react'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import Category from '../Category/Category'
import { styles } from './style'

type Props = {
  selectedCategory: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export default function CategorySelect({ selectedCategory, setCategory, hasCheckBox = false }: Props) {
  categories
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  )
}
