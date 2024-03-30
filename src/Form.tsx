import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
const API_URL = "http://127.0.0.1:8000/patients/check/";
export default function Form() {
    const [result, setResult] = useState<any>(null);

  const healthData = yup.object().shape({
    age: yup.number().required("Age is required"),
    cp: yup.number().required("Chest Pain is required"),
    trestbps: yup.number().required("Resting Blood Pressure is required"),
    chol: yup.number().required("Cholestrol is required"),
    fbs: yup.number().required("Fasting Blood Sugar is required"),
    restecg: yup
      .number()
      .required("Resting Electrocardiographic Results is required"),
    thalach: yup.number().required("Maximum Heart Rate Achieved is required"),
    exang: yup.number().required("Exercise Induced Angina is required"),
    oldpeak: yup
      .number()
      .required(
        "ST Depression Induced by Exercise Relative to Rest is required"
      ),
    slope: yup
      .number()
      .required("Slope of the Peak Exercise ST Segment is required"),
    ca: yup
      .number()
      .required("Number of Major Vessels Colored by Flourosopy is required"),
    thal: yup.number().required("Thalassemia is required"),
    sex: yup.number().required("Sex is required, Provide 0 for female and 1 for male"),
  });

  const handleFormSubmit =async (values: any) => {
    const data: any = {
      age: values.age,
      sex: values.sex,
      cp: values.cp,
      trestbps: values.trestbps,
      chol: values.chol,
      fbs: values.fbs,
      restecg: values.restecg,
      thalach: values.thalach,
      exang: values.exang,
      oldpeak: values.oldpeak,
      slope: values.slope,
      ca: values.ca,
      thal: values.thal,
      
    };

    const response = await axios.post(API_URL, data);
    setResult(response.data);
    console.log(response.data);
  };
  const initialValues = {
    age: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
    sex: ""
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />

          <Grid item component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Fill In Your Health Data,To Predict Heart Disease
              </Typography>
                {result && (
                    <Typography component="h1" variant="h5">
                    {result?.prediction === 1? "You have a heart disease" : "You don't have a heart disease"}
                    </Typography>
                )}

              <Formik
                initialValues={initialValues}
                validationSchema={healthData}
                onSubmit={handleFormSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="age"
                      label="Age"
                      name="age"
                      autoComplete="age"
                      autoFocus
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.age && touched.age)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="cp"
                      label="Chest Pain"
                      name="cp"
                      autoComplete="cp"
                      value={values.cp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.cp && touched.cp)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="trestbps"
                      label="Resting Blood Pressure"
                      name="trestbps"
                      autoComplete="trestbps"
                      value={values.trestbps}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.trestbps && touched.trestbps)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="chol"
                      label="Cholestrol"
                      name="chol"
                      autoComplete="chol"
                      value={values.chol}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.chol && touched.chol)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="fbs"
                      label="Fasting Blood Sugar"
                      name="fbs"
                      autoComplete="fbs"
                      value={values.fbs}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.fbs && touched.fbs)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="restecg"
                      label="Resting Electrocardiographic Results"
                      name="restecg"
                      autoComplete="restecg"
                      value={values.restecg}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.restecg && touched.restecg)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="thalach"
                      label="Maximum Heart Rate Achieved"
                      name="thalach"
                      autoComplete="thalach"
                      value={values.thalach}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.thalach && touched.thalach)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="exang"
                      label="Exercise Induced Angina"
                      name="exang"
                      autoComplete="exang"
                      value={values.exang}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.exang && touched.exang)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="oldpeak"
                      label="ST Depression Induced by Exercise Relative to Rest"
                      name="oldpeak"
                      autoComplete="oldpeak"
                      value={values.oldpeak}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.oldpeak && touched.oldpeak)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="slope"
                      label="Slope of the Peak Exercise ST Segment"
                      name="slope"
                      autoComplete="slope"
                      value={values.slope}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.slope && touched.slope)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="ca"
                      label="Number of Major Vessels Colored by Flourosopy"
                      name="ca"
                      autoComplete="ca"
                      value={values.ca}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.ca && touched.ca)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="thal"
                      label="Thalassemia"
                      name="thal"
                      autoComplete="thal"
                      value={values.thal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.thal && touched.thal)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="sex"
                      label="sex"
                      name="sex"
                      autoComplete="sex"
                      value={values.sex}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(errors.sex && touched.sex)}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
