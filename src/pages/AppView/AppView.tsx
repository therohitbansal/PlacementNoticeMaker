import React from "react";
import Header from "../../components/Header/Header";
import { Container, Grid } from "@mantine/core";
import AddInfoSection from "../../components/AddInfoSection/AddInfoSection";
import NoticeViewSection from "../../components/NoticeViewSection/NoticeViewSection";
import Footer from "../../components/footer/Footer";

function AppView() {
  return (
    <>
      <Header />
      <Container>
        <Grid grow justify="space-between">
          <Grid.Col span={6}>
            <AddInfoSection />
          </Grid.Col>
          <Grid.Col span={6}>
            <NoticeViewSection />
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AppView;
