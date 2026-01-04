import {Accordion} from "@heroui/react";
import {LuFlower2} from "react-icons/lu";
import {CiCircleChevDown} from "react-icons/ci";

const items = [
  {
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    icon: <LuFlower2 />
    ,
    title: "How do I place an order?",
  },
  {
    content:
      "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
    icon: <LuFlower2 />,
    title: "Can I modify or cancel my order?",
  },
  {
    content: "We accept all major credit cards, including Visa, Mastercard, and American Express.",
    icon: <LuFlower2 />,
    title: "What payment methods do you accept?",
  },
  {
    content:
      "Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",
    icon: <LuFlower2 />,
    title: "How much does shipping cost?",
  }
];
export const FAQ = () => {
  return (
    <div className="container mx-auto px-6 flex justify-center mt-10">
      <Accordion className="w-full max-w-2/3">
        {items.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {item.icon ? (
                  <span className="mr-3 size-4 shrink-0 text-muted">{item.icon}</span>
                ) : null}
                {item.title}
                <Accordion.Indicator>
                  <CiCircleChevDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};




