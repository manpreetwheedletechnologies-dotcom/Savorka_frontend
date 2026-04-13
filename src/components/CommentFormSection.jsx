import { useState } from "react";
import { User, Mail } from "lucide-react";
import API_BASE_URL from "../config/api";

const initialForm = {
  comment: "",
  name: "",
  email: "",
  acceptedPolicy: false,
};

const initialErrors = {
  comment: "",
  name: "",
  email: "",
  acceptedPolicy: "",
  submit: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CommentFormSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (name, value, nextForm = form) => {
    switch (name) {
      case "comment":
        if (!value.trim()) return "Comment is required.";
        if (value.trim().length < 15)
          return "Comment must be at least 15 characters long.";
        if (value.trim().length > 1000)
          return "Comment must be less than 1000 characters.";
        return "";

      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (value.trim().length > 50) return "Name must be less than 50 characters.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";

      case "acceptedPolicy":
        if (!nextForm.acceptedPolicy)
          return "You must accept the Privacy Policy before submitting.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = (formData) => {
    return {
      comment: validateField("comment", formData.comment, formData),
      name: validateField("name", formData.name, formData),
      email: validateField("email", formData.email, formData),
      acceptedPolicy: validateField(
        "acceptedPolicy",
        formData.acceptedPolicy,
        formData
      ),
      submit: "",
    };
  };

  const hasErrors = (errorObj) => {
    return Object.values(errorObj).some((value) => value);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const nextForm = {
      ...form,
      [name]: newValue,
    };

    setForm(nextForm);
    setSuccessMessage("");

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue, nextForm),
        submit: "",
      }));
    }

    if (name === "acceptedPolicy" && touched.acceptedPolicy) {
      setErrors((prev) => ({
        ...prev,
        acceptedPolicy: validateField("acceptedPolicy", newValue, nextForm),
        submit: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue, {
        ...form,
        [name]: fieldValue,
      }),
      submit: "",
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors(initialErrors);
    setTouched({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const allTouched = {
      comment: true,
      name: true,
      email: true,
      acceptedPolicy: true,
    };
    setTouched(allTouched);

    const formErrors = validateForm(form);
    setErrors(formErrors);

    if (hasErrors(formErrors)) return;

    try {
      setIsSubmitting(true);

      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: form.comment.trim(),
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          acceptedPolicy: form.acceptedPolicy,
        }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        throw new Error(
          data?.message ||
            "Something went wrong while submitting your comment. Please try again."
        );
      }

      setSuccessMessage(
        data?.message || "Your comment has been submitted successfully."
      );
      resetForm();
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit:
          error?.message ||
          "Something went wrong while submitting your comment. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-[12px] border bg-[#f7f7f7] px-4 text-[14px] text-[#1f2937] outline-none transition-all duration-200 placeholder:text-[#a0a8b8]";
  const normalBorder =
    "border-[#e5e7eb] focus:border-[#6aa84f] focus:ring-2 focus:ring-[#6aa84f]/10";
  const errorBorder =
    "border-[#dc2626] focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/10";

  return (
    <section className="w-full bg-[#edf3c9] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 md:py-8">
      <div className="mx-auto max-w-[980px] font-[Manrope]">
        <form onSubmit={handleSubmit} noValidate className="space-y-2 md:space-y-3">
          <div>
            <label
              htmlFor="comment"
              className="mb-1 block text-[18px] font-semibold text-[#1f2460]"
            >
              Add your comment
            </label>

            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write your feedback here..."
              rows={3}
              className={`${inputBase} ${
                errors.comment ? errorBorder : normalBorder
              } min-h-[80px] resize-y py-2.5`}
            />

            <div className="mt-2 flex items-start justify-between gap-4">
              <p className="min-h-[20px] text-[13px] text-[#dc2626]">
                {errors.comment}
              </p>
              <p className="shrink-0 text-[12px] text-[#7b8190]">
                {form.comment.trim().length}/1000
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[18px] font-semibold text-[#1f2460]"
              >
                Name
              </label>

              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Carter"
                  className={`${inputBase} ${
                    errors.name ? errorBorder : normalBorder
                  } h-[44px] pr-11`}
                />
                <User
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8b90a7]"
                />
              </div>

              <p className="mt-2 min-h-[20px] text-[13px] text-[#dc2626]">
                {errors.name}
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[15px] font-semibold text-[#1f2460]"
              >
                Email
              </label>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email address"
                  className={`${inputBase} ${
                    errors.email ? errorBorder : normalBorder
                  } h-[52px] pr-11`}
                />
                <Mail
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8b90a7]"
                />
              </div>

              <p className="mt-2 min-h-[20px] text-[13px] text-[#dc2626]">
                {errors.email}
              </p>
            </div>
          </div>

          <div>
            <label className="inline-flex cursor-pointer items-start gap-2.5">
              <input
                name="acceptedPolicy"
                type="checkbox"
                checked={form.acceptedPolicy}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-[3px] h-4 w-4 rounded border-[#cfd5df] text-[#3d9808] focus:ring-[#3d9808]"
              />
              <span className="text-[14px] leading-[1.5] text-[#7b8190]">
                I have read and accept the Privacy Policy.
              </span>
            </label>

            <p className="mt-2 min-h-[20px] text-[13px] text-[#dc2626]">
              {errors.acceptedPolicy}
            </p>
          </div>

          {errors.submit && (
            <div className="rounded-[10px] border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-[14px] text-[#b91c1c]">
              {errors.submit}
            </div>
          )}

          {successMessage && (
            <div className="rounded-[10px] border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-[14px] text-[#166534]">
              {successMessage}
            </div>
          )}

          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-w-[160px] items-center justify-center rounded-[12px] bg-[#3d9808] px-5 py-3 text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(61,152,8,0.22)] transition-all duration-200 hover:bg-[#348307] hover:shadow-[0_8px_22px_rgba(61,152,8,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Comment"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentFormSection;