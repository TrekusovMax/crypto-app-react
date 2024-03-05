import { Flex, Typography } from 'antd'

export default function CoinInfo({ coin, whithSymbol }) {
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: 10 }} />
      <Typography.Title level={2} style={{ margin: 0 }}>
        {whithSymbol && <span>({coin.symbol})</span>} {coin.name}
      </Typography.Title>
    </Flex>
  )
}
