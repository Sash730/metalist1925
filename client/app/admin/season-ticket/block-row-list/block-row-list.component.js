import template from './block-row-list.html';

class BlockRowListController {

  constructor() {
    this.blockRows = [];
  }

  $onChanges(changes) {
    if ( changes.blockRowSeats ) {
      this.blockRows = this.createBlockRowsModel(this.blockRowSeats);
    }
  }

  deleteBlockRow(row) {
    this.onDelete({$event: { blockRow: row}});
  }

  createBlockRowsModel(seats) {
    let rows = [];

    seats.forEach(seat => {
      if( this.checkSeatInRows(rows, seat) ) {
        let row = {
          sector: seat.sector,
          row: seat.row,
          reservedUntil: seat.reservedUntil
        };
        rows.push(row);
      }
    });

    return rows;
  }

  checkSeatInRows(rows, seat) {
    return !rows.filter(row => (row.sector === seat.sector && row.row === seat.row)).length;
  }
}

let blockRowListComponent = {
  templateUrl: template,
  controller: BlockRowListController,
  bindings: {
    blockRowSeats: '<',
    onDelete: '&'
  }
};

export default blockRowListComponent;