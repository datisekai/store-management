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
import { addProduct } from "../../../redux/ProductReducer";

const ModalAddProduct = ({ open, handleClose }) => {
  const { categories } = useSelector((state) => state.product);
  const [image, setImage] = useState();
  const [category, setCategory] = useState([]);
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

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  }, [file]);

  const Input = styled("input")({
    display: "none",
  });

  const handleAddCategory = (e) => {
    const id = e.target.value;
    const name = e.target.dataset.name;
    if (e.target.checked) {
      setCategory([...category, { id, name }]);
    } else {
      setCategory(category.filter((item) => item.id !== id));
    }
  };

  const clearForm = () => {
    formik.values.name = "";
    formik.values.prices = 0;
    setCategory([]);
    setImage();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      prices: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Must be more than 3 character"),
      prices: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      if (category.length < 1) {
        swal("Check exist category");
        return;
      }

      if (!file) {
        swal("Check exist image");
        return;
      }
      dispatch(
        addProduct({
          name: values.name,
          price: values.prices,
          file,
          categories: category,
        })
      );
      handleClose();
      clearForm();
    },
  });

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
            Thêm sản phẩm
          </Typography>

          <div>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Hình ảnh
            </Typography>
            <div className='flex items-center justify-around'>
              <div className='mt-2 flex items-center'>
                {image ? (
                  <img
                    src={image}
                    className='w-[60px] h-[60px] rounded-[10px]'
                    alt=''
                  />
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
              Tên sản phẩm
            </Typography>
            <input
              type='text'
              className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
              placeholder='Tên sản phẩm'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <p className='text-red-400 text-[14px]'>
              {formik.errors.name && formik.touched.name && formik.errors.name}
            </p>
          </div>

          <div>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Giá sản phẩm
            </Typography>
            <input
              type='number'
              className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
              placeholder='Tên sản phẩm'
              name='prices'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.prices}
            />
            <p className='text-red-400 text-[14px]'>
              {formik.errors.prices &&
                formik.touched.prices &&
                formik.errors.prices}
            </p>
          </div>

          <div>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Danh mục
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
              {categories.map((item, index) => (
                <div className='flex items-center' key={index}>
                  <input
                    type='checkbox'
                    value={item.id}
                    id={`product-${item.id}`}
                    data-name={item.name}
                    onChange={(e) => handleAddCategory(e)}
                  />
                  <label
                    htmlFor={`product-${item.id}`}
                    className='truncate text-[14px] ml-1'
                  >
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-4'>
            <LoadingButton
              fullWidth
              loading={false}
              startIcon={<SaveIcon />}
              onClick={formik.handleSubmit}
              variant='contained'
            >
              Thêm
            </LoadingButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddProduct;
