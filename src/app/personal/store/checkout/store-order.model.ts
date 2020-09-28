export interface StoreOrderModel
{
  kundnr: string,
  personnummer: string,
  name: string,
  efternamn: string,
  telefonnummer: string,
  mobiltelefonnummer: string,
  epost: string,
  adress: string,
  postnummer: string,
  ort: string,
  inv:
    {
      co: string,
      adress: string,
      postnummer: string,
      ort: string,
    },
  ordertotal: string
}
