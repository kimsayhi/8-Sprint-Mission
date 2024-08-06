import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth, Home, Items, Login, Signup, AddItem, ItemDetail } from '#pages'
import Header from '#/components/layout/Header'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/*">
            <Route index element={<Home />} />
            <Route path="items">
              <Route index element={<Items />} />
              <Route path=":itemId" element={<ItemDetail />} />
            </Route>
            <Route path="auth/*" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="additem" element={<AddItem />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
