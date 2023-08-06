import { Container, Divider, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons";

function Footer() {
  return (
    <Container>
      <Divider
        my="lg"
        label={
          <Text
            size="sm"
            sx={{
              textAlign: "center",
            }}
          >
            Made with <IconHeart size={14} style={{ marginBottom: "-3px" }} />{" "}
            by{" "}
            <a href=" https://therohitbansal.netlify.app/" target="_blank">
              Rohit Bansal
            </a>{" "}
          </Text>
        }
        labelPosition="center"
      />
    </Container>
  );
}

export default Footer;
