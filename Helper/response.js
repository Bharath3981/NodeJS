export const getSuccessResponse = (response, apiName, data) => {
  return response.status(200).json({
    status: 'success',
    data: {
      [apiName]: data,
    },
  });
};
