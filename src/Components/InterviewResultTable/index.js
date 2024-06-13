import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Fab,
  Box,
  Button,
  TableFooter,
  InputAdornment,
  TableSortLabel,
} from "@mui/material";

import { useSelector } from "react-redux";

import EditRoundedIcon from "@mui/icons-material/EditRounded";

import AddIcon from "@mui/icons-material/Add";

import SearchIcon from "@mui/icons-material/Search";

import { CustomTablePagination } from "../Pagination";

import AlertDialog from "../AlertDialog";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InterviewResultTable = ({ showInterviewForm, getResult }) => {
  const resultList = useSelector((state) => state.interviewResult);

  const [result, setResult] = useState([...resultList]);

  const [searchValue, setSearchValue] = useState("");

  const [resultPage, setResultPage] = useState(0);

  const [resultRowsPerPage, setResultRowsPerPage] = useState(2);

  const [sortOrder, setSortOrder] = useState("asc");

  const addNewRecordHandler = () => {
    showInterviewForm();
  };

  const updateResultHandler = (values) => {
    getResult(values);
    showInterviewForm();
  };

  const pageChangeHandler = (e, newResultPage) => {
    setResultPage(newResultPage);
  };

  const perPageRowChangeHandler = (e) => {
    setResultRowsPerPage(parseInt(e.target.value, 10));
    setResultPage(0);
  };

  const filterResultdata = result.filter((row) => {
    if (searchValue === "") {
      return row;
    } else if (
      row.date.toLowerCase().includes(searchValue.toLowerCase()) ||
      JSON.stringify(row.technology)
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      return row;
    }
  });

  const handleSortRequest = (column) => {
    if (sortOrder === "asc") {
      const sorted = [...result].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setResult(sorted);
      setSortOrder("desc");
    }
    if (sortOrder === "desc") {
      const sorted = [...result].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setResult(sorted);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    setResult(resultList);
  }, [resultList]);

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 5, mb: 5 }}>
        <Typography
          variant="h6"
          sx={{ fontStyle: "italic", textDecoration: "underline", mt: 2 }}
        >
          Interview Result List
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            sx={{ ml: 5, my: 2, width: "350px" }}
            id="search"
            label="Search By Date And Technology"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Box sx={{ flex: "1 1 auto" }} />
          <Fab
            color="primary"
            aria-label="add"
            onClick={addNewRecordHandler}
            sx={{
              mr: 5,
              mt: 2,
            }}
          >
            <AddIcon />
          </Fab>
        </Box>

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#1c9c51" }}>
            <StyledTableRow>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                <TableSortLabel
                  direction={sortOrder === "asc" ? "asc" : "desc"}
                  onClick={() => handleSortRequest("date")}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Candidate
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Interviewer
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Technology
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
                colSpan={2}
              >
                Experience
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  Year
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  Month
                </TableCell>
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Round
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Communication
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Practical Completion
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Coding Standard
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Technical Completion
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Notes
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Action
              </TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {(resultRowsPerPage > 0
              ? filterResultdata.slice(
                  resultPage * resultRowsPerPage,
                  resultPage * resultRowsPerPage + resultRowsPerPage
                )
              : filterResultdata
            ).map((row) => (
              <StyledTableRow key={`${row.id}`}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.interviewer}</TableCell>
                <TableCell align="center">{row.technology}</TableCell>
                <TableCell align="center">{row.experienceInYear}</TableCell>
                <TableCell align="center">{row.experienceInMonth}</TableCell>
                <TableCell align="center">{row.round}</TableCell>
                <TableCell align="center">{row.communication || "-"}</TableCell>
                <TableCell align="center">{row.practical || "-"}</TableCell>
                <TableCell align="center">{row.coding || "-"}</TableCell>
                <TableCell align="center">{row.technical || "-"}</TableCell>
                <TableCell sx={{ textAlign: "justify" }}>{row.notes}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => updateResultHandler(row)}>
                    <EditRoundedIcon sx={{ color: "mediumseagreen" }} />
                  </Button>
                  <AlertDialog id={row.id} />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {filterResultdata.length === 0 && (
          <Typography variant="h6" sx={{ color: "red", mt: 2, mb: 2 }}>
            No Record Found!
          </Typography>
        )}
        <Table>
          <TableFooter sx={{ minWidth: "auto" }}>
            <StyledTableRow>
              <CustomTablePagination
                rowsPerPageOptions={[2, 5, 7, { label: "All", value: -1 }]}
                colSpan={3}
                count={filterResultdata.length}
                rowsPerPage={resultRowsPerPage}
                page={resultPage}
                componentsProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={perPageRowChangeHandler}
              />
            </StyledTableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
export default InterviewResultTable;
