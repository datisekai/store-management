import React, { useEffect, useState } from "react";
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
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { PhotoCamera } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProduct } from "../../../redux/ProductReducer";
import swal from "sweetalert";

const ModalUpdateProduct = ({ open, handleClose }) => {
  const [newCategories, setNewCategories] = useState([]);
  const { loading, currentProduct, categories } = useSelector(
    (state) => state.product
  );

  const [file, setFile] = useState();
  const [image, setImage] = useState();
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

  const handleAddCategory = (e) => {
    const id = e.target.value;
    const name = e.target.dataset.name;
    if (e.target.checked) {
      setNewCategories([...newCategories, { id, name }]);
    } else {
      setNewCategories(newCategories.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    setNewCategories(currentProduct.categories || []);
    formik.values.status = currentProduct.status == 1 ? true : false;
    formik.values.name = currentProduct.name;
    formik.values.price = +currentProduct.price;
    setImage(currentProduct.image);
  }, [currentProduct]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  }, [file]);

  const handleUpdateProduct = (product) => {
    dispatch(updateProduct(product));
  };

  const Input = styled("input")({
    display: "none",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      status: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(6, "Must be more than 6 character"),
      price: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      if (!image) {
        swal("Check exist image");
        return;
      }

      if (newCategories.length === 0) {
        swal("Check length categories");
        return;
      }

      handleUpdateProduct({
        ...currentProduct,
        name: values.name,
        price: values.price,
        status: values.status ? 1 : 0,
        image: image,
        file,
        categories: newCategories,
      });

      handleClose();
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
          {loading ? (
            <div className='text-center'>
              <CircularProgress />
            </div>
          ) : (
            <>
              {" "}
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Cập nhật sản phẩm
              </Typography>
              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Mã sản phẩm
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Mã sản phẩm'
                  defaultValue={currentProduct?.id}
                  readOnly
                />
              </div>
              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Hình ảnh
                </Typography>
                <div className='flex items-center justify-around'>
                  <div className='mt-2 flex items-center'>
                    {image ? (
                      <>
                        {" "}
                        <img
                          src={image}
                          className='w-[60px] h-[60px] rounded-[10px]'
                          alt=''
                        />
                        <i
                          className='fa-solid fa-xmark cursor-pointer px-2 text-lg'
                          onClick={() => setImage()}
                        ></i>
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
                  Tên sản phẩm
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Tên sản phẩm'
                  value={formik.values.name}
                  name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className='text-[14px] text-red-400'>
                  {formik.errors.name &&
                    formik.touched.name &&
                    formik.errors.name}
                </p>
              </div>
              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Giá sản phẩm
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Giá sản phẩm'
                  value={formik.values.price}
                  name='price'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className='text-[14px] text-red-400'>
                  {formik.errors.price &&
                    formik.touched.price &&
                    formik.errors.price}
                </p>
              </div>
              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Danh mục
                </Typography>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                  {categories?.map((item, index) => (
                    <div className='flex items-center' key={index}>
                      <input
                        type='checkbox'
                        id={`category-${item.id}`}
                        value={item.id}
                        data-name={item.name}
                        onChange={handleAddCategory}
                        checked={
                          newCategories
                            ? newCategories.some(
                                (product) => product.id == item.id
                              )
                            : false
                        }
                      />
                      <label
                        htmlFor={`category-${item.id}`}
                        className='truncate text-[14px] ml-1'
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formik.values.status}
                      name='status'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label='Đang bán'
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
                  Cập nhật
                </LoadingButton>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdateProduct;
