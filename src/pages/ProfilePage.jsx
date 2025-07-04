import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileRequest, updateProfileRequest } from "../redux/actions/profileActions";
import { profileSchema } from "../utills/FormValidationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Meta from "../components/common/Meta";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  useEffect(() => {
    dispatch(fetchProfileRequest());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phoneNumber: user.phoneNumber || "",
        panCard: user.panCard || "",
        address: user.address || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <Meta title="Edit Profile | FINTELLECT" description="Update your FINTELLECT profile information." />
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              className="p-2 border rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              className="p-2 border rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            {...register("phoneNumber")}
            className="p-2 border rounded w-full"
          />
          <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium">PAN Card</label>
          <input
            type="text"
            {...register("panCard")}
            className="p-2 border rounded w-full"
          />
          <p className="text-red-500 text-sm">{errors.panCard?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            {...register("address")}
            className="p-2 border rounded w-full"
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;