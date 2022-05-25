import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { scrollTop } from "../../utils/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/AuthReducer";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    scrollTop();
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Invalid format. EX: dat@gmail.com!"),
      password: Yup.string()
        .required("Required")
        .min(6, "Invalid format. More than 6 character!"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  if (localStorage.getItem("token") !== null) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className='absolute right-[5%] sm:right-[10%] w-[90%] sm:w-[500px] bg-white rounded-lg py-6 px-5 top-[20%]'>
      <form
        action='
      '
        onSubmit={formik.handleSubmit}
      >
        <h1 className='font-semibold text-lg'>Đăng nhập</h1>
        <div className='mt-4'>
          <Input
            data={{
              label: "Email/Số điện thoại/Tên đăng nhập",
              name: "email",
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              touched: formik.touched.email,
              value: formik.values.email,
              error: formik.errors.email,
            }}
          />
          <Input
            data={{
              type: "password",
              label: "Mật khẩu",
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              touched: formik.touched.password,
              value: formik.values.password,
              error: formik.errors.password,
              name: "password",
            }}
          />
        </div>

        <p className='text-sm text-blue-color text-right mt-4'>
          Quên mật khẩu?
        </p>

        <Button
          className={"mt-4 bg-blue-color text-white hover:bg-blue-700"}
          label={!loading ? "Đăng nhập" : "Loading..."}
          onSubmit={formik.handleSubmit}
          disable={loading}
        />

        <p className='text-text-color text-sm mt-4'>
          <span className='text-blue-color'>Điều khoản</span> và{" "}
          <span className='text-blue-color'>Chính sách bảo mật</span> của người
          bán hàng trên Datisekai
        </p>
      </form>
    </div>
  );
};

export default Login;
