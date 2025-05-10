import { styled } from '@mui/material/styles';

// Common Layout Components
export const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));

export const SectionHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(3),
  '& h2': {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
}));

// Common Card Components
export const StatCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

export const TransactionCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Common Form Components
export const FormContainer = styled('div')(({ theme }) => ({
  maxWidth: '500px',
  margin: '0 auto',
  padding: theme.spacing(4),
}));

export const FormField = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiFormLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .Mui-error': {
    color: theme.palette.error.main,
  },
}));

// Common Button Variants
export const PrimaryButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 600,
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-1px)',
  },
}));

export const SecondaryButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 600,
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-1px)',
  },
}));

// Common Typography Components
export const Title = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const Subtitle = styled('h2')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

// Common Loading Components
export const LoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  padding: theme.spacing(4),
}));

// Common Error Components
export const ErrorContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.error.light,
  color: theme.palette.error.main,
  marginBottom: theme.spacing(3),
}));

// Common Grid Components
export const GridContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

// Common Table Components
export const TableContainer = styled('div')(({ theme }) => ({
  overflow: 'auto',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
}));
