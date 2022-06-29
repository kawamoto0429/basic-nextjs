import { VFC } from 'react'
import { CreateUser } from '../components/CreaateUser'
import { Layout } from '../components/Layout'

const HooksMemo: VFC = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  )
}
export default HooksMemo
