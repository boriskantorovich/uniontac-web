declare global {
	interface Window {
		dataLayer: Array<{
			event: string;
			[key: string]: string | number | boolean;
		  }>;
	}
  }
  
type EventParams = Record<string, string | number | boolean>;

type PaymentMethod = 'monthly' | 'onetime' | 'monobank';
type Currency = 'USD' | 'UAH';
type Locale = 'ua' | 'ru' | 'en';

interface DonationParams {
	action: string;
	label: string;
	formId: string;
	donationAmount?: number;
	paymentMethod?: PaymentMethod;
	currency?: Currency;
	locale?: Locale;
}

class Analytics {
	private getPageTitle(): string {
		if (typeof window === 'undefined') return '';
		return 'Uniontac | Save lives now';
	}

	private pushToDataLayer(event: string, params: EventParams) {
		if (typeof window !== 'undefined' && window.dataLayer) {
			window.dataLayer.push({
				event,
				page_title: this.getPageTitle(),
				...params,
			});
		}
	}

	trackEvent(
		category: string,
		action: string,
		label?: string,
		value?: number,
		additionalParams?: EventParams
	) {
		const eventParams: EventParams = {
			event_category: category,
			event_action: action,
			event_label: label ?? '',
		};

		if (typeof value === 'number' && !isNaN(value) && value > 0) {
			eventParams.event_value = value;
		}

		if (additionalParams) {
			Object.entries(additionalParams).forEach(([key, value]) => {
				if (value !== undefined) {
					eventParams[key] = value;
				}
			});
		}

		this.pushToDataLayer('custom_event', eventParams);
	}

	trackNavigation(action: string, label: string) {
		this.trackEvent('Navigation', action, label);
	}

	trackDonationForm(action: string, label: string, formId: string, additionalParams?: {
		donationAmount?: number;
		paymentMethod?: PaymentMethod;
		currency?: Currency;
		locale?: Locale;
	}) {
		const eventAction = action === 'Donate Button Click' ? 'Donation Initiate' : action;

		const params: EventParams = {
			form_id: formId,
			...(additionalParams?.paymentMethod && { payment_method: additionalParams.paymentMethod }),
			...(additionalParams?.currency && { currency: additionalParams.currency }),
			...(additionalParams?.locale && { locale: additionalParams.locale }),
		};

		if (additionalParams?.donationAmount) {
			params.donation_amount = additionalParams.donationAmount;
		}

		this.trackEvent('Donation Form', eventAction, label, additionalParams?.donationAmount, params);
	}

	trackMonobank(action: string, formId: string, locale: Locale) {
		this.trackEvent('Donation Form', 'Monobank Click', 'monobank', undefined, {
			form_id: formId,
			payment_method: 'monobank',
			currency: 'UAH',
			locale
		});
	}

	trackDonation(amount: number, formId: string) {
		this.trackEvent('Donation Form', 'Donation Success', String(amount), amount, {
			donation_amount: amount,
			form_id: formId
		});
	}

	trackFooter(action: string, label: string) {
		this.trackEvent('Footer', action, label);
	}

	trackSocialMedia(platform: string) {
		this.trackEvent('Footer', 'Social Link Click', platform);
	}

	trackMenuItem(itemName: string) {
		this.trackEvent('Footer', 'Menu Item Click', itemName);
	}

	trackHero(action: string) {
		const eventAction = action === 'Donate Button Click' 
			? 'Donation Form Navigation' 
			: action;
		
		this.trackEvent('Hero', eventAction);
	}

	trackAboutUs(action: string) {
		this.trackEvent('About Us', action);
	}
}

export const analytics = new Analytics();
