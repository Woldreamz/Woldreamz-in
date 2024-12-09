import React from "react";
import Link from "next/link";
import Navbar from "../navbar/page";

const Documentation = () => {
  return (
    <div className="relative">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-gray-800 text-white p-6 fixed top-0 left-0 z-10">
          <h2 className="text-2xl font-semibold mb-8">Documentation</h2>
          <ul className="space-y-6">
            <li>
              <Link
                href="#getting-started"
                className="text-lg hover:text-blue-400"
              >
                1. Getting Started
              </Link>
            </li>
            <li>
              <Link
                href="#product-management"
                className="text-lg hover:text-blue-400"
              >
                2. Product Management
              </Link>
            </li>
            <li>
              <Link
                href="#order-management"
                className="text-lg hover:text-blue-400"
              >
                3. Order Management
              </Link>
            </li>
            <li>
              <Link
                href="#customer-management"
                className="text-lg hover:text-blue-400"
              >
                4. Customer Management
              </Link>
            </li>
            <li>
              <Link
                href="#payments-and-integrations"
                className="text-lg hover:text-blue-400"
              >
                5. Payments and Integrations
              </Link>
            </li>
            <li>
              <Link
                href="#customization-and-themes"
                className="text-lg hover:text-blue-400"
              >
                6. Customization and Themes
              </Link>
            </li>
            <li>
              <Link
                href="#advanced-features"
                className="text-lg hover:text-blue-400"
              >
                7. Advanced Features
              </Link>
            </li>
            <li>
              <Link
                href="#troubleshooting"
                className="text-lg hover:text-blue-400"
              >
                8. Troubleshooting & FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-50 p-8 ml-64 h-screen overflow-y-auto">
          <h1 className="text-4xl font-semibold text-center text-gray-900 mb-10">
            Welcome to the Woldreamz Documentation
          </h1>
          <p className="text-lg text-center text-gray-700 mb-16">
            Comprehensive guides and references to help you get started and make
            the most of our platform&apos;s features.
          </p>

          {/* Sections */}
          <section id="getting-started" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              1. Getting Started
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Learn how to sign up, set up your store, and get started with
              Woldreamz.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Introduction to Woldreamz</strong> - An overview of the
                platform.
              </li>
              <li>
                <strong>Setting up Your Store</strong> - Step-by-step guide to
                store setup.
              </li>
              <li>
                <strong>Dashboard Overview</strong> - Learn how to navigate your
                Woldreamz dashboard.
              </li>
              <li>
                <strong>Installing and Configuring Themes</strong> - Customize
                your store with the right theme.
              </li>
            </ul>
          </section>

          <section id="product-management" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              2. Product Management
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Manage products, inventory, categories, and more.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Adding and Editing Products</strong> - How to add and
                manage your products.
              </li>
              <li>
                <strong>Product Variants and Options</strong> - Set up
                variations of your products.
              </li>
              <li>
                <strong>Managing Inventory</strong> - Keep track of stock and
                manage inventory settings.
              </li>
              <li>
                <strong>Setting Up Product Categories</strong> - Organize
                products into categories for better browsing.
              </li>
            </ul>
          </section>

          <section id="order-management" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              3. Order Management
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Manage orders, shipping, and returns with ease.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Viewing Orders</strong> - How to view and manage
                incoming orders.
              </li>
              <li>
                <strong>Order Status and Updates</strong> - Keeping customers
                informed about order status.
              </li>
              <li>
                <strong>Shipping Options and Management</strong> - Set up
                shipping methods and track shipments.
              </li>
              <li>
                <strong>Handling Returns and Cancellations</strong> - Manage
                return requests and order cancellations.
              </li>
            </ul>
          </section>

          <section id="customer-management" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              4. Customer Management
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Manage your customer base and engage effectively.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Managing Customer Accounts</strong> - Edit and maintain
                customer details.
              </li>
              <li>
                <strong>Customer Segmentation</strong> - Target customers with
                specific criteria for marketing.
              </li>
              <li>
                <strong>Email and Notification Management</strong> - Set up
                automated email notifications for customers.
              </li>
            </ul>
          </section>

          <section id="payments-and-integrations" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              5. Payments and Integrations
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Integrate payment systems and manage transactions.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Setting up Payment Gateways</strong> - Configure
                different payment options.
              </li>
              <li>
                <strong>Managing Taxes and Discounts</strong> - Set tax rates
                and discount rules for your store.
              </li>
              <li>
                <strong>API Integrations and Webhooks</strong> - Integrate with
                third-party services.
              </li>
            </ul>
          </section>

          <section id="customization-and-themes" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              6. Customization and Themes
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Personalize your store’s look and feel.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Customizing Store Layout</strong> - Use the
                drag-and-drop builder to customize.
              </li>
              <li>
                <strong>Theme Customization</strong> - Modify themes to fit your
                brand.
              </li>
              <li>
                <strong>CSS/JS Injection for Advanced Customization</strong> -
                Use custom CSS/JS for advanced designs.
              </li>
            </ul>
          </section>

          <section id="advanced-features" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              7. Advanced Features
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Unlock powerful features for growth and scalability.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Loyalty Programs</strong> - Reward your customers with
                loyalty points.
              </li>
              <li>
                <strong>Reporting and Analytics</strong> - Track key performance
                metrics for your store.
              </li>
              <li>
                <strong>Multi-Store Setup</strong> - Manage multiple stores from
                a single account.
              </li>
              <li>
                <strong>Custom Plugins and Extensions</strong> - Enhance your
                store with third-party integrations.
              </li>
            </ul>
          </section>

          <section id="troubleshooting" className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              8. Troubleshooting & FAQ
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Solutions to common problems and frequently asked questions.
            </p>
            <ul className="list-inside list-disc pl-4 text-gray-700">
              <li>
                <strong>Common Issues and Solutions</strong> - Resolve frequent
                issues with our platform.
              </li>
              <li>
                <strong>How to Contact Support</strong> - Get in touch with our
                support team for assistance.
              </li>
              <li>
                <strong>Frequently Asked Questions</strong> - Answers to your
                most common questions.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
