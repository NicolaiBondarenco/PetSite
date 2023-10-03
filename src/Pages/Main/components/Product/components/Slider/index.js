import React from 'react'
import product from '../img/product.png'
import Carousel from 'react-elastic-carousel'

import { StyleSheetManager } from 'styled-components'

import './style.scss'
import { SliderItem } from '../SliderItem'

const arr = [
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
  { img: product, text: 'Lorem Ipsum ' },
]

export const Slider = () => {
  const breakPoints = [{ width: 1580, itemsToShow: 4 }]
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        !['unknownProp1', 'unknownProp2'].includes(prop)
      }
    >
      <Carousel breakPoints={breakPoints}>
        {arr.map((item, index) => {
          return <SliderItem key={index} item={item} />
        })}
      </Carousel>
    </StyleSheetManager>
  )
}
