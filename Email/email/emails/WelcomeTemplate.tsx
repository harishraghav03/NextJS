import {
  Body,
  Container,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={heading}>Hello {name}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// npm run preview-email

const body: CSSProperties = {
  background: "#ffff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
