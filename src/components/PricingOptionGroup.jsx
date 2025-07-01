import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function PricingOptionGroup({ title, options, selected, onChange }) {
  return (
    <Box sx={{ mb: 4}}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {options.map(option => (
          <Box key={option.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.includes(option.id)}
                  onChange={() => onChange(option.id)}
                />
              }
              label={`${option.label} — ${option.price} €`}
            />
            {option.description && (
              <Typography variant="body2" sx={{ color: "text.secondary", ml: 4 }}>
                {option.description}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
