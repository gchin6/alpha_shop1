import React from 'react';
import Style from './Step1.module.css'

const citeOptions = [
  {
    value: 'KLU',
    label: '基隆市',
  }, {
    value: 'TPH',
    label: '新北市',
  }, {
    value: 'TPE',
    label: '臺北市',
  }, {
    value: 'TYC',
    label: '桃園市',
  }, {
    value: 'HSH',
    label: '新竹縣',
  }, {
    value: 'HSC',
    label: '新竹市',
  }, {
    value: 'MAC',
    label: '苗栗市',
  }, {
    value: 'MAL',
    label: '苗栗縣',
  }, {
    value: 'TXG',
    label: '臺中市',
  }, {
    value: 'CWH',
    label: '彰化縣',
  }, {
    value: 'CWS',
    label: '彰化市',
  }, {
    value: 'NTC',
    label: '南投市',
  }, {
    value: 'NTO',
    label: '南投縣',
  }, {
    value: 'YLH',
    label: '雲林縣',
  }, {
    value: 'CHY',
    label: '嘉義縣',
  }, {
    value: 'CYI',
    label: '嘉義市',
  }, {
    value: 'TNN',
    label: '臺南市',
  }, {
    value: 'KHH',
    label: '高雄市',
  }, {
    value: 'IUH',
    label: '屏東縣',
  }, {
    value: 'PTS',
    label: '屏東市',
  }, {
    value: 'ILN',
    label: '宜蘭縣',
  }, {
    value: 'ILC',
    label: '宜蘭市',
  }, {
    value: 'HWC',
    label: '花蓮市',
  }, {
    id: 24,
    value: 'TTC',
    label: '臺東市',
  }, {
    value: 'TTT',
    label: '臺東縣',
  }, {
    value: 'PEH',
    label: '澎湖縣',
  }, {
    value: 'KMN',
    label: '金門縣',
  }, {
    value: 'LNN',
    label: '連江縣',
  },
]

export default function cityData() {
  return (
    < select className={Style.selectStyle} required >
      {citeOptions.map((city) => (
        <option key={city.value} value={city.value}>
          {city.label}
        </option>
      ))}
    </select >
  )
}