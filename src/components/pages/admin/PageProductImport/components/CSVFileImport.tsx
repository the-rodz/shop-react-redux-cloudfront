import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios, { AxiosResponse } from "axios";
import { Alert } from "@mui/material";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();
  const [uploadError, setUploadError] = React.useState<Number>(0);
  const token = localStorage.getItem('authorization_token');

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(0);
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    try {
      // Get the presigned URL
      setUploadError(0);
      const headers = token ? { headers: {'Authorization': `Basic ${token}` }} : {};
      const response = await axios({
        method: "GET",
        url,
        ...headers,
        params: {
          fileName: encodeURIComponent(file?.name!),
        },
      });
      const result = await fetch(response.data.url, {
        method: "PUT",
        body: file,
      });
      setFile(undefined);
    } catch(err) {
      setFile(undefined);
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        if (status === 401 || status === 403) {
          setUploadError(status);
        }
      }
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!!uploadError && (
        <Box mb={2}>
          <Alert severity="error">{`There was an error when uploading file. Status Code: ${uploadError.toString()}`}</Alert>
        </Box>
        )}
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
