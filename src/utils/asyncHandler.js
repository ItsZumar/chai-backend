// By using Promises
const asyncHandler = (requestHandler) => {
  return (req, res, err) => {
    Promise.resolve(requestHandler(req, res, err)).catch((err) => next(err));
  };
};

export { asyncHandler };

// Using Try...Catch

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (err) {
//       res.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
