/**
 * ! Adapter Pattern
 *  Allows objects with incompatible interfaces to work together, it's also very
 *  useful for using third-party libraries in our application without depending
 *  directly on them.
 *
 * * It's useful when you want to reuse a class that doesn't have the interface
 * * we need or when we want to create an abstraction layer for a third-party
 * * library.
 *
 * https://refactoring.guru/design-patterns/adapter
 */

import { COLORS } from '../helpers/colors.ts';

// 1. PaymentProcessor Interface
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// 2. External Payment Service Classes
// These classes simulate external services from PayPal, Stripe and MercadoPago

class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Processing payment of $${amount} with %cPayPal`, COLORS.blue);
  }
}

class StripeService {
  makeCharge(amount: number): void {
    console.log(`Processing payment of $${amount} with %cStripe`, COLORS.purple);
  }
}

class MercadoPagoService {
  pay(amount: number): void {
    console.log(
      `Processing payment of $${amount} with %cMercadoPago`,
      COLORS.yellow
    );
  }
}

// 3. Adapter Classes

// PayPal Adapter
class PayPalAdapter implements PaymentProcessor {
  processPayment(amount: number): void {
    const payPalService = new PayPalService();
    payPalService.sendPayment(amount);
  }


}

// Stripe Adapter
class StripeAdapter implements PaymentProcessor {
  processPayment(amount: number): void {
    const stripeService = new StripeService();
    stripeService.makeCharge(amount);
  }
}

// MercadoPago Adapter
class MercadoPagoAdapter implements PaymentProcessor {
  processPayment(amount: number): void {
    const mercadoPagoService = new MercadoPagoService();
    mercadoPagoService.pay(amount);
  }
}

// 4. Client code to test the Adapter

function main() {
  const paymentAmount = 100;

  // TODO: Add adapters for payment services
  const paypalProcessor: PaymentProcessor = new PayPalAdapter();
  const stripeProcessor: PaymentProcessor = new StripeAdapter();
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter();

  // Process payments with different services
  // All 3 payment processors work exactly the same after being adapted
  console.log('Using PayPal:');
  paypalProcessor.processPayment(paymentAmount);

  console.log('\nUsing Stripe:');
  stripeProcessor.processPayment(paymentAmount);

  console.log('\nUsing MercadoPago:');
  mercadoPagoProcessor.processPayment(paymentAmount);
}

main();
