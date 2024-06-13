import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Formik, ErrorMessage } from "formik";

import {
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Grid,
  Select,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from "@mui/material";

import { addResult, updateResult } from "../../Store/actions";

import schema from "../Validation/schema";

const InterviewResultForm = ({
  showResultTable,
  selectedResultField,
  updateField,
}) => {
  const initialValue = {
    date: selectedResultField.date || "",
    name: selectedResultField.name || "",
    interviewer: selectedResultField.interviewer || "",
    technology: selectedResultField.technology || [],
    experienceInYear: selectedResultField.experienceInYear || "",
    experienceInMonth: selectedResultField.experienceInMonth || "",
    round: selectedResultField.round || "",
    communication: selectedResultField.communication || "",
    practical: selectedResultField.practical || "",
    coding: selectedResultField.coding || "",
    technical: selectedResultField.technical || "",
    notes: selectedResultField.notes || "",
    id: selectedResultField.id || "",
  };

  const resultData = useSelector((state) => state.interviewResult);

  let findResult = resultData.find(
    (result) => result.id === selectedResultField.id
  );

  const dispatch = useDispatch();

  const exitHandler = () => {
    showResultTable();
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mt: 6,
        mb: 4,
        mx: 15,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Interview Result Form
      </Typography>

      <Formik
        initialValues={{
          ...initialValue,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          if (findResult) {
            dispatch(updateResult(values));
            updateField();
          } else {
            dispatch(addResult(values));
          }
          showResultTable();
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,

          isValid,

          touched,
          values,
        }) => (
          <form
            autoComplete="on"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid sx={{ mb: 2 }}>
              <TextField
                sx={{ width: "100%" }}
                type="date"
                name="date"
                label="Date Of Interview"
                value={values.date}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.date && errors.date)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <ErrorMessage
                component="div"
                name="date"
                className="invalid-feedback"
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="name"
                  label="Candidate Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.name && errors.name)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Interviewer Name
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="interviewer"
                    label="Interviewer Name"
                    value={values.interviewer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    error={Boolean(touched.interviewer && errors.interviewer)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Renish Dadhaniya">
                      Renish Dadhaniya
                    </MenuItem>
                    <MenuItem value="Dhaval Thakral">Dhaval Thakral</MenuItem>
                    <MenuItem value="Riddhi Kadiya">Riddhi Kadiya</MenuItem>
                    <MenuItem value="Malay Patel">Malay Patel</MenuItem>
                    <MenuItem value="Nirmal Jodhani">Nirmal Jodhani</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="interviewer"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Technology
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="technology"
                    label="Technology"
                    onBlur={handleBlur}
                    multiple
                    sx={{ textAlign: "left" }}
                    value={values.technology}
                    onChange={handleChange}
                    error={Boolean(touched.technology && errors.technology)}
                    fullWidth
                    required
                  >
                    <MenuItem value="ReactJs">ReactJs</MenuItem>
                    <MenuItem value="Angular">Angular</MenuItem>
                    <MenuItem value=".Net">.Net</MenuItem>
                    <MenuItem value="Flutter">Flutter</MenuItem>
                    <MenuItem value="Android">Android</MenuItem>
                    <MenuItem value="PHP">PHP</MenuItem>
                    <MenuItem value="IOS">IOS</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="technology"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="experienceInYear"
                  label="Experience"
                  onBlur={handleBlur}
                  value={values.experienceInYear}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(
                    touched.experienceInYear && errors.experienceInYear
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Year</InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                />
                <ErrorMessage
                  component="div"
                  name="experienceInYear"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="experienceInMonth"
                  label="Experience"
                  onBlur={handleBlur}
                  value={values.experienceInMonth}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(
                    touched.experienceInMonth && errors.experienceInMonth
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Month</InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                />
                <ErrorMessage
                  component="div"
                  name="experienceInMonth"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">Round</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="round"
                    label="Round"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.round}
                    onChange={handleChange}
                    error={Boolean(touched.round && errors.round)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Practical">Practical</MenuItem>
                    <MenuItem value="Technical">Technical</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="round"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Communication
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="communication"
                    label="Communication"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.communication}
                    onChange={handleChange}
                    error={Boolean(
                      touched.communication && errors.communication
                    )}
                    fullWidth
                    required
                  >
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Poor</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="communication"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="practical"
                  label="Practical Completion (0-100)%"
                  value={values.practical}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.practical && errors.practical)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="practical"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="coding"
                  label="Coding Standard (0-100)%"
                  value={values.coding}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.coding && errors.coding)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="coding"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="technical"
                  label="Technical Completion (0-100)%"
                  value={values.technical}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.technical && errors.technical)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="technical"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="notes"
                  label="Notes"
                  value={values.notes}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.notes && errors.notes)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="notes"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                pt: 3,
                mx: "1rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={exitHandler}
                sx={{
                  mr: 1,
                  borderColor: "error.main",
                  borderRadius: 2,
                  color: "#e30909",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "error.main",
                    bgcolor: "#e30909",
                    color: "#fff",
                  },
                }}
              >
                Exit
              </Button>
              <Button
                sx={{ borderRadius: 2 }}
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default InterviewResultForm;
