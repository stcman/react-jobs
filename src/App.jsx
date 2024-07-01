import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFound';
import JobPage from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {

  const addJob = async (newJob) => {
    // Ad New Job
    const res = await fetch('http://localhost:8000/jobs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
  };

  const deleteJob = async (id) => {
    // Delete Job
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE"
    });
  };

  const editJob = async (id, newJob) => {
    // Update Job
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage editJob={editJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App