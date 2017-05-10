export default class SectorController {

    constructor(match, sector, TicketsService, $stateParams, CartService, PriceSchemaService) {
      'ngInject';
      this.cartService = CartService;
      this.priceSchemaService = PriceSchemaService;
      this.ticketsService = TicketsService;
      this.match = match;
      this.sector = sector;

      this.reservedSeats = [];
      this.selectedSeats = [];
      this.tribuneName = $stateParams.tribune;
      this.sectorPrice = '';
      this.rowRow = 'Ряд';
      this.message = '';
      this.firstUpperRow = this.getFirstUpperRow($stateParams.sector);

      this.getPrice();
      this.getReservedSeats();
      this.getSelectedSeats();
    }

    getPrice() {
      let priceSchema = this.match.priceSchema.priceSchema;
      this.sectorPrice = this.priceSchemaService.getPriceBySector(this.tribuneName, this.sector.name, priceSchema);
    }

    getReservedSeats() {
      let matchId = this.match.id,
        sectorName = this.sector.name;

      return this.ticketsService.fetchReservedSeats(matchId, sectorName)
        .then( seats => this.reservedSeats = seats );
    }

    getSelectedSeats() {
      this.selectedSeats = this.cartService.getMyCart().seats.map(seat => seat.slug);
    }

    updateReservedTickets() {
      this.getReservedSeats();
      this.getSelectedSeats();
    }

    addClassByCheckSoldSeat(slug) {
      let [ checkSeat ] = this.reservedSeats.filter(seat => seat.slug === slug);

      if (checkSeat && this.selectedSeats.includes(slug)) {
        return 'blockedSeat';
      }

      if ( checkSeat && !this.selectedSeats.includes(slug) ) {
        return 'soldSeat';
      }

      return 'imgSeatsStyle';
    }

    addSeatToCart(sectorName, rowName, seat) {
      let slug = 's' + sectorName + 'r' + rowName + 'st' + seat,
        [ checkSeat ] = this.reservedSeats.filter(seat => seat.slug === slug);
      this.message = '';

      if ( checkSeat && this.selectedSeats.includes(slug) ) {
        this.cartService.removeSeatFromCart(slug)
          .then(() => {
            this.getReservedSeats();
            this.getSelectedSeats();
          });
      }

      if( !checkSeat ) {
        this.cartService.addSeatToCart(slug)
          .then(() => {
            this.getReservedSeats();
            this.getSelectedSeats();
          })
          .catch((err) => {
            if (err.status === 409) {
              this.message = 'Это место уже занято.';
              this.getReservedSeats();
            }
          });
      }
    }

    getFirstUpperRow(sectorNumber) {
      let sectorDividers = {
        "1": 19,
        "2": 20,
        "8": 20,
        "9": 19,
        "10": 15,
        "11": 15,
        "12": 15,
        "13": 15,
        "14": 15,
        "15": 15,
        "16": 15,
        "17": 15,
        "18": 15,
        "19": 15,
        "20": 15,
        "22": 9,
        "23": 9,
        "24": 9,
        "25": 9,
        "26": 9,
        "27": 9,
        "28": 9,
        "29": 9,
      };
      return sectorDividers[sectorNumber] || 1;
    }

    makeArrayFromNumber (number) {
      return [...Array(parseInt(number) + 1).keys()].filter(Boolean);
    }

    isSkybox() {
      let skyBoxes = ['SB_1', 'SB_2', 'SB_3_5', 'SB_6', 'SB_7', 'SB_8', 'SB_9', 'SB_10', 'SB_11' ];
      return skyBoxes.includes(this.sector.name);
    }

    isFreeSeats() {
      let tribuneNames = ['east', 'north'];
      return tribuneNames.includes(this.tribuneName);
    }
  }
