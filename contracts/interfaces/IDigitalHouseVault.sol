// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IDigitalHouseVault
 * @dev Interface for Digital House Vault contract
 */
interface IDigitalHouseVault {
    // Enums
    enum ReservationStatus {
        Available,
        Reserved,
        CheckedIn,
        CheckedOut,
        Cancelled
    }

    // Structs
    struct Property {
        string location;
        uint256 rooms;
        uint256 squareMeters;
        uint256 basePrice; // Base price per day in wei
        address paymentToken; // Token address (0x0 for ETH)
        bool isActive;
    }

    struct Reservation {
        address tenant;
        uint256 checkInDate;
        uint256 checkOutDate;
        uint256 totalPrice;
        address paymentToken;
        ReservationStatus status;
        bool isPaid;
    }

    // Events
    event PropertyCreated(uint256 indexed propertyId, string location, uint256 basePrice);
    event ReservationCreated(uint256 indexed reservationId, uint256 indexed propertyId, address indexed tenant);
    event CheckIn(uint256 indexed reservationId, uint256 timestamp);
    event CheckOut(uint256 indexed reservationId, uint256 timestamp);
    event PaymentReceived(uint256 indexed reservationId, address indexed payer, uint256 amount);
    event ReservationCancelled(uint256 indexed reservationId);
    event PriceUpdated(uint256 indexed propertyId, uint256 newPrice);

    // Functions
    function createProperty(
        string memory location,
        uint256 rooms,
        uint256 squareMeters,
        uint256 basePrice,
        address paymentToken
    ) external returns (uint256);

    function createReservation(
        uint256 propertyId,
        uint256 checkInDate,
        uint256 checkOutDate
    ) external payable returns (uint256);

    function checkIn(uint256 reservationId) external;
    function checkOut(uint256 reservationId) external;
    function cancelReservation(uint256 reservationId) external;
    function getProperty(uint256 propertyId) external view returns (Property memory);
    function getReservation(uint256 reservationId) external view returns (Reservation memory);
}

