import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const CRYPTO_API = 'https://api.coingecko.com/api/v3/exchanges';

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async () => {
    const response = await fetch(CRYPTO_API).then((res) => res);
    const data = await response.json();
    const coinLog = data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      trust_score_rank: coin.trust_score_rank,
      country: coin.country,
      description: coin.description,
      url: coin.url,
      trade_volume_24h_btc: coin.trade_volume_24h_btc,
      display: false,
    }));
    return coinLog;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    allCryptos: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, () => ({
      loading: true,
    }));
    builder.addCase(fetchCrypto.fulfilled, (state, action) => [...action.payload])
      .addDefaultCase((state) => state);
  },
});

export const { setCoinsReducer } = cryptoSlice.actions;
export default cryptoSlice.reducer;
