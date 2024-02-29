import { Button, Layout, Modal, Select, Space, Drawer } from 'antd'
import { useCrypto } from '../../context/crypto-context'
import { useEffect, useState } from 'react'
import CoinInfoModal from '../CoinInfoModal'
import AddAssetForm from '../AddAssetForm'

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function AppHeader() {
  const { crypto } = useCrypto()
  const [coin, setCoin] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [modal, setModal] = useState(false)
  const [seletct, setSelect] = useState(false)

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }

    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])

  const handleSelect = (value) => {
    setModal(true)
    setCoin(crypto.find((c) => c.id === value))
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        open={seletct}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        style={{ width: 250 }}
        value="press / to open "
        optionLabelProp="label"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} />{' '}
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary" onClick={() => setDrawer(true)}>
        Add assets
      </Button>
      <Modal open={modal} footer={null} onCancel={() => setModal(false)}>
        <CoinInfoModal coin={coin} />
      </Modal>
      <Drawer width={600} title="Add Asset" onClose={() => setDrawer(false)} open={drawer}>
        <AddAssetForm />
      </Drawer>
    </Layout.Header>
  )
}
