export const getSuccessResponse = (response, apiName, data) => {
  return response.status(200).json({
    status: 'success',
    data: {
      [apiName]: data,
    },
  });
};

export const getNotFoundResponse = (response) => {
  return response.status(404).json({
    status: 'error',
    data: {},
    error: ['Requested data not found'],
  });
};

export const getBadResponse = (response) => {
  return response.status(400).json({
    status: 'fail',
    data: {},
    error: ['Please check payload(Body)'],
  });
};

export const getResponse = (
  response,
  status,
  statusText,
  successData,
  errorData
) => {
  return response.status(status).json({
    status: statusText,
    data: successData,
    error: errorData,
  });
};
