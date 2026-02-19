import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepLegal: React.FC<Props> = ({ formData, setFormData, setStep }) => {

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Legal & Compliance 📄
        </h1>
        <p className="text-lg opacity-90">
          Add business registration details to increase trust.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10 bg-muted/30">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl"
        >
          <Card className="shadow-2xl rounded-3xl border-0">

            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                Step 3 of 4
              </div>
              <CardTitle className="text-2xl font-semibold">
                Business Registration Details
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 p-8">

              {/* GST */}
              <div className="space-y-2">
                <Label>GST Number (Optional)</Label>
                <Input
                  placeholder="Enter GST number"
                  value={formData.gstNumber}
                  onChange={(e) =>
                    handleChange("gstNumber", e.target.value)
                  }
                />
              </div>

              {/* Shop License */}
              <div className="space-y-2">
                <Label>Shop & Establishment License</Label>
                <Input
                  placeholder="Enter shop license number"
                  value={formData.shopLicense}
                  onChange={(e) =>
                    handleChange("shopLicense", e.target.value)
                  }
                />
              </div>

              {/* Udyam */}
              <div className="space-y-2">
                <Label>Udyam Registration (MSME)</Label>
                <Input
                  placeholder="Enter Udyam number"
                  value={formData.udyamNumber}
                  onChange={(e) =>
                    handleChange("udyamNumber", e.target.value)
                  }
                />
              </div>

              {/* FSSAI */}
              <div className="space-y-2">
                <Label>FSSAI License (For Food Vendors)</Label>
                <Input
                  placeholder="Enter FSSAI number"
                  value={formData.fssaiNumber}
                  onChange={(e) =>
                    handleChange("fssaiNumber", e.target.value)
                  }
                />
              </div>

              {/* Trade License */}
              <div className="space-y-2">
                <Label>Trade License</Label>
                <Input
                  placeholder="Enter trade license number"
                  value={formData.tradeLicense}
                  onChange={(e) =>
                    handleChange("tradeLicense", e.target.value)
                  }
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={() => setStep(2)}>
                  ← Back
                </Button>

                <Button onClick={() => setStep(4)}>
                  Review →
                </Button>
              </div>

            </CardContent>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};

export default StepLegal;
