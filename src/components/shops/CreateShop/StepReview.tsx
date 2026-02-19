import React from "react";
import axios from "axios";
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

const StepReview: React.FC<Props> = ({
  formData,
  setFormData,
  setStep,
}) => {

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/shops", formData, {
        withCredentials: true,
      });
      alert("Shop created successfully!");
    } catch {
      alert("Error creating shop");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT BLUE SECTION */}
      <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Almost There 🚀
        </h1>
        <p className="text-lg opacity-90">
          Review your shop details before publishing.
        </p>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="flex items-center justify-center p-10 bg-muted/30">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl"
        >
          <Card className="shadow-2xl rounded-3xl border-0">

            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                Step 4 of 4
              </div>
              <CardTitle className="text-2xl font-semibold">
                ✅ Review & Submit
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT COLUMN */}
                <div className="space-y-4">

                  <div>
                    <Label>Owner Name</Label>
                    <Input
                      value={formData.ownerName || ""}
                      onChange={(e) =>
                        handleChange("ownerName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Business Type</Label>
                    <Input
                      value={formData.businessType || ""}
                      onChange={(e) =>
                        handleChange("businessType", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Shop Name</Label>
                    <Input
                      value={formData.shopName || ""}
                      onChange={(e) =>
                        handleChange("shopName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={formData.phone || ""}
                      onChange={(e) =>
                        handleChange("phone", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Address</Label>
                    <Input
                      value={formData.address || ""}
                      onChange={(e) =>
                        handleChange("address", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Area</Label>
                    <Input
                      value={formData.area || ""}
                      onChange={(e) =>
                        handleChange("area", e.target.value)
                      }
                    />
                  </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-4">

                  <div>
                    <Label>Latitude</Label>
                    <Input
                      value={formData.latitude || ""}
                      onChange={(e) =>
                        handleChange("latitude", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Longitude</Label>
                    <Input
                      value={formData.longitude || ""}
                      onChange={(e) =>
                        handleChange("longitude", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>GST Number</Label>
                    <Input
                      value={formData.gstNumber || ""}
                      onChange={(e) =>
                        handleChange("gstNumber", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Shop License</Label>
                    <Input
                      value={formData.shopLicense || ""}
                      onChange={(e) =>
                        handleChange("shopLicense", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Udyam</Label>
                    <Input
                      value={formData.udyamNumber || ""}
                      onChange={(e) =>
                        handleChange("udyamNumber", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>FSSAI</Label>
                    <Input
                      value={formData.fssaiNumber || ""}
                      onChange={(e) =>
                        handleChange("fssaiNumber", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Trade License</Label>
                    <Input
                      value={formData.tradeLicense || ""}
                      onChange={(e) =>
                        handleChange("tradeLicense", e.target.value)
                      }
                    />
                  </div>

                </div>

              </div>

              <div className="flex justify-between mt-10">
                <Button variant="outline" onClick={() => setStep(3)}>
                  ← Back
                </Button>

                <Button onClick={handleSubmit}>
                  🚀 Submit Shop
                </Button>
              </div>

            </CardContent>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};

export default StepReview;
