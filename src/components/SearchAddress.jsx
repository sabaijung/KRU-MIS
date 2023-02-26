import React, { Fragment, useState, useRef, useEffect } from "react";
import AddressData from "../data/addressData.json";

export function SearchAddress({
  placeholder = "",
  className = "form-control bg-white",
  setlabels = "name",
  returnAddress,
  isActive = "",
  title = "",
}) {
  const ref = useRef();
  const [array, setArray] = useState([]);
  const [open, setOpen] = useState(false);
  const [provinces, setProvinces] = useState([
    {
      name: "",
      address: {
        district: "",
        amphure: "",
        province: "",
        zipcode: "",
      },
    },
  ]);
  const [searchAddress, setSearchAddress] = useState("");

  useEffect(() => {
    LoadProvinces();
  }, []);

  function LoadProvinces() {
    var array = [];
    for (let i = 0; i < AddressData.length; i++) {
      array.push({
        name: `${AddressData[i].subdistrictName},${AddressData[i].districtName},${AddressData[i].provinceName},${AddressData[i].postCode}`,
        address: AddressData[i],
      });
    }
    setProvinces(array.map((x) => ({ name: x.name, address: x.address })));
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setArray([]);
        setSearchAddress("");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open, setSearchAddress]);

  return (
    <Fragment>
      <div ref={ref}>
        <div class="">
          <div class="input-group">
            <input
              placeholder={placeholder}
              className={className}
              value={searchAddress}
              type="text"
              autoComplete="off"
              onChange={(e) => {
                setSearchAddress(e.target.value);
                if (e.target.value) {
                  setArray(
                    provinces.filter((v) =>
                      v[setlabels].includes(e.target.value.toLowerCase().trim())
                    )
                  );
                  setOpen(true);
                } else {
                  setArray([]);
                }
              }}
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>

          <ul
            className={`${
              searchAddress && open
                ? "border absolute z-10 bg-white w-[80%] md:w-[50%] lg:w-[30%] max-h-[20rem] shadow-lg overflow-auto"
                : "hidden"
            }`}
          >
            {array.length !== 0 && open ? (
              array.map((tiem, index) => (
                <li
                  key={index}
                  className={`${
                    isActive === tiem.address.subdistrictName &&
                    "bg-blue-500 text-white"
                  } cursor-pointer list-group `}
                  onClick={(e) => {
                    setOpen(false);
                    if (e) {
                      setSearchAddress("");
                      returnAddress(tiem.address);
                    }
                  }}
                >
                  <p>{tiem[setlabels]}</p>
                </li>
              ))
            ) : (
              <li className="p-2 px-5 text-red-700 hidden">
                <p className="text-center">
                  ไม่พบข้อมูล
                  <span>
                    <i className="fa fa-warning w-5 h-5 text-red-700 ml-2" />
                  </span>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
