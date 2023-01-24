import { Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { PromoState } from 'store/promo/types';

export type PromoCardProps = {
  promo?: PromoState;
  isLoading?: boolean;
};

export function PromoCard({ promo, isLoading }: PromoCardProps) {
  return (
    <Stack>
      {isLoading && (
        <Skeleton
          sx={{ height: 39, marginBottom: '10px' }}
          variant="rectangular"
          animation="wave"
        />
      )}
      {!isLoading && (
        <Box
          component="img"
          sx={{ height: 39, width: '50%', objectFit: 'scale-down' }}
          src={promo?.merchantLogo}
          title={promo?.merchantName || 'promo'}
        />
      )}

      <Card sx={{ width: 140, borderRadius: '10px' }}>
        {!promo?.isHot && <Box sx={{ height: 15 }} />}
        {promo?.isHot && (
          <Box
            sx={{
              width: '50%',
              color: '#fff',
              textAlign: 'center',
              backgroundColor: promo.color,
              fontSize: 10,
              fontWeight: 700,
              borderRadius: '10px 0 10px 0',
            }}
            component="div"
          >
            Hot Promo
          </Box>
        )}

        <CardContent sx={{ paddingTop: '5px' }}>
          {isLoading && (
            <>
              <Skeleton animation="wave" height={30} width="80%" />
              <Skeleton animation="wave" height={20} width="40%" />
            </>
          )}
          {!isLoading && (
            <>
              <Typography gutterBottom variant="caption" color={promo?.color}>
                {promo?.titleRow1}
              </Typography>
              <Typography variant="body2" color={promo?.color} fontWeight={700}>
                {promo?.titleRow2}
              </Typography>
            </>
          )}
        </CardContent>

        {isLoading && <Skeleton sx={{ height: 140 }} variant="rectangular" animation="wave" />}
        {!isLoading && (
          <CardMedia
            sx={{ height: 140 }}
            image={promo?.background}
            title={promo?.merchantName || 'promo'}
          />
        )}
      </Card>
    </Stack>
  );
}
