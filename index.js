const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors()); // Use cors middleware to handle CORS
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@gully2global.com",
    pass: "Shasudigi@217",
  },
});

function event(eventname,datetime,address,imageqr) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formal Email Template</title>
<style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f0f4f7; /* Light blue-grey background for the entire page */
            font-family: Arial, sans-serif;
            text-align: center; /* Center text for the whole page */
        }
 
        table {
            border-spacing: 0;
            width: 100%;
            margin: 0 auto;
        }
 
        .container {
            width: 100%;
            max-width: 700px; /* Larger container */
            margin: 20px auto;
            background-color: #ffffff; /* White background for the main content */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
 
        .header {
            background: linear-gradient(135deg, #2c3e50, #2980b9); /* Gradient background */
            color: #ffffff; /* White text for contrast */
            padding: 25px 40px; /* Increased padding for a spacious look */
            text-align: center;
            border-bottom: 3px solid #1c2833; /* Darker gradient color for separation */
            position: relative; /* Position relative for decorative elements */
        }
 
        .header img {
            max-width: 180px; /* Adjusted size for logos */
            height: auto;
            border-radius: 50%; /* Circular logo for a modern look */
            border: 4px solid #ffffff; /* White border around the logo */
        }
 
        .header::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.2); /* Subtle white stripe for a decorative effect */
        }
 
        .content {
            padding: 20px;
            color: #333333; /* Dark grey text for readability */
            text-align: center; /* Center text in the content section */
            background-color: #eaf2f8; /* Light blue background for the content */
        }
 
        .content h2 {
            font-size: 24px; /* Larger font size for the heading */
            color: #2c3e50; /* Darker blue for headings */
            margin-bottom: 10px;
        }
 
        .content p {
            margin: 0;
            line-height: 1.6;
        }
 
        .content .highlight {
            color: #e67e22; /* Orange for highlights */
            font-weight: bold;
        }
 
        .venue {
            background-color: #ffffff; /* White for venue section */
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #dcdcdc; /* Light grey border */
            margin-top: 20px;
        }
 
        .venue p {
            margin: 0;
            font-size: 14px;
            color: #555555; /* Medium grey for venue details */
        }
 
        .footer {
            background: linear-gradient(135deg, #34495e, #2c3e50); /* Elegant gradient background */
            color: #ffffff;
            padding: 20px 40px; /* Increased padding for a more substantial footer */
            text-align: center;
            font-size: 14px;
            border-top: 3px solid #1a252f; /* Darker gradient color for separation */
            position: relative; /* Position relative for decorative elements */
        }
 
        .footer::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.2); /* Subtle white stripe for a decorative effect */
        }
 
        .footer a {
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
        }
 
        .button-container {
            text-align: center; /* Center-align the button */
            margin: 20px 0;
        }
 
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #e67e22; /* Orange button color */
            color: #ffffff; /* White text */
            text-align: center;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
 
        .button:hover {
            background-color: #d35400; /* Darker orange on hover */
        }
 
        @media (max-width: 650px) {
            .container {
                width: 95%;
            }
 
            .header img {
                max-width: 150px; /* Adjust size for smaller screens */
            }
 
            .content h2 {
                font-size: 20px;
            }
 
            .button {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
</style>
</head>
<body>
<table class="container">
<!-- Header Section -->
<tr>
<td class="header">
<img src="C:\Users\PRERANA R\Downloads\thumbnail_Mee Day Mail.png" alt="Event Image">
</td>
</tr>
 
        <!-- Content Section -->
<tr>
<td class="content">
<h2>You're Invited to Our Exclusive Event!</h2>
<p>Hello there,</p>
<p>We are excited to invite you to our event <span class="highlight">${eventname}</span>.</p>
<p>Date & Time: <span class="highlight">${datetime}</span></p>
<p>Venue: <span class="highlight">${address}</span></p>
<p>Prestige Shantiniketan Hoodi, Whitefield</p>
<p>Bengaluru - 560 048</p>
 
                <!-- QR Code Section -->
<div class="qr-code">
<p>Scan this QR code at the venue for quick entry:</p>
<img src="${imageqr}" alt="Event QR Code">
</div>
 
                <!-- Call to Action Button -->
<p>Please download this scan/image and save in your phone for easy access at the venue</p>
<div class="button-container">
<a href="${imageqr}" target="_blank" class="button">Download</a>
</div>
</td>
</tr>
 
        <!-- Footer Section -->
<tr>
<td class="footer">
<p>Copyright © 2024 DJ Arun Productions. All rights reserved.</p>
<p>Visit our website: <a href="https://djarunproductions.com/">djarunproductions.com</a></p>
</td>
</tr>
</table>
</body>
</html>

`;
}

function welcomeevent(username, eventname) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Success - Arun Production</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f62f5e; /* Bright pink background for a vibrant look */
            color: #ffffff; /* Light text color for readability */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Center the container vertically and horizontally */
            padding: 20px; /* Added padding to prevent content cut-off */
            box-sizing: border-box; /* Include padding in width/height calculation */
        }

        .email-container {
            width: 100%;
            max-width: 500px;
            background-color: #2b1b4e; /* Dark purple background for the container */
            border-radius: 16px; /* Rounded corners for modern look */
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Shadow for depth */
            margin: 20px; /* Margin for spacing on smaller screens */
            text-align: center; /* Centered content */
            padding: 30px 20px; /* Padding for content */
            position: relative;
            box-sizing: border-box; /* Include padding in width/height calculation */
        }

        .header {
            background-color: #f62f5e; /* Pink background for the header */
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 20px;
        }

        .header h1 {
            font-size: 32px; /* Adjusted font size for better responsiveness */
            color: #ffffff; /* White text for the title */
            margin: 0;
            letter-spacing: 2px; /* Spacing for stylish text */
        }

        .header h2 {
            font-size: 16px; /* Adjusted font size for smaller screens */
            color: #ffe36b; /* Yellowish color for subheading */
            margin: 5px 0 15px;
        }

        .content img {
            max-width: 100%; /* Ensure the image does not exceed container width */
            margin: 0 auto 20px; /* Center the image */
            display: block; /* Ensure the image is a block element */
            border-radius: 50%;
            border: 2px solid #ffe36b; /* Yellowish border for logo */
        }

        .content p {
            font-size: 16px; /* Adjusted font size */
            color: #ffffff; /* White color for the paragraph */
            margin: 20px 0;
            line-height: 1.6; /* Improved line spacing for readability */
        }

        .content p span {
            color: #ffe36b; /* Highlight color for the username */
            font-weight: bold;
        }

        .event-details {
            background-color: #471b4d; /* Dark purple background for event details */
            color: #ffffff;
            padding: 20px;
            border-radius: 12px; /* Rounded corners for modern look */
            margin-top: 20px;
        }

        .event-details strong {
            color: #ffe36b; /* Yellowish color for event name */
        }

        .footer {
            background-color: #2b1b4e; /* Matching dark purple background */
            padding: 15px;
            text-align: center;
            color: #ffffff; /* White text for contrast */
            margin-top: 20px;
        }

        .footer a {
            text-decoration: none;
            font-size: 14px;
            color: #ffe36b; /* Yellowish color for links */
            font-weight: bold;
        }

        .footer a:hover {
            color: #ffffff; /* White text on hover */
        }

        /* Dynamic and Modern Elements */
        .decorative-element {
            position: absolute;
            top: -10px;
            left: 20px;
            color: #ffe36b; /* Yellowish color for design elements */
            font-size: 50px;
            font-weight: bold;
        }

        .circle-element {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #471b4d;
            position: absolute;
            bottom: -20px;
            right: 30px;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
            .email-container {
                width: 100%; /* Increase width for smaller screens */
                padding: 20px 15px; /* Adjust padding */
            }

            .header h1 {
                font-size: 28px; /* Smaller font size for mobile */
            }

            .header h2 {
                font-size: 14px; /* Adjusted font size for mobile */
            }

            .content p {
                font-size: 14px; /* Adjust font size */
            }

            .decorative-element {
                font-size: 40px; /* Adjust size for smaller screens */
                top: 0;
                left: 10px;
            }

            .circle-element {
                width: 40px; /* Adjust size for smaller screens */
                height: 40px;
                bottom: -10px;
                right: 15px;
            }
        }

        @media (max-width: 480px) {
            .header h1 {
                font-size: 24px; /* Even smaller font size for very small screens */
            }

            .header h2 {
                font-size: 12px; /* Smaller subheading font */
            }

            .content img {
                max-width: 80px; /* Adjust image size */
            }

            .content p {
                font-size: 13px; /* Smaller text for very small screens */
            }

            .footer {
                padding: 10px; /* Reduce padding */
            }

            .footer a {
                font-size: 12px; /* Smaller footer link text */
            }
        }
    </style>
</head>
<body>

<div class="email-container">
    <!-- Decorative Elements -->
    <div class="decorative-element">✦✦✦</div>
    <div class="circle-element"></div>

    <!-- Header with Logo and Event Details -->
    <div class="header">
        <img src="https://firebasestorage.googleapis.com/v0/b/arunproductions.appspot.com/o/users%2FqsnVaPZl60P7KC0lLlrUR6XXnqy1%2Fqr_codes%2Femail_images%2FWhatsApp_Image_2024-09-05_at_12.35.08_7a9ae555-removebg-preview.png?alt=media&token=243256f4-6a66-47a7-a663-23ac5b264f53" alt="Arun Production Logo" height="100" width="100"/>
        <h1>Welcome To the Event</h1>
        <h2>You have successfully Logged in</h2>
    </div>

    <!-- Content Section -->
    <div class="content">
        <p>You have successfully logged in as <span>${username}</span>.</p>
    </div>

    <!-- Event Details Section -->
    <div class="event-details">
        <p>Enjoy your event</p>
    </div>

    <!-- Footer Section with Website Link -->
    <div class="footer">
        <p>Visit our official website: <a href="https://djarunproductions.com/">www.arunproduction.com</a></p>
    </div>
</div>
</body>
</html>            
  `;
}
 function feedback(eventname) {
    return `
                      
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Feedback - Arun Production</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #555555; /* Unified background color for the entire page */
            color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Center the container vertically and horizontally */
        }

        .email-container {
            max-width: 600px;
            width: 100%;
            background-color: #1c1a1a; /* Same background color as the body */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .content {
            padding: 40px 20px;
            text-align: center;
            background-color: #555555;
            color: #ffffff;
        }

        .content img {
            max-width: 200px; /* Increased size of the logo */
            margin-bottom: 10px;
            border-radius: 50%;
        }

        .content h1 {
            font-size: 32px;
            margin: 10px 0;
            color: #ffffff;
        }

        .content h2 {
            color: #ffebee;
            font-size: 24px;
            margin: 20px 0 15px;
        }

        .content p {
            font-size: 16px;
            color: #f5f5f5;
            margin-bottom: 30px;
        }

        .content p span {
            color: #ffccbc;
            font-weight: bold;
        }

        .feedback-section {
            background-color: #555555;
            color: #ffffff;
            padding: 20px;
            border-top: 5px solid #555555;
            text-align: center;
        }

        .feedback-section p {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 20px;
        }

        .feedback-section a {
            background-color: #ffab91;
            color: #1c1a1a;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .feedback-section a:hover {
            background-color: #ff8a65;
            color: #ffffff;
        }

        .footer {
            background-color: #1c1a1a;
            padding: 20px;
            text-align: center;
        }

        .footer a {
            text-decoration: none;
            font-size: 14px;
            color: #ffccbc;
            font-weight: bold;
        }

        .footer a:hover {
            color: #ffffff;
        }
    </style>
</head>
<body>

<div class="email-container">
    <!-- Header with Event Title and Logo -->
    <div class="content">
        <img src="https://firebasestorage.googleapis.com/v0/b/arunproductions.appspot.com/o/users%2FqsnVaPZl60P7KC0lLlrUR6XXnqy1%2Fqr_codes%2Femail_images%2FWhatsApp_Image_2024-09-05_at_12.35.08_7a9ae555-removebg-preview.png?alt=media&token=243256f4-6a66-47a7-a663-23ac5b264f53" alt="Arun Production Logo" />
        <h1>Arun Production</h1>
        <h2>Thank You for Attending!</h2>
        <p>We hope you enjoyed <span>${eventname}</span>!</p>
    </div>

    <!-- Feedback Section -->
    <div class="feedback-section">
        <p>Your feedback is valuable to us. Please take a moment to share your thoughts on the event.</p>
        <a href="https://forms.gle/dxokDTqP875zTRZe8" target="_blank">Give Feedback</a>
    </div>

    <!-- Footer Section with Website Link -->
    <div class="footer">
        <p>Visit our official website: <a href="https://djarunproductions.com/">www.arunproduction.com</a></p>
    </div>
</div>

</body>
</html>       
  `;
  }


// POST endpoint to send email
app.post("/event", async (req, res) => {
  const { email, eventname,datetime,address,imageqr } =
    req.body;

  if (
    !email ||
    !eventname||
    !datetime||
    !address||
    !imageqr

  ) {
    return res.status(400).send({
      error:
        "email, eventname, datetime,address,imageqr parameters are required",
    });
  }

  const htmlContent = event(eventname,datetime,address,imageqr);

  try {
    let info = await transporter.sendMail({
      from: "info@gully2global.com", // Sender address
      to: email, // List of receivers
      subject: `Registration pass for ${eventname}`, // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

app.post("/welcome_event", async (req, res) => {
  const { email, username, eventname } = req.body;

  if (!email || !username || !eventname) {
    return res
      .status(400)
      .send({ error: "email, username and eventname parameters are required" });
  }

  const htmlContent = welcomeevent(username, eventname);

  try {
    let info = await transporter.sendMail({
      from: "meeday@mediatekevents.online", // Sender address
      to: email, // List of receivers
      subject: "Welcome Event", // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

app.post("/feedback", async (req, res) => {
  const { email, eventname } = req.body;

  if (!email || !eventname) {
    return res
      .status(400)
      .send({ error: "email, eventname parameters are required" });
  }

  const htmlContent = feedback(eventname);

  try {
    let info = await transporter.sendMail({
      from: "info@gully2global.com", // Sender address
      to: email, // List of receivers
      subject: "Feedback", // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
