import { PhotoCamera } from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  CircularProgress,
  FormControlLabel,
  IconButton,
  Modal,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import * as Yup from "yup";
import { updateCategory } from "../../../redux/CategoryReducer";

const ModalUpdateCategory = ({ open, handleClose }) => {
  const { loading, currentCategory } = useSelector((state) => state.category);
  const [image, setImage] = useState(currentCategory.image);
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };
  const Input = styled("input")({
    display: "none",
  });

  const formik = useFormik({
    initialValues: {
      name: currentCategory.name,
      desc: currentCategory.descr,
      isSell: currentCategory.isSell == 1 ? true : false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(6, "Must be more than 6 character"),
      desc: Yup.string()
        .required("Required")
        .min(6, "Must be more than 6 character"),
    }),
    onSubmit: (values) => {
      if (image) {
        dispatch(
          updateCategory({
            id: currentCategory.id,
            name: values.name,
            descr: values.desc,
            isSell: values.isSell,
            file: file,
            image: image,
          })
        );

        handleClose();
      } else {
        swal("Check exist image");
      }
    },
  });

  useEffect(() => {
    setImage(currentCategory.image);
    formik.values.name = currentCategory.name;
    formik.values.desc = currentCategory.descr;
    formik.values.isSell = currentCategory.isSell == 1 ? true : false;
  }, [currentCategory]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  }, [file]);

  return (
    <div className='z-50'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='w-[90%] md:w-[400px] mx-auto'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            C???p nh???t danh m???c
          </Typography>

          {loading ? (
            <div className='mx-auto text-center mt-5'>
              {" "}
              <CircularProgress />
            </div>
          ) : (
            <>
              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  M?? danh m???c
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='M?? danh m???c'
                  value={currentCategory?.id}
                  readOnly
                />
              </div>

              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  H??nh ???nh
                </Typography>
                <div className='flex items-center justify-around'>
                  <div className='mt-2 flex items-center'>
                    {image ? (
                      <>
                        <img
                          src={image}
                          className='w-[60px] h-[60px] rounded-[10px]'
                          alt=''
                        />
                        <i
                          className='fa-solid fa-xmark px-2 text-lg cursor-pointer'
                          onClick={() => setImage()}
                        ></i>
                      </>
                    ) : (
                      <span className='text-[14px]'>Ch??a c?? ???nh...</span>
                    )}
                  </div>

                  <label htmlFor='icon-button-file'>
                    <Input
                      accept='image/*'
                      id='icon-button-file'
                      type='file'
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <IconButton
                      color='primary'
                      aria-label='upload picture'
                      component='span'
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </div>

              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  T??n danh m???c
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='T??n danh m???c'
                  name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <p className='text-red-400 text-[14px]'>
                  {formik.errors.name &&
                    formik.touched.name &&
                    formik.errors.name}
                </p>
              </div>

              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  M?? t???
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='T??n danh m???c'
                  name='desc'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.desc}
                />
                <p className='text-red-400 text-[14px]'>
                  {formik.errors.desc &&
                    formik.touched.desc &&
                    formik.errors.desc}
                </p>
              </div>

              <div className='mt-4'>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formik.values.isSell}
                      name='isSell'
                      onChange={formik.handleChange}
                    />
                  }
                  label='M??? b??n'
                />
              </div>
              <div className='mt-4'>
                <LoadingButton
                  fullWidth
                  loading={false}
                  startIcon={<SaveIcon />}
                  variant='contained'
                  onClick={formik.handleSubmit}
                >
                  C???p nh???t
                </LoadingButton>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdateCategory;
