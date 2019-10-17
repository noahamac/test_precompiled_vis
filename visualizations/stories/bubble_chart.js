import React from 'react';
import { storiesOf } from '@storybook/react';
import BubbleChart from '../src/bubble_chart/bubble_chart';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf('BubbleChart', module)
stories.addDecorator(withKnobs);

stories
  .add('main', () => {
    const config = {
      value_colors: object(
        'Value Color',
        [
          "#3EB0D5",
          "#B1399E",
          "#C2DD67",
          "#592EC2",
          "#4276BE",
          "#72D16D",
          "#FFD95F",
          "#B32F37",
          "#9174F0",
          "#E57947",
          "#75E2E2",
          "#FBB555"
        ],
        'Series'
      ),
      value_titles: boolean('Display Value Title', true, 'Series'),
      value_labels: boolean('Display Value Labels', true, 'Series'),
    };
      
    return (
      <BubbleChart
        config={config}
        data={[
          {
            "itemName": "Speedo",
            "groupName": "Swim",
            "value": 155,
            "color": 155
          },
          {
            "itemName": "Levi's",
            "groupName": "Jeans",
            "value": 141,
            "color": 141
          },
          {
            "itemName": "Allegra K",
            "groupName": "Dresses",
            "value": 126,
            "color": 126
          },
          {
            "itemName": "Allegra K",
            "groupName": "Blazers & Jackets",
            "value": 118,
            "color": 118
          },
          {
            "itemName": "Allegra K",
            "groupName": "Tops & Tees",
            "value": 96,
            "color": 96
          },
          {
            "itemName": "Champion",
            "groupName": "Active",
            "value": 95,
            "color": 95
          },
          {
            "itemName": "Dockers",
            "groupName": "Pants",
            "value": 82,
            "color": 82
          },
          {
            "itemName": "Allegra K",
            "groupName": "Fashion Hoodies & Sweatshirts",
            "value": 79,
            "color": 79
          },
          {
            "itemName": "Motherhood Maternity",
            "groupName": "Maternity",
            "value": 73,
            "color": 73
          },
          {
            "itemName": "Not Your Daughter's Jeans",
            "groupName": "Jeans",
            "value": 72,
            "color": 72
          },
          {
            "itemName": "Calvin Klein",
            "groupName": "Underwear",
            "value": 72,
            "color": 72
          },
          {
            "itemName": "Ray-Ban",
            "groupName": "Accessories",
            "value": 71,
            "color": 71
          },
          {
            "itemName": "adidas",
            "groupName": "Active",
            "value": 71,
            "color": 71
          },
          {
            "itemName": "Nautica",
            "groupName": "Sleep & Lounge",
            "value": 70,
            "color": 70
          },
          {
            "itemName": "Hanes",
            "groupName": "Underwear",
            "value": 66,
            "color": 66
          },
          {
            "itemName": "Allegra K",
            "groupName": "Shorts",
            "value": 66,
            "color": 66
          },
          {
            "itemName": "Carhartt",
            "groupName": "Outerwear & Coats",
            "value": 66,
            "color": 66
          },
          {
            "itemName": "Columbia",
            "groupName": "Outerwear & Coats",
            "value": 65,
            "color": 65
          },
          {
            "itemName": "7 For All Mankind",
            "groupName": "Jeans",
            "value": 61,
            "color": 61
          },
          {
            "itemName": "Hurley",
            "groupName": "Shorts",
            "value": 59,
            "color": 59
          },
          {
            "itemName": "Carhartt",
            "groupName": "Tops & Tees",
            "value": 56,
            "color": 56
          },
          {
            "itemName": "Haggar",
            "groupName": "Pants",
            "value": 56,
            "color": 56
          },
          {
            "itemName": "Quiksilver",
            "groupName": "Shorts",
            "value": 53,
            "color": 53
          },
          {
            "itemName": "Quiksilver",
            "groupName": "Swim",
            "value": 52,
            "color": 52
          },
          {
            "itemName": "Lee",
            "groupName": "Jeans",
            "value": 52,
            "color": 52
          },
          {
            "itemName": "Bali",
            "groupName": "Intimates",
            "value": 49,
            "color": 49
          },
          {
            "itemName": "Volcom",
            "groupName": "Fashion Hoodies & Sweatshirts",
            "value": 49,
            "color": 49
          },
          {
            "itemName": "Allegra K",
            "groupName": "Pants",
            "value": 48,
            "color": 48
          },
          {
            "itemName": "Hanes",
            "groupName": "Intimates",
            "value": 48,
            "color": 48
          },
          {
            "itemName": "Alexander Del Rossa",
            "groupName": "Sleep & Lounge",
            "value": 47,
            "color": 47
          },
          {
            "itemName": "Wrangler",
            "groupName": "Jeans",
            "value": 47,
            "color": 47
          },
          {
            "itemName": "Allegra K",
            "groupName": "Sweaters",
            "value": 46,
            "color": 46
          },
          {
            "itemName": "Tommy Hilfiger",
            "groupName": "Sweaters",
            "value": 46,
            "color": 46
          },
          {
            "itemName": "Hot from Hollywood",
            "groupName": "Dresses",
            "value": 45,
            "color": 45
          },
          {
            "itemName": "Patty",
            "groupName": "Tops & Tees",
            "value": 45,
            "color": 45
          },
          {
            "itemName": "O'Neill",
            "groupName": "Swim",
            "value": 44,
            "color": 44
          },
          {
            "itemName": "Allegra K",
            "groupName": "Suits & Sport Coats",
            "value": 44,
            "color": 44
          },
          {
            "itemName": "HUGO BOSS",
            "groupName": "Sleep & Lounge",
            "value": 43,
            "color": 43
          },
          {
            "itemName": "Hurley",
            "groupName": "Fashion Hoodies & Sweatshirts",
            "value": 43,
            "color": 43
          },
          {
            "itemName": "Carhartt",
            "groupName": "Accessories",
            "value": 42,
            "color": 42
          },
          {
            "itemName": "SmartWool",
            "groupName": "Active",
            "value": 41,
            "color": 41
          },
          {
            "itemName": "Oakley",
            "groupName": "Accessories",
            "value": 41,
            "color": 41
          },
          {
            "itemName": "Fox",
            "groupName": "Fashion Hoodies & Sweatshirts",
            "value": 40,
            "color": 40
          },
          {
            "itemName": "Hurley",
            "groupName": "Swim",
            "value": 40,
            "color": 40
          },
          {
            "itemName": "Lucky Brand",
            "groupName": "Jeans",
            "value": 39,
            "color": 39
          },
          {
            "itemName": "Calvin Klein",
            "groupName": "Sweaters",
            "value": 39,
            "color": 39
          },
          {
            "itemName": "Allegra K",
            "groupName": "Leggings",
            "value": 39,
            "color": 39
          },
          {
            "itemName": "King Formal Wear",
            "groupName": "Suits & Sport Coats",
            "value": 39,
            "color": 39
          },
          {
            "itemName": "Columbia",
            "groupName": "Active",
            "value": 39,
            "color": 39
          },
          {
            "itemName": "DC",
            "groupName": "Fashion Hoodies & Sweatshirts",
            "value": 39,
            "color": 39
          }
        ]}
      />
    )})