
declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module "*.svg"

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true,
    secondary:true,
    flat: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

