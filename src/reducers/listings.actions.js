import { createAction } from "redux-actions";
import { apiFactory } from "./apiFactory";

export const CONNECTED = "connected";
export const DISABLED = "disabled";
export const NOT_CONNECTED = "notConnected";

const api = apiFactory("/api/listings");

export const getListings = createAction(
  "LISTING_GET_ALL",
  async () => await api.get()
);

export const getListing = createAction(
  "LISTING_GET",
  async (listingId) => await api.get(listingId),
  listingId => ({ listingId })
);

export const enableListingChannel = createAction(
  "LISTING_ENABLE_CHANNEL",
  async (listingId, channel) => await api.post(`${listingId}/channel/enable`, { channel }),
  (listingId, channel) => ({ listingId, channel })
);

export const disableListingChannel = createAction(
  "LISTING_DISABLE_CHANNEL",
  async (listingId, channel) => await api.post(`${listingId}/channel/disable`, { channel }),
  (listingId, channel) => ({ listingId, channel })
);

export const toggleChannel = (listingId, channel, status) => status === DISABLED ? enableListingChannel(listingId, channel) : disableListingChannel(listingId, channel)

export const toggleActive = (listingId, isActive) => isActive ? activateListing(listingId) : deActivateListing(listingId);

export const getListingDetails = createAction(
  "LISTING_GET_DETAILS",
  async (listingId) => await api.get(`${listingId}/details`),
  (listingId) => ({ listingId })
);

export const updateGuestResources = createAction(
  "LISTING_GUEST_RESOURCES_UPDATE",
  async (listingId, guestResources) => await api.put(`${listingId}/details/guestResources`, guestResources),
  (listingId, guestResources) => ({ listingId, guestResources })
);

export const updateDescription = createAction(
  "LISTING_DESCRIPTION_UPDATE",
  async (listingId, description) => await api.put(`${listingId}/details/description`, description),
  (listingId, description) => ({ listingId, description })
);

export const updateOverview = createAction(
  "LISTING_DETAILS_OVERVIEW_UDPATE",
  async (listingId, overview) => await api.put(`${listingId}/details/overview`, overview),
  (listingId, overview) => ({ listingId, overview })
);

export const getListingBookingSettings = createAction(
  "LISTING_GET_BOOKING_SETTINGS",
  async (listingId) => await api.get(`${listingId}/booking`),
  (listingId) => ({ listingId })
);

export const updateBookingProcess = createAction(
  "LISTING_UPDATE_BOOKING_PROCESS",
  async (listingId, process) => await api.put(`${listingId}/booking/process`, process),
  (listingId, process) => ({ listingId, process })
);

export const updateGuestRequirements = createAction(
  "LISTING_UPDATE_GUEST_REQUIREMENTS",
  async (listingId, guestRequirements) => await api.put(`${listingId}/booking/guestRequirements`, guestRequirements),
  (listingId, guestRequirements) => ({ listingId, guestRequirements })
);

export const updateHouseRules = createAction(
  "LISTING_UPDATE_HOUSE_RULES",
  async (listingId, houseRules) => await api.put(`${listingId}/booking/houseRules`, houseRules),
  (listingId, houseRules) => ({ listingId, houseRules })
);

export const getListingPricingSettings = createAction(
  "LISTING_GET_PRICING_SETTINGS",
  async (listingId) => await api.get(`${listingId}/pricing`),
  (listingId) => ({ listingId })
);

export const updateNightlyPrice = createAction(
  "LISTING_PRICING_NIGHTLY_UPDATE",
  async (listingId, pricing) => await api.put(`${listingId}/pricing/nightlyPrice`, pricing),
  (listingId, nightlyPrice) => ({ listingId, nightlyPrice })
);

export const updateDiscounts = createAction(
  "LISTING_PRICING_DISCOUNT_UPDATE",
  async (listingId, discounts) => await api.put(`${listingId}/pricing/discounts`, discounts),
  (listingId, discounts) => ({ listingId, discounts })
);

export const updateExtraCharges = createAction(
  "LISTING_PRICING_EXTRA_CHARGES_UPDATE",
  async (listingId, extraCharges) => await api.put(`${listingId}/pricing/extraCharges`, extraCharges),
  (listingId, extraCharges) => ({ listingId, extraCharges })
);

export const updateCurrency = createAction(
  "LISTING_PRICING_CURRENCY_UPDATE",
  async (listingId, currency) => await api.put(`${listingId}/pricing/currency`, currency),
  (listingId, currency) => ({ listingId, currency })
);

export const getListingAvailabilitySettings = createAction(
  "LISTING_GET_AVAILABILITY_SETTINGS",
  async (listingId) => await api.get(`${listingId}/availability`),
  (listingId) => ({ listingId })
);

export const updateReservationPreferences = createAction(
  "LISTING_RESERVATION_PREFERENCES_UPDATE",
  async (listingId, reservationPreferences) => await api.put(`${listingId}/availability/reservationPreferences`, reservationPreferences),
  (listingId, reservationPreferences) => ({ listingId, reservationPreferences })
);

export const updateTripLength = createAction(
  "LISTING_AVAILABILITY_TRIP_LENGTH_UPDATE",
  async (listingId, tripLength) => await api.put(`${listingId}/availability/tripLength`, tripLength),
  (listingId, tripLength) => ({ listingId, tripLength })
);

export const updatePolicy = createAction(
  "LISTING_AVAILABILITY_POLICY_UPDATE",
  async (listingId, policy) => await api.put(`${listingId}/availability/policy`, policy),
  (listingId, policy) => ({ listingId, policy })
);

export const activateListing = createAction(
  "LISTING_TOGGLE_ACTIVATE",
  async (listingId) => await api.post(`${listingId}/activate`),
  (listingId) => ({ listingId })
);

export const deActivateListing = createAction(
  "LISTING_TOGGLE_DEACTIVATE",
  async (listingId) => await api.post(`${listingId}/deactivate`),
  (listingId) => ({ listingId })
);