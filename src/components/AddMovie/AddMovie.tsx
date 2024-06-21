"use client";

import React, { SyntheticEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import firebase from "@/lib/firebase.lib";
import { COLLECTION } from "@/config/firebase.config";

function AddMovie() {
  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault();

    try {
      const docRef = await addDoc(collection(firebase.db, COLLECTION.MOVIES), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm space-y-3">
        <input
          type="text"
          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="This is placeholder"
        />
      </div>
      <button
        type="submit"
        className="py-2 mt-4 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
