import moment from "moment";

const date = moment();

const chartDropDownData = [
  {
    id: "select_range",
    label: "Select Range",
    url: `start=${date.startOf("week").format("DD-MM-YYYY")}&end=${date
      .endOf("week")
      .format("DD-MM-YYYY")}`,
  },
  {
    id: "this_week",
    label: "This Week",
    url: `start=${date
      .startOf("week")
      .format("DD-MM-YYYY")}&end=${moment().format("DD-MM-YYYY")}`,
  },
  {
    id: "last_week",
    label: "Last Week",
    url: `start=${date.startOf("week").format("DD-MM-YYYY")}&end=${date
      .endOf("week")
      .format("DD-MM-YYYY")}`,
  },
  {
    id: "this_month",
    label: "This Month",
    url: `start=${date.startOf("month").format("DD-MM-YYYY")}&end=${date.format(
      "DD-MM-YYYY"
    )}`,
  },
  {
    id: "last_month",
    label: "Last Month",
    url: `start=${date
      .subtract(1, "months")
      .startOf("month")
      .format("DD-MM-YYYY")}&end=${date
      .subtract(1, "months")
      .endOf("month")
      .format("DD-MM-YYYY")}`,
  },
  {
    id: "this_year",
    label: "This Year",
    url: `start=${date.startOf("year").format("DD-MM-YYYY")}&end=${date.format(
      "DD-MM-YYYY"
    )}`,
  },
  {
    id: "last_year",
    label: "Last Year",
    url: `start=${date
      .subtract(1, "years")
      .startOf("year")
      .format("DD-MM-YYYY")}&end=${date
      .subtract(1, "years")
      .endOf("year")
      .format("DD-MM-YYYY")}`,
  },
  {
    id: "custom_range",
    label: "Custom Range",
    url: `start=${date.startOf("week").format("DD-MM-YYYY")}&end=${date
      .endOf("week")
      .format("DD-MM-YYYY")}`,
  },
];
export default chartDropDownData;
