import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '@/components/AuthProvider'
import { LandingPage } from '@/pages/LandingPage'
import { Dashboard } from '@/pages/Dashboard'
import { Generator } from '@/pages/Generator'
import { Editor } from '@/pages/Editor'
import { Preview } from '@/pages/Preview'
import { Toaster } from '@/components/ui/sonner'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/generate"
            element={
              <ProtectedRoute>
                <Generator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />
          <Route path="/preview/:id" element={<Preview />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  )
}

export default App 