import { useState } from "react";
import StepBasic from "../../components/shops/CreateShop/StepBasic";
import StepContact from "../../components/shops/CreateShop/StepContact";
import StepLegal from "../../components/shops/CreateShop/StepLegal";
import StepReview from "../../components/shops/CreateShop/StepReview";



const CreateShop = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    ownerName: "",
    businessType: "",
    shopName: "",
    logo: "",
    description: "",
    yearsOfOperation: "",
    phone: "",
    address: "",
    area: "",
    latitude: "",
    longitude: "",
    gstNumber: "",
    shopLicense: "",
    udyamNumber: "",
    fssaiNumber: "",
    tradeLicense: "",
  });

  return (
    <>
      {step === 1 && (
        <StepBasic 
          formData={formData} 
          setFormData={setFormData} 
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <StepContact 
          formData={formData} 
          setFormData={setFormData} 
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <StepLegal 
          formData={formData} 
          setFormData={setFormData} 
          setStep={setStep}
        />
      )}

      {step === 4 && (
        <StepReview 
          formData={formData} 
          setStep={setStep}
        />
      )}
    </>
  );
};

export default CreateShop;
