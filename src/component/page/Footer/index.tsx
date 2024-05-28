import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-teal-700 text-gray-300 p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Company</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Services</h2>
                        <ul>
                            <li>Web Design</li>
                            <li>Graphic Design</li>
                            <li>SEO</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Resources</h2>
                        <ul>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Connect</h2>
                        <ul>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
