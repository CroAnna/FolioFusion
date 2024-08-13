"use client";
import { useCallback } from "react";
import Swal from "sweetalert2";

const DeleteAccountButton = ({deleteUserAccount}) => {
  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this account FOREVER. You will lose access to the app using this account and your order will not be refunded.",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#66cc8a",
      confirmButtonColor: "#66cc8a",
      cancelButtonColor: "#b91c1c",
      cancelButtonText: "Cancel",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteAccount();
      }
    });
  };

  const deleteAccount = useCallback(async () => {
    await deleteUserAccount();
  }, []);

  return (
    <button className="btn btn-outline btn-error" onClick={handleDeleteAccount}>
      Delete my account
    </button>
  );
};

export default DeleteAccountButton;
