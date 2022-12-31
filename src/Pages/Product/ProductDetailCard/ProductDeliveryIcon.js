import React from "react";
import { BsTruck } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiExchangeLine } from "react-icons/ri";
import { TfiTruck } from "react-icons/tfi";

export const iconData = [
  {
    id: 1,
    productIcon: BsTruck,
    productDelivery: "Free Delivery",
  },

  {
    id: 1,
    productIcon: MdPayment,
    productDelivery: "Pay on Delivery",
  },

  {
    id: 1,
    productIcon: RiExchangeLine,
    productDelivery: "7 day replacement",
  },

  {
    id: 1,
    productIcon: TfiTruck,
    productDelivery: "Amazon Delivered",
  },
];

const ProductDeliveryIcon = () => {
  return iconData.map((data, index) => {
    const Icon = data.productIcon;

    return (
      <div key={index}>
        <span className="delivery-icon-span">
          <Icon className="delivery-icon" />
        </span>
        <p className="free-delivery">{data.productDelivery}</p>
      </div>
    );
  });
};

export default ProductDeliveryIcon;
