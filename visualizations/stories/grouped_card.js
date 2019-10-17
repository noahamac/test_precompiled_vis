import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupedCard from '../src/grouped_card/grouped_card';

storiesOf('GroupedCard', module)
  .add('main', () => (
    <GroupedCard
      config={{
        'style_order_items.total_sale_price': ['#000'],
        'style_order_items.returned_total_sale_price': ['#000'],
        'style_order_items.average_days_to_process': ['#ff6d45'],
        'show_comparison_order_items.total_gross_margin': true,
        'show_comparison_order_items.returned_count': true,
        'show_comparison_order_items.average_shipping_time': true,
        'comparison_style_order_items.total_gross_margin': 'value',
        'comparison_style_order_items.returned_count': 'percentage_change',
        'comparison_style_order_items.average_shipping_time': 'calculate_progress_perc',
      }}
      data={[
        {
          name: 'order_items.total_sale_price',
          label: 'Total Sale Price',
          value: 15.3999999619,
          valueFormat: '$#,##0.00',
          formattedValue: '$15.39',
        },
        {
          name: 'order_items.total_gross_margin',
          label: 'Total Gross Margin',
          value: 9.332399793,
          valueFormat: '$#,##0.00',
          formattedValue: '$9.33',
        },
        {
          name: 'order_items.returned_total_sale_price',
          label: 'Returned Total Sale Price',
          value: 0,
          valueFormat: '$#,##0.00',
          formattedValue: '$0.00',
        },
        {
          name: 'order_items.returned_count',
          label: 'Returned Count',
          value: 4,
          valueFormat: '#0',
          formattedValue: '4',
        },
        {
          name: 'order_items.average_days_to_process',
          label: 'Average Days To Process',
          value: 15,
          valueFormat: '#0',
          formattedValue: '15',
        },
        {
          name: 'order_items.average_shipping_time',
          label: 'Average Shipping Time',
          value: 8,
          valueFormat: '#0',
          formattedValue: '8',
        },
      ]}
    />
  ))