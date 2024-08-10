// src/utility/WidgetRegistry.js
import axios from "axios";

const serviceUrl =
  process.env.NEXT_PUBLIC_SERVICE_URL || "http://default-api-endpoint";

const widgetRegistry = {};

export async function fetchWidgetsFromDB() {
  try {
    const response = await axios.get(`${serviceUrl}/v1/widgets`);
    setWidgets(response.data);
  } catch (error) {
    console.error("Error fetching widgets from the database:", error);
  }
}

export async function registerWidget(name, component, options = {}) {
  const {
    client_id,
    description,
    ownership,
    type,
    icon,
    props,
    availableToAllPages,
    config,
    requiredProps,
  } = options;

  const widgetKey = `${client_id}_${name}`;

  const widgetData = {
    name,
    description,
    type,
    key: widgetKey,
    icon,
    ownership,
    props,
    availableToAllPages,
    config,
    requiredProps,
  };

  if (widgetRegistry[widgetKey]) {
    console.warn(`Widget with name ${name} is already registered. Updating...`);

    // Update the existing widget
    try {
      await axios.put(`${serviceUrl}/v1/widgets`, {
        id: widgetRegistry[widgetKey]._id,
        widget: widgetData,
      });
      widgetRegistry[widgetKey] = { component, metadata: widgetData };
    } catch (err) {
      console.error("Error updating widget metadata:", err);
    }
  } else {
    // Create a new widget
    widgetRegistry[widgetKey] = { component, metadata: widgetData };

    try {
      const response = await axios.post(`${serviceUrl}/v1/widgets`, widgetData);
      widgetRegistry[widgetKey]._id = response.data._id; // Store the ID from the response
    } catch (err) {
      console.error("Error saving widget metadata:", err);
    }
  }
}

export function setWidgets(widgets) {
  Object.keys(widgets).forEach((name) => {
    widgetRegistry[name] = widgets[name];
  });
}

export function getAllWidgets() {
  return widgetRegistry;
}

// module.exports = {
//   fetchWidgetsFromDB,
//   registerWidget,
//   setWidgets,
//   getAllWidgets,
// };

export default {
  fetchWidgetsFromDB,
  registerWidget,
  setWidgets,
  getAllWidgets,
};