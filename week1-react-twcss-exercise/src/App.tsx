import ProfileCard from './components/ProfileCard'; // Adjust path if needed
import './App.css'

function App() {
  const exampleProfile = {
    name: "Jane Doe",
    title: "Software Engineer",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cbbe09e-e8af-46bf-b63f-955b1286a122/dk0s6nt-81a5741b-b66e-47c8-b5fd-220b3af302b4.png/v1/fill/w_1280,h_1280,q_80,strp/k_pop_demon_hunters_by_alexcoffeedraw2_dk0s6nt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzVjYmJlMDllLWU4YWYtNDZiZi1iNjNmLTk1NWIxMjg2YTEyMlwvZGswczZudC04MWE1NzQxYi1iNjZlLTQ3YzgtYjVmZC0yMjBiM2FmMzAyYjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yLzF4XbGtphoWhcIu3qYkLMQ0BYys0RYPBdWmKtR_b4", // A placeholder image URL
    // Make bio long enough to test truncation
    // bio: "Jane is a passionate software engineer with a strong focus on frontend development, specializing in React and modern JavaScript. She loves building intuitive user interfaces and exploring new technologies. In her free time, she enjoys hiking, photography, and contributing to open-source projects. Her latest work involves optimizing component rendering for large-scale applications."
    bio: "Very short bio."
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProfileCard
        name={exampleProfile.name}
        title={exampleProfile.title}
        imageUrl={exampleProfile.imageUrl}
        bio={exampleProfile.bio}
      />
    </div>
  );
}

export default App;