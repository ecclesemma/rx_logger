import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

/**
 * Placeholder component for the upcoming AddMedicationDialog feature
 *
 * TODO: Future implementation should include:
 * - Modal dialog for adding new medications to the system
 * - Fields for medication name, dosage, frequency, etc.
 * - Option to set up reminders/schedule
 * - Connection to a medication database for auto-complete
 */
const AddMedicationDialog: React.FC = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, mt: 2, borderRadius: 3, bgcolor: "#f8fafc", boxShadow: 0 }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontFamily: "Inter, Roboto, Arial, sans-serif" }}
      >
        Add Medication Dialog (Coming Soon)
      </Typography>
    </Paper>
  );
};

export default AddMedicationDialog;
