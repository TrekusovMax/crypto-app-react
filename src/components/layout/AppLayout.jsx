import { useContext } from 'react'
import { Layout, Spin } from 'antd'
import AppSider from './appSider'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import { useCrypto } from '../../context/crypto-context'

export default function AppLayout() {
  const { loading } = useCrypto()

  if (loading) return <Spin fullscreen />
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  )
}
