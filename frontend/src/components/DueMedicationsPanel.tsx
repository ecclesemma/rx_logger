import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

/**
 * Placeholder component for the upcoming DueMedicationsPanel feature
 *
 * TODO: Future implementation should include:
 * - Display of medications due today
 * - Visual indicators for overdue medications
 * - Upcoming medication schedule
 * - Quick "mark as taken" functionality
 * - Notification integration
 */
const DueMedicationsPanel: React.FC = () => {
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
        Due/Overdue Medications Panel (Coming Soon)
      </Typography>
    </Paper>
  );
};

export default DueMedicationsPanel;
