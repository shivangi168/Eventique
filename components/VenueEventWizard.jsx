'use client'

import React, { useMemo, useState } from 'react'
import { apiFetch, apiUpload } from '../app/utils/api'
import axios from 'axios'

const Stepper = ({ step }) => {
  const steps = ['Details', 'Tickets', 'Settings']
  return (
    <div className="max-w-5xl mx-auto mt-6 mb-8">
      <div className="flex items-center justify-between">
        {steps.map((label, idx) => {
          const i = idx + 1
          const active = i <= step
          return (
            <div key={label} className="flex-1 flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{i}</div>
              {i < steps.length && <div className={`h-1 flex-1 mx-2 ${i < step ? 'bg-green-400' : 'bg-gray-200'}`}></div>}
            </div>
          )
        })}
      </div>
      <div className="text-center text-gray-700 mt-3 font-medium">{steps[step-1]}</div>
    </div>
  )
}

export default function VenueEventWizard() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [eventId, setEventId] = useState('')
  const [images, setImages] = useState([])

  const [details, setDetails] = useState({
    name: '', category: '', startsAt: '', durationMinutes: 60, description: '',
    addressLine1: '', addressLine2: '', country: '', state: '', city: '', postalCode: '',
    latitude: '', longitude: '', tags: ''
  })

  const [tickets, setTickets] = useState({ totalCount: 0, perCustomerLimit: 1, groupMinQty: '', groupDiscountPercent: '', discountEndsAt: '' })

  const canNextDetails = useMemo(() => details.name && Number(details.durationMinutes) > 0 && details.startsAt, [details])



const submitDetails = async () => {
  console.log("Submitting details... callled with details:", details);
  setLoading(true);
  setError("");
  setStep(2);

  try {
    const payload = {
      name: details.name,
      category: details.category,
      startsAt: new Date(details.startsAt).toISOString(),
      durationMinutes: Number(details.durationMinutes),
      description: details.description,
      addressLine1: details.addressLine1,
      addressLine2: details.addressLine2,
      country: details.country,
      state: details.state,
      city: details.city,
      postalCode: details.postalCode,
      latitude: details.latitude === "" ? null : Number(details.latitude),
      longitude: details.longitude === "" ? null : Number(details.longitude),
      tags: details.tags
        ? details.tags.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
    };

    const res = await axios.post("http://localhost:3001/api/events", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setEventId(res.data.id);
    setStep(2);
  } catch (e) {
    setError(e.response?.data?.message || e.message || "Failed to create");
  } finally {
    setLoading(false);
  }
};


  // const submitDetails = async () => {
  //   setLoading(true); setError('')
  //   try {
  //     const payload = {
  //       name: details.name,
  //       category: details.category,
  //       startsAt: new Date(details.startsAt).toISOString(),
  //       durationMinutes: Number(details.durationMinutes),
  //       description: details.description,
  //       addressLine1: details.addressLine1,
  //       addressLine2: details.addressLine2,
  //       country: details.country,
  //       state: details.state,
  //       city: details.city,
  //       postalCode: details.postalCode,
  //       latitude: details.latitude === '' ? null : Number(details.latitude),
  //       longitude: details.longitude === '' ? null : Number(details.longitude),
  //       tags: details.tags ? details.tags.split(',').map(s => s.trim()).filter(Boolean) : []
  //     }
  //     const res = await apiFetch('/api/events', { method: 'POST', body: JSON.stringify(payload) })
  //     setEventId(res.id)
  //     setStep(2)
  //   } catch (e) {
  //     setError(e.message || 'Failed to create')
  //   } finally { setLoading(false) }
  // }

  const submitTickets = async () => {
    setLoading(true); setError('')
    try {
      const payload = {
        totalCount: Number(tickets.totalCount),
        perCustomerLimit: Number(tickets.perCustomerLimit),
        groupMinQty: tickets.groupMinQty === '' ? null : Number(tickets.groupMinQty),
        groupDiscountPercent: tickets.groupDiscountPercent === '' ? null : Number(tickets.groupDiscountPercent),
        discountEndsAt: tickets.discountEndsAt ? new Date(tickets.discountEndsAt).toISOString() : null
      }
      await apiFetch(`/api/events/${eventId}/tickets`, { method: 'POST', body: JSON.stringify(payload) })
      setStep(3)
    } catch (e) { setError(e.message || 'Failed to save tickets') } finally { setLoading(false) }
  }

  const uploadImages = async () => {
    if (!images.length) { setStep(3); return }
    setLoading(true); setError('')
    try {
      const fd = new FormData()
      images.forEach(f => fd.append('images', f))
      await apiUpload(`/api/events/${eventId}/images`, fd)
      setStep(3)
    } catch (e) { setError(e.message || 'Failed to upload images') } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Create Venue Event</h1>
        <Stepper step={step} />

        {error && <div className="max-w-3xl mx-auto mb-4 text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded">{error}</div>}

        {step === 1 && (
          <div className="bg-white shadow rounded p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Name" value={details.name} onChange={e=>setDetails({...details,name:e.target.value})} />
              <input className="input" placeholder="Category" value={details.category} onChange={e=>setDetails({...details,category:e.target.value})} />
              <input className="input" type="datetime-local" placeholder="Starts At" value={details.startsAt} onChange={e=>setDetails({...details,startsAt:e.target.value})} />
              <input className="input" type="number" placeholder="Duration Minutes" value={details.durationMinutes} onChange={e=>setDetails({...details,durationMinutes:e.target.value})} />
              <input className="input md:col-span-2" placeholder="Description" value={details.description} onChange={e=>setDetails({...details,description:e.target.value})} />
              <input className="input" placeholder="Address line 1" value={details.addressLine1} onChange={e=>setDetails({...details,addressLine1:e.target.value})} />
              <input className="input" placeholder="Address line 2" value={details.addressLine2} onChange={e=>setDetails({...details,addressLine2:e.target.value})} />
              <input className="input" placeholder="Country" value={details.country} onChange={e=>setDetails({...details,country:e.target.value})} />
              <input className="input" placeholder="State" value={details.state} onChange={e=>setDetails({...details,state:e.target.value})} />
              <input className="input" placeholder="City" value={details.city} onChange={e=>setDetails({...details,city:e.target.value})} />
              <input className="input" placeholder="Postal Code" value={details.postalCode} onChange={e=>setDetails({...details,postalCode:e.target.value})} />
              <input className="input" placeholder="Latitude" value={details.latitude} onChange={e=>setDetails({...details,latitude:e.target.value})} />
              <input className="input" placeholder="Longitude" value={details.longitude} onChange={e=>setDetails({...details,longitude:e.target.value})} />
              <input className="input md:col-span-2" placeholder="Tags (comma separated)" value={details.tags} onChange={e=>setDetails({...details,tags:e.target.value})} />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button disabled={!canNextDetails || loading} onClick={submitDetails} className="px-5 py-2 rounded bg-green-600 text-white disabled:opacity-50">Save & Continue</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white shadow rounded p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" type="number" placeholder="Total tickets" value={tickets.totalCount} onChange={e=>setTickets({...tickets,totalCount:e.target.value})} />
              <input className="input" type="number" placeholder="Per-customer limit" value={tickets.perCustomerLimit} onChange={e=>setTickets({...tickets,perCustomerLimit:e.target.value})} />
              <input className="input" type="number" placeholder="Group min qty (optional)" value={tickets.groupMinQty} onChange={e=>setTickets({...tickets,groupMinQty:e.target.value})} />
              <input className="input" type="number" placeholder="Group discount % (optional)" value={tickets.groupDiscountPercent} onChange={e=>setTickets({...tickets,groupDiscountPercent:e.target.value})} />
              <input className="input md:col-span-2" type="datetime-local" placeholder="Discount ends at (optional)" value={tickets.discountEndsAt} onChange={e=>setTickets({...tickets,discountEndsAt:e.target.value})} />
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={()=>setStep(1)} className="px-4 py-2 rounded border">Back</button>
              <button disabled={loading} onClick={submitTickets} className="px-5 py-2 rounded bg-green-600 text-white disabled:opacity-50">Save & Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white shadow rounded p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Images</h2>
            <p className="text-gray-600 mb-4">Upload up to 5 images for your event banner/gallery.</p>
            <input className="block" type="file" multiple accept="image/*" onChange={e=>setImages(Array.from(e.target.files||[]).slice(0,5))} />
            <div className="mt-6 flex justify-between">
              <button onClick={()=>setStep(2)} className="px-4 py-2 rounded border">Back</button>
              <button disabled={loading} onClick={uploadImages} className="px-5 py-2 rounded bg-green-600 text-white disabled:opacity-50">Finish</button>
            </div>
            <div className="mt-8">
              <a className="inline-block px-5 py-2 rounded bg-purple-600 text-white" href="#">Go to Events</a>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .input { @apply w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400; }
      `}</style>
    </div>
  )
}


