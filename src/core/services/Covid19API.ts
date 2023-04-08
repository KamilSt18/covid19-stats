import axios from "axios";
import { SummaryResponse } from "../models/SummaryResponse";

export const fetchSummary = async () => {
    const { data } = await axios.get<SummaryResponse>(
      "https://api.covid19api.com/summary"
    );
    return data;
  };