import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  CircularProgress,
  FormControlLabel,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import { updateStaff } from "../../../redux/StaffReducer";

const ModalUpdateStaff = ({ open, handleClose }) => {
  const [idStaff, setIdStaff] = useState("");
  const { currentStaff, loading } = useSelector((state) => state.staff);
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

  // true => admin
  const formik = useFormik({
    initialValues: {
      name: "",
      roleId: currentStaff?.roleId == "admin" ? true : false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be more than 4 character"),
    }),
    onSubmit: (values) => {
      dispatch(
        updateStaff({
          ...currentStaff,
          username: values.name,
          roleId: values.roleId ? "admin" : "user",
        })
      );
      handleClose();
    },
  });

  useEffect(() => {
    setIdStaff(currentStaff.id);
    formik.values.name = currentStaff.username;
    let role = false;
    if (currentStaff?.roleId == "admin") {
      role = true;
    }
    formik.values.roleId = role;
  }, [currentStaff]);

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
            Cập nhật nhân viên
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
                  Mã nhân viên
                </Typography>
                <input
                  type='text'
                  className='px-5 py-2 placeholder:text-[14px] rounded-[10px] outline-blue-color bg-main-color w-full mt-1'
                  placeholder='Mã nhân viên'
                  value={currentStaff?.id}
                  readOnly
                />
              </div>

              <div>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Tên nhân viên
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

export default ModalUpdateStaff;
