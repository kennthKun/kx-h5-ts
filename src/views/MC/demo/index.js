import React, { useEffect } from 'react'
import { ResultPage } from 'antd-mobile'
import { AlipayCircleFill } from 'antd-mobile-icons'
import styles from "./style.module.less"
import { connect } from 'react-redux'

const Demo = (props) => {
  const { dispatch: { demo }, history } = props

  const getResult = async () => {
    const res = await demo.getResult(1)
    // eslint-disable-next-line
    console.log(res)
  }

  useEffect(() => {
    getResult()
  }, [])

  const details = [
    {
      label: '肯德基（嘉里中心店）',
      value: '¥ 36.50',
      bold: true,
    },
    {
      label: '付款方式',
      value: '账户余额',
    },
  ]

  const Card = ResultPage.Card

  return (
    <ResultPage
      status='waiting'
      title={<div style={{ fontSize: 15 }}>支付成功</div>}
      description={
        <>
          <span style={{ fontSize: 32, color: '#ffffff', marginRight: 4 }}>
            ¥
          </span>
          <span style={{ fontSize: 48, color: '#ffffff' }}>36.50</span>
        </>
      }
      icon={<AlipayCircleFill />}
      details={details}
      secondaryButtonText='辅助操作'
      primaryButtonText='主要操作'
    >
      <div className={styles.demo}></div>

      <Card style={{ height: 64 }}>
        <div onClick={() => {
          history.push("/page")
        }}>page</div>
      </Card>
      <Card style={{ height: 128, marginTop: 12 }}> </Card>
      <Card style={{ height: 128, marginTop: 12 }}> </Card>
      <Card style={{ height: 128, marginTop: 12 }}> </Card>
      <Card style={{ height: 128, marginTop: 12 }}> </Card>
      <Card style={{ height: 128, marginTop: 12 }}> </Card>
    </ResultPage>
  )
}

export default connect(({ demo }) => (demo))(Demo);