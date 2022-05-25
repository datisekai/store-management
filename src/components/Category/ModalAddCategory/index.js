import { PhotoCamera } from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import {
  FormControlLabel,
  IconButton,
  Modal,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import * as Yup from "yup";
import { addCategory, getCategory } from "../../../redux/CategoryReducer";

const ModalAddCategory = ({ open, handleClose }) => {
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState();
  const { loading } = useSelector((state) => state.category);
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

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result);
      };
    }
  }, [file]);

  const Input = styled("input")({
    display: "none",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      isSell: true,
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
      if (!file) {
        swal("Vui lòng chọn ảnh");
        return;
      }

      dispatch(
        addCategory({
          name: values.name,
          desc: values.desc,
          isSell: values.isSell,
          file,
        })
      );
      dispatch(getCategory());

      handleClose();
      clearForm();
    },
  });

  const clearForm = () => {
    setImagePreview();
    formik.values.name = "";
    formik.values.desc = "";
    formik.values.isSell = false;
  };

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
            Thêm danh mục
          </Typography>

          <div>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Hình ảnh
            </Typography>
            <div className='flex items-center justify-around'>
              <div className='mt-2 flex items-center'>
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      className='w-[60px] h-[60px] rounded-[10px]'
                      alt=''
                    />
                  </>
                ) : (
                  <span className='text-[14px]'>Chưa có ảnh...</span>
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
              Tên danh mục
            </Typography>
            <input
              type='text'
              className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
              placeholder='Tên danh mục'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className='text-[14px] text-red-400'>
              {formik.errors.name && formik.touched.name && formik.errors.name}
            </p>
          </div>

          <div>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Mô tả
            </Typography>
            <input
              type='text'
              className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
              placeholder='Tên danh mục'
              name='desc'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className='text-[14px] text-red-400'>
              {formik.errors.desc && formik.touched.desc && formik.errors.desc}
            </p>
          </div>

          <div className='mt-4'>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  name='isSell'
                  onChange={formik.handleChange}
                />
              }
              label='Mở bán'
            />
          </div>
          <div className='mt-4'>
            <LoadingButton
              fullWidth
              loading={loading}
              startIcon={<SaveIcon />}
              variant='contained'
              onClick={formik.handleSubmit}
            >
              Thêm
            </LoadingButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddCategory;
