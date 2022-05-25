import { LoadingButton } from "@mui/lab";
import {
  CircularProgress,
  FormControlLabel,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addStaff } from "../../../redux/StaffReducer";

const ModalAddStaff = ({ open, handleClose }) => {
  const { loading } = useSelector((state) => state.staff);
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

  const formik = useFormik({
    initialValues: {
      name: "",
      roleId: false,
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Must be format email"),
      password: Yup.string()
        .required("Required")
        .min(6, "Must be more than 6 character"),
    }),
    onSubmit: (values) => {
      dispatch(
        addStaff({
          name: values.name,
          email: values.email,
          password: values.password,
          roleId: values.roleId ? "admin" : "user",
        })
      );

      handleClose();
      clearForm();
    },
  });

  const clearForm = () => {
    formik.values.name = "";
    formik.values.roleId = false;
    formik.values.email = "";
    formik.values.password = "";
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
            Thêm nhân viên
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
                  Tên nhân viên (không bắt buộc)
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Tên nhân viên'
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
                  Email
                </Typography>
                <input
                  type='email'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Email'
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <p className='text-red-400 text-[14px]'>
                  {formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email}
                </p>
              </div>

              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Password
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Password'
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <p className='text-red-400 text-[14px]'>
                  {formik.errors.password &&
                    formik.touched.password &&
                    formik.errors.password}
                </p>
              </div>

              <div className='mt-4'>
                <FormControlLabel
                  control={
                    <Switch
                      name='roleId'
                      onChange={formik.handleChange}
                      checked={formik.values.roleId}
                    />
                  }
                  label='Là ADMIN'
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

export default ModalAddStaff;
