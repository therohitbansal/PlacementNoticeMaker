import React, { useId, useState } from "react";
import {
  Container,
  Button,
  Grid,
  Input,
  List,
  MultiSelect,
  Text,
  Textarea,
  TextInput,
  Title,
  Select,
  Switch,
  NumberInput,
  ScrollArea,
} from "@mantine/core";
import { IconPercentage,IconCalendarEvent} from "@tabler/icons";
import InputMask from "react-input-mask";
import { DatePicker, TimeInput } from "@mantine/dates";
import {
  addDegree,
  addBranch,
  addBacklogs,
  addBond,
  addDate,
  changeInput,
  useApp,
  addTime,
} from "../../context/AppContext";

function AddInfoSection() {
  const id = useId();
  const [isBond, setIsBond] = useState(false);
  const degreeData = [
    { value: "All Degree", label: "All Degree" },
    { value: "B.Sc", label: "B.Sc" },
    { value: "B.Tech", label: "B.Tech" },
    { value: "MCA", label: "MCA" },
    { value: "M.Sc", label: "M.Sc" },
    { value: "M.Tech", label: "M.Tech" },
  ];

  const branchData = [
    { value: "All Branches", label: "All branches" },
    { value: "CSE", label: "CSE" },
    { value: "IT", label: "IT" },
    { value: "EE", label: "EE" },
    { value: "I&E", label: "I&E" },
    { value: "FT", label: "FT" },
    { value: "TE", label: "TE" },
    { value: "CE", label: "CE" },
    { value: "BT", label: "BT" },
    { value: "MCA", label: "MCA" },
    { value: "Chem", label: "Chem" },
    { value: "Physics", label: "Physics" },
    { value: "Maths&Comp.", label: "Maths&Comp." },
  ];

  const maxBacklogs = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];

  const { state, dispatch } = useApp();

  const handleDropDown = (value: any) => {
    // console.log(value);
    // console.log(state.degree_allowed);
    dispatch(addDegree(value));
  };

  const handleBranchInput = (value: any) => {
    dispatch(addBranch(value));
  };

  const handleBacklogsInput = (value: any) => {
    dispatch(addBacklogs(value));
  };

  const handleDateInput = (value: any) => {
    dispatch(addDate(value));
  };

  const handleTimeInput = (value: any) => {
    dispatch(addTime(value));
  };

  const bondInputHandler = (event: any) => {
    setIsBond(event.currentTarget.checked);
    dispatch(addBond(event.currentTarget.checked));
    if (!event.currentTarget.checked) {
      dispatch(changeInput({ bond_period: "" }));
    }
  };

  const handleInput = (event: any) => {
    // console.log(event.target.value);
    dispatch(changeInput({ [event.target.name]: event.target.value }));
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <Container>
      <Title order={3} my="sm" weight={400}>
        Placement Details
      </Title>
      <ScrollArea style={{ height: "90vh" }} scrollHideDelay={0}>
        <form onSubmit={formSubmit}>
          {/* <Button type='submit'>Clcik</Button> */}

          {/* notice id  */}
          <TextInput
            name="notice_id"
            variant="filled"
            mb="xs"
            id={id}
            required
            label="Placement Notice ID"
            placeholder="PA-XXXX"
            description="Write the notice number here"
            defaultValue={state.notice_id}
            onChange={handleInput}
          />

          {/* company name  */}
          <TextInput
            name="company_name"
            variant="filled"
            mb="xs"
            id={id}
            required
            label="Company Name"
            placeholder="Ex. Accenture"
            description="Write company name here"
            defaultValue={state.company_name}
            onChange={handleInput}
            // {...form.getInputProps('company_name')}
          />

          {/* company website  */}
          <TextInput
            name="company_website"
            variant="filled"
            mb="xs"
            id={id}
            required
            label="Company Website"
            placeholder="Ex. https://www.accenture.com"
            description="Write company website here"
            defaultValue={state.company_website}
            onChange={handleInput}
          />

          {/* about company  */}
          <Textarea
            id={id}
            mb="xs"
            variant="filled"
            placeholder="About Company"
            label="About Company"
            name="about_company"
            withAsterisk
            required
            description="Write about company here"
            defaultValue={state.about_company}
            onChange={handleInput}
            // {...form.getInputProps('about_company')}
          />

          {/* job role  */}
          <div>
            <TextInput
              mb="xs"
              id={id}
              label="Job Role"
              variant="filled"
              placeholder="Full Stack Developer"
              name="job_role"
              defaultValue={state.job_role}
              onChange={handleInput}
              withAsterisk
            />
            <TextInput
              mb="xs"
              id={id}
              variant="filled"
              label="CTC (in LPA)"
              name="ctc"
              placeholder="6"
              defaultValue={state.ctc}
              onChange={handleInput}
              withAsterisk
            />
          </div>

          <Switch
            mb="xs"
            labelPosition="left"
            label="Bond"
            onLabel="YES"
            offLabel="NO"
            size="md"
            // onChange={(event) => setIsBond(event.currentTarget.checked)}
            name="bond"
            defaultValue={state.company_name}
            onChange={bondInputHandler}
            required
          />

          {isBond && (
            <TextInput
              mb="xs"
              label="Bond Period (in years)"
              variant="filled"
              name="bond_period"
              rightSection={<IconCalendarEvent/>}
              defaultValue={state.bond_period}
              onChange={handleInput}
              withAsterisk
            />
          )}

          {/* eligibility criteria  */}
          <div>
            <Text size="md">Eligibility Criteria:</Text>
            <List type="ordered">
              <List.Item>
                <MultiSelect
                  mb="xs"
                  name="degree_allowed"
                  variant="filled"
                  data={degreeData}
                  value={state.degree_allowed}
                  onChange={handleDropDown}
                  label="Degree Allowed"
                  placeholder="Pick degree"
                  searchable
                  clearable
                  required
                  nothingFound="Please choose a valid degree"
                />
              </List.Item>
              <List.Item>
                <MultiSelect
                  mb="xs"
                  name="branches_allowed"
                  variant="filled"
                  data={branchData}
                  value={state.branches_allowed}
                  onChange={handleBranchInput}
                  label="Branches Allowed"
                  placeholder="Pick branch"
                  searchable
                  clearable
                  required
                  nothingFound="Please choose a valid branch"
                />
              </List.Item>
              <List.Item>
                <Select
                  mb="xs"
                  name="max_backlog"
                  variant="filled"
                  label="Maximum Backlogs Allowed"
                  placeholder="Pick backlogs count"
                  data={maxBacklogs}
                  searchable
                  required
                  value={state.max_backlog}
                  onChange={handleBacklogsInput}
                  clearable
                />
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="Maximum Gap">
                  <Input
                    mb="xs"
                    name="max_gap"
                    variant="filled"
                    component={InputMask}
                    mask="9"
                    id={id}
                    placeholder="Maximum Year Of Gaps"
                    rightSection={<IconCalendarEvent />}
                    defaultValue={state.max_gap}
                    onChange={handleInput}
                    
                  />
                </Input.Wrapper>
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="10th Percentage" withAsterisk>
                  <Input
                    mb="xs"
                    id={id}
                    variant="filled"
                    placeholder="10th percentage"
                    name="tenth_perc"
                    rightSection={<IconPercentage />}
                    defaultValue={state.tenth_perc}
                    onChange={handleInput}
                    required
                  />
                </Input.Wrapper>
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="12th Percentage" withAsterisk>
                  <Input
                    mb="xs"
                    name="twelfth_perc"
                    variant="filled"
                    id={id}
                    placeholder="12th percentage"
                    rightSection={<IconPercentage />}
                    defaultValue={state.twelfth_perc}
                    onChange={handleInput}
                  />
                </Input.Wrapper>
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="Diploma Percentage">
                  <Input
                    mb="xs"
                    name="diploma_perc"
                    variant="filled"
                    component={InputMask}
                    mask="99"
                    id={id}
                    placeholder="Diploma percentage"
                    rightSection={<IconPercentage />}
                    defaultValue={state.diploma_perc}
                    onChange={handleInput}
                  />
                </Input.Wrapper>
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="UG Percentage" withAsterisk>
                  <Input
                    mb="xs"
                    name="ug_perc"
                    variant="filled"
                    component={InputMask}
                    mask="99"
                    id={id}
                    placeholder="UG percentage"
                    rightSection={<IconPercentage />}
                    defaultValue={state.ug_perc}
                    onChange={handleInput}
                  />
                </Input.Wrapper>
              </List.Item>
              <List.Item>
                <Input.Wrapper id={id} label="PG Percentage" withAsterisk>
                  <Input
                    mb="xs"
                    name="pg_perc"
                    variant="filled"
                    component={InputMask}
                    mask="99"
                    id={id}
                    placeholder="PG percentage"
                    rightSection={<IconPercentage />}
                    defaultValue={state.pg_perc}
                    onChange={handleInput}
                  />
                </Input.Wrapper>
              </List.Item>
              
            </List>
          </div>

          {/* form apply  */}
          <div>
            <Text size="md">Apply Details:</Text>
            {/* apply form link */}
            <TextInput
              mb="xs"
              name="form_link"
              variant="filled"
              defaultValue={state.form_link}
              onChange={handleInput}
              label="Form Link"
              withAsterisk
              placeholder="Paste google form link here"
            />
            <DatePicker
              mb="xs"
              variant="filled"
              name="form_submission_date"
              placeholder="Pick date"
              label="Form Submission Date"
              withAsterisk
              clearable
              defaultValue={state.form_submission_date}
              inputFormat="DD-MMM-YYYY"
              onChange={handleDateInput}
              minDate={new Date()}
            />
            <TimeInput
              mb="xs"
              variant="filled"
              name="form_submission_time"
              label="Form Submission Time"
              format="12"
              withAsterisk
              clearable
              defaultValue={state.form_submission_time}
              onChange={handleTimeInput}
            />
          </div>

          <Textarea
            mb="xs"
            placeholder="NB:"
            label="Extra info"
            variant="filled"
            autosize
            minRows={3}
            name="extra_note"
            defaultValue={state.extra_note}
            onChange={handleInput}
          />
        </form>
      </ScrollArea>
    </Container>
  );
}

export default AddInfoSection;
