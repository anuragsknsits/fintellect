import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../utills/FormValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../redux/actions/authAction';
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import FormContainer from '../components/common/FormContainer';
import Meta from '../components/common/Meta';
import VKADLogo from '../assets/logo/VKADLogo.jpg'

const SignupPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    dispatch(signupRequest(data));
  };

  return (
    <>
      <Meta title="Signup | FINTELLECT" description="Create your FINTELLECT account and start filing your taxes easily." />
      <FormContainer>
        <div className="flex justify-center mb-4">
          <img src={VKADLogo} alt="VKAD Associates Logo" className="w-24 h-auto" loading="lazy" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            label="Email"
            name="emailId"
            type="email"
            icon={HiOutlineMail}
            {...register('emailId')}
            error={errors.emailId?.message}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            icon={HiLockClosed}
            {...register('password')}
            error={errors.password?.message}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            icon={HiLockClosed}
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Button loading={loading}>Sign Up</Button>
        </form>
      </FormContainer>
    </>
  );
};

export default SignupPage;