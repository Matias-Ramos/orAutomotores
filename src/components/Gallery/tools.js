// Components
import CardsMapper from "./Cards/CardsMapper.jsx";
import FiltersContainerDktp from "./Filters/Containers/FiltersContainerDktp.jsx";
import NavBarMobile from "./Filters/Containers/NavBarMobile.jsx";
import Loading from "./Loading.jsx";
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
import Error from "./Error.jsx"
// Hooks
import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
// Functions
import { modelStockData } from "../../utils/byGallery/modelStockData.js";
import { filterData } from "../../utils/byGallery/filterStock.js";
import { getPriceRange } from "../../utils/byFilters/getPriceRange.js";
import { getSvCarList } from "../../firebase/firestoreDataMgmt.js";

export {
  CardsMapper,
  FiltersContainerDktp,
  NavBarMobile,
  Loading,
  QyParamsCtxtProvider,
  Error,
  useState,
  useEffect,
  useMemo,
  useRef,
  useLocation,
  useQuery,
  modelStockData,
  filterData,
  getPriceRange,
  getSvCarList,
};
