import './style.css';
import {Divider, List, Title} from "@telegram-apps/telegram-ui";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
  header?: string | React.ReactNode;
  headerRight?: React.ReactNode;
  footer?: string | React.ReactNode;
  backLink?: string;
}

function MainLayout({children, header, backLink, footer, headerRight}: MainLayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    let backAction: () => void | undefined;

    if (backLink) {
      backAction = () => {
        navigate(backLink);
      }
      Telegram.WebApp.BackButton.onClick(backAction)
      Telegram.WebApp.BackButton.show()
    }

    return () => {
      if (backAction) {
        Telegram.WebApp.BackButton.offClick(backAction)
        Telegram.WebApp.BackButton.hide()
      }
    }
  }, [backLink, navigate]);

  return (
    <List>
      {header && <header className={'koni-main-header'}>
        <Title style={{padding: '8px 16px'}} className={'header-title'}>{header}</Title>
        {headerRight}
      </header>}
      {children}
      {footer && <>
        {footer}
        <Divider/>
      </>}
    </List>
  );
}

export default MainLayout;
