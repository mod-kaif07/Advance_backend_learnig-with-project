const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise
      .resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
};

export { asyncHandler };


// const asyncHalndler=(fn)=>async(req,res,next)=> {
// try{

// }
// catch(error){ 
//     res.staus(error.code||500).json({
//         sucess:false,
//         message:error.message
//     })
// }
// }