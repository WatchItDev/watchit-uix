declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true,
    secondary:true,
    flat: true
  }
}