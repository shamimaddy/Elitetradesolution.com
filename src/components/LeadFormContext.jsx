import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const LeadFormContext = createContext(null)

export function LeadFormProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openLeadForm = useCallback(() => setOpen(true), [])
  const closeLeadForm = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openLeadForm, closeLeadForm, setOpen }),
    [open, openLeadForm, closeLeadForm],
  )

  return (
    <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>
  )
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext)
  if (!ctx) {
    throw new Error('useLeadForm must be used within LeadFormProvider')
  }
  return ctx
}
