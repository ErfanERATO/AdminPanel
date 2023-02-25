import PanelLayout from "../layouts/PanelLayout";
import Chat from "../pages/chat";
import Dashboard from "../pages/dashboard";
import EmailForms from "../pages/email";
import InvoiceList from "../pages/invoice/list";
import InvoicePreview from "../pages/invoice/preview";

export default [
  {
    path: "/",
    component: Dashboard,
    layout: PanelLayout,
  },
  {
    path: "/email",
    component: EmailForms,
    layout: PanelLayout,
  },
  {
    path: "/chat",
    component: Chat,
    layout: PanelLayout,
  },
  {
    path: "/invoice-list",
    component: InvoiceList,
    layout: PanelLayout,
  },
  {
    path: "/invoice-preview",
    component: InvoicePreview,
    layout: PanelLayout,
  },
];
