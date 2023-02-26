import * as Yup from "yup";

export const ValidateFormContact = Yup.object({
  statusType: Yup.string().required("กรุณาเลือกสถานภาพ"),
  name: Yup.string().required("กรุณากรอกชื่อ"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "รูปแบบอีเมลไม่ถูกต้อง"
    )
    .required("กรุณากรอกอีเมล"),
  //email: Yup.string().required("กรุณากรอกอีเมล"),
  subject: Yup.string().required("กรุณากรอกชื่อเรื่อง"),
  message: Yup.string().required("กรุณากรอกรายละเอียด"),
  mobilePhone: Yup.string().required("กรุณากรอกเบอร์โทรศัพท์มือถือ"),
});
