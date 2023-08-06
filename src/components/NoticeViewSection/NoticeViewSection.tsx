import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
  SegmentedControl,
  Center,
} from "@mantine/core";
import { useApp } from "../../context/AppContext";
import Preview from "./Preview";
import WhatsAppPreview from "./WhatsAppPreview";
import TelegramPreview from "./TelegramPreview";
import {IconEye, IconBrandWhatsapp, IconBrandTelegram } from "@tabler/icons";

function NoticeViewSection() {
  const { state: values } = useApp();
  const [previewBox, setPreviewBox] = useState("preview");

  const renderPreview = () => {
    switch (previewBox) {
      case "preview":
        return <Preview />;
      case "whatsapp":
        return <WhatsAppPreview />;
      case "telegram":
        return <TelegramPreview />;
      default:
        return <Preview />;
    }
  };

  return (
    <Container sx={{ position: "sticky", top: 0 }}>
      <Title order={3} py="sm" weight={400}>
        Notice View
      </Title>

      <SegmentedControl
        color="indigo"
        data={[
          {
            value: "preview",
            label: (
              <Center>
                <IconEye size={16} />
                <Box ml={10}>Preview</Box>
              </Center>
            ),
          },
          {
            value: "whatsapp",
            label: (
              <Center>
                <IconBrandWhatsapp size={16} />
                <Box ml={10}>WhatsApp</Box>
              </Center>
            ),
          },
          {
            value: "telegram",
            label: (
              <Center>
                <IconBrandTelegram size={16} />
                <Box ml={10}>Telegram</Box>
              </Center>
            ),
          },
        ]}
        onChange={(e) => setPreviewBox(e)}
      />

      {renderPreview()}
    </Container>
  );
}

export default NoticeViewSection;
