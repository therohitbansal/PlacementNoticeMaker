import { useApp } from "../../context/AppContext";
import { Box, ScrollArea } from "@mantine/core";
import dayjs from 'dayjs';

function Preview() {
  const { state: values } = useApp();
  console.log(dayjs().format());
  
  return (
    <Box>
      <ScrollArea
        style={{ height: "60vh" }}
        sx={{
          margin: "1em 0",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          padding: "1em",
        }}
      >
        {/* notice id */}
        <p>
          {values.notice_id && (
            <span>
              <b>#{values.notice_id}</b> <br />
            </span>
          )}
          {/* company name */}
          {values.company_name && <b>#{values.company_name}</b>}
        </p>
        {/* about company */}
        {values.about_company && (
          <p>
            <b>About Company: </b> <br />
            {values.about_company}
          </p>
        )}
        {/* company website */}
        {values.company_website && (
          <p>
            <b>Website:</b> {values.company_website}
          </p>
        )}
        {values.job_role && (
          <p>
            <b>Job Role: </b>
            {values.job_role}
          </p>
        )}
        {values.ctc && (
          <p>
            <b>CTC: </b>
            {values.ctc} LPA
          </p>
        )}
        {values.bond && (
          <p>
            <b>Bond Period (in years):</b>&nbsp;
            {values.bond_period}
          </p>
        )}

        <p>
          {(values.degree_allowed.length ||
            values.branches_allowed.length ||
            values.max_backlog ||
            values.tenth_perc ||
            values.twelfth_perc ||
            values.diploma_perc ||
            values.ug_perc ||
            values.pg_perc || values.max_gap) && (
            <span>
              <b>Eligibility Criteria</b>
              <br />
            </span>
          )}

          {values.degree_allowed.length > 0 && (
            <span>
              - Degree:&nbsp;
              {values.degree_allowed.toString()}
              <br />
            </span>
          )}

          {values.branches_allowed.length > 0 && (
            <span>
              - Branch:&nbsp;
              {values.branches_allowed.toString()} <br />
            </span>
          )}

          {values.max_backlog && (
            <span>
              - Maximum Backlog:&nbsp;
              {values.max_backlog}
              <br />
            </span>
          )}

          {values.tenth_perc && (
            <span>
              - Min 10th %:&nbsp;
              {values.tenth_perc}% <br />
            </span>
          )}

          {values.twelfth_perc && (
            <span>
              - Min 12th %:&nbsp;
              {values.twelfth_perc}%<br />
            </span>
          )}

          {values.diploma_perc && (
            <span>
              - Min diploma %:&nbsp;
              {values.diploma_perc}% <br />
            </span>
          )}

          {values.ug_perc && (
            <span>
              - Min UG %:&nbsp;
              {values.ug_perc}%<br />
            </span>
          )}

          {values.pg_perc && (
            <span>
              - Min PG %:&nbsp;
              {values.pg_perc}%<br />
            </span>
          )}

          {values.max_gap && (
            <span>
              - Maximum Gap:&nbsp;
              {values.max_gap} Years
              <br />
            </span>
          )}
        </p>

        {(values.form_link || values.form_submission_date) && (
          <p>
            All the eligible and interested candidates are required to fill the
            form by{" "}
            <b>
              {dayjs(values?.form_submission_time).format("hh:mm A")}
            </b>
            {" "}on{" "}
            <b>
              {dayjs(values?.form_submission_date).format("DD MMMM YYYY (dddd)")}
            </b>
            .<br />
            Apply link: <b><a href={values.form_link}>{values.form_link}</a></b>
          </p>
        )}

        {values.extra_note && (
          <p>
            <b>NB:</b>
            <br />
            <span>{values.extra_note}</span>
          </p>
        )}
      </ScrollArea>
    </Box>
  );
}

export default Preview;
