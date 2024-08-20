export const deepEqual = (x, y) => {
  // method to check if 2 objects are equal
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every((key) => deepEqual(x[key], y[key]))
    : x === y;
};

export const extractDateTime = (createdAtString) => {
  const dateTime = new Date(createdAtString);
  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear();

  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}. ${hours}:${minutes}`;

  return formattedDate;
};

export const getOneYearInFuture = (createdAtString) => {
  const dateTime = new Date(createdAtString);
  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear() + 1;

  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}. ${hours}:${minutes}`;

  return formattedDate;
};

export const isPaymentActive = (createdAtString) => {
  const createdAt = new Date(createdAtString);
  const oneYearLater = new Date(createdAt);
  oneYearLater.setFullYear(createdAt.getFullYear() + 1);

  const now = new Date();

  return now >= createdAt && now < oneYearLater;
};