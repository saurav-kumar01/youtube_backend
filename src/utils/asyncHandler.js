const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {

//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.mesaage
//         })
//     }
// }
