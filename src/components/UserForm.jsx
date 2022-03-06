import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../App';

export default function UserForm() {
  //* Data logic
  const { categoryData, usersData, dispatch } = useContext(DataContext);
  //* Form Logic
  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
  });

  //* Functions
  const onSubmit = async (data) => {
    const userObject = data;
    const id = usersData.length + 1;
    userObject.id = id;
    await dispatch({ type: 'addUser', payload: userObject });
    reset();
  };

  //! Main Return
  return (
    <section className="flex flex-col justify-center py-8 px-4">
      <p className="self-center text-2xl font-semibold">Form</p>
      <form onSubmit={handleSubmit(onSubmit)} className="m-auto flex w-full max-w-sm flex-col gap-4 py-8">
        <div className="flex flex-col">
          <label htmlFor="">First name</label>
          <input
            type="text"
            {...register('firstName', {
              required: true,
              maxLength: { value: 15, message: `First name can't be longer than 15 letters` },
              minLength: { value: 4, message: `First name can't be shorter than 4 letters` },
            })}
          />
          <p>{formState.errors.firstName?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            {...register('lastName', {
              required: true,
              maxLength: { value: 15, message: `Last name can't be longer than 15 letters` },
              minLength: { value: 4, message: `Last name can't be shorter than 4 letters` },
            })}
          />
          <p>{formState.errors.lastName?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            {...register('password', {
              required: true,
              maxLength: { value: 20, message: `Password can't be longer than 20 characters` },
              minLength: { value: 6, message: `Password can't be shorter than 6 characters` },
            })}
          />
          <p>{formState.errors.password?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" {...register('email', { pattern: { value: /^\S+@\S+\.\S+$/g, message: 'Invalid email' } })} />
          <p>{formState.errors.email?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            {...register('age', {
              required: true,
              minLength: { value: 1, message: `Password can't be shorter than 6 characters` },
              pattern: { value: /^[0-9]{1,2}$/g, message: 'Invalid age' },
            })}
          />
          <p>{formState.errors.age?.message}</p>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="gender" className="pr-8">
            Gender
          </label>
          <div className="flex items-center gap-2">
            <input {...register('gender', { required: 'Gender required' })} type="radio" value="male" />
            <label htmlFor="male">Male</label>
          </div>

          <div className="flex items-center gap-2">
            <input {...register('gender', { required: 'Gender required' })} type="radio" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <p>{formState.errors.gender?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category">Select category:</label>
          <select name="category" className="border border-black p-2" {...register('userCategory', { required: true })}>
            {categoryData.map((item, index) => (
              <optgroup label={item.category} className="bg-gray-400" key={index}>
                {item.subCategory.map((item1) => (
                  <>
                    {item1.categoryForUsers.map((item2, index) => (
                      <option value={item2} className="bg-white" key={index}>
                        {item2}
                      </option>
                    ))}
                    <input type="hidden" {...register('category')} value={item.category} />
                    <input type="hidden" {...register('subCategory')} value={item1.name} />
                  </>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <input
          type="submit"
          disabled={!formState.isValid}
          className={`${
            !formState.isValid ? 'cursor-not-allowed bg-blue-200 text-white' : 'cursor-pointer bg-blue-600 text-white'
          } self-center rounded-sm border-0 px-12 py-2 font-semibold`}
        />
      </form>
    </section>
  );
}
