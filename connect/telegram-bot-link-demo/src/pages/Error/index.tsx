import {Button, Placeholder} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }
  return (<Placeholder
    action={<Button onClick={backToHome}>Back To Home</Button>}
    description="Something went wrong. Please try again later."
    header="Oops! Something went wrong."
  >
  </Placeholder>);
}
