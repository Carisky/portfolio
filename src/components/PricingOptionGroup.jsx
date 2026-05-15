import { Box, Checkbox, Chip, FormControlLabel, Stack, Typography } from "@mui/material";

export default function PricingOptionGroup({ id, title, options, selected, onChange }) {
  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: 96,
        p: { xs: 2, md: 2.5 },
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 1,
        background: "rgba(255,255,255,0.045)",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>
        {title}
      </Typography>
      <Stack spacing={1.4}>
        {options.map((option) => {
          const checked = selected.includes(option.id);
          return (
            <Box
              key={option.id}
              sx={{
                p: 1.5,
                border: "1px solid",
                borderColor: checked ? "primary.main" : "rgba(255,255,255,0.1)",
                backgroundColor: checked ? "rgba(25,118,210,0.14)" : "rgba(0,0,0,0.16)",
                borderRadius: 1,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={() => onChange(option.id)} />}
                  label={<Typography sx={{ fontWeight: 700 }}>{option.label}</Typography>}
                  sx={{ m: 0, alignItems: "flex-start" }}
                />
                <Chip label={`${option.price} €`} size="small" sx={{ borderRadius: 1, fontWeight: 800 }} />
              </Stack>
              {option.description && (
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.62)", ml: 5, mt: 0.5, lineHeight: 1.55 }}>
                  {option.description}
                </Typography>
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
