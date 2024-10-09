import './style.css'
import {Button, Cell, Input, Section} from "@telegram-apps/telegram-ui";
import MainLayout from "../../components/MainLayout";
import {useEffect, useState} from "react";
import TelegramBotLink from "@koniverse/telegram-bot-link";


// Demo https://tgui.xelene.me/
const env = import.meta.env;
const config = {
  url: env.VITE_URL,
  service: env.VITE_SERVICE,
  bot: env.VITE_BOT,
  token: env.VITE_TOKEN
}

const initData = Telegram.WebApp.initData;
const startData = Telegram.WebApp.initDataUnsafe;
const linkSDK = new TelegramBotLink(config)
const now = new Date().getTime();

function App() {
  const [validatedData, setValidateData] = useState<boolean>();
  const [isLinked, setIsLinked] = useState<boolean>(false);
  const [id, setId] = useState<number>(now);
  const [email, setEmail] = useState<string>('');
  // Auto validate
  useEffect(() => {
    linkSDK.validateData({initData}).then((rs) => {
      if (rs.success) {
        setValidateData(rs.data?.validData);
      }
    });

    if (startData?.user?.id) {
      linkSDK.findLink({
        telegram_id: startData.user.id
      }).then((rs) => {
        if (rs.success) {
          setIsLinked(rs.success);
          setEmail(rs.data?.link_email || '');
          setId(rs.data?.link_id || 0);
        }
      });
    }
  }, [])

  const onSubmit = () => {
    linkSDK.submitLink({
      initData,
      linkInfo: {
        id: Number(id),
        email
      }
    }).then((rs) => {
      if (rs.error) {
        Telegram.WebApp.showAlert(rs.error);
      } else if (rs.success) {
        setIsLinked(rs.success);
        setEmail(rs.data?.link_email || '');
        setId(rs.data?.link_id || 0);
      }
    })
  }

  return (
    <MainLayout>
      <Section>
        <Cell subtitle="Telegram Link can apply on any website open in Telegram App that registered by the bot."
              hovered={false}>
          Telegram Bot Link
        </Cell>
        <Cell>
          App is open in Telegram: {validatedData ? 'Yes' : 'No'}
        </Cell>
        <Cell>
          ID & Email is linked: {isLinked ? 'Yes' : 'No'}
        </Cell>
        <Input type={'number'} disabled={true} header="ID" placeholder="ID" value={id}/>
        <Input onError={alert} type={'email'} header="Email" placeholder="Email" value={email} onChange={(input) => {
          setEmail(input.target.value);
        }}/>
        <div style={{padding: 16}}>
          <Button size={'m'} stretched={true} onClick={onSubmit}>Update Information</Button>
        </div>
      </Section>
    </MainLayout>
  )
}

export default App
