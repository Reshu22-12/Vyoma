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

const StepContact: React.FC<Props> = ({ formData, setFormData, setStep }) => {

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      setFormData((prev: any) => ({
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Help Customers Find You 📍
        </h1>
        <p className="text-lg opacity-90">
          Add accurate contact and location details.
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
                Step 2 of 4
              </div>
              <CardTitle className="text-2xl font-semibold">
                📞 Contact & Location
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 p-8">

              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Shop Address</Label>
                <Input
                  placeholder="Enter full address"
                  value={formData.address}
                  onChange={(e) =>
                    handleChange("address", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Area</Label>
                <Input
                  placeholder="Area (e.g. Balmatta)"
                  value={formData.area}
                  onChange={(e) =>
                    handleChange("area", e.target.value)
                  }
                />
              </div>

              <Button
                type="button"
                variant="secondary"
                onClick={getLocation}
                className="w-full"
              >
                📍 Use My Current Location
              </Button>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Latitude</Label>
                  <Input
                    value={formData.latitude}
                    onChange={(e) =>
                      handleChange("latitude", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Longitude</Label>
                  <Input
                    value={formData.longitude}
                    onChange={(e) =>
                      handleChange("longitude", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  ← Back
                </Button>

                <Button onClick={() => setStep(3)}>
                  Next →
                </Button>
              </div>

            </CardContent>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};

export default StepContact;
