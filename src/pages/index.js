// index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// Note: This component assumes 'styles/globals.css' is imported in _app.js
// and contains the CSS custom properties like --clr-primary, --clr-primary-focus, etc.

export default function Home() {
  const [email, setEmail] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFooterBanner, setShowFooterBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold if needed based on final layout
      if (window.scrollY > 300 && (document.body.scrollHeight - window.innerHeight - window.scrollY > 300)) {
        setShowFooterBanner(true);
      } else {
        setShowFooterBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setPhotos([]);
      // Maybe scroll to the success message? Optional.
      // document.getElementById('upload-faq')?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    // Process hero email submission
    alert(`Thank you! We'll send updates to ${heroEmail}`);
    setHeroEmail('');
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    // Process footer email submission
    alert(`Thank you! We'll send updates to ${footerEmail}`);
    setFooterEmail('');
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setPhotos(fileList);
  };

  // rainbowButtonStyle object removed, using .btn-rainbow class from globals.css

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Room Weaver - Get professional staging fast</title>
        <meta name="description" content="Upload photos of your rooms and get them professionally staged within 24 hours." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Use CSS Variable for site name color */}
              <span className="text-2xl font-bold text-[var(--clr-primary)]">Room Weaver</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <a href="#pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="#examples" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Log in</a>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Billing</a> */}
              <a
                href="#upload-faq" // Updated link
                className="btn-rainbow px-4 py-2 text-sm font-medium text-white rounded-md transition-colors" // Added btn-rainbow class
              >
                Visualize Your Space
              </a>
            </div>
            {/* Mobile menu button (optional) */}
            <div className="-mr-2 flex items-center sm:hidden">
              {/* You can add a mobile menu icon and functionality here */}
            </div>
          </div>
        </div>
         {/* Mobile menu, show/hide based on menu state (optional) */}
         {/* <div className="sm:hidden" id="mobile-menu"> ... </div> */}
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Grid layout for larger screens */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Text Content */}
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:col-span-7 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="block xl:inline">Redesign Your Interior,</span>{' '}
                    <span className="block text-[var(--clr-primary)] xl:inline">Love Your Space.</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg max-w-xl mx-auto md:text-xl lg:mx-0 lg:max-w-xl">
                    Unlock the true potential of your rooms. Get beautiful, personalized design concepts that transform your house into a home you adore.
                  </p>

                  {/* Email capture form with single button that leads to payment */}
                  <div className="mt-6 max-w-lg mx-auto lg:mx-0 sm:max-w-xl">
                    <form onSubmit={handleHeroSubmit} className="sm:flex">
                      <div className="min-w-0 flex-1 mb-3 sm:mb-0">
                        <label htmlFor="hero-email" className="sr-only">Email address</label>
                        <input
                          id="hero-email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--clr-primary-focus)] focus:border-[var(--clr-primary-focus)]"
                          value={heroEmail}
                          onChange={(e) => setHeroEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="sm:ml-3">
                        <button
                          type="submit"
                          className="btn-rainbow block w-full py-3 px-4 rounded-md shadow-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--clr-primary-focus)]"
                        >
                          Visualize Your Space
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Google Button */}
                  <div className="mt-6 flex justify-center lg:justify-start">
                    <button
                      className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--clr-primary-focus)]"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                      </svg>
                      Continue with Google
                    </button>
                  </div>

                  {/* Examples Button */}
                  <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                  </div>
                </div>
              </main>
            </div>

            {/* Image Area */}
            <div className="relative lg:col-span-5 lg:h-full mt-10 lg:mt-0">
              <div className="relative h-56 sm:h-72 md:h-96 lg:absolute lg:inset-0 lg:h-full lg:w-full">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[var(--clr-primary-lighter)] lg:rounded-l-lg">
                  <span className="text-2xl font-bold text-[var(--clr-primary-focus)]">PLACEHOLDER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Gallery Section - Masonry with Fixed Heights */}
      <div id="examples" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Examples Gallery
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Browse our collection of professionally staged rooms
            </p>
          </div>

          <div className="mt-12">
            {/* Masonry Grid Container */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23e5e7eb\' fill-opacity=\'0.6\'%3E%3Cpath d=\'M0 0h20v1H0z\'/%3E%3Cpath d=\'M0 0v20h1V0z\'/%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '20px 20px',
              }}
            >
              {/* --- Image Placeholders --- */}

              {/* Item 1 - Using actual image */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md h-64"> {/* Set height on wrapper */}
                  <Image
                    src="/livingroom.jfif" // Assumes livingroom.jfif is in your /public folder
                    alt="Modern living room staged example"
                    layout="fill" // Makes the image fill the parent container
                    objectFit="cover" // Ensures the image covers the area, cropping if necessary
                    className="rounded-lg" // Apply rounding consistent with the wrapper
                    priority // Optional: Add if this image is above the fold for faster loading
                  />
                   {/* Optional: Overlay text if needed, adjust styling */}
                  {/* <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                     Modern Living
                  </div> */}
                </div>
              </div>

              {/* Item 2 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-48 w-full bg-pink-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-pink-700">DINING ROOM (h-48)</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
               <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  {/* Use CSS Variable for blue background/text */}
                  <div className="h-72 w-full bg-[var(--clr-primary-lighter)] rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-[var(--clr-primary-dark)]">OFFICE SPACE (h-72)</span> {/* Using blue-700 equivalent */}
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-56 w-full bg-green-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-green-700">BEDROOM (h-56)</span>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="md:col-span-2 transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-64 w-full bg-yellow-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-yellow-700">OPEN KITCHEN (h-64)</span>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-80 w-full bg-purple-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-purple-700">GUEST ROOM (h-80)</span>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-52 w-full bg-red-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-red-700">BATHROOM (h-52)</span>
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="md:col-span-2 transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-40 w-full bg-teal-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-teal-700">SUNROOM (h-40)</span>
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="md:col-span-3 lg:col-span-2 transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-72 w-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">LUXURY LOFT (h-72)</span>
                  </div>
                </div>
              </div>

              {/* Item 10 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-96 w-full bg-orange-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-orange-700">PATIO (h-96)</span>
                  </div>
                </div>
              </div>

              {/* Item 11 */}
              <div className="transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-60 w-full bg-cyan-100 rounded-md flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c8c8c8\' fill-opacity=\'0.1\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-lg font-bold text-cyan-700">ENTRYWAY (h-60)</span>
                  </div>
                </div>
              </div>

              {/* Item 12 */}
              <div className="md:col-span-4 transform hover:scale-105 transition-transform duration-200 break-inside-avoid-column">
                <div className="gallery-item-wrapper relative rounded-lg overflow-hidden shadow-md" >
                  <div className="h-32 w-full rounded-md flex items-center justify-center overflow-hidden"
                      style={{ background: "linear-gradient(90deg, #7f7fd5, #86a8e7, #91eae4)", backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3C/g%3E%3C/svg%3E")' }}>
                    <span className="text-3xl font-bold text-white tracking-wide">YOUR DREAM HOME AWAITS (h-32)</span>
                  </div>
                </div>
              </div>

            </div> {/* End Grid Container */}

            <div className="mt-10 text-center">
              <a
                href="#upload-faq" // Updated link
                className="btn-rainbow inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-md transition-colors" // Added btn-rainbow class
              >
                Try It Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Examples */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Before & After
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See the transformative power of Room Weaver
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
            {/* Example 1 */}
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded-br-md z-10">Before</span>
                <div className="w-full h-64 flex items-center justify-center bg-red-100 rounded-lg shadow-md">
                  <span className="text-2xl font-bold text-red-500">PLACEHOLDER</span>
                </div>
              </div>
              <div className="relative">
                <span className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm font-medium rounded-br-md z-10">After</span>
                <div className="w-full h-64 flex items-center justify-center bg-green-100 rounded-lg shadow-md">
                  <span className="text-2xl font-bold text-green-500">PLACEHOLDER</span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded-br-md z-10">Before</span>
                <div className="w-full h-64 flex items-center justify-center bg-red-100 rounded-lg shadow-md">
                  <span className="text-2xl font-bold text-red-500">PLACEHOLDER</span>
                </div>
              </div>
              <div className="relative">
                <span className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm font-medium rounded-br-md z-10">After</span>
                <div className="w-full h-64 flex items-center justify-center bg-green-100 rounded-lg shadow-md">
                  <span className="text-2xl font-bold text-green-500">PLACEHOLDER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 1: Photo to Staging */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              {/* Use CSS Variable for placeholder background/text */}
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-[var(--clr-primary-lighter)]">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--clr-primary-focus)]">PLACEHOLDER</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Transform Empty Rooms into Stunning Spaces
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                With Room Weaver&apos;s professional staging service, you can turn empty rooms into beautifully designed spaces. Simply upload photos of your empty room, and within 24 hours, our team of design experts will deliver professionally staged images that highlight your space&apos;s potential.
              </p>
              <div className="mt-8">
                {/* Feature list items - green ticks */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Upload your room photos from any device
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Get staged photos within 24 hours
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Stage up to 5 rooms for just $30
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#upload-faq" className="btn-rainbow inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white transition-colors" // Added btn-rainbow class
                >
                  Start Transforming
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section 2: Real Estate Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Boost Your Real Estate Listings with Virtual Staging
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Staged homes sell faster and for higher prices than empty homes. With Room Weaver&apos;s virtual staging, you can showcase your property&apos;s full potential without the cost and hassle of physical staging.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Feature boxes - Use CSS variable for icon color */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--clr-primary-focus)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-900">
                      Faster Sales
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Virtual staging helps homes sell up to 73% faster than non-staged properties.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--clr-primary-focus)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-900">
                      Higher Value
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Increase your property&apos;s perceived value by up to 10% with professional staging.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--clr-primary-focus)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-900">
                      More Views
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Virtually staged listings receive up to 40% more views online.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--clr-primary-focus)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-900">
                      Cost-Effective
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Save thousands compared to traditional physical staging.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-green-100">
                  <span className="text-2xl font-bold text-green-500">PLACEHOLDER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews/Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See why real estate professionals and homeowners love Room Weaver
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   {/* Use CSS Variable for avatar background/text */}
                  <div className="h-12 w-12 rounded-full bg-[var(--clr-primary-lighter)] flex items-center justify-center">
                    <span className="text-[var(--clr-primary)] font-semibold">JD</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Jane Doe</h4>
                  <p className="text-sm text-gray-500">Real Estate Agent</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg key={rating} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                &quot;Room Weaver has revolutionized how I present vacant properties. The staging quality is exceptional, and I&apos;ve seen a significant increase in buyer interest since using this service.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">MS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Michael Smith</h4>
                  <p className="text-sm text-gray-500">Home Seller</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg key={rating} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                &quot;I was skeptical at first, but Room Weaver&apos;s virtual staging helped me sell my house in just 9 days! The rooms looked amazing, and the service was incredibly affordable compared to physical staging.&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">AR</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Amanda Rodriguez</h4>
                  <p className="text-sm text-gray-500">Interior Designer</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg key={rating} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                &quot;As a designer, I&apos;m very particular about staging. Room Weaver&apos;s attention to detail and design style is impressive. I&apos;ve recommended them to all my clients who are preparing to sell their homes.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How We Compare
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See why Room Weaver is the best choice for virtual staging
            </p>
          </div>

          <div className="mt-12 relative">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                      Features
                    </th>
                     {/* Use CSS Variable for table header */}
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-[var(--clr-primary)] uppercase tracking-wider w-1/4">
                      Room Weaver
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                      Competitor A
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                      Competitor B
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Table rows remain unchanged as they compare features/competitors */}
                   <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Price
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                      $30 for 5 rooms
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      $50 per room
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      $35 per room
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Turnaround Time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                      24 hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      2-3 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      48 hours
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Design Quality
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Revisions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                      1 free per room
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      $25 per revision
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      1 free per order
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Designer Support
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Furniture Styles
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                      15+ styles
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      8 styles
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      10 styles
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple Pricing
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              No hidden fees or complicated packages
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden lg:w-1/3 md:w-1/2 w-full">
              <div className="px-6 py-8 text-white sm:p-10 sm:pb-6"
                style={{ // Kept original inline gradient
                  background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)"
                }}
              >
                <div className="flex justify-center">
                   {/* Use CSS Variable for badge text */}
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-[var(--clr-primary)]">
                    Best Value
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold">
                  <span className="ml-1 mr-3 text-3xl">$</span>
                  30
                </div>
                <p className="mt-4 text-lg text-center">
                  For up to 5 rooms
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                 {/* Feature list items - green ticks */}
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      Stage up to 5 rooms for one price
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      Professional digital staging by experts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      24-hour turnaround time
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      High-quality digital images
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#upload-faq" // Updated link
                    className="btn-rainbow block w-full px-6 py-3 text-center font-medium text-white rounded-md transition-colors" // Added btn-rainbow class
                  >
                    Visualize Your Space Now
                  </a>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                     {/* Keep Google's specific blue inline or define --clr-google */}
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Combined Upload Form & FAQ Section === */}
      <div id="upload-faq" className="py-16 bg-gray-100"> {/* Changed background for contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 lg:mb-16"> {/* Increased bottom margin */}
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Visualize Your Space & Get Answers
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Upload your photos using the form and find answers to common questions.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

            {/* Left Column: Upload Form / Success Message */}
            <div className="lg:pr-8">
               {isSubmitted ? (
                // Success message - uses green colors
                <div className="rounded-xl bg-green-50 p-6 shadow-lg h-full flex items-center">
                  <div className="flex w-full">
                    <div className="flex-shrink-0 pt-1">
                      <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-green-800">
                        Submission Successful!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Thank you! We&apos;ve received your photos. You&apos;ll get your beautifully staged room images via email within 24 hours.
                        </p>
                      </div>
                       <button
                         onClick={() => setIsSubmitted(false)} // Add a way to reset the form
                         className="mt-4 text-sm font-medium text-green-700 hover:text-green-600 focus:outline-none focus:underline"
                       >
                         Submit another?
                       </button>
                    </div>
                  </div>
                </div>
              ) : (
                // The Form
                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          // Use CSS Variable for focus ring/border (original class)
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--clr-primary-focus)] focus:border-[var(--clr-primary-focus)] sm:text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
                        Room Photos
                      </label>
                      <div className="mt-1">
                         {/* Basic file input styling from original code */}
                        <input
                          id="photos"
                          name="photos"
                          type="file"
                          multiple
                          required={photos.length === 0}
                          onChange={handleFileChange}
                           // Use CSS Variable for focus ring/border (original class)
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--clr-primary-focus)] focus:border-[var(--clr-primary-focus)] sm:text-sm"
                        />
                        <p className="mt-2 text-xs text-gray-500">
                          Upload photos of up to 5 rooms (JPG, PNG formats accepted)
                        </p>
                        {/* Display selected file names (optional but helpful) */}
                        {photos.length > 0 && (
                          <div className="mt-3 text-xs text-gray-600 space-y-1">
                            <p className="font-medium">Selected files:</p>
                            <ul className="list-disc list-inside">
                              {photos.map(file => <li key={file.name}>{file.name} ({ (file.size / 1024 / 1024).toFixed(2) } MB)</li>)}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting || photos.length === 0 || !email}
                         // Use CSS Variable for focus ring
                        className="btn-rainbow w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--clr-primary-focus)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" // Added btn-rainbow class & disabled styles
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : 'Submit'} {/* Simplified text back */}
                      </button>

                      <div className="flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>

                      <button
                        type="button"
                        className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--clr-primary-focus)]" // Added focus ring
                      >
                        {/* Keep Google's specific blue inline or define --clr-google */}
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                        </svg>
                        Continue with Google
                      </button>
                    </div>
                </form>
              )}
            </div>

            {/* Right Column: FAQ */}
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6 divide-y divide-gray-200">
                {/* FAQ items generally use default text colors */}
                 <div className="pt-6 first:pt-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    How many rooms can I stage for $30?
                  </h4>
                  <div className="mt-2 text-base text-gray-500">
                    You can stage up to 5 separate rooms for the flat fee of $30.
                  </div>
                </div>
                 <div className="pt-6 first:pt-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    What types of rooms can you stage?
                  </h4>
                  <div className="mt-2 text-base text-gray-500">
                    We can stage any residential space - living rooms, bedrooms, kitchens, dining areas, home offices, patios, and more.
                  </div>
                </div>
                 <div className="pt-6 first:pt-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    How many photos should I submit per room?
                  </h4>
                  <div className="mt-2 text-base text-gray-500">
                     We recommend uploading 1-3 clear, well-lit photos of each room from different angles. This helps our designers understand the space better.
                  </div>
                </div>
                 <div className="pt-6 first:pt-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    How long does it take?
                  </h4>
                  <div className="mt-2 text-base text-gray-500">
                     Our standard turnaround time is 24 hours from when you successfully submit your photos and payment.
                  </div>
                </div>
                 <div className="pt-6 first:pt-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    What if I&apos;m not satisfied with the results?
                  </h4>
                  <div className="mt-2 text-base text-gray-500">
                     We aim for your complete satisfaction. We offer one complimentary revision per room if you&apos;re not happy with the initial staging. Simply reply to your delivery email with specific feedback.
                  </div>
                </div>
                {/* Removed the extra FAQ I added previously */}
              </div>
            </div>

          </div> {/* End Grid */}
        </div> {/* End Container */}
      </div> {/* End Section */}
      {/* === End Combined Section === */}


      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-6">
             {/* Footer links generally use default/gray text colors */}
             <a href="#pricing" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
             <a href="#examples" className="text-base text-gray-500 hover:text-gray-900">Gallery</a>
             <a href="#" className="text-base text-gray-500 hover:text-gray-900">About Us</a>
             <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a>
             <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a>
             <a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Room Weaver. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky Footer Banner (appears when scrolling) */}
      {showFooterBanner && (
         <div className="fixed bottom-0 inset-x-0 z-50 pb-2 sm:pb-5">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="footer-banner-bg p-3 shadow-lg rounded-lg flex items-center justify-between flex-wrap sm:flex-nowrap" >
              <div className="flex items-center space-x-3 flex-1 w-full sm:w-auto order-1 sm:order-none">
                <span className="p-1.5 rounded-full bg-white bg-opacity-20 hidden sm:inline-flex">
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <p className="font-medium text-white text-sm md:text-base truncate">
                  Get the latest updates and special offers from Room Weaver
                </p>
              </div>

              <div className="order-last sm:order-none mt-2 sm:mt-0 w-full sm:w-auto">
                <form onSubmit={handleFooterSubmit} className="flex w-full sm:w-auto">
                  <label htmlFor="footer-banner-email" className="sr-only">Email address</label>
                  <input
                    id="footer-banner-email"
                    type="email"
                    required
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    className="flex-1 min-w-0 w-full sm:w-48 h-9 px-3 py-1 border-0 rounded-l-md text-sm placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Enter your email"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
                  />
                  <button
                    type="submit"
                    className="h-9 px-3 py-1 bg-white text-[var(--clr-primary)] font-medium text-sm rounded-r-md hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-white transition-colors flex-shrink-0"
                  >
                    Sign up
                  </button>
                </form>
              </div>

              <div className="order-2 sm:order-none sm:ml-4 flex-shrink-0 flex items-center">
                <a href="#upload-faq" className="hidden md:block mx-3 px-4 py-1.5 bg-white text-[var(--clr-primary)] text-sm font-medium rounded-md hover:bg-blue-50 transition-colors">
                  Try Now
                </a>
                <button
                  type="button"
                  onClick={() => setShowFooterBanner(false)}
                  className="-mr-1 sm:mr-0 ml-1 sm:ml-0 p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}