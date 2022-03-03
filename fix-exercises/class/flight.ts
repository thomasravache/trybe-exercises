class Flight {
  ticketNumber: number;
  passengerName: string;
  from: string;
  to: string;

  constructor(ticketNumber: number, passengerName: string, from: string, to: string) {
    this.ticketNumber = ticketNumber;
    this.passengerName = passengerName;
    this.from = from;
    this.to = to;
  }

  create(): void {
    console.log(`Voo criado com sucesso. \n De: ${this.from} \n Para: ${this.to}`);
  }

  info(): void {
    console.log(`
    Número do ticket: ${this.ticketNumber}\n
    Nome do passageiro: ${this.passengerName}\n
    De: ${this.from}\n
    Para: ${this.to}`);
  }
}

const flight = new Flight(1234, 'Thomas', 'Brasil', 'Alemanha');

flight.create();
flight.info();
