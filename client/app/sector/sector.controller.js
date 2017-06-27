export default class SectorController {

    constructor(match, sector, TicketsService, $stateParams, CartService, PriceSchemaService) {
      'ngInject';
      this.cartService = CartService;
      this.priceSchemaService = PriceSchemaService;
      this.ticketsService = TicketsService;
      this.match = match;
      this.sector = sector;
// console.log('this.sector', this.sector);
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
      this.preparedSectorSeats();
    }

  getPrice() {
    let priceSchema = this.match.priceSchema.priceSchema;
    this.sectorPrice = this.priceSchemaService.getPriceBySector(this.tribuneName, this.sector.name, priceSchema);
  }

  getReservedSeats() {
    let matchId = this.match.id,
      sectorName = this.sector.name;

    return this.ticketsService.fetchReservedSeats(matchId, sectorName)
      .then( seats => {
        this.reservedSeats = seats;
        this.updateSeatsStatuses();
      });
  }

  getSelectedSeats() {
    this.selectedSeats = this.cartService.getMyCart().seats.map(seat => {
      return {
        slug: seat.slug,
        matchId: seat.match.id
      };
    });
  }

  updateReservedTickets() {
    this.getReservedSeats();
    this.getSelectedSeats();
  }

  addClassByCheckSoldSeat(slug) {
    let [ checkSeat ] = this.selectedSeats.filter(seat => seat.slug === slug && seat.matchId === this.match.id);

    if (this.reservedSeats.includes(slug) && checkSeat) {
      return 'blockedSeat';
    }

    if ( this.reservedSeats.includes(slug) && !checkSeat ) {
      return 'soldSeat';
    }

    return 'imgSeatsStyle';
  }

  addSeatToCart(sectorName, rowName, seat) {
    let slug = 's' + sectorName + 'r' + rowName + 'st' + seat,
      [ checkSeat ] = this.selectedSeats.filter(seat => seat.slug === slug && seat.matchId === this.match.id);
    this.message = '';

    if ( checkSeat && this.reservedSeats.includes(slug) ) {
      this.cartService.removeSeatFromCart(slug, this.match.id)
        .then(() => {
          this.getReservedSeats();
          this.getSelectedSeats();
        });
    }

    if( !this.reservedSeats.includes(slug) ) {
      this.cartService.addSeatToCart(slug, this.match.id)
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
  ////////////////////

  preparedSectorSeats() {
    this.sector.rows = this.makeRowSeats();
    console.log('this.sector rows seats', this.sector);
    return this.sector.rows.forEach(row => {
      return row.seats = this.makeSeatObject(row);
    });
  }

  updateSeatsStatuses() {
    this.sector.rows.forEach(row => {
      return row.seats.forEach(seat => {
        seat.isSelected = this.isSelectedSeat(seat.slug);
        seat.isSold = this.isSoldSeat(seat.slug);

        return seat;
      });
    });
  }

  makeRowSeats() {
    return this.sector.rows.map(row => {
      return {
        name: row.name,
        seats: this.makeArrayFromNumber(row.seats)
      }
    });
  }

  makeSeatObject(row) {
    return row.seats.map(seat => {
      return {
        slug: 's' + this.sector.name + 'r' + row.name + 'st' + seat,
        seat: seat,
        isSelected: this.isSelectedSeat('s' + this.sector.name + 'r' + row.name + 'st' + seat),
        isSold: this.isSoldSeat('s' + this.sector.name + 'r' + row.name + 'st' + seat)
      }
    });
  }

  isSelectedSeat(slug) {
    //console.log('this.selectedSeats rows1', this.selectedSeats);
    return !!this.selectedSeats.filter(seat => seat.slug === slug && seat.matchId === this.match.id).length;
  }

  isSoldSeat(slug) {
    //console.log('this.reservedSeats rows1', this.reservedSeats);
    return this.reservedSeats.includes(slug);
  }

  deleteSeatFromCart(slug) {
    this.message = '';

    //if ( checkSeat && this.reservedSeats.includes(slug) ) {
      this.cartService.removeSeatFromCart(slug, this.match.id)
        .then(() => {
          console.log('remove seats');
          this.getSelectedSeats();
          this.getReservedSeats();
          // this.updateSeatsStatuses();
          console.log('this.sector rows2', this.sector);
        });
    //}

    // if( !this.reservedSeats.includes(slug) ) {
    //   this.cartService.addSeatToCart(slug, this.match.id)
    //     .then(() => {
    //       this.getReservedSeats();
    //       this.getSelectedSeats();
    //     })
    //     .catch((err) => {
    //       if (err.status === 409) {
    //         this.message = 'Это место уже занято.';
    //         this.getReservedSeats();
    //       }
    //     });
    // }
  }

  addSeatToCart1(sectorName, rowName, slug) {
    this.message = '';

    this.cartService.addSeatToCart(slug, this.match.id)
      .then(() => {
        console.log('add seats');
        this.getSelectedSeats();
        this.getReservedSeats();
        // this.updateSeatsStatuses();
        console.log('this.sector rows1', this.sector);
      })
      .catch((err) => {
        if (err.status === 409) {
          this.message = 'Это место уже занято.';
          this.getReservedSeats();
        }
      });
  }

  ///////////////

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
