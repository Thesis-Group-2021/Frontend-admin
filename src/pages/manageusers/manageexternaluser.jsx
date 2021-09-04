import "./manageexternaluser.css";
import React from "react";

import {
  Container,
  Box,
  Paper,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import AddIcon from "@material-ui/icons/Add";

export default function manageexternaluser() {
  return (
    <Container>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <h2>Name</h2>
          </Grid>
          <Grid item md={3}>
            <h2>Department</h2>
          </Grid>

          <Grid item md={3}>
            <h2>Status</h2>
          </Grid>
          <Grid item md={3}>
            <h2>Actions</h2>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>Rediet wogayehu</p>
          </Grid>
          <Grid item md={3}>
            <p>Software enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="accepted">Accepted</p>
          </Grid>
          <Grid item md={1}>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>Samrawit Fotela</p>
          </Grid>
          <Grid item md={3}>
            <p>Civil Enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="accepted">Accepted</p>
          </Grid>
          <Grid item md={1}>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>Hiriya Negash</p>
          </Grid>
          <Grid item md={3}>
            <p>Biomedical Enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="rejected">Rejected</p>
          </Grid>

          <Grid item md={1}>
            <IconButton color="secondary">
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>Hannan Abdella</p>
          </Grid>
          <Grid item md={3}>
            <p>Electrical Enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="accepted">Accepted</p>
          </Grid>
          <Grid item md={1}>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>Kidist Yilma</p>
          </Grid>
          <Grid item md={3}>
            <p>Chemical Enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="rejected">Rejected</p>
          </Grid>
          <Grid item md={1}>
            <IconButton color="secondary">
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper component={Box} p={4}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <p>tedu demissie</p>
          </Grid>
          <Grid item md={3}>
            <p>Mechanical Enginnering</p>
          </Grid>
          <Grid item md={3}>
            <p className="rejected">Rejected</p>
          </Grid>
          <Grid item md={1}>
            <IconButton color="primary">
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
